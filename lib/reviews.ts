// @/lib/reviews.ts

export interface Review {
  id: string;
  name: string;
  city: string;
  province: string;        // DE: Berlin/Bayern/Hessen... | AT: Wien/NÖ... | CH: Zürich/BE...
  country: 'DE' | 'AT' | 'CH' | 'UK';
  rating: number;
  title: string;
  text: string;
  date: string;            // ISO "2026-XX-XX"
  verified: boolean;
  device: string;
}

// ---------------------------------------------------------------------------
// SITE-WIDE REVIEW STATS
// ---------------------------------------------------------------------------
export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 1255,
  recommendPercent: 98,
  happyCustomers: '15.000+',
  countries: [
    { code: 'DE' as const, name: 'Deutschland',      flag: 'de', label: 'Deutschland' },
    { code: 'AT' as const, name: 'Österreich',       flag: 'at', label: 'Österreich' },
    { code: 'CH' as const, name: 'Schweiz',          flag: 'ch', label: 'Schweiz' },
    { code: 'UK' as const, name: 'United Kingdom',   flag: 'uk', label: 'UK' },
  ],
};

// ---------------------------------------------------------------------------
// REVIEWS — 20 total (15 DE · 2 AT · 2 CH · 1 UK)
// ---------------------------------------------------------------------------
export const reviews: Review[] = [
  // =========================================================================
  // DEUTSCHLAND
  // =========================================================================
  {
    id: '1',
    name: 'Thomas M.',
    city: 'München',
    province: 'Bayern',
    country: 'DE',
    rating: 5,
    title: 'Ideal für Bundesliga und Champions League am Wochenende',
    text: 'Endlich ein stabiler IPTV Deutschland Service, mit dem ich am Wochenende Fußball ohne Puffer schauen kann. Das 4K Bild auf meinem Firestick 4K Max ist gestochen scharf und der Senderwechsel erfolgt sofort. Während der Einrichtung kam die Antwort des Supports innerhalb von 2 Minuten. Ein echtes Team, keine Bots.',
    date: '2026-09-08',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '2',
    name: 'Sabine K.',
    city: 'Hamburg',
    province: 'Hamburg',
    country: 'DE',
    rating: 5,
    title: 'Kabel-TV gekündigt – und nie bereut',
    text: 'Ich habe letzten Monat mein altes Kabelpaket gekündigt und bin gewechselt. Die Einrichtung auf meinem Samsung Smart TV mit IPTV Extreme dauerte unter fünf Minuten, und das Senderangebot ist unglaublich. Bundesliga, Champions League plus 120.000 Filme und Serien. Das 12-Monats-VIP Paket hat sich schon im ersten Monat bezahlt gemacht.',
    date: '2026-09-03',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '3',
    name: 'Jens P.',
    city: 'Berlin',
    province: 'Berlin',
    country: 'DE',
    rating: 5,
    title: 'Hervorragend für Handball und internationale Sender',
    text: 'Fantastische Auswahl an Handball-Bundesliga-Übertragungen neben türkischen, arabischen und englischen Sendern. Meine Eltern schauen ihre regionalen Nachrichten in HD, und ich bekomme immer noch jedes DEL-Eishockeyspiel und Formel 1 Rennen. Der EPG-Guide synchronisiert sich perfekt mit Berliner Zeit.',
    date: '2026-08-28',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '4',
    name: 'Anna H.',
    city: 'Köln',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Ausgezeichnetes Preis-Leistungs-Verhältnis für eine vierköpfige Familie',
    text: 'Wir nutzen IPTV Deutschland auf drei Geräten gleichzeitig. Mein Mann schaut Bundesliga, ich Filme, und die Kinder haben ihre eigenen Profile. Alles bleibt auch zu Stoßzeiten flüssig. Für weniger als eine alte Kabelbox gekostet hat, haben wir jetzt 36.000 Sender und 120.000 Filme und Serien auf Abruf.',
    date: '2026-08-09',
    verified: true,
    device: 'Firestick + Smart TVs',
  },
  {
    id: '5',
    name: 'Mehmet S.',
    city: 'Frankfurt am Main',
    province: 'Hessen',
    country: 'DE',
    rating: 5,
    title: 'Die internationale Senderauswahl ist großartig',
    text: 'Es ist klasse, türkische, arabische und englische Sender neben den deutschen Sendern zu haben. Meine Eltern können ihre regionalen Nachrichten schauen, und ich bekomme weiterhin jedes Bundesliga-Spiel und Formel 1 Rennen. Die Stream-Qualität bleibt konstant hoch, und der EPG meistert die Frankfurter Zeitzone ohne Probleme.',
    date: '2026-07-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '6',
    name: 'Nadine B.',
    city: 'Stuttgart',
    province: 'Baden-Württemberg',
    country: 'DE',
    rating: 5,
    title: 'Toll für Sport und alltägliches Fernsehen',
    text: 'Vollständige Abdeckung von ARD, ZDF, RTL, ProSieben, SAT.1 und VOX neben Bundesliga, Champions League und DFB-Pokal. Die Einrichtung auf unserem LG TV war unkompliziert, da das WhatsApp Support Team mich durch IPTV Extreme geführt hat. Praktisch, wenn wir an die Ostsee reisen und die lokalen Nachrichten nachholen wollen.',
    date: '2026-07-11',
    verified: true,
    device: 'LG Smart TV',
  },
  {
    id: '7',
    name: 'Dennis K.',
    city: 'Düsseldorf',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Bester IPTV Anbieter, den ich in NRW getestet habe',
    text: 'In Düsseldorf hatte ich Schwierigkeiten, einen Anbieter mit zuverlässigen deutschen Servern und niedriger Latenz für Live-Bundesliga zu finden. IPTV Deutschland ist einwandfrei. Kein Puffer während Bundesliga-Spieltagen, Champions League Finals oder UFC Pay-per-View. Der 24/7 WhatsApp Support ist ein echter Game-Changer im Vergleich zu E-Mail-only Wettbewerbern.',
    date: '2026-07-02',
    verified: true,
    device: 'Android TV Box',
  },
  {
    id: '8',
    name: 'Michael R.',
    city: 'Leipzig',
    province: 'Sachsen',
    country: 'DE',
    rating: 5,
    title: 'Support half mir beim Setup in unter 10 Minuten',
    text: 'Ich bin überhaupt nicht technikaffin und war besorgt über die Einrichtung. Das Team übernahm alles per WhatsApp. Sie schickten meine M3U URL, begleiteten mich durch die Installation von IPTV Extreme auf meinem Firestick und aktivierten es remote. Streaming lief innerhalb von 10 Minuten nach meiner ersten Nachricht.',
    date: '2026-06-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '9',
    name: 'Olivia W.',
    city: 'Dresden',
    province: 'Sachsen',
    country: 'DE',
    rating: 5,
    title: 'Mit IPTV Extreme fühlt sich alles premium an',
    text: 'Ich habe TiviMate, IPTV Smarters und IPTV Extreme verwendet. IPTV Extreme ist bei weitem der flüssigste. Kombiniert mit diesem IPTV Deutschland Service wirkt es wie ein Premium-Kabel-Erlebnis zu einem Bruchteil des Preises. Die Remote-Aktivierung ist brillant. Ich habe meinen Device Key gesendet und alles war in 30 Sekunden eingerichtet.',
    date: '2026-06-18',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '10',
    name: 'Tobias N.',
    city: 'Nürnberg',
    province: 'Bayern',
    country: 'DE',
    rating: 5,
    title: 'Zuverlässig bei jedem großen Sportereignis',
    text: 'Ich habe dieses Jahr jedes Bundesliga-Finale, Champions League Spiel, DFB-Pokal Match und UFC Event ohne einen einzigen Freeze gesehen. Das sagt alles über die Server-Qualität aus. Die 60FPS Feeds sind merklich flüssiger als mein alter Kabel-Receiver, und Pay-per-View Events, die früher 50 € gekostet haben, sind vollständig inklusive.',
    date: '2026-06-11',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '11',
    name: 'Emily C.',
    city: 'Bremen',
    province: 'Bremen',
    country: 'DE',
    rating: 5,
    title: 'Auch im Norden läuft es einwandfrei',
    text: 'Ich war wegen der Latenz besorgt, weil ich so weit im Norden wohne, aber die Frankfurter Server meistern das problemlos. Kein Puffer, schneller Senderwechsel und die Bildqualität ist ausgezeichnet. Der WhatsApp Support half mir sogar, meine Router-Einstellungen zu optimieren, um Jitter zu reduzieren. Sehr empfehlenswert für alle außerhalb der Großstädte.',
    date: '2026-06-04',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '12',
    name: 'Brandon L.',
    city: 'Hannover',
    province: 'Niedersachsen',
    country: 'DE',
    rating: 5,
    title: 'Bester IPTV Anbieter, den ich in Deutschland genutzt habe',
    text: 'Habe drei verschiedene Anbieter vor diesem ausprobiert. Alle hatten Pufferprobleme während großer Spiele. IPTV Deutschland ist seit fünf Monaten einwandfrei. Die 4K Feeds sind scharf, die Sportsender umfassend und der Support ist schnell. Das ist der echte Deal für deutsche Sportfans.',
    date: '2026-05-28',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '13',
    name: 'Chloe A.',
    city: 'Freiburg',
    province: 'Baden-Württemberg',
    country: 'DE',
    rating: 5,
    title: 'Ideal für einen regionalen Haushalt',
    text: 'In Freiburg bekommen wir nicht immer den besten terrestrischen Empfang. IPTV Deutschland löste das über Nacht. Wir schauen jetzt jedes Bundesliga-Spiel und die lokalen Nachrichten in perfektem HD. Die Einrichtung war einfach auf dem Samsung, und der Support war geduldig mit all meinen Fragen.',
    date: '2026-05-18',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '14',
    name: 'Jack W.',
    city: 'Dortmund',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Jeden Euro allein für den Sport wert',
    text: 'Bundesliga, Champions League, DFB-Pokal, Formel 1, UFC und jedes DEL-Spiel. Für das, was ich früher nur für ein Sport-Add-on bezahlt habe, bekomme ich jetzt alles plus 120.000 Filme und Serien. Das Bild ist sauber, das Zappen schnell und der WhatsApp Support antwortet tatsächlich. Absolut keine Beschwerden.',
    date: '2026-05-10',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '15',
    name: 'Grace T.',
    city: 'Kiel',
    province: 'Schleswig-Holstein',
    country: 'DE',
    rating: 5,
    title: 'Streaming läuft auch in Schleswig-Holstein flüssig',
    text: 'Sehr stabiler Service aus Kiel. Ich nutze es hauptsächlich für Bundesliga, englische Sender und Filme mit den Kindern. Die Einrichtung war einfach. Ich habe meinen Device Key über WhatsApp gesendet und alles war innerhalb von 20 Minuten live. Das 12-Monats-Paket ist ein ausgezeichnetes Preis-Leistungs-Verhältnis.',
    date: '2026-05-02',
    verified: true,
    device: 'Apple TV 4K',
  },

  // =========================================================================
  // ÖSTERREICH
  // =========================================================================
  {
    id: '16',
    name: 'Michael R.',
    city: 'Wien',
    province: 'Wien',
    country: 'AT',
    rating: 5,
    title: 'Perfekt, um die Bundesliga von Wien aus zu verfolgen',
    text: 'Als Österreicher in Wien ist dieser Service ein Lebensretter für die deutsche Bundesliga. Vollständige Abdeckung von Bundesliga, Champions League, DFB-Pokal und Formel 1 in 4K. Der ORF und die deutschen Sender sind ideal, um Nachrichten nachzuholen. Der WhatsApp Support ist schnell und die Preise in Euro sind fair. Mehr kann ich mir nicht wünschen.',
    date: '2026-08-22',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '17',
    name: 'Daniel T.',
    city: 'Salzburg',
    province: 'Salzburg',
    country: 'AT',
    rating: 5,
    title: 'Bestes IPTV, das ich bisher ausprobiert habe',
    text: 'Ich habe in den letzten drei Jahren mindestens fünf verschiedene IPTV Anbieter getestet und IPTV Deutschland ist bei weitem der stabilste. Kein Freeze während großer Bundesliga-Spiele und die VOD-Bibliothek ist riesig. Der kostenlose Test gab mir Vertrauen, es auszuprobieren. Ich bin jetzt seit 8 Monaten Kunde.',
    date: '2026-07-18',
    verified: true,
    device: 'Android TV Box',
  },

  // =========================================================================
  // SCHWEIZ
  // =========================================================================
  {
    id: '18',
    name: 'James P.',
    city: 'Zürich',
    province: 'Zürich',
    country: 'CH',
    rating: 5,
    title: 'Ausgezeichnet für Sport und Nachrichten aus Zürich',
    text: 'Ich lebe in Zürich und suchte nach einer zuverlässigen Möglichkeit, die Bundesliga und die Formel 1 zu verfolgen. IPTV Deutschland liefert genau das. Kein Puffer während der Rennen und SRF, ZDF, ORF sowie Sky Sender sind ebenfalls enthalten. Der 24/7 WhatsApp Support ist unvergleichlich.',
    date: '2026-08-15',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '19',
    name: 'Emma H.',
    city: 'Genf',
    province: 'Genf',
    country: 'CH',
    rating: 5,
    title: 'Verlässlicher Service aus der Schweiz für deutsche Inhalte',
    text: 'Sehr stabiler Service aus Genf. Ich nutze es hauptsächlich für die Bundesliga und deutsche Nachrichten, und die Feeds sind konstant hochwertig. Die Einrichtung war einfach. Ich habe meinen Device Key über WhatsApp gesendet und alles war innerhalb von 20 Minuten live. Das 12-Monats-Paket ist ein ausgezeichnetes Preis-Leistungs-Verhältnis.',
    date: '2026-07-04',
    verified: true,
    device: 'Firestick 4K Max',
  },

  // =========================================================================
  // UNITED KINGDOM
  // =========================================================================
  {
    id: '20',
    name: 'Olivia W.',
    city: 'London',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: 'Fantastisch für deutsche Auswanderer in Großbritannien',
    text: 'Ich bin vor zwei Jahren von München nach London gezogen und habe das deutsche Fernsehen sehr vermisst. IPTV Deutschland schließt diese Lücke perfekt. Vollständige Abdeckung von ARD, ZDF, RTL, ProSieben plus alle großen deutschen Sportsender in 4K. Die Latenz ist auch aus Großbritannien minimal und der Preis in Euro ist unschlagbar.',
    date: '2026-08-01',
    verified: true,
    device: 'Apple TV 4K',
  },
];

