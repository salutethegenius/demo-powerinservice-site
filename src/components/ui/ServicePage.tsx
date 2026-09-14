import Link from "next/link";
import { getImage } from "@/content/images";
import type { ServiceCategory } from "@/content/types";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";
import { CheckIcon } from "@/components/ui/Icons";

export function ServicePage({
  category,
  extraImageIds = [],
  audience,
  caveats,
  planningItems,
  showCta = true,
}: {
  category: ServiceCategory;
  extraImageIds?: string[];
  audience?: string[];
  caveats?: string[];
  planningItems?: string[];
  showCta?: boolean;
}) {
  const hero = getImage(category.imageId);

  return (
    <>
      <PageHero image={hero} eyebrow={category.name} title={category.headline}>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">
          {category.supporting}
        </p>
        <div className="mt-8">
          <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
            Request a Site Visit
          </Link>
        </div>
      </PageHero>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading title="What this service covers." />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {category.services.map((service) => (
                <li key={service.id} className="py-5">
                  <h3 className="text-lg font-semibold text-forest">{service.name}</h3>
                  <p className="mt-2 text-base leading-7 text-muted">{service.summary}</p>
                </li>
              ))}
            </ul>
            {caveats?.length ? (
              <ul className="mt-8 space-y-2 text-base leading-7 text-muted">
                {caveats.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="space-y-4">
            <StockPhoto
              image={hero}
              className="aspect-[4/5] h-auto rounded-lg"
              sizes="(max-width: 1024px) 100vw, 40vw"
              caption
            />
            {extraImageIds.slice(0, 1).map((id) => (
              <StockPhoto
                key={id}
                image={getImage(id)}
                className="aspect-[16/10] h-auto rounded-lg"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ))}
          </div>
        </Container>
      </section>

      {audience?.length ? (
        <section className="bg-ivory py-16">
          <Container>
            <SectionHeading title="Who this page is for." />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {audience.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-line bg-white p-5 text-base font-medium text-forest"
                >
                  <CheckIcon className="mt-0.5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {planningItems?.length ? (
        <section className="bg-white py-16">
          <Container className="max-w-3xl">
            <SectionHeading title="Service details are discussed after we review the property.">
              A walkthrough or conversation typically covers:
            </SectionHeading>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {planningItems.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-charcoal">
                  <CheckIcon className="mt-1 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {showCta ? <CtaBand /> : null}
    </>
  );
}
