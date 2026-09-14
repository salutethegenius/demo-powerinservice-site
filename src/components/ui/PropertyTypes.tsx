import { propertyTypes } from "@/content/property-types";
import { getImage } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";

export function PropertyTypes() {
  return (
    <section className="bg-ivory py-20">
      <Container>
        <SectionHeading
          eyebrow="Properties"
          title="Solutions for the spaces you manage."
        >
          These are the kinds of spaces Power In Service can discuss. This is
          not a list of named current clients.
        </SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {propertyTypes.map((type) => {
            const image = getImage(type.imageId);
            return (
              <article
                key={type.id}
                className="overflow-hidden rounded-lg border border-line bg-white"
              >
                <StockPhoto
                  image={image}
                  className="aspect-[5/3] h-auto"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-forest">{type.name}</h3>
                  <p className="mt-2 text-base leading-7 text-muted">{type.summary}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
