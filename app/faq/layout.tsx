import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV Deutschland FAQ | Setup, Sender & Hilfe`
); // ~49 chars

const PAGE_DESCRIPTION = clampDescription(
  `Antworten zu den häufigsten Fragen zu IPTV Deutschland. 4K IPTV Streaming, Smart TV Setup, EUR Zahlungen, kostenloser Test und 24/7 WhatsApp Support.`
); // ~155 chars

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv deutschland faq',
    'iptv deutschland setup hilfe',
    'besten iptv anbieter',
    'iptv deutschland',
    'iptv kaufen',
    'iptv abonnement deutschland',
    'iptv smart tv deutschland',
    'iptv firestick deutschland',
    'iptv deutschland zahlung',
    'iptv deutschland support',
    'iptv setup deutschland',
    'iptv service deutschland',
    'kostenlos iptv test',
    'iptv extreme',
    'bundesliga iptv live',
    'champions league iptv stream',
    'formel 1 iptv deutschland',
    'iptv legal',
    'iptv ohne vertragslaufzeit',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'de-DE': PAGE_URL,
      'de-AT': PAGE_URL,
      'de-CH': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `IPTV Deutschland FAQ - Help Center und Antworten`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
