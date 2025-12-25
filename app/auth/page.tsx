"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Github, Chrome, ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".auth-card", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-zinc-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
        <ArrowLeft size={16} /> Kembali ke Beranda
      </Link>

      <div className="sm:mx-auto sm:w-full sm:max-w-md auth-card">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
            {isLogin ? 'Selamat Datang Kembali' : 'Buat Akun SaaSFlow'}
          </h2>
          <p className="mt-2 text-sm text-zinc-500 font-medium">
            {isLogin ? 'Belum punya akun?' : 'Sudah memiliki akun?'} 
            <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-indigo-600 font-bold hover:text-indigo-500 transition-colors cursor-pointer hover:underline focus:outline-none"
            >
                {isLogin ? 'Daftar sekarang' : 'Masuk di sini'}
            </button>
          </p>
        </div>

        <div className="bg-white py-10 px-6 shadow-xl shadow-zinc-200/50 border border-zinc-200 sm:rounded-3xl sm:px-12">
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-zinc-700">Nama Lengkap</label>
                <input type="text" placeholder="John Doe" className="mt-1 block w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all" />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-zinc-700">Alamat Email</label>
              <input type="email" placeholder="name@company.com" className="mt-1 block w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all" />
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700">Kata Sandi</label>
              <input type="password" placeholder="••••••••" className="mt-1 block w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all" />
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none transition-all duration-300">
              {isLogin ? 'Masuk Sekarang' : 'Daftar Akun'}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="px-2 bg-white text-zinc-400 font-bold tracking-widest">Atau lanjutkan dengan</span></div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition-all">
                <Chrome size={20} className="mr-2" /> Google
              </button>
              <button className="w-full inline-flex justify-center py-3 px-4 rounded-full border border-zinc-200 bg-white text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition-all">
                <Github size={20} className="mr-2" /> Github
              </button>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-zinc-400 font-medium">
          Dengan melanjutkan, Anda menyetujui <br /> 
          <a href="#" className="underline hover:text-zinc-600">Syarat Layanan</a> dan <a href="#" className="underline hover:text-zinc-600">Kebijakan Privasi</a> kami.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;