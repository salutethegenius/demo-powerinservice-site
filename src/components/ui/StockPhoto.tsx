import Image from "next/image";
import { clsx } from "@/lib/clsx";
import { businessSettings } from "@/content/business";
import type { SiteImage } from "@/content/types";

export function StockPhoto({
  image,
  className,
  imgClassName,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  caption = false,
}: {
  image: SiteImage;
  className?: string;
  imgClassName?: string;
  preload?: boolean;
  sizes?: string;
  caption?: boolean;
}) {
  const isStock = image.sourceType === "stock" || !image.ownershipVerified;

  return (
    <figure className={clsx("overflow-hidden bg-forest-dark", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        preload={preload}
        loading={preload ? "eager" : "lazy"}
        sizes={sizes}
        className={clsx("h-full w-full object-cover", imgClassName)}
      />
      {caption && isStock ? (
        <figcaption className="bg-forest-dark/95 px-3 py-2 text-xs leading-5 text-ivory/70">
          {businessSettings.stockDisclosure}
        </figcaption>
      ) : null}
    </figure>
  );
}
