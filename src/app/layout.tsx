import './globals.css'
import { Provider } from './i18n/Provider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Spilup</title>
      <link rel="icon" href="/assets/icons/logo_color_1.svg" />
      <body className="">
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
