import { Header } from './components/Header'
export default function Home() {
  const headers = [
    { id: 2, label: "Home", href: "#" },
    { id: 3, label: "Servicios", href: "#" },
    { id: 4, label: "Contacto", href: "#" },
  ];
  return (
    <div>
      <Header/>
    </div>
  );
}
