import { Header } from './components/Header'
import { ImageContainer } from './components/ImageContainer'
import { Services } from './partial/services'
export default function Home() {
  return (
    <div>
      <Header/>
      <ImageContainer/>
      <Services/>
    </div>
  );
}
