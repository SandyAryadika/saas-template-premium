"use client";

import React from 'react';
import { 
  Shield, User, Mail, Globe, Camera, Trash2, 
  Bell, Clock, CreditCard, AlertTriangle 
} from 'lucide-react';

const SettingsForm = () => {
  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* 1. Profil Pengguna & Foto */}
      <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-8">
        <div className="flex items-center gap-2 text-zinc-900 border-b border-zinc-100 pb-6">
          <User size={20} className="text-indigo-600" />
          <h3 className="font-bold text-lg">Informasi Profil</h3>
        </div>

        {/* Update Foto Profil */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-zinc-100 border-2 border-white shadow-md overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform hover:scale-110">
              <Camera size={14} />
            </button>
          </div>
          <div className="text-center md:text-left space-y-1">
            <h4 className="font-bold text-zinc-900">Foto Profil Anda</h4>
            <p className="text-xs text-zinc-500">Direkomendasikan JPG, PNG atau GIF (Maks. 2MB)</p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <button className="px-4 py-2 bg-zinc-900 text-white text-xs font-bold rounded-lg hover:bg-zinc-800 transition">Ganti Foto</button>
              <button className="px-4 py-2 bg-white border border-zinc-200 text-red-500 text-xs font-bold rounded-lg hover:bg-red-50 transition flex items-center gap-2">
                <Trash2 size={14} /> Hapus
              </button>
            </div>
          </div>
        </div>

        {/* Input Form Grid (Dibuat 2 Kolom agar memenuhi halaman) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="pt-4">
          <button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-zinc-800 transition shadow-lg shadow-zinc-200">
            Simpan Perubahan
          </button>
        </div>
      </div>

      {/* 2. Preferensi & Notifikasi (Saran Tambahan) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <h3 className="font-bold flex items-center gap-2"><Bell size={18} className="text-indigo-600" /> Notifikasi</h3>
          <div className="space-y-4">
            {[
              { label: 'Email saat ada project baru', active: true },
              { label: 'Update mingguan performa', active: true },
              { label: 'Pemberitahuan keamanan', active: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl">
                <span className="text-xs font-medium text-zinc-700">{item.label}</span>
                <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${item.active ? 'bg-indigo-600' : 'bg-zinc-300'}`}>
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${item.active ? 'right-1' : 'left-1'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <h3 className="font-bold flex items-center gap-2"><Clock size={18} className="text-indigo-600" /> Lokasi & Bahasa</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Zona Waktu</label>
              <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none">
                <option>(GMT+07:00) Jakarta, Bangkok</option>
                <option>(GMT+00:00) London, UTC</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Bahasa Dashboard</label>
              <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none">
                <option>Bahasa Indonesia</option>
                <option>English (US)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Keamanan & Danger Zone */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-zinc-900 pb-4 border-b border-zinc-50">
            <Shield size={18} className="text-indigo-600" />
            <h3 className="font-bold">Keamanan Akun</h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-zinc-900">Ubah Kata Sandi</p>
              <p className="text-xs text-zinc-500">Terakhir diubah 3 bulan yang lalu.</p>
            </div>
            <button className="px-6 py-2 bg-white border border-zinc-200 rounded-xl text-xs font-bold hover:bg-zinc-50 transition">Atur Ulang</button>
          </div>
        </div>

        <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle size={18} />
            <h3 className="font-bold text-sm uppercase tracking-widest">Danger Zone</h3>
          </div>
          <p className="text-xs text-red-700/70 font-medium">Menghapus akun akan menghapus semua data project secara permanen.</p>
          <button className="w-full py-3 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition">Hapus Akun</button>
        </div>
      </div>

    </div>
  );
};

export default SettingsForm;