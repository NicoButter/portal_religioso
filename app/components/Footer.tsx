export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-12 border-t">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Portal Espiritual. Creado por Fabián Cavero.</p>
      </div>
    </footer>
  );
}
