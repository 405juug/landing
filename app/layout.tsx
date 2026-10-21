import type { Metadata } from "next";
import { Montserrat, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import React from "react";

const sans = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['200', '300', '500', '700', '800'],
  variable: '--font-sans',
});

const serif = Source_Serif_4({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Authentik - Create honestly',
  description: 'We help creative entrepreneurs build an honest brand & digital platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
