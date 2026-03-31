
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-4xl mx-auto py-10 px-4 space-y-10">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Bienvenido a tu Portal Espiritual</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un espacio personal para reflexionar, encontrar inspiración y disfrutar de música espiritual. Explora las reflexiones, escucha música, accede a lecturas y mantente informado sobre las actividades de la iglesia.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Actividades de la Iglesia */}
          <div className="bg-white rounded shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Actividades de la Iglesia</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Misas semanales y celebraciones especiales</li>
                <li>Grupos de oración y reflexión</li>
                <li>Acciones solidarias y voluntariado</li>
                <li>Charlas y talleres espirituales</li>
              </ul>
            </div>
            <Link href="#" className="text-blue-600 hover:underline font-medium self-end">Ver calendario</Link>
          </div>

          {/* Novedades */}
          <div className="bg-white rounded shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">Novedades</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Nuevo material de lectura disponible en <Link href="/lecturas" className="text-blue-600 hover:underline">Lecturas</Link></li>
                <li>Próxima jornada de retiro espiritual</li>
                <li>Actualización de la galería de <Link href="/musica" className="text-blue-600 hover:underline">música espiritual</Link></li>
              </ul>
            </div>
            <Link href="#" className="text-blue-600 hover:underline font-medium self-end">Ver todas las novedades</Link>
          </div>

          {/* ¿Qué puedes encontrar en el portal? */}
          <div className="bg-white rounded shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">¿Qué puedes encontrar en el portal?</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li><Link href="/reflexiones" className="text-blue-600 hover:underline">Reflexiones</Link> para el alma</li>
                <li><Link href="/lecturas" className="text-blue-600 hover:underline">Lecturas espirituales</Link> exclusivas</li>
                <li><Link href="/musica" className="text-blue-600 hover:underline">Música</Link> para meditar y orar</li>
                <li>Información sobre actividades y eventos</li>
                <li>Un espacio para crecer en comunidad</li>
              </ul>
            </div>
            <Link href="#" className="text-blue-600 hover:underline font-medium self-end">Explorar el portal</Link>
          </div>

          {/* Tarjeta 'Sobre' eliminada: ahora hay una página dedicada */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
