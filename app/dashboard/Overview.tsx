"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, TrendingUp, DollarSign, Users, 
  Activity, Clock, CheckCircle2, MoreVertical,
  Layout, X, Target, Calendar, Inbox
} from 'lucide-react';
import { toast } from "sonner";

const Overview = () => {
  // 1. STATE LOGIC
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(true); // Set ke false untuk melihat tampilan "Data Kosong"

  // Simulasi Pengambilan Data
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success("Proyek Berhasil Dibuat!", {
      description: "Ruang kerja proyek baru Anda sudah siap digunakan.",
    });
  };

  // 2. KOMPONEN SKELETON (Tampilan saat memuat)
  const OverviewSkeleton = () => (
    <div className="w-full space-y-8 animate-pulse">
      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 h-32" />
        ))}
      </div>
      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-zinc-200 h-[400px]" />
        <div className="bg-white rounded-[2.5rem] border border-zinc-200 h-[400px]" />
      </div>
    </div>
  );

  // 3. KOMPONEN EMPTY STATE (Jika data kosong)
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[2.5rem] border border-dashed border-zinc-300 animate-in fade-in duration-700">
      <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mb-6">
        <Inbox size={40} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">Belum Ada Aktivitas</h3>
      <p className="text-sm text-zinc-500 max-w-sm text-center font-medium leading-relaxed px-6">
        Sepertinya workspace Anda masih baru. Mari mulai dengan membuat proyek pertama Anda.
      </p>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-2xl text-xs font-bold hover:bg-zinc-800 transition-all shadow-lg active:scale-95"
      >
        <Plus size={18} /> Buat Proyek Pertama
      </button>
    </div>
  );

  // LOGIKA RENDERING
  if (isLoading) return <OverviewSkeleton />;
  if (!hasData) return <EmptyState />;

  return (
    <div className="w-full space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 4. STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Total Pendapatan', value: '$12,840', change: '+12%', icon: <DollarSign size={20} />, color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Pengguna Aktif', value: '1,240', change: '+5%', icon: <Users size={20} />, color: 'bg-indigo-50 text-indigo-600' },
          { label: 'Proyek Aktif', value: '12', change: '+2', icon: <Layout size={20} />, color: 'bg-amber-50 text-amber-600' },
          { label: 'Rerata Selesai', value: '94%', change: '+1.2%', icon: <CheckCircle2 size={20} />, color: 'bg-blue-50 text-blue-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 md:p-6 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl border border-transparent group-hover:border-zinc-100 transition-colors ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                <TrendingUp size={12} /> {stat.change}
              </span>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 5. MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Proyek Terbaru */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm flex flex-col">
          <div className="p-6 md:p-8 border-b border-zinc-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-zinc-900 text-lg">Proyek Terbaru</h3>
              <p className="text-xs text-zinc-500 font-medium">Pantau progres pengerjaan tim secara real-time.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-800 transition shadow-lg active:scale-95"
            >
              <Plus size={16} /> Proyek Baru
            </button>
          </div>

          <div className="p-2 flex-1">
            {[
              { name: 'Redesign Landing Page', team: 'Design Team', progress: 75, status: 'In Progress', date: '2 Jam lalu' },
              { name: 'Mobile App API', team: 'Backend Team', progress: 100, status: 'Completed', date: '5 Jam lalu' },
              { name: 'Q4 Marketing Campaign', team: 'Marketing', progress: 30, status: 'In Progress', date: '1 Hari lalu' },
            ].map((project, i) => (
              <div key={i} className="flex items-center justify-between p-4 md:p-6 hover:bg-zinc-50 rounded-2xl transition-colors group">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-zinc-200 shrink-0">
                    <Activity size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-zinc-900 truncate">{project.name}</h4>
                    <p className="text-xs text-zinc-500 font-medium truncate">{project.team} • {project.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-8 shrink-0">
                  <div className="hidden sm:block w-24 md:w-32 space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-zinc-400">
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 h-1 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                  <button className="p-2 text-zinc-400 hover:text-zinc-900"><MoreVertical size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aktivitas Tim */}
        <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm p-6 md:p-8 flex flex-col">
          <h3 className="font-bold text-zinc-900 mb-8 flex items-center gap-2">
            <Activity size={18} className="text-indigo-600" /> Aktivitas Tim
          </h3>
          <div className="space-y-8 relative flex-1 before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-zinc-100">
            {[
              { user: 'Alex', action: 'mengunggah file', target: 'Design_System.fig', time: '10 Menit' },
              { user: 'Sarah', action: 'menyelesaikan', target: 'API Auth Flow', time: '45 Menit' },
              { user: 'Mike', action: 'mengundang', target: 'Jessica Pearson', time: '2 Jam' },
            ].map((activity, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-500 z-10 shrink-0 shadow-sm">
                  {activity.user[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <span className="font-bold text-zinc-900">{activity.user}</span> {activity.action} <span className="font-bold text-indigo-600">{activity.target}</span>
                  </p>
                  <p className="text-[10px] text-zinc-400 font-medium mt-1 flex items-center gap-1">
                    <Clock size={10} /> {activity.time} yang lalu
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 6. MODAL PROYEK BARU */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="px-8 pt-8 pb-6 flex justify-between items-center border-b border-zinc-50">
              <h3 className="text-xl font-bold text-zinc-900">Buat Proyek Baru</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-900"><X size={20} /></button>
            </div>
            <form onSubmit={handleCreateProject} className="p-8 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Nama Proyek</label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                  <input type="text" placeholder="Contoh: Optimasi SEO" className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-600/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Tenggat Waktu</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                  <input type="date" className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-600/20" required />
                </div>
              </div>
              <div className="pt-6 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3.5 bg-zinc-50 text-zinc-600 rounded-2xl text-xs font-bold hover:bg-zinc-100 transition-all">Batal</button>
                <button type="submit" className="flex-1 py-3.5 bg-zinc-900 text-white rounded-2xl text-xs font-bold hover:bg-zinc-800 transition-all shadow-lg">Buat Sekarang</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Overview;