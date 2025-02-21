import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./partial/Services";
import { Contact } from "./partial/Contacto";
import { Footer } from './components/Footer'
import { Provider } from './i18n/Provider'
export default function Home() {
  return (
    <div>
      <Provider/>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}
