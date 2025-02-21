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
      <body className="">
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
