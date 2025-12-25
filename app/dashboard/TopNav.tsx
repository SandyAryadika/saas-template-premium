"use client";

import React from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

interface TopNavProps {
  activeTab: string;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const TopNav = ({ activeTab, isMobileOpen, setIsMobileOpen }: TopNavProps) => {
  return (
    <header className="sticky top-0 z-30 flex flex-col md:flex-row justify-between items-start md:items-center p-4 lg:p-8 bg-white/80 backdrop-blur-md border-b border-zinc-200 gap-4">
      
      {/* BAGIAN KIRI: Judul & Menu Hamburger */}
      <div className="flex items-center gap-4">
        {/* Tombol Hamburger: Muncul di mobile, berubah ikon saat dibuka */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 shadow-sm hover:bg-zinc-50 transition-all active:scale-95"
          aria-label={isMobileOpen ? "Tutup Menu" : "Buka Menu"}
        >
          {isMobileOpen ? (
            <X size={20} className="animate-in spin-in-90 duration-300" />
          ) : (
            <Menu size={20} className="animate-in zoom-in duration-300" />
          )}
        </button>
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {activeTab}
          </h1>
          {/* Breadcrumb disembunyikan di layar sangat kecil */}
          <p className="text-sm text-zinc-500 font-medium italic hidden sm:block">
            Dashboard / {activeTab}
          </p>
        </div>
      </div>
      
      {/* BAGIAN KANAN: Search, Notifikasi, & Profil */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        
        {/* Input Pencarian: Responsif */}
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari data..." 
            className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 shadow-sm transition-all" 
          />
        </div>

        {/* Tombol Notifikasi dengan Indikator Dot */}
        <button className="relative p-2.5 text-zinc-400 hover:text-zinc-900 bg-white border border-zinc-200 rounded-2xl transition shadow-sm group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Profil Pengguna */}
        <div className="w-10 h-10 rounded-2xl bg-zinc-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-600/20 transition-all shrink-0">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </header>
  );
};

export default TopNav;