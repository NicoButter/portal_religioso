"use client";

import { useEffect, useRef, useState, CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ─── colores idénticos al Footer ───────────────────────────────────────── */
const BG_SCROLLED = 'linear-gradient(to right, #1e293b, #0f172a, #000000)';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  /* ── IntersectionObserver: funciona sin importar dónde ocurra el scroll ── */
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el sentinel ya no es visible → el usuario hizo scroll
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  /* ── estilos CSS inline: Tailwind no puede purgar clases dinámicas ───── */
  const navStyle: CSSProperties = {
    background: scrolled ? BG_SCROLLED : 'transparent',
    boxShadow:  scrolled ? '0 2px 12px rgba(0,0,0,0.5)' : 'none',
    transition: 'background 0.35s ease, box-shadow 0.35s ease',
  };

  const innerStyle: CSSProperties = {
    padding:    scrolled ? '0.4rem 1rem' : '1rem 1rem',
    transition: 'padding 0.35s ease',
  };

  const logoSize = scrolled ? 48 : 72;

  const logoWrapStyle: CSSProperties = {
    width:  `${logoSize}px`,
    height: `${logoSize}px`,
    transition: 'width 0.35s ease, height 0.35s ease',
    flexShrink: 0,
  };

  const brandStyle: CSSProperties = {
    fontSize:   scrolled ? '0.9rem' : '1.125rem',
    transition: 'font-size 0.35s ease',
  };

  return (
    <>
      {/* Sentinel invisible: cuando sale del viewport → scrolled = true */}
      <div
        ref={sentinelRef}
        style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', pointerEvents: 'none' }}
        aria-hidden="true"
      />

      <nav
        style={navStyle}
        className="fixed top-0 left-0 w-full z-30 text-white"
      >
        <div
          style={innerStyle}
          className="max-w-6xl mx-auto flex items-center justify-between"
        >
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <div style={logoWrapStyle} className="relative overflow-hidden rounded">
              <Image
                src="/logo_fabian.webp"
                alt="Logo Fabián Cavero"
                fill
                sizes="72px"
                className="object-cover"
              />
            </div>
            <span style={brandStyle} className="font-semibold whitespace-nowrap">
              Fabián Cavero
            </span>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/"           className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/reflexiones" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Reflexiones</Link>
            <Link href="/lecturas"   className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Lecturas</Link>
            <Link href="/musica"     className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Música</Link>
            <Link href="/about"      className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">Sobre mí</Link>
          </div>

          {/* Link móvil */}
          <div className="md:hidden">
            <Link href="/about" className="text-sm hover:text-gray-300 transition-colors">Sobre mí</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
