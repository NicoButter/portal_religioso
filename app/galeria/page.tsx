"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { celebraciones } from '../data';

const categories = ['Todas', 'Bautismos', 'Casamientos', 'Misas', 'Eventos'];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredItems = activeCategory === 'Todas' 
    ? celebraciones 
    : celebraciones.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      
      {/* Header Galería */}
      <header className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs mb-3 block italic">Momentos Compartidos</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
            Galería de <span className="text-red-600">Celebraciones</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Un espacio para celebrar juntos los hitos de nuestra comunidad. La fé se vive y se comparte en cada paso.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
        {/* Filtros de Categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-tighter transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white shadow-xl' 
                  : 'bg-white text-gray-400 border border-gray-200 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Estilo Moderno */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <Link 
              key={item.id} 
              href={`/galeria/${item.id}`}
              className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000" 
              />
              
              {/* Overlay con Información */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-2xl font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed font-light">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  {item.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
