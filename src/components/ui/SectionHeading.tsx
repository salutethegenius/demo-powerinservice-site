import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={clsx(align === "center" && "mx-auto max-w-3xl text-center")}>
      {eyebrow ? (
        <p
          className={clsx(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            invert ? "text-gold-soft" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          invert ? "text-ivory" : "text-forest",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={clsx(
            "mt-4 max-w-2xl text-base leading-7 sm:text-lg",
            invert ? "text-ivory/80" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
