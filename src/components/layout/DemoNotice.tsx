import { businessSettings } from "@/content/business";

export function DemoNotice({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-[0.7rem] leading-5 text-muted">
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
