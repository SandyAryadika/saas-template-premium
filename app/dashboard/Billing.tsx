"use client";

import React from 'react';
import { 
  CreditCard, CheckCircle2, Download, Plus, 
  Zap, ShieldCheck, Clock, FileText 
} from 'lucide-react';

const Billing = () => {
  const invoices = [
    { id: 'INV-001', date: '01 Des 2024', amount: '$49.00', status: 'Lunas' },
    { id: 'INV-002', date: '01 Nov 2024', amount: '$49.00', status: 'Lunas' },
    { id: 'INV-003', date: '01 Okt 2024', amount: '$49.00', status: 'Lunas' },
  ];

  return (
    <div className="w-full space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. PAKET AKTIF (Hero Section) */}
      <div className="bg-indigo-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white relative overflow-hidden shadow-xl shadow-indigo-100">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
              Paket Saat Ini
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Enterprise Pro</h2>
            <p className="text-indigo-100 text-sm max-w-sm mx-auto lg:mx-0">
              Tagihan berikutnya pada **01 Jan 2025** senilai **$49.00/bln**.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none px-8 py-3.5 bg-white text-indigo-600 rounded-2xl text-sm font-bold hover:bg-zinc-50 transition-all shadow-lg active:scale-95">
              Ganti Paket
            </button>
            <button className="flex-1 lg:flex-none px-8 py-3.5 bg-indigo-500/50 text-white border border-indigo-400/50 rounded-2xl text-sm font-bold hover:bg-indigo-500 transition-all active:scale-95">
              Berhenti
            </button>
          </div>
        </div>
        {/* Efek Dekorasi Visual */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-0" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-400/20 blur-[60px] -z-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* 2. KOLOM UTAMA (Metode Pembayaran & Invoice) */}
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          
          {/* Metode Pembayaran */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2 text-zinc-900">
                <CreditCard size={18} className="text-indigo-600" /> Metode Pembayaran
              </h3>
              <button className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline">
                <Plus size={14} /> <span className="hidden sm:inline">Tambah Baru</span>
              </button>
            </div>
            
            <div className="p-5 border border-zinc-100 bg-zinc-50/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-12 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-[10px] font-bold italic shrink-0">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">•••• •••• •••• 4242</p>
                  <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Expires 12/26</p>
                </div>
              </div>
              <span className="w-full sm:w-auto text-center text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
                Kartu Utama
              </span>
            </div>
          </div>

          {/* Tabel Riwayat Invoice */}
          <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-zinc-100 flex items-center gap-2">
              <FileText size={18} className="text-indigo-600" />
              <h3 className="font-bold text-zinc-900">Riwayat Penagihan</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead className="bg-zinc-50/50 border-b border-zinc-100">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Nomor</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Tanggal</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Total</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-sm">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-zinc-50/30 transition-colors group">
                      <td className="px-6 py-4 font-bold text-zinc-900">{inv.id}</td>
                      <td className="px-6 py-4 text-zinc-500 font-medium">{inv.date}</td>
                      <td className="px-6 py-4 font-bold text-zinc-900">{inv.amount}</td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2.5 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                          <Download size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3. SIDEBAR (Limit Penggunaan & Keamanan) */}
        <div className="space-y-6 md:space-y-8">
          {/* Progress Limits */}
          <div className="bg-zinc-900 p-8 rounded-[2rem] text-white space-y-6 shadow-xl shadow-zinc-200">
            <h3 className="font-bold flex items-center gap-2 text-indigo-400">
              <Zap size={18} /> Limit Penggunaan
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Penyimpanan', used: '8.4 GB', total: '10 GB', p: 84 },
                { label: 'Anggota Tim', used: '12', total: '20', p: 60 },
                { label: 'API Calls', used: '4.2k', total: '5k', p: 84 },
              ].map((limit, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>{limit.label}</span>
                    <span className="text-white">{limit.used} / {limit.total}</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${limit.p}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-zinc-500 leading-relaxed italic border-t border-zinc-800 pt-5 flex items-center gap-2">
              <Clock size={12} /> Limit akan direset dalam 8 hari lagi.
            </p>
          </div>
          
          {/* Trust Badge */}
          <div className="bg-white p-6 rounded-3xl border border-dashed border-zinc-200 flex items-center justify-center gap-3">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-tight">
              Pembayaran Terenkripsi & Aman
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Billing;