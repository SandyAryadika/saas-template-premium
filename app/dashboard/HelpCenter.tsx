"use client";

import React, { useState } from 'react';
import { 
  HelpCircle, Search, MessageSquare, 
  BookOpen, Mail, ChevronDown, ChevronUp, LifeBuoy,
  CreditCard, ShieldCheck, Zap
} from 'lucide-react';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Data FAQ standar SaaS yang dibutuhkan pembeli
  const faqs = [
    { 
      q: "Bagaimana cara menambah anggota tim baru?", 
      a: "Buka menu 'Tim Kami' di sidebar, lalu klik tombol 'Undang Anggota'. Masukkan alamat email mereka dan tentukan peran aksesnya (Admin atau Member)." 
    },
    { 
      q: "Apakah saya bisa membatalkan langganan kapan saja?", 
      a: "Tentu. Anda dapat mengelola langganan di menu Pengaturan > Billing. Jika Anda membatalkan, akses Pro akan tetap aktif hingga akhir periode penagihan saat ini." 
    },
    { 
      q: "Apakah data saya aman dan terenkripsi?", 
      a: "Keamanan adalah prioritas kami. Semua data dienkripsi menggunakan standar industri AES-256 dan disimpan di infrastruktur cloud yang memiliki sertifikasi kepatuhan global." 
    },
    {
      q: "Bagaimana cara integrasi dengan aplikasi pihak ketiga?",
      a: "Kami mendukung integrasi via Webhooks dan API Key. Anda dapat menemukan dokumentasi lengkapnya di bagian Dokumentasi Pengembang."
    }
  ];

  return (
    <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Search Hero Section */}
      <div className="bg-indigo-600 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Apa yang bisa kami bantu?</h2>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari tutorial, FAQ, atau bantuan teknis..." 
              className="w-full pl-12 pr-6 py-4 bg-white border-none rounded-2xl text-zinc-900 shadow-lg focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all"
            />
          </div>
        </div>
        {/* Dekorasi Cahaya Tersembunyi */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 blur-[60px] -z-0" />
      </div>

      {/* 2. Kategori Bantuan (Quick Action) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Zap className="text-amber-500" />, title: 'Mulai Cepat', desc: 'Panduan langkah demi langkah untuk setup awal.' },
          { icon: <CreditCard className="text-emerald-500" />, title: 'Penagihan', desc: 'Masalah terkait invoice, paket, dan metode bayar.' },
          { icon: <ShieldCheck className="text-indigo-500" />, title: 'Keamanan', desc: 'Kelola privasi, 2FA, dan izin akses data.' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-100">
              {item.icon}
            </div>
            <h4 className="font-bold text-zinc-900 mb-2">{item.title}</h4>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 3. FAQ Section & Contact Support */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Accordion FAQ */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <HelpCircle size={20} className="text-indigo-600" /> FAQ Terpopuler
          </h3>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50/50 transition-colors"
              >
                <span className="text-sm font-bold text-zinc-900">{faq.q}</span>
                {openFaq === i ? <ChevronUp size={18} className="text-zinc-400" /> : <ChevronDown size={18} className="text-zinc-400" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar Bantuan Langsung */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-900 rounded-3xl p-8 text-white shadow-xl">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
              <LifeBuoy size={24} />
            </div>
            <h4 className="text-lg font-bold mb-2">Masih butuh bantuan?</h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-8 font-medium">
              Tim support kami siap membantu Anda 24/7 melalui berbagai saluran komunikasi.
            </p>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-white text-zinc-900 rounded-xl text-xs font-bold hover:bg-zinc-100 transition">
                <MessageSquare size={16} /> Chat Langsung
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-800 text-white rounded-xl text-xs font-bold hover:bg-zinc-700 transition">
                <Mail size={16} /> Kirim Email
              </button>
            </div>
          </div>
          <div className="p-6 border border-dashed border-zinc-200 rounded-3xl text-center">
            <p className="text-xs text-zinc-400 font-medium">Rata-rata waktu respon: <strong>15 Menit</strong></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HelpCenter;