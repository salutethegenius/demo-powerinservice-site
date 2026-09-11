import Link from "next/link";
import { clsx } from "@/lib/clsx";
import { businessSettings } from "@/content/business";

type WordmarkProps = {
  href?: string;
  inverted?: boolean;
  className?: string;
};

export function Wordmark({
  href = "/",
  inverted = false,
  className,
}: WordmarkProps) {
  const content = (
    <span className={clsx("block leading-none", className)}>
      <span
        className={clsx(
          "block whitespace-nowrap text-[0.95rem] font-extrabold tracking-[0.16em] sm:text-[1.05rem]",
          inverted ? "text-ivory" : "text-forest",
        )}
      >
        {businessSettings.wordmarkPrimary}
      </span>
      <span
        className={clsx(
          "mt-1 block whitespace-nowrap text-[0.62rem] font-semibold tracking-[0.22em] sm:text-[0.68rem]",
          inverted ? "text-gold-soft" : "text-gold",
        )}
      >
        {businessSettings.wordmarkSecondary}
      </span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="inline-block shrink-0 rounded-sm"
      aria-label={`${businessSettings.businessName} home`}
    >
      {content}
    </Link>
  );
}
