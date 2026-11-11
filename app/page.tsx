'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from './components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import GermanFlag from './components/GermanFlag';
import {
  PlayCircle,
  UserCheck,
  BookOpen,
  Star,
  ShieldCheck,
  Zap,
  CreditCard,
  CheckCircle2,
  MonitorSmartphone,
  Tv2,
  Cpu,
  ArrowRight,
  Lock,
  ThumbsUp,
  Trophy,
  Medal,
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#DD0000] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#121214] rounded-3xl animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#DD0000] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">
      <ProductSchema />
      <FAQSchema />

      {/* ============================================================
          HERO — PRIMARY "IPTV Deutschland" + 2nd focus "iptv kaufen"
      ============================================================ */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="IPTV Deutschland – 4K IPTV Streaming mit 36.000+ Live TVs, Filmen, Serien und Movies"
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
              IPTV Deutschland – Führender Streaming-Dienst
              <GermanFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            IPTV DEUTSCHLAND <br />
            <span className="text-[#FFCE00]">JETZT IPTV KAUFEN</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Erleben Sie erstklassiges IPTV Deutschland über hochmoderne Frankfurter Server: Über 36.000 Live-Sender, 120.000 Filme, Serien, Movies und Sport in gestochen scharfer 4K IPTV Qualität für jedes Endgerät. Profitieren Sie von flexiblen Tarifen ohne Mindestlaufzeit, sofortiger Aktivierung, transparenten Euro-Preisen und der Option, unseren Service völlig risikofrei zu testen.
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
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#FFCE00]" /> 4K IPTV Qualität</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#FFCE00]" /> 99,9% Server Uptime</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFCE00]" /> Anti-Freeze Technologie</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* ============================================================
          SETUP SECTION — 2nd focus "iptv kaufen" + long-tail "iptv anbieter günstig"
      ============================================================ */}
      <section className="py-28 bg-[#f2ebeb] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#DD0000] animate-pulse" />
                <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                  IPTV Deutschland Einrichtung
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1A1E] tracking-tight uppercase leading-[1.05]">
                IPTV ANBIETER GÜNSTIG KAUFEN <br className="hidden sm:block" />
                <span className="text-[#DD0000] relative inline-block mt-1">
                  IN 3 SCHRITTEN
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#FFCE00]/50 to-transparent rounded-full" />
                </span>
              </h2>

              <p className="text-[#1A1A1E]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Profitieren Sie von erstklassigen Konditionen beim etablierten Anbieter für den DACH-Raum: Tarif aussuchen, bequeme WhatsApp-Einrichtung abschließen, Plattform kostenfrei ausprobieren und Ihren Zugang freischalten.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFCE00] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#FFCE00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCE00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#DD0000]">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCE00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Eins
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCE00] transition-colors">
                  Gewünschtes Streaming-Paket Wählen
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Entscheiden Sie sich flexibel für 1 bis 3 Geräte sowie Laufzeiten von 3, 6 oder 12 Monaten. Nutzen Sie unseren preiswerten Service inklusive aller Steuern ohne lästige Vertragspflichten.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> 1, 2 oder 3 Geräte Optionen</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> 3, 6 oder 12 Monate Laufzeit</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> IPTV Anbieter günstig ohne Vertrag</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCE00] transition-colors">
                  IPTV Deutschland Start
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCE00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFCE00] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FFCE00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCE00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#DD0000]">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCE00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Zwei
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCE00] transition-colors">
                  Schnelle Einrichtung per WhatsApp
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Wir senden Ihnen die M3U- und Xtream-Zugangsdaten direkt per E-Mail zu. Dank unseres kompetenten WhatsApp-Supports ist die Konfiguration auf Firestick, Smart TVs, Android oder iOS im Handumdrehen erledigt.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> M3U / Xtream Codes per E-Mail</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> IPTV Extreme, IBO Player Support</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> IPTV TV auf Firestick und Smart TV</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCE00] transition-colors">
                  IPTV TV Setup
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCE00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFCE00] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFCE00]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFCE00] px-4 py-1 rounded-2xl shadow-md tracking-tight border border-[#DD0000]">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFCE00] px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Drei
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFCE00] transition-colors">
                  Risikofrei Probieren
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Testen Sie unsere hervorragende 4K-Bildqualität, den umfangreichen Filmkatalog und sämtliche Live-Sender vorab völlig unverbindlich, bevor Sie sich für ein volles Abonnement entscheiden.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> Kostenlos IPTV Test 24 Stunden</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> Filme, Serien, Movies testen</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FFCE00]" /> Upgrade nur bei Zufriedenheit</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFCE00] transition-colors">
                  Kostenlos IPTV
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFCE00] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================================
          LIVING ROOM — "4K IPTV" + "iptv tv" + "iptv deutschland"
      ============================================================ */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCE00]">
            Heimkino mit IPTV Deutschland
            <GermanFlag className="w-4 h-4" />
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            4K IPTV UND IPTV TV IM <span className="text-[#FFCE00]">WOHNZIMMER</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="4K IPTV und IPTV TV Service auf einem Smart TV mit IPTV Deutschland"
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
            Verwandeln Sie Ihr Wohnzimmer in ein echtes Heimkino: Genießen Sie packende Spielfilme, beliebte Serien und hochauflösendes Live-Fernsehen direkt auf Ihrem großen Bildschirm. Dank unserer stabilen Server in Frankfurt streamen Sie absolut flüssig und ohne lästige Pufferzeiten in ganz Deutschland, Österreich und der Schweiz.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/preise"
              className="bg-[#DD0000] border border-[#FFCE00] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-transform hover:scale-105 rounded-full shadow-xl shadow-[#DD0000]/30"
            >
              IPTV Abonnement Aktivieren
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SENDER SECTION — long-tail "iptv anbieter alle sender"
      ============================================================ */}
      <section
        id="sender"
        className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              IPTV ANBIETER ALLE SENDER UND LIVE TV
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              Entdecken Sie unser riesiges Portfolio mit über 36.000 Live-Kanälen, Blockbustern, Serien und Sportangeboten. Perfekt optimiert für deutsche Programme sowie internationale Sender im gesamten DACH-Raum.
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

      {/* Pricing */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center">
        <ShareButtons />
      </section>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#DD0000]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Sichere Zahlung</div>
                <p className="text-slate-600 font-medium text-xs mt-1">
                  Kreditkarte, PayPal, SEPA, Krypto. IPTV Deutschland mit sicherem Checkout.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#DD0000]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Kostenlos IPTV Testen</div>
                <p className="text-slate-600 font-medium text-xs mt-1">
                  Kostenlos IPTV testen auf eigenem Gerät, danach IPTV kaufen nur bei Zufriedenheit.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#DD0000]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">IPTV Extreme Support</div>
                <p className="text-slate-600 font-medium text-xs mt-1">
                  IPTV Extreme, IBO Player Einrichtung per WhatsApp durch IPTV Anbieter Team.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#DD0000]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg uppercase tracking-tight">Frankfurt Server</div>
                <p className="text-slate-600 font-medium text-xs mt-1">
                  IPTV Deutschland mit Frankfurt Edge Servern, unter 10ms Latenz für DACH.
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#DD0000] relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              IPTV DEUTSCHLAND LEISTUNGSZAHLEN
            </h3>
            <p className="text-[#FFCE00] text-base font-bold mt-4 uppercase tracking-wider">
              Deutschland, Austria, Schweiz. IPTV kaufen bei über 15.000 Zuschauern.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#DD0000] mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">IPTV Kunden</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#DD0000] mb-2">
                <AnimatedCounter value={36} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Live TVs</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#DD0000] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Filme und Serien</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#DD0000] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-600 font-extrabold uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full bg-[#FFCE00] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>

      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits — "besten iptv anbieter" */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden border-t border-[#0A0A0C]/5">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD0000] animate-pulse" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                Besten IPTV Anbieter für Deutschland
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
              BESTEN IPTV ANBIETER MIT <span className="text-[#DD0000]">4K IPTV</span>
            </h2>
            <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Erleben Sie den führenden IPTV-Anbieter für Deutschland, Österreich und die Schweiz: Gestochen scharfes 4K-Streaming, zehntausende Live-Kanäle und ein riesiges On-Demand-Archiv erwarten Sie.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                ),
                title: 'Umfangreiche VOD-Mediathek',
                desc: 'Über 120.000 ausgewählte Blockbuster und Serien in brillanter 4K-Qualität, die täglich mit neuen Titeln aktualisiert wird.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Stabile Anti-Freeze Server',
                desc: 'Hochperformante Serverinfrastruktur verhindert Bildabbrüche und sorgt für flüssigen Live-Sportgenuss.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                title: 'Rechenzentrum in Frankfurt',
                desc: 'Lokale Serverstandorte in Frankfurt gewährleisten minimale Verzögerungen unter 10ms für den gesamten DACH-Raum.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Top-Sportevents live erleben',
                desc: 'Verfolgen Sie Bundesliga, UEFA Champions League, DFB-Pokal und Formel 1 direkt in bester Übertragungsqualität.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Übersichtlicher 7-Tage EPG',
                desc: 'Integrierter Programmführer für alle Sender mit praktischer Übersicht über das aktuelle und kommende TV-Programm.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Multi-Device Kompatibilität',
                desc: 'Kompatibel mit Firestick, Smart TVs, Android, iOS und Playern wie TiviMate oder IPTV Extreme.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0A0A0C] text-[#f2ebeb] rounded-[2.5rem] p-8 border-2 border-[#DD0000] shadow-xl hover:border-[#FFCE00] hover:shadow-[0_20px_45px_rgba(221,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center mb-6 shadow-lg shadow-[#DD0000]/30">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#FAFAFA]/90 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#DD0000]/40 flex items-center justify-between text-xs font-bold text-[#FFCE00]">
                  <span className="uppercase tracking-wider">IPTV Feature</span>
                  <span className="w-2 h-2 rounded-full bg-[#DD0000]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#f2ebeb] relative border-t border-[#0A0A0C]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DD0000] animate-pulse" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                36.000 Live TVs
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0C] mb-6 uppercase tracking-tight leading-none">
              IPTV ANBIETER ALLE SENDER <span className="text-[#DD0000]">KATEGORIEN</span>
            </h2>
            <p className="text-[#0A0A0C]/80 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unser riesiges Senderangebot: Live-Sport, deutsche Hauptprogramme, Blockbuster, Kinderfernsehen und internationale Spartenkanäle.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: 'Live TV Sport', channels: 'Bundesliga, Champions League, DFB-Pokal, Formel 1. IPTV Deutschland mit Live TV Sport.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>) },
              { cat: 'Deutsche Sender', channels: 'IPTV Anbieter alle Sender: öffentlich-rechtlich, privat, regional. German IPTV und IPTV Germany.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
              { cat: 'Filme und Serien', channels: '120.000 Filme, Serien, Movies. 4K IPTV VOD täglich aktualisiert.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>) },
              { cat: 'Kids und Familie', channels: 'IPTV TV für Kinder: Cartoons, Familie, lehrreiche Serien.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { cat: 'US und UK Sender', channels: 'IPTV TV USA, UK. IPTV Germany mit internationalen Sendern.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>) },
              { cat: 'Internationale Sender', channels: 'IPTV Anbieter alle Sender aus Europa, Asien, Amerika.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>) },
              { cat: 'Doku und Natur', channels: 'Live TV Doku: Wissenschaft, Geschichte, Tierwelt.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>) },
              { cat: 'Kampfsport und PPV', channels: 'IPTV Anbieter mit UFC, Boxen, Wrestling, PPV.', iconSvg: (<svg className="w-6 h-6 text-[#FFCE00]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0A0A0C] text-[#f2ebeb] rounded-3xl p-6 border-2 border-[#DD0000] shadow-lg hover:border-[#FFCE00] hover:shadow-[0_15px_30px_rgba(221,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#DD0000] flex items-center justify-center shrink-0 border border-[#FFCE00] shadow-md">
                      {item.iconSvg}
                    </div>
                    <h3 className="font-black text-[#f2ebeb] text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-[#FAFAFA]/90 font-semibold text-xs leading-relaxed">{item.channels}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DD0000]/30 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#FFCE00] tracking-widest">
                  <span>4K IPTV</span>
                  <span>Live TV</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#0a0a0c] py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Block 1: 4K IPTV */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#DD0000]/40 p-3 shadow-2xl transition-all duration-500 hover:border-[#FFCE00]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="4K IPTV kaufen bei IPTV Deutschland: Live TV auf Smart TV mit Frankfurt Servern"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#DD0000]/50 shadow-md">
                  4K IPTV
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#DD0000]/40 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DD0000] text-[#f2ebeb] shrink-0 shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00]">
                      <PlayCircle className="h-6 w-6 text-[#FFCE00]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">4K IPTV Streaming</p>
                      <p className="text-xs font-medium text-[#FAFAFA]/90 mt-0.5">
                        IPTV Deutschland mit 4K IPTV Bildqualität auf jedem Gerät.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DD0000]/15 border border-[#DD0000]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCE00]">
                <span className="w-2 h-2 rounded-full bg-[#DD0000] animate-pulse" />
                4K IPTV Kaufen
                <GermanFlag className="w-4 h-4" />
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                4K IPTV KAUFEN BEI <br />
                <span className="text-[#FFCE00] relative inline-block mt-1">
                  BESTEN IPTV ANBIETER
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#DD0000]/60 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium">
                Sichern Sie sich erstklassiges Streaming über leistungsstarke Serverknoten in Frankfurt. Genießen Sie Fernsehen und On-Demand-Inhalte in brillanter Ultra-HD-Auflösung ohne Kompromisse.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Kompatibel mit allen gängigen Endgeräten für den optimalen Fernsehgenuss im gesamten deutschsprachigen Raum.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-Freeze 4K IPTV Server',
                  'IPTV Anbieter alle Sender',
                  '120.000 Filme und Serien',
                  'IPTV TV auf Firestick, Smart TV',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#DD0000]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFCE00] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#DD0000] text-[#FFCE00] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#DD0000] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
                >
                  4K IPTV Jetzt Kaufen
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2: Live Sports */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DD0000]/15 border border-[#DD0000]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFCE00]">
                <span className="w-2 h-2 rounded-full bg-[#DD0000] animate-pulse" />
                Live TV und Sport
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f2ebeb] leading-[1.1] mb-6">
                LIVE TV MIT BUNDESLIGA, <br />
                <span className="text-[#FFCE00] relative inline-block mt-1">
                  CHAMPIONS LEAGUE, FORMEL 1
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#DD0000]/60 rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-[#FAFAFA]/90 font-medium">
                Verpassen Sie kein einziges sportliches Highlight mehr: Erleben Sie alle Begegnungen der Bundesliga, UEFA Champions League sowie spannende Formel-1-Rennen live und in Echtzeit.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#FAFAFA]/80 font-medium">
                Optimierte Bildwiederholraten von 60 FPS garantieren gestochen scharfe Bewegungsabläufe bei sämtlichen Sportübertragungen.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Bundesliga, Champions League, DFB-Pokal',
                  'Formel 1, UFC, Boxen, PPV Live TV',
                  'Niedrige Latenz Live TV 60 FPS',
                  'IPTV Anbieter alle Sport Sender',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#121214] text-[#f2ebeb] border border-[#DD0000]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFCE00] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#DD0000] text-[#FFCE00] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="#sender"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#121214] border-2 border-[#DD0000] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#DD0000] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Live TV Sender Entdecken
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#121214] border-2 border-[#DD0000]/40 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#FFCE00]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="Live TV mit Bundesliga und Champions League bei IPTV Deutschland"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#f2ebeb] border border-[#DD0000]/50 shadow-md">
                  Live TV Sport
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#0a0a0c]/95 backdrop-blur-md border border-[#DD0000]/40 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#DD0000] text-[#FFCE00] shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-[#f2ebeb]">IPTV Sport Paket</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#FFCE00]">
                        Live TV und PPV Events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden bg-[#DD0000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0A0A0C]/30 px-4 py-2 rounded-full border border-[#FFCE00]/40 mb-6">
              <BarChart className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#f2ebeb] font-extrabold text-xs uppercase tracking-wider">
                IPTV Vergleich
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight">
              IPTV DEUTSCHLAND VS. KABEL TV
            </h2>
            <p className="text-[#FAFAFA]/90 text-lg max-w-3xl mx-auto font-medium">
              Erfahren Sie, warum unser moderner Streaming-Dienst dem herkömmlichen Kabelfernsehen in Sachen Senderauswahl, Flexibilität und Kosten deutlich überlegen ist.
            </p>
          </FadeIn>

          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-3xl border border-[#FFCE00]/30 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-[#DD0000]/60 bg-[#18181B]">
                  <h3 className="text-lg font-black uppercase text-[#f2ebeb]">IPTV Vergleich</h3>
                </div>
                <div className="p-6 border-b border-r border-[#DD0000]/60 bg-[#B00000]">
                  <h3 className="text-lg font-black uppercase text-[#FFCE00]">IPTV Deutschland</h3>
                </div>
                <div className="p-6 border-b border-[#DD0000]/60 bg-[#121214]">
                  <h3 className="text-lg font-black uppercase text-[#FAFAFA]/70">Kabel TV</h3>
                </div>

                {[
                  { feature: 'Monatliche Kosten', us: 'Ab ~15 € / Monat', cable: '40 bis 90 € pro Monat' },
                  { feature: 'Vertragsbedingungen', us: 'Keine Vertragslaufzeit', cable: '12 bis 24 Monate Vertrag' },
                  { feature: 'Live TVs', us: '36.000 Live TVs', cable: '60 bis 100 Sender' },
                  { feature: 'Filme und Serien', us: '120.000 Filme und Serien', cable: 'Begrenzte Auswahl' },
                  { feature: '4K IPTV Qualität', us: '4K IPTV Standard', cable: 'Extra HD-Gebühren', usIcon: true },
                  { feature: 'IPTV TV Multi-Device', us: 'IPTV TV Multi-Device', cable: 'Receiver Miete', usIcon: true },
                  { feature: 'Live TV Sport', us: 'Live TV Sport inklusive', cable: 'Extra Sportpaket', usIcon: true },
                  { feature: 'IPTV Anbieter alle Sender', us: 'IPTV Anbieter alle Sender', cable: 'Eingeschränkt' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#18181B]' : 'bg-[#27272A]'}`}>
                      <span className="text-[#f2ebeb] font-bold text-sm">{row.feature}</span>
                    </div>

                    <div className={`p-6 border-r border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#B00000]' : 'bg-[#8C0000]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#FFCE00]" />
                          <span className="text-[#f2ebeb] font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#FFCE00] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    <div className={`p-6 border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#1A1A1E]'}`}>
                      <span className="text-[#FAFAFA]/70 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {[
              { feature: 'IPTV Kosten', us: 'Ab ~15 €/Monat', cable: '40–90 €/Monat' },
              { feature: 'IPTV Vertrag', us: 'Kein Vertrag', cable: '12–24 Monate' },
              { feature: 'Live TVs', us: '36.000 Live TVs', cable: '60–100 Sender' },
              { feature: 'Filme und Serien', us: '120.000 Titel', cable: 'Begrenzt' },
              { feature: '4K IPTV', us: '4K IPTV Standard', cable: 'Extra HD-Gebühr' },
              { feature: 'IPTV TV Multi-Device', us: 'IPTV TV Multi-Device', cable: 'Receiver Miete' },
              { feature: 'Live TV Sport', us: 'Live TV Sport inklusive', cable: 'Extra Sportpaket' },
              { feature: 'IPTV Anbieter alle Sender', us: 'IPTV Anbieter alle Sender', cable: 'Eingeschränkt' },
            ].map((row, idx) => (
              <div key={idx} className="bg-[#18181B] text-[#f2ebeb] rounded-3xl border border-[#FFCE00]/30 p-5 shadow-lg">
                <div className="text-center mb-3">
                  <span className="text-[#FFCE00] text-xs font-black uppercase tracking-wider">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="text-left bg-[#B00000] p-3 rounded-2xl flex-1 border border-[#DD0000]">
                    <div className="text-[#FFCE00] font-black text-sm">{row.us}</div>
                    <div className="text-[#FAFAFA]/90 text-[10px] font-bold uppercase">IPTV Deutschland</div>
                  </div>
                  <div className="text-right bg-[#121214] p-3 rounded-2xl flex-1 border border-white/10">
                    <div className="text-[#FAFAFA]/60 line-through text-sm">{row.cable}</div>
                    <div className="text-[#FAFAFA]/50 text-[10px] font-bold uppercase">Kabel TV</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#f2ebeb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 px-4 py-2 rounded-full border border-[#DD0000]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-extrabold text-xs uppercase tracking-wider">
                IPTV Deutschland Kunden Feedback
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-6 uppercase tracking-tight">
              VERTRAUT VON 15.000 <span className="text-[#DD0000]">IPTV KUNDEN</span>
            </h2>
            <p className="text-[#1A1A1E]/80 text-lg font-medium max-w-2xl mx-auto">
              Erfahrungsberichte echter Anwender aus Berlin, Hamburg, München, Wien, Zürich und dem gesamten DACH-Raum.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas K.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: 'Dank der Frankfurter Server läuft die Bundesliga bei mir völlig ruckelfrei. Die 4K-Bildqualität ist einfach phänomenal.',
                role: 'München',
              },
              {
                name: 'Sabine M.',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: 'Der WhatsApp-Support hat mir bei der Einrichtung sofort geholfen. Nach dem kostenlosen Test habe ich mich direkt für das Jahresabo entschieden.',
                role: 'Hamburg',
              },
              {
                name: 'Jens P.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: 'Absolut die beste Wahl für Streaming im DACH-Raum. Die Programmauswahl ist riesig und Apps wie IPTV Extreme laufen tadellos.',
                role: 'Berlin',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-8 border border-[#DD0000]/20 shadow-xl transition-all hover:-translate-y-2 hover:border-[#DD0000] hover:shadow-2xl duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} – IPTV Kunde bei IPTV Deutschland`}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-[#DD0000] shadow-md shrink-0"
                      />
                      <div>
                        <div className="font-black text-[#1A1A1E] text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#DD0000]" />
                        </div>
                        <div className="text-[#DD0000] text-xs font-bold uppercase tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFCE00] text-[#FFCE00]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#1A1A1E]/80 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#DD0000]/15 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#DD0000] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#DD0000]" /> IPTV Kunde
                  </span>
                  <span className="text-[11px] font-bold text-[#1A1A1E]/50 uppercase">
                    Deutschland
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Devices */}
      <section className="py-24 bg-[#08080A] w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DD0000]/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dd00000a_1px,transparent_1px),linear-gradient(to_bottom,#dd00000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 px-4 py-2 rounded-full border border-[#DD0000]/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[#DD0000] animate-pulse" />
              <span className="text-[#FFCE00] font-extrabold text-xs uppercase tracking-widest">
                IPTV Extreme, IBO Player, TiviMate
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#f2ebeb] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              IPTV TV AUF ALLEN GERÄTEN
            </h2>

            <p className="text-[#FAFAFA]/80 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Voll kompatibel mit gängigen Playern wie IPTV Extreme, IBO Player und TiviMate. Nutzen Sie M3U-Playlists und Xtream Codes flexibel auf all Ihren Endgeräten.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { tag: 'Amazon Firestick & Fire TV', desc: 'Fire OS, Fire TV Cube, 4K Sticks', detail: 'IPTV kaufen für Firestick: IPTV Extreme, IBO Player. IPTV TV auf Fire TV.', icon: Zap, code: '01' },
              { tag: 'Smart TVs (Samsung & LG)', desc: 'Samsung Tizen, LG webOS', detail: 'IPTV TV auf Smart TV: IPTV Extreme, Smart IPTV Player aus App Store.', icon: Tv2, code: '02' },
              { tag: 'Android TV & Streaming', desc: 'Nvidia Shield, Google TV', detail: 'IPTV Deutschland für Android TV: 4K IPTV Hardware Dekodierung.', icon: Cpu, code: '03' },
              { tag: 'Apple TV, iPhone & iPad', desc: 'tvOS, iOS', detail: 'IPTV TV auf Apple: 4K IPTV Streaming auf iPhone, iPad, Apple TV.', icon: Smartphone, code: '04' },
              { tag: 'Windows PCs & Mac', desc: 'Windows 10/11, macOS, Linux', detail: 'IPTV kaufen für Desktop: 4K IPTV auf Windows und Mac.', icon: MonitorSmartphone, code: '05' },
              { tag: 'MAG & Set-Top-Boxen', desc: 'MAG, Formuler, Portal Player', detail: 'IPTV Extreme, IPTV TV auf MAG und Formuler mit EPG.', icon: ShieldCheck, code: '06' },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.tag}
                  className="group relative bg-[#f2ebeb] text-[#1A1A1E] border border-[#DD0000]/30 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#DD0000] hover:shadow-[0_12px_35px_rgba(221,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#DD0000] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#DD0000] border border-[#FFCE00] flex items-center justify-center shrink-0 group-hover:bg-[#B00000] group-hover:scale-105 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-[#FFCE00] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#1A1A1E] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#DD0000] mt-0.5">{device.desc}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#0A0A0C] bg-[#FFCE00] border border-[#DD0000] px-2.5 py-1 rounded-xl shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#1A1A1E]/75 leading-relaxed pt-2 border-t border-[#1A1A1E]/10">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* FAQ */}
      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Blog */}
      <section className="py-24 bg-[#f2ebeb] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 px-4 py-2 rounded-full border border-[#DD0000]/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#DD0000]" />
                <span className="text-[#DD0000] font-extrabold text-xs uppercase tracking-widest">
                  IPTV Ratgeber
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1E] mb-4 uppercase tracking-tight">
                IPTV DEUTSCHLAND <span className="text-[#DD0000]">ANLEITUNGEN</span>
              </h2>
              <p className="text-[#1A1A1E]/70 text-lg font-medium max-w-2xl leading-relaxed">
                Nützliche Tipps, Schritt-für-Schritt-Guides und Installationshilfen rund um das Thema IPTV-Streaming.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/blog"
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#DD0000] text-[#FAFAFA] font-black hover:bg-[#B00000] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl border border-[#FFCE00] hover:shadow-[0_10px_25px_rgba(221,0,0,0.3)]"
              >
                <span className="uppercase text-xs tracking-wider">Alle IPTV Artikel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#FFCE00]" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#FAFAFA] text-[#1A1A1E] rounded-3xl p-4 border-2 border-[#DD0000]/15 shadow-md hover:border-[#DD0000] hover:shadow-[0_20px_40px_rgba(221,0,0,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A1A1E]">
                        <Image
                          src={post.image}
                          alt={`${post.title} – IPTV Deutschland Ratgeber`}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#DD0000]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#DD0000] text-[#FAFAFA] text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md border border-[#FFCE00]">
                            {post.author || 'IPTV Anleitung'}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <span className="px-2.5 py-1 bg-[#1A1A1E]/80 backdrop-blur-md text-[#f2ebeb] text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-[#f2ebeb]/20">
                            5 Min. Lesezeit
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#1A1A1E] mb-2.5 group-hover:text-[#DD0000] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#1A1A1E]/70 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#DD0000]/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#DD0000] uppercase tracking-wider group-hover:text-[#B00000] transition-colors">
                        IPTV Artikel Lesen
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-[#DD0000]/10 border border-[#DD0000]/30 flex items-center justify-center text-[#DD0000] group-hover:bg-[#DD0000] group-hover:text-[#FAFAFA] group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">
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
                  IPTV Deutschland
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                IPTV DEUTSCHLAND <br />
                <span className="text-[#DD0000]">JETZT IPTV KAUFEN</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Starten Sie jetzt mit erstklassigem 4K-Streaming: Profitieren Sie von zehntausenden Live-Sendern, riesigen Mediatheken und unserem reibungslosen WhatsApp-Installationsservice.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Live TVs'],
                  ['4K IPTV', 'Stream-Qualität'],
                  ['99,99%', 'Server Uptime'],
                  ['24/7', 'IPTV Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl sm:rounded-3xl border border-[#DD0000]/20 bg-[#FAFAFA] p-4 shadow-sm hover:border-[#DD0000] transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#DD0000]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#1A1A1E]/70">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#DD0000]/25 border border-[#FFCE00]"
                >
                  IPTV Kaufen Jetzt
                </Link>
                <Link
                  href="/firestick-einrichtung"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DD0000]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#DD0000]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#DD0000] shrink-0" /> IPTV Anleitung
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#DD0000] uppercase tracking-wider">
                Kostenlos IPTV Testen • IPTV Kaufen • WhatsApp Einrichtung
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}