
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Bienvenido a tu Portal Espiritual</h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">
          Un espacio personal para reflexionar, encontrar inspiración y disfrutar de música espiritual. Explora las reflexiones, escucha música y nutre tu espíritu.
        </p>
      </main>
    </div>
  );
}
