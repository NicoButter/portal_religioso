"use client";

import { useState } from 'react';
import NavBar from '../components/NavBar';

const misCanciones = [
  {
    id: 1,
    title: 'Canto de Esperanza',
    album: 'Reflejos del Alma',
    duration: '4:25',
    youtubeId: '2OEL4P1Rz04',
    description: 'Una melodía compuesta para encontrar paz en momentos de incertidumbre.',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Silencio Interior',
    album: 'Reflejos del Alma',
    duration: '3:50',
    youtubeId: '1ZYbU82GVz4',
    description: 'Composición instrumental que invita a la meditación profunda.',
    cover: 'https://images.unsplash.com/photo-1514320298574-2c9d6275621e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Caminando en la Fé',
    album: 'Sencillos',
    duration: '5:10',
    youtubeId: '2OEL4P1Rz04', // Usando IDs de ejemplo
    description: 'Letra y música inspirada en el camino comunitario.',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function MusicaPage() {
  const [activeTrack, setActiveTrack] = useState(misCanciones[0]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <NavBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Reproductor Principal - Estilo Spotify/Moderno */}
          <div className="lg:w-2/3">
            <header className="mb-12">
              <span className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-3 block">Música Original</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                Fabián <span className="text-red-600 block md:inline"></span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                Escucha mis composiciones originales creadas para acompañar tu oración y momentos de paz. Cada nota es una intención.
              </p>
            </header>

            {/* Video / Player Container */}
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] bg-black aspect-video transition-all duration-700">
                <iframe
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                    title={activeTrack.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                
                {/* Overlay de información sobre el reproductor */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none">
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="text-red-500 text-xs font-black uppercase mb-1">{activeTrack.album}</div>
                            <h2 className="text-3xl font-bold">{activeTrack.title}</h2>
                        </div>
                        <div className="text-sm font-mono opacity-50">{activeTrack.duration}</div>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-sm font-black uppercase text-gray-500 mb-2 tracking-widest">Sobre esta canción</h4>
                <p className="text-gray-300 leading-relaxed italic">&ldquo;{activeTrack.description}&rdquo;</p>
            </div>
          </div>

          {/* Playlist - Lista de selección lateral */}
          <div className="lg:w-1/3">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10 sticky top-32">
                <h2 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-red-600"></span>
                    Mi Repertorio
                </h2>
                
                <div className="space-y-4">
                    {misCanciones.map((track) => (
                        <button
                            key={track.id}
                            onClick={() => setActiveTrack(track)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                                activeTrack.id === track.id 
                                    ? 'bg-red-600 shadow-[0_10px_20px_rgba(220,38,38,0.3)] scale-[1.02]' 
                                    : 'hover:bg-white/10 bg-white/5'
                            }`}
                        >
                            <div className="relative w-14 h-14 shrink-0 overflow-hidden rounded-xl">
                                <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                                {activeTrack.id === track.id && (
                                    <div className="absolute inset-0 bg-red-600/40 flex items-center justify-center">
                                        <div className="flex gap-1 items-end h-3">
                                            <div className="w-1 bg-white animate-[music-bar_0.6s_ease-in-out_infinite]"></div>
                                            <div className="w-1 bg-white animate-[music-bar_0.8s_ease-in-out_infinite_0.1s]"></div>
                                            <div className="w-1 bg-white animate-[music-bar_0.7s_ease-in-out_infinite_0.2s]"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="text-left overflow-hidden">
                                <p className={`font-bold truncate ${activeTrack.id === track.id ? 'text-white' : 'text-gray-200'}`}>
                                    {track.title}
                                </p>
                                <p className={`text-xs uppercase font-black tracking-tight ${activeTrack.id === track.id ? 'text-red-200' : 'text-gray-500'}`}>
                                    {track.album}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-4">Disponible también en</p>
                    <div className="flex justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
                        <span className="cursor-not-allowed">Spotify</span>
                        <span className="cursor-not-allowed">Apple Music</span>
                        <span className="cursor-not-allowed">Deezer</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </main>

      <style jsx global>{`
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
      `}</style>
    </div>
  );
}
