"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          📷 GalerIA
        </Link>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <li><Link href="/" className="hover:text-black transition">Inicio</Link></li>
          <li><Link href="/gallery" className="hover:text-black transition">Galería</Link></li>
          <li><Link href="/blog" className="hover:text-black transition">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-black transition">Contacto</Link></li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/gallery"
          className="hidden md:inline-block bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Ver Galería
        </Link>

        {/* Hamburger - Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-sm text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Galería</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  );
}