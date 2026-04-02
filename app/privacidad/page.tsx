import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-6 uppercase tracking-tighter">
          Política de Privacidad
        </h1>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* Introducción */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              1. Nuestro Compromiso
            </h2>
            <p className="mb-4">
              En <strong>Caminando en la Fé</strong>, respetamos su privacidad y nos comprometemos a ser transparentes sobre cómo funciona nuestro portal. Esta política explica de manera sencilla qué sucede con su información mientras navega con nosotros.
            </p>
          </section>

          {/* Datos del Usuario */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              2. Recopilación de Datos
            </h2>
            <p className="mb-4">
              Queremos que se sienta seguro: <strong>este portal no solicita, almacena ni procesa datos personales identificables</strong> (como nombres, correos electrónicos, direcciones o números de teléfono) para la navegación general.
            </p>
            <p>
              No contamos con sistemas de registro de usuarios ni boletines informativos que requieran la entrega de su información privada.
            </p>
          </section>

          {/* Herramientas de Terceros */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              3. Servicios de Terceros (YouTube y Google Maps)
            </h2>
            <p className="mb-4">
              Nuestro portal integra servicios de terceros para enriquecer su experiencia:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>YouTube:</strong> Al reproducir nuestros videos musicales, YouTube puede utilizar cookies y recolectar datos de visualización según sus propias políticas de privacidad.
              </li>
              <li>
                <strong>Google Maps:</strong> Utilizamos Google Maps para mostrar nuestra ubicación. Este servicio puede recopilar datos de ubicación y uso de acuerdo con los términos de Google.
              </li>
            </ul>
            <p className="mt-4 italic text-sm">
              Le recomendamos revisar las políticas de privacidad de Google para comprender cómo manejan su información.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              4. Uso de Cookies
            </h2>
            <p>
              Utilizamos únicamente cookies técnicas esenciales para el funcionamiento del sitio. Por ejemplo, aquellas que permiten el correcto funcionamiento del <strong>Transportador de Acordes</strong> durante su sesión de navegación. Estas cookies no se utilizan para fines publicitarios ni de seguimiento persistente.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              5. Contacto
            </h2>
            <p>
              Si tiene alguna duda sobre esta Política de Privacidad, puede consultarnos directamente a través de los medios de contacto proporcionados en el pie de página de este portal.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-100 mt-12 flex justify-between items-center">
            <p className="text-sm text-slate-400">Vigente desde: Abril 2026</p>
            <Link href="/" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
