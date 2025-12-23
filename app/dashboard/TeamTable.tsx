"use client";

import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  ShieldCheck, X, Mail, User, Briefcase,
  Users, UserPlus
} from 'lucide-react';
import { toast } from "sonner";

const TeamTable = () => {
  // 1. STATE LOGIC
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(true); // Ubah ke false untuk tes tampilan kosong

  // Simulasi Loading Data
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
    toast.success("Undangan terkirim!", {
      description: "Email undangan telah dikirim ke calon anggota tim.",
    });
  };

  // 2. KOMPONEN SKELETON (Loading State)
  const TableSkeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-16 bg-white border border-zinc-200 rounded-3xl" />
      <div className="bg-white rounded-[2rem] border border-zinc-200 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-full" />
              <div className="space-y-2">
                <div className="w-32 h-3 bg-zinc-100 rounded" />
                <div className="w-24 h-2 bg-zinc-100 rounded" />
              </div>
            </div>
            <div className="w-20 h-4 bg-zinc-100 rounded" />
            <div className="w-24 h-4 bg-zinc-100 rounded" />
            <div className="w-8 h-8 bg-zinc-100 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );

  // 3. KOMPONEN EMPTY STATE (Jika data kosong)
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-24 bg-white rounded-[2.5rem] border border-dashed border-zinc-300 animate-in fade-in duration-700">
      <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500 mb-6">
        <Users size={40} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">Belum Ada Anggota Tim</h3>
      <p className="text-sm text-zinc-500 max-w-sm text-center font-medium leading-relaxed px-6">
        Tim Anda masih kosong. Mulai undang rekan kerja Anda untuk berkolaborasi dalam proyek yang sama.
      </p>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-2xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
      >
        <Plus size={18} /> Undang Anggota Pertama
      </button>
    </div>
  );

  // LOGIKA RENDERING UTAMA
  if (isLoading) return <TableSkeleton />;
  if (!hasData) return <EmptyState />;

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER ACTIONS */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-5 md:p-6 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="relative w-full xl:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari anggota tim..." 
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" 
          />
        </div>
        
        <div className="flex items-center gap-3 w-full xl:w-auto">
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all">
            <Filter size={16} /> <span className="sm:inline">Filter</span>
          </button>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg"
          >
            <Plus size={18} /> <span className="sm:inline">Undang Anggota</span>
          </button>
        </div>
      </div>

      {/* TABLE CONTENT */}
      <div className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100">
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Anggota Tim</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Peran / Akses</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Tanggal Gabung</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Status</th>
                <th className="px-6 py-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {members.map((user, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-600 font-medium">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-indigo-500" /> {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500 font-medium">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      user.status === 'Aktif' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
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

      {/* MODAL UNDANG ANGGOTA (Logika Submit) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="px-8 pt-8 pb-6 flex justify-between items-center border-b border-zinc-50">
              <h3 className="text-xl font-bold text-zinc-900">Undang Anggota</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-900"><X size={20} /></button>
            </div>
            <form onSubmit={handleInvite} className="p-8 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Nama Lengkap</label>
                <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                  <input type="text" placeholder="Nama Lengkap" className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-600/20" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">Alamat Email</label>
                <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                  <input type="email" placeholder="nama@email.com" className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-indigo-600/20" required />
                </div>
              </div>
              <div className="pt-6 flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3.5 bg-zinc-50 text-zinc-600 rounded-2xl text-xs font-bold">Batal</button>
                <button type="submit" className="flex-1 py-3.5 bg-indigo-600 text-white rounded-2xl text-xs font-bold shadow-lg shadow-indigo-100">Kirim Undangan</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default TeamTable;