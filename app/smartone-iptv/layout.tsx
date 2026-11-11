// app/smartone-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/smartone-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `SmartOne IPTV Deutschland | 4K Streaming & 36.000 Sender`
);

const PAGE_DESCRIPTION = clampDescription(
  `SmartOne IPTV Deutschland: 4K, 36.000+ Live TVs, 120.000+ Filme. Kostenlos testen, WhatsApp Setup, Euro-Preise ohne Vertrag.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'smartone iptv',
    'smartone iptv deutschland',
    'smartone iptv abonnement',
    'smartone iptv service',
    'smartone iptv anbieter',
    'besten smartone iptv',
    'smartone iptv test',
    'smartone iptv preis',
    'iptv deutschland',
    'iptv kaufen',
    'besten iptv anbieter',
    'iptv abonnement deutschland',
    'iptv service deutschland',
    '4k iptv kaufen',
    'iptv setup deutschland',
    'iptv ohne vertragslaufzeit',
    'kostenlos iptv test',
    'iptv extreme',
    'bundesliga iptv live',
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
        alt: `SmartOne IPTV Deutschland - 36.000+ Live TVs in 4K IPTV Ultra HD`,
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

const SmartOnePageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} ist ein vertrauenswürdiger IPTV Anbieter für Deutschland, Österreich und die Schweiz mit 36.000 Live TVs und 120.000 Filmen und Serien in 4K IPTV Ultra HD.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Besten IPTV Anbieter Deutschland`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'SmartOne IPTV', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'SmartOne IPTV Deutschland Abonnement',
        sku: 'SMARTONE-IPTV-DE',
        category: 'Streaming Service',
        description: `SmartOne IPTV in Deutschland von ${BRAND}. Streamen Sie 36.000+ Live TVs und 120.000+ Filme und Serien in 4K IPTV Ultra HD. Geführtes WhatsApp Setup, kostenloser Test verfügbar, EUR Preise ohne Vertragslaufzeit.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Gerät - 3 Monate',
            priceCurrency: 'EUR',
            price: '30.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 3-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 6 Monate',
            priceCurrency: 'EUR',
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 6-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 12 Monate',
            priceCurrency: 'EUR',
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 12-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 3-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 6-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 12-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 3-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 6-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '95.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'SmartOne IPTV 12-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist SmartOne IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SmartOne IPTV ist ein Premium-Streaming-Dienst, der Live-TV-Sender, Filme und Serien über Ihre Internetverbindung liefert. In Deutschland bietet unser SmartOne IPTV Service 36.000+ Live TVs und 120.000+ Filme und Serien in 4K IPTV Ultra HD – mit geführtem WhatsApp Setup und Preisen in Euro.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel kostet SmartOne IPTV in Deutschland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SmartOne IPTV Pakete beginnen bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-VIP Paket kostet 79 € und spart bis zu 50%. Multi-Screen Pakete sind für 2 oder 3 Geräte im Haushalt verfügbar.',
            },
          },
          {
            '@type': 'Question',
            name: 'Gibt es einen kostenlosen Test für SmartOne IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Schreiben Sie uns per WhatsApp, und wir richten Ihnen einen kostenlosen 24-Stunden SmartOne IPTV Test ein. Prüfen Sie das 4K IPTV Bild, sehen Sie sich das Senderangebot an und überzeugen Sie sich, dass auf Ihrem Gerät alles flüssig läuft, bevor Sie auf ein bezahltes Paket upgraden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Geräte funktionieren mit SmartOne IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SmartOne IPTV funktioniert auf Amazon Firestick, Samsung und LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG oder Formuler Set-Top-Boxen. Unser Team unterstützt Sie bei Installation und Konfiguration einer App wie IPTV Extreme oder IBO Player Pro – per WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Brauche ich ein VPN für SmartOne IPTV in Deutschland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ein VPN ist nicht erforderlich. Unsere SmartOne IPTV Server sind auf deutsche, österreichische und schweizerische ISPs abgestimmt, damit Sie auf Ihrer Heimverbindung reibungslos und pufferfrei streamen können.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell ist das SmartOne IPTV Setup?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die meisten Kunden streamen innerhalb von 10 Minuten. Sie wählen Ihr Paket, schreiben uns auf WhatsApp, und unser Team begleitet Sie Schritt für Schritt durch die Installation, bis alles reibungslos funktioniert.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich SmartOne IPTV auf mehreren TVs gleichzeitig nutzen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Entscheiden Sie sich beim Checkout für das 2-Screen- oder 3-Screen-Paket, und mehrere Haushaltsmitglieder können gleichzeitig unterschiedliche Inhalte ohne Unterbrechung ansehen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Sender umfasst SmartOne IPTV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SmartOne IPTV enthält alle großen deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX), Live-Sport-Sender (Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL, Handball) sowie Tausende internationale Sender aus UK, USA, Österreich, Schweiz, Frankreich, Italien, Spanien und mehr.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="smartone-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function SmartOneIPTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <SmartOnePageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}