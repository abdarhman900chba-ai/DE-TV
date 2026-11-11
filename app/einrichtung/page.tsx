'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';
import Link from 'next/link';
import {
  MonitorSmartphone,
  Tv,
  Apple,
  Laptop,
  Sparkles,
  Lock,
  Zap,
  Users,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  Download,
  KeyRound,
  AlertCircle,
  X,
  ChevronDown,
  Gift,
  ShoppingCart,
  Plug,
  ShieldCheck,
  Globe,
  Phone,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import ShareButtons from '../components/ShareButtons';
import GermanFlag from '../components/GermanFlag';

const FlagDE = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-de"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-de)">
      <rect x="0" y="0" width="32" height="10.67" fill="#000000" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#DD0000" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#FFD700" />
    </g>
  </svg>
);
const FlagAT = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-at"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-at)">
      <rect x="0" y="0" width="32" height="10.67" fill="#ED2939" />
      <rect x="0" y="10.67" width="32" height="10.66" fill="#FFFFFF" />
      <rect x="0" y="21.33" width="32" height="10.67" fill="#ED2939" />
    </g>
  </svg>
);
const FlagCH = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-ch"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-ch)">
      <rect x="0" y="0" width="32" height="32" fill="#D52B1E" />
      <rect x="13.33" y="6.67" width="5.34" height="18.66" fill="#FFFFFF" />
      <rect x="6.67" y="13.33" width="18.66" height="5.34" fill="#FFFFFF" />
    </g>
  </svg>
);
const FlagUK = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
    <clipPath id="st-pg-uk"><rect width="32" height="32" /></clipPath>
    <g clipPath="url(#st-pg-uk)">
      <path fill="#012169" d="M0 0h32v32H0z" />
      <path stroke="#FFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const IBO_DOWNLOAD_URL = 'https://iboplayer.pro/';

const devices = [
  { id: 'firestick', name: 'Firestick / Android TV', icon: MonitorSmartphone, popular: true, steps: 6 },
  { id: 'smarttv', name: 'Smart TVs', icon: Tv, popular: false, steps: 6 },
  { id: 'apple', name: 'Apple Geräte', icon: Apple, popular: false, steps: 6 },
  { id: 'pc', name: 'PC / Mac', icon: Laptop, popular: false, steps: 6 },
];

