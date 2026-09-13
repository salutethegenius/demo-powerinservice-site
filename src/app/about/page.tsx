import { businessSettings } from "@/content/business";
import { getImage } from "@/content/images";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";
import { StockPhoto } from "@/components/ui/StockPhoto";

export const metadata = createMetadata(pageSeo.about);

const confirmed = [
  "Patrick Moncur, President",
  `Serving Central Florida since ${businessSettings.servingSince}`,
  "Commercial and residential service",
  businessSettings.insuranceStatement,
  "Apartment and Airbnb punch-outs",
  "Cleaning, floor care, turnovers, and light maintenance",
  "IICRC certified",
  `${businessSettings.areaServed} service area`,
];

const ownerStoryParagraphs = businessSettings.ownerStory
  .split(/\n\n+/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={getImage("office-lounge")}
        eyebrow="About"
        title="More than cleaning. A dependable property-service partner."
      >
        <p className="mt-5 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">
          {businessSettings.positioning} Power In Service Inc. helps property
          managers, facility managers, apartment communities, Airbnb hosts,
          businesses, and residential clients keep spaces ready.
        </p>
      </PageHero>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading title="What we can confirm today." />
            <ul className="mt-8 space-y-4">
              {confirmed.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-charcoal">
                  <CheckIcon className="mt-0.5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 overflow-hidden rounded-lg border border-line bg-ivory lg:order-2">
            <StockPhoto
              image={getImage("patrick-moncur")}
              className="aspect-[1431/1600] h-auto w-full"
              imgClassName="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                President
              </p>
              <h2 className="mt-2 text-xl font-semibold text-forest">
                Patrick Moncur
              </h2>
              {businessSettings.slogan ? (
                <p className="mt-4 text-base font-semibold leading-7 text-forest">
                  “{businessSettings.slogan}”
                </p>
              ) : null}
              {ownerStoryParagraphs.length ? (
                ownerStoryParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-4 text-sm leading-7 text-muted">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted">
                  A longer owner biography can be added here from the central
                  content file when the owner provides it. This page does not invent
                  team size, family-owned status, awards, certifications,
                  minority-owned or veteran-owned claims, client counts, project
                  counts, or satisfaction guarantees.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
