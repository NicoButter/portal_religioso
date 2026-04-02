"use client";

import { useState } from 'react';
import Image from 'next/image';

const REZOS = [
  {
    titulo: "Padre Nuestro",
    imagen: "/images/reszos/resto_padre_nuestro.jpeg",
    texto: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."
  },
  {
    titulo: "Ave María",
    imagen: "/images/reszos/rezo_ave_maria.jpeg",
    texto: "Dios te salve María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la ahora de nuestra muerte. Amén."
  },
  {
    titulo: "Gloria",
    imagen: "/images/reszos/rezo_gloria.jpeg",
    texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."
  },
  {
    titulo: "Credo de los Apóstoles",
    imagen: "/images/reszos/rezo_credo_apostoles.jpeg",
    texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al third día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."
  },
  {
    titulo: "Salve",
    imagen: "/images/reszos/rezo_salve.jpeg",
    texto: "Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este desierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén."
  }
];

const PASOS_ROSARIO = [
  {
    paso: "1",
    instruccion: "Hacer la Señal de la Cruz y rezar el Credo de los Apóstoles.",
    rezo: "Señal de la Cruz: Por la señal de la Santa Cruz..."
  },
  {
    paso: "2",
    instruccion: "Rezar el Padre Nuestro.",
    rezo: "En la primera cuenta grande."
  },
  {
    paso: "3",
    instruccion: "Rezar tres Ave María (por la fe, esperanza y caridad).",
    rezo: "En las siguientes tres cuentas pequeñas."
  },
  {
    paso: "4",
    instruccion: "Rezar el Gloria.",
    rezo: "Antes de comenzar el primer misterio."
  },
  {
    paso: "5",
    instruccion: "Anunciar el Misterio correspondiente y rezar el Padre Nuestro.",
    rezo: "Depende del día de la semana (Gozosos, Dolorosos, Gloriosos o Luminosos)."
  },
  {
    paso: "6",
    instruccion: "Rezar las 10 Ave Marías meditando el misterio.",
    rezo: "Una por cada cuenta de la decena."
  },
  {
    paso: "7",
    instruccion: "Rezar el Gloria y la Oración de Fátima.",
    rezo: "'¡Oh Jesús mío, perdona nuestros pecados...!'"
  },
  {
    paso: "8",
    instruccion: "Repetir para los 5 misterios y terminar con la Salve.",
    rezo: "Al finalizar las 5 decenas."
  }
];

