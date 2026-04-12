"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT TITLE */}
        <Link href="/" className="font-bold text-xl tracking-tight text-white">
          Aziz<span className="text-blue-500">.</span>Portfolio
        </Link>

        {/* CENTER NAV MENU (DESKTOP) */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium text-sm">
          <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link href="/experience" className="hover:text-blue-400 transition-colors">Pengalaman</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400 transition-colors">Project</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Kontak</Link></li>
        </ul>

        {/* RIGHT TEXT (DESKTOP) */}
        <div className="hidden md:block">
          <span className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/20">
            Pakwa Creative
          </span>
        </div>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button 
          className="md:hidden p-2 text-slate-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full left-0 shadow-xl">
          <ul className="flex flex-col text-slate-300 font-medium text-sm px-6 py-4 gap-4">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">About</Link></li>
            <li><Link href="/experience" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Pengalaman</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Project</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-400">Kontak</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}