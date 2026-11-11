'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  Sparkles,
  Flame,
  ShieldCheck,
  Lock,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Payment Method SVG Icons
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const isDark = variant === 'dark';
  const shellBg = isDark ? '#09090B' : '#FFFFFF';
  const shellBorder = isDark ? 'rgba(255,206,0,0.35)' : '#E4E4E7';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill={isDark ? '#FFFFFF' : '#1434CB'} letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#0079C1">Pal</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fontWeight="900" fill="#003399">SEPA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// ANIMATED PRICE COMPONENT
// ---------------------------------------------------------------------------
const AnimatedPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return (
    <span className={`inline-flex items-baseline ${className ?? ''}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -25, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.7 }}
          transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 18 }}
          className="inline-block"
        >
          {value} €
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const pricing = {
    1: {
      3: { total: 30, mo: (39 / 3).toFixed(2) },
      6: { total: 45, mo: (49 / 6).toFixed(2) },
      12: { total: 69, mo: (79 / 12).toFixed(2) },
    },
    2: {
      3: { total: 49, mo: (49 / 3).toFixed(2) },
      6: { total: 69, mo: (79 / 6).toFixed(2) },
      12: { total: 99, mo: (129 / 12).toFixed(2) },
    },
    3: {
      3: { total: 69, mo: (69 / 3).toFixed(2) },
      6: { total: 89, mo: (119 / 6).toFixed(2) },
      12: { total: 139, mo: (169 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const handleWhatsAppRedirect = (months: number) => {
    const selectedPrice = currentPricing[months as 3 | 6 | 12]?.total;
    const message = `Hallo! Ich möchte ein ${months}-Monats IPTV Abo für ${devices} ${
      devices > 1 ? 'Geräte' : 'Gerät'
    } für ${selectedPrice} € bestellen. Bitte senden Sie mir die Schritt-für-Schritt-Einrichtungsanleitung per WhatsApp, damit wir starten können.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hallo! Ich möchte einen kostenlosen 24-Stunden-Test anfordern, um die Bundesliga-, Champions-League- und Formel-1-Streaming-Qualität auf meinem Gerät zu testen, bevor ich ein Abo abschließe.`;
    const whatsappUrl = `${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing-section"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20 bg-[#09090B] text-[#FFFFFF] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DD0000]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] pointer-events-none" />

      {/* Section Header */}
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#FFCE00] bg-[#09090B] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-[#FFCE00]/10">
          <Crown className="w-4 h-4 text-[#FFCE00]" />
          <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
            Beste IPTV Anbieter Pakete
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FFFFFF] mb-6 uppercase tracking-tight leading-tight">
          WÄHLEN SIE IHR <span className="text-[#DD0000]">IPTV DEUTSCHLAND</span> PAKET
        </h2>
        <p className="text-base sm:text-lg text-[#A1A1AA] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Vertrauenswürdiger IPTV Anbieter mit sofortigem 4K Ultra HD Streaming. Sparen Sie bis zu{' '}
          <span className="text-[#FFCE00] font-bold">50%</span> beim 12-Monats-Paket mit Multi-Screen-Unterstützung. Einrichtung per WhatsApp, kostenloser Test und Upgrade nur bei Zufriedenheit.
        </p>

        {/* Device Switcher */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-xs text-[#A1A1AA] font-black uppercase tracking-widest">
              Gleichzeitige Geräte Auswählen
            </span>
          </div>
          <div className="inline-flex bg-[#121215] border border-[#FFFFFF]/10 rounded-2xl p-1.5 shadow-2xl relative">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 relative ${
                  devices === d
                    ? 'bg-[#DD0000] text-[#FFFFFF] shadow-lg shadow-[#DD0000]/40 scale-[1.03] ring-2 ring-[#DD0000]/40'
                    : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
                }`}
              >
                {d} {d > 1 ? 'Geräte' : 'Gerät'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Pricing Cards Grid */}
      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch max-w-6xl mx-auto mt-12 relative z-10">

        {/* ============================================================
            CARD 1: 3 MONATE — WHITE CARD + RED ACCENTS
        ============================================================ */}
        <FadeInItem className="relative bg-[#FFFFFF] text-[#09090B] border-4 border-[#DD0000] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-xl transition-all duration-500 hover:border-[#FFCE00] hover:shadow-[0_25px_60px_rgba(221,0,0,0.35)] hover:-translate-y-3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#DD0000]/0 via-[#DD0000]/0 to-[#DD0000]/0 group-hover:from-[#DD0000]/5 group-hover:to-[#DD0000]/10 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#DD0000] uppercase tracking-[0.2em]">Starter Paket</h3>
              <MonitorPlay className="w-5 h-5 text-[#DD0000] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <div className="text-3xl font-black text-[#09090B] mb-2 tracking-tighter uppercase">3 Monate</div>

            {/* PRICE PILL — White bg + animated color on card hover */}
            <div className="mt-4 mb-2 inline-flex self-start px-5 py-2 rounded-2xl bg-[#FFFFFF] border-2 border-[#DD0000]/20 shadow-md transition-all duration-500 group-hover:border-[#DD0000] group-hover:shadow-lg group-hover:scale-[1.05]">
              <span className="text-5xl font-black text-[#09090B] tracking-tighter transition-all duration-500 group-hover:text-[#DD0000]">
                <AnimatedPrice value={currentPricing[3]?.total || 0} />
              </span>
            </div>
            <div className="text-[11px] font-black text-[#DD0000] mb-8 uppercase tracking-widest border border-[#DD0000]/30 self-start px-3 py-1 rounded-full inline-block bg-[#DD0000]/10">
              {currentPricing[3]?.mo || 0} € / Monat
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} gleichzeitige ${devices > 1 ? 'Geräte' : 'Verbindung'}`,
                '4K Ultra HD & 60FPS Sport-Streams',
                '36.000+ Live-Sender (DE, AT, CH, UK, US)',
                '120.000+ Filme & Serien (täglich aktualisiert)',
                'Bundesliga, Champions League & Formel 1',
                '7 Tage Catch-Up & EPG Programmführer',
                'Anti-Freeze Frankfurt Edge-Server',
                'Smart TV, Firestick, iOS, Android, Shield',
                '24/7 Priority Support per WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#52525B] text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#DD0000] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#F4F4F5] rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#DD0000]/10">
              <Zap className="w-4 h-4 text-[#DD0000] shrink-0" />
              <span className="text-[11px] font-black text-[#09090B] uppercase tracking-wider">
                Sofortige Aktivierung • 99,9% Uptime
              </span>
            </div>

            <div className="mb-6 pt-4 border-t border-[#E4E4E7]">
              <div className="flex items-center justify-between text-[10px] font-black text-[#71717A] uppercase tracking-widest mb-3">
                <span>Akzeptierte Zahlungen</span>
                <Lock className="w-3 h-3 text-[#71717A]" />
              </div>
              <PaymentIcons variant="light" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(3)}
              className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#B00000] transition-all shadow-lg shadow-[#DD0000]/30 active:scale-95 group-hover:scale-105"
            >
              3 Monate Auswählen
            </button>
          </div>
        </FadeInItem>

        {/* ============================================================
            CARD 2: 12 MONATE VIP — DARK + GOLD (UNCHANGED)
        ============================================================ */}
        <FadeInItem className="relative bg-[#1A1608] border-2 border-[#FFCE00] rounded-3xl p-6 sm:p-9 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(255,206,0,0.25)] z-20 group transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,206,0,0.5)] hover:-translate-y-6">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
            <div className="bg-[#FFCE00] text-[#09090B] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#09090B]">
              <Flame className="w-3.5 h-3.5 fill-current text-[#09090B]" /> Bestseller in Deutschland
            </div>
          </div>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFCE00]/0 via-[#FFCE00]/0 to-[#FFCE00]/0 group-hover:from-[#FFCE00]/5 group-hover:to-[#FFCE00]/10 transition-all duration-500 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full pt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#FFCE00] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-[#FFCE00]" /> Ultimate VIP
              </h3>
              <Sparkles className="w-4 h-4 text-[#FFCE00] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>

            <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#DD0000] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#DD0000]/40">
              <Flame className="w-3 h-3 fill-current" /> 50% Sparen
            </div>

            <div className="text-3xl font-black text-[#FFCE00] mb-2 tracking-tighter uppercase">
              12 Monate
            </div>

            {/* PRICE PILL — Dark bg + animated glow on card hover */}
            <div className="mt-4 mb-2 inline-flex self-start px-5 py-2 rounded-2xl bg-[#09090B] border-2 border-[#FFCE00]/30 shadow-md transition-all duration-500 group-hover:border-[#FFCE00] group-hover:shadow-[0_0_30px_rgba(255,206,0,0.5)] group-hover:scale-[1.05]">
              <span className="text-6xl font-black text-[#FFCE00] tracking-tighter drop-shadow-[0_0_20px_rgba(255,206,0,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(255,206,0,0.8)]">
                <AnimatedPrice value={currentPricing[12]?.total || 0} />
              </span>
            </div>

            <div className="text-[11px] font-black text-[#FFCE00] mb-8 uppercase tracking-widest border border-[#FFCE00] self-start px-4 py-1.5 rounded-full inline-block bg-[#FFCE00]/10 shadow-sm">
              BESTER PREIS: {currentPricing[12]?.mo || 0} € / Monat
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} gleichzeitige ${devices > 1 ? 'Geräte' : 'Verbindung'}`,
                'Ultra HD 4K & Pure Full HD Qualität',
                '36.000+ Premium Live-Sender',
                '120.000+ Filme & Serien (täglich aktualisiert)',
                'Bundesliga, Champions League, Formel 1 & PPV',
                '7 Tage Catch-Up & EPG Programmführer',
                'Dedizierte Frankfurt Server-Line',
                'Smart TV, Firestick, Apple TV, iOS, Android',
                '24/7 VIP Priority Support per WhatsApp',
              ].map((feature, idx) => (
                <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                  <div className="bg-[#FFCE00]/20 p-0.5 rounded-full border border-[#FFCE00]/40">
                    <CheckCircle2 className="w-4 h-4 text-[#FFCE00] flex-shrink-0" />
                  </div>
                  <span className="text-[#FFFFFF]">{feature}</span>
                  {idx === 4 && (
                    <span className="bg-[#FFCE00]/20 text-[#FFCE00] text-[9px] font-black uppercase px-2 py-0.5 rounded ml-auto border border-[#FFCE00]/40">
                      Alle PPVs
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#FFCE00]/10 border border-[#FFCE00]/30 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#FFCE00]/20">
              <Crown className="w-4 h-4 text-[#FFCE00] shrink-0" />
              <span className="text-[11px] font-black text-[#FFCE00] uppercase tracking-wider">
                Priority Frankfurt Server-Line Inklusive
              </span>
            </div>

            <div className="mb-6 pt-4 border-t border-[#FFCE00]/20">
              <div className="flex items-center justify-between text-[10px] font-black text-[#FFCE00]/80 uppercase tracking-widest mb-3">
                <span>Akzeptierte Zahlungen</span>
                <Lock className="w-3 h-3 text-[#FFCE00]" />
              </div>
              <PaymentIcons variant="dark" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(12)}
              className="w-full text-center whitespace-nowrap px-6 py-4 sm:py-5 rounded-full bg-[#FFCE00] text-[#09090B] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-xl shadow-[#FFCE00]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,206,0,0.5)]"
            >
              12 Monate VIP Holen
            </button>
          </div>
        </FadeInItem>

        {/* ============================================================
            CARD 3: 6 MONATE — SOLID RED GRADIENT + GOLD BORDER
        ============================================================ */}
        <FadeInItem className="relative bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] border-4 border-[#FFCE00] rounded-3xl p-6 sm:p-8 flex flex-col group overflow-hidden shadow-[0_25px_60px_rgba(221,0,0,0.4)] transition-all duration-500 hover:shadow-[0_35px_80px_rgba(221,0,0,0.6)] hover:-translate-y-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black text-[#FFCE00] uppercase tracking-[0.2em]">Standard Paket</h3>
              <MonitorPlay className="w-5 h-5 text-[#FFCE00] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <div className="text-3xl font-black text-[#FFFFFF] mb-2 tracking-tighter uppercase">6 Monate</div>

            {/* PRICE PILL — White bg + animated color on card hover */}
            <div className="mt-4 mb-2 inline-flex self-start px-5 py-2 rounded-2xl bg-[#FFFFFF] border-2 border-[#FFCE00]/30 shadow-md transition-all duration-500 group-hover:bg-black/30 group-hover:border-[#FFCE00] group-hover:shadow-[0_0_30px_rgba(255,206,0,0.5)] group-hover:scale-[1.05]">
              <span className="text-5xl font-black text-[#8C0000] tracking-tighter transition-all duration-500 group-hover:text-[#FFCE00]">
                <AnimatedPrice value={currentPricing[6]?.total || 0} />
              </span>
            </div>
            <div className="text-[11px] font-black text-[#FFCE00] mb-8 uppercase tracking-widest border border-[#FFCE00]/60 self-start px-3 py-1 rounded-full inline-block bg-[#FFCE00]/10">
              {currentPricing[6]?.mo || 0} € / Monat
            </div>

            <ul className="w-full space-y-3.5 flex-grow relative mb-6">
              {[
                `${devices} gleichzeitige ${devices > 1 ? 'Geräte' : 'Verbindung'}`,
                '4K Ultra HD & 60FPS Sport-Streams',
                '36.000+ Live-Sender (DE, AT, CH, UK, US)',
                '120.000+ Filme & Serien (täglich aktualisiert)',
                'Bundesliga, Champions League & Formel 1',
                '7 Tage Catch-Up & EPG Programmführer',
                'Anti-Freeze Frankfurt Edge-Server',
                'Smart TV, Firestick, iOS, Android, Shield',
                '24/7 Priority Support per WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#FFFFFF] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#FFCE00] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 p-3 bg-[#000000]/20 border border-[#FFCE00]/40 rounded-2xl flex items-center gap-2.5 transition-colors duration-500 group-hover:bg-[#000000]/40">
              <Zap className="w-4 h-4 text-[#FFCE00] shrink-0" />
              <span className="text-[11px] font-black text-[#FFFFFF] uppercase tracking-wider">
                Sofortige Aktivierung • 99,9% Uptime
              </span>
            </div>

            <div className="mb-6 pt-4 border-t border-[#FFCE00]/30">
              <div className="flex items-center justify-between text-[10px] font-black text-[#FFCE00] uppercase tracking-widest mb-3">
                <span>Akzeptierte Zahlungen</span>
                <Lock className="w-3 h-3 text-[#FFCE00]" />
              </div>
              <PaymentIcons variant="dark" />
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(6)}
              className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#FFCE00] text-[#8C0000] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] transition-all shadow-xl shadow-[#000000]/30 active:scale-95 group-hover:scale-105 group-hover:shadow-[0_15px_40px_rgba(255,206,0,0.5)]"
            >
              6 Monate Auswählen
            </button>
          </div>
        </FadeInItem>

      </FadeInStagger>

      {/* Free Trial Banner */}
      <FadeIn className="max-w-2xl mx-auto mt-16 relative z-30">
        <div className="bg-[#121215] border border-[#FFCE00]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group hover:border-[#FFCE00] transition-all duration-500">
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#FFCE00]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-4 text-left relative z-10">
            <div className="bg-[#FFCE00]/10 border border-[#FFCE00]/30 p-3 rounded-xl text-[#FFCE00] shrink-0 hidden sm:block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#FFCE00]" />
                <h4 className="text-base font-black text-[#FFFFFF] uppercase tracking-tight">
                  Kostenloser 24-Stunden IPTV Test
                </h4>
              </div>
              <p className="text-xs text-[#A1A1AA] font-medium">
                Testen Sie 4K-Streaming auf Ihrem eigenen Gerät, bevor Sie sich entscheiden. Unser Team begleitet Sie per WhatsApp durch die Einrichtung – so sind Sie von Anfang an bestens aufgestellt.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 relative z-10">
            <button
              onClick={handleFreeTrialRedirect}
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-3 rounded-full bg-[#FFCE00] text-[#09090B] font-black text-xs uppercase tracking-widest hover:bg-[#d4a803] transition-all shadow-lg active:scale-95 hover:scale-105"
            >
              Kostenlos Testen
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}