export default function RezosPage() {
  const [tab, setTab] = useState('tradicionales');
  const [selectedRezo, setSelectedRezo] = useState<null | {titulo: string, texto: string, imagen?: string}>(null);

  const openRezoModal = (titulo: string) => {
    const rezo = REZOS.find(r => r.titulo.toLowerCase().includes(titulo.toLowerCase()));
    if (rezo) setSelectedRezo(rezo);
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Modal para rezos */}
        {selectedRezo && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedRezo(null)}>
            <div className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
              {selectedRezo.imagen && (
                <div className="h-40 w-full relative bg-slate-100">
                  <Image 
                    src={selectedRezo.imagen} 
                    alt={selectedRezo.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
              )}
              <div className="p-8 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-serif italic text-red-600">{selectedRezo.titulo}</h2>
                  <button onClick={() => setSelectedRezo(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-slate-700 leading-relaxed italic text-lg whitespace-pre-line bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  &quot;{selectedRezo.texto}&quot;
                </p>
                <button 
                  onClick={() => setSelectedRezo(null)} 
                  className="w-full mt-8 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-4">Oración y Devoción</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Encuentra aquí los rezos fundamentales de nuestra fé y una guía práctica para profundizar en la meditación del Santo Rosario.
          </p>
        </div>

        {/* Selector de Pestañas */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setTab('tradicionales')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${tab === 'tradicionales' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            Rezos Tradicionales
          </button>
          <button 
            onClick={() => setTab('rosario')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${tab === 'rosario' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
          >
            Cómo rezar el Rosario
          </button>
        </div>

        {/* Contenido: Rezos Tradicionales */}
        {tab === 'tradicionales' && (
          <div className="grid gap-8">
            {REZOS.map((rezo, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                <div className={`w-full relative bg-slate-100 ${rezo.titulo === 'Ave María' ? 'h-96 md:h-[600px] md:w-1/2' : 'md:w-1/3 h-48 md:h-auto'}`}>
                  <Image 
                    src={rezo.imagen} 
                    alt={rezo.titulo}
                    fill
                    priority={rezo.titulo === 'Ave María'}
                    loading={rezo.titulo === 'Ave María' ? undefined : 'lazy'}
                    className="object-contain md:object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    sizes={rezo.titulo === 'Ave María' ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <h2 className="text-2xl font-serif italic text-red-600 mb-4">{rezo.titulo}</h2>
                  <p className="text-slate-700 leading-relaxed italic whitespace-pre-line text-lg">
                    &quot;{rezo.texto}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contenido: Guía del Rosario */}
        {tab === 'rosario' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="relative h-64 md:h-96 w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <Image
                  src="/images/reszos/rezo_rosario.jpeg"
                  alt="Rezo del Santo Rosario"
                  fill
                  priority
                  className="object-contain bg-slate-900 hover:scale-105 transition-all duration-700"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col items-center justify-end pb-8">
                  <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2 shadow-sm">Guía del Santo Rosario</h2>
                  <p className="text-slate-300 text-sm italic tracking-widest uppercase">&quot;El Rosario es la cadena que nos une a Dios&quot;</p>
                </div>
              </div>
              
              <div className="p-8">
                {/* Significado de las Partes */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 text-sm uppercase mb-2">La Cruz</h4>
                    <p className="text-xs text-red-700 leading-relaxed">Representa nuestra redención. Iniciamos profesando nuestra fé con el Credo.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-800 text-sm uppercase mb-2">La Cruz (Ave Marías)</h4>
                    <p className="text-xs text-blue-700 leading-relaxed">Pequeñas para Ave Marías (Rosas a María) y grandes para el Padre Nuestro.</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-800 text-sm uppercase mb-2">Los Misterios</h4>
                    <p className="text-xs text-amber-700 leading-relaxed">Escenas de la vida de Jesús y María que meditamos para imitar sus virtudes.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {PASOS_ROSARIO.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start group">
                      <div className="bg-red-50 text-red-600 w-10 h-10 rounded-full flex items-center justify-center font-black flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors uppercase">
                        {item.paso}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{item.instruccion}</h3>
                        <div className="flex flex-wrap gap-2 items-center">
                          <p className="text-slate-500 italic text-sm">{item.rezo}</p>
                          {item.instruccion.includes("Padre Nuestro") && (
                            <button onClick={() => openRezoModal("Padre Nuestro")} className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold hover:bg-red-200 transition-colors uppercase tracking-wider">Ver Rezo</button>
                          )}
                          {item.instruccion.includes("Ave María") && (
                            <button onClick={() => openRezoModal("Ave María")} className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold hover:bg-blue-200 transition-colors uppercase tracking-wider">Ver Rezo</button>
                          )}
                          {item.instruccion.includes("Credo") && (
                            <button onClick={() => openRezoModal("Credo")} className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold hover:bg-slate-300 transition-colors uppercase tracking-wider">Ver Rezo</button>
                          )}
                          {item.instruccion.includes("Gloria") && (
                            <button onClick={() => openRezoModal("Gloria")} className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold hover:bg-yellow-200 transition-colors uppercase tracking-wider">Ver Rezo</button>
                          )}
                          {item.instruccion.includes("Salve") && (
                            <button onClick={() => openRezoModal("Salve")} className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold hover:bg-emerald-200 transition-colors uppercase tracking-wider">Ver Rezo</button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-inner">
                  <h4 className="font-serif italic text-2xl text-slate-900 mb-6 text-center">Misterios según el día</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-10">
                    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span><strong>Lunes y Sábados:</strong> Gozosos</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span><strong>Martes y Viernes:</strong> Dolorosos</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span><strong>Miércoles y Domingos:</strong> Gloriosos</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <span className="w-2 h-2 bg-white border border-slate-300 rounded-full shadow-sm"></span>
                      <span><strong>Jueves:</strong> Luminosos</span>
                    </li>
                  </ul>

                  <div className="space-y-10 pt-8 border-t border-slate-200">
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <h5 className="font-bold text-slate-800 text-sm uppercase tracking-[0.2em] mb-4">Misterios Gozosos <span className="text-[10px] font-normal text-slate-400 block mt-1">(Infancia de Jesús)</span></h5>
                      <p className="text-[13px] text-slate-500 leading-loose italic">
                        1. La Encarnación del Hijo de Dios. <br/>
                        2. La Visitación de Nuestra Señora a su prima Santa Isabel. <br/>
                        3. El Nacimiento del Hijo de Dios en el portal de Belén. <br/>
                        4. La Purificación de la Virgen Santísima y presentación del Niño. <br/>
                        5. El Niño Jesús perdido y hallado en el Templo.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <h5 className="font-bold text-slate-800 text-sm uppercase tracking-[0.2em] mb-4">Misterios Luminosos <span className="text-[10px] font-normal text-slate-400 block mt-1">(Vida Pública)</span></h5>
                      <p className="text-[13px] text-slate-500 leading-loose italic">
                        1. El Bautismo de Jesús en el Jordán. <br/>
                        2. El autorrevelación en las bodas de Caná. <br/>
                        3. El anuncio del Reino de Dios invitando a la conversión. <br/>
                        4. La Transfiguración. <br/>
                        5. La Institución de la Eucaristía.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <h5 className="font-bold text-slate-800 text-sm uppercase tracking-[0.2em] mb-4">Misterios Dolorosos <span className="text-[10px] font-normal text-slate-400 block mt-1">(Pasión y Muerte)</span></h5>
                      <p className="text-[13px] text-slate-500 leading-loose italic">
                        1. La Oración de Nuestro Señor en el Huerto. <br/>
                        2. La Flagelación del Señor atado a la columna. <br/>
                        3. La Coronación de espinas. <br/>
                        4. Jesús cargando con la Cruz camino del Calvario. <br/>
                        5. La Crucifixión y Muerte de Nuestro Señor.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <h5 className="font-bold text-slate-800 text-sm uppercase tracking-[0.2em] mb-4">Misterios Gloriosos <span className="text-[10px] font-normal text-slate-400 block mt-1">(Resurrección y Gloria)</span></h5>
                      <p className="text-[13px] text-slate-500 leading-loose italic">
                        1. La Resurrección del Señor. <br/>
                        2. La Ascensión del Señor a los cielos. <br/>
                        3. La Venida del Espíritu Santo sobre los Apóstoles. <br/>
                        4. La Asunción de Nuestra Señora a los cielos en cuerpo y alma. <br/>
                        5. La Coronación de la Santísima Virgen como Reina de todo lo created.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
