import { processSteps } from "@/content/business";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward way to get started."
        >
          Commercial work is planned after we understand the property. This is
          not an instant-pricing tool.
        </SectionHeading>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="rounded-lg border border-line bg-ivory p-6"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-gold">
                0{step.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-forest">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
