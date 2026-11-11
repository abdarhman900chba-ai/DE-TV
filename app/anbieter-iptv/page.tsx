'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { ProductSchema, FAQSchema } from '../components/PageSchemas';
import { blogPosts } from '@/lib/blog';
import GermanFlag from '../components/GermanFlag';
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
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import TargetCountries from '../components/TargetCountries';
import ShareButtons from '../components/ShareButtons';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center bg-black">
      <div className="h-12 w-12 animate-spin border-4 border-[#DD0000] border-t-transparent rounded-none" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('../components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#121214] rounded-none animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('../components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#121214] rounded-none animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center bg-black">
      <div className="h-12 w-12 animate-spin border-4 border-[#DD0000] border-t-transparent rounded-none" />
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
          HERO SECTION
      ============================================================ */}
      <section className="relative px-4 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="IPTV Subscription – 4K IPTV Streaming mit 36.000+ Live TVs, Filmen, Serien und Movies"
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
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-5 py-2 rounded-none mb-6 backdrop-blur-md">
            <Medal className="w-4 h-4 text-[#FFD700]" />
            <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              IPTV Subscription – Führender Streaming-Dienst
              <GermanFlag className="w-7 h-7 rounded-none shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            IPTV SUBSCRIPTION <br />
            <span className="text-[#FFD700]">JETZT IPTV KAUFEN</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Erleben Sie erstklassiges Streaming über hochmoderne Server: Über 36.000 Live-Sender, 120.000 Filme, Serien, Movies und Sport in gestochen scharfer 4K IPTV Qualität für jedes Endgerät. Profitieren Sie von flexiblen Tarifen ohne Mindestlaufzeit, sofortiger Aktivierung, transparenten Euro-Preisen und der Option, unseren Service völlig risikofrei zu testen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link
              href="/preise"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-none bg-[#FFD700] text-[#0A0A0C] font-black text-sm hover:bg-[#e6c200] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg border border-[#DD0000]"
            >
              Jetzt IPTV Kaufen
            </Link>
            <Link
              href="/kostenlos-testen"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-none bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFD700] shrink-0" /> Kostenlos IPTV Testen
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-none border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#FFD700]" /> 4K IPTV Qualität</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#FFD700]" /> 99,9% Server Uptime</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD700]" /> Anti-Freeze Technologie</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider */}
      <div className="min-h-[128px] bg-black">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* ============================================================
          SETUP SECTION
      ============================================================ */}
      <section className="py-28 bg-[#0a0a0c] w-full relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-none mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-none bg-[#DD0000] animate-pulse" />
                <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                  IPTV Subscription Einrichtung
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f2ebeb] tracking-tight uppercase leading-[1.05]">
                IPTV ANBIETER GÜNSTIG KAUFEN <br className="hidden sm:block" />
                <span className="text-[#FFD700] relative inline-block mt-1">
                  IN 3 SCHRITTEN
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#DD0000]/50 to-transparent rounded-none" />
                </span>
              </h2>

              <p className="text-[#f2ebeb]/80 text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Profitieren Sie von erstklassigen Konditionen: Tarif aussuchen, bequeme WhatsApp-Einrichtung abschließen, Plattform kostenfrei ausprobieren und Ihren Zugang freischalten.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#121214] text-[#f2ebeb] rounded-none p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFD700] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFD700] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFD700] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#DD0000]">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Eins
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFD700] transition-colors">
                  Gewünschtes Paket Wählen
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Entscheiden Sie sich flexibel für 1 bis 3 Geräte sowie Laufzeiten von 3, 6 oder 12 Monaten. Nutzen Sie unseren preiswerten Service inklusive aller Steuern ohne lästige Vertragspflichten.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> 1, 2 oder 3 Geräte Optionen</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> 3, 6 oder 12 Monate Laufzeit</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> Günstig ohne Vertrag</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                  Start
                </span>
                <div className="w-9 h-9 rounded-none bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFD700] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#121214] text-[#f2ebeb] rounded-none p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFD700] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFD700] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFD700] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#DD0000]">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Zwei
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFD700] transition-colors">
                  Einrichtung per WhatsApp
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Wir senden Ihnen die M3U- und Xtream-Zugangsdaten direkt per E-Mail zu. Dank unseres kompetenten WhatsApp-Supports ist die Konfiguration im Handumdrehen erledigt.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> M3U / Xtream Codes per E-Mail</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> IPTV Extreme, IBO Player Support</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> Kompatibel mit allen Geräten</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                  Setup
                </span>
                <div className="w-9 h-9 rounded-none bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFD700] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-[#121214] text-[#f2ebeb] rounded-none p-8 sm:p-10 border-2 border-[#DD0000] shadow-[0_15px_35px_rgba(221,0,0,0.2)] hover:border-[#FFD700] hover:shadow-[0_25px_50px_rgba(221,0,0,0.35)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-none bg-[#DD0000] text-[#f2ebeb] shadow-lg shadow-[#DD0000]/40 border border-[#FFD700] group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#0A0A0C] bg-[#FFD700] px-4 py-1 rounded-none shadow-md tracking-tight border border-[#DD0000]">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-[#0A0A0C] bg-[#FFD700] px-3.5 py-1.5 rounded-none mb-4 shadow-sm border border-[#DD0000]">
                  Schritt Drei
                </div>

                <h3 className="text-2xl font-black text-[#f2ebeb] mb-3 uppercase tracking-tight group-hover:text-[#FFD700] transition-colors">
                  Risikofrei Testen
                </h3>

                <p className="text-[#FAFAFA]/90 text-sm font-medium leading-relaxed mb-6">
                  Testen Sie unsere hervorragende 4K-Bildqualität, den umfangreichen Katalog und sämtliche Live-Sender vorab völlig unverbindlich, bevor Sie sich für ein Abonnement entscheiden.
                </p>

                <ul className="text-xs font-bold text-[#FAFAFA]/80 space-y-2.5 mb-8">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> Kostenloser Test verfügbar</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> Filme, Serien testen</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-none bg-[#FFD700]" /> Upgrade nur bei Zufriedenheit</li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#DD0000]/40 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#FAFAFA] uppercase tracking-wider group-hover:text-[#FFD700] transition-colors">
                  Testen
                </span>
                <div className="w-9 h-9 rounded-none bg-[#DD0000] text-[#f2ebeb] flex items-center justify-center shadow-md group-hover:bg-[#FFD700] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================================
          LIVING ROOM SECTION
      ============================================================ */}
      <section className="w-full bg-[#0a0a0c] py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-none bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD700]">
            Heimkino mit IPTV Subscription
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            4K IPTV UND STREAMING IM <span className="text-[#FFD700]">WOHNZIMMER</span>
          </h2>
        </div>

        <div className="w-full bg-black/40 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
              src="/img/sofa.webp"
              alt="4K IPTV Service auf einem Smart TV"
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain rounded-none"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-slate-300 font-medium">
            Verwandeln Sie Ihr Wohnzimmer in ein echtes Heimkino: Genießen Sie packende Spielfilme, beliebte Serien und hochauflösendes Live-Fernsehen direkt auf Ihrem großen Bildschirm. Dank unserer stabilen Server streamen Sie absolut flüssig und ohne Pufferzeiten.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/preise"
              className="bg-[#FFD700] border border-[#DD0000] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#0A0A0C] hover:bg-[#e6c200] transition-transform hover:scale-105 rounded-none shadow-xl"
            >
              IPTV Abonnement Aktivieren
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          SENDER SECTION
      ============================================================ */}
      <section
        id="sender"
        className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              ALLE SENDER UND LIVE TV
            </h2>
            <p className="text-slate-300 font-medium text-lg">
              Entdecken Sie unser riesiges Portfolio mit über 36.000 Live-Kanälen, Blockbustern, Serien und Sportangeboten. Perfekt optimiert für internationale und lokale Programme.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#121214] rounded-none" />
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
        <div className="bg-[#121214] text-slate-100 border border-white/10 rounded-none p-8 md:p-12 shadow-2xl">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-white text-lg uppercase tracking-tight">Sichere Zahlung</div>
                <p className="text-slate-400 font-medium text-xs mt-1">
                  Kreditkarte, PayPal, SEPA, Krypto. Sicherer Checkout.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-white text-lg uppercase tracking-tight">Kostenlos Testen</div>
                <p className="text-slate-400 font-medium text-xs mt-1">
                  Testen Sie auf Ihrem eigenen Gerät, Kauf nur bei vollster Zufriedenheit.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-white text-lg uppercase tracking-tight">Erfahrener Support</div>
                <p className="text-slate-400 font-medium text-xs mt-1">
                  Einrichtung per WhatsApp durch unser Support-Team.
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/20 flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-white text-lg uppercase tracking-tight">High-End Server</div>
                <p className="text-slate-400 font-medium text-xs mt-1">
                  Optimierte Serverinfrastruktur für unter 10ms Latenz.
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
              LEISTUNGSZAHLEN
            </h3>
            <p className="text-[#FFD700] text-base font-bold mt-4 uppercase tracking-wider">
              Über 15.000 aktive Zuschauer weltweit.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-[#121214] text-white rounded-none border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#FFD700] mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-xs text-slate-300 font-extrabold uppercase tracking-widest mt-2">Kunden</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#121214] text-white rounded-none border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#FFD700] mb-2">
                <AnimatedCounter value={36} suffix="K+" />
              </span>
              <span className="text-xs text-slate-300 font-extrabold uppercase tracking-widest mt-2">Live TVs</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#121214] text-white rounded-none border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#FFD700] mb-2">
                <AnimatedCounter value={120} suffix="K+" />
              </span>
              <span className="text-xs text-slate-300 font-extrabold uppercase tracking-widest mt-2">Filme & Serien</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#121214] text-white rounded-none border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#FFD700] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-slate-300 font-extrabold uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full bg-[#FFD700] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <TargetCountries />
        </div>
      </section>

      <div className="min-h-[400px] bg-[#0a0a0c]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-none mb-6">
              <span className="w-2.5 h-2.5 rounded-none bg-[#DD0000] animate-pulse" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                Erstklassige Plattform mit 4K IPTV
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
              IHRE VORTEILE MIT <span className="text-[#FFD700]">4K IPTV</span>
            </h2>
            <p className="text-slate-300 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Erleben Sie modernste Streaming-Technologie: Gestochen scharfes 4K, zehntausende Live-Kanäle und ein riesiges On-Demand-Archiv erwarten Sie.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                ),
                title: 'Umfangreiche VOD-Mediathek',
                desc: 'Über 120.000 ausgewählte Blockbuster und Serien in brillanter 4K-Qualität, die täglich mit neuen Titeln aktualisiert wird.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Stabile Anti-Freeze Server',
                desc: 'Hochperformante Serverinfrastruktur verhindert Bildabbrüche und sorgt für flüssigen Live-Sportgenuss.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                ),
                title: 'Hochgeschwindigkeits-Server',
                desc: 'Optimierte Serverstandorte gewährleisten minimale Latenzen für ein reibungsloses Streaming-Erlebnis.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Top-Sportevents live',
                desc: 'Verfolgen Sie alle wichtigen Sport-Highlights und internationalen Ligen direkt in bester Übertragungsqualität.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Übersichtlicher 7-Tage EPG',
                desc: 'Integrierter Programmführer für alle Sender mit praktischer Übersicht über das aktuelle und kommende Programm.',
              },
              {
                iconSvg: (
                  <svg className="w-7 h-7 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Multi-Device Kompatibilität',
                desc: 'Kompatibel mit Firestick, Smart TVs, Android, iOS und Playern wie TiviMate oder IPTV Extreme.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121214] text-slate-100 rounded-none p-8 border-2 border-[#DD0000] shadow-xl hover:border-[#FFD700] hover:shadow-[0_20px_45px_rgba(221,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-none bg-[#DD0000] border border-[#FFD700] flex items-center justify-center mb-6 shadow-lg shadow-[#DD0000]/30">
                    {item.iconSvg}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#DD0000]/40 flex items-center justify-between text-xs font-bold text-[#FFD700]">
                  <span className="uppercase tracking-wider">Feature</span>
                  <span className="w-2 h-2 rounded-none bg-[#DD0000]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#0a0a0c] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-none mb-6">
              <span className="w-2.5 h-2.5 rounded-none bg-[#DD0000] animate-pulse" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                36.000 Live TVs
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
              SENDER <span className="text-[#FFD700]">KATEGORIEN</span>
            </h2>
            <p className="text-slate-300 font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unser riesiges Senderangebot: Live-Sport, Hauptprogramme, Blockbuster, Kinderfernsehen und internationale Spartenkanäle.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: 'Live TV Sport', channels: 'Spannende Sportereignisse, Live-Übertragungen und Pay-Per-View Events.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>) },
              { cat: 'Lokale Programme', channels: 'Öffentlich-rechtliche, private und regionale Hauptprogramme.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
              { cat: 'Filme und Serien', channels: '120.000 Filme, Serien und Movies in 4K VOD täglich aktualisiert.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>) },
              { cat: 'Familie und Kids', channels: 'Bunte Kinderunterhaltung, Cartoons und lehrreiche Serien.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>) },
              { cat: 'Internationale Sender', channels: 'Globale Unterhaltung aus US, UK und Europa.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>) },
              { cat: 'Weltweite Vielfalt', channels: 'Sender aus aller Welt in verschiedenen Sprachen.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>) },
              { cat: 'Doku und Natur', channels: 'Wissenschaft, Geschichte, Tierwelt und Dokumentationen.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>) },
              { cat: 'Kampfsport und PPV', channels: 'UFC, Boxen, Wrestling und exklusive Pay-Per-View Events.', iconSvg: (<svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>) },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121214] text-slate-100 rounded-none p-6 border-2 border-[#DD0000] shadow-lg hover:border-[#FFD700] hover:shadow-[0_15px_30px_rgba(221,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-none bg-[#DD0000] flex items-center justify-center shrink-0 border border-[#FFD700] shadow-md">
                      {item.iconSvg}
                    </div>
                    <h3 className="font-black text-white text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-slate-300 font-semibold text-xs leading-relaxed">{item.channels}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DD0000]/30 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#FFD700] tracking-widest">
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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-none pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-none pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Block 1: 4K IPTV */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-none bg-[#121214] border-2 border-[#DD0000]/40 p-3 shadow-2xl transition-all duration-500 hover:border-[#FFD700]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-none sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt="4K IPTV Streaming auf Smart TV"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105 rounded-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-none bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-white border border-[#DD0000]/50 shadow-md">
                  4K IPTV
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-none bg-[#0a0a0c]/95 backdrop-blur-md border border-[#DD0000]/40 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-none bg-[#DD0000] text-white shrink-0 shadow-lg shadow-[#DD0000]/40 border border-[#FFD700]">
                      <PlayCircle className="h-6 w-6 text-[#FFD700]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-white">4K Streaming</p>
                      <p className="text-xs font-medium text-slate-300 mt-0.5">
                        Höchste Bildqualität auf jedem Endgerät.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-none bg-[#DD0000]/15 border border-[#DD0000]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD700]">
                <span className="w-2 h-2 rounded-none bg-[#DD0000] animate-pulse" />
                4K IPTV Kaufen
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6">
                4K IPTV KAUFEN BEI <br />
                <span className="text-[#FFD700] relative inline-block mt-1">
                  DEM TOP ANBIETER
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#DD0000]/60 rounded-none" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-slate-300 font-medium">
                Sichern Sie sich erstklassiges Streaming über leistungsstarke Serverknoten. Genießen Sie Fernsehen und On-Demand-Inhalte in brillanter Ultra-HD-Auflösung ohne Kompromisse.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-Freeze 4K Server',
                  'Umfangreiche Sender-Auswahl',
                  '120.000 Filme und Serien',
                  'Kompatibel mit Firestick & Smart TV',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-none bg-[#121214] text-slate-100 border border-[#DD0000]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFD700] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-none bg-[#DD0000] text-[#FFD700] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#FFD700] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#0A0A0C] hover:bg-[#e6c200] transition-all hover:scale-105 rounded-none shrink-0 shadow-lg border border-[#DD0000]"
                >
                  Jetzt Kaufen
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2: Live Sports */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-none bg-[#DD0000]/15 border border-[#DD0000]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD700]">
                <span className="w-2 h-2 rounded-none bg-[#DD0000] animate-pulse" />
                Live TV & Sport
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6">
                LIVE TV MIT SPITZENSPORT, <br />
                <span className="text-[#FFD700] relative inline-block mt-1">
                  EVENTS & LIGEN
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#DD0000]/60 rounded-none" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-slate-300 font-medium">
                Verpassen Sie kein einziges sportliches Highlight mehr: Erleben Sie alle wichtigen Begegnungen, Ligen sowie spannende Turniere live und in Echtzeit.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Internationale Ligen & Pokale',
                  'UFC, Boxen, PPV Events',
                  'Niedrige Latenz Live TV 60 FPS',
                  'Umfangreiches Sportpaket',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-none bg-[#121214] text-slate-100 border border-[#DD0000]/30 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFD700] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-none bg-[#DD0000] text-[#FFD700] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="#sender"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#121214] border-2 border-[#DD0000] px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-[#DD0000] transition-all hover:scale-105 rounded-none shrink-0 shadow-lg"
                >
                  Sender Entdecken
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-none bg-[#121214] border-2 border-[#DD0000]/40 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#FFD700]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-none sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt="Live TV Sport Streaming"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105 rounded-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-none bg-[#0a0a0c]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-white border border-[#DD0000]/50 shadow-md">
                  Live Sport
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-none bg-[#0a0a0c]/95 backdrop-blur-md border border-[#DD0000]/40 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#DD0000] text-[#FFD700] shadow-lg shadow-[#DD0000]/40 border border-[#FFD700]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-white">Sport Paket</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#FFD700]">
                        Live TV & PPV
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
            <div className="inline-flex items-center gap-2 bg-[#0A0A0C]/30 px-4 py-2 rounded-none border border-[#FFD700]/40 mb-6">
              <BarChart className="w-4 h-4 text-[#FFD700]" />
              <span className="text-white font-extrabold text-xs uppercase tracking-wider">
                Vergleich
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              UNSER SERVICE VS. KABEL TV
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto font-medium">
              Erfahren Sie, warum unser moderner Streaming-Dienst dem herkömmlichen Kabelfernsehen in Sachen Senderauswahl, Flexibilität und Kosten deutlich überlegen ist.
            </p>
          </FadeIn>

          <div className="hidden md:block overflow-x-auto">
            <div className="rounded-none border border-[#FFD700]/30 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-[#DD0000]/60 bg-[#18181B]">
                  <h3 className="text-lg font-black uppercase text-white">Merkmal</h3>
                </div>
                <div className="p-6 border-b border-r border-[#DD0000]/60 bg-[#B00000]">
                  <h3 className="text-lg font-black uppercase text-[#FFD700]">Unser Dienst</h3>
                </div>
                <div className="p-6 border-b border-[#DD0000]/60 bg-[#121214]">
                  <h3 className="text-lg font-black uppercase text-white/70">Kabel TV</h3>
                </div>

                {[
                  { feature: 'Monatliche Kosten', us: 'Ab ~15 € / Monat', cable: '40 bis 90 € pro Monat' },
                  { feature: 'Vertragsbedingungen', us: 'Keine Vertragslaufzeit', cable: '12 bis 24 Monate Vertrag' },
                  { feature: 'Live TVs', us: '36.000 Live TVs', cable: '60 bis 100 Sender' },
                  { feature: 'Filme und Serien', us: '120.000 Titel', cable: 'Begrenzte Auswahl' },
                  { feature: '4K IPTV Qualität', us: '4K Standard', cable: 'Extra HD-Gebühren', usIcon: true },
                  { feature: 'Multi-Device', us: 'Multi-Device Support', cable: 'Receiver Miete', usIcon: true },
                  { feature: 'Live TV Sport', us: 'Inklusive', cable: 'Extra Sportpaket', usIcon: true },
                  { feature: 'Sender-Auswahl', us: 'Umfassend', cable: 'Eingeschränkt' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#18181B]' : 'bg-[#27272A]'}`}>
                      <span className="text-white font-bold text-sm">{row.feature}</span>
                    </div>

                    <div className={`p-6 border-r border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#B00000]' : 'bg-[#8C0000]'}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                          <span className="text-white font-extrabold text-sm">{row.us}</span>
                        </div>
                      ) : (
                        <span className="text-[#FFD700] font-black text-sm">{row.us}</span>
                      )}
                    </div>

                    <div className={`p-6 border-b border-[#DD0000]/30 ${idx % 2 === 0 ? 'bg-[#121214]' : 'bg-[#1A1A1E]'}`}>
                      <span className="text-white/70 text-sm font-medium">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 px-4 py-2 rounded-none border border-[#DD0000]/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-extrabold text-xs uppercase tracking-wider">
                Kundenfeedback
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              VERTRAUT VON <span className="text-[#DD0000]"> 15.000 KUNDEN</span>
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto">
              Erfahrungsberichte echter Anwender aus dem gesamten DACH-Raum.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas K.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: 'Die Server laufen extrem stabil und die 4K-Bildqualität ist einfach phänomenal.',
                role: 'Deutschland',
              },
              {
                name: 'Sabine M.',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: 'Der WhatsApp-Support hat mir bei der Einrichtung sofort geholfen. Absolut empfehlenswert!',
                role: 'Österreich',
              },
              {
                name: 'Jens P.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: 'Die Programmauswahl ist riesig und Apps wie IPTV Extreme laufen tadellos.',
                role: 'Schweiz',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#121214] text-white rounded-none p-8 border border-[#DD0000]/20 shadow-xl transition-all hover:-translate-y-2 hover:border-[#DD0000] hover:shadow-2xl duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={`${testimonial.name} – Kunde`}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-none object-cover border-2 border-[#DD0000] shadow-md shrink-0"
                      />
                      <div>
                        <div className="font-black text-white text-base uppercase tracking-tight flex items-center gap-1.5">
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
                        <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-300 font-medium text-base leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                <div className="border-t border-[#DD0000]/15 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#DD0000] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#DD0000]" /> Verifizierter Kunde
                  </span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Devices */}
      <section className="py-24 bg-[#08080A] w-full relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DD0000]/10 blur-[120px] pointer-events-none rounded-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 px-4 py-2 rounded-none border border-[#DD0000]/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-none bg-[#DD0000] animate-pulse" />
              <span className="text-[#FFD700] font-extrabold text-xs uppercase tracking-widest">
                Unterstützte Player & Geräte
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              AUF ALLEN GERÄTEN NUTZBAR
            </h2>

            <p className="text-slate-300 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Voll kompatibel mit gängigen Playern wie IPTV Extreme, IBO Player und TiviMate. Nutzen Sie M3U-Playlists und Xtream Codes flexibel.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { tag: 'Amazon Firestick & Fire TV', desc: 'Fire OS, Fire TV Cube, 4K Sticks', detail: 'Kompatibel mit IPTV Extreme und IBO Player.', icon: Zap, code: '01' },
              { tag: 'Smart TVs', desc: 'Samsung Tizen, LG webOS', detail: 'Direkte Nutzung über Smart TV Apps.', icon: Tv2, code: '02' },
              { tag: 'Android TV & Streaming', desc: 'Nvidia Shield, Google TV', detail: 'Optimiert für Android TV Hardware Dekodierung.', icon: Cpu, code: '03' },
              { tag: 'Apple TV & iOS', desc: 'tvOS, iPhone, iPad', detail: 'Flüssiges Streaming auf allen Apple Geräten.', icon: Smartphone, code: '04' },
              { tag: 'Windows PCs & Mac', desc: 'Windows, macOS, Linux', detail: 'Wiedergabe über Desktop Player.', icon: MonitorSmartphone, code: '05' },
              { tag: 'MAG & Set-Top-Boxen', desc: 'MAG, Formuler, Portal Player', detail: 'Vollständiger Support mit EPG.', icon: ShieldCheck, code: '06' },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.tag}
                  className="group relative bg-[#121214] text-white border border-[#DD0000]/30 rounded-none p-7 flex flex-col justify-between gap-5 hover:border-[#DD0000] hover:shadow-[0_12px_35px_rgba(221,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#DD0000] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-none bg-[#DD0000] border border-[#FFD700] flex items-center justify-center shrink-0 group-hover:bg-[#B00000] group-hover:scale-105 transition-all duration-300 shadow-md">
                        <Icon className="w-7 h-7 text-[#FFD700] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#DD0000] mt-0.5">{device.desc}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#0A0A0C] bg-[#FFD700] border border-[#DD0000] px-2.5 py-1 rounded-none shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-300 leading-relaxed pt-2 border-t border-white/10">
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
      <section className="py-24 bg-[#0a0a0c] w-full relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 px-4 py-2 rounded-none border border-[#DD0000]/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#DD0000]" />
                <span className="text-[#DD0000] font-extrabold text-xs uppercase tracking-widest">
                  Ratgeber
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                AKTUELL <span className="text-[#DD0000]">ANLEITUNGEN</span>
              </h2>
              <p className="text-slate-300 text-lg font-medium max-w-2xl leading-relaxed">
                Nützliche Tipps, Schritt-für-Schritt-Guides und Installationshilfen.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/blog"
                className="whitespace-nowrap px-7 py-4 rounded-none bg-[#DD0000] text-white font-black hover:bg-[#B00000] transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-xl border border-[#FFD700]"
              >
                <span className="uppercase text-xs tracking-wider">Alle Artikel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#FFD700]" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-[#121214] text-white rounded-none p-4 border-2 border-[#DD0000]/15 shadow-md hover:border-[#DD0000] hover:shadow-[0_20px_40px_rgba(221,0,0,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      <div className="relative aspect-[16/10] rounded-none overflow-hidden bg-[#1A1A1E]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-none"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#DD0000]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#DD0000] text-white text-[10px] font-black uppercase tracking-widest rounded-none shadow-md border border-[#FFD700]">
                            {post.author || 'Anleitung'}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-white mb-2.5 group-hover:text-[#DD0000] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-slate-300 text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#DD0000]/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#DD0000] uppercase tracking-wider group-hover:text-[#B00000] transition-colors">
                        Artikel Lesen
                      </span>

                      <div className="w-9 h-9 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/30 flex items-center justify-center text-[#DD0000] group-hover:bg-[#DD0000] group-hover:text-white transition-all duration-300 shadow-sm">
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
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c] w-full border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-none border-2 border-[#DD0000]/20 bg-[#121214] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DD0000]/10 rounded-none blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFD700]/20 rounded-none blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-gradient-to-r from-[#DD0000] via-[#FFD700] to-[#DD0000]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-none border border-[#DD0000]/30 bg-[#DD0000]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#DD0000]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#DD0000] flex items-center gap-1.5">
                  Streaming Dienst
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[1.05] mb-6">
                JETZT IPTV <br />
                <span className="text-[#DD0000]">KAUFEN</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-300">
                Starten Sie jetzt mit erstklassigem 4K-Streaming: Profitieren Sie von zehntausenden Live-Sendern, riesigen Mediatheken und unserem reibungslosen WhatsApp-Installationsservice.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['36K+', 'Live TVs'],
                  ['4K', 'Streaming'],
                  ['99,99%', 'Uptime'],
                  ['24/7', 'Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-none border border-[#DD0000]/20 bg-[#0a0a0c] p-4 shadow-sm"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#DD0000]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-none bg-[#FFD700] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#0A0A0C] hover:bg-[#e6c200] transition-all hover:scale-105 shrink-0 shadow-lg border border-[#DD0000]"
                >
                  Jetzt Kaufen
                </Link>
                <Link
                  href="/firestick-einrichtung"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-none border border-[#DD0000]/30 bg-[#0a0a0c] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-[#DD0000]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#DD0000] shrink-0" /> Anleitung
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}