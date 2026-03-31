import NavBar from '../components/NavBar';

const lecturas = [
  {
    title: 'La Fe y la Esperanza',
    author: 'Fabián Cavero',
    content: 'La fe es la luz que guía nuestro camino en los momentos de oscuridad. La esperanza es el motor que nos impulsa a seguir adelante, confiando en que todo tiene un propósito.'
  },
  {
    title: 'El Valor del Silencio',
    author: 'Fabián Cavero',
    content: 'En el silencio encontramos respuestas profundas. Es allí donde el alma dialoga con lo divino y se renueva el espíritu.'
  }
];

export default function LecturasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Lecturas</h1>
        <p className="mb-6 text-black">Material espiritual creado por el editor de la web, Fabián Cavero.</p>
        <ul className="space-y-6">
          {lecturas.map((lectura, idx) => (
            <li key={idx} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-black mb-1">{lectura.title}</h2>
              <p className="text-sm text-gray-500 mb-2">por {lectura.author}</p>
              <p className="text-gray-700">{lectura.content}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
