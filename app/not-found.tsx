'use client';

import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { Home, ArrowLeft, Search, Tv, Film } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden justify-center items-center py-20 sm:py-24 md:py-30">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/error-404.webp"
          alt={`${CONSTANTS.BRAND_NAME} - Seite nicht gefunden auf dem IPTV Deutschland Service`}
          className="w-full h-full object-cover opacity-95 brightness-50"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/90 via-[#0a0a0c]/70 to-[#0a0a0c]/90" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DD0000]/15 rounded-full blur-[120px] animate-pulse" />

      {/* Main Container Perfectly Centered Vertically & Horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
        <div className="max-w-3xl mx-auto">

          {/* 404 Number Layout Container */}
          <div className="mb-6">
            <div className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter uppercase select-none">
              <span className="text-[#FFCE00]">4</span>
              <span className="text-[#f2ebeb]">0</span>
              <span className="text-[#DD0000]">4</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f2ebeb] mb-4 uppercase tracking-tighter">
            Seite nicht gefunden
          </h1>

          <div className="w-24 h-1.5 bg-[#FFCE00] mx-auto mb-8 rounded-full" />

          <p className="text-[#f2ebeb]/80 text-base sm:text-lg font-medium max-w-xl mx-auto mb-12 leading-relaxed">
            Keine Sorge — diese Seite ist verschollen. Möglicherweise ist der Link veraltet oder die URL enthält einen kleinen Tippfehler. Nutzen Sie die nachfolgenden Verknüpfungen, um sicher zu unserem IPTV Deutschland Angebot zurückzukehren.
          </p>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#FFCE00] transition-all duration-300"
            >
              <Home className="w-5 h-5 text-[#FFCE00] group-hover:scale-110 transition-transform" />
              <span className="text-[#f2ebeb] text-xs font-black uppercase tracking-wider">Start</span>
            </Link>

            <Link
              href="/preise"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#FFCE00] transition-all duration-300"
            >
              <Tv className="w-5 h-5 text-[#FFCE00] group-hover:scale-110 transition-transform" />
              <span className="text-[#f2ebeb] text-xs font-black uppercase tracking-wider">Preise</span>
            </Link>

            <Link
              href="/einrichtung"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#FFCE00] transition-all duration-300"
            >
              <Film className="w-5 h-5 text-[#FFCE00] group-hover:scale-110 transition-transform" />
              <span className="text-[#f2ebeb] text-xs font-black uppercase tracking-wider">Einrichtung</span>
            </Link>

            <Link
              href="/blog"
              className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1A1A1D] border-2 border-white/5 hover:border-[#FFCE00] transition-all duration-300"
            >
              <Search className="w-5 h-5 text-[#FFCE00] group-hover:scale-110 transition-transform" />
              <span className="text-[#f2ebeb] text-xs font-black uppercase tracking-wider">Blog</span>
            </Link>
          </div>

          {/* Main Action Control Elements */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#DD0000] text-[#FFFFFF] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl border-2 border-[#FFCE00]"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              Zur Startseite
            </Link>

            <Link
              href="/preise"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f2ebeb] border-2 border-[#DD0000] text-[#DD0000] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shrink-0 shadow-2xl"
            >
              IPTV Deutschland Pakete Ansehen
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}