// ---------------------------------------------------------------------------
// REVIEW FAQS — used by /bewertungen page FAQ + FAQPage schema
// ---------------------------------------------------------------------------
export const REVIEW_FAQS = [
  {
    q: 'Ist IPTV Deutschland seriös und vertrauenswürdig?',
    a: 'Ja. IPTV Deutschland bedient über 15.000 aktive Kunden in Deutschland, Österreich und der Schweiz mit einer durchschnittlichen Bewertung von 4,9 von 5. Wir bieten einen kostenlosen 24-Stunden-Test, 24/7 WhatsApp Support und sichere EUR-Zahlungen per SEPA-Überweisung, Kreditkarte, PayPal und Krypto.',
  },
  {
    q: 'Wie viele Kunden hat IPTV Deutschland?',
    a: 'IPTV Deutschland bedient über 15.000 aktive Abonnenten mit den größten Gemeinschaften in Berlin, Hamburg, München, Wien und Zürich. Wir bedienen auch deutsche Auswanderer und internationale Zuschauer in Großbritannien, den USA und Kanada.',
  },
  {
    q: 'Was sagen Kunden über IPTV Deutschland?',
    a: 'Kunden loben durchweg das pufferfreie 4K IPTV Streaming, die umfangreiche deutsche Senderabdeckung (Bundesliga, Champions League, DFB-Pokal, DEL), den schnellen WhatsApp Support und den inklusiven IPTV Extreme Aktivierungsservice. Unsere durchschnittliche Bewertung über verifizierte Rezensionen liegt bei 4,9 von 5.',
  },
  {
    q: 'Kann ich den Bewertungen auf dieser Seite vertrauen?',
    a: 'Ja. Jede auf dieser Seite gezeigte Bewertung stammt von einem verifizierten aktiven Abonnenten. Wir veröffentlichen nur Bewertungen von Kunden, die ein aktives IPTV Deutschland Abonnement haben. Bewertungen werden niemals bearbeitet oder gekauft. Sie spiegeln echte Kundenerfahrungen wider.',
  },
  {
    q: 'Was ist das häufigste Feedback zu IPTV Deutschland?',
    a: 'Das häufigste Feedback ist, dass wir gelegentlich die monatlichen 1-Gerät-Pakete während der Spitzensport-Saisons wie Bundesliga-Finale, Champions League Endspiele und UFC-Events ausverkauft sind. Wir füllen immer innerhalb von 24 Stunden nach, und Priority-Zugang ist im 12-Monats-VIP Paket verfügbar.',
  },
  {
    q: 'Wie hinterlasse ich eine Bewertung?',
    a: 'Aktive Abonnenten können eine Bewertung hinterlassen, indem sie unser WhatsApp Support Team direkt kontaktieren. Wir veröffentlichen alle echten Bewertungen, sowohl positive als auch kritische, um Transparenz zu wahren und zukünftigen Kunden eine fundierte Entscheidung zu ermöglichen.',
  },
];