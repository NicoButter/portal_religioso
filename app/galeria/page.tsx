"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const celebraciones = [
  {
    id: 1,
    title: 'Bautismo de Nicolás',
    description: 'Este domingo compartimos la alegría del nuevo nacimiento espiritual de Nicolás junto a su familia.',
    category: 'Bautismos',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Boda de Martín y Elena',
    description: 'Una celebración del amor y el compromiso ante Dios en nuestra parroquia.',
    category: 'Casamientos',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Misa de Ramos',
    description: 'La comunidad reunida para dar inicio a la Semana Santa con fé y alegría.',
    category: 'Misas',
    date: '08 Mar 2024',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Retiro Espiritual Juvenil',
    description: 'Momentos de reflexión y compañerismo en nuestra jornada de jóvenes.',
    category: 'Eventos',
    date: '01 Mar 2024',
    image: 'https://images.unsplash.com/photo-1523580494863-6f30312246d5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Bautismo de Sofía',
    description: 'Damos la bienvenida a Sofía a nuestra gran familia cristiana.',
    category: 'Bautismos',
    date: '25 Feb 2024',
    image: 'https://images.unsplash.com/photo-1544111307-320d0f283286?q=80&w=2070&auto=format&fit=crop'
  }
];

const categories = ['Todas', 'Bautismos', 'Casamientos', 'Misas', 'Eventos'];

export default function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState<typeof celebraciones[0] | null>(null);

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
                  : 'bg-white text-gray-400 border border-gray-100 hover:border-red-600 hover:text-red-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Estilo Moderno */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              onClick={() => setSelectedImage(item)}
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
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox / Modal de Imagen Ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-2/3 bg-black">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain max-h-[70vh] md:max-h-none" />
            </div>
            <div className="md:w-1/3 p-12 flex flex-col justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <span className="text-red-600 text-xs font-black uppercase tracking-widest mb-4 italic">{selectedImage.category}</span>
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter uppercase leading-none">{selectedImage.title}</h2>
              <div className="w-12 h-1 bg-red-600 mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">&ldquo;{selectedImage.description}&rdquo;</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}