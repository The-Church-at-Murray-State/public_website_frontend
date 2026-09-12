import type { ReactNode } from "react";

type FundraisingMeterProps = {
  title: string;
  raised: number;
  goal: number;
  // Shown after the amount remaining, e.g. "weekly" -> "(updated weekly)".
  updateFrequency?: string;
  // Description of the campaign, shown under the title.
  children?: ReactNode;
};

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function FundraisingMeter({ title, raised, goal, updateFrequency, children }: FundraisingMeterProps) {
  // Clamp so an over-funded or mistyped total can't push the fill past the track.
  const ratio = goal > 0 ? Math.min(Math.max(raised / goal, 0), 1) : 0;
  const percent = Math.round(ratio * 100);
  const remaining = Math.max(goal - raised, 0);
  const summary = `${usd.format(raised)} raised of ${usd.format(goal)} goal`;

  return (
    <div className="bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-church-blue mb-6 text-center">{title}</h2>


      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
        <p>
          <span className="text-3xl font-semibold text-church-blue">{usd.format(raised)}</span>{" "}
          <span className="text-lg text-gray-600">raised of {usd.format(goal)} goal</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">{percent}% funded</p>
      </div>

      {/* Same-ramp track: the unfilled part is a light step of the fill's hue, so the
          whole bar reads as one measure. title gives the exact figures on hover. */}
      <div
        role="progressbar"
        aria-label={title}
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-valuenow={raised}
        aria-valuetext={summary}
        title={summary}
        className="h-[12px] w-full rounded-[4px] bg-meter-track overflow-hidden"
      >
        <div
          className="h-full rounded-[4px] bg-meter-fill"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>

      <p className="text-gray-600 mt-3">
        {usd.format(remaining)} to go{updateFrequency && ` (updated ${updateFrequency})`}
      </p>

      {children && (
        <p className="text-base text-gray-700 leading-relaxed mt-6">{children}</p>
      )}
    </div>
  );
}
