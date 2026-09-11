import { faqs } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqList() {
  return (
    <section className="bg-white py-20">
      <Container className="max-w-3xl">
        <SectionHeading title="Common questions" />
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.id} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-forest">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-gold group-open:hidden">+</span>
                  <span className="hidden text-gold group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
