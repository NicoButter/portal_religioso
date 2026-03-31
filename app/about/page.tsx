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
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Sobre mí</h1>

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
