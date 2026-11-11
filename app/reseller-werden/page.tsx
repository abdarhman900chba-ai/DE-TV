'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Globe,
  Headphones,
  LayoutDashboard,
  MessageCircle,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const YEAR = new Date().getFullYear();

// ===========================================================================
// CURRENCY SYSTEM — DACH (EUR + CHF)
// ===========================================================================
type CurrencyCode = 'EUR' | 'CHF';

const CURRENCIES: Record<
  CurrencyCode,
  { code: CurrencyCode; label: string; symbol: string; rate: number }
> = {
  EUR: { code: 'EUR', label: 'EUR', symbol: '€', rate: 1 },
  CHF: { code: 'CHF', label: 'CHF', symbol: 'CHF ', rate: 0.95 },
};

const CURRENCY_ORDER: CurrencyCode[] = ['EUR', 'CHF'];

const formatPrice = (eurAmount: number, currency: CurrencyCode): string => {
  const { symbol, rate } = CURRENCIES[currency];
  const converted = Math.round(eurAmount * rate);
  return `${symbol}${converted.toLocaleString('de-DE')}`;
};

// ===========================================================================
// PRICING TIERS — EUR
// ===========================================================================
interface PricingTier {
  name: string;
  tag: string;
  years: number;
  credits: number;
  wholesaleEUR: number;
  perYearEUR: number;
  retailMinEUR: number;
  retailMaxEUR: number;
  highlighted: boolean;
  features: string[];
  waMessage: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    tag: '10 Jahre',
    years: 10,
    credits: 10,
    wholesaleEUR: 320,
    perYearEUR: 32,
    retailMinEUR: 55,
    retailMaxEUR: 110,
    highlighted: false,
    features: [
      '10 Reseller Credits (10 Jahre)',
      'Vollständiger Reseller-Panel Zugang',
      'Sofortige Aktivierung pro Kunde',
      '24/7 WhatsApp Support',
      'Credits verfallen nie',
      'Kostenloser Test-Line Generator',
      'Zahlungsintegration bereit',
    ],
    waMessage: 'Hallo! Ich möchte das Starter Reseller Paket (10 Jahre / 320 €).',
  },
  {
    name: 'Growth',
    tag: '20 Jahre',
    years: 20,
    credits: 20,
    wholesaleEUR: 590,
    perYearEUR: 29,
    retailMinEUR: 55,
    retailMaxEUR: 110,
    highlighted: true,
    features: [
      '20 Reseller Credits (20 Jahre)',
      'Vollständiger Reseller-Panel Zugang',
      'Sofortige Aktivierung pro Kunde',
      'Priority WhatsApp Support',
      'Credits verfallen nie',
      'Kostenloser Test-Line Generator',
      'Individuelle Preise pro Kunde',
      'API Zugang inklusive',
    ],
    waMessage: 'Hallo! Ich möchte das Growth Reseller Paket (20 Jahre / 590 €).',
  },
  {
    name: 'Pro',
    tag: '30 Jahre',
    years: 30,
    credits: 30,
    wholesaleEUR: 810,
    perYearEUR: 27,
    retailMinEUR: 55,
    retailMaxEUR: 110,
    highlighted: false,
    features: [
      '30 Reseller Credits (30 Jahre)',
      'Vollständiger Reseller-Panel Zugang',
      'Sofortige Aktivierung pro Kunde',
      'Dedizierter WhatsApp Support',
      'Credits verfallen nie',
      'Kostenloser Test-Line Generator',
      'Individuelle Preise pro Kunde',
      'Vollständiger API Zugang inklusive',
      'White Label Branding Option',
    ],
    waMessage: 'Hallo! Ich möchte das Pro Reseller Paket (30 Jahre / 810 €).',
  },
];

