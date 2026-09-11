import { ServicePage } from "@/components/ui/ServicePage";
import { getCategory } from "@/content/services";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.property);

export default function PropertyServicesPage() {
  return (
    <ServicePage
      category={getCategory("property-services")}
      extraImageIds={["apartment-interior", "sheetrock-trowel", "handyman-repair"]}
      audience={[
        "Property managers",
        "Landlords",
        "Apartment communities",
        "Real estate professionals",
        "Owners preparing a property for occupancy",
      ]}
      caveats={[
        "This is light property maintenance. Licensed electrical, plumbing, roofing, structural, or regulated construction work is not offered or implied.",
      ]}
      planningItems={[
        "Unit or home condition",
        "Whether painting or sheetrock work is needed",
        "Move-in or move-out timing",
        "Access and occupancy constraints",
      ]}
    />
  );
}
