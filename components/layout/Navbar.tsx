"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ikon tambahan untuk mobile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tighter text-zinc-900">
          SaaS<span className="text-indigo-600">Flow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Fitur', 'Solusi', 'Harga'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
              {item}
            </a>
          ))}
          <Link href="/auth" className="text-sm font-bold text-zinc-700 hover:text-zinc-900">Masuk</Link>
          <Link href="/auth?mode=signup" className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition">
            Mulai Gratis
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-8 space-y-6 flex flex-col animate-in fade-in slide-in-from-top-4">
          {['Fitur', 'Solusi', 'Harga'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-bold text-zinc-900">
              {item}
            </a>
          ))}
          <hr className="border-zinc-100" />
          <Link href="/auth" className="text-lg font-bold text-zinc-900">Masuk</Link>
          <Link href="/auth?mode=signup" className="bg-zinc-900 text-white px-6 py-4 rounded-full text-center font-bold">
            Mulai Gratis
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;