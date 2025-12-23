"use client";

import React, { useRef } from 'react';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animasi munculnya footer
    gsap.from(".footer-content", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 90%",
      }
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-white pt-20 pb-10 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        
        {/* Section CTA - Banner Ajakan Terakhir */}
        <div className="footer-content bg-zinc-900 rounded-[2.5rem] p-12 md:p-20 text-center mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Siap untuk meningkatkan <br /> produktivitas tim Anda?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Bergabunglah dengan ribuan tim yang telah beralih ke SaaSFlow. Mulai uji coba gratis 14 hari Anda sekarang.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                Dapatkan Akses Sekarang <ArrowRight size={20} />
              </button>
            </div>
          </div>
          {/* Efek Cahaya Dekoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -z-0" />
        </div>

        {/* Link Navigasi */}
        <div className="footer-content grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="text-xl font-bold text-zinc-900 mb-6">SaaS<span className="text-indigo-600">Flow</span></div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Platform manajemen alur kerja cerdas yang dirancang untuk membantu startup berkembang lebih cepat dan efisien di tahun 2025.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Produk</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#fitur" className="hover:text-indigo-600 transition">Fitur Utama</a></li>
              <li><a href="#solusi" className="hover:text-indigo-600 transition">Solusi Bisnis</a></li>
              <li><a href="#harga" className="hover:text-indigo-600 transition">Daftar Harga</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Perusahaan</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-indigo-600 transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Karir</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 text-sm uppercase tracking-widest">Sosial</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-zinc-200 rounded-full text-zinc-400 hover:text-indigo-600 hover:border-indigo-600 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full text-zinc-400 hover:text-indigo-600 hover:border-indigo-600 transition">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 border border-zinc-200 rounded-full text-zinc-400 hover:text-indigo-600 hover:border-indigo-600 transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-content border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-400">
          <p>© 2025 SaaSFlow Template. Hak Cipta Dilindungi.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-zinc-900">Syarat Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;