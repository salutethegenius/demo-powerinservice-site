import { HomeHero } from "@/components/ui/PageHero";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ServiceCards } from "@/components/ui/ServiceCards";
import { DecisionMaker } from "@/components/ui/DecisionMaker";
import { ResultsGallery } from "@/components/ui/ResultsGallery";
import { PropertyTypes } from "@/components/ui/PropertyTypes";
import { Process } from "@/components/ui/Process";
import { Reviews } from "@/components/ui/Reviews";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqList } from "@/components/ui/FaqList";
import { getImage } from "@/content/images";
import { pageSeo } from "@/content/copy";
import { createMetadata } from "@/lib/seo";

export const metadata = {
  ...createMetadata(pageSeo.home),
  title: { absolute: pageSeo.home.title },
};

export default function HomePage() {
  return (
    <>
      <HomeHero image={getImage("hero-commercial-floors")} />
      <TrustStrip />
      <ServiceCards />
      <DecisionMaker />
      <ResultsGallery />
      <PropertyTypes />
      <Process />
      <Reviews />
      <FaqList />
      <CtaBand />
    </>
  );
}
