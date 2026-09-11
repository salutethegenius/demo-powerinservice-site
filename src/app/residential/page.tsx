import { ServicePage } from "@/components/ui/ServicePage";
import { getCategory } from "@/content/services";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pageSeo.residential);

export default function ResidentialPage() {
  return (
    <ServicePage
      category={getCategory("residential")}
      extraImageIds={["home-ready", "bathroom-tile"]}
      caveats={[
        "Residential customers request an estimate. This website is not an instant-booking platform.",
      ]}
      planningItems={[
        "Home size",
        "Rooms or floors that need attention",
        "Whether painting, sheetrock, or repairs are involved",
        "Preferred timing",
      ]}
    />
  );
}
