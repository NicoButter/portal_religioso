"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Nombre */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded">
            <Image
              src="/logo_fabian.webp"
              alt="Logo Fabián Cavero"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-lg">Fabián Cavero</span>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/reflexiones" 
            className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            Reflexiones
          </Link>
          <Link 
            href="/lecturas" 
            className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            Lecturas
          </Link>
          <Link 
            href="/musica" 
            className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            Música
          </Link>
          <Link 
            href="/about" 
            className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors"
          >
            Sobre mí
          </Link>
        </div>

        {/* Link Móvil */}
        <div className="md:hidden">
          <Link 
            href="/about" 
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Sobre mí
          </Link>
        </div>
      </div>
    </nav>
  );
}