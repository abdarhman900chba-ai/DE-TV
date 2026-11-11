// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (DACH — GERMANY / AUSTRIA / SWITZERLAND)
// ---------------------------------------------------------------------------
const DOMAIN = 'iptvdeutsch.org/de';
const BRAND_NAME = 'IPTV Deutsch';
const SITE_URL = `https://${DOMAIN}`;
const FOCUS_KEYWORD = 'iptv kaufen';
const SECONDARY_FOCUS_KEYWORD = 'IPTV Anbieter';
const LOCALE = 'de_DE';
const LANGUAGE = 'de-DE';
const ADDRESS_COUNTRY = 'DE';
const CURRENCY = 'EUR';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent German Keywords
  PRIMARY_KEYWORDS: [
    'iptv kaufen',
    'IPTV Anbieter',
    'iptv tv',
    'iptv deutschland',
    'german iptv',
    'iptv germany',
    '4k iptv kaufen',
    'besten iptv anbieter',
    'iptv anbieter günstig',
  ],

  // Secondary & Long-Tail Search Terms
  SECONDARY_KEYWORDS: [
    'iptv anbieter alle sender',
    '4K IPTV',
    'iptv legal',
    'kostenlos iptv',
    'iptv extreme',
    'bundesliga iptv live',
    'champions league iptv stream',
    'formel 1 iptv deutschland',
    'iptv firestick deutschland',
    'smart tv iptv anbieter',
    'iptv test kostenlos',
    'iptv ohne vertragslaufzeit',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@iptvdeutsch.org',
    phone: '+49 30 5550 0199', // ⚠️ Replace with your real German number
    whatsapp: '+49 30 5550 0199', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://support-tv.online', // ⚠️ Replace with your real wa.me link
    supportHours: '24/7 Deutscher Kundensupport per E-Mail und Ticketsystem',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/iptvdeutsch', // ⚠️ Replace
    instagram: 'https://instagram.com/iptvdeutsch', // ⚠️ Replace
    facebook: 'https://facebook.com/iptvdeutsch', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Krypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities in the DACH Region
  TARGET_REGIONS: [
    'Berlin',
    'Hamburg',
    'München',
    'Köln',
    'Frankfurt am Main',
    'Stuttgart',
    'Düsseldorf',
    'Leipzig',
    'Wien',
    'Zürich',
  ],

  // Value Propositions for German-Speaking Viewers
  USPS: [
    'Ruckelfreies 4K- & Full-HD-Streaming über dedizierte Frankfurt-Edge-Server mit unter 10ms Latenz',
    'Zugriff auf über 20.000 Live-Sender inkl. aller deutschen Sender, Sport und Entertainment',
    'Sofortige Aktivierung Ihres Zugangs innerhalb von 5 Minuten nach Zahlungseingang',
    'Volle Abdeckung von Bundesliga, Champions League, Formel 1, DAZN, Sky und Premium-VOD',
    'Universelle Geräteunterstützung: Amazon Firestick, Smart TV, Android, iOS, MAG und IPTV Extreme',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimisation
  const defaultDescription =
    description ||
    `Jetzt IPTV kaufen beim besten IPTV Anbieter Deutschlands: 20.000+ Sender, alle deutschen Kanäle & 4K-Streaming. Sofortige Aktivierung – jetzt kostenlos testen!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} – IPTV Kaufen`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'de-DE': fullCanonicalUrl,
        'de-AT': fullCanonicalUrl,
        'de-CH': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} – ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Führender IPTV Anbieter für Deutschland, Österreich und die Schweiz mit hochauflösendem Live-TV, allen deutschen Sendern und Premium-Sport-Streaming in 4K.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ['DE', 'AT', 'CH'],
      availableLanguage: ['German', 'Deutsch'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/preise`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Deutschland',
      },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (DACH Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'IPTV Anbieter für Deutschland, Österreich und die Schweiz mit 4K-Live-TV, Sport und VOD-Streaming für Haushalte in Berlin, Hamburg, München, Wien und Zürich.',
    priceRange: '€€',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};
