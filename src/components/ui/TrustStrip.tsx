import { trustItems } from "@/content/business";
import { Container } from "@/components/ui/Container";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-white" aria-label="Trust information">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div key={item.id} className="border-l-2 border-gold pl-4">
            <p className="font-semibold text-forest">{item.label}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
