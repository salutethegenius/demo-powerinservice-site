import type { Metadata } from "next";
import { businessSettings } from "@/content/business";
import type { PageSeo } from "@/content/types";

export function createMetadata(page: PageSeo): Metadata {
  const robots = businessSettings.demoMode
    ? { index: false, follow: false }
    : { index: true, follow: true };

  return {
    title: page.title,
    description: page.description,
    robots,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "en_US",
      siteName: businessSettings.businessName,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function professionalServiceJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: businessSettings.businessName,
    telephone: businessSettings.phoneDisplay,
    email: businessSettings.primaryEmail,
    areaServed: [
      { "@type": "City", name: "Orlando" },
      { "@type": "AdministrativeArea", name: "Central Florida" },
    ],
    description:
      "Commercial cleaning, floor care, property turnovers, and light maintenance throughout Orlando and Central Florida.",
    foundingDate: String(businessSettings.servingSince),
    priceRange: undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floor and surface care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property turnovers" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Light property maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential cleaning" } },
      ],
    },
  };

  if (businessSettings.websiteUrl) {
    data.url = businessSettings.websiteUrl;
  }

  return data;
}
