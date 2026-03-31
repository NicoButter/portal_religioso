import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-700">Portal Espiritual</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/reflexiones" className="text-gray-700 hover:text-blue-600">Reflexiones</Link>
          <Link href="/musica" className="text-gray-700 hover:text-blue-600">Musica</Link>
          <Link href="/lecturas" className="text-gray-700 hover:text-blue-600">Lecturas</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">Sobre mí</Link>
        </div>
      </div>
    </nav>
  );
}
