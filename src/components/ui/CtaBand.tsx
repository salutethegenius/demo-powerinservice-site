import Link from "next/link";
import { businessSettings } from "@/content/business";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icons";

export function CtaBand({
  title = "Let’s walk the property.",
  children = "Tell us what you need, and we’ll arrange a conversation about your space, schedule, and service requirements.",
}: {
  title?: string;
  children?: string;
}) {
  return (
    <section className="bg-forest py-16 text-ivory">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-ivory/80">{children}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/request-quote" className={buttonClassName("gold", "lg")}>
            Request a Site Visit
          </Link>
          <a href={businessSettings.phoneHref} className={buttonClassName("outline", "lg")}>
            <PhoneIcon />
            Call {businessSettings.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
