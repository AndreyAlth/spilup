"use client";
import AOS from 'aos'; 
import { PageLayout } from './new-layout/PageLayout'
import { LandingHeader } from '@/app/components/quland/LandingHeader'
import { Hero } from '@/app/components/quland/Hero'
// import { FeatureSection } from '@/app/components/quland/FeatureSection'
import { Footer } from 'components/quland/FooterLanding'
// import { TestimonialSection } from 'components/quland/TestimonialSection'
// import { FaqSection } from 'components/quland/FaqSection'
// import { Prices} from 'components/quland/Prices'
// import { Services } from 'components/quland/Services'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <PageLayout>
        <div className="home---save-dev @types/aosfour relative bg-[#0a0118] w-full overflow-x-hidden">
          <LandingHeader />
          <Hero />
          {/* <FeatureSection /> */}
          {/* <Services /> */}
          {/* <Prices /> */}
          {/* <FaqSection /> */}
          {/* <TestimonialSection /> */}
          <Footer/>
        </div>
      </PageLayout>
    </div>
  );
}
