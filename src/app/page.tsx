import { PageLayout } from './new-layout/PageLayout'
import { LandingHeader } from '@/app/components/quland/LandingHeader'
import { Hero } from '@/app/components/quland/Hero'
import { FeatureSection } from '@/app/components/quland/FeatureSection'
import { Footer } from 'components/quland/Footer'
import { TestimonialSection } from 'components/quland/TestimonialSection'
import { FaqSection } from 'components/quland/FaqSection'
import { Prices} from 'components/quland/Prices'
import { Services } from 'components/quland/Services'

export default function Home() {
  return (
    <div>
      <PageLayout>
        <div className="home-four relative bg-[#0a0118] w-full overflow-x-hidden">
          <LandingHeader />
          <Hero />
          <FeatureSection />
          <Services />
          <Prices />
          <FaqSection />
          <TestimonialSection />
          <Footer/>
        </div>
      </PageLayout>
    </div>
  );
}
