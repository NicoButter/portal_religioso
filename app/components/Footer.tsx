"use client";

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <div className="text-xl font-semibold text-white">Fabián Cavero</div>
            <p className="text-sm text-slate-300 mt-2">Editor · Acompañamiento espiritual · Contenido para la vida interior</p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div>
                <h3 className="text-sm font-medium text-slate-200 mb-2">Secciones</h3>
                <ul className="text-sm space-y-1">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/reflexiones" className="hover:underline">Reflexiones</Link></li>
                  <li><Link href="/lecturas" className="hover:underline">Lecturas</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-200 mb-2">Recursos</h3>
                <ul className="text-sm space-y-1">
                  <li><Link href="/musica" className="hover:underline">Música</Link></li>
                  <li><Link href="/about" className="hover:underline">Sobre mí</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-sm font-medium text-slate-200 mb-2">Boletín</h3>
            <p className="text-sm text-slate-300 mb-3">Recibe noticias y novedades (formulario no funcional todavía).</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input aria-label="email" type="email" placeholder="tucorreo@ejemplo.com" className="w-full rounded border border-slate-700 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm">Suscribir</button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-center text-sm text-slate-400">
          <div className="mb-1">© {year} Fabián Cavero — Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
