import type { MetadataRoute } from "next";
import { businessSettings } from "@/content/business";
import { pageSeo } from "@/content/copy";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessSettings.websiteUrl || "https://example.invalid";
  return Object.values(pageSeo).map((page) => ({
    url: `${base}${page.path}`,
    lastModified: new Date(),
  }));
}
