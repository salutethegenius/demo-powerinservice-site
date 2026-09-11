import { ServicePage } from "@/components/ui/ServicePage";
import { getCategory } from "@/content/services";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.commercial);

export default function CommercialCleaningPage() {
  return (
    <ServicePage
      category={getCategory("commercial-cleaning")}
      extraImageIds={["office-bright", "restroom-cleaning"]}
      audience={[
        "Property managers",
        "Facility managers",
        "Business owners",
        "Retail operators",
      ]}
      caveats={[
        "Descriptions stay practical and general. Medical-grade sanitation, infection control, OSHA certification, green certification, and specialised regulatory compliance are not claimed here.",
      ]}
      planningItems={[
        "Property type",
        "Square footage",
        "Cleaning frequency",
        "Access requirements",
        "Preferred schedule",
        "Required services",
      ]}
    />
  );
}
