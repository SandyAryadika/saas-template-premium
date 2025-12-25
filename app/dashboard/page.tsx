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
  // State untuk melacak tab mana yang aktif
  const [activeTab, setActiveTab] = useState('Ringkasan');
  
  // State untuk mengontrol visibilitas sidebar pada layar seluler (HP/Tablet)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans">
      
      {/* SIDEBAR COMPONENT 
        - Mengirimkan prop 'isOpen' untuk kontrol tampilan mobile.
        - Fungsi 'setActiveTab' juga akan menutup sidebar secara otomatis setelah menu dipilih di HP.
      */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isSidebarOpen} 
        setIsMobileOpen={setIsSidebarOpen} 
      />

      {/* OVERLAY MOBILE 
        Muncul saat sidebar terbuka di layar kecil untuk memberikan fokus dan memungkinkan penutupan dengan klik di luar area sidebar.
      */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-zinc-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT AREA
        - Menggunakan 'lg:ml-72' agar konten tidak tertutup oleh sidebar yang bersifat 'fixed' di desktop.
        - Transisi halus saat sidebar muncul/hilang.
      */}
      <main className="flex-1 lg:ml-72 p-4 md:p-8 lg:p-12 transition-all duration-300 min-h-screen">
        
        {/* TOP NAVIGATION: Menyediakan judul halaman dan tombol menu hamburger untuk mobile */}
        <TopNav 
          activeTab={activeTab} 
          onOpenSidebar={() => setIsSidebarOpen(true)} 
        />
        
        {/* DYNAMIC CONTENT RENDERING: Menampilkan komponen berdasarkan pilihan di sidebar */}
        <div className="mt-4">
          {activeTab === 'Ringkasan' && <Overview />}
          {activeTab === 'Analitik' && <Analytics />}
          {activeTab === 'Notifikasi' && <Notifications />}
          {activeTab === 'Tim Kami' && <TeamTable />}
          {activeTab === 'Billing' && <Billing />}
          {activeTab === 'Pengaturan' && <SettingsForm />}
          {activeTab === 'Pusat Bantuan' && <HelpCenter />}
        </div>

      </main>
    </div>
  );
};

export default DashboardPage;