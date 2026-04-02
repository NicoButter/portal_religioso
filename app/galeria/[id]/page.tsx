import { notFound } from 'next/navigation';
import { celebraciones } from '../../data';
import NavBar from '../../components/NavBar';
import Link from 'next/link';

export async function generateStaticParams() {
  return celebraciones.map((item) => ({
    id: item.id,
  }));
}

export default async function GaleriaItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = celebraciones.find((c) => c.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb / Back Navigation */}
          <Link 
            href="/galeria" 
            className="inline-flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a la Galería
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Image Column */}
            <div className="lg:col-span-8">
              <div className="rounded-[40px] overflow-hidden shadow-2xl bg-gray-100 ring-1 ring-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-40">
              <div className="flex flex-col">
                <span className="text-red-600 text-xs font-black uppercase tracking-[0.2em] mb-4 italic">
                  {item.category}
                </span>
                <h1 className="text-5xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.9]">
                  {item.title}
                </h1>
                
                <div className="w-16 h-1 bg-red-600 mb-10"></div>

                <div className="space-y-8">
                  <p className="text-2xl text-gray-600 leading-tight font-serif italic">
                    &ldquo;{item.description}&rdquo;
                  </p>

                  <div className="pt-8 border-t border-gray-100 flex flex-col gap-2">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Fecha de celebración</span>
                    <span className="text-lg font-bold text-gray-900">{item.date}</span>
                  </div>

                  <div className="pt-8 flex flex-col gap-6">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Este momento capturado refleja un paso importante en el caminar de nuestra comunidad de fé en Mendoza. Acompañamos con oraciones cada una de estas bendiciones.
                    </p>
                    <button className="w-full py-5 bg-gray-900 text-white font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-colors rounded-2xl shadow-xl">
                      Compartir este momento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
