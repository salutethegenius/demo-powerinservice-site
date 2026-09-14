import { faqJsonLd, professionalServiceJsonLd } from "@/lib/seo";

export function JsonLd() {
  const documents = [professionalServiceJsonLd(), faqJsonLd()];

  return (
    <>
      {documents.map((data) => (
        <script
          key={String(data["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
