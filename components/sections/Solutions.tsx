"use client";

import React, { useRef } from 'react';
import { BarChart3, Users, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrasi plugin
gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Untuk Tim Marketing",
    desc: "Pantau kampanye secara real-time dan optimalkan konversi dengan data akurat.",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "Untuk Project Manager",
    desc: "Kelola beban kerja tim dan deadline dalam satu kalender terpusat.",
    icon: <Users size={20} />,
  },
  {
    title: "Untuk Pengembang",
    desc: "Integrasi API yang fleksibel dengan dokumentasi teknis yang lengkap.",
    icon: <Code2 size={20} />,
  }
];

const Solutions = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Header (Judul Kecil & Judul Besar)
    gsap.from(".sol-header", {
      x: -30,          // Muncul sedikit dari arah kiri
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".sol-header",
        start: "top 90%", // Muncul lebih awal saat mulai terlihat
      }
    });

    // 2. Animasi Cards
    gsap.from(".sol-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sol-grid",
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="solusi" className="py-20 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            {/* Tambahkan class sol-header */}
            <h2 className="sol-header text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">
              Solusi Terpadu
            </h2>
            <p className="sol-header text-3xl font-bold tracking-tight text-zinc-900">
              Dirancang untuk setiap aspek bisnis Anda.
            </p>
          </div>
        </div>

        {/* Tambahkan class sol-grid */}
        <div className="sol-grid grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((item, index) => (
            /* Tambahkan class sol-card */
            <div key={index} className="sol-card group cursor-default">
              <div className="mb-6 text-zinc-400 group-hover:text-indigo-600 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              
              {/* Garis bawah dekoratif (CSS Transition tetap bekerja setelah GSAP selesai) */}
              <div className="mt-6 w-0 group-hover:w-full h-[2px] bg-indigo-600 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;