// ===========================================================================
// FAQS — German DACH
// ===========================================================================
const faqs = [
  {
    q: 'Was genau ist ein IPTV Reseller Panel?',
    a: 'Ein Reseller Panel ist ein privates Dashboard, mit dem Sie IPTV Abonnements für Ihre eigenen Kunden erstellen und verwalten können. Sie kaufen Credits bei uns in großen Mengen und nutzen diese Credits, um jährliche, monatliche oder Test-Abonnements für Ihre Kunden zu aktivieren. Sie behalten den vollen Verkaufspreis abzüglich Ihrer Großhandelskosten und Ihre Kunden sehen nie, dass wir im Hintergrund existieren.',
  },
  {
    q: 'Wie viel kann ich als IPTV Reseller in Deutschland, Österreich und der Schweiz realistisch verdienen?',
    a: `Das hängt davon ab, wie viele Kunden Sie gewinnen. Kunden in der DACH-Region zahlen in der Regel zwischen 55 € und 110 € pro Jahr, mit 80 € als Durchschnitt. Ihre Großhandelskosten pro Credit starten bei etwa 27 € bis 32 € pro Jahr, sodass Ihr Gewinn pro Verkauf zwischen 23 € und 83 € liegt, je nach Verkaufspreis. Verkaufen Sie 10 Abonnements zu je 80 €, haben Sie etwa 480 € Gewinn aus einer 320 € Investition erzielt.`,
  },
  {
    q: 'Brauche ich technische Kenntnisse, um Reseller zu werden?',
    a: 'Nein. Das Reseller Panel ist einfach gestaltet. Wenn Sie WhatsApp und einen Webbrowser bedienen können, können Sie ein Reseller-Geschäft führen. Wir bieten außerdem Onboarding-Anleitung per WhatsApp, sodass unser Team Ihnen jederzeit direkt weiterhilft, wenn Sie nicht weiterkommen.',
  },
  {
    q: 'Verfallen die Reseller Credits?',
    a: 'Nein. Ihre Credits bleiben unbegrenzt in Ihrem Konto. Sie können sie in Ihrem eigenen Tempo aktivieren, ob Sie mehrere Abonnements pro Woche verkaufen oder sie über Monate verteilen. Es gibt kein monatliches Minimum, kein Ablaufdatum und keinen Druck, schnell zu verkaufen.',
  },
  {
    q: 'In welchen Währungen kann ich verkaufen?',
    a: `Sie können an Ihre Kunden in jeder Währung verkaufen, die Sie bevorzugen. Euro, Schweizer Franken oder alles andere. Ihre Großhandelskosten bei uns sind in Euro fixiert. Ihr Verkaufspreis liegt völlig bei Ihnen, sodass Sie Ihre Marge kontrollieren. Nutzen Sie den Währungs-Schalter oben im Preisbereich, um alle Preise in EUR oder CHF zu sehen.`,
  },
  {
    q: 'Welchen Support bekomme ich als Reseller?',
    a: `Jeder Reseller, unabhängig vom Paket, erhält direkten WhatsApp Support von unserem Team. Das Growth Paket fügt Priority-Antwortzeiten hinzu und das Pro Paket beinhaltet einen dedizierten Support-Kanal sowie White-Label-Setup-Unterstützung.`,
  },
];

// ===========================================================================
// STEPS — German
// ===========================================================================
const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Credits Kaufen',
    description: 'Wählen Sie ein Paket und erhalten Sie Ihre Credits sofort. Starter, Growth und Pro werden alle innerhalb von Minuten nach Zahlungsbestätigung aktiviert.',
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Panel Zugreifen',
    description: 'Melden Sie sich in Ihrem privaten Reseller Dashboard an. Erstellen Sie Abonnements, generieren Sie Test-Lines und verwalten Sie jedes Kundenkonto über eine saubere Oberfläche.',
  },
  {
    icon: Users,
    number: '03',
    title: 'An Kunden Verkaufen',
    description: 'Legen Sie Ihre eigenen Preise fest und verkaufen Sie jährliche, monatliche oder Test-Abonnements. Sie behalten den vollen Verkaufsbetrag und verbrauchen nur Credits, wenn Sie einen Kunden aktivieren.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Gewinn Skalieren',
    description: 'Kaufen Sie mehr Credits zu niedrigeren Stückpreisen, wenn Ihre Kundenbasis wächst. Jede neue Stufe verbessert Ihre Marge und erhöht Ihr wiederkehrendes Einkommen.',
  },
];

