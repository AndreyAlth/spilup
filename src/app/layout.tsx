import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Spilup</title>
      <body className="">{children}</body>
    </html>
  );
}
