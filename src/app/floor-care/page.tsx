import { ServicePage } from "@/components/ui/ServicePage";
import { getCategory } from "@/content/services";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";
import { getImage } from "@/content/images";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = createMetadata(pageSeo.floorCare);

export default function FloorCarePage() {
  return (
    <>
      <ServicePage
        category={getCategory("floor-care")}
        extraImageIds={["carpet-extraction", "tile-grout-cleaning"]}
        caveats={[
          "We do not claim specific restoration methods, machinery brands, chemical names, drying times, or guaranteed stain removal.",
        ]}
        planningItems={[
          "Floor type",
          "Traffic and use",
          "Whether water extraction is needed",
          "One-time or recurring floor care",
        ]}
        showCta={false}
      />
      <section className="bg-ivory py-16">
        <Container>
          <SectionHeading
            title="Before-and-after support is ready when real project photos are approved."
          >
            The layout can hold genuine before-and-after pairs later. This concept
            does not invent comparison photographs.
          </SectionHeading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <StockPhoto
              image={getImage("tile-grout-cleaning")}
              className="aspect-[4/3] h-auto rounded-lg"
              caption
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <StockPhoto
              image={getImage("finished-wood-floors")}
              className="aspect-[4/3] h-auto rounded-lg"
              caption
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>
      <CtaBand title="Ask about the floors on your property." />
    </>
  );
}
