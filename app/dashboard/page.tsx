"use client";

import React, { useState } from 'react';
import Sidebar from '@/app/dashboard/Sidebar';
import TopNav from '@/app/dashboard/TopNav';
import Overview from '@/app/dashboard/Overview';
import Analytics from '@/app/dashboard/Analytics';
import TeamTable from '@/app/dashboard/TeamTable';
import SettingsForm from '@/app/dashboard/SettingsForm';
import HelpCenter from '@/app/dashboard/HelpCenter';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Ringkasan');

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 lg:ml-64 p-4 md:p-12">
        <TopNav activeTab={activeTab} />
        
        {/* Render Konten Berdasarkan State */}
        <div className="mt-4">
          {activeTab === 'Ringkasan' && <Overview />}
          {activeTab === 'Analitik' && <Analytics />}
          {activeTab === 'Tim Kami' && <TeamTable />}
          {activeTab === 'Pengaturan' && <SettingsForm />}
          {activeTab === 'Pusat Bantuan' && <HelpCenter />}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;