// ===========================================================================
// VALUE CARDS — German
// ===========================================================================
const valueCards = [
  {
    icon: BadgeDollarSign,
    title: 'Niedrige Einstiegskosten',
    description: 'Starten Sie Ihr IPTV Reseller Geschäft mit einem einzigen 320 € Paket. Keine Verträge, keine monatlichen Gebühren, keine versteckten Kosten. Einfach Credits kaufen und verkaufen.',
  },
  {
    icon: Users,
    title: 'Globale Nachfrage',
    description: 'Millionen Zuschauer suchen jedes Jahr nach Kabel-Alternativen. Der IPTV Reseller Markt wächst stetig mit Platz für neue Verkäufer in jeder Region.',
  },
  {
    icon: Wallet,
    title: 'Hohe Margen',
    description: 'Ihre Kosten pro Jahresabonnement starten bei 27 € bis 32 €. Kunden zahlen gerne 55 € bis 110 € pro Jahr. Das ist eine starke Marge bei jedem Verkauf.',
  },
  {
    icon: Server,
    title: 'Echte Infrastruktur',
    description: 'Sie verkaufen über unsere dedizierten Bare-Metal Server. Kein überlastetes Shared Hosting, keine Ausfallzeiten während Stoßzeiten, keine technischen Probleme zu erklären.',
  },
];

// ===========================================================================
// PANEL FEATURES — German
// ===========================================================================
const panelFeatures = [
  { icon: LayoutDashboard, label: 'Reseller Dashboard' },
  { icon: Zap, label: 'Sofortige Aktivierung' },
  { icon: Package, label: 'Credits ohne Ablauf' },
  { icon: Bot, label: 'Test-Generator' },
  { icon: BarChart3, label: 'Verkaufs-Tracking' },
  { icon: CreditCard, label: 'Zahlung Bereit' },
  { icon: Globe, label: 'Multi-Währung' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: ShieldCheck, label: 'Verschlüsseltes Panel' },
  { icon: Rocket, label: 'API Automatisierung' },
];

