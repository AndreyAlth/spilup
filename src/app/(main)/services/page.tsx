'use client';

import { FaqSection } from "@/app/components/quland/FaqSection";
import { FeatureSection } from "@/app/components/quland/FeatureSection";
import { HeroService } from "@/app/components/quland/HeroService";

function Services() {
  return (
    <div>
      <HeroService />
      <FeatureSection />
      <FaqSection />
    </div>
  );
}

export default Services;
