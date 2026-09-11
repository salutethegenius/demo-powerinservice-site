import Link from "next/link";
import { serviceCategories } from "@/content/services";
import { getImage } from "@/content/images";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";
import { ArrowIcon } from "@/components/ui/Icons";
import { clsx } from "@/lib/clsx";

export function ServiceCards() {
  return (
    <section id="services" className="bg-ivory py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="One team. More ways to keep your property ready."
        >
          From routine commercial cleaning to floor care, unit turnovers, and
          light repairs, Power In Service helps property owners reduce the number
          of vendors needed to maintain their spaces.
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => {
            const image = getImage(category.imageId);
            const secondary = category.prominence === "secondary";
            return (
              <Link
                key={category.id}
                href={category.href}
                className={clsx(
                  "group overflow-hidden rounded-lg border bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
                  secondary ? "border-line" : "border-forest/10",
                )}
              >
                <StockPhoto
                  image={image}
                  className="aspect-[16/10] h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-6">
                  {secondary ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Also available
                    </p>
                  ) : (
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      Commercial focus
                    </p>
                  )}
                  <h3 className="mt-2 text-2xl font-semibold text-forest">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {category.supporting}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                    View {category.shortName}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
