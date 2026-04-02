"use client";

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white border-t border-white/5 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Columna Marca */}
          <div className="md:col-span-5">
            <div className="text-3xl font-black text-white tracking-tighter italic font-serif mb-6 leading-none">
              Caminando <br />
              <span className="text-red-600">en la Fé</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
              Un espacio dedicado al acompañamiento espiritual, la reflexión profunda y el encuentro a través de la música y la palabra.
            </p>
            <div className="mt-10 flex gap-4">
              {[
                { icon: 'fa-facebook-f', link: '#' },
                { icon: 'fa-instagram', link: '#' },
                { icon: 'fa-youtube', link: '#' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl text-gray-400 border border-white/10 hover:border-red-600 hover:text-white hover:bg-red-600 cursor-pointer transition-all duration-300"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columna Enlaces Rápidos */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/50 mb-10">
              Contenido
            </h3>
            <ul className="space-y-5">
              <li><Link href="/" className="text-gray-400 hover:text-white font-bold transition-colors">Inicio</Link></li>
              <li><Link href="/reflexiones" className="text-gray-400 hover:text-white font-bold transition-colors">Reflexiones</Link></li>
              <li><Link href="/lecturas" className="text-gray-400 hover:text-white font-bold transition-colors">Lecturas</Link></li>
              <li><Link href="/musica" className="text-gray-400 hover:text-white font-bold transition-colors">Música Original</Link></li>
              <li><Link href="/galeria" className="text-gray-400 hover:text-white font-bold transition-colors underline decoration-red-600 decoration-2 underline-offset-4">Galería de Celebraciones</Link></li>
            </ul>
          </div>

          {/* Columna Info / Contacto */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50 mb-10">
              Contacto
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-2">Ubicación</p>
                <p className="text-gray-300 text-lg font-medium leading-tight">Barrio Bancario, Calle Tacuarí, Mendoza</p>
              </div>
              <div>
                <p className="text-red-600 font-black text-xs uppercase tracking-widest mb-2">Horarios</p>
                <p className="text-gray-300">Atención Personal: Lun-Vie 09:00 - 18:00</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">
            © {year} CAMINANDO EN LA FÉ — TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex gap-10 text-[10px] font-black text-gray-500 uppercase tracking-tighter">
            <span className="hover:text-red-600 transition-colors cursor-pointer">Privacidad</span>
            <Link href="/terminos" className="hover:text-red-600 transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
