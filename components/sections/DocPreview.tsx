"use client";

import React, { useRef } from 'react';
import { Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const DocPreview = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animasi Konten Teks (Kiri)
    gsap.from(".doc-content", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".doc-content",
        start: "top 80%",
      }
    });

    // 2. Animasi Mockup Terminal (Kanan)
    gsap.from(".terminal-window", {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      scrollTrigger: {
        trigger: ".terminal-window",
        start: "top 75%",
      }
    });

    // 3. Efek Typing Per Baris Kode
    // Kita gunakan clip-path untuk menganimasi kemunculan baris dari kiri ke kanan
    gsap.from(".code-line", {
      clipPath: "inset(0 100% 0 0)", // Terpotong sepenuhnya dari kanan
      opacity: 0,
      duration: 0.8,
      stagger: 0.4, // Jeda antar baris agar terlihat seperti diketik
      ease: "none",
      scrollTrigger: {
        trigger: ".terminal-inner",
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} id="dokumentasi" className="py-20 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Konten Teks */}
          <div className="doc-content">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 mb-4 doc-content">Dokumentasi API</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 doc-content">
              Dibuat oleh developer, <br />untuk developer.
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed doc-content">
              Integrasikan SaaSFlow ke dalam stack teknologi Anda hanya dalam hitungan menit. SDK kami mendukung berbagai bahasa pemrograman populer.
            </p>
            <ul className="space-y-4 text-sm text-zinc-300 doc-content">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                RESTful API yang terdokumentasi lengkap
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Webhooks untuk notifikasi real-time
              </li>
            </ul>
          </div>

          {/* Mockup Terminal/Code Editor */}
          <div className="relative terminal-window">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] text-zinc-500 font-mono ml-4 flex items-center gap-2">
                  <Terminal size={12} /> main.js
                </div>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto terminal-inner">
                {/* Gunakan class code-line pada setiap baris/paragraf */}
                <p className="code-line text-indigo-400">const<span className="text-white"> flow = </span>require<span className="text-zinc-500">(</span><span className="text-emerald-400">'@saasflow/sdk'</span><span className="text-zinc-500">);</span></p>
                <p className="code-line text-zinc-500 mt-2">// Inisialisasi klien</p>
                <p className="code-line text-indigo-400">const<span className="text-white"> client = </span>new<span className="text-white"> flow.Client</span><span className="text-zinc-500">({'{'}</span></p>
                <p className="code-line text-white ml-4 italic">apiKey: <span className="text-emerald-400">'sf_live_67890'</span></p>
                <p className="code-line text-zinc-500">{'}'}<span className="text-zinc-500">);</span></p>
                
                <p className="code-line text-zinc-500 mt-2">// Kirim data project</p>
                <p className="code-line text-indigo-400">await<span className="text-white"> client.projects.create</span><span className="text-zinc-500">({'{'}</span></p>
                <p className="code-line text-white ml-4 italic">name: <span className="text-emerald-400">'New Campaign'</span><span className="text-zinc-500">,</span></p>
                <p className="code-line text-white ml-4 italic">priority: <span className="text-emerald-400">'high'</span></p>
                <p className="code-line text-zinc-500">{'}'}<span className="text-zinc-500">);</span></p>
              </div>
            </div>

            {/* Efek Glow di belakang terminal agar lebih estetik */}
            <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocPreview;