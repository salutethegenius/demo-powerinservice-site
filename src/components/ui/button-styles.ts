import { clsx } from "@/lib/clsx";

const variants = {
  gold:
    "bg-gold text-charcoal hover:bg-gold-soft",
  forest:
    "bg-forest text-ivory hover:bg-forest-dark",
  outline:
    "border border-ivory/70 bg-transparent text-ivory hover:bg-ivory hover:text-forest",
  outlineDark:
    "border border-forest/20 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  phone:
    "bg-ivory text-forest hover:bg-white",
} as const;

const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-[3.25rem] px-6 text-[0.95rem]",
} as const;

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide transition-colors duration-200 no-underline";

export function buttonClassName(
  variant: ButtonVariant = "gold",
  size: ButtonSize = "md",
  className?: string,
) {
  return clsx(base, variants[variant], sizes[size], className);
}

export type { ButtonVariant, ButtonSize };
