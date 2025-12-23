"use client";

import React from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  Mail, ShieldCheck, UserMinus, Edit2 
} from 'lucide-react';

const TeamTable = () => {
  const members = [
    { name: 'Alex Johnson', email: 'alex@flow.com', role: 'Designer', status: 'Aktif', joined: '12 Jan 2024' },
    { name: 'Sarah Chen', email: 'sarah@flow.com', role: 'Developer', status: 'Sibuk', joined: '05 Feb 2024' },
    { name: 'Mike Ross', email: 'mike@flow.com', role: 'Manager', status: 'Aktif', joined: '20 Feb 2024' },
    { name: 'Jessica Pearson', email: 'jessica@flow.com', role: 'CEO', status: 'Aktif', joined: '01 Jan 2024' },
  ];

  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari anggota tim..." 
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" 
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm font-bold text-zinc-600 hover:bg-zinc-50 transition">
            <Filter size={16} /> Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            <Plus size={18} /> Undang Anggota
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
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
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-900">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-indigo-500" />
                      <span className="text-sm text-zinc-600 font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500 font-medium">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      user.status === 'Aktif' 
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                      : 'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Aktif' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Tabel (Pagination) */}
        <div className="px-6 py-4 bg-zinc-50/30 border-t border-zinc-100 flex justify-between items-center">
          <p className="text-xs text-zinc-500 font-medium">Menampilkan 4 dari 12 anggota</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-bold text-zinc-400 cursor-not-allowed">Sebelumnya</button>
            <button className="px-3 py-1.5 text-xs font-bold text-zinc-900 hover:bg-zinc-100 rounded-lg transition">Berikutnya</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamTable;