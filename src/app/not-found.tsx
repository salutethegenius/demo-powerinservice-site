import Link from "next/link";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-forest">Page not found</h1>
        <p className="mt-4 text-muted">
          That page is not part of this website concept. Return home or request a
          site visit.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={buttonClassName("forest", "md")}>
            Home
          </Link>
          <Link href="/request-quote" className={buttonClassName("gold", "md")}>
            Request a Site Visit
          </Link>
        </div>
      </Container>
    </section>
  );
}
