import { businessSettings } from "@/content/business";
import { clsx } from "@/lib/clsx";

export function DemoNotice({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  const tone = inverted ? "text-ivory/70" : "text-muted";

  if (compact) {
    return (
      <p className={clsx("text-[0.7rem] leading-5", tone)}>
        {businessSettings.demoNotice}
      </p>
    );
  }

  return (
    <div className="border-b border-line bg-ivory">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-[0.7rem] leading-5 text-muted sm:px-6">
        {businessSettings.demoNotice}
      </p>
    </div>
  );
}
