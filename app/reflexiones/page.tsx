"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const categorias = ['Todas', 'Espiritualidad', 'Vida Diaria', 'Comunidad', 'Fe'];

const reflexiones = [
  { 
    id: 1,
    category: 'Espiritualidad', 
    title: 'La Paz Interior: El Silencio del Corazón', 
    excerpt: '¿Cómo encontrar tranquilidad en un mundo lleno de ruido constante?',
    content: 'La paz interior no es la ausencia de problemas, sino la presencia de una serenidad profunda que nace del encuentro con uno mismo y lo divino. En el silencio del corazón, las voces del mundo se apagan para dar paso a la voz de la conciencia y la fé.',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop'
  },
  { 
    id: 2, 
    category: 'Vida Diaria',
    title: 'La Gratitud como Estilo de Vida', 
    excerpt: 'El poder transformador de dar gracias por lo pequeño y lo grande.',
    content: 'Agradece cada día por las bendiciones que recibes. La gratitud cambia nuestra perspectiva: pasamos de enfocarnos en lo que nos falta a valorar lo que ya poseemos. Es un ejercicio diario que sana el espíritu y fortalece los vínculos con los demás.',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 3, 
    category: 'Fe',
    title: 'El Perdón: Un Acto de Libertad', 
    excerpt: 'Perdonar no es olvidar, es decidir que el pasado no determine tu presente.',
    content: 'Perdonar libera el alma y sana el corazón. Muchas veces cargamos con el peso de ofensas pasadas que solo nos dañan a nosotros mismos. El perdón es la llave que abre la celda donde guardamos nuestro propio dolor.',
    date: '05 Mar 2024',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop'
  },
  { 
    id: 4, 
    category: 'Comunidad',
    title: 'Caminando Juntos en la Esperanza', 
    excerpt: 'Nadie se salva solo; la importancia de sostenernos mutuamente.',
    content: 'En la comunidad encontramos la fuerza que nos falta individualmente. Compartir nuestras cargas y celebrar nuestras alegrías nos hace humanos y nos acerca al propósito de servir a los demás con amor desinteresado.',
    date: '01 Mar 2024',
    image: 'https://images.unsplash.com/photo-1529268209110-62be1d87fe75?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function ReflexionesPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
              onClick={() => { setActiveCategory(cat); setExpandedId(null); }}
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
            <article 
              key={ref.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setExpandedId(expandedId === ref.id ? null : ref.id)}
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
                
                <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${expandedId === ref.id ? 'mb-6' : 'line-clamp-2 mb-4'}`}>
                  {expandedId === ref.id ? ref.content : ref.excerpt}
                </p>

                <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-tighter">
                  <span>{expandedId === ref.id ? 'Leer menos' : 'Leer reflexión completa'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${expandedId === ref.id ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
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
