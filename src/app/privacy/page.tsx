import { businessSettings } from "@/content/business";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = createMetadata(pageSeo.privacy);

export default function PrivacyPage() {
  return (
    <section className="bg-ivory py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionHeading title="Privacy">
          This is a website concept prepared for {businessSettings.businessName}{" "}
          review. It is not a live public launch.
        </SectionHeading>
        <div className="mt-10 space-y-6 text-sm leading-7 text-muted">
          <p>
            The request form on this concept does not submit, store, or email
            information. Do not enter financial, identity, medical, or insurance
            details.
          </p>
          <p>
            When a live website is approved, form delivery, analytics, and any
            cookies will be documented here before collection begins.
          </p>
          <p>
            Contact {businessSettings.businessName} at{" "}
            <a
              className="font-medium text-forest underline"
              href={`mailto:${businessSettings.primaryEmail}`}
            >
              {businessSettings.primaryEmail}
            </a>{" "}
            or{" "}
            <a className="font-medium text-forest underline" href={businessSettings.phoneHref}>
              {businessSettings.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
