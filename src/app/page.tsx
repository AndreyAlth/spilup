import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./partial/Services";
import { Contact } from "./partial/Contacto";
import { Footer } from './components/Footer'
import { Provider } from './i18n/Provider'
import { PageLayout } from './new-layout/PageLayout'
import { LandingHeader } from '@/app/components/quland/LandingHeader'

export default function Home() {
  return (
    <div>
      <PageLayout>
        <div className="home-four relative bg-[#0a0118] w-full overflow-x-hidden">
          <LandingHeader />
        </div>
      </PageLayout>
      {/* <Provider/>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer/> */}
    </div>
  );
}
