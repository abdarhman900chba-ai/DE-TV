'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Medal,
  Trophy,
  MessageCircle,
  Tv,
  Film,
  Globe,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#DD0000] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#121214] rounded-3xl animate-pulse max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// SMARTONE FAQ ACCORDION ITEM
// ---------------------------------------------------------------------------
function SmartOneFAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full text-left bg-[#f2ebeb] border-4 ${
        isOpen ? 'border-[#DD0000]' : 'border-[#DD0000]/20'
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
          {q}
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
          {a}
        </p>
      </div>
    </button>
  );
}

export default function SmartOneIPTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* HERO */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="SmartOne IPTV Deutschland Service mit 4K IPTV Streaming in Deutschland"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.22]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/20 via-[#08080A]/10 to-[#08080A]/20" />
        </div>

        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-5 py-2 rounded-full mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Zuverlässiger SmartOne IPTV Anbieter
              <GermanFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            SMARTONE IPTV <br />
            <span className="text-[#FFCE00]">DEUTSCHLAND</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Herzlich willkommen bei SmartOne IPTV in Deutschland. Nutzen Sie 36.000 Live TVs sowie über 120.000 Filme und Serien in brillantem 4K IPTV. Zu unserem SmartOne IPTV Service gehören ein begleitetes Setup per WhatsApp, ein kostenloser 24-Stunden-Test auf Ihrem eigenen Fernseher und Preise in Euro ganz ohne Vertragsbindung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/preise"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#DD0000] text-[#FAFAFA] font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
            >
              Jetzt IPTV Kaufen
            </Link>
            <Link
              href="/kostenlos-testen"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCE00] shrink-0" /> Kostenlos IPTV Testen
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCE00]" /> 4K IPTV Ultra HD Qualität
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFCE00]" /> 99,9% Server Uptime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCE00]" /> Anti-Freeze Technologie
            </span>
          </div>
        </FadeIn>
      </section>

      {/* PARTNER SLIDER */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* SOFA / LIVING ROOM */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCE00]">
            SmartOne IPTV Heimkino
            <GermanFlag className="w-4 h-4" />
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            BRINGEN SIE SMARTONE IPTV IN IHR <span className="text-[#FFCE00]">WOHNZIMMER</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="SmartOne IPTV Service auf einem Smart TV im Wohnzimmer in Deutschland"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Es gibt kaum etwas Schöneres, als sein Lieblingsteam oder einen neuen Film auf dem großen Bildschirm zu genießen. Die SmartOne IPTV Server in Frankfurt halten das Bild gestochen scharf und den Ton perfekt synchron, damit Sie auf dem Sofa entspannen können – ohne Puffer und ohne Qualitätsverlust.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/preise"
              className="bg-[#DD0000] border border-[#FFCE00] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#DD0000]/30"
            >
              SmartOne IPTV Heute Aktivieren
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS SMARTONE IPTV */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Was Ist SmartOne IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              ALLES WAS SIE ÜBER <span className="text-[#DD0000]">SMARTONE IPTV</span> WISSEN MÜSSEN
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              SmartOne IPTV ist ein Streaming-Dienst, der Live-TV-Sender, Filme und Serien über Ihre Internetverbindung bereitstellt. Das erwartet Sie mit SmartOne IPTV in Deutschland, Österreich und der Schweiz.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Tv,
                title: '36.000+ Live TVs',
                desc: 'Alle deutschen Sender plus Tausende internationale Kanäle aus UK, USA, Österreich, Schweiz, Frankreich, Italien, Spanien und mehr.',
              },
              {
                icon: Film,
                title: '120.000+ Filme & Serien',
                desc: 'Komplette Boxsets und die neuesten Kinoveröffentlichungen. Täglich kommen neue Titel in die SmartOne IPTV On-Demand-Bibliothek.',
              },
              {
                icon: Trophy,
                title: 'Live Sport & PPV',
                desc: 'Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL, Handball und alle Pay-per-View Events ohne Aufpreis inklusive.',
              },
              {
                icon: Globe,
                title: 'Geführtes WhatsApp Setup',
                desc: 'Unser Team begleitet Sie durch die komplette Installation per WhatsApp, Schritt für Schritt, bis Sie SmartOne IPTV auf Ihrem eigenen Gerät streamen.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white text-[#0A0A0C] rounded-3xl p-6 md:p-7 border-2 border-[#DD0000]/20 hover:border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#DD0000] flex items-center justify-center mb-5 shadow-lg">
                    <Icon className="w-7 h-7 text-[#FFCE00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0A0A0C]/75 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link
                href="/preise"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCE00]/40"
              >
                SmartOne IPTV Pakete Ansehen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0C] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#DD0000]"
              >
                <MessageCircle className="w-5 h-5" />
                Per WhatsApp Fragen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* MOVIE SLIDER */}
      <section id="channels" className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              SMARTONE IPTV SENDER &amp; FILMBIBLIOTHEK
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              Erkunden Sie Tausende Live-TV-Sender sowie 120.000+ Filme und Serien in der SmartOne IPTV On-Demand-Bibliothek. Täglich kommen neue Titel hinzu.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* GLOBAL SERVER MAP */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* SMARTONE FAQ */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DD0000]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                SmartOne IPTV Fragen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              HÄUFIGE FRAGEN ZU <span className="text-[#FFCE00]">SMARTONE IPTV</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Die Fragen, die unser Team zu SmartOne IPTV in Deutschland am häufigsten erreichen.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Was ist SmartOne IPTV?',
                a: 'SmartOne IPTV ist ein Premium-Streaming-Dienst, der Live-TV-Sender, Filme und Serien über Ihre Internetverbindung liefert. In Deutschland bietet unser SmartOne IPTV Service 36.000+ Live TVs und 120.000+ Filme und Serien in 4K IPTV Ultra HD – mit geführtem WhatsApp Setup und Preisen in Euro.',
              },
              {
                q: 'Wie viel kostet SmartOne IPTV in Deutschland?',
                a: 'SmartOne IPTV Pakete starten bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-VIP Paket kostet 79 € und spart bis zu 50%. Multi-Screen Pakete sind für 2 oder 3 Geräte zu Hause verfügbar.',
              },
              {
                q: 'Gibt es einen kostenlosen Test für SmartOne IPTV?',
                a: 'Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden SmartOne IPTV Test ein. Testen Sie das 4K IPTV Bild, prüfen Sie das Senderangebot und stellen Sie sicher, dass alles reibungslos auf Ihrem Gerät läuft, bevor Sie auf ein bezahltes Paket upgraden.',
              },
              {
                q: 'Welche Geräte funktionieren mit SmartOne IPTV?',
                a: 'SmartOne IPTV funktioniert auf Amazon Firestick, Samsung und LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG oder Formuler Set-Top-Boxen. Unser Team hilft Ihnen bei der Installation und Konfiguration einer App wie IPTV Extreme oder IBO Player Pro per WhatsApp.',
              },
              {
                q: 'Brauche ich ein VPN für SmartOne IPTV in Deutschland?',
                a: 'Ein VPN ist nicht erforderlich. Unsere SmartOne IPTV Server sind für deutsche, österreichische und schweizerische ISPs optimiert, um reibungsloses, pufferfreies Streaming auf Ihrer Heimverbindung zu liefern.',
              },
              {
                q: 'Wie schnell ist das SmartOne IPTV Setup?',
                a: 'Die meisten Kunden streamen innerhalb von 10 Minuten. Sie wählen Ihr Paket, schreiben uns per WhatsApp und unser Team begleitet Sie Schritt für Schritt durch die Installation, bis alles funktioniert.',
              },
              {
                q: 'Kann ich SmartOne IPTV auf mehreren TVs gleichzeitig nutzen?',
                a: 'Ja. Wählen Sie beim Checkout das 2-Screen- oder 3-Screen-Paket und mehrere Haushaltsmitglieder können gleichzeitig unterschiedliche Inhalte ohne Unterbrechung schauen.',
              },
              {
                q: 'Welche Sender umfasst SmartOne IPTV?',
                a: 'SmartOne IPTV enthält alle großen deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX), Live-Sport-Sender (Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL, Handball) sowie Tausende internationale Sender aus UK, USA, Österreich, Schweiz, Frankreich, Italien, Spanien und mehr.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <SmartOneFAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">

        <FadeIn className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border-4 border-[#DD0000] shadow-2xl space-y-5">
            <h3 className="text-2xl md:text-3xl font-black text-[#0A0A0C] uppercase tracking-tight mb-4">
              WARUM SMARTONE IPTV DIE SCHLAUE WAHL IN DEUTSCHLAND IST
            </h3>

            <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
              Klassisches deutsches Bezahlfernsehen wurde Jahr für Jahr teurer, während die Senderauswahl kleiner und der Preis höher wurde. Haushalte in Berlin, Hamburg, München, Wien und Zürich entscheiden sich für SmartOne IPTV, weil es dieselben Inhalte zu einem Bruchteil der monatlichen Kosten bietet – ohne Vertragsbindung und ohne zusätzliche Receiver oder Hardware.
            </p>

            <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
              SmartOne IPTV läuft auf einer modernen Streaming-Infrastruktur, die speziell für den deutschsprachigen Raum gebaut wurde. Unsere Server befinden sich in Frankfurt Edge-Rechenzentren mit dedizierter Bandbreite, sodass Senderwechsel sofort erfolgen und Streams selbst in den verkehrsreichsten Momenten – etwa an Bundesliga-Spieltagen, bei Champions-League-Finals oder Formel-1-Rennen – flüssig bleiben.
            </p>

            <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
              Das Setup gehört zu den Punkten, die Kunden in Bewertungen am häufigsten loben. Sie müssen kein Technikprofi sein. Sie wählen ein Paket, schreiben unserem Team per WhatsApp und wir begleiten Sie bei der Installation einer App wie IPTV Extreme oder IBO Player Pro auf Ihrem Firestick, Smart TV oder Smartphone. Sobald Sie startklar sind, erhalten Sie einen kostenlosen 24-Stunden-Test, um die Bildqualität zu prüfen, das Sportangebot zu testen und sicherzustellen, dass auf Ihrer Internetverbindung alles einwandfrei funktioniert, bevor Sie upgraden.
            </p>

            <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
              Die SmartOne IPTV Senderliste deckt alles ab, was ein deutschsprachiger Haushalt sich wünschen kann. Sie erhalten ARD, ZDF, RTL, ProSieben, SAT.1, VOX und mehr neben Live-Sport mit Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL und Handball. Filme und komplette Serienboxsets landen täglich in der On-Demand-Bibliothek von HBO, Netflix, Disney, Paramount und Apple. Internationale Sender aus UK, USA, Österreich, Schweiz, Frankreich, Italien und Spanien sind in leicht zu durchsuchende Gruppen organisiert, sodass Sie alles in Sekunden finden.
            </p>

            <p className="text-[#0A0A0C]/85 text-base md:text-lg leading-relaxed font-medium">
              Die Preise sind in Euro (inkl. MwSt.) und es gibt keine Vertragslaufzeit. Sie wählen die Anzahl der Geräte, die Sie zu Hause benötigen, entscheiden zwischen einem 3-, 6- oder 12-Monats-Paket und können jederzeit kündigen oder ändern. Das ist der SmartOne IPTV Unterschied. Keine versteckten Gebühren, keine langfristigen Verpflichtungen und kein Druck, sich zu binden, bevor Sie wissen, dass der Service für Sie richtig ist.
            </p>
          </div>
        </FadeIn>

        <br /><br />

        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#DD0000]/20 bg-[#f2ebeb] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DD0000]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCE00]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DD0000]/30 bg-[#DD0000]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#DD0000]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#DD0000] flex items-center gap-1.5">
                  SmartOne IPTV Deutschland
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                SMARTONE IPTV <br />
                <span className="text-[#DD0000]">HEUTE KAUFEN</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Wählen Sie Ihr SmartOne IPTV Paket, schreiben Sie uns per WhatsApp und wir richten alles auf Ihrem Gerät ein. Testen Sie zuerst kostenlos und upgraden Sie erst auf ein bezahltes Abonnement, wenn Sie zufrieden sind. Keine Vertragslaufzeit. Keine Sorgen.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#DD0000]/25 border border-[#FFCE00]"
                >
                  SmartOne IPTV Paket Wählen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DD0000]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#DD0000]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 text-[#DD0000] shrink-0" /> Kostenlos IPTV Testen
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#DD0000] uppercase tracking-wider">
                Erst Kostenlos Testen • WhatsApp Einrichtung • Keine Vertragslaufzeit
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}