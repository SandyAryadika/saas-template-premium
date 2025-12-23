"use client";

import React, { useRef } from 'react';
import { ShieldCheck, Zap, Globe, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrasi plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Keamanan Enterprise", desc: "Enkripsi end-to-end yang memenuhi standar industri global.", icon: <ShieldCheck size={24} /> },
  { title: "Performa Tinggi", desc: "Infrastruktur serverless yang menjamin uptime hingga 99.9%.", icon: <Zap size={24} /> },
  { title: "Skala Global", desc: "Deploy aplikasi Anda ke 20+ region di seluruh dunia secara instan.", icon: <Globe size={24} /> },
  { title: "Integrasi API", desc: "Hubungkan ribuan tools yang Anda gunakan dalam satu klik.", icon: <Layers size={24} /> }
];

const Features = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Header (Judul & Deskripsi)
    gsap.from(".feat-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".feat-header",
        start: "top 85%", // Animasi mulai saat bagian atas elemen mencapai 85% tinggi layar
        toggleActions: "play none none reverse", // Play saat masuk, Reverse saat scroll balik ke atas
      }
    });

    // 2. Animasi Grid Cards
    gsap.from(".feat-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".feat-grid",
        start: "top 80%", // Mulai sedikit lebih lambat dari header agar terasa natural
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="fitur" className="py-20 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6">
        {/* Tambahkan class feat-header */}
        <div className="max-w-2xl mb-20">
          <h2 className="feat-header text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">
            Efisiensi Tanpa Kompromi
          </h2>
          <p className="feat-header text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Segala yang Anda butuhkan untuk membangun produk kelas dunia.
          </p>
        </div>

        {/* Tambahkan class feat-grid dan feat-card */}
        <div className="feat-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden">
          {features.map((item, index) => (
            <div key={index} className="feat-card bg-white p-10 hover:bg-zinc-50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 text-zinc-900 border border-zinc-100 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;