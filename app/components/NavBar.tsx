"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Frase */}
        <div className="flex items-center gap-3 relative z-50">
          <Link href="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
            <span className="font-serif italic text-2xl md:text-4xl leading-tight text-white hover:text-red-500 transition-colors drop-shadow-md">
              Caminando en la Fé 
            </span>
          </Link>
        </div>

        {/* Botón Hamburguesa */}
        <button 
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 transform ${isOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block w-full h-0.5 bg-white transition-all duration-300 transform ${isOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
          </div>
        </button>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/reflexiones" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Reflexiones</Link>
          <Link href="/lecturas" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Lecturas</Link>
          <Link href="/musica" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Música</Link>
          <Link href="/transposer" className="text-sm uppercase tracking-wide px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md transition-all border border-white/20">Acordes</Link>
          <Link href="/galeria" className="bg-red-600 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase hover:bg-white hover:text-red-600 transition-all tracking-tighter">Galería</Link>
          <Link href="/about" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Sobre mí</Link>
        </div>
      </div>

      {/* Menú Móvil (Overlay) */}
      <div className={`fixed inset-0 bg-slate-900/98 backdrop-blur-md transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 z-40 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <Link 
          href="/" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Home
        </Link>
        <Link 
          href="/reflexiones" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Reflexiones
        </Link>
        <Link 
          href="/lecturas" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Lecturas
        </Link>
        <Link 
          href="/musica" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Música
        </Link>
        <Link 
          href="/transposer" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Acordes
        </Link>
        <Link 
          href="/galeria" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Galería
        </Link>
        <Link 
          href="/about" 
          onClick={toggleMenu}
          className="text-2xl font-serif italic text-white hover:text-red-500 transition-colors"
        >
          Sobre mí
        </Link>

        {/* Decoración inferior */}
        <div className="mt-8 flex gap-6 text-gray-400">
           <i className="fab fa-facebook text-xl"></i>
           <i className="fab fa-youtube text-xl"></i>
           <i className="fab fa-instagram text-xl"></i>
        </div>
      </div>
    </nav>
  );
}