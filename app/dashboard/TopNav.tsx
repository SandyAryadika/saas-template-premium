"use client";

import React from 'react';
import { Bell, Search } from 'lucide-react';

interface TopNavProps {
  activeTab: string;
}

const TopNav = ({ activeTab }: TopNavProps) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{activeTab}</h1>
        <p className="text-sm text-zinc-500 font-medium italic">Dashboard / {activeTab}</p>
      </div>
      
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari data..." 
            className="w-full md:w-64 pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all" 
          />
        </div>
        <button className="p-2 bg-white border border-zinc-200 rounded-full text-zinc-400 hover:text-zinc-900 transition-colors">
          <Bell size={20} />
        </button>
        <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white shadow-sm overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;