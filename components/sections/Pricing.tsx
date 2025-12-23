"use client";

import React, { useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".pricing-card-stable", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".pricing-grid-stable",
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="harga" className="py-20 bg-zinc-50 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center pricing-header">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">Investasi untuk Pertumbuhan Anda</h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Pilih paket yang paling sesuai dengan skala tim Anda. Tanpa biaya tersembunyi, batalkan kapan saja.
          </p>
        </div>

        <div className="pricing-grid-stable grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* Basic Card */}
          <div className="pricing-card-stable flex flex-col bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-[0.1em] text-zinc-400 mb-4 block uppercase">Individu & Freelance</span>
              <div className="text-4xl font-bold mb-2 text-zinc-900">$0<span className="text-lg font-normal text-zinc-400">/bln</span></div>
              <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Sempurna untuk validasi ide project atau penggunaan personal tanpa biaya.</p>
              
              <ul className="space-y-4 mb-10 text-sm text-zinc-600">
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Akses ke <strong>5 Workspace</strong> aktif</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Penyimpanan Cloud <strong>10GB</strong></span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Analitik dasar harian</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Integrasi 2 aplikasi pihak ketiga</span></li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-zinc-900 text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all duration-300">
                Mulai Gratis
            </button>
          </div>

          {/* Pro Card (Recommended) */}
          <div className="pricing-card-stable flex flex-col bg-zinc-900 p-10 rounded-3xl border border-zinc-800 shadow-2xl shadow-indigo-100/20 relative scale-105 z-10">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold tracking-[0.1em] text-indigo-400 uppercase">Tim Profesional</span>
                <span className="bg-indigo-600 text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase">Terpopuler</span>
              </div>
              <div className="text-4xl font-bold mb-2 text-white">$49<span className="text-lg font-normal text-zinc-500">/bln</span></div>
              <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Solusi lengkap untuk tim yang membutuhkan kolaborasi intensif dan automasi.</p>
              
              <ul className="space-y-4 mb-10 text-sm text-zinc-300">
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0"/> <span><strong>Tanpa Batas</strong> anggota tim</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0"/> <span>Penyimpanan Cloud <strong>1TB</strong></span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0"/> <span>Automasi workflow tanpa batas</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0"/> <span>Dukungan Prioritas 24/7</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-400 mt-0.5 flex-shrink-0"/> <span>Custom Branding & Domain</span></li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/30">
              Coba Gratis 14 Hari
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="pricing-card-stable flex flex-col bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-[0.1em] text-zinc-400 mb-4 block uppercase">Skala Perusahaan</span>
              <div className="text-4xl font-bold mb-2 text-zinc-900">Custom</div>
              <p className="text-sm text-zinc-500 mb-8 leading-relaxed">Keamanan tingkat lanjut dan kontrol penuh untuk organisasi skala besar.</p>
              
              <ul className="space-y-4 mb-10 text-sm text-zinc-600">
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Single Sign-On (SSO) & SAML</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Dedicated Server & Infrastruktur</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Audit logs & Kepatuhan keamanan</span></li>
                <li className="flex gap-3 items-start"><Check size={16} className="text-indigo-600 mt-0.5 flex-shrink-0"/> <span>Manajer Akun khusus (Dedicated)</span></li>
              </ul>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-zinc-900 text-zinc-900 font-bold hover:bg-zinc-900 hover:text-white transition-all duration-300">
                Hubungi Penjualan
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;