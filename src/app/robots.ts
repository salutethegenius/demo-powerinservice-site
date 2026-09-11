import { businessSettings } from "@/content/business";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (businessSettings.demoMode) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: businessSettings.websiteUrl
      ? `${businessSettings.websiteUrl}/sitemap.xml`
      : undefined,
  };
}
