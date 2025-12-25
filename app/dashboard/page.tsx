"use client";

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import Overview from './Overview';
import Analytics from './Analytics';
import Notifications from './Notifications';
import TeamTable from './TeamTable';
import Billing from './Billing';
import SettingsForm from './SettingsForm';
import HelpCenter from './HelpCenter';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Ringkasan');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    /* PERBAIKAN KUNCI: 
      1. Ganti 'min-h-screen' menjadi 'h-screen' (Tinggi pas layar).
      2. Tambahkan 'overflow-hidden' agar scrollbar browser tidak muncul.
    */
    <div className="flex h-screen overflow-hidden bg-zinc-50 font-sans selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isSidebarOpen} 
        setIsMobileOpen={setIsSidebarOpen} 
      />

      {/* MAIN CONTENT AREA 
          'min-w-0' penting untuk mencegah elemen lebar (seperti tabel) merusak layout flexbox.
      */}
      <div className="flex-1 flex flex-col min-w-0 h-full">
        
        {/* TOP NAVIGATION */}
        <TopNav 
          activeTab={activeTab} 
          isMobileOpen={isSidebarOpen} 
          setIsMobileOpen={setIsSidebarOpen} 
        />
        
        {/* CONTAINER SCROLL: 
          Hanya bagian ini yang boleh memiliki scrollbar.
          'flex-1' akan mengambil sisa tinggi layar setelah dipotong TopNav.
        */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <div className="mt-2 pb-10"> {/* Tambahkan padding bottom agar konten bawah tidak nempel sekali */}
              {activeTab === 'Ringkasan' && <Overview />}
              {activeTab === 'Analitik' && <Analytics />}
              {activeTab === 'Notifikasi' && <Notifications />}
              {activeTab === 'Tim Kami' && <TeamTable />}
              {activeTab === 'Billing' && <Billing />}
              {activeTab === 'Pengaturan' && <SettingsForm />}
              {activeTab === 'Pusat Bantuan' && <HelpCenter />}
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardPage;