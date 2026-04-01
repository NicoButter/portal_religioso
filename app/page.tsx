
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-1 w-full">
        {/* Hero Section Moderno: Full Width & Full Height */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 scale-150 pointer-events-none">
            <iframe
              src="https://www.youtube.com/embed/2OEL4P1Rz04?autoplay=1&mute=1&loop=1&playlist=2OEL4P1Rz04&controls=0&rel=0"
              className="w-full h-full"
              title="Hero video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
            <div className="text-center text-white max-w-3xl px-6">
              <h2 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
                Bienvenido a tu Portal Espiritual
              </h2>
              <p className="text-xl md:text-2xl font-light tracking-wide opacity-90">
                Un espacio para la fe, la música y el acompañamiento.
              </p>
            </div>
          </div>
        </section>

        {/* Seccion Novedades - Estilo Editorial Moderno */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-tighter">Lo Nuevo</span>
              <div className="h-[2px] flex-1 bg-gray-100"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Noticia Principal */}
              <div className="md:col-span-2 group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" alt="Retiro" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded">COMUNIDAD</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-tight mb-3">
                  Próxima jornada de retiro espiritual: Un encuentro con el silencio
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Te invitamos a participar de nuestro próximo encuentro comunitario. Un espacio diseñado para desconectar del ruido cotidiano y reconectar con la esencia de nuestra fe.
                </p>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Hace 2 horas • Por Fabián Cavero</div>
              </div>

              {/* Columna de secundarias */}
              <div className="flex flex-col gap-8">
                <div className="group cursor-pointer border-b border-gray-100 pb-6">
                  <div className="text-red-600 text-xs font-black uppercase mb-2">Lecturas</div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug">
                    Nuevo material de lectura disponible para la meditación semanal
                  </h4>
                </div>
                <div className="group cursor-pointer border-b border-gray-100 pb-6">
                  <div className="text-red-600 text-xs font-black uppercase mb-2">Música</div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug">
                    Actualización de la galería: Melodías que elevan el alma
                  </h4>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-red-600 text-xs font-black uppercase mb-2">Iglesia</div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug">
                    Horarios de misas semanales y celebraciones especiales
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Explora" - Minimalista y funcional */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter">¿Qué puedes encontrar aquí?</h2>
              <div className="w-20 h-1.5 bg-red-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Este portal es una herramienta viva para tu crecimiento espiritual. Hemos seleccionado cuidadosamente cada sección para acompañarte en tu camino diario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Reflexiones', desc: 'Palabras para el alma y pensamiento profundo.', icon: '🙏', link: '/reflexiones' },
                { title: 'Lecturas', desc: 'Textos sagrados y estudios exclusivos.', icon: '📖', link: '/lecturas' },
                { title: 'Música', desc: 'Melodías para orar y encontrar paz.', icon: '🎶', link: '/musica' },
                { title: 'Comunidad', desc: 'Actividades y eventos de nuestra iglesia.', icon: '🤝', link: '#' },
              ].map((item, idx) => (
                <Link key={idx} href={item.link} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{item.title}</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Ubicación - Mapa estilo moderno */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Nuestra Ubicación</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Te esperamos en nuestra comunidad para compartir la fe. Siéntete libre de visitarnos en los horarios de celebración.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-red-600">📍</div>
                    <div>
                      <p className="font-bold text-gray-900">Dirección</p>
                      <p className="text-gray-500">Calle Principal 123, Ciudad del Vaticano</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-red-600">🕒</div>
                    <div>
                      <p className="font-bold text-gray-900">Horarios</p>
                      <p className="text-gray-500">Lunes a Domingos • 08:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d15f4b038e8!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1571120000000!5m2!1sen!2sau" 
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Contenedor central para el resto del contenido (VERSION ANTERIOR - ELIMINADA O MOVIDA) */}
        {/* <div className="max-w-6xl mx-auto px-4 py-20 space-y-20"> */}
          {/* ... */}
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}
