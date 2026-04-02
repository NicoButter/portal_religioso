"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import { reflexiones } from '../data';

const categorias = ['Todas', 'Espiritualidad', 'Vida Diaria', 'Comunidad', 'Fe'];

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

        {/* Lista de Reflexiones - Estilo Feed Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredReflexiones.map((ref) => (
            <Link 
              key={ref.id} 
              href={`/reflexiones/${ref.id}`}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img 
                  src={ref.image} 
                  alt={ref.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-black px-2 py-1 rounded-md uppercase">
                  {ref.category}
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-tight">{ref.date}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors leading-tight">
                  {ref.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {ref.excerpt}
                </p>

                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-tighter">
                  <span>Leer reflexión completa</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
