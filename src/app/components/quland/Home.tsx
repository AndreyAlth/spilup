'use client';
import { Services } from 'components/quland/Services';
import { Hero } from './Hero';

export default function Home() {
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
