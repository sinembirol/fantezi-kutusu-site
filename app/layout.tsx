// app/layout.tsx
import React from 'react'; // BU SATIRI EKLE!
import './globals.css'; // Bu dosya henüz yoksa silebilirsin
import type { Metadata } from 'next';

export const metadata: Metadata = {
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
