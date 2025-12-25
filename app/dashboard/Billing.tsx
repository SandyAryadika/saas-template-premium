"use client";

import React, { useState } from 'react';
import { 
  CreditCard, CheckCircle2, Download, Plus, 
  Zap, ShieldCheck, Clock, FileText, X, 
  Lock, Calendar, User, Eye, Printer, Receipt
} from 'lucide-react';

const Billing = () => {
  // 1. STATE UNTUK MODAL
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const invoices = [
    { id: 'INV-001', date: '01 Des 2024', amount: '$49.00', status: 'Lunas', method: 'VISA •••• 4242', tax: '$4.90', subtotal: '$44.10' },
    { id: 'INV-002', date: '01 Nov 2024', amount: '$49.00', status: 'Lunas', method: 'VISA •••• 4242', tax: '$4.90', subtotal: '$44.10' },
    { id: 'INV-003', date: '01 Okt 2024', amount: '$49.00', status: 'Lunas', method: 'Paypal', tax: '$4.90', subtotal: '$44.10' },
  ];

  const openInvoiceDetail = (inv: any) => {
    setSelectedInvoice(inv);
    setIsInvoiceModalOpen(true);
  };

  return (
    <div className="w-full space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
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
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -z-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2 space-y-6 md:space-y-8">
          
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2 text-zinc-900">
                <CreditCard size={18} className="text-indigo-600" /> Metode Pembayaran
              </h3>
              <button 
                onClick={() => setIsAddCardModalOpen(true)}
                className="text-xs font-bold text-indigo-600 flex items-center gap-1 hover:underline"
              >
                <Plus size={14} /> <span>Tambah Baru</span>
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

          {/* TABLE: RIWAYAT INVOICE */}
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
                <tbody className="divide-y divide-zinc-100 text-sm text-zinc-600">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-zinc-50/30 transition-colors group">
                      <td className="px-6 py-4 font-bold text-zinc-900">{inv.id}</td>
                      <td className="px-6 py-4 font-medium">{inv.date}</td>
                      <td className="px-6 py-4 font-bold text-zinc-900">{inv.amount}</td>
                      <td className="px-6 py-4 flex justify-center gap-2">
                        <button 
                          onClick={() => openInvoiceDetail(inv)}
                          className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all"
                          title="Lihat Detail"
                        >
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all" title="Unduh PDF">
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

        {/* SIDEBAR: LIMITS */}
        <div className="space-y-6">
          <div className="bg-zinc-900 p-8 rounded-[2rem] text-white space-y-6 shadow-xl shadow-zinc-200">
            <h3 className="font-bold flex items-center gap-2 text-indigo-400">
              <Zap size={18} /> Limit Penggunaan
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Penyimpanan', used: '8.4 GB', total: '10 GB', p: 84 },
                { label: 'API Calls', used: '4.2k', total: '5k', p: 84 },
              ].map((limit, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    <span>{limit.label}</span>
                    <span className="text-white">{limit.used} / {limit.total}</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${limit.p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MODAL TAMBAH KARTU */}
      {isAddCardModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={() => setIsAddCardModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-zinc-900">Tambah Kartu Baru</h3>
              <button onClick={() => setIsAddCardModalOpen(false)} className="p-2 bg-zinc-50 rounded-full"><X size={20} /></button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Nomor Kartu" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm" />
                <input type="text" placeholder="CVC" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm" />
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold mt-4 shadow-lg shadow-indigo-100">Simpan Kartu</button>
            </form>
          </div>
        </div>
      )}

      {/* 3. MODAL DETAIL INVOICE (DENGAN TAMPILAN PREMIUM) */}
      {isInvoiceModalOpen && selectedInvoice && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm animate-in fade-in" onClick={() => setIsInvoiceModalOpen(false)} />
          
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 overflow-hidden">
            <div className="bg-indigo-600 p-8 text-white flex justify-between items-start">
              <div className="space-y-1">
                <Receipt size={32} className="mb-2 opacity-80" />
                <h3 className="text-2xl font-bold">Rincian Invoice</h3>
                <p className="text-indigo-100 text-xs font-medium">Transaksi {selectedInvoice.id}</p>
              </div>
              <button onClick={() => setIsInvoiceModalOpen(false)} className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">Pembayaran {selectedInvoice.status}</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{selectedInvoice.date}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-medium">Metode Pembayaran</span>
                  <span className="text-zinc-900 font-bold">{selectedInvoice.method}</span>
                </div>
                <div className="h-px bg-zinc-100" />
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-medium">Subtotal</span>
                  <span className="text-zinc-900 font-bold">{selectedInvoice.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500 font-medium">Pajak (10%)</span>
                  <span className="text-zinc-900 font-bold">{selectedInvoice.tax}</span>
                </div>
                <div className="h-px bg-zinc-100" />
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-zinc-900">Total Akhir</span>
                  <span className="text-2xl font-black text-indigo-600">{selectedInvoice.amount}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-zinc-900 text-white rounded-2xl text-xs font-bold hover:bg-zinc-800 transition-all active:scale-95">
                  <Download size={14} /> Unduh PDF
                </button>
                <button className="p-3.5 bg-zinc-50 text-zinc-400 rounded-2xl hover:text-zinc-900 transition-all">
                  <Printer size={18} />
                </button>
              </div>
            </div>
            
            <div className="bg-zinc-50 p-4 text-center">
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                Terima kasih telah menggunakan SaaSFlow
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Billing;