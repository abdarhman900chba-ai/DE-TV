'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  HelpCircle,
  Tv,
  Zap,
  CreditCard,
  Smartphone,
  Search,
  ChevronDown,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/faq`;

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-de)">
      <rect x="0" y="0" width="32" height="10.67" fill="#000000" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#DD0000" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#FFCE00" />
    </g>
  </svg>
);

const FlagAT = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-at"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-at)">
      <rect x="0" y="0" width="32" height="10.67" fill="#ED2939" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#FFFFFF" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#ED2939" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-ch)">
      <rect x="0" y="0" width="32" height="32" fill="#D52B1E" />
      <rect x="13.33" y="6.67" width="5.34" height="18.66" fill="#FFFFFF" />
      <rect x="6.67" y="13.33" width="18.66" height="5.34" fill="#FFFFFF" />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="fq-uk"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

interface FAQItem {
  id: string;
  category: 'general' | 'sports' | 'devices' | 'billing';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  { id: 'gen-1', category: 'general', q: 'Was ist IPTV und wie unterscheidet es sich von traditionellem Kabel-TV?', a: 'IPTV steht für Internet Protocol Television. Statt eines Koaxialkabels, Glasfaser-Receivers oder einer Satellitenschüssel werden die TV-Signale direkt über Ihre Internetverbindung gestreamt. Das bedeutet, dass keine physische Kabelbox benötigt wird. Sie können Tausende Sender in Full HD und 4K überall in Deutschland, Österreich und der Schweiz mit nur einer Internetverbindung anschauen.' },
  { id: 'gen-2', category: 'general', q: 'Wie schnell werde ich nach der Zahlung eingerichtet?', a: 'Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, übernimmt unser Team das Setup live mit Ihnen per WhatsApp. Wir senden Ihre Zugangsdaten, begleiten Sie durch die Installation einer App und senden die Testinhalte – alles im selben Chat. Die meisten Kunden streamen innerhalb von 10 Minuten.' },
  { id: 'gen-3', category: 'general', q: 'Kann ich gleichzeitig auf mehreren TVs oder Geräten schauen?', a: 'Ja, abhängig von Ihrem Paket. Sie können beim Checkout 1, 2 oder 3 gleichzeitige Geräte auswählen. Das bedeutet, dass mehrere Haushaltsmitglieder gleichzeitig unterschiedliche Inhalte ohne Unterbrechung schauen können.' },
  { id: 'gen-4', category: 'general', q: 'Wie funktioniert der kostenlose Test?', a: 'Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen Test ein. So können Sie die 4K Bildqualität prüfen und sicherstellen, dass alles reibungslos auf Ihrem eigenen Gerät und Ihrer Internetverbindung läuft. Erst dann auf ein bezahltes Paket umschalten.' },
  { id: 'gen-5', category: 'general', q: 'Bin ich an einen Vertrag oder eine automatische Verlängerung gebunden?', a: 'Nein, absolut nicht. Wir bieten Prepaid-Abonnements für 3, 6 oder 12 Monate. Wenn Ihr Zeitraum endet, stoppt die Streaming-Verbindung automatisch. Es gibt niemals automatische Abbuchungen oder stille Verlängerungen.' },
  { id: 'gen-6', category: 'general', q: 'Kann ich den Dienst vor der Bezahlung testen?', a: 'Ja, genau so machen wir es. Kontaktieren Sie unser WhatsApp Support Team und wir geben Ihnen einen kostenlosen Test, damit Sie die Bildqualität sehen können, bevor Sie sich entscheiden.' },

  { id: 'sport-1', category: 'sports', q: 'Sind Sport und Events enthalten?', a: 'Ja. Jedes Senderpaket enthält das komplette Sportprogramm in flüssiger 60FPS Qualität.' },
  { id: 'sport-2', category: 'sports', q: 'Zahle ich extra für PPV Events?', a: 'Nein, alle weltweiten Pay-per-View Events sind standardmäßig ohne zusätzliche Kosten enthalten.' },
  { id: 'sport-3', category: 'sports', q: 'Haben ausländische Filme und Serien deutsche Untertitel?', a: 'Über 95% unseres kompletten VOD-Katalogs enthält wählbare deutsche Untertitel und optionale Original-Tonspuren.' },
  { id: 'sport-4', category: 'sports', q: 'Funktionieren EPG TV-Guide und Catch-Up-Funktion richtig?', a: 'Ja. Unser interaktiver EPG TV-Guide wird automatisch synchronisiert.' },
  { id: 'sport-5', category: 'sports', q: 'Kann ich unnötige Senderlisten ausblenden?', a: 'Absolut. Sie können Ländergruppen in Ihrem Player einfach ausblenden.' },
  { id: 'sport-6', category: 'sports', q: 'Wie stabil ist die Bildqualität bei beliebten Events?', a: 'Unsere Server nutzen dynamisches Load Balancing. Selbst in Spitzenmomenten bleibt die Bitrate stabil ohne Frame-Drops.' },

  { id: 'dev-1', category: 'devices', q: 'Auf welchen TVs und Geräten kann ich installieren?', a: 'Unser Service ist kompatibel mit Smart TVs, Amazon Fire TV Stick, Chromecast, Apple TV 4K, Nvidia Shield, MAG Boxen, Windows PC, Mac, iPhone, iPad und Android-Smartphones.' },
  { id: 'dev-2', category: 'devices', q: 'Welche Apps liefern das beste Seherlebnis?', a: 'Wir empfehlen unsere Top-Player für das schnellste Zappen und die beste Leistung.' },
  { id: 'dev-3', category: 'devices', q: 'Welche Mindest-Internetgeschwindigkeit brauche ich?', a: 'Für Full HD Sender empfehlen wir mindestens 15 bis 20 Mbit/s. Für 4K Ultra HD und 60FPS 25 bis 30 Mbit/s.' },
  { id: 'dev-4', category: 'devices', q: 'Was soll ich tun, wenn ein Sender puffert oder einfriert?', a: 'Puffern wird in 99% der Fälle durch vorübergehende WLAN-Störungen oder einen vollen App-Cache verursacht. Starten Sie Ihren Router neu oder starten Sie Ihre App neu.' },
  { id: 'dev-5', category: 'devices', q: 'Brauche ich technische Kenntnisse für die Installation?', a: 'Nein. Die Installation dauert durchschnittlich weniger als 5 Minuten und unser Team begleitet Sie per WhatsApp.' },
  { id: 'dev-6', category: 'devices', q: 'Kann ich mein Konto auf Reisen nutzen?', a: 'Ja. Unsere Streams sind weltweit ohne geografische Einschränkungen zugänglich.' },

  { id: 'pay-1', category: 'billing', q: 'Welche sicheren Zahlungsoptionen unterstützen Sie?', a: 'Sie können sicher per SEPA-Überweisung, Kreditkarte, PayPal und Kryptowährungen bezahlen. Alle Preise sind in Euro.' },
  { id: 'pay-2', category: 'billing', q: 'Ist ein VPN erforderlich?', a: 'Nein. Ein VPN ist nicht erforderlich, da alle unsere Streams über sichere, verschlüsselte Verbindungen laufen.' },
  { id: 'pay-3', category: 'billing', q: 'Wie werden meine persönlichen Daten geschützt?', a: 'Wir respektieren den Datenschutz. Wir speichern niemals Sehverlauf und verkaufen niemals Daten an Dritte.' },
  { id: 'pay-4', category: 'billing', q: 'Was passiert, wenn ich meine Zugangsdaten verliere?', a: 'Kein Problem. Senden Sie eine Nachricht an unser WhatsApp Kundenservice-Team und wir senden Ihre Zugangsdaten innerhalb von 5 Minuten erneut.' },
  { id: 'pay-5', category: 'billing', q: 'Erhalte ich nach der Zahlung eine Rechnung oder Quittung?', a: 'Ja. Unmittelbar nach Abschluss erhalten Sie eine automatische digitale Bestellbestätigung.' },
  { id: 'pay-6', category: 'billing', q: 'Gibt es versteckte Gebühren oder Verwaltungskosten?', a: 'Nein. Die Preise sind all inclusive ohne unerwartete Zusatzkosten.' },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'sports' | 'devices' | 'billing'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('gen-1');

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: faqList.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: PAGE_URL },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `${BRAND} FAQ | Help Center`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'de-DE',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF] overflow-hidden">

      <script
        type="application/ld+json"
        id="faq-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#DD0000]/15 blur-[140px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-lg border border-[#FFCE00]/30">
            <HelpCircle className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Help Center & Antworten
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
            HÄUFIG GESTELLTE <br className="hidden sm:block" />
            <span className="text-[#FFCE00]">FRAGEN</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/70 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
            Finden Sie sofortige Antworten zu <span className="text-[#FFCE00]">Abos</span>, 4K Streaming, Smart TV Setup und sicheren EUR Zahlungen.
          </p>

          <div className="w-full flex items-center justify-center mb-8">
            <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-full bg-black/60 border border-[#DD0000]/40 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagDE /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Deutschland</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagAT /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Österreich</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">Schweiz</span>
              </div>
              <span className="text-white/20 text-xs font-black">•</span>
              <div className="flex items-center gap-1.5 shrink-0">
                <FlagUK /><span className="text-[11px] sm:text-xs font-black uppercase text-[#FFFFFF]">UK</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl relative mt-2 group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#DD0000] to-[#8C0000] rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative">
              <Search className="w-5 h-5 text-[#DD0000] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Frage suchen (App, SEPA, Puffern)..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-[#f2ebeb] text-[#0a0a0c] placeholder-[#0a0a0c]/50 font-bold border-2 border-transparent focus:border-[#DD0000] focus:outline-none shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Alle Fragen (24)', icon: HelpCircle },
            { id: 'general', label: 'Allgemein & Service', icon: Tv },
            { id: 'sports', label: 'Sport & Sender', icon: Zap },
            { id: 'devices', label: 'Smart TV & Apps', icon: Smartphone },
            { id: 'billing', label: 'Abrechnung & Sicherheit', icon: CreditCard },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md border-2 ${
                  active
                    ? 'bg-[#DD0000] text-[#FFFFFF] border-[#DD0000] scale-105 shadow-lg shadow-[#DD0000]/30'
                    : 'bg-white/5 text-[#FFFFFF]/70 border-white/10 hover:border-[#DD0000] hover:text-[#FFFFFF] hover:scale-105'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openAccordion === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`group relative bg-[#f2ebeb] rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                    isOpen
                      ? 'border-[#DD0000] shadow-[0_20px_50px_rgba(221,0,0,0.2)]'
                      : 'border-[#DD0000]/20 hover:border-[#DD0000] hover:shadow-[0_15px_35px_rgba(221,0,0,0.12)]'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                      isOpen ? 'bg-[#DD0000]' : 'bg-transparent'
                    }`}
                  />

                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 pr-2 flex-1">
                      <span
                        className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#DD0000] text-[#FFFFFF]' : 'bg-[#DD0000]/10 text-[#DD0000]'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <span className="font-black text-[#0a0a0c] text-base sm:text-lg uppercase tracking-tight leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#DD0000] text-[#FFFFFF]'
                          : 'bg-[#0a0a0c]/5 text-[#0a0a0c] group-hover:bg-[#DD0000]/10 group-hover:text-[#DD0000]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#0a0a0c]/85 text-sm sm:text-base font-medium leading-relaxed px-5 sm:px-6 pl-15 sm:pl-16 border-l-4 border-[#DD0000] ml-4 sm:ml-5 py-1">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-10 text-center shadow-xl">
            <AlertCircle className="w-10 h-10 text-[#DD0000] mx-auto mb-3" />
            <p className="font-black text-lg uppercase tracking-tight mb-1 text-[#0a0a0c]">
              Keine Ergebnisse gefunden
            </p>
            <p className="text-sm font-bold text-[#0a0a0c]/70 mb-6">
              Versuchen Sie einen anderen Suchbegriff oder kontaktieren Sie unseren WhatsApp Helpdesk direkt.
            </p>
            <a
              href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hallo ${BRAND}, ich konnte keine Antwort auf meine Frage finden.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#B00000] transition-all shadow-lg border border-[#FFCE00]/30"
            >
              <MessageCircle className="w-4 h-4" /> Per WhatsApp Fragen
            </a>
          </div>
        )}
      </section>

      {/* RECOMMENDED DEVICES */}
      <section className="py-16 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Empfohlenes Setup
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Beste <span className="text-[#FFCE00]">Geräte & Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FFFFFF]/70 font-bold max-w-xl mx-auto">
              Die besten Apps und Mindest-Internetgeschwindigkeiten für ein pufferfreies Seherlebnis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Android & Firestick',
                desc: 'Höchste Stabilität und schnellstes Zappen.',
                apps: ['Empfohlene Apps', 'TiviMate Player Pro', 'IBO Player Pro'],
                speed: 'Mind. Geschwindigkeit: 20 Mbit/s',
              },
              {
                icon: Tv,
                title: 'Samsung & LG Smart TV',
                desc: 'Direkt streamen ohne externe Box.',
                apps: ['Apps (webOS / Tizen)', 'Smart IPTV (SIPTV)', 'IBO Player Pro'],
                speed: 'Mind. Geschwindigkeit: 25 Mbit/s',
              },
              {
                icon: Cpu,
                title: 'Apple TV & iOS',
                desc: 'Scharfes Interface für Apple Geräte.',
                apps: ['IPTVX (tvOS)', 'GSE Smart IPTV', 'IPTV Smarters Player Lite'],
                speed: 'Mind. Geschwindigkeit: 25 Mbit/s',
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group bg-[#f2ebeb] border-2 border-[#DD0000]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#DD0000] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] transition-all duration-500"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-4 group-hover:bg-[#DD0000] transition-colors">
                      <Icon className="w-6 h-6 text-[#DD0000] group-hover:text-[#FFFFFF] transition-colors" />
                    </div>
                    <h3 className="text-lg font-black text-[#0a0a0c] uppercase mb-1">{card.title}</h3>
                    <p className="text-xs text-[#0a0a0c]/60 font-bold mb-4">{card.desc}</p>
                    <ul className="space-y-2 text-xs font-bold text-[#0a0a0c]/80">
                      {card.apps.map((app) => (
                        <li key={app} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#0a0a0c]/10 text-[11px] font-black text-[#DD0000]">
                    {card.speed}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#DD0000] flex items-center justify-center">
              <Wrench className="w-6 h-6 text-[#FFCE00]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight">
              Schnelle Selbsthilfe bei kleinen Störungen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, title: 'Router Neu Starten', desc: 'Schalten Sie Modem und TV für 30 Sekunden aus, um DNS-Cache und Netzwerküberlastung zu leeren.' },
              { n: 2, title: 'Playlist Aktualisieren', desc: 'Wählen Sie in Ihrer App "Playlist aktualisieren" oder "Portal neu laden", um neue Inhalte zu laden.' },
              { n: 3, title: 'Stream-Format Wechseln', desc: 'Wechseln Sie in den App-Einstellungen den Stream-Typ von TS zu HLS für flüssigere Datenübertragung.' },
            ].map((step) => (
              <div key={step.n} className="p-5 bg-white rounded-2xl border border-[#0a0a0c]/10 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm flex items-center justify-center mb-3">
                  {step.n}
                </span>
                <h3 className="font-black text-sm uppercase mb-1 text-[#0a0a0c]">{step.title}</h3>
                <p className="text-xs font-bold text-[#0a0a0c]/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center my-10">
        <ShareButtons />
      </div>

      {/* SUPPORT CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#FFCE00]/30 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#8C0000] px-4 py-2 rounded-full mb-4 shadow-md">
              <LifeBuoy className="w-4 h-4" />
              <span className="font-black text-xs uppercase tracking-widest">Persönliche Hilfe</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#FFFFFF] uppercase tracking-tight mb-3">
              Haben Sie eine Spezielle Frage?
            </h2>

            <p className="text-[#FFFFFF]/90 font-bold text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Unser Team ist 24/7 auf WhatsApp verfügbar für Installationshilfe, Fragen und kostenlose Test-Lines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={`${whatsappBaseUrl}?text=${encodeURIComponent(`Hallo ${BRAND}, ich habe eine Frage zum Service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#FFFFFF] hover:text-[#DD0000] transition-all hover:scale-105 shadow-xl border-2 border-[#FFCE00]"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Support
              </a>
              <Link
                href="/preise"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFCE00] text-[#8C0000] font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
              >
                Alle Pakete
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCE00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}