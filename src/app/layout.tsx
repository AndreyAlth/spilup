/* eslint-disable jsx-a11y/alt-text */
import dynamic from 'next/dynamic';
import './globals.css';
import { Provider } from './i18n/Provider';
import { MainLayout } from './new-layout/MainLayout'
const PixelTracker = dynamic(() => import('@/app/components/facebook/Pixel'), {
  ssr: false
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Spilup</title>
      <link rel="icon" href="/assets/icons/logo_color_1.svg" />
      <body className="">
        <PixelTracker />
        <Provider>
          <MainLayout>
            {children}
          </MainLayout>
        </Provider>
      </body>
    </html>
  );
}
