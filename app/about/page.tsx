import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Sobre Fabián Cavero</h1>
        <div className="bg-white rounded shadow p-6 text-gray-700 space-y-4">
          <p className="text-lg"><strong>Fabián Cavero</strong> es el editor y creador de este portal espiritual. Dedicado a la acompañamiento pastoral y la difusión de contenidos de fe, comparte reflexiones, lecturas y recursos musicales para nutrir la vida espiritual de la comunidad.</p>
          <p>Su trabajo se centra en la pastoral comunitaria, la organización de actividades eclesiales y la escritura de material espiritual pensado para el crecimiento personal y comunitario.</p>
          <p>Si deseas contactar o colaborar, puedes usar los medios que se indiquen más adelante en el portal.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
