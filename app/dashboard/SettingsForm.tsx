"use client";

import React from 'react';
import { 
  Shield, User, Mail, Globe, Camera, Trash2, 
  Bell, Clock, CreditCard, AlertTriangle 
} from 'lucide-react';

const SettingsForm = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. PROFIL PENGGUNA & FOTO (Layout Adaptif) */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-zinc-900 border-b border-zinc-100 pb-6">
          <User size={20} className="text-indigo-600" />
          <h3 className="font-bold text-lg">Informasi Profil</h3>
        </div>

        {/* Update Foto Profil: Baris di desktop, kolom di mobile */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="relative group shrink-0">
            <div className="w-24 h-24 rounded-full bg-zinc-100 border-2 border-white shadow-md overflow-hidden ring-4 ring-zinc-50">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform hover:scale-110 active:scale-90">
              <Camera size={14} />
            </button>
          </div>
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-bold text-zinc-900 text-sm md:text-base">Foto Profil Anda</h4>
            <p className="text-xs text-zinc-500 font-medium italic">Direkomendasikan JPG atau PNG (Maks. 2MB)</p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <button className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-xl hover:bg-zinc-800 transition-all active:scale-95">
                Ganti Foto
              </button>
              <button className="px-4 py-2 bg-white border border-zinc-200 text-red-500 text-xs font-bold rounded-xl hover:bg-red-50 transition-all active:scale-95 flex items-center gap-2">
                <Trash2 size={14} /> Hapus
              </button>
            </div>
          </div>
        </div>

        {/* Input Form Grid: 1 kolom di HP, 2 kolom di Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Nama Lengkap</label>
            <input type="text" defaultValue="Felix Ardiansyah" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Email Publik</label>
            <input type="email" defaultValue="felix@saasflow.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Nama Instansi</label>
            <input type="text" defaultValue="SaaSFlow Creative" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Situs Web</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input type="text" defaultValue="https://saasflow.com" className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" />
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-zinc-50">
          <button className="w-full sm:w-auto bg-zinc-900 text-white px-10 py-3.5 rounded-full text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 active:scale-95">
            Simpan Perubahan
          </button>
        </div>
      </div>

      {/* 2. PREFERENSI & LOKASI (Stacked di Mobile) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Notifikasi Email */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <h3 className="font-bold flex items-center gap-2"><Bell size={18} className="text-indigo-600" /> Notifikasi</h3>
          <div className="space-y-4">
            {[
              { label: 'Email saat ada project baru', active: true },
              { label: 'Update mingguan performa', active: true },
              { label: 'Pemberitahuan keamanan', active: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3.5 bg-zinc-50/50 rounded-2xl border border-zinc-100/50">
                <span className="text-xs font-bold text-zinc-600">{item.label}</span>
                <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-indigo-600' : 'bg-zinc-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lokasi & Bahasa */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <h3 className="font-bold flex items-center gap-2"><Clock size={18} className="text-indigo-600" /> Lokasi & Bahasa</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Zona Waktu</label>
              <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all cursor-pointer">
                <option>(GMT+07:00) Jakarta, Bangkok</option>
                <option>(GMT+00:00) London, UTC</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Bahasa Dashboard</label>
              <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all cursor-pointer">
                <option>Bahasa Indonesia</option>
                <option>English (US)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 3. KEAMANAN & DANGER ZONE */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Ubah Password */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-zinc-900 border-b border-zinc-50 pb-4">
            <Shield size={18} className="text-indigo-600" />
            <h3 className="font-bold">Keamanan Akun</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
            <div className="text-center sm:text-left">
              <p className="text-sm font-bold text-zinc-900">Ubah Kata Sandi</p>
              <p className="text-xs text-zinc-500 font-medium">Terakhir diperbarui 3 bulan yang lalu.</p>
            </div>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs font-extrabold hover:bg-zinc-50 transition-all shadow-sm active:scale-95">
              Atur Ulang
            </button>
          </div>
        </div>

        {/* Hapus Akun */}
        <div className="bg-red-50 p-6 md:p-8 rounded-3xl border border-red-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle size={18} />
            <h3 className="font-bold text-sm uppercase tracking-widest">Danger Zone</h3>
          </div>
          <p className="text-xs text-red-700/80 font-bold leading-relaxed">
            Tindakan ini permanen. Seluruh data project Anda akan dihapus selamanya.
          </p>
          <button className="w-full py-3.5 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-100 active:scale-95">
            Hapus Akun
          </button>
        </div>
      </div>

    </div>
  );
};

export default SettingsForm;