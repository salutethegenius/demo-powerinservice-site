import { managerChecklist } from "@/content/business";
import { getImage } from "@/content/images";
import { CheckIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StockPhoto } from "@/components/ui/StockPhoto";

export function DecisionMaker() {
  const image = getImage("commercial-office");

  return (
    <section className="bg-white py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="For decision-makers"
            title="Built for property managers and business owners."
          >
            Power In Service can assess a property, understand its service
            requirements, and prepare an appropriate plan. Commercial cleaning,
            floor care, and light property maintenance can be discussed together
            so you are not coordinating extra vendors for every task.
          </SectionHeading>
          <ul className="mt-8 space-y-3">
            {managerChecklist.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-charcoal">
                <span className="mt-1 text-gold">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <StockPhoto
          image={image}
          className="aspect-[4/3] h-auto rounded-lg"
          sizes="(max-width: 1024px) 100vw, 50vw"
          caption
        />
      </Container>
    </section>
  );
}
