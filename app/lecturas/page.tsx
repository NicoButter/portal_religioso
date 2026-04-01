"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const lecturas = [
  {
    id: 1,
    title: 'La Fé y la Esperanza en Tiempos de Incertidumbre',
    author: 'Fabián Cavero',
    date: '20 Mar 2024',
    category: 'Ensayo',
    readTime: '5 min',
    excerpt: '¿Cómo mantener la llama encendida cuando el viento sopla más fuerte?',
    content: 'La fé es la luz que guía nuestro camino en los momentos de oscuridad. La esperanza es el motor que nos impulsa a seguir adelante, confiando en que todo tiene un propósito. En este ensayo, exploramos cómo estas dos virtudes se entrelazan para sostener el espíritu humano frente a los desafíos más complejos de la vida moderna.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'El Valor del Silencio: Una Guía para la Meditación',
    author: 'Fabián Cavero',
    date: '18 Mar 2024',
    category: 'Guía Espiritual',
    readTime: '3 min',
    excerpt: 'Aprender a callar para poder escuchar lo que realmente importa.',
    content: 'En el silencio encontramos respuestas profundas. Es allí donde el alma dialoga con lo divino y se renueva el espíritu. El silencio no es vacío, sino una plenitud que nos permite reconectar con nuestra esencia. Esta guía ofrece pasos prácticos para integrar momentos de quietud en nuestra rutina diaria.',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'La Comunidad como Refugio del Espíritu',
    author: 'Fabián Cavero',
    date: '12 Mar 2024',
    category: 'Reflexión Social',
    readTime: '4 min',
    excerpt: 'Por qué necesitamos de los otros para crecer en nuestra propia fé.',
    content: 'Nadie camina solo en el sendero de la fé. La comunidad actúa como un espejo y un apoyo, recordándonos que nuestras luchas son compartidas y nuestras alegrías se multiplicican cuando se celebran en conjunto. Analizamos el papel fundamental de los grupos de oración en la actualidad.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function LecturasPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      
      {/* Header Minimalista y Impactante */}
      <header className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-red-600 font-extrabold uppercase tracking-widest text-xs mb-3 block italic">Biblioteca del Portal</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">
            Lecturas <span className="text-red-600">Espirituales</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
            Textos y ensayos exclusivos creados por <span className="text-gray-900 font-bold border-b-2 border-red-600">Fabián Cavero</span> para nutrir tu mente y espíritu.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tighter shrink-0">Últimas Publicaciones</h2>
            <div className="h-[1px] w-full bg-gray-200"></div>
        </div>

        {/* Feed de Lecturas - Estilo Lista Editorial */}
        <div className="space-y-24">
          {lecturas.map((item) => (
            <article key={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
              {/* Imagen a un lado */}
              <div className="lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Información al otro lado */}
              <div className="lg:col-span-7 flex flex-col py-2">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-red-600 tracking-widest mb-4">
                  <span>{item.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400">{item.readTime} de lectura</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors leading-tight">
                    {item.title}
                </h3>
                
                <div className="mb-6">
                    <p className={`text-gray-600 text-lg leading-relaxed transition-all duration-500 ${expandedId === item.id ? 'opacity-100' : 'opacity-80'}`}>
                        {expandedId === item.id ? item.content : item.excerpt}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
                            FC
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-900">{item.author}</p>
                            <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                        </div>
                    </div>

                    <button 
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className="bg-gray-100 hover:bg-red-600 hover:text-white text-gray-900 px-6 py-2 rounded-full text-xs font-black uppercase tracking-tighter transition-all duration-300"
                    >
                        {expandedId === item.id ? 'Cerrar' : 'Leer artículo'}
                    </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
