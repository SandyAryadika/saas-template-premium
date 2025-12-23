"use client"; // Wajib untuk Next.js App Router karena GSAP mengakses DOM

import React, { useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Targetkan class .animate-item untuk animasi berurutan (stagger)
    gsap.from(".animate-item", {
      y: 40,            // Muncul dari bawah (40px)
      opacity: 0,       // Dari transparan
      duration: 1,      // Durasi 1 detik
      stagger: 0.15,    // Jeda antar elemen 0.15 detik
      ease: "power4.out", // Efek melambat yang halus di akhir
    });
  }, { scope: container }); // Scope memastikan hanya elemen di dalam container ini yang terpengaruh

  return (
    <section ref={container} className="relative pt-28 pb-16 overflow-hidden bg-white">
      {/* Efek Gradient Halus di Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-6 text-center">
        {/* 1. Badge Berita */}
        <div className="animate-item inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full mb-8 hover:bg-zinc-200 transition-colors cursor-pointer">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">v2.0 is live</span>
          <div className="w-[1px] h-3 bg-zinc-300" />
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            Lihat apa yang baru <ChevronRight size={12} />
          </span>
        </div>

        {/* 2. Judul Utama */}
        <h1 className="animate-item text-5xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
          Otomatisasi Alur Kerja <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Tanpa Batas.
          </span>
        </h1>

        {/* 3. Deskripsi */}
        <p className="animate-item text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          SaaSFlow memberikan infrastruktur cerdas untuk tim yang mengutamakan kecepatan. 
          Satukan komunikasi, data, dan eksekusi dalam satu dasbor terpadu.
        </p>

        {/* 4. Tombol */}
        <div className="animate-item flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-zinc-800 transition shadow-xl shadow-zinc-200 flex items-center justify-center gap-2">
            Mulai Secara Gratis <ArrowRight size={18} />
          </button>
          <button className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition">
            Jadwalkan Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;