import NavBar from '../components/NavBar';

const videos = [
  { title: 'Música para Meditar', url: 'https://www.youtube.com/embed/2OEL4P1Rz04' },
  { title: 'Cantos Espirituales', url: 'https://www.youtube.com/embed/1ZYbU82GVz4' },
];

export default function MusicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Música Espiritual</h1>
        <div className="space-y-8">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-blue-700 mb-2">{video.title}</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-64 rounded"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
