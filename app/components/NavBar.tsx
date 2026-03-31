import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-gray-200 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 relative">
            <Image src="/logo_fabian.webp" alt="Logo Fabián Cavero" width={80} height={80} className="rounded" />
          </div>
          <div className="text-lg font-semibold text-white">Fabián Cavero</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm uppercase tracking-wide hover:text-white">Home</Link>
          <Link href="/reflexiones" className="text-sm uppercase tracking-wide hover:text-white">Reflexiones</Link>
          <Link href="/lecturas" className="text-sm uppercase tracking-wide hover:text-white">Lecturas</Link>
          <Link href="/musica" className="text-sm uppercase tracking-wide hover:text-white">Musica</Link>
          <Link href="/about" className="text-sm uppercase tracking-wide hover:text-white">Sobre mí</Link>
        </div>

        <div className="md:hidden">
          <Link href="/about" className="text-sm text-white">Sobre mí</Link>
        </div>
      </div>
    </nav>
  );
}
