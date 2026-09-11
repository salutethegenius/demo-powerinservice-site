import { professionalServiceJsonLd } from "@/lib/seo";

export function JsonLd() {
  const data = professionalServiceJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
