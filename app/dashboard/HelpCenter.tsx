"use client";

import React, { useState } from 'react';
import { 
  HelpCircle, Search, MessageSquare, 
  BookOpen, Mail, ChevronDown, ChevronUp, LifeBuoy,
  CreditCard, ShieldCheck, Zap, ArrowUpRight
} from 'lucide-react';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Data FAQ standar SaaS
  const faqs = [
    { 
      q: "Bagaimana cara menambah anggota tim baru?", 
      a: "Buka menu 'Tim Kami' di sidebar, lalu klik tombol 'Undang Anggota'. Masukkan alamat email mereka dan tentukan peran aksesnya (Admin atau Member)." 
    },
    { 
      q: "Apakah saya bisa membatalkan langganan kapan saja?", 
      a: "Tentu. Anda dapat mengelola langganan di menu Billing. Jika Anda membatalkan, akses Pro akan tetap aktif hingga akhir periode penagihan saat ini." 
    },
    { 
      q: "Apakah data saya aman dan terenkripsi?", 
      a: "Keamanan adalah prioritas kami. Semua data dienkripsi menggunakan standar industri AES-256 dan disimpan di infrastruktur cloud yang memiliki sertifikasi global." 
    },
    {
      q: "Bagaimana cara integrasi dengan API?",
      a: "Kami mendukung integrasi via Webhooks dan API Key. Anda dapat menemukan dokumentasi lengkapnya di bagian Dokumentasi Pengembang."
    }
  ];

  return (
    <div className="w-full space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HERO SEARCH SECTION (Responsif Full) */}
      <div className="bg-indigo-600 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Pusat Bantuan
            </h2>
            <p className="text-indigo-100 text-sm md:text-base font-medium max-w-lg mx-auto">
              Cari tutorial, jawaban pertanyaan umum, atau hubungi tim dukungan kami secara langsung.
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder="Ketik pertanyaan Anda di sini..." 
              className="w-full pl-14 pr-6 py-4 md:py-5 bg-white border-none rounded-2xl md:rounded-[1.5rem] text-zinc-900 shadow-2xl focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all text-sm md:text-base"
            />
          </div>
        </div>
        {/* Dekorasi Cahaya */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] -z-0" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/20 blur-[80px] -z-0" />
      </div>

      {/* 2. KATEGORI BANTUAN (Grid Responsif) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Zap className="text-amber-500" />, title: 'Mulai Cepat', desc: 'Panduan setup awal aplikasi Anda.' },
          { icon: <CreditCard className="text-emerald-500" />, title: 'Penagihan', desc: 'Info invoice dan paket langganan.' },
          { icon: <ShieldCheck className="text-indigo-500" />, title: 'Keamanan', desc: 'Kelola privasi dan izin akses data.' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1">
            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-100 shadow-sm">
              {item.icon}
            </div>
            <h4 className="font-bold text-zinc-900 mb-2">{item.title}</h4>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. FAQ & SUPPORT SIDEBAR (Grid Responsif) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        {/* Accordion FAQ (Layar Besar: 2/3, Layar Kecil: Full) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
              <HelpCircle size={20} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">FAQ Terpopuler</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-indigo-100">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50/50 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-zinc-900 pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} className="text-indigo-600 shrink-0" /> : <ChevronDown size={20} className="text-zinc-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="pt-2 border-t border-zinc-50">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Bantuan Langsung (Layar Besar: 1/3, Layar Kecil: Full) */}
        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
                <LifeBuoy size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Butuh bantuan personal?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-8 font-medium">
                Tim dukungan teknis kami tersedia 24/7 untuk membantu menyelesaikan masalah Anda secara real-time.
              </p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-white text-zinc-900 rounded-xl text-xs font-extrabold hover:bg-zinc-100 transition-all active:scale-95 shadow-sm">
                  <MessageSquare size={16} /> Chat Langsung
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-4 bg-zinc-800 text-white border border-zinc-700 rounded-xl text-xs font-extrabold hover:bg-zinc-700 transition-all active:scale-95">
                  <Mail size={16} /> Kirim Tiket Email
                </button>
              </div>
            </div>
            {/* Dekorasi Gradient */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/20 blur-[50px] rounded-full" />
          </div>

          <div className="p-8 bg-zinc-50 rounded-[2rem] border border-dashed border-zinc-200 text-center">
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-tighter mb-1">Status Sistem</p>
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Semua Sistem Normal
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;