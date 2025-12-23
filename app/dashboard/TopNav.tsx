"use client";

import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

// Pembaruan Interface untuk mendukung fitur responsif
interface TopNavProps {
  activeTab: string;
  onOpenSidebar: () => void; // Prop baru untuk membuka sidebar di mobile
}

const TopNav = ({ activeTab, onOpenSidebar }: TopNavProps) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      
      {/* BAGIAN KIRI: Judul & Menu Hamburger */}
      <div className="flex items-center gap-4">
        {/* Tombol Menu (Hamburger): Hanya muncul di layar Mobile (lg:hidden) */}
        <button 
          onClick={onOpenSidebar}
          className="lg:hidden p-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-600 shadow-sm hover:bg-zinc-50 transition-colors"
          aria-label="Buka Menu"
        >
          <Menu size={20} />
        </button>
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            {activeTab}
          </h1>
          {/* Breadcrumb disembunyikan di layar sangat kecil agar tidak sempit */}
          <p className="text-sm text-zinc-500 font-medium italic hidden sm:block">
            Dashboard / {activeTab}
          </p>
        </div>
      </div>
      
      {/* BAGIAN KANAN: Search, Notifikasi, & Profil */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        
        {/* Input Pencarian: Responsif (w-full di mobile, w-64 di desktop) */}
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari data..." 
            className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 shadow-sm transition-all" 
          />
        </div>

        {/* Tombol Notifikasi */}
        <button className="p-2.5 text-zinc-400 hover:text-zinc-900 bg-white border border-zinc-200 rounded-2xl transition shadow-sm group">
          <Bell size={20} className="group-hover:rotate-12 transition-transform" />
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