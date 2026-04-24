"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import { reflexiones } from '../data';

const categorias = ['Todas', 'Espiritualidad', 'Vida Diaria', 'Comunidad', 'Fé'];

export default function ReflexionesPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredReflexiones = activeCategory === 'Todas' 
    ? reflexiones 
    : reflexiones.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      
      {/* Header Estilo Editorial */}
      <header className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4 block">Inspiración Diaria</span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
            Reflexiones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un espacio de pausa y pensamiento profundo para acompañar tu camino espiritual.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        {/* Filtro de Categorías */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'bg-white text-gray-400 border border-gray-200 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lista de Reflexiones - Estilo Columna Editorial Moderna */}
        <div className="space-y-24">
          {filteredReflexiones.map((ref) => (
            <div key={ref.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border-b border-gray-100 pb-16 last:border-0 hover:bg-gray-50/50 p-6 rounded-3xl transition-colors duration-500">
              {/* Imagen Principal de la Reflexión */}
              <div className="lg:col-span-7">
                <Link href={`/reflexiones/${ref.id}`} className="block group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={ref.image} 
                    alt={ref.title} 
                    className="aspect-[4/3] md:aspect-video object-cover w-full transform group-hover:scale-105 transition-transform duration-1000" 
                  />
                </Link>
              </div>

              {/* Contenido y Autor */}
              <div className="lg:col-span-5 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                      {ref.category}
                    </span>
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-tight">{ref.date}</span>
                  </div>

                  <Link href={`/reflexiones/${ref.id}`} className="group">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-red-700 transition-colors leading-tight tracking-tighter uppercase">
                      {ref.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-4 font-serif italic italic">
                    &quot;{ref.excerpt}&quot;
                  </p>
                </div>

                {/* Perfil del Autor Estilo Digital Moderno */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-red-50 shadow-sm transition-transform hover:scale-110">
                      <img 
                        src={(ref as any).authorImage || "https://images.unsplash.com/photo-1544717297-fa1516596136?q=80&w=2070&auto=format&fit=crop"} 
                        alt={(ref as any).author} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-red-600 font-black uppercase tracking-widest leading-none mb-1">Escrito por</p>
                      <h4 className="text-lg font-bold text-gray-900 leading-tight">{(ref as any).author || "Colaborador"}</h4>
                    </div>
                  </div>

                  <Link 
                    href={`/reflexiones/${ref.id}`}
                    className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-red-600 transition-colors shadow-lg group"
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
