
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-4xl mx-auto py-10 px-4 space-y-10">
        <section className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-4">Bienvenido a tu Portal Espiritual</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un espacio personal para reflexionar, encontrar inspiración y disfrutar de música espiritual. Explora las reflexiones, escucha música, accede a lecturas y mantente informado sobre las actividades de la iglesia.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Actividades de la Iglesia" href="#">
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Misas semanales y celebraciones especiales</li>
              <li>Grupos de oración y reflexión</li>
              <li>Acciones solidarias y voluntariado</li>
              <li>Charlas y talleres espirituales</li>
            </ul>
          </Card>

          <Card title="Novedades" href="#">
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Nuevo material de lectura disponible en <Link href="/lecturas" className="text-black hover:underline">Lecturas</Link></li>
              <li>Próxima jornada de retiro espiritual</li>
              <li>Actualización de la galería de <Link href="/musica" className="text-black hover:underline">música espiritual</Link></li>
            </ul>
          </Card>

          <Card title="¿Qué puedes encontrar en el portal?" href="#">
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li><Link href="/reflexiones" className="text-black hover:underline">Reflexiones</Link> para el alma</li>
              <li><Link href="/lecturas" className="text-black hover:underline">Lecturas espirituales</Link> exclusivas</li>
              <li><Link href="/musica" className="text-black hover:underline">Música</Link> para meditar y orar</li>
              <li>Información sobre actividades y eventos</li>
              <li>Un espacio para crecer en comunidad</li>
            </ul>
          </Card>

          <Card title="Sobre Fabián Cavero" href="/about">
            <p className="text-gray-700">Editor y creador del portal. Acompañamiento pastoral, reflexiones y recursos espirituales.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
