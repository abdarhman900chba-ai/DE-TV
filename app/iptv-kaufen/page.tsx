'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import GermanFlag from '../components/GermanFlag';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Tv,
  Film,
  Trophy,
  Globe,
  Sparkles,
  ChevronDown,
  CreditCard,
  PackageCheck,
  Headphones,
  Lock,
  Clock,
  Users,
  Award,
  BadgeCheck,
  XCircle,
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

// ---------------------------------------------------------------------------
// FAQ ACCORDION — KAUFEN PAGE STYLE
// ---------------------------------------------------------------------------
function KaufenFAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white border-l-4 ${
        isOpen ? 'border-l-[#DD0000]' : 'border-l-[#DD0000]/30'
      } rounded-r-2xl rounded-l-md shadow-md transition-all duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex justify-between items-center gap-4 group"
        aria-expanded={isOpen}
      >
        <h3
          className={`text-base md:text-lg font-black transition-colors ${
            isOpen ? 'text-[#DD0000]' : 'text-[#0a0a0c] group-hover:text-[#DD0000]'
          }`}
        >
          {q}
        </h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#DD0000]' : 'text-[#0a0a0c]/30 group-hover:text-[#DD0000]'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#0a0a0c]/75 font-medium leading-relaxed px-6">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function IPTVKaufenPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* ================================================================= */}
      {/* HERO — SPLIT LAYOUT (Text links, Bento-Cards rechts)              */}
      {/* ================================================================= */}
      <section className="relative px-4 pt-24 pb-20 md:pt-32 md:pb-28 bg-[#08080A] border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.07] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Text */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
              <CreditCard className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FAFAFA] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
                IPTV Kaufen Deutschland
                <GermanFlag className="w-5 h-5 rounded-[2px]" />
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white mb-6 leading-[1.05]">
              IPTV <span className="text-[#FFCE00]">KAUFEN</span><br />
              IN DEUTSCHLAND
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-xl mb-8 font-medium leading-relaxed">
              Sie möchten IPTV kaufen und sind unsicher, worauf Sie achten sollten? Bei uns kaufen Sie IPTV in Deutschland ganz ohne Vertragsbindung – mit geführtem WhatsApp-Setup, kostenlosem 24-Stunden-Test und Euro-Preisen inklusive MwSt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/preise"
                className="text-center whitespace-nowrap py-4 px-8 rounded-full bg-[#DD0000] text-white font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
              >
                Jetzt IPTV Kaufen
              </Link>
              <Link
                href="/kostenlos-testen"
                className="text-center whitespace-nowrap py-4 px-8 rounded-full bg-white/5 text-white border border-white/20 font-black text-sm hover:bg-white/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <PlayCircle className="w-5 h-5 text-[#FFCE00]" />
                Erst Kostenlos Testen
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm text-slate-300 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFCE00]" /> Keine Vertragslaufzeit
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFCE00]" /> Sofortige Aktivierung
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFCE00]" /> Zahlung in Euro
              </span>
            </div>
          </FadeIn>

          {/* RIGHT — Bento Boxes */}
          <FadeInStagger className="grid grid-cols-2 gap-4">
            <FadeInItem className="col-span-2 bg-gradient-to-br from-[#DD0000]/20 to-[#DD0000]/5 border border-[#DD0000]/30 rounded-3xl p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DD0000] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#FFCE00]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white">10 Min</div>
                  <div className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                    Aktivierung nach Kauf
                  </div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-[#DD0000]/40 transition-all">
              <div className="text-2xl md:text-3xl font-black text-[#FFCE00] mb-1">36.000+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Live Sender
              </div>
            </FadeInItem>

            <FadeInItem className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md hover:border-[#DD0000]/40 transition-all">
              <div className="text-2xl md:text-3xl font-black text-[#FFCE00] mb-1">120.000+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                Filme & Serien
              </div>
            </FadeInItem>

            <FadeInItem className="col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#FFCE00] shrink-0" />
              <div className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                99,9 % Server Uptime · Anti-Freeze Technologie
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* PARTNER SLIDER                                                     */}
      {/* ================================================================= */}
      <div className="min-h-[128px] bg-[#0a0a0c]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* ================================================================= */}
      {/* WARUM IPTV KAUFEN — 4 Gründe                                       */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Warum IPTV Kaufen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              4 Gründe, warum immer mehr Deutsche <span className="text-[#DD0000]">IPTV kaufen</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              Kabel und Satellit werden jedes Jahr teurer. IPTV liefert mehr Sender, bessere Qualität und volle Flexibilität – zu einem Bruchteil des Preises.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CreditCard,
                title: 'Bis zu 80 % günstiger',
                desc: 'Statt 60–100 € monatlich für Kabel oder Sky zahlen Sie bei uns ab 39 € für 3 Monate – ohne versteckte Kosten.',
              },
              {
                icon: Zap,
                title: 'Sofort verfügbar',
                desc: 'Nach dem Kauf erhalten Sie Ihre Zugangsdaten innerhalb von 10 Minuten per WhatsApp – keine Wartezeit, kein Techniker.',
              },
              {
                icon: Tv,
                title: 'Mehr Sender als je zuvor',
                desc: '36.000+ Live-Sender, alle deutschen Programme, Bundesliga, Champions League, Formel 1 und internationale Kanäle.',
              },
              {
                icon: Lock,
                title: 'Keine Vertragsbindung',
                desc: 'Sie kaufen IPTV für 3, 6 oder 12 Monate – ohne automatische Verlängerung, ohne Kündigungsfrist, ohne Risiko.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-3xl p-7 hover:border-[#DD0000]/50 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#DD0000] flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-[#FFCE00]" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>


      
      {/* ================================================================= */}
      {/* PRICING SECTION                                                    */}
      {/* ================================================================= */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>
      

      {/* ================================================================= */}
      {/* CHECKLISTE — WORAUF ACHTEN BEIM IPTV KAUFEN                        */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <BadgeCheck className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Checkliste Vor Dem Kauf
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              Worauf Sie beim <span className="text-[#DD0000]">IPTV Kaufen</span> achten müssen
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Nicht jeder Anbieter ist seriös. Prüfen Sie diese 6 Punkte, bevor Sie IPTV kaufen – dann zahlen Sie garantiert keinen Cent zu viel.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: '01',
                title: 'Server-Standort',
                desc: 'Seriöse Anbieter betreiben eigene Server, oft in Frankfurt oder Amsterdam. Fragen Sie direkt nach – ein echter Anbieter kann antworten.',
              },
              {
                num: '02',
                title: 'Echte 4K-Bitrate',
                desc: 'Verlangen Sie eine echte 4K-Auflösung mit mindestens 25 Mbps Bitrate. Alles darunter ist komprimiert und wird bei Sport unscharf.',
              },
              {
                num: '03',
                title: 'Kostenloser Test',
                desc: 'Ein seriöser Anbieter bietet einen kostenlosen 24-Stunden-Test an. Kaufen Sie niemals IPTV, ohne es vorher getestet zu haben.',
              },
              {
                num: '04',
                title: 'WhatsApp Support',
                desc: 'Rund um die Uhr erreichbarer Support per WhatsApp ist Pflicht. E-Mail-only Anbieter antworten zu langsam bei Problemen.',
              },
              {
                num: '05',
                title: 'Zahlung in Euro',
                desc: 'Bestehen Sie auf Zahlung in Euro über PayPal, Kreditkarte oder SEPA. Fremdwährungen verstecken oft Zusatzgebühren.',
              },
              {
                num: '06',
                title: 'Keine Vertragslaufzeit',
                desc: 'Kaufen Sie IPTV ohne langfristige Bindung. Wenn ein Anbieter nur Jahresverträge anbietet, ist das ein Warnsignal.',
              },
            ].map((item, idx) => (
              <FadeInItem
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-7 border border-[#DD0000]/15 hover:border-[#DD0000] hover:shadow-[0_15px_40px_rgba(221,0,0,0.15)] transition-all duration-300 flex gap-5"
              >
                <div className="text-4xl md:text-5xl font-black text-[#DD0000]/20 leading-none shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black uppercase tracking-tight text-[#0A0A0C] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#DD0000] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-[#0A0A0C]/70 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCE00]/40"
            >
              Alle Pakete Ansehen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================= */}
      {/* VERGLEICH — IPTV vs Kabel/Sky                                      */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Preisvergleich
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              IPTV kaufen vs. <span className="text-[#DD0000]">Kabel &amp; Sky</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              Ein ehrlicher Vergleich – damit Sie genau wissen, was Sie beim IPTV Kaufen sparen.
            </p>
          </FadeIn>

          <FadeIn className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-[#DD0000] text-white">
                  <th className="text-left p-5 font-black uppercase tracking-wider text-xs md:text-sm">Merkmal</th>
                  <th className="text-left p-5 font-black uppercase tracking-wider text-xs md:text-sm">IPTV Kaufen</th>
                  <th className="text-left p-5 font-black uppercase tracking-wider text-xs md:text-sm">Kabel / Sky</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                {[
                  ['Monatliche Kosten', 'ab 13 € / Monat', '60 – 100 € / Monat'],
                  ['Vertragslaufzeit', 'Keine', '12 – 24 Monate'],
                  ['Live-Sender', '36.000+', 'ca. 100 – 300'],
                  ['4K Ultra HD', 'Inklusive', 'Nur mit Aufpreis'],
                  ['Filme & Serien', '120.000+ inklusive', 'Meist kostenpflichtig'],
                  ['Bundesliga & CL', 'Inklusive', 'Zusätzliche Kosten'],
                  ['Einrichtung', 'WhatsApp · 10 Min', 'Techniker-Termin nötig'],
                  ['Geräte', 'Jedes Gerät', 'Nur Receiver'],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-white/5 ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                    }`}
                  >
                    <td className="p-5 font-black text-white">{row[0]}</td>
                    <td className="p-5 font-bold text-[#FFCE00]">{row[1]}</td>
                    <td className="p-5 font-medium text-slate-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-[#DD0000] shrink-0" />
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 3 SCHRITTE ZUM KAUF                                                */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <PackageCheck className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                So einfach geht's
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              IPTV kaufen in <span className="text-[#DD0000]">3 Schritten</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Vom Kauf bis zum ersten gestochen scharfen Stream dauert es keine 10 Minuten.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                icon: CreditCard,
                title: 'Paket Wählen',
                desc: 'Entscheiden Sie sich für 3, 6 oder 12 Monate und wie viele Geräte Sie nutzen möchten. Zahlung in Euro über PayPal, Karte oder SEPA.',
              },
              {
                num: '2',
                icon: MessageCircle,
                title: 'WhatsApp Aktivierung',
                desc: 'Nach dem Kauf erhalten Sie Ihre Zugangsdaten per WhatsApp. Unser Team begleitet Sie Schritt für Schritt bei der Installation.',
              },
              {
                num: '3',
                icon: PlayCircle,
                title: 'Sofort Streamen',
                desc: 'App öffnen, Zugangsdaten eingeben, fertig. In weniger als 10 Minuten läuft Ihr erstes 4K-Programm auf Ihrem Gerät.',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="relative bg-white rounded-3xl p-8 border-2 border-[#DD0000]/15 hover:border-[#DD0000] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(221,0,0,0.15)]"
                >
                  <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-[#DD0000] text-[#FFCE00] flex items-center justify-center font-black text-xl shadow-lg">
                    {step.num}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a0c] flex items-center justify-center mb-5 mt-3">
                    <Icon className="w-7 h-7 text-[#FFCE00]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#0A0A0C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0A0A0C]/70 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>


      {/* ================================================================= */}
      {/* GERÄTE — Wo überall läuft IPTV                                     */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Tv className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Geräte-Kompatibilität
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Läuft auf <span className="text-[#DD0000]">jedem Gerät</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              Was auch immer Sie zu Hause haben – wir bringen IPTV zum Laufen.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Amazon Fire TV Stick',
              'Samsung Smart TV',
              'LG Smart TV',
              'Android TV & Google TV',
              'Apple TV',
              'iPhone & iPad',
              'Windows & Mac',
              'MAG & Formuler Box',
            ].map((device, i) => (
              <FadeInItem
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-center hover:border-[#DD0000]/50 hover:bg-[#DD0000]/5 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-[#FFCE00] mx-auto mb-3" />
                <div className="text-sm font-black uppercase tracking-wider text-slate-200">
                  {device}
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/preise"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-white font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCE00]/40"
              >
                Jetzt IPTV Kaufen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-black text-sm uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#FFCE00]" />
                WhatsApp Fragen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================= */}
      {/* VERTRAUENS-SEKTION — Support / Garantie / Erfahrung                */}
      {/* ================================================================= */}
      <section className="py-20 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeInItem className="bg-gradient-to-br from-[#DD0000]/15 to-transparent border border-[#DD0000]/30 rounded-3xl p-8">
              <Headphones className="w-10 h-10 text-[#FFCE00] mb-4" />
              <h3 className="text-lg font-black uppercase text-white mb-2">24/7 Support</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Unser deutsches Team antwortet rund um die Uhr auf WhatsApp – durchschnittliche Antwortzeit unter 5 Minuten.
              </p>
            </FadeInItem>

            <FadeInItem className="bg-gradient-to-br from-[#FFCE00]/15 to-transparent border border-[#FFCE00]/30 rounded-3xl p-8">
              <ShieldCheck className="w-10 h-10 text-[#FFCE00] mb-4" />
              <h3 className="text-lg font-black uppercase text-white mb-2">Testphase Gratis</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Testen Sie unseren Service 24 Stunden lang kostenlos, bevor Sie IPTV kaufen. Nur so wissen Sie, ob alles passt.
              </p>
            </FadeInItem>

            <FadeInItem className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8">
              <Users className="w-10 h-10 text-[#FFCE00] mb-4" />
              <h3 className="text-lg font-black uppercase text-white mb-2">10.000+ Kunden</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Über 10.000 Haushalte in Deutschland, Österreich und der Schweiz haben bereits bei uns IPTV gekauft.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FAQ                                                                */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                FAQ · IPTV Kaufen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              Häufige Fragen zum <span className="text-[#DD0000]">IPTV Kaufen</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Die wichtigsten Antworten, bevor Sie bei uns IPTV kaufen.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Was kostet es, IPTV in Deutschland zu kaufen?',
                a: 'Unsere IPTV-Pakete starten bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-VIP Paket kostet 79 € und spart bis zu 50 % gegenüber kürzeren Laufzeiten. Multi-Screen-Pakete für 2 oder 3 Geräte sind ebenfalls verfügbar. Alle Preise in Euro inkl. MwSt., keine versteckten Gebühren.',
              },
              {
                q: 'Kann ich IPTV vor dem Kauf kostenlos testen?',
                a: 'Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden-Test ein. So können Sie die Bildqualität, das Senderangebot und die Stabilität testen, bevor Sie IPTV kaufen.',
              },
              {
                q: 'Ist IPTV kaufen in Deutschland legal?',
                a: 'Der Kauf und die Nutzung eines IPTV-Players sind legal. Was Sie streamen, liegt in Ihrer Verantwortung. Wir empfehlen immer, nur Inhalte zu nutzen, für die Sie die entsprechenden Rechte besitzen. Bei Fragen sprechen Sie uns gerne an.',
              },
              {
                q: 'Welche Zahlungsmethoden akzeptieren Sie?',
                a: 'Wir akzeptieren PayPal, Kreditkarte (Visa, Mastercard), SEPA-Überweisung und Kryptowährung (Bitcoin, USDT). Alle Zahlungen erfolgen in Euro, sodass keine Fremdwährungsgebühren anfallen.',
              },
              {
                q: 'Wie lange dauert die Aktivierung nach dem Kauf?',
                a: 'In der Regel erhalten Sie Ihre Zugangsdaten innerhalb von 10 Minuten nach Zahlungseingang per WhatsApp. Unser Team begleitet Sie dann durch die Installation, bis alles läuft.',
              },
              {
                q: 'Kann ich nach dem Kauf kündigen?',
                a: 'Ja. Sie kaufen IPTV ohne automatische Verlängerung und ohne Vertragsbindung. Nach Ablauf Ihres Pakets entscheiden Sie selbst, ob Sie verlängern möchten.',
              },
              {
                q: 'Auf welchen Geräten funktioniert IPTV nach dem Kauf?',
                a: 'Auf Amazon Fire TV Stick, Samsung und LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, sowie MAG- und Formuler-Boxen. Unser Team hilft Ihnen bei der Einrichtung auf dem Gerät Ihrer Wahl.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <KaufenFAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FINAL CTA                                                          */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#DD0000]/30 bg-gradient-to-br from-[#121214] to-[#0a0a0c] p-8 md:p-14 text-center shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000]" />

              <div className="inline-flex items-center gap-2 rounded-full border border-[#FFCE00]/40 bg-[#FFCE00]/10 px-4 py-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-[#FFCE00]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#FFCE00] flex items-center gap-2">
                  IPTV Kaufen Deutschland
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
                BEREIT, <span className="text-[#FFCE00]">IPTV ZU KAUFEN</span>?
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-300 mb-10">
                Wählen Sie Ihr Paket, testen Sie zuerst kostenlos und aktivieren Sie erst dann. Ohne Vertragslaufzeit, mit WhatsApp-Setup und sofort einsatzbereit.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-[#B00000] transition-all hover:scale-105 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
                >
                  Jetzt IPTV Kaufen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/20 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all hover:scale-105"
                >
                  <PlayCircle className="w-4 h-4 text-[#FFCE00]" />
                  Erst Kostenlos Testen
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#FFCE00] uppercase tracking-wider flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                10-Min-Aktivierung · Keine Vertragslaufzeit · Zahlung in Euro
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}