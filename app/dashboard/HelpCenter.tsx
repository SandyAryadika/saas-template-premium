"use client";

import React, { useState } from 'react';
import { 
  Search, BookOpen, MessageSquare, Mail, 
  LifeBuoy, ChevronRight, X, Send, 
  FileQuestion, MessageCircle, AlertCircle
} from 'lucide-react';

const HelpCenter = () => {
  // 1. STATE UNTUK MODAL TIKET DUKUNGAN
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      q: "Bagaimana cara menghubungkan API?",
      a: "Anda dapat menemukan kunci API di halaman Pengaturan > Developer. Dokumentasi lengkap tersedia di docs.saasflow.com."
    },
    {
      id: 2,
      q: "Apakah saya bisa membatalkan langganan kapan saja?",
      a: "Ya, Anda dapat membatalkan langganan kapan saja melalui menu Billing. Akses pro Anda akan tetap aktif hingga akhir periode penagihan."
    },
    {
      id: 3,
      q: "Bagaimana cara mengundang anggota tim?",
      a: "Buka menu 'Tim Kami', klik tombol 'Undang Anggota', dan masukkan alamat email mereka."
    }
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 2. HERO SECTION: Search & Welcome */}
      <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ada yang bisa kami bantu?</h2>
          <p className="text-indigo-100 text-sm md:text-lg max-w-2xl mx-auto font-medium">
            Cari jawaban di dokumentasi kami atau hubungi tim dukungan secara langsung.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari solusi atau panduan..." 
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-2xl" 
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -z-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 3. FAQ SECTION (Kiri) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <FileQuestion size={20} className="text-indigo-600" />
            <h3 className="font-bold text-xl text-zinc-900">Pertanyaan Populer</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm transition-all hover:border-indigo-200"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-sm text-zinc-900 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                  <ChevronRight 
                    size={18} 
                    className={`text-zinc-400 transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-90' : ''}`} 
                  />
                </button>
                {activeFaq === faq.id && (
                  <div className="px-6 pb-6 text-sm text-zinc-500 leading-relaxed animate-in slide-in-from-top-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. SUPPORT OPTIONS (Kanan) */}
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-zinc-900 mb-2 flex items-center gap-2">
            <LifeBuoy size={20} className="text-indigo-600" /> Kontak Kami
          </h3>
          <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Dokumentasi API</h4>
                <p className="text-xs text-zinc-500 mt-1">Panduan lengkap integrasi sistem.</p>
                <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-2 hover:underline">Baca Sekarang</button>
              </div>
            </div>
            
            <div className="h-px bg-zinc-100" />

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Chat Langsung</h4>
                <p className="text-xs text-zinc-500 mt-1">Waktu tunggu rata-rata: 5 Menit.</p>
                <button className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-2 hover:underline">Mulai Chat</button>
              </div>
            </div>

            <div className="h-px bg-zinc-100" />

            {/* TOMBOL UNTUK MEMBUKA MODAL TIKET */}
            <button 
              onClick={() => setIsTicketModalOpen(true)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900 text-white rounded-2xl text-sm font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 active:scale-95"
            >
              <Mail size={18} /> Kirim Tiket Email
            </button>
          </div>
        </div>

      </div>

      {/* 5. MODAL KIRIM TIKET DUKUNGAN */}
      {isTicketModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsTicketModalOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 overflow-hidden">
            <div className="px-8 pt-8 pb-6 flex justify-between items-center border-b border-zinc-50">
              <div>
                <h3 className="text-xl font-bold text-zinc-900">Kirim Tiket Bantuan</h3>
                <p className="text-xs text-zinc-500 font-medium">Tim kami akan merespons dalam waktu 1x24 jam.</p>
              </div>
              <button 
                onClick={() => setIsTicketModalOpen(false)}
                className="p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form className="p-8 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Subjek Masalah</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Error saat integrasi API"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Kategori Kendala</label>
                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all cursor-pointer">
                  <option value="tech">Masalah Teknis</option>
                  <option value="billing">Penagihan & Langganan</option>
                  <option value="feature">Permintaan Fitur</option>
                  <option value="account">Akses Akun</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Detail Masalah</label>
                <textarea 
                  rows={4}
                  placeholder="Jelaskan secara detail kendala yang Anda alami..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all resize-none" 
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-amber-700 font-medium leading-relaxed">
                  Harap lampirkan ID Project jika masalah terkait dengan alur kerja tertentu untuk mempercepat proses investigasi.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsTicketModalOpen(false)}
                  className="flex-1 py-3.5 bg-zinc-50 text-zinc-600 rounded-2xl text-xs font-bold hover:bg-zinc-100 transition-all"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3.5 bg-indigo-600 text-white rounded-2xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                >
                  <Send size={14} /> Kirim Tiket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default HelpCenter;