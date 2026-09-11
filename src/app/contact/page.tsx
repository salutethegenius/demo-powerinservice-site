import { businessSettings } from "@/content/business";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhoneIcon } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata = createMetadata(pageSeo.contact);

export default function ContactPage() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading level={1} eyebrow="Contact" title="Call, email, or request a site visit.">
          There is no public street address on this website because one has not
          been supplied for publication.
        </SectionHeading>
        <div className="mt-10 grid gap-4">
          <a
            href={businessSettings.phoneHref}
            className="rounded-lg border border-line bg-white p-6 text-lg font-semibold text-forest"
          >
            {businessSettings.phoneDisplay}
            <span className="mt-1 block text-sm font-normal text-muted">
              Primary telephone
            </span>
          </a>
          <a
            href={`mailto:${businessSettings.primaryEmail}`}
            className="rounded-lg border border-line bg-white p-6 text-lg font-semibold text-forest"
          >
            {businessSettings.primaryEmail}
            <span className="mt-1 block text-sm font-normal text-muted">
              Primary email
            </span>
          </a>
          <p className="rounded-lg border border-line bg-white p-6 text-lg font-semibold text-forest">
            {businessSettings.areaServed}
            <span className="mt-1 block text-sm font-normal text-muted">
              Service area
            </span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
            Request a Site Visit
          </Link>
          <a href={businessSettings.phoneHref} className={buttonClassName("forest", "lg")}>
            <PhoneIcon />
            Call {businessSettings.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
