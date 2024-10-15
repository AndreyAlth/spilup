import { Header } from "./components/Header";
import { ImageContainer } from "./components/ImageContainer";
import { Services } from "./partial/Services";
import { Contacto } from "./partial/Contacto";
export default function Home() {
  return (
    <div>
      <Header />
      <ImageContainer />
      <Services />
      <Contacto />
    </div>
  );
}
