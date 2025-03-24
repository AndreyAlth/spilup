'use client';

import { FaqSection } from "@/app/components/quland/FaqSection";
import { FeatureSection } from "@/app/components/quland/FeatureSection";
import { HeroService } from "@/app/components/quland/HeroService";
import { services } from 'config/services'

function ServicesPage() {
  return (
    <div>
      <HeroService services={services} />
      <FeatureSection />
      <FaqSection />
    </div>
  );
}

export default ServicesPage;
