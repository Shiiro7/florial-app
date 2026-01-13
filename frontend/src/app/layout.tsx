import type { Metadata } from 'next';
import { Nunito, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Florial Centre et Compagnie | Jardinerie à Beaumont',
    template: '%s | Florial Centre',
  },
  description: 'Votre jardinerie familiale depuis plus de 20 ans à Beaumont. Plantes, aménagement de jardins, travaux forestiers. Devis gratuit !',
  keywords: ['jardinerie', 'Beaumont', 'Belgique', 'plantes', 'aménagement jardin', 'paysagiste', 'travaux forestiers'],
  authors: [{ name: 'Florial Centre et Compagnie' }],
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://florialcentre.be',
    siteName: 'Florial Centre et Compagnie',
    title: 'Florial Centre et Compagnie | Jardinerie à Beaumont',
    description: 'Votre jardinerie familiale depuis plus de 20 ans à Beaumont. Plantes, aménagement de jardins, travaux forestiers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${nunito.variable} ${cormorant.variable}`}>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
