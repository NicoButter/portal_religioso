"use client";

interface ChordPosition {
  frets: (number | "x")[]; // 0 for open, 'x' for muted, number for fret
  fingers?: number[];     // Optional finger numbers (1-4)
  barre?: number;         // Optional barre fret
}

const SHAPES: { [key: string]: ChordPosition } = {
  "C": { frets: ["x", 3, 2, 0, 1, 0], fingers: [0, 3, 2, 0, 1, 0] },
  "D": { frets: ["x", "x", 0, 2, 3, 2], fingers: [0, 0, 0, 1, 3, 2] },
  "E": { frets: [0, 2, 2, 1, 0, 0], fingers: [0, 2, 3, 1, 0, 0] },
  "F": { frets: [1, 3, 3, 2, 1, 1], barre: 1, fingers: [1, 3, 4, 2, 1, 1] },
  "G": { frets: [3, 2, 0, 0, 0, 3], fingers: [3, 2, 0, 0, 0, 4] },
  "A": { frets: ["x", 0, 2, 2, 2, 0], fingers: [0, 0, 1, 2, 3, 0] },
  "B": { frets: ["x", 2, 4, 4, 4, 2], barre: 2, fingers: [0, 1, 2, 3, 4, 1] },
  "Am": { frets: ["x", 0, 2, 2, 1, 0], fingers: [0, 0, 2, 3, 1, 0] },
  "Em": { frets: [0, 2, 2, 0, 0, 0], fingers: [0, 2, 3, 0, 0, 0] },
  "Dm": { frets: ["x", "x", 0, 2, 3, 1], fingers: [0, 0, 0, 2, 3, 1] },
  "Cm": { frets: ["x", 3, 5, 5, 4, 3], barre: 3 },
  "Fm": { frets: [1, 3, 3, 1, 1, 1], barre: 1 },
  "Gm": { frets: [3, 5, 5, 3, 3, 3], barre: 3 },
  "Bm": { frets: ["x", 2, 4, 4, 3, 2], barre: 2 },
  // Sostenidos / Bemoles (Mayores)
  "C#": { frets: ["x", 4, 6, 6, 6, 4], barre: 4 },
  "Db": { frets: ["x", 4, 6, 6, 6, 4], barre: 4 },
  "D#": { frets: ["x", 6, 8, 8, 8, 6], barre: 6 },
  "Eb": { frets: ["x", 6, 8, 8, 8, 6], barre: 6 },
  "F#": { frets: [2, 4, 4, 3, 2, 2], barre: 2 },
  "Gb": { frets: [2, 4, 4, 3, 2, 2], barre: 2 },
  "G#": { frets: [4, 6, 6, 5, 4, 4], barre: 4 },
  "Ab": { frets: [4, 6, 6, 5, 4, 4], barre: 4 },
  "A#": { frets: ["x", 1, 3, 3, 3, 1], barre: 1 },
  "Bb": { frets: ["x", 1, 3, 3, 3, 1], barre: 1 },
  // Sostenidos / Bemoles (Menores)
  "C#m": { frets: ["x", 4, 6, 6, 5, 4], barre: 4 },
  "Dbm": { frets: ["x", 4, 6, 6, 5, 4], barre: 4 },
  "D#m": { frets: ["x", 6, 8, 8, 7, 6], barre: 6 },
  "Ebm": { frets: ["x", 6, 8, 8, 7, 6], barre: 6 },
  "F#m": { frets: [2, 4, 4, 2, 2, 2], barre: 2 },
  "Gbm": { frets: [2, 4, 4, 2, 2, 2], barre: 2 },
  "G#m": { frets: [4, 6, 6, 4, 4, 4], barre: 4 },
  "Abm": { frets: [4, 6, 6, 4, 4, 4], barre: 4 },
  "A#m": { frets: ["x", 1, 3, 3, 2, 1], barre: 1 },
  "Bbm": { frets: ["x", 1, 3, 3, 2, 1], barre: 1 },
};

export default function ChordDiagram({ name, data }: { name: string, data?: ChordPosition }) {
  const position = data || SHAPES[name] || { frets: [0,0,0,0,0,0] };

  // Calcular el traste mínimo para mostrar a la izquierda si es mayor a 1
  const minFret = position.frets.reduce((min: number, f) => {
    if (f === "x" || f === 0) return min;
    return Math.min(min, f as number);
  }, 99);

  const startFret = minFret > 3 ? minFret : 1;

  return (
    <div className="flex flex-col items-center p-2 bg-white rounded border border-slate-100 shadow-sm w-32 shrink-0 select-none">
      <span className="text-sm font-bold text-slate-800 mb-2">{name}</span>
      <svg width="70" height="74" viewBox="0 0 70 74" className="overflow-visible pointer-events-none">
        {/* Fret Number */}
        {startFret > 1 && (
          <text x="2" y="18" fontSize="10" className="fill-slate-400 font-bold">{startFret}</text>
        )}

        {/* Nut (Ceja) */}
        <line x1="15" y1="10" x2="55" y2="10" stroke="#334155" strokeWidth={startFret === 1 ? "3" : "1"} />
        
        {/* Frets (Trastes) */}
        {[1, 2, 3, 4, 5].map(f => (
          <line key={f} x1="15" y1={10 + f * 12} x2="55" y2={10 + f * 12} stroke="#cbd5e1" strokeWidth="1" />
        ))}

        {/* Strings (Cuerdas) */}
        {[0, 1, 2, 3, 4, 5].map(s => (
          <line key={s} x1={15 + s * 8} y1="10" x2={15 + s * 8} y2="70" stroke="#94a3b8" strokeWidth="1" />
        ))}

        {/* Barre (Cejilla) */}
        {position.barre && (
            <rect 
                x={15} 
                y={10 + (position.barre - startFret) * 12 + 4} 
                width="40" 
                height="4" 
                rx="2" 
                fill="#475569" 
                opacity="0.6"
            />
        )}

        {/* Fingers (Dedos/Posiciones) */}
        {position.frets.map((fret, sIndex) => {
          if (fret === "x") {
            return <text key={sIndex} x={13 + sIndex * 8} y="8" fontSize="8" className="fill-red-500 font-bold">x</text>;
          }
          if (fret === 0) {
            return <circle key={sIndex} cx={15 + sIndex * 8} cy="6" r="2.5" fill="none" stroke="#64748b" strokeWidth="1" />;
          }
          
          const relativeFret = (fret as number) - startFret;
          
          // No dibujar círculo si el traste coincide con la cejilla (barre)
          if (position.barre && fret === position.barre) {
            return null;
          }

          return (
            <circle 
              key={sIndex} 
              cx={15 + sIndex * 8} 
              cy={10 + relativeFret * 12 + 6} 
              r="3.5" 
              fill="#1e293b" 
            />
          );
        })}
      </svg>
    </div>
  );
}
