import { QuoteForm } from "@/components/forms/QuoteForm";
import { businessSettings } from "@/content/business";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createMetadata(pageSeo.quote);

export default function RequestQuotePage() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            level={1}
            eyebrow="Site visit"
            title="Request a walkthrough or free estimate."
          >
            Tell us about the property so we can arrange a conversation about
            your space, schedule, and service requirements. Commercial work is
            not priced instantly from this form.
          </SectionHeading>
          <dl className="mt-10 space-y-4 text-base leading-7">
            <div>
              <dt className="font-semibold text-forest">Telephone</dt>
              <dd>
                <a className="text-muted hover:text-forest" href={businessSettings.phoneHref}>
                  {businessSettings.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">Email</dt>
              <dd>
                <a
                  className="text-muted hover:text-forest"
                  href={`mailto:${businessSettings.primaryEmail}`}
                >
                  {businessSettings.primaryEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">Service area</dt>
              <dd className="text-muted">{businessSettings.areaServed}</dd>
            </div>
          </dl>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
