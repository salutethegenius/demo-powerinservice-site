import type { MetadataRoute } from "next";
import { pageSeo } from "@/content/copy";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(pageSeo).map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
