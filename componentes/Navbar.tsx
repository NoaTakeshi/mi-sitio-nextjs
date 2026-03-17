"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow p-4">
      {/* Desktop */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">MyApp</span>

        {/* Botón hamburguesa - solo móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/gallery">Galería</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </div>

      {/* Links móvil - stack vertical */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
          <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Galería</Link></li>
          <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      )}
    </nav>
  )
}