const stepData = {
  firestick: {
    title: 'Setup auf Firestick & Android TV',
    icon: MonitorSmartphone,
    steps: [
      {
        number: 1,
        title: 'Paket Wählen',
        description: 'Wählen Sie das Paket, das zu Ihrem Haushalt passt. 3, 6 oder 12 Monate mit 1, 2 oder 3 Geräten.',
        chips: ['Live TVs', 'Filme & Serien', '4K & 60FPS', 'Euro Preise'],
        duration: '1 Min',
        icon: ShoppingCart,
        cta: { label: 'Pakete Ansehen', href: '/preise', type: 'internal' },
        tip: 'Das 12-Monats-VIP Paket spart bis zu 50% und schaltet Priority Server frei.',
      },
      {
        number: 2,
        title: 'Support per WhatsApp Kontaktieren',
        description: 'Schreiben Sie unserem Team per WhatsApp mit Ihrem gewählten Paket. Wir bestätigen den Preis in Euro und senden einen sicheren Zahlungslink direkt im Chat.',
        chips: ['SEPA', 'Kreditkarte', 'PayPal', 'Krypto'],
        duration: '2-3 Min',
        icon: MessageCircle,
        cta: { label: 'Per WhatsApp Chatten', type: 'whatsapp', message: 'Hallo! Ich möchte abonnieren und benötige Hilfe beim Firestick Setup.' },
        tip: 'Support ist 24/7 live mit einer durchschnittlichen Antwortzeit unter 2 Minuten.',
      },
      {
        number: 3,
        title: 'Player Installieren',
        description: 'Die Player sind die schnellsten und stabilsten IPTV Player für Firestick. Sie unterstützen 4K, EPG und Testinhalte.',
        chips: ['4K HDR', 'Wenig RAM', 'Schnelles Zappen'],
        duration: '2 Min',
        icon: Download,
        cta: { label: 'Player Herunterladen', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Auf Firestick verwenden Sie die Downloader App, um den Player zu installieren.',
      },
      {
        number: 4,
        title: 'Setup-Methode Auswählen',
        description: 'Zwei Wege, Ihr Abonnement zu verbinden. Wählen Sie die einfachere Methode.',
        methods: [
          { title: 'Auto Setup durch Support', subtitle: 'Empfohlen', points: ['Device Key senden', 'Wir aktivieren remote', 'Senderliste lädt automatisch'], highlighted: true },
          { title: 'Manuelles Setup', subtitle: 'DIY', points: ['Support sendet M3U URL', 'Oder Xtream Codes', 'Sie geben Zugangsdaten ein'], highlighted: false },
        ],
        duration: '2 Min',
        icon: KeyRound,
        tip: 'Unsicher welche Methode? Auto ist am einfachsten. Unser Team übernimmt 100% der Einrichtung für Sie.',
      },
      {
        number: 5,
        title: 'Inhalte Laden – 1 bis 2 Minuten Warten',
        description: 'Nach der Aktivierung lädt der Player Ihren kompletten Katalog im Hintergrund. Sender, Filme, Serien, EPG – alles automatisch.',
        chips: ['1 bis 2 Min', 'EPG Auto-Load', 'Favoriten Bereit'],
        duration: '1-2 Min',
        icon: Plug,
        tip: 'Halten Sie die App beim ersten Laden geöffnet. Das passiert nur einmal.',
      },
      {
        number: 6,
        title: 'Streaming Starten!',
        description: 'Sie sind live. Genießen Sie sofortigen Zugriff auf Premium Inhalte, Live TV, Filme, Serien und mehr – alles an einem Ort.',
        stats: [
          { value: '36.000+', label: 'Live TVs' },
          { value: '120.000+', label: 'Filme & Serien' },
          { value: '4K/60FPS', label: 'Qualität' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Fertig!',
        icon: PlayCircle,
        tip: 'Pinnen Sie Ihre Lieblingssender. Zappen wird dadurch sofort.',
      },
    ],
  },
  smarttv: {
    title: 'Setup auf Smart TV',
    icon: Tv,
    steps: [
      {
        number: 1,
        title: 'Paket Wählen',
        description: 'Wählen Sie 3, 6 oder 12 Monate mit 1, 2 oder 3 gleichzeitigen Geräten. Perfekt für Familienhaushalte.',
        chips: ['Live TVs', 'Filme & Serien', 'Samsung & LG', 'Euro Preise'],
        duration: '1 Min',
        icon: ShoppingCart,
        cta: { label: 'Pakete Ansehen', href: '/preise', type: 'internal' },
        tip: 'Multi-Screen Pakete eignen sich am besten für Familien, die unterschiedliche Inhalte gleichzeitig schauen.',
      },
      {
        number: 2,
        title: 'Support per WhatsApp Kontaktieren',
        description: 'Schreiben Sie unserem Team per WhatsApp. Wir bestätigen Ihren Plan in Euro und senden einen sicheren Zahlungslink direkt im Chat.',
        chips: ['SEPA', 'Kreditkarte', 'PayPal', 'Krypto'],
        duration: '2-3 Min',
        icon: MessageCircle,
        cta: { label: 'Per WhatsApp Chatten', type: 'whatsapp', message: 'Hallo! Ich möchte das Setup auf meinem Smart TV einrichten.' },
        tip: 'Nennen Sie uns Ihre TV-Marke und wir senden eine passende Anleitung für Samsung, LG oder Sony.',
      },
      {
        number: 3,
        title: 'Player Installieren',
        description: 'Die Player laufen nativ auf Samsung Tizen, LG webOS und Android TV. Keine zusätzliche Hardware erforderlich.',
        chips: ['Samsung Tizen', 'LG webOS', 'Android TV', '4K HDR'],
        duration: '2 Min',
        icon: Download,
        cta: { label: 'Player Herunterladen', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Suchen Sie den Player im App Store Ihres TVs oder fragen Sie den Support nach einem Installationslink.',
      },
      {
        number: 4,
        title: 'Setup-Methode Auswählen',
        description: 'Verbinden Sie Ihr Abonnement einfach. Auto durch Support oder manuell mit Ihren Zugangsdaten.',
        methods: [
          { title: 'Auto Setup durch Support', subtitle: 'Empfohlen', points: ['Device Key senden', 'Wir verknüpfen Ihr Abo', 'Sender erscheinen automatisch'], highlighted: true },
          { title: 'Manuelles Setup', subtitle: 'DIY', points: ['Support sendet M3U oder Xtream', 'Sie geben in Playlist hinzufügen ein', 'Sender laden sofort'], highlighted: false },
        ],
        duration: '2 Min',
        icon: KeyRound,
        tip: 'Auto Setup funktioniert auf allen Smart TV Marken. Senden Sie uns einfach Ihren Device Key.',
      },
      {
        number: 5,
        title: 'Inhalte Laden – 1 bis 2 Minuten Warten',
        description: 'Der Player lädt Ihre Sender, Filme und Serien Bibliothek sowie den vollständigen 7-Tage EPG automatisch.',
        chips: ['1 bis 2 Min', 'EPG Auto-Load', 'Kindersicherung'],
        duration: '1-2 Min',
        icon: Plug,
        tip: 'Schließen Sie die App beim ersten Laden nicht. Alles ist in unter 2 Minuten bereit.',
      },
      {
        number: 6,
        title: 'Streaming in 4K Starten',
        description: 'Ihr Smart TV ist bereit. Genießen Sie pufferfreies 4K Streaming mit Live TV, Sport und tausenden internationalen Sendern.',
        stats: [
          { value: '36.000+', label: 'Live TVs' },
          { value: '120.000+', label: 'Filme & Serien' },
          { value: '4K', label: 'Ultra HD' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Fertig!',
        icon: PlayCircle,
        tip: 'Für schärfstes 4K verbinden Sie Ihren TV per Ethernet oder 5GHz WLAN.',
      },
    ],
  },
  apple: {
    title: 'Setup auf Apple Geräten',
    icon: Apple,
    steps: [
      {
        number: 1,
        title: 'Paket Wählen',
        description: 'Wählen Sie das Paket, das zu Ihrem Apple Haushalt passt. 3, 6 oder 12 Monate mit 1, 2 oder 3 Geräten.',
        chips: ['Live TVs', 'Filme & Serien', 'iPhone / iPad', 'Apple TV 4K'],
        duration: '1 Min',
        icon: ShoppingCart,
        cta: { label: 'Pakete Ansehen', href: '/preise', type: 'internal' },
        tip: 'Das VIP Paket schaltet AirPlay 2 Optimierungen für Apple TV Streaming frei.',
      },
      {
        number: 2,
        title: 'Support per WhatsApp Kontaktieren',
        description: 'Unser Support Team übernimmt alles per WhatsApp. Zahlung in Euro und sofortige Zugangsdaten.',
        chips: ['SEPA', 'Kreditkarte', 'PayPal', 'Krypto'],
        duration: '2-3 Min',
        icon: MessageCircle,
        cta: { label: 'Per WhatsApp Chatten', type: 'whatsapp', message: 'Hallo! Ich benötige Hilfe beim Setup für mein Apple Gerät.' },
        tip: 'Familienfreigabe Nutzer – erwähnen Sie das gegenüber Support für Multi-Device Anleitung.',
      },
      {
        number: 3,
        title: 'Player Installieren',
        description: 'Die Player laufen auf iPhone, iPad und Apple TV 4K mit AirPlay, Picture in Picture und iCloud Sync.',
        chips: ['iOS + tvOS', 'AirPlay 2', 'Picture in Picture', 'iCloud Sync'],
        duration: '2 Min',
        icon: Download,
        cta: { label: 'Player Herunterladen', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'Auf tvOS verwenden Sie die Apple TV Remote App auf Ihrem iPhone zum schnelleren Tippen.',
      },
      {
        number: 4,
        title: 'Setup-Methode Auswählen',
        description: 'Auto Aktivierung durch unser Team oder manueller Login mit Ihren M3U oder Xtream Zugangsdaten.',
        methods: [
          { title: 'Auto Setup durch Support', subtitle: 'Empfohlen', points: ['Device Key senden', 'Wir aktivieren remote', 'Sender laden automatisch'], highlighted: true },
          { title: 'Manuelles Setup', subtitle: 'DIY', points: ['Wir senden M3U oder Xtream', 'In Playlist hinzufügen eingeben', 'Sofortiges Sender-Laden'], highlighted: false },
        ],
        duration: '2 Min',
        icon: KeyRound,
        tip: 'Auto Setup ist am schnellsten. Aktivierung abgeschlossen in unter 60 Sekunden.',
      },
      {
        number: 5,
        title: 'Inhalte Laden – 1 bis 2 Minuten Warten',
        description: 'Ihre Sender, Filme und Serien sowie der 7-Tage EPG laden automatisch in der App.',
        chips: ['1 bis 2 Min', 'EPG Auto-Load', 'iCloud Favoriten'],
        duration: '1-2 Min',
        icon: Plug,
        tip: 'Favoriten synchronisieren automatisch zwischen iPhone, iPad und Apple TV.',
      },
      {
        number: 6,
        title: 'Streaming in 4K Starten',
        description: 'Ihr Apple Gerät ist bereit. Genießen Sie Premium 4K Streaming mit AirPlay Casting und Picture in Picture Support.',
        stats: [
          { value: '36.000+', label: 'Live TVs' },
          { value: '120.000+', label: 'Filme & Serien' },
          { value: '4K HDR', label: 'Qualität' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Fertig!',
        icon: PlayCircle,
        tip: 'Aktivieren Sie "Lautstärke reduzieren" in tvOS für ausgeglichenen Ton bei Sport-Inhalten.',
      },
    ],
  },
  pc: {
    title: 'Setup auf PC & Mac',
    icon: Laptop,
    steps: [
      {
        number: 1,
        title: 'Paket Wählen',
        description: 'Wählen Sie 3, 6 oder 12 Monate. Multi-Screen Pakete eignen sich hervorragend für Dual-Monitor Setups.',
        chips: ['Live TVs', 'Filme & Serien', 'Windows & Mac', 'Euro Preise'],
        duration: '1 Min',
        icon: ShoppingCart,
        cta: { label: 'Pakete Ansehen', href: '/preise', type: 'internal' },
        tip: '2 oder 3 Screen Pakete sind ideal für Home Office Streaming im Hintergrund.',
      },
      {
        number: 2,
        title: 'Support per WhatsApp Kontaktieren',
        description: 'Erreichen Sie unser Support Team per WhatsApp. Wir bestätigen den Plan in Euro und senden einen sicheren Zahlungslink.',
        chips: ['SEPA', 'Kreditkarte', 'PayPal', 'Krypto'],
        duration: '2-3 Min',
        icon: MessageCircle,
        cta: { label: 'Per WhatsApp Chatten', type: 'whatsapp', message: 'Hallo! Ich möchte das Setup auf PC oder Mac einrichten.' },
        tip: 'Fragen Sie nach der M3U URL, wenn Sie VLC für sofortiges Streaming nutzen möchten.',
      },
      {
        number: 3,
        title: 'Player Installieren',
        description: 'Die Player laufen auf Windows und macOS mit Tastaturkürzeln und Multi-Window Support.',
        chips: ['Windows 10/11', 'macOS', 'Multi-Window', '4K Ready'],
        duration: '2 Min',
        icon: Download,
        cta: { label: 'Player Herunterladen', type: 'external', href: IBO_DOWNLOAD_URL },
        tip: 'VLC Media Player funktioniert auch, wenn Sie eine leichtgewichtige Option bevorzugen.',
      },
      {
        number: 4,
        title: 'Setup-Methode Auswählen',
        description: 'Auto Setup durch unser Team oder manuelle Eingabe von M3U URL oder Xtream Codes.',
        methods: [
          { title: 'Auto Setup durch Support', subtitle: 'Empfohlen', points: ['Device Key senden', 'Wir aktivieren remote', 'App verbindet sofort'], highlighted: true },
          { title: 'Manuelles Setup', subtitle: 'DIY', points: ['Wir senden M3U URL', 'Oder Xtream Codes', 'Einfügen und abspielen'], highlighted: false },
        ],
        duration: '2 Min',
        icon: KeyRound,
        tip: 'In VLC drücken Sie Strg+L (Win) oder Cmd+L (Mac) für die Playlist-Sidebar.',
      },
      {
        number: 5,
        title: 'Inhalte Laden – 1 bis 2 Minuten Warten',
        description: 'Ihr kompletter Katalog lädt automatisch. Live TVs, Filme, Serien und der EPG.',
        chips: ['1 bis 2 Min', 'EPG Auto-Load', 'Favoriten Sync'],
        duration: '1-2 Min',
        icon: Plug,
        tip: 'Halten Sie die App beim ersten Laden im Fokus für die schnellste Erfahrung.',
      },
      {
        number: 6,
        title: 'Streaming in 4K Starten',
        description: 'Ihr PC oder Mac ist bereit. Streamen Sie Live TV, Filme und internationale Sender in 4K Ultra HD.',
        stats: [
          { value: '36.000+', label: 'Live TVs' },
          { value: '120.000+', label: 'Filme & Serien' },
          { value: '4K', label: 'Qualität' },
          { value: '24/7', label: 'Support' },
        ],
        duration: 'Fertig!',
        icon: PlayCircle,
        tip: 'Aktivieren Sie Hardware-Beschleunigung in den Player-Einstellungen für flüssigere 4K-Wiedergabe.',
      },
    ],
  },
};

const setupFaqs = [
  {
    q: 'Wie erhalte ich meine Zugangsdaten nach dem Kauf?',
    a: 'Alles wird live per WhatsApp geregelt. Sobald Sie Ihr Paket bestätigen und die Zahlung abschließen, sendet unser Team Ihre Setup-Details direkt im Chat – normalerweise innerhalb weniger Minuten.',
  },
  {
    q: 'Welchen Player empfehlen Sie für das Setup?',
    a: 'Wir empfehlen die Top-Player für das schnellste Zappen, den niedrigsten RAM-Verbrauch und die beste 4K-Leistung auf Firestick, Smart TVs, Apple Geräten und PC oder Mac. Beide gehören zu unseren Top-Empfehlungen.',
  },
  {
    q: 'Muss ich den Player separat aktivieren?',
    a: 'Der Aktivierungsservice ist bei jedem Abonnement kostenlos inklusive. Wählen Sie Auto Setup (sendet uns Ihren Device Key und wir aktivieren remote) oder Manuelles Setup (M3U oder Xtream Codes selbst eingeben).',
  },
  {
    q: 'Wie lange dauert das Setup?',
    a: 'Die meisten Kunden streamen innerhalb von 10 Minuten. Die Installation dauert etwa 2 Minuten, die Aktivierung 1 bis 2 Minuten und das Laden der Inhalte 1 bis 2 Minuten.',
  },
  {
    q: 'Kann ich meine Zugangsdaten auf mehreren Geräten verwenden?',
    a: 'Ja. Sie können die App auf unbegrenzt vielen Geräten installieren. Die Anzahl der gleichzeitigen Streams hängt von Ihrem Paket ab – 1 Gerät für Standard, 2 oder 3 Geräte für Multi-Room.',
  },
  {
    q: 'Was tun, wenn ich einen Login-Fehler bekomme?',
    a: 'Bestätigen Sie, dass Sie die Xtream Codes API Methode ausgewählt haben, nicht M3U, und dass keine zusätzlichen Leerzeichen in Benutzername oder Passwort sind. Wenn das Problem weiterhin besteht, schreiben Sie uns per WhatsApp – die meisten Probleme lösen sich innerhalb von 2 Minuten.',
  },
  {
    q: 'Welche Internetgeschwindigkeit brauche ich für 4K Streaming?',
    a: 'Für 4K Ultra HD empfehlen wir mindestens 30 Mbit/s. Full HD 1080p läuft reibungslos mit 15 Mbit/s. Die Anti-Freeze Server Technologie passt sich automatisch an Ihre Verbindungsgeschwindigkeit an.',
  },
  {
    q: 'Benötige ich ein VPN?',
    a: 'Nein. Unsere Server sind optimiert und sicher. Falls Ihr Internetanbieter während der Stoßzeiten Drosselung anwendet, können Sie ein VPN ohne Probleme aktivieren.',
  },
];

const longFormFaqs = [
  {
    q: 'Welche Geräte eignen sich am besten für das Setup?',
    a: 'Für die beste Erfahrung empfehlen wir Amazon Firestick 4K Max für Streaming Sticks, Samsung Tizen oder LG webOS Smart TVs für integrierte Apps, Apple TV 4K für das AirPlay-Ökosystem und jeden Windows 11 oder macOS Sonoma Desktop für volle 4K-Wiedergabe. Alle diese Geräte unterstützen unsere empfohlenen Player und verarbeiten 4K- und 60FPS-Inhalte ohne Frame-Drops. Ältere Geräte wie Firestick Lite oder Apple TV der zweiten Generation funktionieren ebenfalls, sind aber auf Full HD begrenzt. Für die flüssigste 4K-Leistung wählen Sie Hardware der letzten zwei Generationen.',
  },
  {
    q: 'Wie funktioniert die Remote-Aktivierung genau?',
    a: 'Remote-Aktivierung ist die einfachste Setup Methode. Nachdem Sie uns per WhatsApp kontaktiert und die Zahlung abgeschlossen haben, fragt unser Support Team nach Ihrer Geräte-Kennung. Bei den Playlern ist das ein Device Key oder eine MAC-Adresse, die auf dem Willkommensbildschirm der App angezeigt wird. Wir registrieren diesen Key auf unserem Server, verknüpfen ihn mit Ihrem Abonnement und innerhalb von 60 Sekunden lädt Ihre Senderliste automatisch, sobald Sie die App wieder öffnen. Kein Tippen, keine manuellen Zugangsdaten, kein Fehlerrisiko. Falls Sie es selbst machen möchten, senden wir auch die Standard M3U URL und Xtream Codes Zugangsdaten. Beide Methoden liefern identische 4K-Streaming-Leistung.',
  },
  {
    q: 'Was, wenn mein älterer Smart TV die App nicht installieren kann?',
    a: 'Wenn Ihr Smart TV älter als 5 Jahre ist und die App nicht direkt installieren kann, haben Sie trotzdem Optionen. Die beliebteste Lösung ist ein Amazon Firestick 4K Max. Er wird in jeden HDMI-Anschluss gesteckt und verwandelt ältere TVs in vollwertige 4K Streamer in unter 5 Minuten. Alternativ liefern eine Android TV Box, Nvidia Shield oder Apple TV 4K dasselbe Ergebnis. Unser WhatsApp Support Team hilft regelmäßig Kunden, ältere Fernseher mit einem günstigen Streaming Stick aufzurüsten. Schreiben Sie uns und wir empfehlen das beste Gerät für Ihr spezifisches TV-Modell und Ihre Sehgewohnheiten.',
  },
  {
    q: 'Kann ich später Geräte wechseln oder mein Abonnement verschieben?',
    a: 'Ja, absolut. Ihr Abonnement ist an Ihr Konto gebunden, nicht an ein einzelnes Gerät. Wenn Sie von einem Firestick auf ein Apple TV aufrüsten, einen zweiten Smart TV hinzufügen oder Ihr Setup auf einen neuen PC verschieben, kontaktieren Sie einfach unser WhatsApp Support Team und wir reaktivieren das Abonnement auf Ihrem neuen Gerät – normalerweise innerhalb von 2 Minuten. Gerätewechsel sind unbegrenzt und kostenlos für die gesamte Laufzeit Ihres Abonnements. Wenn Sie gleichzeitiges Streaming in mehreren Räumen benötigen, bieten wir 2-Screen- und 3-Screen-Pakete, damit Ihr Haushalt gleichzeitig unterschiedliche Inhalte ohne Unterbrechung schauen kann.',
  },
];

function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = step.icon;

  return (
    <div ref={ref} className="relative">
      <div className="flex gap-4 md:gap-6">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            className={`w-12 h-12 md:w-14 md:h-14 rounded-none flex items-center justify-center z-10 transition-all duration-500 ${
              isInView
                ? 'bg-[#DD0000] shadow-[0_0_25px_rgba(221,0,0,0.4)] scale-110'
                : 'bg-[#DD0000]/20'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ duration: 0.4, type: 'spring', delay: index * 0.08 }}
          >
            <span className={`text-xl md:text-2xl font-black transition-all duration-300 ${isInView ? 'text-white' : 'text-[#DD0000]'}`}>
              {step.number}
            </span>
          </motion.div>
          {!isLast && (
            <motion.div
              className="relative w-0.5 flex-1 min-h-[60px] my-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.12 + 0.3 }}
            >
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#DD0000] to-[#8C0000]"
                initial={{ height: 0 }}
                animate={{ height: isInView ? '100%' : 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.2 }}
              />
            </motion.div>
          )}
        </div>

        <motion.div
          className="flex-1 pb-10 md:pb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className={`bg-[#121214] border-2 rounded-none p-5 md:p-6 transition-all duration-500 text-white ${isInView ? 'border-[#DD0000] shadow-[0_10px_35px_rgba(221,0,0,0.12)]' : 'border-white/5'}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-none flex items-center justify-center bg-[#DD0000]/15">
                  <Icon className="w-5 h-5 text-[#DD0000]" />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white">
                  {step.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-white/5">
                <Clock className="w-3 h-3 text-[#DD0000]" />
                <span className="text-slate-400 text-[10px] md:text-xs font-bold">{step.duration}</span>
              </div>
            </div>

            <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base mb-4">
              {step.description}
            </p>

            {step.chips && (
              <div className="flex flex-wrap gap-2 mb-4">
                {step.chips.map((chip: string) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/30 text-[#DD0000] text-[10px] md:text-xs font-black uppercase tracking-wider">
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {step.methods && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {step.methods.map((m: any) => (
                  <div key={m.title} className={`rounded-none p-4 border-2 transition-all ${m.highlighted ? 'bg-[#DD0000]/5 border-[#DD0000]' : 'bg-[#0a0a0c] border-white/10'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-none ${m.highlighted ? 'bg-[#DD0000] text-white' : 'bg-white/10 text-slate-300'}`}>
                        {m.subtitle}
                      </span>
                    </div>
                    <h4 className="text-sm font-black uppercase text-white mb-2">{m.title}</h4>
                    <ul className="space-y-1">
                      {m.points.map((p: string) => (
                        <li key={p} className="flex items-center gap-2 text-[11px] md:text-xs font-semibold text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-[#DD0000] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {step.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {step.stats.map((s: any) => (
                  <div key={s.label} className="rounded-none bg-[#0a0a0c] text-center py-3 px-2 border border-[#DD0000]/30">
                    <div className="text-base md:text-lg font-black text-[#DD0000] leading-none">{s.value}</div>
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-white mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {step.cta && (
              <div className="mb-4">
                {step.cta.type === 'internal' && (
                  <Link href={step.cta.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#DD0000] text-white text-xs font-black uppercase tracking-widest hover:bg-[#B00000] transition-all hover:scale-105 shadow-md">
                    {step.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                {step.cta.type === 'external' && (
                  <a href={step.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#DD0000] text-white text-xs font-black uppercase tracking-widest hover:bg-[#B00000] transition-all hover:scale-105 shadow-md">
                    <Download className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
                {step.cta.type === 'whatsapp' && (
                  <a href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(step.cta.message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-green-600 text-white text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all hover:scale-105 shadow-md">
                    <MessageCircle className="w-4 h-4" /> {step.cta.label}
                  </a>
                )}
              </div>
            )}

            {isInView && step.tip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-3 rounded-none bg-white/5 border border-[#DD0000]/20 flex gap-2.5"
              >
                <div className="w-6 h-6 rounded-none bg-[#DD0000]/20 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-3.5 h-3.5 text-[#DD0000]" />
                </div>
                <div>
                  <p className="text-[#DD0000] font-black text-[10px] uppercase tracking-wider">Pro Tipp</p>
                  <p className="text-slate-300 text-xs font-medium mt-0.5">{step.tip}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SetupPage() {
  const [activeDevice, setActiveDevice] = useState('firestick');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [openFaqIndex, setOpenIndex] = useState<number | null>(0);
  const currentData = stepData[activeDevice as keyof typeof stepData];
  const CurrentIcon = currentData.icon;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoOpen(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeVideo = () => {
    setIsVideoOpen(false);
    if (iframeRef.current) iframeRef.current.src = '';
  };

  const openVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.src = 'https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0';
      }
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-white">

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-1.webp"
            alt="Setup auf Firestick, Smart TV, Android und iOS"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover brightness-[0.2]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#0a0a0c]/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/20 via-transparent to-[#0a0a0c]/20" />
        </div>

        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DD0000]/10 blur-[150px] rounded-none pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 pt-24 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-none mb-6 shadow-md border border-[#FFD700]/30">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-white font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                  Einfaches Setup
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none text-center">
                SETUP <br />
                <span className="text-[#FFD700]">IN UNTER 10 MINUTEN</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Installieren Sie den Player und lassen Sie unser Team den Rest per WhatsApp erledigen. Einrichtung einfach gemacht für Firestick, Smart TV, Apple, PC oder Mac.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2.5 sm:gap-4 px-4 py-2 rounded-none bg-black/60 border border-[#DD0000]/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-1.5 shrink-0"><FlagDE /><span className="text-[11px] sm:text-xs font-black uppercase text-white">Deutschland</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagAT /><span className="text-[11px] sm:text-xs font-black uppercase text-white">Österreich</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagCH /><span className="text-[11px] sm:text-xs font-black uppercase text-white">Schweiz</span></div>
                  <span className="text-white/20 text-xs font-black">•</span>
                  <div className="flex items-center gap-1.5 shrink-0"><FlagUK /><span className="text-[11px] sm:text-xs font-black uppercase text-white">UK</span></div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/50 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-[#DD0000]" /> Sichere Einrichtung</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#DD0000]" /> 10 Min Setup</span>
                <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#DD0000]" /> 24/7 Support</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[#DD0000]" /> 15.000+ Zuschauer</span>
              </div>
            </FadeInItem>

            <FadeInItem className="mt-8 relative pb-10 flex justify-center">
              <button
                onClick={openVideo}
                className="inline-flex items-center justify-center p-2 rounded-none bg-white/10 border border-white/20 hover:border-[#DD0000]/60 transition-all duration-300 relative z-10 shadow-inner group cursor-pointer"
                aria-label="Setup Video-Tutorial ansehen"
              >
                <div className="flex items-center gap-4 bg-white/5 px-6 sm:px-8 py-4 sm:py-5 rounded-none border border-white/10 hover:bg-white/10 transition-colors">
                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#DD0000] shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="text-white font-black uppercase tracking-widest text-xs sm:text-sm md:text-base">
                      Video-Tutorial
                    </p>
                    <p className="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-wide mt-0.5">
                      Visuelle Schritt-für-Schritt Anleitung
                    </p>
                  </div>
                </div>
              </button>
              <div className="absolute inset-0 rounded-none bg-[#DD0000]/15 animate-pulse blur-md scale-110 pointer-events-none" />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#DD0000] via-[#8C0000] to-[#DD0000] py-10 px-4 sm:px-6 border-y-4 border-[#FFD700]/30 shadow-[0_0_50px_rgba(221,0,0,0.4)] relative z-20 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 gap-5">
          <div className="relative inline-block">
            <div className="bg-[#FFD700] text-[#0a0a0c] font-black text-xs px-5 py-2 rounded-none uppercase tracking-widest shadow-md animate-bounce">
              KOSTENLOSER 24-STUNDEN TEST
            </div>
            <div className="absolute inset-0 rounded-none bg-[#FFD700]/30 animate-ping opacity-75 pointer-events-none" />
          </div>
          <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none drop-shadow-md max-w-2xl">
            SETUP MIT PLAYER KOSTENLOS TESTEN!
          </h4>
          <p className="text-white/90 text-sm sm:text-base md:text-lg font-bold max-w-xl leading-relaxed">
            Live TVs, Filme und Serien, Live Sport. Aktivierung per WhatsApp in Minuten.
          </p>
          <div className="w-full sm:w-auto mt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hallo! Ich möchte den kostenlosen 24-Stunden Test für das Setup.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FFD700] text-[#0a0a0c] hover:bg-[#0a0a0c] hover:text-[#FFD700] hover:scale-105 transition-all duration-300 px-8 sm:px-10 py-4 rounded-none font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" /> <span>Kostenlos Testen</span>
            </a>
            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0a0a0c] text-white hover:bg-[#FFD700] hover:text-[#0a0a0c] transition-all duration-300 px-8 sm:px-10 py-4 rounded-none font-black text-sm uppercase tracking-widest shadow-2xl border-2 border-[#FFD700]"
            >
              Pakete Ansehen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c]">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
            Setup auf <span className="text-[#FFD700]">Ihrem Gerät</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-bold max-w-2xl mx-auto mt-4">
            Wählen Sie Ihre Plattform unten für detaillierte Schritt-für-Schritt Setup Anleitungen.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {devices.map((device) => {
            const Icon = device.icon;
            const isActive = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`relative p-4 sm:p-6 rounded-none text-center transition-all duration-300 cursor-pointer group ${
                  isActive
                    ? 'bg-[#121214] text-white border-2 border-[#DD0000] shadow-2xl scale-[1.02]'
                    : 'bg-[#121214] text-white border-2 border-transparent hover:border-[#DD0000]/40'
                }`}
              >
                {device.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8C0000] text-[#FFD700] font-black uppercase text-[10px] tracking-widest px-3 py-1 rounded-none whitespace-nowrap shadow-md border border-[#FFD700]/40">
                    Am Beliebtesten
                  </div>
                )}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-none flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors ${isActive ? 'bg-[#0a0a0c] text-[#FFD700]' : 'bg-black/5 text-[#DD0000]'}`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide mb-2">{device.name}</h3>
                <p className={`text-[10px] sm:text-xs font-bold ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                  {device.steps} einfache Schritte
                </p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#DD0000] text-white font-black uppercase text-xs tracking-widest mb-4 shadow-md max-w-full">
            <CurrentIcon className="w-4 h-4 text-[#FFD700] shrink-0" />
            <span className="truncate">{currentData.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Setup <span className="text-[#FFD700]">Schritt für Schritt</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-bold uppercase tracking-widest mt-2">
            Folgen Sie den Schritten für ein fehlerfreies Setup in unter 10 Minuten
          </p>
        </div>

        <div className="relative px-2">
          {currentData.steps.map((step, index) => (
            <StepItem key={step.number} step={step} index={index} isLast={index === currentData.steps.length - 1} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12 p-6 sm:p-8 md:p-10 rounded-none bg-[#121214] border-4 border-[#DD0000] shadow-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-[#DD0000] mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-3 inline-flex items-center gap-3">
            Setup Abgeschlossen!
            <GermanFlag className="w-6 h-6" />
          </h3>
          <p className="text-[#DD0000] font-bold text-sm sm:text-base max-w-md mx-auto mb-8">
            Sie sind bereit zu streamen. Genießen Sie tausende Live TVs, Filme und Serien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link href="/" className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-none bg-[#DD0000] text-white font-black text-sm uppercase tracking-widest transition-transform hover:scale-105">
              Zurück zur Startseite
            </Link>
            <Link href="/preise" className="w-full sm:w-auto text-center whitespace-nowrap px-6 py-4 rounded-none bg-[#0a0a0c] text-white font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 border-2 border-[#DD0000]">
              Pakete Ansehen
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c]">
        <FadeIn className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-none mb-6">
            <ShieldCheck className="w-4 h-4 text-[#FFD700]" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Warum Kunden uns wählen
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Warum Setup <span className="text-[#FFD700]">mit unserem Team?</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Tausende Zuschauer vertrauen unserem Hands-on WhatsApp Support für ihr komplettes Setup – von der Paketauswahl bis zur Aktivierung. Hier ist, warum Kunden uns gegenüber generischen DIY-Anleitungen bevorzugen.
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: 'Echter Support',
              desc: 'Echtes Team, optimiert für deutschsprachige Zuschauer, Preise in Euro. Keine Offshore-Skripte, keine Sprachbarrieren.',
            },
            {
              icon: Zap,
              title: 'Done-For-You Aktivierung',
              desc: 'Senden Sie uns Ihren Device Key per WhatsApp und wir übernehmen 100% der technischen Seite. Sie müssen nur den Player installieren.',
            },
            {
              icon: Clock,
              title: 'Setup in Unter 10 Minuten',
              desc: 'Durchschnittliche Setup Zeit von der ersten Nachricht bis zum ersten Kanal sind 8 bis 10 Minuten. Schnellste Kunden aktivieren in unter 5 Minuten.',
            },
            {
              icon: PlayCircle,
              title: 'Player Expertise',
              desc: 'Wir sind Spezialisten für die Top-Player. Wir kennen ihre Einstellungen, Eigenheiten und Optimierungen in- und auswendig.',
            },
            {
              icon: MessageCircle,
              title: 'Echtzeit WhatsApp Chat',
              desc: 'Keine E-Mail Tickets, kein tagelanges Warten auf Antworten. Unser Support antwortet per WhatsApp in unter 2 Minuten, 24/7.',
            },
            {
              icon: Lock,
              title: 'Sichere Zahlungen',
              desc: 'Zahlen Sie sicher mit SEPA-Überweisung, Kreditkarte, PayPal oder Krypto. Alle Transaktionen sind verschlüsselt und mit 256-Bit SSL verarbeitet.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={idx} className="bg-[#121214] border-2 border-[#DD0000]/20 rounded-none p-6 md:p-7 hover:border-[#DD0000] hover:shadow-[0_15px_40px_rgba(221,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 text-white">
                <div className="w-12 h-12 rounded-none bg-[#DD0000]/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#DD0000]" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeIn className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed mb-8">
            Setup muss nicht kompliziert sein. Unser Team hat Tausende Abonnements auf Firestick, Smart TVs, Apple Geräten, Android Boxen und Computern aktiviert. Jeder Kunde erhält denselben Service: Echtzeit WhatsApp Chat, Live-Anleitung und komplette Aktivierung. Ob Sie zum ersten Mal Kabel kappen oder aufrüsten – wir bringen Sie in unter 10 Minuten zum Streamen.
          </p>
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hallo! Ich möchte Setup Hilfe von Ihrem Team.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-[#DD0000] text-white font-black text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(221,0,0,0.3)] hover:scale-105 transition-transform border border-[#FFD700]/30"
          >
            <MessageCircle className="w-5 h-5" /> Setup Hilfe Erhalten
          </a>
        </FadeIn>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#121214] border-4 border-[#DD0000] rounded-none p-6 sm:p-8 text-center shadow-xl group text-white">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-[#DD0000]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#DD0000]/20 transition-colors">
              <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-[#DD0000]" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2 uppercase tracking-wide">
              Kostenloser 24-Stunden Test
            </h3>
            <p className="text-[#DD0000] text-sm font-medium mb-5">
              Testen Sie den Player und unseren vollen Service 24 Stunden kostenlos. Schreiben Sie unserem WhatsApp Team zur sofortigen Aktivierung.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hallo! Ich möchte den kostenlosen 24-Stunden Test.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#DD0000] font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Kostenlos Testen <ArrowRight className="w-4 h-4 text-[#8C0000]" />
            </a>
          </div>

          <div className="bg-[#121214] border-4 border-[#DD0000] rounded-none p-6 sm:p-8 text-center shadow-xl group text-white">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-green-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500/20 transition-colors">
              <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white mb-2 uppercase tracking-wide">
              24/7 Setup Support
            </h3>
            <p className="text-[#DD0000] text-sm font-medium mb-5">
              Unser Team übernimmt alles per WhatsApp: Paket, Zahlung, Aktivierung und komplettes Setup.
            </p>
            <a
              href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hallo! Ich benötige Setup Hilfe.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
            >
              Per WhatsApp Chatten <ArrowRight className="w-4 h-4 text-green-500" />
            </a>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center mb-10">
        <ShareButtons />
      </div>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c] relative" aria-label="Setup FAQs">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#DD0000]/5 blur-[120px] rounded-none pointer-events-none" />

        <FadeIn className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-none mb-6 shadow-md border border-[#FFD700]/30">
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">Setup FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Setup <span className="text-[#FFD700]">Fragen</span>
          </h2>
          <p className="text-slate-300 font-bold text-base md:text-lg max-w-2xl mx-auto mt-4">
            Schnelle Antworten auf die häufigsten Setup Fragen.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-4 relative z-10">
          {setupFaqs.map((faq, i) => (
            <FadeInItem key={i}>
              <button
                onClick={() => setOpenIndex(openFaqIndex === i ? null : i)}
                className={`w-full text-left bg-[#121214] border-4 ${openFaqIndex === i ? 'border-[#DD0000]' : 'border-white/5'} rounded-none p-5 sm:p-6 hover:border-[#DD0000]/60 transition-all duration-300 group cursor-pointer text-white`}
                aria-expanded={openFaqIndex === i}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className={`text-base sm:text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${openFaqIndex === i ? 'text-[#DD0000]' : 'text-white group-hover:text-[#DD0000]'} flex items-start sm:items-center gap-3 text-left`}>
                    <span className={`${openFaqIndex === i ? 'text-[#DD0000]' : 'text-white/30'} font-black text-xl sm:text-2xl shrink-0`}>F.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180 text-[#DD0000]' : 'text-white/30 group-hover:text-[#DD0000]/50'}`} />
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm sm:text-base pl-9 sm:pl-12 border-l-4 border-[#DD0000] ml-1 sm:ml-2 py-2">
                    {faq.a}
                  </p>
                </div>
              </button>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      <section className="py-20 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-[#0a0a0c] relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#DD0000]/5 blur-[130px] rounded-none pointer-events-none" />

        <FadeIn className="text-center mb-12 md:mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/30 px-4 py-1.5 rounded-none mb-6">
            <Globe className="w-4 h-4 text-[#FFD700]" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Ausführlicher Leitfaden
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight max-w-4xl mx-auto">
            Setup <span className="text-[#FFD700]">Ausführlich Erklärt</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed">
            Ausführlichere Antworten auf die Fragen, die unser Support Team am häufigsten hört. Jede Antwort hilft Ihnen, das Beste aus Ihrem Abonnement herauszuholen.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-6 relative z-10">
          {longFormFaqs.map((item, idx) => (
            <FadeInItem key={idx} className="bg-[#121214] border-2 border-[#DD0000]/20 rounded-none p-6 md:p-8 hover:border-[#DD0000]/60 transition-colors text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 flex items-start gap-3">
                <span className="text-[#DD0000] text-2xl shrink-0">F.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed text-sm sm:text-base pl-6 sm:pl-8 border-l-4 border-[#DD0000]">
                {item.a}
              </p>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <a
            href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(`Hallo! Ich habe eine Frage zum Setup.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-[#0a0a0c] text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_30px_rgba(221,0,0,0.2)] border-2 border-[#DD0000]"
          >
            <Phone className="w-5 h-5 text-[#FFD700]" /> Unser Team per WhatsApp Fragen
          </a>
        </FadeIn>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeVideo(); }}
        >
          <div className="relative w-full max-w-4xl">
            <button onClick={closeVideo} className="absolute -top-12 right-0 text-white/60 hover:text-[#FFD700] transition-colors cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-bold z-10 uppercase tracking-widest">
              <X className="w-5 h-5 shrink-0" /> Video Schließen
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-none overflow-hidden shadow-2xl border-2 border-[#DD0000] bg-black">
              <iframe
                ref={iframeRef}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9pZOoS-1NHg?autoplay=1&rel=0&modestbranding=1"
                title="Setup - Komplette Installationsanleitung"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}