import NavBar from '../components/NavBar';

const reflexiones = [
  { title: 'La Paz Interior', text: 'La paz interior se encuentra en el silencio del corazón.' },
  { title: 'La Gratitud', text: 'Agradece cada día por las bendiciones que recibes.' },
  { title: 'El Perdón', text: 'Perdonar libera el alma y sana el corazón.' },
];

export default function ReflexionesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Reflexiones</h1>
        <ul className="space-y-6">
          {reflexiones.map((ref, idx) => (
            <li key={idx} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-blue-700 mb-2">{ref.title}</h2>
              <p className="text-gray-700">{ref.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
