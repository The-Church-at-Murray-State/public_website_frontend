"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatRole = "user" | "assistant" | "eval";
type ChatMessagePair = [ChatRole, string];

type MarkerParseResult = {
  status: "success" | "retry" | "unknown";
  answerText: string;
  evalText: string;
};

const CHAT_API_URL: string = "/api/chat";
const MAX_RETRIES_PER_QUESTION: number = 2;
const FALLBACK_MESSAGE: string = "I cannot answer that type of question.";
const STORAGE_KEY: string = "church_chat_history_v1";

function parseMarkerResponse(rawResponseText: string): MarkerParseResult {
  const retryMatchResult: RegExpMatchArray | null = rawResponseText.match(/(?:\r?\n)?---\r?\n([\s\S]*)$/);
  if (retryMatchResult && retryMatchResult.index !== undefined) {
    const answerTextBeforeMarker: string = rawResponseText.slice(0, retryMatchResult.index).trim();
    const evalText: string = (retryMatchResult[1] ?? "").trim();
    return {
      status: "retry",
      answerText: answerTextBeforeMarker,
      evalText: evalText,
    };
  }
  const successMatchResult: RegExpMatchArray | null = rawResponseText.match(/(?:\r?\n)?\+\+\+\s*$/);
  if (successMatchResult && successMatchResult.index !== undefined) {
    const answerTextBeforeMarker: string = rawResponseText.slice(0, successMatchResult.index).trim();
    return {
      status: "success",
      answerText: answerTextBeforeMarker,
      evalText: "",
    };
  }
  return {
    status: "unknown",
    answerText: rawResponseText.trim(),
    evalText: "",
  };
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [streamingAssistantText, setStreamingAssistantText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [history, setHistory] = useState<ChatMessagePair[]>([]);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);
  const activeRequestControllerRef = useRef<AbortController | null>(null);
  const activeRequestGenerationRef = useRef<number>(0);

  useEffect(() => {
    const savedRawHistory: string | null = window.localStorage.getItem(STORAGE_KEY);
    if (!savedRawHistory) {
      return;
    }
    try {
      const parsedHistory: unknown = JSON.parse(savedRawHistory);
      if (!Array.isArray(parsedHistory)) {
        return;
      }
      const hydratedHistory: ChatMessagePair[] = [];
      for (const item of parsedHistory) {
        if (!Array.isArray(item) || item.length !== 2) {
          continue;
        }
        const role: string = String(item[0]);
        const content: string = String(item[1]);
        if (role === "user" || role === "assistant" || role === "eval") {
          hydratedHistory.push([role, content]);
        }
      }
      setHistory(hydratedHistory);
    } catch {
      return;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen, isSending, streamingAssistantText]);

  const displayMessages: ChatMessagePair[] = useMemo(() => {
    return history.filter(([role]) => role === "user" || role === "assistant");
  }, [history]);

  async function callChatApiStreaming(messagePairs: ChatMessagePair[], onChunk: (chunkText: string) => void, signal: AbortSignal): Promise<string> {
    const response: Response = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message_pairs: messagePairs,
      }),
      signal: signal,
    });
    if (!response.ok) {
      throw new Error(`Chat API error: ${response.status}`);
    }
    if (!response.body) {
      const responseText: string = await response.text();
      onChunk(responseText);
      return responseText;
    }
    const reader: ReadableStreamDefaultReader<Uint8Array> = response.body.getReader();
    const decoder: TextDecoder = new TextDecoder();
    let accumulatedResponseText: string = "";
    while (true) {
      const readResult: ReadableStreamReadResult<Uint8Array> = await reader.read();
      if (readResult.done) {
        break;
      }
      const decodedChunkText: string = decoder.decode(readResult.value, { stream: true });
      accumulatedResponseText += decodedChunkText;
      onChunk(decodedChunkText);
    }
    const finalFlushText: string = decoder.decode();
    if (finalFlushText !== "") {
      accumulatedResponseText += finalFlushText;
      onChunk(finalFlushText);
    }
    return accumulatedResponseText;
  }

  async function submitQuestion(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (isSending) {
      return;
    }
    const trimmedInputText: string = inputText.trim();
    if (trimmedInputText === "") {
      return;
    }
    setInputText("");
    setIsSending(true);
    setStreamingAssistantText("");
    activeRequestGenerationRef.current += 1;
    const requestGeneration: number = activeRequestGenerationRef.current;
    const requestController: AbortController = new AbortController();
    activeRequestControllerRef.current = requestController;
    const userMessage: ChatMessagePair = ["user", trimmedInputText];
    const baseHistory: ChatMessagePair[] = [...history, userMessage];
    setHistory(baseHistory);
    try {
      let workingHistory: ChatMessagePair[] = baseHistory;
      let finalAssistantMessage: string = FALLBACK_MESSAGE;
      let wasSuccessful: boolean = false;
      for (let retryIndex: number = 0; retryIndex <= MAX_RETRIES_PER_QUESTION; retryIndex += 1) {
        if (requestGeneration !== activeRequestGenerationRef.current) {
          return;
        }
        let liveAttemptText: string = "";
        setStreamingAssistantText("");
        const rawResponseText: string = await callChatApiStreaming(workingHistory, (chunkText: string) => {
          if (requestGeneration !== activeRequestGenerationRef.current) {
            return;
          }
          liveAttemptText += chunkText;
          setStreamingAssistantText(liveAttemptText);
        }, requestController.signal);
        if (requestGeneration !== activeRequestGenerationRef.current) {
          return;
        }
        const parsedMarkerResponse: MarkerParseResult = parseMarkerResponse(rawResponseText);
        if (parsedMarkerResponse.status === "success" || parsedMarkerResponse.status === "unknown") {
          finalAssistantMessage = parsedMarkerResponse.answerText === "" ? FALLBACK_MESSAGE : parsedMarkerResponse.answerText;
          wasSuccessful = true;
          setStreamingAssistantText("");
          break;
        }
        if (parsedMarkerResponse.status === "retry" && retryIndex < MAX_RETRIES_PER_QUESTION) {
          const evalMessage: ChatMessagePair = [
            "eval",
            parsedMarkerResponse.evalText === "" ? "Quality reviewer flagged previous answer." : parsedMarkerResponse.evalText,
          ];
          workingHistory = [...workingHistory, evalMessage];
          setStreamingAssistantText("");
          continue;
        }
        finalAssistantMessage = FALLBACK_MESSAGE;
        setStreamingAssistantText("");
        break;
      }
      const assistantMessage: ChatMessagePair = ["assistant", finalAssistantMessage];
      const nextHistory: ChatMessagePair[] = wasSuccessful ? [...workingHistory, assistantMessage] : [...baseHistory, assistantMessage];
      if (requestGeneration === activeRequestGenerationRef.current) {
        setHistory(nextHistory);
      }
    } catch (error: unknown) {
      const errorName: string = error instanceof Error ? error.name : "";
      if (errorName === "AbortError" || requestGeneration !== activeRequestGenerationRef.current) {
        return;
      }
      setStreamingAssistantText("");
      const assistantMessage: ChatMessagePair = ["assistant", FALLBACK_MESSAGE];
      setHistory([...baseHistory, assistantMessage]);
    } finally {
      if (requestGeneration === activeRequestGenerationRef.current) {
        activeRequestControllerRef.current = null;
        setIsSending(false);
        setStreamingAssistantText("");
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[10000]">
      {isOpen ? (
        <div className="w-[26rem] max-w-[94vw] rounded-xl border border-neutral-300 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <p className="text-base font-semibold text-neutral-800">AI Anwers</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  activeRequestGenerationRef.current += 1;
                  activeRequestControllerRef.current?.abort();
                  activeRequestControllerRef.current = null;
                  setHistory([]);
                  setInputText("");
                  setStreamingAssistantText("");
                  setIsSending(false);
                  window.localStorage.removeItem(STORAGE_KEY);
                }}
                className="rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
              >
                Clear Context
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
              >
                Close
              </button>
            </div>
          </div>
          <div className="h-[30rem] overflow-y-auto px-3 py-3">
            <div className="mb-3 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-900">
              I can help with sermon questions, summaries, recent sermon titles, and themes from available transcript context.
            </div>
            {displayMessages.length === 0 ? (
              <p className="text-sm text-neutral-500">Ask anything about recent sermons.</p>
            ) : null}
            {displayMessages.map(([role, text], index) => (
              <div key={`${role}-${index}-${text.slice(0, 24)}`} className={`mb-3 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-base leading-relaxed ${
                    role === "user" ? "bg-blue-600 text-white" : "bg-neutral-100 text-neutral-900"
                  }`}
                >
                  {text}
                </div>
              </div>
            ))}
            {isSending ? (
              <div className="mb-2 flex justify-start">
                <div className="rounded-lg bg-neutral-100 px-3 py-2 text-sm text-neutral-600">Thinking...</div>
              </div>
            ) : null}
            {streamingAssistantText !== "" ? (
              <div className="mb-2 flex justify-start">
                <div className="max-w-[85%] rounded-lg bg-neutral-100 px-3 py-2 text-base leading-relaxed text-neutral-900">
                  {streamingAssistantText}
                </div>
              </div>
            ) : null}
            <div ref={scrollAnchorRef} />
          </div>
          <form onSubmit={submitQuestion} className="flex gap-2 border-t border-neutral-200 p-3">
            <input
              type="text"
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              disabled={isSending}
              placeholder="Type a message..."
              className="flex-1 rounded-md border border-neutral-300 px-3 py-3 text-base text-neutral-900 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={isSending}
              className="rounded-md bg-blue-600 px-4 py-3 text-base font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
        >
          AI Anwers
        </button>
      )}
    </div>
  );
}
