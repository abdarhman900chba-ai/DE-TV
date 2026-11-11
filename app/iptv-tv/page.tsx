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
  Wifi,
  MonitorSmartphone,
  Star,
  Clock,
  Radio,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#DD0000] border-t-transparent" />
    </div>
  ),
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

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// FAQ ACCORDION
// ---------------------------------------------------------------------------
function FAQItem({ q, a }: { q: string; a: string }) {
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

export default function IPTVTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* ============================================================
          HERO — split layout with image
      ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#DD0000]/15 blur-[150px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — content */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
                <Medal className="w-4 h-4 text-[#FFCE00]" />
                <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest inline-flex items-center gap-2">
                  IPTV TV Deutschland
                  <GermanFlag className="w-5 h-5" />
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-[1.05]">
                IPTV TV <br />
                <span className="text-[#FFCE00]">STREAMING ERLEBNIS</span>
              </h1>

              <p className="text-base sm:text-lg text-[#FAFAFA]/70 max-w-lg mb-8 font-medium leading-relaxed">
                Alles auf jedem Gerät: 36.000 Live TVs, 120.000 Filme und Serien sowie 4K IPTV Qualität.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/preise"
                  className="text-center whitespace-nowrap py-3.5 px-7 rounded-full bg-[#DD0000] text-[#FAFAFA] font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
                >
                  Jetzt IPTV Kaufen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="text-center whitespace-nowrap py-3.5 px-7 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <PlayCircle className="w-5 h-5 text-[#FFCE00]" /> Kostenlos Testen
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-[#FAFAFA] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-[#FAFAFA]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#FAFAFA]/10">
                  <Zap className="w-4 h-4 text-[#FFCE00]" /> 4K IPTV
                </span>
                <span className="flex items-center gap-2 bg-[#FAFAFA]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#FAFAFA]/10">
                  <ShieldCheck className="w-4 h-4 text-[#FFCE00]" /> 99,9% Uptime
                </span>
                <span className="flex items-center gap-2 bg-[#FAFAFA]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#FAFAFA]/10">
                  <Wifi className="w-4 h-4 text-[#FFCE00]" /> Anti-Freeze
                </span>
              </div>
            </FadeIn>

            {/* Right — hero visual */}
            <FadeIn className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#DD0000]/20 via-transparent to-[#FFCE00]/10 blur-2xl" />
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden border-2 border-[#DD0000]/40 shadow-2xl">
                  <Image
                    src="/img/image-1.webp"
                    alt="IPTV TV Streaming auf einem Smart TV in Deutschland in 4K IPTV Qualität"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/60 via-transparent to-transparent" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#DD0000] text-white px-4 py-3 rounded-2xl shadow-xl border border-[#FFCE00] rotate-3">
                  <div className="text-2xl font-black leading-none">4K</div>
                  <div className="text-[10px] font-black uppercase tracking-wider">IPTV TV</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#f2ebeb] text-[#0a0a0c] px-4 py-3 rounded-2xl shadow-xl border border-[#DD0000]/20 -rotate-3">
                  <div className="text-2xl font-black leading-none">36K+</div>
                  <div className="text-[10px] font-black uppercase tracking-wider">Live TVs</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTNER SLIDER
      ============================================================ */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* ============================================================
          FEATURE GRID — visual cards
      ============================================================ */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                IPTV TV Features
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight">
              ALLES WAS <span className="text-[#DD0000]">IPTV TV</span> BIETET
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Tv,
                title: '36.000+ Live TVs',
                desc: 'ARD, ZDF, RTL, ProSieben, SAT.1, VOX und tausende internationale Sender.',
                image: '/img/image-1.webp',
              },
              {
                icon: Film,
                title: '120.000+ Filme & Serien',
                desc: 'Kinohits, Netflix-Serien, HBO-Boxsets – täglich neue Titel.',
                image: '/img/bg-1.webp',
              },
              {
                icon: Trophy,
                title: 'Bundesliga & Champions League',
                desc: 'Live-Sport in 60FPS: Fußball, Formel 1, DEL, Handball, UFC.',
                image: '/img/bg1.jpg',
              },
              {
                icon: Zap,
                title: '4K IPTV Qualität',
                desc: 'Gestochen scharfes Ultra HD Streaming ohne Puffer dank Anti-Freeze.',
                image: '/img/image-1.webp',
              },
              {
                icon: MonitorSmartphone,
                title: 'Multi-Device Support',
                desc: 'IPTV Extreme, IBO Player Pro auf Firestick, Smart TV, iOS, Android.',
                image: '/img/bg1.jpg',
              },
              {
                icon: Globe,
                title: 'DACH-Weite Verfügbarkeit',
                desc: 'Frankfurt Server, unter 10ms Latenz in Deutschland, Austria, Schweiz.',
                image: '/img/bg-1.webp',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#DD0000]/20 hover:border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(221,0,0,0.25)] transition-all duration-500"
                >
                  {/* Image top */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} - IPTV TV Deutschland`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-[#0a0a0c]/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#DD0000] flex items-center justify-center shadow-lg border border-[#FFCE00]">
                      <Icon className="w-6 h-6 text-[#FFCE00]" />
                    </div>
                  </div>

                  {/* Content bottom */}
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-black text-[#0A0A0C] uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#0A0A0C]/70 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================================
          STATS STRIP
      ============================================================ */}
      <section className="py-16 bg-[#DD0000] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '36K+', label: 'Live TVs', icon: Tv },
              { value: '120K+', label: 'Filme & Serien', icon: Film },
              { value: '99,9%', label: 'Server Uptime', icon: ShieldCheck },
              { value: '24/7', label: 'Support', icon: Clock },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="text-center bg-[#f2ebeb] rounded-2xl p-6 shadow-xl border-2 border-[#FFCE00]/30 hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="w-6 h-6 text-[#DD0000] mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-black text-[#DD0000] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-black text-[#0a0a0c]/60 uppercase tracking-widest mt-2">
                    {stat.label}
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>



      {/* ============================================================
          PRICING
      ============================================================ */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>


      {/* ============================================================
          CHANNEL CATEGORIES — visual tiles
      ============================================================ */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Radio className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                IPTV TV Sender
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              KATEGORIEN FÜR <span className="text-[#FFCE00]">JEDEN GESCHMACK</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Deutsche Sender', count: '10.000+', color: 'from-[#DD0000] to-[#8C0000]' },
              { title: 'Live Sport', count: '500+', color: 'from-[#FFCE00] to-[#DD0000]' },
              { title: 'Filme & Serien', count: '120.000+', color: 'from-[#8C0000] to-[#DD0000]' },
              { title: 'International', count: '25.000+', color: 'from-[#DD0000] to-[#FFCE00]' },
            ].map((cat, idx) => (
              <FadeInItem
                key={idx}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${cat.color} p-6 min-h-[180px] flex flex-col justify-between hover:scale-105 transition-transform duration-300 border-2 border-[#FFCE00]/40 shadow-xl`}
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="text-5xl font-black text-white/20 tracking-tighter">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-white/90 font-black text-sm">{cat.count} Sender</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="text-center mt-12">
            <Link
              href="/sender"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCE00]/30"
            >
              Alle Sender Entdecken <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================
          MOVIE SLIDER
      ============================================================ */}
      <section id="channels" className="pt-24 bg-[#0a0a0c] max-w-[100vw] overflow-hidden relative min-h-[400px] border-t border-white/5">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              IPTV TV <span className="text-[#FFCE00]">FILME &amp; SERIEN</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg">
              Über 120.000 Titel auf Abruf – von Blockbustern bis zu Serien-Boxsets.
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


      {/* ============================================================
          WHY IPTV TV — compact visual
      ============================================================ */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <FadeIn className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-[#DD0000] shadow-2xl">
                <Image
                  src="/img/bg-1.webp"
                  alt="IPTV TV Live-Sport Streaming mit Bundesliga in 4K IPTV"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0c]/90 backdrop-blur-md rounded-2xl p-4 border border-[#DD0000]/40">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-[#DD0000] flex items-center justify-center border border-[#FFCE00] shrink-0">
                      <Trophy className="w-6 h-6 text-[#FFCE00]" />
                    </span>
                    <div>
                      <p className="text-sm font-black text-[#f2ebeb] uppercase">Live Sport</p>
                      <p className="text-xs font-bold text-[#FFCE00] uppercase tracking-wider">
                        Bundesliga · Champions League
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right content */}
            <FadeIn className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-[#DD0000] fill-[#DD0000]" />
                <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                  Warum IPTV TV
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-8">
                DIE MODERNE <span className="text-[#DD0000]">TV-ALTERNATIVE</span>
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Zap, text: 'Sofortiges Zappen, kein Warten beim Senderwechsel' },
                  { icon: ShieldCheck, text: '99,9% Uptime über Frankfurt Server' },
                  { icon: CheckCircle2, text: 'Keine Vertragslaufzeit, monatlich kündbar' },
                  { icon: MessageCircle, text: '24/7 WhatsApp Support auf Deutsch' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-white rounded-2xl p-4 border-2 border-[#DD0000]/10 hover:border-[#DD0000] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#DD0000]" />
                      </div>
                      <p className="text-[#0A0A0C] font-black text-sm md:text-base">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DD0000]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                IPTV TV FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              HÄUFIGE FRAGEN ZU <span className="text-[#FFCE00]">IPTV TV</span>
            </h2>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Was ist IPTV TV und wie funktioniert es?',
                a: 'IPTV TV (Internet Protocol Television) überträgt Fernsehsender und Videos über Ihre Internetverbindung statt über Kabel oder Satellit. Mit IPTV Deutschland streamen Sie 36.000 Live TVs und 120.000 Filme und Serien in 4K IPTV Qualität auf jedem Gerät.',
              },
              {
                q: 'Welche Geräte unterstützen IPTV TV?',
                a: 'IPTV TV funktioniert auf Amazon Firestick, Smart TVs (Samsung, LG), Android TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG/Formuler Boxen. Wir empfehlen IPTV Extreme oder IBO Player Pro für die beste Erfahrung.',
              },
              {
                q: 'Wie viel kostet IPTV TV in Deutschland?',
                a: 'IPTV TV Pakete starten bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-Paket kostet nur 79 € und ist der Bestseller. Multi-Screen Optionen sind verfügbar.',
              },
              {
                q: 'Welche Sender kann ich mit IPTV TV schauen?',
                a: 'Alle deutschen Sender (ARD, ZDF, RTL, ProSieben, SAT.1, VOX), Live-Sport (Bundesliga, Champions League, Formel 1, DEL, Handball), Filme und Serien sowie tausende internationale Sender.',
              },
              {
                q: 'Brauche ich einen Vertrag für IPTV TV?',
                a: 'Nein. IPTV TV bei IPTV Deutschland läuft ohne Vertragslaufzeit. Sie wählen 3, 6 oder 12 Monate und entscheiden selbst, ob Sie verlängern. Keine automatische Verlängerung.',
              },
              {
                q: 'Kann ich IPTV TV kostenlos testen?',
                a: 'Ja. Sie erhalten einen kostenlosen 24-Stunden IPTV Test. Schreiben Sie uns per WhatsApp und wir richten alles ein – ohne Kreditkarte, ohne Verpflichtung.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb] w-full">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem] border-2 border-[#DD0000]/20 bg-[#f2ebeb] shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DD0000]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCE00]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="h-2 w-full bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DD0000]/30 bg-[#DD0000]/10 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#DD0000]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#DD0000] flex items-center gap-1.5">
                  IPTV TV Deutschland
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                BEREIT FÜR IPTV TV? <br />
                <span className="text-[#DD0000]">JETZT STARTEN</span>
              </h2>

              <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/75 mb-10">
                Wählen Sie Ihr Paket, testen Sie kostenlos und starten Sie in unter 10 Minuten.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-all hover:scale-105 shadow-lg shadow-[#DD0000]/25 border border-[#FFCE00]"
                >
                  Jetzt IPTV Kaufen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DD0000]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#DD0000]/10 transition-all hover:scale-105 shadow-sm"
                >
                  <PlayCircle className="h-4 w-4 text-[#DD0000] shrink-0" /> Kostenlos Testen
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}