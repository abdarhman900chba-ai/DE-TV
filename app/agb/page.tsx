import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  FileText,
  AlertCircle,
  CheckCircle,
  CreditCard,
  UserCheck,
  Ban,
  RefreshCw,
  Mail,
  Scale,
  ShieldCheck,
  Gavel,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/agb`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Allgemeine Geschäftsbedingungen',
  `Lesen Sie die ${BRAND} AGB. Klare Vereinbarungen zu Abonnements, unserer Qualitätsgarantie, akzeptabler Nutzung und deutschem Gerichtsstand.`,
  '/agb'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const TermsSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Allgemeine Geschäftsbedingungen | ${BRAND}`,
        description: `${BRAND} AGB. Klare Vereinbarungen zu Abonnements, Qualitätsgarantie, akzeptabler Nutzung und deutschem Gerichtsstand.`,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Allgemeine Geschäftsbedingungen', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="terms-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <TermsSchema />

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
            <Scale className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Rechtliche Vereinbarung
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Allgemeine <span className="text-[#FFCE00]">Geschäftsbedingungen</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Bitte lesen Sie diese Bedingungen aufmerksam durch, bevor Sie die Streaming-Angebote und Abonnements von {BRAND} beanspruchen.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Zuletzt aktualisiert:{' '}
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

        {/* Acceptance Box */}
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-1">
                  Geltung der Bestimmungen:
                </span>
                Durch den Erwerb eines Abonnements oder die Nutzung der Webpräsenz und Dienste von {BRAND} erklären Sie sich mit diesen Allgemeinen Geschäftsbedingungen sowie unserer Datenschutzerklärung einverstanden.[cite: 5]
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Leistungsbeschreibung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              {BRAND} stellt digitale IPTV-Streaming-Lösungen bereit, die es registrierten Nutzern gestatten, Live-Sender sowie Video-on-Demand (VOD) Filme und Serien über das Internet zu konsumieren. Das Angebot richtet sich ausschließlich an private Haushalte für den nicht-kommerziellen Eigenbedarf.[cite: 5]
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Teilnahmevoraussetzungen & Pflichten
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Mit Inanspruchnahme unserer Services bestätigen und garantieren Sie folgende Punkte:[cite: 5]
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Sie sind mindestens 18 Jahre alt und rechtlich geschäftsfähig.',
                'Sie hinterlegen bei der Registrierung wahrheitsgemäße und aktuelle Angaben.',
                'Sie halten Ihre persönlichen Zugangsdaten und Playlist-URLs geheim und geben diese nicht weiter.',
                'Sie sehen von jeglicher kommerziellen Weiterverbreitung oder öffentlichen Ausstrahlung ab.',
                'Sie verfügen über eine stabile Internetverbindung (empfohlen ab 25 Mbit/s für flüssiges 4K-Streaming).',
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

            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Verantwortung für das Konto:
                    </span>
                    Sie tragen die volle Verantwortung für sämtliche Aktivitäten, die über Ihr Benutzerkonto und Ihre Zugangsdaten ausgeführt werden.[cite: 5]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Abonnements, Tarife & Bezahlung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Unsere aktuellen Tarifmodelle und Kostenübersichten entnehmen Sie der Preisseite. Mit dem Bestellvorgang akzeptieren Sie folgende Bestimmungen:[cite: 5]
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Die Abrechnung erfolgt im Voraus über gängige Zahlungsmethoden (Kreditkarte, SEPA, PayPal oder Krypto).',
                'Es findet keine 자동e Verlängerung statt; Sie bestimmen den Zeitpunkt einer Verlängerung selbst.',
                'Die Freischaltung Ihres Profils erfolgt nach Zahlungseingang im Zuge unseres WhatsApp-basierten Setups.',
                'Sämtliche Beträge verstehen sich in Euro (€ inkl. gesetzlicher MwSt.), sofern keine abweichenden Angaben gemacht werden.',
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

            <div className="bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      Gesicherter Zahlungsverkehr:
                    </span>
                    Sämtliche Zahlungsabwicklungen laufen über PCI-DSS-zertifizierte Schnittstellen mit starker 256-Bit SSL-Verschlüsselung ab.[cite: 5]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Fair-Use-Richtlinie (Nutzungsbedingungen)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Es ist untersagt, unsere Infrastruktur für folgende Handlungen zu missbrauchen:[cite: 5]
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Weiterverkauf, privates Restreaming oder Vervielfältigung der zugeteilten Zugänge.',
                'Paralleles Streamen auf mehr Endgeräten, als Ihr gebuchtes Tarifpaket vorsieht.',
                'Reverse Engineering, automatisiertes Auslesen (Scraping) oder Überlastungsangriffe (DDoS) gegen unsere Server.',
                'Das dauerhafte Herunterladen, Aufzeichnen oder Weiterleiten geschützter Streams.',
                'Jegliche Verwendung im Widerspruch zur geltenden deutschen, österreichischen, schweizerischen oder internationalen Rechtsordnung.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Ban className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Sanktionen bei Zuwiderhandlung:
                    </span>
                    Bei Zuwiderhandlungen gegen diese Richtlinien behalten wir uns das Recht vor, das Konto unverzüglich und ohne Anspruch auf Kostenerstattung zu sperren.[cite: 5]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              5. Leistungsversprechen & Rückerstattungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir gewähren eine umfassende 7-Tage-Garantie auf unsere Servicequalität. Sollten unerwartete technische Hürden auftreten, die unser Support-Team nicht beheben kann, steht Ihnen innerhalb von 7 Tagen ab Kaufdatum ein Rückgaberecht offen.[cite: 5]
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Diese Kulanz greift ausschließlich bei nachweisbaren technischen Störungen und deckt weder persönliche Präferenzen noch schwache Heimnetzwerke oder inkompatible Hardware ab. Ausführliche Richtlinien finden Sie in unserer{' '}
              <Link href="/rueckgabe" className="text-[#FFCE00] font-black hover:underline">
                Rückgabe- & Garantievereinbarung
              </Link>
              .[cite: 5]
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              6. Systemverfügbarkeit & Programmänderungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Unser Ziel ist eine durchgehende Erreichbarkeit von 99,9%. Dennoch können notwendige Wartungsarbeiten oder Anpassungen durch externe Quellen anfallen. {BRAND} behält sich folgende Maßnahmen vor:[cite: 5]
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Aktualisierung und Strukturierung der Sender- und VOD-Verzeichnisse zur Performance-Steigerung.',
                'Ausführung kurzer Wartungsfenster außerhalb der Hauptverkehrszeiten.',
                'Preisanpassungen für zukünftige Abrechnungszeiträume.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <RefreshCw className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              7. Urheberrecht & Haftungsbeschränkung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Sämtliche Logos, Marken, Texte und Web-Inhalte sind urheberrechtlich geschütztes Eigentum von {BRAND}. Im gesetzlich zulässigen Rahmen übernimmt {BRAND} keine Haftung für mittelbare Schäden, Datenverluste oder Verbindungsausfälle, die auf Seiten von Internetprovidern oder Endgeräten entstehen.[cite: 5]
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              8. Rechtswahl & Gerichtsstand
            </h2>
            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Anwendbare Gesetze:
                    </span>
                    Für diese Geschäftsbedingungen gilt das Recht der Bundesrepublik Deutschland. Verbraucherschutzvorschriften im Wohnsitzland des Kunden (Deutschland, Österreich, Schweiz) bleiben unberührt. Gerichtsstand bei Streitigkeiten mit Unternehmen ist Frankfurt am Main.[cite: 5]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              9. Anpassung der Konditionen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wir behalten uns vor, diese AGB zu aktualisieren. Relevante Änderungen werden auf der Plattform oder über direkte WhatsApp-Nachrichten an aktive Abonnenten kommuniziert. Die fortgesetzte Nutzung der Dienste nach einer Modifikation gilt als Zustimmung zu den neuen Bedingungen.[cite: 5]
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              10. Support & Ansprechpartner
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Bei rechtlichen Fragen zu diesen AGB oder bei Anliegen rund um Ihr aktives Konto erreichen Sie unser Team über folgende Wege:[cite: 5]
            </p>
            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#DD0000] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                Rechts- & Support-Abteilung
              </p>
              <a
                href={`mailto:legal@${CONSTANTS.DOMAIN}`}
                className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#DD0000] transition-colors break-all"
              >
                legal@{CONSTANTS.DOMAIN}
              </a>
            </div>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Für technische Hilfe steht Ihnen rund um die Uhr unser{' '}
              <Link href="/support" className="text-[#FFCE00] font-black hover:underline">
                WhatsApp Support Team
              </Link>{' '}
              zur Seite.[cite: 5]
            </p>
          </section>
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