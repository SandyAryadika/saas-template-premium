"use client";

import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut, 
  HelpCircle, 
  ChevronsUpDown, 
  Zap,
  CreditCard,
  Bell
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { name: 'Ringkasan', icon: <LayoutDashboard size={18} />, badge: null },
    { name: 'Analitik', icon: <BarChart3 size={18} />, badge: 'New' },
    { name: 'Notifikasi', icon: <Bell size={18} />, badge: '2' },
    { name: 'Tim Kami', icon: <Users size={18} />, badge: null },
    { name: 'Billing', icon: <CreditCard size={18} />, badge: null },
    { name: 'Pengaturan', icon: <Settings size={18} />, badge: null },
  ];

  return (
    /* Container Utama: Hilangkan overflow-y-auto di sini agar container tidak scroll secara keseluruhan */
    <aside className="hidden lg:flex w-72 flex-col bg-white border-r border-zinc-200 fixed h-full z-20 font-sans">
      
      {/* 1. HEADER: Workspace Switcher (Tetap di Atas) */}
      <div className="p-6 pb-2 flex-shrink-0">
        <div className="flex items-center justify-between p-3 mb-4 bg-zinc-50 border border-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-100 transition-all group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">
              S
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-900 leading-none mb-1">SaaSFlow Studio</p>
              <p className="text-[10px] text-zinc-500 font-medium">Paket Pro — 12 Tim</p>
            </div>
          </div>
          <ChevronsUpDown size={14} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </div>
        <p className="px-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
          Menu Utama
        </p>
      </div>

      {/* 2. BODY: Main Navigation (Hanya bagian ini yang bisa di-scroll) */}
      <nav className="flex-1 overflow-y-auto px-6 space-y-1.5 scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
        {menuItems.map((item) => (
          <button 
            key={item.name} 
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all group ${
              activeTab === item.name 
                ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200' 
                : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon} 
              <span>{item.name}</span>
            </div>
            
            {item.badge && (
              <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase ${
                activeTab === item.name 
                  ? 'bg-indigo-500 text-white' 
                  : 'bg-indigo-50 text-indigo-600'
              }`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* 3. FOOTER: Support & Account (Tetap di Bawah) */}
      <div className="flex-shrink-0 p-6 border-t border-zinc-100 space-y-4 bg-white">
        {/* Support Button */}
        <button 
          onClick={() => setActiveTab('Pusat Bantuan')}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-all rounded-xl ${
            activeTab === 'Pusat Bantuan' 
              ? 'bg-zinc-900 text-white shadow-lg' 
              : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900'
          }`}
        >
          <HelpCircle size={18} />
          <span>Pusat Bantuan</span>
        </button>

        {/* Upgrade Card */}
        <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100/50">
          <p className="text-[11px] font-bold text-indigo-600 uppercase mb-2 flex items-center gap-2">
            <Zap size={12} fill="currentColor" /> 
            <span>Upgrade Tersedia</span>
          </p>
          <p className="text-xs text-indigo-900/70 font-medium leading-relaxed mb-3">
            Dapatkan fitur analitik AI lebih mendalam.
          </p>
          <Link 
            href="/#harga" 
            className="w-full py-2.5 bg-indigo-600 text-white text-[10px] font-bold rounded-lg hover:bg-indigo-700 transition flex items-center justify-center shadow-sm"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Logout Link */}
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={18} />
          <span>Keluar</span>
        </Link>
      </div>

    </aside>
  );
};

export default Sidebar;