"use client";

import { useState, useEffect } from "react";
import ChordDiagram from "../components/ChordDiagram";

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const CHORD_MAJORS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const CHORD_MINORS = ["Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "A#m", "Bm"];

const ALIASES: { [key: string]: string } = {
  "Db": "C#",
  "Eb": "D#",
  "Gb": "F#",
  "Ab": "G#",
  "Bb": "A#",
};

export default function TransposerPage() {
  const [selectedChords, setSelectedChords] = useState<string[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    console.log("STATE:", selectedChords);
  }, [selectedChords]);

  const transposeChord = (chord: string, semitones: number) => {
    // Regex to match Note + Accidentals (e.g., C#, Db) + the rest (m, 7, etc.)
    const match = chord.match(/^([A-G][#b]?)(.*)/);
    if (!match) return chord;

    let root = match[1];
    const suffix = match[2];

    // Normalize flats to sharps
    if (ALIASES[root]) {
        root = ALIASES[root];
    }

    const index = NOTES.indexOf(root);
    if (index === -1) return chord;

    let newIndex = (index + semitones) % 12;
    if (newIndex < 0) newIndex += 12;

    return NOTES[newIndex] + suffix;
  };

  const addChord = (chord: string) => {
    setSelectedChords(prev => 
      prev.includes(chord) ? prev.filter(c => c !== chord) : [...prev, chord]
    );
  };

  const getTransposedText = () => {
    return selectedChords.map(c => transposeChord(c, offset)).join(" ");
  };

  const transposedChords = selectedChords.map(c => transposeChord(c, offset));

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center uppercase tracking-tight">Transportador de Acordes</h1>

        <div className="space-y-10">
          {/* Selector de Acordes (Tarjetitas con diagramas) */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Selecciona Acordes</h3>
            
            {/* Fila Mayores */}
            <div>
              <p className="text-xs font-bold text-slate-400 mb-2 ml-1">ACORDES MAYORES</p>
              <div className="flex flex-wrap gap-4 overflow-x-auto py-4 px-2 scrollbar-hide min-h-[140px] items-center">
                {CHORD_MAJORS.map(chord => {
                  const isSelected = selectedChords.includes(chord);
                  return (
                    <button 
                      type="button"
                      key={chord}
                      onClick={() => addChord(chord)}
                      className={`relative group cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg p-1 ${
                        isSelected 
                          ? "ring-2 ring-slate-800 scale-105 shadow-lg bg-slate-800" 
                          : "opacity-60 hover:opacity-100 bg-white shadow-sm border border-slate-100"
                      }`}
                    >
                      <div className="scale-90 sm:scale-100 transform-gpu">
                        <ChordDiagram name={chord} />
                      </div>
                      {isSelected && (
                        <div 
                          className="absolute -top-2 -right-2 bg-slate-100 text-slate-800 rounded-full p-1 shadow-md border border-slate-200 z-10 transition-all hover:bg-red-500 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            addChord(chord);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Fila Menores */}
            <div>
              <p className="text-xs font-bold text-slate-400 mb-2 ml-1">ACORDES MENORES (Pentatónica / Comunes)</p>
              <div className="flex flex-wrap gap-4 overflow-x-auto py-4 px-2 scrollbar-hide min-h-[140px] items-center">
                {CHORD_MINORS.map(chord => {
                  const isSelected = selectedChords.includes(chord);
                  return (
                    <button 
                      type="button"
                      key={chord}
                      onClick={() => addChord(chord)}
                      className={`relative group cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg p-1 ${
                        isSelected 
                          ? "ring-2 ring-slate-800 scale-105 shadow-lg bg-slate-800" 
                          : "opacity-60 hover:opacity-100 bg-white shadow-sm border border-slate-100"
                      }`}
                    >
                      <div className="scale-90 sm:scale-100 transform-gpu">
                        <ChordDiagram name={chord} />
                      </div>
                      {isSelected && (
                        <div 
                          className="absolute -top-2 -right-2 bg-slate-100 text-slate-800 rounded-full p-1 shadow-md border border-slate-200 z-10 transition-all hover:bg-red-500 hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            addChord(chord);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Tus Acordes Seleccionados
            </label>
            <div className="relative group">
              <div className="w-full p-4 border border-slate-200 rounded-lg font-mono text-lg bg-slate-50/50 min-h-[60px] flex flex-wrap gap-2 items-center">
                {selectedChords.length > 0 ? (
                  selectedChords.map((c, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm animate-in fade-in zoom-in duration-300"
                    >
                      {c}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400 italic">Haz clic en los diagramas superiores para añadir acordes...</span>
                )}
              </div>
              {selectedChords.length > 0 && (
                <button 
                  onClick={() => setSelectedChords([])}
                  className="absolute top-2 right-2 text-xs text-slate-400 hover:text-red-500 font-bold bg-white px-2 py-1 rounded border border-slate-100 shadow-sm transition-colors"
                >
                  Limpiar Todo
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-100 p-4 rounded-xl border border-slate-200">
            <div className="text-slate-700 font-medium">
              Transportar: 
              <span className="text-slate-900 font-bold text-xl ml-2">{offset > 0 ? `+${offset}` : offset}</span>
              <span className="text-slate-500 text-sm ml-2">
                (semitonos) {Math.abs(offset) >= 2 && ` = ${offset / 2} ${Math.abs(offset / 2) === 1 ? 'tono' : 'tonos'}`}
                {Math.abs(offset) === 1 && ` = 1/2 tono`}
                {Math.abs(offset) % 2 !== 0 && Math.abs(offset) > 1 && ` (y medio)`}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setOffset(prev => prev - 1)}
                className="w-12 h-12 flex items-center justify-center bg-white hover:bg-slate-200 border border-slate-200 rounded-full text-slate-800 font-bold transition-all shadow-sm active:translate-y-1"
              >
                -1
              </button>
              <button
                onClick={() => setOffset(0)}
                className="px-6 h-12 flex items-center justify-center bg-slate-800 hover:bg-black text-white rounded-full font-medium transition-all shadow-md active:translate-y-1"
              >
                Reset
              </button>
              <button
                onClick={() => setOffset(prev => prev + 1)}
                className="w-12 h-12 flex items-center justify-center bg-white hover:bg-slate-200 border border-slate-200 rounded-full text-slate-800 font-bold transition-all shadow-sm active:translate-y-1"
              >
                +1
              </button>
            </div>
          </div>

          {selectedChords.length > 0 && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-2xl border-4 border-slate-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                </div>
                <h2 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold border-b border-white/10 pb-2 flex justify-between items-center">
                  <span>Cancionero Transportado</span>
                  <span className="bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded text-[10px] ring-1 ring-yellow-500/30">PREVISUALIZACIÓN</span>
                </h2>
                <div className="font-mono text-4xl sm:text-5xl font-black tracking-[0.2em] leading-relaxed whitespace-pre-wrap break-words text-yellow-400 drop-shadow-[0_2px_10px_rgba(250,204,21,0.3)]">
                  {getTransposedText()}
                </div>
              </div>

              {/* Diagramas de los acordes resultantes */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Cómo tocar estos acordes:</h3>
                <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  <div className="flex gap-4 min-w-max px-2">
                    {Array.from(new Set(transposedChords)).map((c, idx) => (
                      <div key={`${c}-${idx}`} className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 hover:ring-slate-900/20 transition-all hover:shadow-md transform hover:-translate-y-1">
                        <ChordDiagram name={c} />
                        <p className="text-center text-[10px] font-bold text-slate-400 mt-1 uppercase">{c}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
