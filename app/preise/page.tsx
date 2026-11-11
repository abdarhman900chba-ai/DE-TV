'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Headphones,
  Sparkles,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// SVG Flag Badges — DE, AT, CH, UK (IPTV Deutschland First)
// ---------------------------------------------------------------------------
const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="pp-fl-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#pp-fl-de)">
      <rect x="0" y="0" width="32" height="10.67" fill="#000000" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#DD0000" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#FFCE00" />
    </g>
  </svg>
);

const FlagAT = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="pp-fl-at"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#pp-fl-at)">
      <rect x="0" y="0" width="32" height="10.67" fill="#ED2939" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#FFFFFF" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#ED2939" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="pp-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#pp-fl-ch)">
      <rect x="0" y="0" width="32" height="32" fill="#D52B1E" />
      <rect x="13.33" y="6.67" width="5.34" height="18.66" fill="#FFFFFF" />
      <rect x="6.67" y="13.33" width="18.66" height="5.34" fill="#FFFFFF" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="pp-fl-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#pp-fl-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// FAQ Item — Accordion (works on white background)
// ---------------------------------------------------------------------------
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#f2ebeb] border-4 ${
        isOpen ? 'border-[#DD0000]' : 'border-[#0a0a0c]/10'
      } rounded-2xl p-6 hover:border-[#DD0000]/60 transition-all duration-300 group`}
      aria-expanded={isOpen}
    >
      <div className="flex justify-between items-center gap-4">
        <h3
          className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#DD0000]' : 'text-[#0a0a0c] group-hover:text-[#DD0000]'
          } flex items-center gap-3`}
        >
          <span
            className={`${
              isOpen ? 'text-[#DD0000]' : 'text-[#0a0a0c]/30'
            } font-black text-2xl`}
          >
            F.
          </span>
          {question}
        </h3>
        <ChevronDown
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 text-[#DD0000]'
              : 'text-[#0a0a0c]/30 group-hover:text-[#DD0000]/50'
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0a0a0c]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#DD0000] ml-2 py-2">
          {answer}
        </p>
      </div>
    </button>
  );
}

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col">

      {/* ==========================================================
          HERO SECTION — IPTV Deutschland primary + iptv kaufen + IPTV Anbieter
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt="IPTV Deutschland Pakete und Preise – IPTV kaufen beim besten IPTV Anbieter"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/0" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #DD0000 1px, transparent 1px),
              linear-gradient(to bottom, #DD0000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCE00]/30">
                <Sparkles className="w-4 h-4 text-[#FFCE00]" />
                <span className="text-[#f2ebeb] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                  Beste IPTV Deutschland Pakete 2026
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#f2ebeb] tracking-tighter uppercase mb-6 leading-none text-center">
                IPTV DEUTSCHLAND PAKETE & <br />
                <span className="text-[#FFCE00]">BESTE PREISE</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#f2ebeb]/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Bei einem seriösen IPTV Anbieter IPTV kaufen: 36.000 Live TVs sowie 120.000 Filme und Serien in 4K auf jedem Gerät. Zuerst kostenlos IPTV testen, danach IPTV kaufen – mit WhatsApp Einrichtung und Euro Preisen ganz ohne Vertragsbindung.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-black/60 border border-[#DD0000]/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagDE />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">Deutschland</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagAT />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">Österreich</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagCH />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">Schweiz</span>
                  </div>

                  <span className="text-white/20 text-xs font-black">•</span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <FlagUK />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#f2ebeb]">UK</span>
                  </div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#f2ebeb]/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#DD0000]" /> Keine Vertragslaufzeit
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#DD0000]" /> WhatsApp Einrichtung
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#DD0000]" /> Kostenlos IPTV Testen
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          MAIN PRICING CARDS
      ========================================================== */}
      <div className="w-full relative z-20 bg-[#0a0a0c] py-12" id="pricing-section">
        <PricingSection />
      </div>

      {/* ==========================================================
          FEATURES GRID — WHITE BACKGROUND
      ========================================================== */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0c] mb-4 uppercase tracking-tighter leading-none">
              IN JEDEM IPTV DEUTSCHLAND <span className="text-[#DD0000]">PAKET ENTHALTEN</span>
            </h2>
            <p className="text-[#0a0a0c]/70 text-lg font-bold max-w-2xl mx-auto mt-4">
              Alle {CONSTANTS.BRAND_NAME} IPTV Deutschland Abonnements enthalten diese Premium-Funktionen als Standard.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36.000 Live TVs',
                desc: `Sport, Nachrichten, Unterhaltung und alle deutschen Sender aus über 50 Ländern bei ${CONSTANTS.BRAND_NAME}.`,
              },
              {
                icon: Film,
                title: '120.000 Filme und Serien',
                desc: `Die neuesten Filme, komplette Serien und Dokumentationen – täglich aktualisiert in der ${CONSTANTS.BRAND_NAME} VOD-Bibliothek.`,
              },
              {
                icon: MonitorPlay,
                title: '4K IPTV & 60FPS Qualität',
                desc: `Gestochen scharfes 4K IPTV Streaming auf kompatiblen Sendern und Geräten ohne Puffer über ${CONSTANTS.BRAND_NAME}.`,
              },
              {
                icon: Wifi,
                title: 'Anti-Freeze Technologie',
                desc: 'Pufferfreies Anschauen dank fortschrittlicher Stream-Optimierung und dedizierter Frankfurter Load-Balancer.',
              },
              {
                icon: Calendar,
                title: 'Vollständiger EPG TV-Guide',
                desc: '7-Tage interaktiver elektronischer Programmführer für alle deutschen, österreichischen und internationalen Sender.',
              },
              {
                icon: Trophy,
                title: 'PPV Events Inklusive',
                desc: 'Alle großen UFC-, Box-, Bundesliga-, Champions-League- und Main-Event Pay-per-View-Kämpfe ohne Aufpreis.',
              },
              {
                icon: Globe,
                title: 'DACH-Weite IPTV Abdeckung',
                desc: 'IPTV Deutschland mit dedizierten Servern in Frankfurt für minimale Latenz bei Live TV Sport in Deutschland, Österreich und der Schweiz.',
              },
              {
                icon: Server,
                title: '99,9% Server Uptime',
                desc: 'Enterprise-Infrastruktur mit redundanten Backup-Servern für garantierte Streaming-Stabilität.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-2xl p-6 hover:border-[#DD0000]/60 shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4 group-hover:bg-[#DD0000]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#DD0000]" />
                  </div>
                  <h3 className="font-black text-[#0a0a0c] uppercase tracking-wide text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#0a0a0c]/70 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          COMPARISON TABLE — Dark
      ========================================================== */}
      <section className="py-24 bg-[#0a0a0c] border-y border-white/5 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tighter">
              IPTV DEUTSCHLAND PAKETE <span className="text-[#FFCE00]">VERGLEICHEN</span>
            </h2>
            <p className="text-[#f2ebeb]/60 text-base font-bold uppercase tracking-widest mt-2">
              Finden Sie das perfekte IPTV Deutschland Abonnement für Ihre Streaming-Bedürfnisse
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black/10">
                  <th className="text-left p-4 text-[#0a0a0c] font-black uppercase tracking-wider text-base md:text-lg">
                    Spezifikation
                  </th>
                  <th className="text-center p-4 text-[#DD0000] font-black uppercase tracking-wider text-base md:text-lg">
                    3 Monate
                  </th>
                  <th className="text-center p-4 text-[#DD0000] font-black uppercase tracking-wider text-base md:text-lg bg-black/5 rounded-t-xl">
                    12 Monate (VIP)
                  </th>
                  <th className="text-center p-4 text-[#DD0000] font-black uppercase tracking-wider text-base md:text-lg">
                    6 Monate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  { feature: 'Live TVs', basic: '36.000+', pro: '36.000+ VIP', premium: '36.000+' },
                  { feature: 'Filme und Serien', basic: '120.000+', pro: '120.000+ (Täglich)', premium: '120.000+' },
                  { feature: '4K IPTV & 60FPS Streaming', basic: 'Ja', pro: 'Ja (Ultra Bitrate)', premium: 'Ja' },
                  { feature: 'Live TV Sport & PPV', basic: 'Inklusive', pro: 'Alle PPV + VIP-Feeds', premium: 'Inklusive' },
                  { feature: 'EPG & Catch Up', basic: 'Standard EPG', pro: '7 Tage Catch-Up + EPG', premium: 'Vollständiger EPG' },
                  { feature: 'Anti-Freeze Technologie', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Erweitert' },
                  { feature: 'VPN-Kompatibel', basic: 'Ja (Nicht erforderlich)', pro: '100% Kompatibel', premium: 'Ja' },
                  { feature: 'Anzahl Geräte', basic: '1 oder 2 Geräte', pro: '1, 2 oder 3 Geräte', premium: '1 oder 2 Geräte' },
                  { feature: 'Kundensupport', basic: 'WhatsApp Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-black/[0.02] transition-colors">
                    <td className="p-4 text-[#0a0a0c] font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-[#0a0a0c]/70 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#DD0000] font-black text-sm bg-black/[0.02]">{row.pro}</td>
                    <td className="p-4 text-center text-[#0a0a0c]/70 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TRUST BADGES — RED BACKGROUND
      ========================================================== */}
      <section className="py-24 bg-[#DD0000] w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCE00]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a0a0c]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
              WARUM <span className="text-[#FFCE00]">{CONSTANTS.BRAND_NAME}</span> WÄHLEN
            </h2>
            <p className="text-white/85 text-lg font-bold max-w-2xl mx-auto mt-4">
              IPTV Deutschland, Austria und Schweiz – das Vertrauen von über 15.000 zufriedenen Zuschauern.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border-2 border-[#FFCE00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[#DD0000]" />
              </div>
              <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
                Sichere Zahlung
              </h4>
              <p className="text-[#0a0a0c]/70 text-sm font-medium">
                Verschlüsselte Transaktionen über Kreditkarte, PayPal, SEPA-Überweisung und Krypto mit 256-Bit SSL-Schutz.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border-2 border-[#FFCE00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-[#DD0000]" />
              </div>
              <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
                WhatsApp Einrichtung
              </h4>
              <p className="text-[#0a0a0c]/70 text-sm font-medium">
                Unser Team begleitet Sie per WhatsApp durch die komplette Installation – Schritt für Schritt, bis Sie streamen.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border-2 border-[#FFCE00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-[#DD0000]" />
              </div>
              <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
                Kostenlos IPTV Testen
              </h4>
              <p className="text-[#0a0a0c]/70 text-sm font-medium">
                Testen Sie IPTV kostenlos auf Ihrem eigenen Gerät und Ihrer Internetverbindung, bevor Sie einen Cent bezahlen. Ohne Vertragslaufzeit.
              </p>
            </FadeInItem>

            <FadeInItem className="flex flex-col items-center text-center p-6 bg-white border-2 border-[#FFCE00]/30 rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4">
                <Headphones className="w-8 h-8 text-[#DD0000]" />
              </div>
              <h4 className="text-xl font-black text-[#0a0a0c] mb-2 uppercase tracking-wide">
                24/7 WhatsApp Support
              </h4>
              <p className="text-[#0a0a0c]/70 text-sm font-medium">
                Echte Menschen rund um die Uhr verfügbar – für Einrichtung, Streaming oder alles andere, was Sie brauchen.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          FREE TRIAL BANNER — Dark
      ========================================================== */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] w-full">
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-4 shadow-md border border-[#FFCE00]/30">
            <Award className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#f2ebeb] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Erst Testen, Dann IPTV Kaufen
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
            Kostenloser 24-Stunden IPTV Test
          </h3>
          <p className="text-[#0a0a0c]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Schreiben Sie uns per WhatsApp – wir richten Ihnen einen kostenlosen 24-Stunden IPTV Test ein. Prüfen Sie die 4K IPTV Bildqualität, sehen Sie sich das Senderangebot an und überzeugen Sie sich, dass auf Ihrem Gerät und Ihrer Internetverbindung alles reibungslos läuft. Erst danach IPTV kaufen.
          </p>
        </div>
      </section>

      {/* ==========================================================
          FAQ — WHITE BACKGROUND
      ========================================================== */}
      <section className="w-full bg-white py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#DD0000]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0c] mb-6 uppercase tracking-tighter">
              HÄUFIG GESTELLTE <span className="text-[#DD0000]">FRAGEN</span>
            </h2>
            <p className="text-[#0a0a0c]/70 font-bold text-lg">
              Alles, was Sie über unsere IPTV Deutschland Abonnements, IPTV kaufen und die Einrichtung wissen müssen.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            <FAQItem
              question={`Welche Zahlungsmethoden akzeptiert ${CONSTANTS.BRAND_NAME}?`}
              answer={`${CONSTANTS.BRAND_NAME} akzeptiert alle gängigen Kreditkarten (Visa, Mastercard, American Express), PayPal, SEPA-Überweisung und Kryptowährungen (Bitcoin, Ethereum, USDT). Alle Preise sind in Euro (inkl. MwSt.) und jede Zahlung wird über verschlüsselte 256-Bit SSL-Verbindungen verarbeitet.`}
            />
            <FAQItem
              question="Kann ich mein IPTV Abonnement später upgraden oder ändern?"
              answer="Ja, Sie können jederzeit upgraden, um mehr Geräte hinzuzufügen oder auf einen längeren Zeitraum zu wechseln. Schreiben Sie einfach unserem WhatsApp-Helpdesk und wir passen Ihr Konto sofort an."
            />
            <FAQItem
              question="Bin ich an einen Vertrag oder eine automatische Verlängerung gebunden?"
              answer="Nein, absolut nicht. Es gibt keine langfristigen Verträge und keine automatischen Verlängerungen. Jedes IPTV Deutschland Paket ist eine einmalige Vorauszahlung, die nach Ablauf der Laufzeit automatisch endet."
            />
            <FAQItem
              question="Was passiert, wenn mein IPTV Abonnement abläuft?"
              answer="Wir senden Ihnen vor Ablauf Ihres Abonnements eine Erinnerung. Sie können einfach per WhatsApp verlängern. Wenn Sie sich gegen eine Verlängerung entscheiden, endet der IPTV Service automatisch ohne weitere Verpflichtungen."
            />
            <FAQItem
              question="Bieten Sie einen kostenlosen IPTV Test vor der Buchung an?"
              answer="Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden IPTV Test ein. So können Sie die 4K IPTV Bildqualität und das Senderangebot auf Ihrem eigenen Gerät und Ihrer Internetverbindung testen. Erst dann IPTV kaufen."
            />
            <FAQItem
              question="Kann ich IPTV Deutschland auf mehreren Geräten gleichzeitig nutzen?"
              answer="Ja, je nach gewähltem Paket. Sie können beim Checkout 1, 2 oder 3 gleichzeitige Geräte auswählen, um in mehreren Räumen gleichzeitig zu schauen. Jeder im Haushalt kann schauen, was er möchte."
            />
            <FAQItem
              question="Gibt es Rabatte für längere IPTV Abonnements?"
              answer="Ja. Die 12-Monats-Pakete bieten die höchsten Ersparnisse – bis zu 50% günstiger als die kürzeren Laufzeiten. Das ist die beste Option für Haushalte, die langfristig dabei bleiben möchten."
            />
            <FAQItem
              question="Benötige ich ein VPN für IPTV Deutschland?"
              answer="Ein VPN ist nicht erforderlich. Unsere Server sind für deutsche, österreichische und schweizerische ISPs optimiert und liefern reibungsloses, pufferfreies Streaming auf Ihrer Heimverbindung."
            />
          </FadeInStagger>
        </div>
      </section>

      {/* ==========================================================
          SHARE BUTTONS
      ========================================================== */}
      <div className="w-full flex justify-center items-center py-12 bg-[#0a0a0c]">
        <ShareButtons />
      </div>

      {/* ==========================================================
          BOTTOM CTA — RED BACKGROUND
      ========================================================== */}
      <section className="py-20 bg-[#DD0000] border-t border-[#FFCE00]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFCE00]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0a0a0c]/20 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              BEREIT ZUM IPTV KAUFEN?
            </h2>
            <p className="text-white/85 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Schließen Sie sich über 15.000 zufriedenen Zuschauern in IPTV Deutschland, Austria und Schweiz an. Wählen Sie Ihr Paket, schreiben Sie uns per WhatsApp und testen Sie alles zuerst kostenlos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFCE00] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.4)] border-2 border-[#FFCE00]/40"
              >
                IPTV Paket Wählen
              </Link>
              <Link
                href="/firestick-einrichtung"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-white text-[#DD0000] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border-2 border-white"
              >
                IPTV Einrichtungsanleitung
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/70 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FFCE00]" /> WhatsApp Einrichtung
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FFCE00]" /> Sichere Zahlung
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFCE00]" /> Karte, PayPal, SEPA & Krypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}