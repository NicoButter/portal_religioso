
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto py-10 px-4 space-y-12">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Bienvenido a tu Portal Espiritual</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un espacio personal para reflexionar, encontrar inspiración y disfrutar de música espiritual. Explora las reflexiones, escucha música, accede a lecturas y mantente informado sobre las actividades de la iglesia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Actividades de la Iglesia</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Misas semanales y celebraciones especiales</li>
            <li>Grupos de oración y reflexión</li>
            <li>Acciones solidarias y voluntariado</li>
            <li>Charlas y talleres espirituales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Novedades</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Nuevo material de lectura disponible en la sección Lecturas</li>
            <li>Próxima jornada de retiro espiritual</li>
            <li>Actualización de la galería de música espiritual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">¿Qué puedes encontrar en el portal?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Reflexiones para el alma</li>
            <li>Lecturas espirituales exclusivas</li>
            <li>Música para meditar y orar</li>
            <li>Información sobre actividades y eventos</li>
            <li>Un espacio para crecer en comunidad</li>
          </ul>
        </section>

        <section className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Sobre el editor: Fabián Cavero</h2>
          <div className="text-gray-700 space-y-2">
            <p><span className="font-bold">Fabián Cavero</span> es el editor y creador de este portal. Su vocación es compartir mensajes de fe, esperanza y amor a través de la palabra escrita y la acción comunitaria.</p>
            <p>Con años de experiencia en el acompañamiento espiritual y la organización de actividades en la iglesia, Fabián dedica su tiempo a inspirar y guiar a quienes buscan un camino de crecimiento interior.</p>
            <p>En este portal encontrarás su trabajo, reflexiones y recursos para alimentar tu espíritu.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
