"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  ShieldCheck, X, Mail, User, 
  Users, UserPlus, Calendar
} from 'lucide-react';
import { toast } from "sonner";

const TeamTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const members = [
    { name: 'Alex Johnson', email: 'alex@flow.com', role: 'Designer', status: 'Aktif', joined: '12 Jan 2024' },
    { name: 'Sarah Chen', email: 'sarah@flow.com', role: 'Developer', status: 'Sibuk', joined: '05 Feb 2024' },
    { name: 'Mike Ross', email: 'mike@flow.com', role: 'Manager', status: 'Aktif', joined: '20 Feb 2024' },
    { name: 'Jessica Pearson', email: 'jessica@flow.com', role: 'CEO', status: 'Aktif', joined: '01 Jan 2024' },
  ];

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success("Undangan terkirim!");
  };

  if (isLoading) return <div className="p-8 text-center text-zinc-400 font-bold animate-pulse">Memuat data tim...</div>;
  if (!hasData) return null; // Gunakan EmptyState Anda di sini

  return (
    <div className="w-full space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER ACTIONS - Sekarang Lebih Fleksibel di Mobile */}
      <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-4 bg-white p-4 md:p-6 rounded-[2rem] border border-zinc-200 shadow-sm">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input 
            type="text" 
            placeholder="Cari anggota tim..." 
            className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" 
          />
        </div>
        
        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white border border-zinc-200 rounded-2xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all active:scale-95">
            <Filter size={16} /> <span>Filter</span>
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-[2] lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
          >
            <Plus size={18} /> <span>Undang</span>
          </button>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm overflow-hidden">
        
        {/* A. MOBILE VIEW (Card List) - Muncul di layar < 768px */}
        <div className="md:hidden divide-y divide-zinc-100">
          {members.map((user, i) => (
            <div key={i} className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-black text-zinc-900">{user.name}</p>
                    <p className="text-[11px] text-zinc-500 font-medium">{user.email}</p>
                  </div>
                </div>
                <button className="p-2 text-zinc-400 hover:bg-zinc-50 rounded-xl">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-zinc-50 p-3 rounded-2xl">
                  <p className="text-[9px] uppercase font-bold text-zinc-400 mb-1 tracking-wider">Peran</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700">
                    <ShieldCheck size={12} className="text-indigo-500" /> {user.role}
                  </div>
                </div>
                <div className="bg-zinc-50 p-3 rounded-2xl">
                  <p className="text-[9px] uppercase font-bold text-zinc-400 mb-1 tracking-wider">Status</p>
                  <span className={`inline-block text-[10px] font-bold ${
                    user.status === 'Aktif' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    • {user.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* B. DESKTOP VIEW (Table) - Muncul di layar >= 768px */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100 text-zinc-400">
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest">Anggota Tim</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest">Peran</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest">Bergabung</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {members.map((user, i) => (
                <tr key={i} className="hover:bg-zinc-50/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-black text-zinc-900">{user.name}</p>
                        <p className="text-xs text-zinc-500 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-sm text-zinc-700 font-bold">
                      <ShieldCheck size={14} className="text-indigo-500" /> {user.role}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-xs text-zinc-500 font-bold">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> {user.joined}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${
                      user.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. MODAL (Responsive Padding) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-zinc-900/60 backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="p-8">
               {/* Konten Modal Anda Disini */}
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-black text-zinc-900">Undang Tim</h3>
                 <button onClick={() => setIsModalOpen(false)} className="p-2 bg-zinc-50 rounded-full hover:rotate-90 transition-transform">
                   <X size={20} />
                 </button>
               </div>
               <form onSubmit={handleInvite} className="space-y-4">
                  <input type="email" placeholder="Email rekan kerja" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium" />
                  <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-indigo-100">Kirim Undangan Sekarang</button>
               </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamTable;