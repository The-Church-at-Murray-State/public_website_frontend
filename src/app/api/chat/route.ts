import { NextRequest, NextResponse } from "next/server";

type ChatMessagePair = [string, string];

type ChatRequestBody = {
  message_pairs?: ChatMessagePair[];
};

const UPSTREAM_CHAT_URL: string = "http://ec2-3-14-3-250.us-east-2.compute.amazonaws.com:81/chat";
const CHAT_ACCESS_TOKEN: string = "AIzaSyAazCWM8PRX3ktZgJIne0E5BPDuEJN3V9E1";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: ChatRequestBody = await request.json();
    const upstreamResponse: Response = await fetch(UPSTREAM_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_token: CHAT_ACCESS_TOKEN,
        message_pairs: Array.isArray(body.message_pairs) ? body.message_pairs : [],
      }),
      cache: "no-store",
    });
    return new NextResponse(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      {
        error: "Chat proxy request failed",
      },
      {
        status: 500,
      }
    );
  }
}
