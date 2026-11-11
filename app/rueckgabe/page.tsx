import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  RefreshCw,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Clock,
  Mail,
  MessageSquare,
  Wrench,
  Wifi,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/rueckgabe`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Rückgabe & Garantie Policy',
  `Erfahren Sie die genauen Bedingungen der ${BRAND} 7-Tage-Qualitätsgarantie. Transparente technische Richtlinien und Support-Abläufe für Kunden aus Deutschland, Österreich und der Schweiz.`,
  '/rueckgabe'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const RefundSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Rückgabe & Garantie Policy | ${BRAND}`,
        description: `${BRAND} Rückerstattungs- und 7-Tage-Qualitätsgarantie-Policy. Transparente technische Richtlinien und Support-Verfahren.`,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Rückgabe & Garantie', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Wie funktioniert die ${BRAND} 7-Tage-Qualitätsgarantie?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wenn Sie innerhalb von 7 Kalendertagen nach dem Kauf ein verifiziertes technisches Problem in unserer Server-Infrastruktur feststellen und unser 24/7 Support-Team dies nicht innerhalb von 24 Stunden beheben kann, erstatten wir Ihnen den vollen Kaufbetrag. Die Garantie gilt für echte Service-Probleme, nicht für Meinungsänderungen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Situationen sind NICHT von der Rückerstattungsrichtlinie abgedeckt?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Rückerstattungen sind nicht möglich bei Meinungsänderung, persönlicher Präferenz, lokalen WLAN- oder Internetproblemen unter 25 Mbit/s, Geräte-Inkompatibilität mit veralteter Firmware, einzelnen Senderänderungen oder Verstößen gegen die Fair-Use-Richtlinie wie Streaming auf mehr Geräten als gekauft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert eine Rückerstattung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nach der technischen Autorisierung werden Rückerstattungen innerhalb von 1 bis 3 Werktagen auf die ursprüngliche Zahlungsmethode zurückerstattet: SEPA-Überweisung, Kreditkarte, PayPal oder Krypto.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="refund-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function RefundPolicyPage() {
  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <RefundSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
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
            <ShieldCheck className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Verifizierte Server Garantie
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Rückgabe & <span className="text-[#FFCE00]">Garantie</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            {BRAND} steht für kompromisslose Stabilität. Deshalb gewähren wir eine transparente 7-Tage-Qualitätsgarantie auf sämtliche aktiven Streaming-Verbindungen. Sollte der Service nicht die zugesagte Leistung erbringen, sorgen wir für eine faire Lösung.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Zuletzt geprüft:{' '}
            {new Date().toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Trust Banner */}
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/15 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                Unsere 7-Tage-Qualitätsgarantie
              </h2>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                Wir liefern ausschließlich hochwertige 4K IPTV und Full HD Streams. Diese Garantie greift bei echten Service-Problemen – etwa einem nachgewiesenen technischen Defekt, den unser Support-Team nicht innerhalb des genannten Reparaturfensters beheben kann. Nicht abgedeckt sind Meinungsänderungen, persönliche Vorlieben oder Geräteprobleme auf Ihrer Seite.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Umfang der technischen Garantie
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Eine Rückerstattung erfolgt ausschließlich dann, wenn der bereitgestellte Service strukturell und nachweisbar nicht funktionsfähig ist und die Ursache in unserer Server-Infrastruktur liegt. Dabei müssen die folgenden Bedingungen kumulativ erfüllt sein:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Ihre Meldung geht schriftlich innerhalb von exakt 7 Kalendertagen nach dem ursprünglichen Kaufdatum bei uns ein.',
                'Es besteht ein andauernder, serverbedingter Ausfall, durch den der Service nicht wie beworben nutzbar ist.',
                'Unser 24/7 technischer Support hatte mindestens 24 Stunden Zeit, das gemeldete Verbindungsproblem zu beheben oder alternative Routings einzurichten.',
                'Sie haben die von uns angeforderten Standard-Diagnoseschritte durchgeführt, wie Router-Neustart, Leeren des App-Cache und Prüfung der DNS-Einstellungen.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Ausnahmen & nicht erstattungsfähige Situationen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Da digitale Zugangscodes und Playlists unmittelbar nach dem Kauf dauerhaft auf unseren Load-Balancern erstellt werden, kann in folgenden Situationen <strong className="text-[#FFFFFF]">keine Rückerstattung</strong> beansprucht werden:
            </p>

            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5 text-[#0a0a0c] text-xs sm:text-sm font-bold leading-relaxed">
                    <li>
                      • <strong>Meinungsänderung:</strong> Anfragen, die auf Geschmack, Interface-Erfahrung oder dem bloßen Wegfall des Bedarfs am Abonnement beruhen.
                    </li>
                    <li>
                      • <strong>Lokale Netzwerkeinschränkungen:</strong> Puffern, das durch instabile WLAN-Verbindung, lokale Netzwerküberlastung oder Internetgeschwindigkeiten unter 25 Mbit/s entsteht.
                    </li>
                    <li>
                      • <strong>Geräte-Inkompatibilität:</strong> Probleme durch veraltete Smart TV Firmware, nicht unterstützte Drittanbieter-IPTV-Apps oder falsche lokale Konfiguration.
                    </li>
                    <li>
                      • <strong>Senderänderungen:</strong> Vorübergehende Umstrukturierungen oder Anpassungen einzelner Sender innerhalb der Zehntausenden verfügbaren Sender.
                    </li>
                    <li>
                      • <strong>Fair-Use-Verstöße:</strong> Konten, die wegen Nutzung auf mehr Geräten als gebucht automatisch gesperrt wurden.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Verpflichtendes Diagnose- & Reparaturverfahren
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Bevor eine Rückerstattung autorisiert wird, durchläuft unser Support-Team das folgende dreistufige Protokoll:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <Wrench className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">1. Line-Verifizierung</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Wir prüfen Ihren Account-Token auf den aktiven Server-Ports.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <Wifi className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">2. Server-Reset</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Wir verlagern Ihr Streaming-Profil auf einen alternativen Frankfurt-Knoten.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between hover:border-[#DD0000] transition-colors">
                <div>
                  <FileCheck className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#FFFFFF] mb-1">3. Freigabe</h4>
                  <p className="text-xs text-[#FFFFFF]/60 font-medium">
                    Bleibt der Ausfall unlösbar, folgt die sofortige Rückerstattungsgenehmigung.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Anfrageverfahren & Bearbeitungszeit
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-6">
              Entspricht Ihre Meldung den technischen Garantiebedingungen, reichen Sie Ihre Anfrage über einen der unten genannten Kanäle ein – inklusive Bestellnummer und kurzer Problembeschreibung:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-3">
                    <MessageSquare className="w-5 h-5 text-[#DD0000]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    WhatsApp Support (Schnellste)
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Senden Sie Ihre Bestelldaten und einen Screenshot der Fehlermeldung für eine Echtzeit-Diagnose.
                  </p>
                </div>
                <a
                  href={`${whatsappBaseUrl}?text=${encodeURIComponent(
                    `Hallo! Ich habe ein anhaltendes technisches Problem mit meinem IPTV Konto und möchte das Diagnoseverfahren starten.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#B00000] transition-all border border-[#FFCE00]/30"
                >
                  Diagnose per WhatsApp Starten →
                </a>
              </div>

              <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-[#DD0000]" />
                  </div>
                  <h3 className="text-lg font-black text-[#0a0a0c] uppercase tracking-tight mb-1">
                    Schriftlich per E-Mail
                  </h3>
                  <p className="text-[#0a0a0c]/80 text-xs sm:text-sm font-bold leading-relaxed mb-4">
                    Senden Sie Ihren Transaktionsbeleg und Fehlercode an support@{CONSTANTS.DOMAIN}.
                  </p>
                </div>
                <a
                  href={`mailto:support@${CONSTANTS.DOMAIN}?subject=Technische%20Support-Anfrage`}
                  className="w-full text-center py-3 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-wider border-2 border-[#DD0000] hover:bg-[#DD0000] transition-all"
                >
                  E-Mail Support →
                </a>
              </div>
            </div>

            <p className="text-[#FFFFFF]/60 text-xs leading-relaxed font-medium">
              Nach offizieller technischer Autorisierung wird der Betrag innerhalb von 1 bis 3 Werktagen über die ursprüngliche Zahlungsmethode zurückerstattet: SEPA-Überweisung, Kreditkarte, PayPal oder Krypto.
            </p>
          </section>
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
              Brauchen Sie Hilfe bei Ihrem Setup?
            </h3>
            <p className="text-[#DD0000] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
              In 99% der Fälle lösen unsere Streaming-Experten Pufferprobleme innerhalb von 2 Minuten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="/support"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-xs uppercase tracking-widest hover:bg-[#B00000] transition-all shadow-md border border-[#FFCE00]/30"
              >
                Sofortige Hilfe Erhalten
              </Link>
              <Link
                href="/einrichtung"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#0a0a0c] text-[#FFFFFF] font-black text-xs uppercase tracking-widest border-2 border-[#DD0000] hover:bg-[#DD0000] transition-all"
              >
                Einrichtungsanleitung
              </Link>
            </div>
          </div>
        </div>

        {/* Back link */}
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