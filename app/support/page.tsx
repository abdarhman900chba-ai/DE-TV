'use client';

import { useState, useRef, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Clock,
  Check,
  X,
  Headphones,
  Zap,
  ShieldCheck,
  Users,
  LifeBuoy,
} from 'lucide-react';
import Link from 'next/link';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/support`;

// ---------------------------------------------------------------------------
// TOAST
// ---------------------------------------------------------------------------
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-50 max-w-md w-full animate-slide-in">
      <div
        className={`rounded-2xl p-6 shadow-2xl border-4 backdrop-blur-xl ${
          type === 'success' ? 'bg-[#f2ebeb] border-green-600' : 'bg-[#f2ebeb] border-[#DD0000]'
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              type === 'success' ? 'bg-green-600/20' : 'bg-[#DD0000]/20'
            }`}
          >
            {type === 'success' ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-[#DD0000]" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[#0a0a0c] font-black uppercase text-sm">{message}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Benachrichtigung schließen"
            className="flex-shrink-0 text-[#0a0a0c]/40 hover:text-[#DD0000] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// SUCCESS POPUP
// ---------------------------------------------------------------------------
const SuccessPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4">
      <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center animate-scale-up">
        <div className="w-24 h-24 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
          <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-[#0a0a0c] mb-3 uppercase tracking-tight">
          Nachricht Gesendet!
        </h3>

        <p className="text-[#DD0000] font-bold text-sm leading-relaxed mb-6">
          Wir danken Ihnen für Ihre Kontaktaufnahme mit {BRAND}. Unser Support Team meldet sich so rasch wie möglich bei Ihnen.
        </p>

        <div className="bg-[#0a0a0c] rounded-2xl border border-white/5 p-5 mb-6 text-left">
          <p className="text-[#FFFFFF]/40 text-xs uppercase tracking-widest font-black mb-3">
            Was passiert als Nächstes?
          </p>
          <ul className="space-y-2 text-sm text-[#FFFFFF]/80 font-bold uppercase tracking-wide">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
              Geprüft von einem IPTV Spezialisten
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
              Anfrage- oder Test-Verifizierung
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FFCE00] shrink-0" />
              Antwort innerhalb von Minuten per WhatsApp
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:bg-[#B00000] transition-transform hover:scale-105 shadow-md cursor-pointer border border-[#FFCE00]/30"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const whatsappBaseUrl = CONSTANTS.CONTACT.whatsappUrl;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const encodedMsg = encodeURIComponent(
        `Hallo ${BRAND},\n\nName: ${formData.name}\nE-Mail: ${formData.email}\nBetreff: ${formData.subject}\nNachricht: ${formData.message}`
      );
      window.open(`${whatsappBaseUrl}?text=${encodedMsg}`, '_blank');

      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setToast({ message: 'Ihre Nachricht wurde erfolgreich versandt!', type: 'success' });
    } catch {
      setToast({ message: 'Senden fehlgeschlagen. Bitte erneut über WhatsApp versuchen.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const startWhatsAppChat = () => {
    const defaultText = encodeURIComponent(
      `Hallo ${BRAND}, ich habe eine Frage zu meinem IPTV Deutschland Abonnement.`
    );
    window.open(`${whatsappBaseUrl}?text=${defaultText}`, '_blank');
  };

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${PAGE_URL}/#contact`,
        url: PAGE_URL,
        name: `${BRAND} Support`,
        description: `Kontaktieren Sie ${BRAND} für 24/7 Kundensupport. WhatsApp, E-Mail und Live-Chat Hilfe für IPTV Deutschland Abonnements, Setup und Abrechnung.`,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Support', item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wie kontaktiere ich den Support am schnellsten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Für den schnellsten Support senden Sie eine Nachricht per WhatsApp. Unser Team antwortet in der Regel innerhalb weniger Minuten.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Bieten Sie Hilfe bei der Installation an?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Unser Team begleitet Sie Schritt für Schritt durch die Einrichtung von IPTV Deutschland auf Smart TV, Firestick, Android und Apple TV – entweder manuell oder mit Remote-Aktivierung per WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich zuerst einen kostenlosen Test anfordern?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolut. Fordern Sie einen kostenlosen 24-Stunden IPTV Test per WhatsApp an, um unsere 4K IPTV Sender risikofrei vor dem Abonnement zu testen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schnell werde ich eingerichtet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, richtet unser Team Sie live per WhatsApp ein. Die meisten Kunden streamen innerhalb von 10 Minuten.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] pt-32 pb-16 text-[#FFFFFF]">
      <script
        type="application/ld+json"
        id="support-page-schema"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}

      {/* HERO */}
      <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(221,0,0,0.15),_transparent_50%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCE00]/30">
              <Mail className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                24/7 Support Deutschland
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFFFFF] tracking-tighter uppercase mb-6 leading-none">
              Kontakt <span className="text-[#FFCE00]">{BRAND}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
              Sie haben Fragen zu unseren IPTV Deutschland Sendern, zum Smart TV Setup oder zu Zahlungen? Unser Support Team erreichen Sie rund um die Uhr per WhatsApp, E-Mail und Live-Chat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeIn>
              <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0c] uppercase tracking-tight mb-2">
                  Senden Sie Uns eine Nachricht
                </h2>
                <p className="text-[#DD0000] font-bold text-sm mb-6">
                  Füllen Sie das untenstehende Formular aus – wir melden uns per WhatsApp oder E-Mail, meist innerhalb weniger Minuten.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Vollständiger Name <span className="text-[#DD0000]">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none"
                        placeholder="z.B. Thomas Müller"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      E-Mail-Adresse <span className="text-[#DD0000]">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none"
                        placeholder="name@beispiel.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Betreff <span className="text-[#DD0000]">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a0a0c]/40" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-10 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold focus:border-[#DD0000] transition-colors outline-none appearance-none"
                      >
                        <option value="" className="bg-[#f2ebeb]">
                          Wählen Sie ein Thema...
                        </option>
                        <option value="test" className="bg-[#f2ebeb]">
                          Kostenloser 24-Stunden IPTV Test
                        </option>
                        <option value="setup" className="bg-[#f2ebeb]">
                          Setup Hilfe & App-Installation
                        </option>
                        <option value="pricing" className="bg-[#f2ebeb]">
                          Pakete & Preise Fragen
                        </option>
                        <option value="technical" className="bg-[#f2ebeb]">
                          Technischer Support
                        </option>
                        <option value="billing" className="bg-[#f2ebeb]">
                          Zahlungen (SEPA / Kreditkarte / PayPal / Krypto)
                        </option>
                        <option value="general" className="bg-[#f2ebeb]">
                          Allgemeine Frage
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0a0a0c]/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-[#0a0a0c] uppercase tracking-wide mb-2"
                    >
                      Nachricht <span className="text-[#DD0000]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-black/[0.03] border-2 border-[#0a0a0c]/10 rounded-xl text-[#0a0a0c] font-bold placeholder-[#0a0a0c]/40 focus:border-[#DD0000] transition-colors outline-none resize-none"
                        placeholder="Beschreiben Sie Ihre Frage oder Ihren Gerätetyp..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#DD0000] to-[#8C0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 border border-[#FFCE00]/30 ${
                      loading
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:scale-[1.01] hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-[#FFFFFF]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Wird Gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Nachricht Senden
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
                <h3 className="text-xl font-black text-[#0a0a0c] uppercase tracking-tight mb-6">
                  Kontaktdetails
                </h3>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#DD0000]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">E-Mail</p>
                    <a
                      href={`mailto:${CONSTANTS.CONTACT.email}`}
                      className="text-[#0a0a0c] hover:text-[#DD0000] transition-colors text-sm font-bold break-all"
                    >
                      {CONSTANTS.CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#DD0000]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">WhatsApp</p>
                    <a
                      href={whatsappBaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0a0a0c] hover:text-[#DD0000] transition-colors text-sm font-bold"
                    >
                      {CONSTANTS.CONTACT.phone || 'Per WhatsApp chatten'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-[#DD0000]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                      Direkter Kontakt
                    </p>
                    <p className="text-[#0a0a0c] text-sm font-bold">24/7 Verfügbar</p>
                    <button
                      onClick={startWhatsAppChat}
                      className="text-[#DD0000] text-xs font-black uppercase tracking-widest hover:text-[#8C0000] transition-colors mt-1 cursor-pointer block"
                    >
                      WhatsApp Chat Starten →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#DD0000]" />
                  </div>
                  <div>
                    <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black">
                      Antwortzeit
                    </p>
                    <p className="text-[#0a0a0c] text-sm font-bold">Innerhalb von 5 bis 15 Minuten</p>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-black/5">
                  <p className="text-[#0a0a0c]/50 text-xs uppercase tracking-widest font-black mb-4">
                    Garantierter Service
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Headphones className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        24/7 Hilfe
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <ShieldCheck className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        Sicher
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Zap className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        Schnelles Setup
                      </p>
                    </div>
                    <div className="bg-black/5 rounded-xl p-3 text-center border border-black/5">
                      <Users className="w-5 h-5 text-[#DD0000] mx-auto mb-1" />
                      <p className="text-[#0a0a0c] text-[9px] uppercase font-black tracking-wider">
                        15K+ Kunden
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        <FadeIn>
          <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3">
                  <LifeBuoy className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  24/7 Support
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Immer verfügbar</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Schnelle Antwort
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">Direkt per WhatsApp</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Datenschutz Garantie
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">DSGVO konform</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h4 className="text-[#0a0a0c] font-black text-sm uppercase tracking-wide">
                  Bester Service
                </h4>
                <p className="text-[#0a0a0c]/60 text-xs font-bold mt-0.5">#1 IPTV Deutschland</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 w-full">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mb-3 uppercase tracking-tight">
            Häufig Gestellte <span className="text-[#FFCE00]">Fragen</span>
          </h2>
          <p className="text-[#FFFFFF]/70 font-bold text-base">
            Schnelle Antworten auf die häufigsten Support-Fragen
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: 'Wie kontaktiere ich den Support am schnellsten?',
              a: `Für den schnellsten Support schreiben Sie uns direkt per WhatsApp. Unser Team antwortet in der Regel innerhalb weniger Minuten.`,
            },
            {
              q: 'Bieten Sie Hilfe bei der Installation an?',
              a: 'Ja. Unser Team begleitet Sie Schritt für Schritt bei der Einrichtung von IPTV Deutschland auf Smart TV, Firestick, Android und Apple TV – entweder manuell oder mit Remote-Aktivierung per WhatsApp.',
            },
            {
              q: 'Kann ich zuerst einen kostenlosen Test anfordern?',
              a: 'Selbstverständlich. Fordern Sie einen kostenlosen 24-Stunden IPTV Test per WhatsApp an, um unsere 4K IPTV Sender risikofrei vor dem Abonnement zu prüfen.',
            },
            {
              q: 'Wie schnell werde ich eingerichtet?',
              a: 'Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, richtet unser Team Sie live per WhatsApp ein. Die meisten Kunden streamen bereits nach 10 Minuten.',
            },
          ].map((faq, idx) => (
            <FadeInItem
              key={idx}
              className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-2xl p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)]"
            >
              <h3 className="text-[#0a0a0c] font-black text-base uppercase tracking-tight mb-2">
                {faq.q}
              </h3>
              <p className="text-[#0a0a0c]/80 text-sm font-bold leading-relaxed">{faq.a}</p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#FFCE00]/30"
          >
            Alle FAQ Ansehen
          </Link>
        </FadeIn>
      </section>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}