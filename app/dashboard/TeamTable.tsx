"use client";

import React from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  ShieldCheck, UserPlus, Mail, Download
} from 'lucide-react';

const TeamTable = () => {
  // Data Anggota Tim dengan tambahan detail tanggal bergabung
  const members = [
    { name: 'Alex Johnson', email: 'alex@flow.com', role: 'Designer', status: 'Aktif', joined: '12 Jan 2024' },
    { name: 'Sarah Chen', email: 'sarah@flow.com', role: 'Developer', status: 'Sibuk', joined: '05 Feb 2024' },
    { name: 'Mike Ross', email: 'mike@flow.com', role: 'Manager', status: 'Aktif', joined: '20 Feb 2024' },
    { name: 'Jessica Pearson', email: 'jessica@flow.com', role: 'CEO', status: 'Aktif', joined: '01 Jan 2024' },
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER & ACTIONS: Baris Pencarian & Tombol Aksi */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-5 md:p-6 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="relative w-full xl:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari anggota tim..." 
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all shadow-sm" 
          />
        </div>
        
        <div className="flex items-center gap-3 w-full xl:w-auto">
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all">
            <Filter size={16} /> <span className="sm:inline">Filter</span>
          </button>
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Plus size={18} /> <span className="sm:inline">Undang Anggota</span>
          </button>
        </div>
      </div>

      {/* 2. TABLE CONTAINER: Mendukung Scroll Horizontal */}
      <div className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-100">
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Anggota Tim</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Peran / Akses</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Tanggal Gabung</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Status</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase text-zinc-400 tracking-widest text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {members.map((user, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                  {/* Info User */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                        {user.name[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-zinc-900 truncate">{user.name}</p>
                        <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  
                  {/* Role */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-indigo-500 shrink-0" />
                      <span className="text-sm text-zinc-600 font-medium">{user.role}</span>
                    </div>
                  </td>
                  
                  {/* Tanggal Gabung */}
                  <td className="px-6 py-4 text-sm text-zinc-500 font-medium">
                    {user.joined}
                  </td>
                  
                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      user.status === 'Aktif' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Aktif' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {user.status}
                    </span>
                  </td>
                  
                  {/* Actions */}
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

        {/* 3. FOOTER: Pagination & Info Data */}
        <div className="px-6 py-4 bg-zinc-50/30 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500 font-medium">
            Menampilkan <span className="font-bold text-zinc-900">4</span> dari <span className="font-bold text-zinc-900">12</span> anggota
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-bold text-zinc-400 cursor-not-allowed bg-white border border-zinc-200 rounded-xl">
              Sebelumnya
            </button>
            <button className="px-4 py-2 text-xs font-bold text-zinc-900 hover:bg-zinc-100 bg-white border border-zinc-200 rounded-xl shadow-sm transition-all">
              Berikutnya
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamTable;