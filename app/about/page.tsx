import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fabián Cavero",
    "description": "Editor del Portal Espiritual. Acompañamiento pastoral, reflexiones y material espiritual.",
    "jobTitle": "Editor y acompañante espiritual",
      "image": `${process.env.NEXT_PUBLIC_SITE_URL || ''}/images/about/fabian_about.webp`,
    "url": `${process.env.NEXT_PUBLIC_SITE_URL || ''}`
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
          <h1 className="text-2xl font-bold text-black mb-6">Sobre mí</h1>

        <div className="bg-white rounded shadow p-6 text-gray-700">
          <div className="md:flex md:items-start md:gap-6">
            <figure className="w-80 h-56 md:w-[560px] md:h-72 lg:w-[840px] lg:h-96 xl:w-[1024px] xl:h-[420px] mx-auto md:mx-0 mb-4 md:mb-0 relative">
              <div className="relative w-full h-full rounded-lg overflow-hidden border">
                <Image
                  src="/images/about/fabian_about.webp"
                  alt="Fabián Cavero"
                  fill
                  sizes="(min-width:1280px) 1024px, (min-width:1024px) 840px, (min-width:768px) 560px, 320px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="text-sm text-center text-gray-500 mt-3">Fabián Cavero — Editor</figcaption>
            </figure>

            <div className="mt-2 text-black">
              <p className="text-lg mb-3">Este portal nace como un espacio para compartir la fe desde un lugar cercano, simple y auténtico.</p>

              <p className="mb-3">Mi camino está profundamente ligado a la vida pastoral y al acompañamiento de la comunidad, buscando siempre generar espacios de encuentro, reflexión y crecimiento dentro de la fe católica.</p>

              <p className="mb-3">La música forma parte esencial de ese recorrido. A través de la guitarra y el canto, intento transmitir el mensaje del Evangelio de una manera viva, que pueda llegar al corazón.</p>

              <p className="mb-3">Este espacio es una extensión de todo eso: un lugar donde la palabra, la música y la experiencia se encuentran para acompañar a quienes también están en búsqueda.</p>

              <p>Si sentís que este contenido puede ayudarte o querés ser parte, vas a encontrar distintas formas de acercarte a lo largo del portal.</p>
            </div>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </div>
  );
}
