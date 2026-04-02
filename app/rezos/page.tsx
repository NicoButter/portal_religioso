"use client";

import { useState } from 'react';

const REZOS = [
  {
    titulo: "Padre Nuestro",
    texto: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén."
  },
  {
    titulo: "Ave María",
    texto: "Dios te salve María, llena eres de gracia, el Señor es contigo; bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la ahora de nuestra muerte. Amén."
  },
  {
    titulo: "Gloria",
    texto: "Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén."
  },
  {
    titulo: "Credo de los Apóstoles",
    texto: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia Católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén."
  },
  {
    titulo: "Salve",
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

  return (
    <main className="min-h-screen pt-24 pb-12 bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
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
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-serif italic text-red-600 mb-4">{rezo.titulo}</h2>
                <p className="text-slate-700 leading-relaxed italic whitespace-pre-line text-lg">
                  &quot;{rezo.texto}&quot;
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Contenido: Guía del Rosario */}
        {tab === 'rosario' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="bg-slate-900 p-8 text-white text-center">
                <h2 className="text-3xl font-serif italic mb-2">Guía del Santo Rosario</h2>
                <p className="text-slate-400 text-sm italic">&quot;El Rosario es la cadena que nos une a Dios&quot;</p>
              </div>
              
              <div className="p-8">
                {/* Significado de las Partes */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 text-sm uppercase mb-2">La Cruz</h4>
                    <p className="text-xs text-red-700 leading-relaxed">Representa nuestra redención. Iniciamos profesando nuestra fé con el Credo.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-800 text-sm uppercase mb-2">Las Cuentas</h4>
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
                        <p className="text-slate-500 italic text-sm">{item.rezo}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-slate-50 rounded-2xl border-l-4 border-red-600">
                  <h4 className="font-bold text-slate-900 mb-2">Misterios según el día:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-8">
                    <li><strong>Lunes y Sábados:</strong> Gozosos</li>
                    <li><strong>Martes y Viernes:</strong> Dolorosos</li>
                    <li><strong>Miércoles y Domingos:</strong> Gloriosos</li>
                    <li><strong>Jueves:</strong> Luminosos</li>
                  </ul>

                  {/* Detalle de los Misterios para aprendizaje */}
                  <div className="space-y-6 pt-6 border-t border-slate-200">
                    <div>
                      <h5 className="font-bold text-red-700 text-sm uppercase tracking-widest mb-3">Misterios Gozosos (Infancia de Jesús)</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        1. La Encarnación del Hijo de Dios. <br/>
                        2. La Visitación de Nuestra Señora a su prima Santa Isabel. <br/>
                        3. El Nacimiento del Hijo de Dios en el portal de Belén. <br/>
                        4. La Purificación de la Virgen Santísima y presentación del Niño. <br/>
                        5. El Niño Jesús perdido y hallado en el Templo.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-700 text-sm uppercase tracking-widest mb-3">Misterios Luminosos (Vida Pública)</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        1. El Bautismo de Jesús en el Jordán. <br/>
                        2. El autorrevelación en las bodas de Caná. <br/>
                        3. El anuncio del Reino de Dios invitando a la conversión. <br/>
                        4. La Transfiguración. <br/>
                        5. La Institución de la Eucaristía.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-700 text-sm uppercase tracking-widest mb-3">Misterios Dolorosos (Pasión y Muerte)</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        1. La Oración de Nuestro Señor en el Huerto. <br/>
                        2. La Flagelación del Señor atado a la columna. <br/>
                        3. La Coronación de espinas. <br/>
                        4. Jesús cargando con la Cruz camino del Calvario. <br/>
                        5. La Crucifixión y Muerte de Nuestro Señor.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold text-red-700 text-sm uppercase tracking-widest mb-3">Misterios Gloriosos (Resurrección y Gloria)</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">
                        1. La Resurrección del Señor. <br/>
                        2. La Ascensión del Señor a los cielos. <br/>
                        3. La Venida del Espíritu Santo sobre los Apóstoles. <br/>
                        4. La Asunción de Nuestra Señora a los cielos en cuerpo y alma. <br/>
                        5. La Coronación de la Santísima Virgen como Reina de todo lo creado.
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
