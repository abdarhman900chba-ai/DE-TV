import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  Award,
  Globe,
  Users,
  Server,
  Zap,
  ShieldCheck,
  Trophy,
  Headphones,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Tv,
  Film,
  Activity,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/ueber-uns`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Über Uns',
  `Erfahren Sie die Geschichte hinter ${BRAND}, dem verlässlichen IPTV Anbieter für Deutschland mit 36.000+ Live TVs in 4K IPTV und 99,9% Uptime.`,
  '/ueber-uns'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const AboutPageSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${PAGE_URL}/#about`,
        url: PAGE_URL,
        name: `Über ${BRAND}`,
        description: `Erfahren Sie mehr über ${BRAND}, den vertrauenswürdigen IPTV Anbieter für Deutschland mit 36.000+ Live TVs, 120.000+ Filme und Serien und 15.000+ zufriedenen Kunden in Deutschland, Österreich und der Schweiz.`,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Über Uns', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="about-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <AboutPageSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(221,0,0,0.15),_transparent_50%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #DD000008 1px, transparent 1px), linear-gradient(to bottom, #DD000008 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCE00]/30">
            <Sparkles className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Unsere Geschichte und Mission
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Über <span className="text-[#FFCE00]">{BRAND}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Der Premium IPTV Anbieter für Deutschland. Tauchen Sie ein in grenzenloses Streaming in 4K IPTV Qualität – ohne Puffer, ohne Vertragsbindung und ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" aria-label="Unternehmensstatistiken">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '15.000+', label: 'Zufriedene Kunden' },
            { icon: Globe, value: '100+', label: 'Länder Verfügbar' },
            { icon: Server, value: '99,9%', label: 'Server Uptime' },
            { icon: Trophy, value: '4,9/5', label: 'Durchschnittsbewertung' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="text-center p-6 bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl shadow-xl hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-[#DD0000] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#0a0a0c]/70 text-xs font-black uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="w-full bg-gradient-to-r from-[#DD0000] via-[#8C0000] to-[#DD0000] py-10 px-4 sm:px-6 border-y-4 border-[#FFCE00]/20 shadow-[0_0_50px_rgba(221,0,0,0.4)] relative z-20 overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="bg-[#FFCE00] text-[#8C0000] font-black text-xs px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
            SPAREN SIE GEGENÜBER KABEL-TV
          </div>
          <h2 className="text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            BEREIT FÜR IHR BESTES IPTV ERLEBNIS?
          </h2>
          <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Schluss mit überteuerten Einzelabonnements. Bündeln Sie Sport, Filme und deutsche Sender in einem einzigen Komplettpaket.
          </p>
          <div className="w-full sm:w-auto mt-2">
            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFCE00] text-[#8C0000] hover:bg-[#0a0a0c] hover:text-[#FFCE00] hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <span>IPTV Abonnements Ansehen</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Intro Card */}
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                Willkommen bei {BRAND}
              </h2>
              <p className="text-[#0a0a0c]/90 font-bold text-base leading-relaxed">
                Unsere Gründung folgte einem klaren Auftrag: Premium Live-TV und On-Demand-Inhalte für jeden Haushalt in Deutschland, Österreich und der Schweiz zugänglich und bezahlbar zu machen – ganz ohne Abstriche bei Bildqualität oder Stabilität.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-12">

          {/* Mission */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Mission & Vision
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-4">
              Klassische Kabel-Abos werden Jahr für Jahr teurer, während die Senderauswahl begrenzt bleibt. Haushalte im DACH-Raum müssen mehrere Dienste kombinieren, nur um Bundesliga, Champions League, Formel 1 und Filme zu bekommen – und zahlen dafür oft 60 € oder mehr pro Monat für einen Bruchteil der Inhalte.
            </p>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium">
              Bei {BRAND} führen wir alles in einer intuitiven Plattform zusammen. Live-Sport, deutsche öffentlich-rechtliche Sender und die neuesten Kinoproduktionen in 4K IPTV Ultra HD. Wir investieren laufend in moderne Serverkapazität, damit Puffern der Vergangenheit angehört – selbst am Champions-League-Finaltag.
            </p>
          </section>

          {/* Feature Grid */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Warum {BRAND} die Beste Wahl Ist
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  title: '99,9% Uptime Garantie',
                  desc: 'Unsere redundanten Server-Cluster stellen sicher, dass Ihre Lieblingssendungen immer live und ohne Unterbrechung verfügbar sind.',
                },
                {
                  icon: Zap,
                  title: 'Anti-Freeze Technologie',
                  desc: 'Fortschrittliche Load-Balancer verhindern Puffern während Stoßzeiten und Live-Sport-Events mit hohem Datenverkehr.',
                },
                {
                  icon: Server,
                  title: 'Frankfurt Hochgeschwindigkeits-Server',
                  desc: 'Direkt an große deutsche und internationale Internet-Knotenpunkte angebunden für minimale Latenz und sofortiges Sender-Zappen.',
                },
                {
                  icon: Headphones,
                  title: '24/7 WhatsApp Kundensupport',
                  desc: 'Kompetente Hilfe bei Installation, App-Auswahl und Senderkonfiguration – meist innerhalb von Minuten.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-6 bg-[#f2ebeb] rounded-3xl border-4 border-[#DD0000] shadow-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(221,0,0,0.2)] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-[#DD0000] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-black text-[#0a0a0c] text-base uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-[#0a0a0c]/80 text-xs font-bold mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Infrastructure */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Unsere Technische Server-Infrastruktur
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Wir betreiben eigene Streaming-Server mit dedizierten 10 Gbit/s Glasfaser-Anbindungen. Unsere Systeme leiten das Videosignal automatisch über den nächstgelegenen Knotenpunkt, damit Sie durchgehend flüssiges Streaming mit 50 und 60 FPS genießen – ganz gleich, ob Sie in Berlin, Hamburg, München, Wien oder Zürich sitzen.
            </p>
            <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Activity className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Niedrige Latenz</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Minimale Verzögerung bei Live-Sport
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Film className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">H.265 / HEVC</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Optimaler Datenverbrauch bei 4K
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl hover:border hover:border-[#DD0000] transition-all">
                  <Tv className="w-8 h-8 text-[#FFCE00] mx-auto mb-2" />
                  <div className="text-lg font-black text-[#FFFFFF]">Universell</div>
                  <p className="text-xs text-[#FFFFFF]/60 font-bold mt-1">
                    Funktioniert auf jedem Smart TV System
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Content Catalog */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#DD0000] rounded-full inline-block" />
              Die Kompletteste Senderliste
            </h2>
            <p className="text-[#FFFFFF]/80 text-base leading-relaxed font-medium mb-6">
              Mit mehr als <strong className="text-[#FFFFFF]">36.000 Live TVs</strong> und einer Videobibliothek von{' '}
              <strong className="text-[#FFFFFF]">120.000+ Filmen und Serien</strong> zählen wir zu den umfangreichsten Senderpaketen in Deutschland, Österreich und der Schweiz:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Alle deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX) in 4K IPTV & Full HD',
                'Live-Sport-Sender inklusive Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL und Handball',
                'Bundesliga, Champions League, Formel 1, Premier League und internationaler Cricket',
                'Komplettes internationales Angebot aus UK, USA, Schweiz, Österreich, Indien, Türkei, Polen und mehr',
                'Täglich aktualisierter VOD-Katalog mit deutschen Untertiteln für Kinoveröffentlichungen und Top-Serien',
                'Elektronischer Programmführer (EPG) und 7-Tage Catch-Up- und Replay-Funktionalität',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Star className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Free Trial */}
          <section>
            <div className="bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-green-600 font-black text-lg md:text-xl uppercase tracking-tight mb-2">
                    Kostenloser 24-Stunden IPTV Test
                  </h3>
                  <p className="text-[#0a0a0c] text-sm md:text-base font-bold leading-relaxed">
                    Schreiben Sie uns einfach auf WhatsApp – wir richten Ihnen unkompliziert einen kostenlosen 24-Stunden IPTV Test ein. Prüfen Sie die 4K IPTV Bildqualität, das komplette Senderangebot und ob auf Ihrem eigenen Gerät und Ihrer Internetleitung alles reibungslos läuft. Erst danach entscheiden Sie sich, IPTV zu kaufen. Ohne Vertragsbindung, ohne Druck.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0c] uppercase tracking-tight mb-3">
              Erleben Sie Es Selbst, Risikofrei
            </h2>
            <p className="text-[#DD0000] font-bold text-base max-w-lg mx-auto mb-8">
              Schließen Sie sich Tausenden zufriedenen Haushalten in Deutschland, Österreich und der Schweiz an. Wir begleiten Ihr Setup per WhatsApp – die meisten Kunden streamen bereits nach 10 Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
              <Link
                href="/preise"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shadow-md border border-[#FFCE00]/30"
              >
                IPTV Paket Wählen
              </Link>
              <Link
                href="/einrichtung"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-sm uppercase tracking-widest border-2 border-[#DD0000] transition-transform hover:scale-105"
              >
                Einrichtungsanleitung
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCE00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/40 text-xs font-bold inline-flex items-center justify-center gap-2 w-full">
            © {new Date().getFullYear()} {BRAND}. Alle Rechte vorbehalten. Hergestellt in Deutschland
            <GermanFlag className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </div>
  );
}