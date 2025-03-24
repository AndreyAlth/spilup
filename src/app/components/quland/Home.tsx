'use client';
import AOS from 'aos';
import { Services } from 'components/quland/Services';
import { useEffect } from 'react';
import { Hero } from './Hero';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Hero />
      {/* <FeatureSection /> */}
      <Services />
      {/* <Prices /> */}
      {/* <FaqSection /> */}
      {/* <TestimonialSection /> */}
    </div>
  );
}
