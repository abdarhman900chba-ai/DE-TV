// app/einrichtung/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/einrichtung`;

const PAGE_TITLE = clampTitle(
  `Setup | Firestick, Smart TV & Mobil`
);

const PAGE_DESCRIPTION = clampDescription(
  `Setup für Firestick, Smart TV, Android & iOS. Player in 10 Min installieren – WhatsApp Hilfe, gratis Test.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Setup Anleitung für Firestick, Smart TV und Mobil`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    'setup',
    'firestick einrichtung',
    'smart tv installieren',
    'player setup',
    'einrichtung anleitung',
    'kostenlos testen',
  ],
};

const SetupPageSchema = () => {
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
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}/#howto`,
        name: `Setup auf jedem Gerät`,
        description: `Komplette Schritt-für-Schritt Installationsanleitung für ${BRAND} auf Firestick, Smart TV, Android, Apple TV und PC oder Mac. Geführtes WhatsApp Setup und ein kostenloser Test.`,
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '39.00',
        },
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: 1200,
          height: 630,
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV, Firestick, Android TV, Apple TV oder PC oder Mac',
          },
          {
            '@type': 'HowToSupply',
            name: 'Stabile Internetverbindung',
          },
          {
            '@type': 'HowToSupply',
            name: `Aktives ${BRAND} Abonnement oder kostenloser Test`,
          },
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'Player',
          },
          {
            '@type': 'HowToTool',
            name: 'WhatsApp (für 24/7 Setup Support)',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Paket Wählen',
            text: `Besuchen Sie die Preise Seite und wählen Sie ein ${BRAND} Abonnement.`,
            url: `${SITE_URL}/preise`,
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Support per WhatsApp Kontaktieren',
            text: 'Schreiben Sie unserem Team per WhatsApp für schnelle Hilfe und Setup.',
            url: CONSTANTS.CONTACT?.whatsappUrl || '#',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Player Installieren',
            text: 'Installieren Sie den Player auf Ihrem Gerät.',
            url: 'https://iboplayer.pro/',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Auto oder Manuelles Setup Wählen',
            text: 'Wählen Sie Auto Setup oder manuelle Eingabe.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Inhalte Laden',
            text: 'Nach der Aktivierung lädt der Player Ihre Inhalte automatisch.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'Kostenlos Testen',
            text: 'Testen Sie alles im kostenlosen Test.',
          },
          {
            '@type': 'HowToStep',
            position: 7,
            name: 'Streaming Starten',
            text: 'Genießen Sie sofortigen Zugriff auf Inhalte.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie erhalte ich meine Zugangsdaten nach dem Kauf?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Alles wird live per WhatsApp geregelt. Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, sendet unser Team Ihre Setup-Details direkt im Chat.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welchen Player empfehlen Sie?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wir empfehlen unsere Top-Player für das schnellste Zappen und die beste Leistung.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Muss ich den Player separat aktivieren?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der Aktivierungsservice ist bei jedem Abonnement kostenlos inklusive.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert das komplette Setup?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Die meisten Kunden streamen innerhalb von 10 Minuten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich meine Zugangsdaten auf mehreren Geräten verwenden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, Sie können die App auf unbegrenzt vielen Geräten installieren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was tun, wenn ich einen Login-Fehler bekomme?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bestätigen Sie die Eingabe oder schreiben Sie uns per WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Internetgeschwindigkeit brauche ich?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für 4K Ultra HD empfehlen wir mindestens 30 Mbit/s.',
            },
          },
          {
            '@type': 'Question',
            name: 'Benötige ich ein VPN?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein, unsere Server sind optimiert und sicher.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Einrichtung',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="setup-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-white">
      <SetupPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}
```[cite: 11]