import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  MessageCircle,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/blog`;
const POSTS_PER_PAGE = 6;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Blog | Setup Anleitungen & News 2026`
);

const PAGE_DESCRIPTION = clampDescription(
  `Blog mit Setup Anleitungen, App-Tests und Streaming-Tipps für Firestick, Smart TV und Mobil. Wöchentlich aktualisiert.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_TITLE,
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'de-DE': PAGE_URL,
      'de-AT': PAGE_URL,
      'de-CH': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Blog - Setup Anleitungen und Streaming Tipps`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    'blog',
    'setup anleitung',
    'firestick einrichtung',
    'streaming tipps',
    'news 2026',
  ],
};

const CATEGORIES = [
  { id: 'all', label: 'Alle Artikel' },
  { id: 'setup', label: 'Setup Anleitungen' },
  { id: 'review', label: 'Tests' },
  { id: 'sports', label: 'Live Sport' },
  { id: 'tips', label: 'Tipps & Tricks' },
  { id: 'news', label: 'Aktuelles' },
];

function getPostCategory(post: any): string {
  if (post.category) return post.category;
  const kw = (post.keywords || []).join(' ').toLowerCase();
  const title = (post.title || '').toLowerCase();
  if (title.includes('setup') || title.includes('install') || title.includes('einricht') || kw.includes('setup anleitung')) return 'setup';
  if (title.includes('test') || title.includes('bewertung') || title.includes('vergleich') || kw.includes('test')) return 'review';
  if (title.includes('sport') || kw.includes('live sport')) return 'sports';
  if (title.includes('tipp') || title.includes('problemlös') || title.includes('fehler')) return 'tips';
  return 'news';
}

function getCategoryLabel(id: string): string {
  const map: Record<string, string> = {
    setup: 'Setup Anleitung',
    review: 'Test & Bewertung',
    sports: 'Live Sport',
    tips: 'Tipps & Tricks',
    news: 'Aktuelles',
  };
  return map[id] || 'Anleitung';
}

function getReadTime(post: any): string {
  if (post.readTime) return post.readTime;
  const words = (post.content || '').split(/\s+/).length;
  const mins = Math.max(5, Math.round(words / 220));
  return `${mins} Min. Lesezeit`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('de-DE', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const featuredPost = sortedPosts[0];
const restPosts = sortedPosts.slice(1);

const BlogSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${PAGE_URL}/#blog`,
        name: `${BRAND} Blog`,
        description: `Setup Anleitungen, Tests und Streaming Tipps für Firestick, Smart TV und Mobil.`,
        url: PAGE_URL,
        inLanguage: 'de-DE',
        publisher: { '@id': `${SITE_URL}/#organization` },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}/#article`,
          headline: post.title,
          description: post.description || post.excerpt || '',
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'de-DE',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: { '@id': `${SITE_URL}/#organization` },
          image: {
            '@type': 'ImageObject',
            url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
          },
          keywords: (post.keywords || []).join(', '),
        })),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}/#collection`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="blog-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

