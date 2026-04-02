import Link from 'next/link';

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-6 uppercase tracking-tighter">
          Términos y Condiciones
        </h1>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* Finalidad */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              1. Finalidad del Portal
            </h2>
            <p className="mb-4 text-lg">
              El portal <strong>Caminando la Fe - Fabián</strong> tiene como propósito principal ofrecer un espacio de acompañamiento espiritual, reflexión cristiana y recursos didácticos para músicos y guitarristas católicos.
            </p>
            <p>
              Buscamos facilitar el acceso a lecturas sagradas, composiciones musicales originales y herramientas técnicas (como el transportador de acordes) para enriquecer la vida de fe de nuestra comunidad y el servicio litúrgico.
            </p>
          </section>

          {/* Exención de Responsabilidad */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              2. Exención de Responsabilidad
            </h2>
            <p className="mb-4">
              A pesar de nuestro compromiso con la veracidad y la calidad del contenido, el usuario debe tener en cuenta lo siguiente:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Consejo Espiritual:</strong> Las reflexiones y textos aquí presentados son de carácter orientativo y testimonial. No pretenden sustituir la dirección espiritual personal ni el magisterio oficial de la Iglesia.
              </li>
              <li>
                <strong>Exactitud Técnica:</strong> Las herramientas de teoría musical (transportador y diagramas) se ofrecen "tal cual". No nos hacemos responsables por errores técnicos o interpretaciones musicales derivadas del uso de las mismas.
              </li>
              <li>
                <strong>Enlaces Externos:</strong> Este portal puede contener videos (YouTube) o enlaces a sitios de terceros. No tenemos control sobre el contenido, políticas de privacidad o disponibilidad de dichos sitios externos.
              </li>
              <li>
                <strong>Disponibilidad:</strong> No garantizamos que el portal esté libre de interrupciones o errores técnicos, ni nos responsabilizamos por daños derivados de problemas en el servidor o la conexión del usuario.
              </li>
            </ul>
          </section>

          {/* Propiedad Intelectual */}
          <section>
            <h2 className="text-xl font-bold text-red-600 uppercase tracking-widest mb-4">
              3. Propiedad Intelectual
            </h2>
            <p>
              La música original y las reflexiones firmadas por Fabián son propiedad del autor. Se permite su uso para fines pastorales y litúrgicos, siempre que se cite la fuente y no se utilicen con fines lucrativos sin autorización expresa.
            </p>
          </section>

          <div className="pt-10 border-t border-slate-100 mt-12 flex justify-between items-center">
            <p className="text-sm text-slate-400">Última actualización: Abril 2026</p>
            <Link href="/" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
