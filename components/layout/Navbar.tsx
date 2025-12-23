"use client";

import React from 'react';
import Link from 'next/link'; // Import Link untuk navigasi

const Navbar = () => {
  // ... fungsi handleScroll tetap sama ...

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-zinc-900 cursor-pointer">
          SaaS<span className="text-indigo-600">Flow</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Fitur', 'Solusi', 'Harga', 'Dokumentasi'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {/* Ubah button menjadi Link ke arah /auth */}
          <Link href="/auth" className="hidden sm:block text-sm font-bold text-zinc-700 hover:text-zinc-900 transition-colors">
            Masuk
          </Link>
          <Link href="/auth?mode=signup" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition shadow-sm">
            Mulai Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  