"use client";

import React, { useState } from 'react';
import { 
  Bell, Check, Trash2, Mail, 
  UserPlus, CreditCard, AlertCircle, Info,
  MoreHorizontal, Clock
} from 'lucide-react';

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  // Data Mock untuk Notifikasi
  const notifications = [
    {
      id: 1,
      type: 'team',
      title: 'Anggota Baru Bergabung',
      desc: 'Jessica Pearson telah menerima undangan dan bergabung dengan tim Anda.',
      time: '10 Menit yang lalu',
      isRead: false,
      icon: <UserPlus size={18} className="text-indigo-600" />
    },
    {
      id: 2,
      type: 'billing',
      title: 'Pembayaran Berhasil',
      desc: 'Invoice #INV-001 senilai $49.00 telah berhasil dibayar secara otomatis.',
      time: '2 Jam yang lalu',
      isRead: true,
      icon: <CreditCard size={18} className="text-emerald-600" />
    },
    {
      id: 3,
      type: 'system',
      title: 'Pembaruan Sistem V2.1',
      desc: 'Kami telah menambahkan fitur analitik baru. Lihat perubahannya di dokumentasi.',
      time: '1 Hari yang lalu',
      isRead: false,
      icon: <Info size={18} className="text-blue-600" />
    },
    {
      id: 4,
      type: 'alert',
      title: 'Upaya Login Terdeteksi',
      desc: 'Upaya login baru terdeteksi dari perangkat yang tidak dikenal di Jakarta, ID.',
      time: '2 Hari yang lalu',
      isRead: true,
      icon: <AlertCircle size={18} className="text-amber-600" />
    }
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER: Judul & Aksi Cepat */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 rounded-2xl text-indigo-600">
            <Bell size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Pusat Notifikasi</h2>
            <p className="text-xs text-zinc-500 font-medium">Anda memiliki 2 pesan belum dibaca.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-50 text-zinc-600 rounded-xl text-xs font-bold hover:bg-zinc-100 transition-colors">
            <Check size={14} /> <span className="hidden xs:inline">Tandai Dibaca</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-red-100 text-red-500 rounded-xl text-xs font-bold hover:bg-red-50 transition-colors">
            <Trash2 size={14} /> <span className="hidden xs:inline">Hapus Semua</span>
          </button>
        </div>
      </div>

      {/* 2. FILTER TABS: Responsif dengan scroll horizontal di mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['Semua', 'Belum Dibaca', 'Sistem', 'Tim'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
              activeFilter === filter 
                ? 'bg-zinc-900 text-white border-zinc-900 shadow-lg shadow-zinc-200' 
                : 'bg-white text-zinc-500 border-zinc-200 hover:bg-zinc-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* 3. DAFTAR NOTIFIKASI */}
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`group p-4 md:p-6 rounded-3xl border transition-all flex items-start gap-4 relative overflow-hidden ${
              notif.isRead 
                ? 'bg-white border-zinc-200 shadow-sm opacity-75' 
                : 'bg-white border-indigo-100 shadow-md ring-1 ring-indigo-50/50'
            }`}
          >
            {/* Indikator Status Belum Dibaca */}
            {!notif.isRead && (
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600" />
            )}

            {/* Ikon Notifikasi */}
            <div className="relative flex-shrink-0">
              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                {notif.icon}
              </div>
            </div>

            {/* Konten Teks */}
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex justify-between items-start gap-2">
                <h4 className="text-sm font-bold text-zinc-900 truncate">
                  {notif.title}
                </h4>
                <button className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors shrink-0">
                  <MoreHorizontal size={16} />
                </button>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                {notif.desc}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> {notif.time}
                </span>
                {!notif.isRead && (
                  <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER: Load More Placeholder */}
      <div className="pt-4 text-center">
        <button className="px-6 py-3 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">
          Lihat Notifikasi Lama —&gt;
        </button>
      </div>

    </div>
  );
};

export default Notifications;