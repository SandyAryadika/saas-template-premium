"use client";

import React from 'react';
import { 
  Plus, TrendingUp, DollarSign, Users, 
  Activity, Clock, CheckCircle2, MoreVertical,
  ArrowUpRight, Layout
} from 'lucide-react';

const Overview = () => {
  // Data Statistik dengan tren mikro
  const stats = [
    { label: 'Total Revenue', value: '$12,840', change: '+12%', icon: <DollarSign size={20} />, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Active Users', value: '1,240', change: '+5%', icon: <Users size={20} />, color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Project Active', value: '12', change: '+2', icon: <Layout size={20} />, color: 'bg-amber-50 text-amber-600' },
    { label: 'Avg. Completion', value: '94%', change: '+1.2%', icon: <CheckCircle2 size={20} />, color: 'bg-blue-50 text-blue-600' },
  ];

  // Data Proyek Terbaru (Visualisasi Data Nyata)
  const recentProjects = [
    { name: 'Redesign Landing Page', team: 'Design Team', progress: 75, status: 'In Progress', date: '2 Jam yang lalu' },
    { name: 'Mobile App API', team: 'Backend Team', progress: 100, status: 'Completed', date: '5 Jam yang lalu' },
    { name: 'Q4 Marketing Campaign', team: 'Marketing', progress: 30, status: 'In Progress', date: '1 Hari yang lalu' },
  ];

  return (
    <div className="w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Stats Grid - 4 Kolom untuk mengisi lebar layar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl border border-transparent group-hover:border-zinc-100 transition-colors ${stat.color}`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg">
                <TrendingUp size={12} /> {stat.change}
              </span>
            </div>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-zinc-900">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* 2. Main Content Area: Projects & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Project List (2/3 Width) */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-200 shadow-sm flex flex-col">
          <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-zinc-900 text-lg">Proyek Terbaru</h3>
              <p className="text-xs text-zinc-500 font-medium">Pantau progres pengerjaan tim Anda secara real-time.</p>
            </div>
            <button className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-800 transition shadow-lg shadow-zinc-200">
              <Plus size={16} /> Proyek Baru
            </button>
          </div>

          <div className="p-2">
            {recentProjects.map((project, i) => (
              <div key={i} className="flex items-center justify-between p-6 hover:bg-zinc-50 rounded-2xl transition-colors group">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-zinc-200">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{project.name}</h4>
                    <p className="text-xs text-zinc-500 font-medium">{project.team} • {project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden md:block w-32 space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-zinc-400">
                      <span>Progres</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                  <span className={`hidden sm:block text-[10px] font-bold px-3 py-1 rounded-full border ${
                    project.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                  }`}>
                    {project.status}
                  </span>
                  <button className="p-2 text-zinc-400 hover:text-zinc-900"><MoreVertical size={16} /></button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 mt-auto border-t border-zinc-50 text-center">
             <button className="text-xs font-bold text-indigo-600 hover:underline">Lihat Semua Proyek —&gt;</button>
          </div>
        </div>

        {/* Activity Feed (1/3 Width) */}
        <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm p-8">
          <h3 className="font-bold text-zinc-900 mb-8">Aktivitas Tim</h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-zinc-100 before:via-zinc-100 before:to-transparent">
            {[
              { user: 'Alex', action: 'mengunggah file baru', target: 'Design_System.fig', time: '10 Menit' },
              { user: 'Sarah', action: 'menyelesaikan tugas', target: 'API Auth Flow', time: '45 Menit' },
              { user: 'Mike', action: 'mengundang anggota', target: 'Jessica Pearson', time: '2 Jam' },
            ].map((activity, i) => (
              <div key={i} className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center text-[10px] font-bold text-zinc-500 z-10 shrink-0">
                  {activity.user[0]}
                </div>
                <div>
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
          <button className="w-full mt-10 py-3 bg-zinc-50 rounded-2xl text-[11px] font-bold text-zinc-500 hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2">
            Lihat Laporan Aktivitas <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Overview;