function BlogCard({ post, priority = false }: { post: any; priority?: boolean }) {
  const categoryId = getPostCategory(post);
  const categoryLabel = getCategoryLabel(categoryId);
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col bg-[#121214] rounded-none overflow-hidden border-2 border-[#DD0000]/20 hover:border-[#DD0000] hover:shadow-[0_20px_50px_rgba(221,0,0,0.2)] hover:-translate-y-2 transition-all duration-500 text-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0c]">
        <Image
          src={post.image}
          alt={`${post.title} - Blog Artikel`}
          width={800}
          height={500}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#DD0000] text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#0a0a0c]/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider border border-white/10">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3">
          <Calendar className="w-3 h-3 text-[#DD0000]" />
          <span>{dateStr}</span>
          <span className="text-[#DD0000]">•</span>
          <span>{post.author}</span>
        </div>

        <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-[#DD0000] transition-colors">
          {post.title}
        </h3>

        <p className="text-slate-300 text-sm font-medium leading-relaxed line-clamp-3 mb-4 flex-1">
          {post.description || post.excerpt || ''}
        </p>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[#DD0000] font-black text-xs uppercase tracking-widest group-hover:gap-2.5 transition-all">
            Artikel Lesen
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <div className="w-8 h-8 rounded-none bg-[#DD0000]/10 border border-[#DD0000]/30 flex items-center justify-center text-[#DD0000] group-hover:bg-[#DD0000] group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ post }: { post: any }) {
  const categoryLabel = getCategoryLabel(getPostCategory(post));
  const readTime = getReadTime(post);
  const dateStr = formatDate(post.date);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#121214] rounded-none overflow-hidden border-2 border-[#DD0000] hover:shadow-[0_25px_60px_rgba(221,0,0,0.25)] transition-all duration-500 text-white"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-[#0a0a0c]">
        <Image
          src={post.image}
          alt={`${post.title} - Empfohlener Artikel`}
          width={900}
          height={600}
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0c]/80 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-[#DD0000] text-white text-[11px] font-black uppercase tracking-widest shadow-xl border border-[#FFD700]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            Empfohlen
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-400 mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-none bg-[#DD0000]/10 text-[#DD0000] border border-[#DD0000]/30">
            <Tag className="w-3 h-3" />
            {categoryLabel}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#DD0000]" />
            {dateStr}
          </span>
          <span className="text-[#DD0000]">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#DD0000]" />
            {readTime}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#DD0000] transition-colors">
          {post.title}
        </h2>

        <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-6 line-clamp-3">
          {post.description || post.excerpt || ''}
        </p>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#DD0000] text-white font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all shadow-lg border border-[#FFD700]/30">
            Vollen Artikel Lesen
            <ArrowRight className="w-4 h-4" />
          </span>
          <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">
            von {post.author}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogListing() {
  const postsForGrid = restPosts;
  const totalPages = Math.ceil(postsForGrid.length / POSTS_PER_PAGE);
  const currentPosts = postsForGrid.slice(0, POSTS_PER_PAGE);

  return (
    <>
      <BlogSchema />

      <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-white">
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#DD0000]/10 blur-[150px] rounded-none pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #DD0000 1px, transparent 1px), linear-gradient(to bottom, #DD0000 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-none mb-6 shadow-lg border border-[#FFD700]/30">
              <BookOpen className="w-4 h-4 text-[#FFD700]" />
              <span className="text-white font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
                Blog
                <GermanFlag className="w-4 h-4" />
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white mb-6">
              BLOG &amp; <br />
              <span className="text-[#FFD700]">ANLEITUNGEN</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-bold max-w-2xl mx-auto leading-relaxed mb-8">
              Setup Anleitungen, App-Tests, Streaming-Tipps und aktuelle News. Alles, was Sie für das Beste aus Ihrem Abonnement brauchen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#FFD700]" />
                {blogPosts.length} Artikel
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                Wöchentlich Aktualisiert
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-wider">
                <MessageCircle className="w-3.5 h-3.5 text-[#FFD700]" />
                24/7 Support
              </span>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`px-4 sm:px-5 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all border-2 ${
                  cat.id === 'all'
                    ? 'bg-[#DD0000] text-white border-[#DD0000] shadow-lg shadow-[#DD0000]/30'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-[#DD0000]/10 hover:text-white hover:border-[#DD0000]/40'
                }`}
                aria-label={`Nach ${cat.label} filtern`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {featuredPost && (
          <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-12 bg-[#DD0000] rounded-none" />
              <h2 className="text-sm font-black uppercase tracking-widest text-[#FFD700]">
                Empfohlener Artikel
              </h2>
            </div>
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-12 bg-[#DD0000] rounded-none" />
            <h2 className="text-sm font-black uppercase tracking-widest text-[#FFD700]">
              Neueste Artikel
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none bg-white/5 text-white/40 border border-white/10 text-xs font-black uppercase tracking-widest cursor-not-allowed"
                aria-label="Vorherige Seite"
              >
                <ChevronLeft className="w-4 h-4" />
                Zurück
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`w-10 h-10 rounded-none text-xs font-black transition-all ${
                    idx === 0
                      ? 'bg-[#DD0000] text-white shadow-lg shadow-[#DD0000]/30'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-[#DD0000]/10 hover:text-white hover:border-[#DD0000]/40'
                  }`}
                  aria-label={`Gehe zu Seite ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                type="button"
                disabled={totalPages <= 1}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-none text-xs font-black uppercase tracking-widest transition-all ${
                  totalPages > 1
                    ? 'bg-[#DD0000]/10 text-[#DD0000] border border-[#DD0000]/40 hover:bg-[#DD0000] hover:text-white cursor-pointer'
                    : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
                }`}
                aria-label="Nächste Seite"
              >
                Weiter
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full mb-16">
          <div className="relative rounded-none overflow-hidden border-2 border-[#FFD700]/30 bg-gradient-to-br from-[#DD0000] via-[#8C0000] to-[#DD0000] p-8 md:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),_transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#8C0000] px-4 py-2 rounded-none mb-5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                <span className="font-black text-xs uppercase tracking-widest">
                  Brauchen Sie Hilfe?
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
                Kostenlose Setup Hilfe
              </h3>
              <p className="text-white/90 text-sm sm:text-base font-bold max-w-xl mx-auto mb-6">
                Unser Team ist 24/7 auf WhatsApp für Firestick, Smart TV oder jedes Gerät erreichbar. Geführte Aktivierung inklusive.
              </p>
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hallo ${BRAND}, ich habe Ihren Blog gefunden und brauche Setup Hilfe.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-[#0a0a0c] text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl border-2 border-[#FFD700]"
              >
                <MessageCircle className="w-5 h-5 text-[#FFD700]" />
                Per WhatsApp Chatten
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full pb-20">
          <div className="bg-[#121214] rounded-none p-8 md:p-12 border-2 border-[#DD0000]/20 text-center text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-tight mb-4">
              Bereit zu <span className="text-[#DD0000]">Streamen?</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-xl mx-auto mb-8">
              Wählen Sie aus flexiblen Paketen. Geführtes Setup, 36.000 Live TVs und 120.000 Filme und Serien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/preise"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#DD0000] text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg border border-[#FFD700]/30"
              >
                Pakete Ansehen <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/einrichtung"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#0a0a0c] text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-all border-2 border-[#DD0000]"
              >
                Einrichtungsanleitung
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}