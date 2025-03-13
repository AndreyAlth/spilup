/* eslint-disable jsx-a11y/alt-text */
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
      {/* <!-- Meta Pixel Code --> */}
      <script>
      {`!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1578510512784071');
      fbq('track', 'PageView');`}
      </script>
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=1578510512784071&ev=PageView&noscript=1" />
      </noscript>

      <link rel="icon" href="/assets/icons/logo_color_1.svg" />
      <body className="">
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
