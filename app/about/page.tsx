import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fabián Cavero",
    "description": "Editor del Portal Espiritual. Acompañamiento pastoral, reflexiones y material espiritual.",
    "jobTitle": "Editor y acompañante espiritual",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/fabian.svg`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || ''}`
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Sobre Fabián Cavero</h1>

        <div className="bg-white rounded shadow p-6 text-gray-700">
          <div className="md:flex md:items-start md:gap-6">
            <figure className="w-40 h-40 mx-auto md:mx-0 mb-4 md:mb-0">
              <img src="/fabian.svg" alt="Foto de Fabián Cavero, editor del portal" className="w-full h-full object-cover rounded-full border" />
              <figcaption className="text-sm text-center text-gray-500 mt-2">Fabián Cavero — Editor</figcaption>
            </figure>

            <div className="mt-2">
              <p className="text-lg mb-3"><strong>Fabián Cavero</strong> es el editor y creador de este portal espiritual. Dedicado al acompañamiento pastoral y la difusión de contenidos de fe, comparte reflexiones, lecturas y recursos musicales para nutrir la vida espiritual de la comunidad.</p>
              <p className="mb-2">Su trabajo se centra en la pastoral comunitaria, la organización de actividades eclesiales y la escritura de material espiritual pensado para el crecimiento personal y comunitario.</p>
              <p>Si deseas contactar o colaborar, puedes usar los medios que se indiquen más adelante en el portal.</p>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </div>
  );
}
