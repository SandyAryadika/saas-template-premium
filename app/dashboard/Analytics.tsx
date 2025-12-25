"use client";

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, TrendingUp, Users, Target, 
  ArrowUpRight, ArrowDownRight, Calendar, 
  Search, Filter, MousePointer2, Inbox
} from 'lucide-react';

const Analytics = () => {
  // 1. STATE UNTUK SIMULASI LOADING & DATA
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. KOMPONEN SKELETON
  const SkeletonCard = () => (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-zinc-100 rounded-2xl" />
        <div className="w-16 h-6 bg-zinc-100 rounded-lg" />
      </div>
      <div className="w-24 h-4 bg-zinc-100 rounded-md mb-2" />
      <div className="w-32 h-8 bg-zinc-100 rounded-md" />
    </div>
  );

  const SkeletonChart = () => (
    <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm animate-pulse">
      <div className="w-48 h-6 bg-zinc-100 rounded-md mb-8" />
      <div className="flex items-end justify-between h-64 gap-2">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-zinc-100 w-full rounded-t-xl" style={{ height: `${Math.random() * 100}%` }} />
        ))}
      </div>
    </div>
  );

  // 3. KOMPONEN EMPTY STATE
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2.5rem] border border-dashed border-zinc-300">
      <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mb-6">
        <Inbox size={40} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">Belum Ada Data Analitik</h3>
      <p className="text-sm text-zinc-500 max-w-sm text-center font-medium leading-relaxed px-6">
        Kami belum memiliki cukup data untuk ditampilkan. Mulai buat proyek atau undang tim untuk melihat perkembangan performa Anda.
      </p>
      <button className="mt-8 px-8 py-3 bg-zinc-900 text-white rounded-2xl text-xs font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200">
        Pelajari Cara Kerja
      </button>
    </div>
  );

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonCard /> <SkeletonCard /> <SkeletonCard />
        </div>
        <SkeletonChart />
      </div>
    );
  }

  if (!hasData) {
    return <EmptyState />;
  }

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 4. REAL CONTENT: STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Klik', value: '42.8k', change: '+14%', icon: <MousePointer2 size={22} />, up: true },
          { label: 'Konversi', value: '3.2%', change: '-2%', icon: <Target size={22} />, up: false },
          { label: 'Retensi Pengguna', value: '78%', change: '+5%', icon: <Users size={22} />, up: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo-600 transition-all">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {stat.change}
              </div>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-zinc-900 tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 5. REAL CONTENT: BAR CHART */}
      <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-200 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h3 className="font-bold text-zinc-900 text-lg">Performa Traffic</h3>
            <p className="text-xs text-zinc-500 font-medium italic">Data akumulasi dalam 12 bulan terakhir.</p>
          </div>
          <div className="flex items-center gap-2 p-1.5 bg-zinc-50 border border-zinc-100 rounded-2xl">
            <button className="px-4 py-2 bg-white shadow-sm border border-zinc-200 rounded-xl text-[10px] font-bold uppercase tracking-tight">Bulanan</button>
            <button className="px-4 py-2 text-zinc-400 text-[10px] font-bold uppercase tracking-tight">Mingguan</button>
          </div>
        </div>

        <div className="flex items-end justify-between h-64 gap-2 md:gap-4 px-2">
          {[60, 45, 80, 50, 90, 65, 40, 85, 55, 75, 95, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer relative">
              <div className="absolute -top-10 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                {h}k
              </div>
              <div 
                className="w-full bg-zinc-100 rounded-t-xl group-hover:bg-indigo-600 transition-all duration-500 relative overflow-hidden" 
                style={{ height: `${h}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
              <span className="text-[10px] font-bold text-zinc-400 mt-4 group-hover:text-zinc-900 transition-colors">
                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Analytics;