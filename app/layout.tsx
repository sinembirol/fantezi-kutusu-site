export const metadata = {
  title: 'Fantezi Kutusu',
  description: 'Fantezi Kutusu Ana Sayfa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}