// ===========================================================================
// PRICING CARD
// ===========================================================================
function PricingCard({ tier, currency }: { tier: PricingTier; currency: CurrencyCode }) {
  const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(tier.waMessage)}`;

  const wholesalePrice = formatPrice(tier.wholesaleEUR, currency);
  const perYearPrice = formatPrice(tier.perYearEUR, currency);
  const retailMin = formatPrice(tier.retailMinEUR, currency);
  const retailMax = formatPrice(tier.retailMaxEUR, currency);

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-500 ${
        tier.highlighted
          ? 'bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] border-4 border-[#FFCE00] shadow-[0_25px_60px_rgba(221,0,0,0.4)] lg:-translate-y-4 z-20'
          : 'bg-[#f2ebeb] border-2 border-[#DD0000]/20 hover:border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)]'
      }`}
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg border-2 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFCE00] text-[#8C0000] border-[#FFCE00]'
              : 'bg-[#DD0000] text-[#FFFFFF] border-[#8C0000]'
          }`}
        >
          {tier.highlighted && <Sparkles className="w-3 h-3 shrink-0" />}
          {tier.tag}
        </div>
      </div>

      <div className="pt-4">
        <h3
          className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
            tier.highlighted ? 'text-[#f2ebeb]/90' : 'text-[#DD0000]'
          }`}
        >
          {tier.name}
        </h3>

        <div
          className={`text-2xl font-black uppercase tracking-tight mb-4 ${
            tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0a0a0c]'
          }`}
        >
          {tier.years} Jahre
        </div>

        <div className="mb-4">
          <div
            className={`text-5xl md:text-6xl font-black tracking-tighter mb-2 ${
              tier.highlighted ? 'text-[#FFFFFF]' : 'text-[#0a0a0c]'
            }`}
          >
            {wholesalePrice}
          </div>
          <div
            className={`text-xs font-bold tracking-wide ${
              tier.highlighted ? 'text-[#f2ebeb]/80' : 'text-[#0a0a0c]/60'
            }`}
          >
            {tier.credits} Credits gesamt
          </div>
        </div>

        <div
          className={`text-[11px] font-black uppercase tracking-widest mb-6 inline-block px-3 py-1 rounded-full border whitespace-nowrap ${
            tier.highlighted
              ? 'text-[#FFCE00] border-[#FFCE00]/40 bg-[#FFCE00]/10'
              : 'text-[#DD0000] border-[#DD0000]/30 bg-[#DD0000]/10'
          }`}
        >
          {perYearPrice} pro Jahr
        </div>

        <div
          className={`rounded-2xl p-4 mb-6 ${
            tier.highlighted
              ? 'bg-[#0a0a0c]/40 border border-[#FFCE00]/30'
              : 'bg-white border border-[#DD0000]/20'
          }`}
        >
          <div
            className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
              tier.highlighted ? 'text-[#FFCE00]/80' : 'text-[#0a0a0c]/60'
            }`}
          >
            Ihr Gewinnpotenzial
          </div>
          <div
            className={`text-xs font-bold mb-1 ${
              tier.highlighted ? 'text-[#f2ebeb]' : 'text-[#0a0a0c]'
            }`}
          >
            Verkauf bei {retailMin} bis {retailMax} / Jahr
          </div>
          <div
            className={`text-base font-black uppercase mt-2 ${
              tier.highlighted ? 'text-[#FFCE00]' : 'text-[#DD0000]'
            }`}
          >
            Bis zu {formatPrice((tier.retailMaxEUR - tier.perYearEUR) * tier.years, currency)} gesamt
          </div>
        </div>

        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2.5 text-xs font-bold ${
                tier.highlighted ? 'text-[#f2ebeb]' : 'text-[#0a0a0c]/85'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  tier.highlighted ? 'text-[#FFCE00]' : 'text-[#DD0000]'
                }`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:scale-105 whitespace-nowrap ${
            tier.highlighted
              ? 'bg-[#FFCE00] text-[#000000] hover:bg-[#FFFFFF] shadow-2xl'
              : 'bg-[#DD0000] text-[#FFFFFF] hover:bg-[#B00000] shadow-lg'
          }`}
        >
          <span>Paket Kaufen</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

// ===========================================================================
// FAQ ITEM
// ===========================================================================
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
        isOpen
          ? 'border-[#DD0000] shadow-[0_20px_50px_rgba(221,0,0,0.15)]'
          : 'border-[#DD0000]/20 hover:border-[#DD0000]'
      } bg-[#f2ebeb]`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-7 flex items-start gap-5 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DD0000] to-[#8C0000] flex items-center justify-center text-[#FFFFFF] font-black text-lg shadow-lg shadow-[#DD0000]/30">
          {num}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-[#0a0a0c] text-base md:text-lg uppercase tracking-tight leading-snug mb-1">
            {faq.q}
          </h3>
          {isOpen && (
            <p className="text-[#0a0a0c]/85 font-medium leading-relaxed text-sm md:text-base mt-3 pl-4 border-l-4 border-[#DD0000]">
              {faq.a}
            </p>
          )}
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-[#DD0000] transition-transform duration-300 mt-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}

// ===========================================================================
// MAIN PAGE
// ===========================================================================
export default function ResellerPage() {
  const [currency, setCurrency] = useState<CurrencyCode>('EUR');

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      {/* HERO — dark */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#DD0000]/12 blur-[150px] rounded-full pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#DD0000] px-5 py-2.5 rounded-full mb-8 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]/30">
              <BadgeDollarSign className="w-4 h-4 text-[#FFCE00] shrink-0" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest whitespace-nowrap inline-flex items-center gap-2">
                IPTV Reseller Deutschland {YEAR}
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.05] text-[#FFFFFF] mb-6 max-w-4xl mx-auto">
              IPTV RESELLER WERDEN <br className="hidden sm:block" />
              <span className="text-[#FFCE00]">IN DEUTSCHLAND</span> <br className="hidden sm:block" />
              AUSTRIA &amp; SCHWEIZ
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/75 font-bold max-w-3xl mx-auto leading-relaxed mb-10">
              Starten Sie Ihr eigenes IPTV Reseller Geschäft mit einem einzigen 320 € Paket. Kaufen Sie Credits in großen Mengen, verkaufen Sie Jahresabonnements zu 55 € bis 110 € und verdienen Sie bis zu 83 € Gewinn pro Kunde.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(221,0,0,0.4)] hover:scale-105 transition-transform whitespace-nowrap border border-[#FFCE00]/30"
              >
                Preise Ansehen
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  'Hallo! Ich möchte mehr darüber erfahren, wie ich IPTV Reseller in Deutschland werden kann.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f2ebeb] text-[#DD0000] font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                Kontakt Aufnehmen
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Zap className="w-3.5 h-3.5 text-[#FFCE00] shrink-0" />
                Sofortiger Zugang
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFCE00] shrink-0" />
                Kein Ablauf
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[#FFFFFF] text-xs font-black uppercase tracking-widest whitespace-nowrap">
                <Headphones className="w-3.5 h-3.5 text-[#FFCE00] shrink-0" />
                24/7 Support
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VALUE CARDS — WHITE BACKGROUND */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-5">
              <TrendingUp className="w-4 h-4 text-[#DD0000] shrink-0" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Warum Beitreten
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0a0c] uppercase tracking-tighter leading-tight mb-5">
              WARUM HEUTE <span className="text-[#DD0000]">IPTV RESELLEN</span>?
            </h2>
            <p className="text-base md:text-lg text-[#0a0a0c]/70 font-bold leading-relaxed">
              Der IPTV Reseller Markt war nie einfacher zu betreten. Niedrige Anfangskosten, massive Nachfrage und volle Gewinnkontrolle machen es zu einem der zugänglichsten Nebengeschäfte heute.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <FadeInItem
                  key={card.title}
                  className="group bg-[#f2ebeb] border-2 border-[#DD0000]/20 rounded-3xl p-6 md:p-7 hover:border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 group-hover:bg-[#DD0000] flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-7 h-7 text-[#DD0000] group-hover:text-[#FFCE00] transition-colors" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[#0a0a0c]/75 text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PROFIT MATH — dark */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-5">
              <BarChart3 className="w-4 h-4 text-[#FFCE00] shrink-0" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Die Echte Rechnung
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              WIE VIEL KÖNNEN SIE <span className="text-[#FFCE00]">VERDIENEN</span>?
            </h2>
            <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
              Ein konkretes Beispiel. Das passiert, wenn Sie ein Reseller Paket kaufen und zu normalen Verkaufspreisen an Kunden verkaufen.
            </p>
          </FadeIn>

          <FadeIn className="bg-[#f2ebeb] text-[#0a0a0c] border-4 border-[#DD0000] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Starter Paket
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#DD0000] tracking-tighter mb-2">
                  {formatPrice(320, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  10 Credits (10 Jahre)
                </div>
              </div>
              <div className="md:border-x-2 border-[#0a0a0c]/10 md:px-8">
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Verkauf Pro Jahr Bei
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#0a0a0c] tracking-tighter mb-2">
                  {formatPrice(80, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  durchschnittlicher Verkaufspreis
                </div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/50 mb-3">
                  Gesamtumsatz
                </div>
                <div className="text-4xl md:text-5xl font-black text-[#DD0000] tracking-tighter mb-2">
                  {formatPrice(800, currency)}
                </div>
                <div className="text-xs font-bold text-[#0a0a0c]/70">
                  aus 10 Kunden
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t-2 border-[#0a0a0c]/10 mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-xs font-black uppercase tracking-widest text-[#0a0a0c]/60 mb-2">
                    Umsatz minus Kosten
                  </div>
                  <div className="text-sm font-bold text-[#0a0a0c]/80">
                    Netto-Gewinn aus Ihren ersten 10 Kunden
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs font-black uppercase tracking-widest text-[#DD0000] mb-1">
                    Ihr Gewinn
                  </div>
                  <div className="text-5xl md:text-6xl font-black text-[#DD0000] tracking-tighter">
                    {formatPrice(480, currency)}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center max-w-3xl mx-auto">
            <p className="text-[#FFFFFF]/75 font-bold text-base md:text-lg leading-relaxed">
              Verkaufen Sie am oberen Ende der Spanne und der Gewinn steigt noch weiter. Bei 110 € pro Verkauf erreicht Ihr Gewinn aus 10 Kunden <span className="text-[#FFCE00] font-black">{formatPrice(780, currency)}</span>. Die Growth und Pro Pakete senken Ihre Kosten pro Jahr, sodass Ihr Gesamtgewinn mit jedem zusätzlichen Kunden skaliert.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRICING — dark */}
      <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-5">
            <Package className="w-4 h-4 text-[#FFCE00] shrink-0" />
            <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Reseller Pakete
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
            WÄHLEN SIE IHR <span className="text-[#FFCE00]">PAKET</span>
          </h2>
          <p className="text-base md:text-lg text-[#FFFFFF]/70 font-bold max-w-3xl mx-auto">
            Jedes Paket beinhaltet vollständigen Reseller-Panel Zugang, sofortige Aktivierung pro Kunde und 24/7 WhatsApp Support. Credits verfallen nie.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center mb-12">
          <div className="inline-flex bg-[#121214] border border-white/10 rounded-2xl p-1.5 shadow-2xl">
            {CURRENCY_ORDER.map((code) => {
              const active = currency === code;
              return (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    active
                      ? 'bg-[#DD0000] text-[#FFFFFF] shadow-lg shadow-[#DD0000]/30'
                      : 'text-[#FFFFFF]/60 hover:text-[#FFFFFF]'
                  }`}
                  aria-pressed={active}
                >
                  {CURRENCIES[code].label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto mt-8">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} currency={currency} />
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-[#FFFFFF]/60 text-sm font-bold">
            Sie benötigen größere Mengen? Schreiben Sie unserem Team per WhatsApp für Großhandelspreise ab 100+ Credits.
          </p>
        </FadeIn>
      </section>

      {/* HOW IT WORKS — WHITE BACKGROUND */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#0a0a0c]/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-5">
              <Rocket className="w-4 h-4 text-[#DD0000] shrink-0" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                So Funktioniert Es
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0a0c] uppercase tracking-tighter leading-tight mb-5">
              START IN <span className="text-[#DD0000]">VIER SCHRITTEN</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={step.number}
                  className="relative bg-[#f2ebeb] border-2 border-[#DD0000]/20 rounded-3xl p-6 md:p-7 hover:border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-3 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DD0000] to-[#8C0000] flex items-center justify-center text-[#FFCE00] font-black text-sm shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00]/40">
                    {step.number}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#DD0000]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0a0a0c]/75 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* PANEL FEATURES — RED BACKGROUND */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#DD0000] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCE00]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a0a0c]/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#0a0a0c]/30 border border-[#FFCE00]/40 px-4 py-1.5 rounded-full mb-5">
              <LayoutDashboard className="w-4 h-4 text-[#FFCE00] shrink-0" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Panel Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5">
              ALLES IN <span className="text-[#FFCE00]">EINEM DASHBOARD</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {panelFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={feature.label}
                  className="bg-white border-2 border-[#FFCE00]/30 rounded-2xl p-4 flex flex-col items-center text-center hover:border-[#FFCE00] transition-colors duration-300 shadow-lg"
                >
                  <Icon className="w-6 h-6 text-[#DD0000] mb-2" />
                  <span className="text-[#0a0a0c] font-black text-[11px] md:text-xs uppercase tracking-wide leading-tight">
                    {feature.label}
                  </span>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ — WHITE BACKGROUND */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white w-full border-t border-[#0a0a0c]/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-5">
              <MessageCircle className="w-4 h-4 text-[#DD0000] shrink-0" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest whitespace-nowrap">
                Reseller FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a0a0c] uppercase tracking-tighter leading-tight mb-5">
              HÄUFIGE <span className="text-[#DD0000]">FRAGEN</span>
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — dark with red gradient card */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] max-w-5xl mx-auto w-full">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#FFCE00]/40 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#8C0000] px-5 py-2 rounded-full mb-6 shadow-lg">
                <UserPlus className="w-4 h-4 shrink-0" />
                <span className="font-black text-xs uppercase tracking-widest whitespace-nowrap">
                  Bereit Zu Starten
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-tight mb-5 max-w-3xl mx-auto">
                STARTEN SIE IHR RESELLER GESCHÄFT HEUTE
              </h2>

              <p className="text-[#FFFFFF]/90 font-bold text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Schreiben Sie unserem Team per WhatsApp und wir haben Ihr Reseller Panel innerhalb von 10 Minuten aktiv. Wählen Sie Ihr Paket, melden Sie sich an und verkaufen Sie noch am selben Tag an Ihren ersten Kunden.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <a
                  href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                    'Hallo! Ich möchte IPTV Reseller werden. Bitte helfen Sie mir beim Start.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFCE00] whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-[#FFCE00] shrink-0" />
                  Per WhatsApp Starten
                </a>
                <Link
                  href="/preise"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFCE00] text-[#8C0000] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                >
                  Kunden Pakete
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}