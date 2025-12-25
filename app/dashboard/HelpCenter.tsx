"use client";

import React, { useState } from 'react';
import { 
  Search, BookOpen, MessageSquare, Mail, 
  LifeBuoy, ChevronRight, X, Send, 
  FileQuestion, MessageCircle, AlertCircle
} from 'lucide-react';

const HelpCenter = () => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { id: 1, q: "Bagaimana cara menghubungkan API?", a: "Anda dapat menemukan kunci API di halaman Pengaturan > Developer." },
    { id: 2, q: "Apakah saya bisa membatalkan langganan?", a: "Ya, Anda dapat membatalkan langganan kapan saja melalui menu Billing." },
    { id: 3, q: "Cara mengundang anggota tim?", a: "Buka menu 'Tim Kami', klik tombol 'Undang Anggota'." }
  ];

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HERO SECTION */}
      <div className="bg-indigo-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 space-y-6">
          <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight leading-tight">Ada yang bisa kami bantu?</h2>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari solusi..." 
              className="w-full pl-11 pr-6 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-2xl" 
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* 2. FAQ SECTION */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <FileQuestion size={20} className="text-indigo-600" />
            <h3 className="font-bold text-xl text-zinc-900">Pertanyaan Populer</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-zinc-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full p-5 md:p-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-sm text-zinc-800 group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                  <ChevronRight size={18} className={`text-zinc-400 transition-transform ${activeFaq === faq.id ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === faq.id && (
                  <div className="px-5 md:px-6 pb-6 text-sm text-zinc-500 leading-relaxed animate-in slide-in-from-top-2 italic">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. SUPPORT OPTIONS */}
        <div className="space-y-6">
          <h3 className="font-bold text-xl text-zinc-900 mb-2 flex items-center gap-2">
            <LifeBuoy size={20} className="text-indigo-600" /> Kontak Kami
          </h3>
          <div className="bg-white p-6 rounded-[2rem] border border-zinc-200 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><BookOpen size={20} /></div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Dokumentasi API</h4>
                <button className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">Baca Sekarang</button>
              </div>
            </div>
            <div className="h-px bg-zinc-100" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600"><MessageCircle size={20} /></div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Chat Langsung</h4>
                <button className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Mulai Chat</button>
              </div>
            </div>
            <button 
              onClick={() => setIsTicketModalOpen(true)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900 text-white rounded-2xl text-sm font-bold hover:bg-zinc-800 transition-all active:scale-95"
            >
              <Mail size={18} /> Kirim Tiket Email
            </button>
          </div>
        </div>
      </div>

      {/* 4. MODAL KIRIM TIKET DUKUNGAN (PERBAIKAN MOBILE) */}
      {isTicketModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsTicketModalOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-lg bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-zinc-100 animate-in zoom-in-95 duration-300 my-auto overflow-hidden">
            
            {/* Scrollable Container */}
            <div className="max-h-[85vh] overflow-y-auto scrollbar-hide">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/80 backdrop-blur-md px-6 md:px-8 pt-8 pb-4 flex justify-between items-center border-b border-zinc-50 z-10">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900">Kirim Tiket Bantuan</h3>
                  <p className="text-[10px] md:text-xs text-zinc-500 font-medium">Respons dalam waktu 1x24 jam.</p>
                </div>
                <button 
                  onClick={() => setIsTicketModalOpen(false)}
                  className="p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <form className="p-6 md:p-8 space-y-4 md:space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Subjek Masalah</label>
                  <input type="text" placeholder="Contoh: Error integrasi" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl md:rounded-2xl text-sm focus:ring-2 focus:ring-indigo-600/20 outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Kategori</label>
                  <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl md:rounded-2xl text-sm outline-none">
                    <option value="tech">Masalah Teknis</option>
                    <option value="billing">Penagihan</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Detail Masalah</label>
                  <textarea rows={3} placeholder="Jelaskan kendala..." className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl md:rounded-2xl text-sm outline-none resize-none" />
                </div>

                <div className="flex items-start gap-3 p-3 md:p-4 bg-amber-50 rounded-xl md:rounded-2xl border border-amber-100">
                  <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[9px] md:text-[10px] text-amber-700 font-medium leading-relaxed">
                    Harap lampirkan ID Project untuk mempercepat investigasi.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex gap-3">
                  <button type="button" onClick={() => setIsTicketModalOpen(false)} className="flex-1 py-3 bg-zinc-50 text-zinc-600 rounded-xl md:rounded-2xl text-xs font-bold hover:bg-zinc-100">
                    Batal
                  </button>
                  <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl md:rounded-2xl text-xs font-bold shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                    <Send size={14} /> Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default HelpCenter;