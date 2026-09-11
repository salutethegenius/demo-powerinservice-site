import { businessSettings } from "@/content/business";
import { getImage } from "@/content/images";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/ui/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata = createMetadata(pageSeo.about);

const confirmed = [
  `Serving Central Florida since ${businessSettings.servingSince}`,
  "Commercial and residential service",
  businessSettings.insuranceStatement,
  "Cleaning, floor care, turnovers, and light maintenance",
  `${businessSettings.areaServed} service area`,
];

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
          managers, facility managers, apartment communities, businesses, and
          residential clients keep spaces ready.
        </p>
      </PageHero>

      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
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
          <div className="rounded-lg border border-line bg-ivory p-8">
            <h2 className="text-xl font-semibold text-forest">Owner’s story</h2>
            {businessSettings.ownerStory ? (
              <p className="mt-4 text-sm leading-7 text-muted">
                {businessSettings.ownerStory}
              </p>
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
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
