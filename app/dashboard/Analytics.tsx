"use client";

import React from 'react';
import { 
  BarChart3, TrendingUp, Filter, Download, 
  ArrowUpRight, Info, MousePointer2, Clock, Globe 
} from 'lucide-react';

const Analytics = () => {
  return (
    <div className="w-full space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER & ACTIONS: Responsif bertumpuk di mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm shrink-0">
            <BarChart3 size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Analitik Performa</h2>
            <p className="text-xs text-zinc-500 font-medium">Data diperbarui secara real-time setiap 5 menit.</p>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all">
            <Filter size={16} /> <span className="hidden xs:inline">Rentang Waktu</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
            <Download size={16} /> <span className="hidden xs:inline">Ekspor Data</span>
          </button>
        </div>
      </div>

      {/* 2. KPI STATS GRID: 1 kolom di HP, 2 kolom di Tablet, 4 kolom di Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Avg. Session', value: '4m 32s', icon: <Clock size={16} />, change: '+0.4s' },
          { label: 'Bounce Rate', value: '24.2%', icon: <MousePointer2 size={16} />, change: '-2.1%' },
          { label: 'Total Visits', value: '48.5k', icon: <TrendingUp size={16} />, change: '+12.5%' },
          { label: 'Global Rank', value: '#1,240', icon: <Globe size={16} />, change: '+12' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:border-indigo-100 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-zinc-50 rounded-lg text-zinc-400 border border-zinc-100">{stat.icon}</div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{stat.change}</span>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h4 className="text-xl font-bold text-zinc-900">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* 3. MAIN CHARTS: Layout 2/3 (Grafik) dan 1/3 (Saluran) di Desktop, bertumpuk di Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Grafik Kunjungan - Utama */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
            <div>
              <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                Kunjungan Unik <Info size={14} className="text-zinc-300" />
              </h3>
              <p className="text-xs text-zinc-400 font-medium">Statistik aktivitas 7 hari terakhir</p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400"><span className="w-2 h-2 rounded-full bg-indigo-600" /> Desktop</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400"><span className="w-2 h-2 rounded-full bg-zinc-200" /> Mobile</span>
            </div>
          </div>
          
          {/* Container Scroll untuk Grafik di HP sangat kecil */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="min-w-[450px]">
              <div className="h-64 md:h-72 bg-zinc-50/50 rounded-2xl flex items-end justify-between p-6 md:p-8 gap-3 md:gap-4 border border-zinc-100">
                {[40, 65, 35, 90, 55, 80, 95].map((h, i) => (
                  <div key={i} className="group relative w-full h-full flex items-end gap-1">
                    {/* Mobile Bar */}
                    <div className="bg-zinc-200 w-full rounded-t-md transition-all h-[30%]" />
                    {/* Desktop Bar */}
                    <div className="bg-indigo-600 w-full rounded-t-md transition-all duration-300 group-hover:bg-indigo-400 group-hover:scale-x-110" style={{ height: `${h}%` }}>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl z-10 font-bold border border-zinc-700">
                        {h}k Visits
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-6 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] px-4">
                <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sumber Konversi - Samping */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm flex flex-col">
          <div className="mb-8 md:mb-10">
            <h3 className="font-bold text-zinc-900">Saluran Konversi</h3>
            <p className="text-xs text-zinc-400 font-medium">Distribusi trafik berdasarkan sumber</p>
          </div>
          
          <div className="flex-1 space-y-6 md:space-y-8">
            {[
              { source: 'Pencarian Organik', value: 54, color: 'bg-indigo-600', trend: '+2%' },
              { source: 'Media Sosial', value: 32, color: 'bg-zinc-900', trend: '+8%' },
              { source: 'Rujukan Langsung', value: 14, color: 'bg-zinc-300', trend: '-1%' }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-600">{item.source}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-900">{item.value}%</span>
                    <span className={`text-[9px] ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-amber-500'}`}>{item.trend}</span>
                  </div>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
                  <div className={`${item.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full py-3.5 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
            Laporan Lengkap <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;