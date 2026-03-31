"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const getY = () => (window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement && document.documentElement.scrollTop) || 0);

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = getY();
          setScrolled(y > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // run once on mount
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-slate-800 via-slate-900 to-black text-gray-200 shadow backdrop-blur-sm' : 'bg-transparent text-white'}`}>
      <div className={`max-w-6xl mx-auto px-4 ${scrolled ? 'py-2' : 'py-4'} flex items-center justify-between transition-all duration-300`}>
        <div className="flex items-center gap-3">
          <div className={`relative ${scrolled ? 'w-16 h-16 scale-90' : 'w-20 h-20 scale-100'} transition-all duration-300`}>
            <Image src="/logo_fabian.webp" alt="Logo Fabián Cavero" width={80} height={80} className="rounded transition-transform duration-300" />
          </div>
          <div className={`${scrolled ? 'text-base' : 'text-lg'} font-semibold`}>Fabián Cavero</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm uppercase tracking-wide hover:text-white">Home</Link>
          <Link href="/reflexiones" className="text-sm uppercase tracking-wide hover:text-white">Reflexiones</Link>
          <Link href="/lecturas" className="text-sm uppercase tracking-wide hover:text-white">Lecturas</Link>
          <Link href="/musica" className="text-sm uppercase tracking-wide hover:text-white">Musica</Link>
          <Link href="/about" className="text-sm uppercase tracking-wide hover:text-white">Sobre mí</Link>
        </div>

        <div className="md:hidden">
          <Link href="/about" className="text-sm">Sobre mí</Link>
        </div>
      </div>
    </nav>
  );
}
