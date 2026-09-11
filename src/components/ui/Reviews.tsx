import { businessSettings } from "@/content/business";
import { reviewSummary, reviews } from "@/content/reviews";
import { buttonClassName } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  const featured = reviews[0];

  return (
    <section className="bg-ivory py-20">
      <Container>
        <SectionHeading eyebrow="Reviews" title="Trusted for dependable service.">
          Verified Angi information currently shows a {reviewSummary.rating.toFixed(1)} rating
          from {reviewSummary.reviewCount} reviews
          {reviewSummary.recommendationPercent
            ? `, with ${reviewSummary.recommendationPercent} percent recommendation on some Angi listings`
            : ""}
          . We do not present a larger review count than that.
        </SectionHeading>
        {featured?.excerpt ? (
          <blockquote className="mt-10 max-w-3xl border-l-4 border-gold bg-white px-6 py-8">
            <p className="text-xl leading-8 text-charcoal">“{featured.excerpt}”</p>
            <footer className="mt-4 text-sm text-muted">
              {featured.attribution}
              {featured.dateLabel ? ` · ${featured.dateLabel}` : ""}
            </footer>
          </blockquote>
        ) : null}
        <a
          href={businessSettings.angiUrl}
          className={`${buttonClassName("outlineDark", "md")} mt-8`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Reviews on Angi
        </a>
        <p className="mt-3 max-w-xl text-xs leading-5 text-muted">
          The Angi link is configurable and should be confirmed before public
          launch. The current listing may still use a former business name.
        </p>
      </Container>
    </section>
  );
}
