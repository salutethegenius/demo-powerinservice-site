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
        <SectionHeading level={1} title="Privacy">
          How Power In Service Inc. handles information submitted through this
          website.
        </SectionHeading>
        <div className="mt-10 space-y-6 text-base leading-7 text-muted">
          <p>
            The request form on this website collects contact and property
            details so we can follow up about a site visit or estimate. Typical
            fields include name, company name, email, phone, property address,
            city, ZIP code, property type, square footage, requested services,
            timing preferences, and any notes you choose to share.
          </p>
          <p>
            Submitted information is emailed to {businessSettings.businessName}{" "}
            at{" "}
            <a
              className="font-medium text-forest underline"
              href={`mailto:${businessSettings.primaryEmail}`}
            >
              {businessSettings.primaryEmail}
            </a>
            . It is used only to contact you about the requested work. We do not
            sell this information. Photo uploads are not collected on this
            website.
          </p>
          <p>
            This site does not use advertising or analytics cookies. Essential
            hosting and form-delivery services process the request so it can
            reach us.
          </p>
          <p>
            To ask a question about information you submitted, or to request that
            we delete a quote request, contact us at{" "}
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
            . Do not include financial, identity, medical, or insurance details
            in a quote request.
          </p>
        </div>
      </Container>
    </section>
  );
}
