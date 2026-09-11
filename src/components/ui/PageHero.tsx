import Link from "next/link";
import { businessSettings } from "@/content/business";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icons";
import { StockPhoto } from "@/components/ui/StockPhoto";
import { clsx } from "@/lib/clsx";
import type { SiteImage } from "@/content/types";

export function PageHero({
  image,
  eyebrow,
  title,
  children,
  overlay = true,
}: {
  image: SiteImage;
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden bg-forest-dark">
      <StockPhoto
        image={image}
        preload
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName={overlay ? "scale-105 object-cover" : "object-cover"}
      />
      <div
        className={clsx(
          "absolute inset-0",
          overlay &&
            "bg-gradient-to-r from-forest-dark/90 via-forest-dark/78 to-forest-dark/35",
        )}
      />
      <Container className="relative flex min-h-[28rem] items-end py-16 sm:min-h-[32rem] sm:py-20">
        <div className="max-w-3xl text-ivory">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function HomeHero({ image }: { image: SiteImage }) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-dark">
      <StockPhoto
        image={image}
        preload
        sizes="100vw"
        className="absolute inset-0 h-full min-h-[36rem] w-full sm:min-h-[40rem]"
        imgClassName="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/82 to-forest-dark/25" />
      <Container className="relative flex min-h-[36rem] items-center py-20 sm:min-h-[42rem]">
        <div className="max-w-2xl text-ivory">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
            {businessSettings.areaServed}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Commercial Cleaning That Keeps Business Moving.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/85 sm:text-lg">
            Commercial cleaning, floor care, property turnovers, and light
            maintenance for businesses and properties throughout Orlando and
            Central Florida.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
              Request a Site Visit
            </Link>
            <Link href="#services" className={buttonClassName("outline", "lg")}>
              Explore Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-ivory/75">
            Serving Central Florida since {businessSettings.servingSince}.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
        Request a Site Visit
      </Link>
      <a href={businessSettings.phoneHref} className={buttonClassName("outline", "lg")}>
        <PhoneIcon />
        Call {businessSettings.phoneDisplay}
      </a>
    </div>
  );
}
