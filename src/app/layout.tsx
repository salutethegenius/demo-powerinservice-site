import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { JsonLd } from "@/components/ui/JsonLd";
import { businessSettings } from "@/content/business";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata(pageSeo.home),
  title: {
    default: pageSeo.home.title,
    template: `%s | ${businessSettings.businessName}`,
  },
  applicationName: businessSettings.businessName,
  metadataBase: businessSettings.websiteUrl
    ? new URL(businessSettings.websiteUrl)
    : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-charcoal">
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
