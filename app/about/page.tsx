import NavBar from '../components/NavBar';
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
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      
      <main className="flex-1 w-full">
        {/* Hero de Perfil - Estilo Editorial Moderno */}
        <section className="pt-40 pb-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Columna Imagen */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                  <Image
                    src="/images/about/fabian_about.webp"
                    alt="Fabián Cavero"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                {/* Elementos decorativos abstractos */}
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -top-10 -left-10 text-9xl font-black text-gray-200/50 select-none">FC</div>
              </div>

              {/* Columna Texto */}
              <div className="lg:col-span-7">
                <span className="inline-block bg-red-600 text-white text-xs font-black uppercase tracking-[0.3em] px-3 py-1 mb-6">
                  El Autor
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none uppercase">
                  Fabián <br />
                  <span className="text-red-600">Cavero</span>
                </h1>
                
                <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                  <p className="text-gray-900 font-bold border-l-4 border-red-600 pl-6 italic">
                    &ldquo;Este portal nace como un espacio para compartir la fé desde un lugar cercano, simple y auténtico.&rdquo;
                  </p>
                  <p>
                    Mi camino está profundamente ligado a la vida pastoral y al acompañamiento de la comunidad, buscando siempre generar espacios de encuentro, reflexión y crecimiento dentro de la fé católica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Biografía Detallada */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-xl prose-red max-w-none text-gray-700 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-4">Misión Pastoral</h3>
                  <p className="leading-relaxed">
                    La música forma parte esencial de mi recorrido. A través de la guitarra y el canto, intento transmitir el mensaje del Evangelio de una manera viva, que pueda llegar al corazón.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-900 mb-4">Espíritu Comunitario</h3>
                  <p className="leading-relaxed">
                    Este espacio es una extensión de todo eso: un lugar donde la palabra, la música y la experiencia se encuentran para acompañar a quienes también están en búsqueda.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-12 rounded-3xl shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h2 className="text-3xl font-black uppercase mb-6 tracking-tighter">Únete a la Comunidad</h2>
                  <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                    Si sentís que este contenido puede ayudarte o querés ser parte de las actividades, no dudes en contactarnos a través de los canales oficiales del portal.
                  </p>
                  <button className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-tighter transition-all duration-300 transform group-hover:scale-105">
                    Contactar ahora
                  </button>
                </div>
                {/* Círculo decorativo en el card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-red-600/30 transition-colors"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
