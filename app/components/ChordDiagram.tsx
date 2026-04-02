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
};

export default function ChordDiagram({ name, data }: { name: string, data?: ChordPosition }) {
  const position = data || SHAPES[name] || { frets: [0,0,0,0,0,0] };

  return (
    <div className="flex flex-col items-center p-2 bg-white rounded border border-slate-100 shadow-sm w-32 shrink-0 select-none">
      <span className="text-sm font-bold text-slate-800 mb-2">{name}</span>
      <svg width="60" height="70" viewBox="0 0 60 70" className="overflow-visible pointer-events-none">
        {/* Nut (Ceja) */}
        <line x1="10" y1="10" x2="50" y2="10" stroke="#334155" strokeWidth="3" />
        
        {/* Frets (Trastes) */}
        {[1, 2, 3, 4, 5].map(f => (
          <line key={f} x1="10" y1={10 + f * 12} x2="50" y2={10 + f * 12} stroke="#cbd5e1" strokeWidth="1" />
        ))}

        {/* Strings (Cuerdas) */}
        {[0, 1, 2, 3, 4, 5].map(s => (
          <line key={s} x1={10 + s * 8} y1="10" x2={10 + s * 8} y2="70" stroke="#94a3b8" strokeWidth="1" />
        ))}

        {/* Barre (Cejilla) */}
        {position.barre && (
            <rect 
                x={10} 
                y={10 + (position.barre - 1) * 12 + 4} 
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
            return <text key={sIndex} x={8 + sIndex * 8} y="8" fontSize="8" className="fill-red-500 font-bold">x</text>;
          }
          if (fret === 0) {
            return <circle key={sIndex} cx={10 + sIndex * 8} cy="6" r="2.5" fill="none" stroke="#64748b" strokeWidth="1" />;
          }
          return (
            <circle 
              key={sIndex} 
              cx={10 + sIndex * 8} 
              cy={10 + (fret as number) * 12 - 6} 
              r="3.5" 
              fill="#1e293b" 
            />
          );
        })}
      </svg>
    </div>
  );
}
