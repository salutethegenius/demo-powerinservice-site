import type { Metadata } from "next";
import { businessSettings } from "@/content/business";
import { faqs } from "@/content/copy";
import type { PageSeo } from "@/content/types";

export function absoluteUrl(path: string): string {
  const base = businessSettings.websiteUrl.replace(/\/$/, "");
  return path === "/" ? base : `${base}${path}`;
}

export function createMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);
  const robots = businessSettings.demoMode
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      };

  return {
    title: page.title,
    description: page.description,
    robots,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "en_US",
      siteName: businessSettings.businessName,
      url,
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
    "@id": `${absoluteUrl("/")}/#business`,
    name: businessSettings.businessName,
    telephone: "+16893474320",
    email: businessSettings.primaryEmail,
    url: absoluteUrl("/"),
    image: absoluteUrl("/opengraph-image"),
    sameAs: [businessSettings.angiUrl],
    areaServed: [
      { "@type": "City", name: "Orlando" },
      { "@type": "AdministrativeArea", name: "Central Florida" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    description:
      "Commercial cleaning, floor care, apartment and Airbnb punch-outs, and light maintenance throughout Orlando and Central Florida.",
    foundingDate: String(businessSettings.servingSince),
    slogan: businessSettings.slogan,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Property services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floor and surface care" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apartment punch-outs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airbnb punch-outs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Property turnovers" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Light property maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential cleaning" } },
      ],
    },
  };

  return data;
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
