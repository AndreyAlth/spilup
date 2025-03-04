import Home from "components/quland/Home"

export const metadata = {
  title: "Mi landing page optimizada",
  description: "Esta es la descripción optimizada para SEO.",
  openGraph: {
    title: "Mi landing page",
    description: "Esta es la descripción optimizada para SEO.",
    images: [
      { url: "/og-image.png" }
    ]
  }
}

export default function Page() {
  return <Home />
}
