'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
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
  Smartphone,
  KeyRound,
  ChevronDown,
  CreditCard,
  Clock,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const WHATSAPP_BASE = CONSTANTS.CONTACT.whatsappUrl;

// ---------------------------------------------------------------------------
// FAQ ACCORDION ITEM
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

export default function FreeTrialPage() {
  const openWhatsApp = (message: string) => {
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 py-24 md:py-40 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full bg-[#08080A]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt="Kostenlos IPTV Test Deutschland mit 36.000+ Live TVs in 4K IPTV Qualität"
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
              Kostenloser 24-Stunden IPTV Test
              <GermanFlag className="w-7 h-7 rounded-[2px] shrink-0" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-[#f2ebeb] mb-6 leading-none break-words">
            KOSTENLOS IPTV TESTEN <br />
            <span className="text-[#FFCE00]">IN DEUTSCHLAND</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FAFAFA]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Prüfen Sie alles, bevor Sie einen Cent bezahlen. Der kostenlose 24-Stunden IPTV Test umfasst 36.000 Live TVs, 120.000 Filme und Serien sowie das komplette Sportprogramm auf jedem Gerät. Unser Team übernimmt die Einrichtung per WhatsApp, begleitet die Player-Installation und bleibt an Ihrer Seite, bis Sie auf Ihrem eigenen Fernseher streamen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <button
              onClick={() =>
                openWhatsApp(
                  `Hallo! Ich möchte den kostenlosen 24-Stunden IPTV Test in Anspruch nehmen.`
                )
              }
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#DD0000] text-[#FAFAFA] font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00] cursor-pointer"
            >
              Kostenlos IPTV Testen
            </button>
            <Link
              href="/preise"
              className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-8 rounded-full bg-[#1A1A1E]/80 text-[#f2ebeb] border border-[#FAFAFA]/20 font-black text-sm hover:bg-[#FAFAFA]/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCE00] shrink-0" /> IPTV Pakete Ansehen
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#FAFAFA] font-bold uppercase tracking-widest bg-[#FAFAFA]/5 backdrop-blur-md px-8 py-4 rounded-3xl border border-[#FAFAFA]/10 shadow-2xl">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FFCE00]" /> Keine Karte Nötig
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFCE00]" /> Sofort per WhatsApp
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFCE00]" /> Voller Senderzugriff
            </span>
          </div>
        </FadeIn>
      </section>

      {/* WAS ENTHALTEN IST */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <PlayCircle className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Was Sie im Test Erhalten
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              VOLLER ZUGRIFF, <span className="text-[#DD0000]">KEINE GRENZEN</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Beim kostenlosen Test bekommen Sie den kompletten Service – nichts ist versteckt oder gesperrt. Das erwartet Sie im 24-Stunden-Fenster.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Tv,
                title: '36.000+ Live TVs',
                desc: 'ARD, ZDF, RTL, ProSieben, SAT.1, VOX sowie alle internationalen Sender, die das volle Abonnement umfasst.',
              },
              {
                icon: Film,
                title: '120.000+ Filme',
                desc: 'Die komplette On-Demand-Bibliothek. Kinoveröffentlichungen, komplette Boxsets und internationale Titel.',
              },
              {
                icon: Trophy,
                title: 'Live Sport',
                desc: 'Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL, Handball und alle wichtigen Sportevents.',
              },
              {
                icon: Globe,
                title: 'Internationales TV',
                desc: 'UK, USA, Österreich, Schweiz, Frankreich, Italien, Spanien, Türkei, Polen – alles nach Ländern organisiert.',
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
        </div>
      </section>

      {/* WIE MAN DEN TEST ERHÄLT */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DD0000]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                In 3 Einfachen Schritten
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              SO STARTEN SIE IHREN <span className="text-[#FFCE00]">KOSTENLOSEN TEST</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              Keine Formulare, keine Kartendaten. Schreiben Sie uns einfach per WhatsApp – unser Team übernimmt den Rest.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                icon: MessageCircle,
                title: 'Per WhatsApp Melden',
                desc: 'Schreiben Sie uns kurz, dass Sie den kostenlosen 24-Stunden-Test nutzen möchten. Mehr ist nicht nötig, um zu starten.',
                bullets: [
                  'Keine Kartendaten erforderlich',
                  'Kein Registrierungsformular',
                  'Antwort innerhalb von Minuten',
                ],
              },
              {
                number: '02',
                icon: Smartphone,
                title: 'Player Installieren',
                desc: 'Wir schicken eine kurze Anleitung für Ihr Gerät. Installieren Sie IPTV Extreme, IBO Player Pro oder TiviMate und tragen Sie die Testdaten ein, die wir Ihnen senden.',
                bullets: [
                  'Funktioniert auf Firestick, Smart TV, Smartphone',
                  'Wir helfen bei der App-Auswahl',
                  'Installation dauert ca. 5 Minuten',
                ],
              },
              {
                number: '03',
                icon: KeyRound,
                title: 'Einloggen und Testen',
                desc: 'Tragen Sie den Test-Code im Player ein – die komplette Senderliste lädt automatisch. Prüfen Sie Sender, Filme, Sport und 4K IPTV Bild.',
                bullets: [
                  'Voller Zugriff für 24 Stunden',
                  'Test auf Ihrer eigenen Internetverbindung',
                  'Upgrade nur bei Zufriedenheit',
                ],
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="group relative bg-[#f2ebeb] text-[#0A0A0C] rounded-[2rem] p-6 md:p-8 border-4 border-[#DD0000] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(221,0,0,0.25)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#DD0000] flex items-center justify-center shadow-lg border border-[#FFCE00]">
                      <Icon className="w-8 h-8 text-[#FFCE00]" />
                    </div>
                    <span className="text-5xl font-black text-[#DD0000]/20 tracking-tighter">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#0A0A0C]/75 text-sm font-medium leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 text-xs font-bold text-[#0A0A0C]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DD0000] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          <FadeIn className="text-center mt-14">
            <button
              onClick={() =>
                openWhatsApp(
                  `Hallo! Ich möchte den kostenlosen 24-Stunden IPTV Test in Anspruch nehmen.`
                )
              }
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-all border border-[#FFCE00] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Kostenlosen Test Starten
            </button>
          </FadeIn>
        </div>
      </section>

      {/* WARUM ZUERST TESTEN */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Warum Zuerst Testen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              ERST TESTEN, DANN <span className="text-[#DD0000]">IPTV KAUFEN</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Nicht jeder IPTV Service läuft auf jeder Internetverbindung und jedem Gerät gleich. Der Test lässt Sie Ihr eigenes Setup prüfen, bevor Sie einen Cent ausgeben.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Prüfen Sie Ihre Geschwindigkeit',
                desc: 'Sehen Sie, wie die Streams auf Ihrer tatsächlichen Internetverbindung laufen – nicht auf einem Demo-Video.',
              },
              {
                icon: Tv,
                title: 'Testen Sie Ihr Gerät',
                desc: 'Bestätigen Sie, dass der Service auf Ihrem Firestick, Smart TV oder Smartphone mit dem exakten Setup funktioniert, das Sie zu Hause nutzen.',
              },
              {
                icon: Trophy,
                title: 'Live-Sport Ansehen',
                desc: 'Läuft während Ihres 24-Stunden-Fensters ein Spiel, schauen Sie live und erleben Sie, wie der Stream unter Spitzenlast läuft.',
              },
              {
                icon: CreditCard,
                title: 'Keine Vorauszahlung',
                desc: 'Null Kosten, null Kartendaten. Upgrade auf ein bezahltes Paket nur, wenn Sie vollständig zufrieden sind.',
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DD0000]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/20 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Kostenloser Test FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
              FRAGEN ZUM <span className="text-[#FFCE00]">KOSTENLOSEN TEST</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Alles, was Sie vor Ihrem 24-Stunden-Test wissen müssen.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Ist der kostenlose IPTV Test in Deutschland wirklich kostenlos?',
                a: 'Ja. Der Test ist 100% kostenlos, ohne Karte und ohne versteckte Kosten. Wir möchten, dass Sie den kompletten Service auf Ihrem eigenen Gerät und Ihrer Internetverbindung testen, bevor Sie sich für ein Abonnement entscheiden.',
              },
              {
                q: 'Wie lange dauert der kostenlose IPTV Test?',
                a: 'Der Test läuft 24 Stunden. Das ist genug Zeit, um das Senderangebot zu prüfen, die Sportsender während eines Live-Spiels zu testen, durch die Filmbibliothek zu stöbern und sicherzustellen, dass alles auf Ihrem Setup reibungslos läuft.',
              },
              {
                q: 'Was bekomme ich im kostenlosen Test?',
                a: 'Sie erhalten während des Tests Zugriff auf das komplette Senderangebot, einschließlich aller 36.000 Live TVs, 120.000 Filme und Serien, Live-Sport mit Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL und Handball sowie internationale Sender aus UK, USA, Österreich, Schweiz und mehr.',
              },
              {
                q: 'Brauche ich eine Kreditkarte für den Test?',
                a: 'Nein. Der Test ist komplett kostenlos. Wir fragen nicht nach Kartendaten im Voraus. Sie zahlen nur, wenn Sie sich nach Ende des Tests für ein bezahltes Abonnement entscheiden.',
              },
              {
                q: 'Kann ich den Test auf meinem Firestick oder Smart TV testen?',
                a: 'Ja. Sie können den Test auf jedem Gerät testen, das Sie bereits besitzen, einschließlich Amazon Firestick, Samsung und LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC, Mac und MAG Set-Top-Boxen.',
              },
              {
                q: 'Wie schnell erhalte ich meine Testdaten?',
                a: 'Die meisten Kunden erhalten ihre Testdaten innerhalb weniger Minuten nach ihrer WhatsApp-Nachricht. Unser Team bleibt mit Ihnen im Chat, während Sie den Player installieren und sich einloggen, bis alles läuft.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <FAQItem q={faq.q} a={faq.a} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* FINAL CTA */}
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
                  Kostenlos IPTV Testen
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-[#1A1A1E] leading-[1.05] mb-6">
                BEREIT ES KOSTENLOS <br />
                <span className="text-[#DD0000]">ZU TESTEN?</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#1A1A1E]/80">
                Schreiben Sie uns per WhatsApp – wir richten Ihnen in wenigen Minuten den kostenlosen 24-Stunden-Test ein. Prüfen Sie den vollen Service auf Ihrem eigenen Fernseher und upgraden Sie erst, wenn Sie zufrieden sind. Keine Vertragslaufzeit, keine Kartendaten, kein Druck.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hallo! Ich möchte den kostenlosen 24-Stunden IPTV Test in Anspruch nehmen.`
                    )
                  }
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#FAFAFA] hover:bg-[#B00000] transition-all hover:scale-105 shrink-0 shadow-lg shadow-[#DD0000]/25 border border-[#FFCE00] cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" /> Kostenlosen Test Starten
                </button>
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-[#DD0000]/30 bg-[#FAFAFA] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1A1A1E] hover:bg-[#DD0000]/10 transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  IPTV Pakete Ansehen
                  <ArrowRight className="h-4 w-4 text-[#DD0000] shrink-0" />
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#DD0000] uppercase tracking-wider">
                Keine Karte Nötig • Sofortige Einrichtung • WhatsApp Support
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}