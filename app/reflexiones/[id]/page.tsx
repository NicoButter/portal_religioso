import { reflexiones } from "../../data";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ReflexionPost({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = reflexiones.find((r) => r.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          <header className="mb-12 text-center">
            <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-none">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm font-bold uppercase tracking-widest">
              <span>{post.date}</span>
              <span>•</span>
              <span>Por Fabián</span>
            </div>
          </header>

          <div className="relative aspect-video mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-xl prose-red max-w-none">
            <p className="text-2xl text-gray-900 font-medium leading-relaxed mb-12 italic border-l-4 border-red-600 pl-8">
              {post.excerpt}
            </p>
            <div className="text-gray-700 leading-loose space-y-8 text-xl">
              {post.content}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
