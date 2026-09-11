import { businessSettings } from "@/content/business";
import { getImage, representativeGalleryIds } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";

export function ResultsGallery() {
  return (
    <section className="bg-forest-dark py-20 text-ivory">
      <Container>
        <SectionHeading invert eyebrow="Presentation" title="Results you can see.">
          {businessSettings.stockDisclosure}
        </SectionHeading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {representativeGalleryIds.map((id) => {
            const image = getImage(id);
            return (
              <StockPhoto
                key={id}
                image={image}
                className="aspect-[4/3] h-auto rounded-md"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
