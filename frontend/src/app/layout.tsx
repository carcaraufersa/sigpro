import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import './globals.css';

export const metadata: Metadata = {
  title: 'SIGPRO',
  description: 'Sistema de Gestão da PROPPG',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}