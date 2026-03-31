import Link from 'next/link';
import type { ReactNode } from 'react';

type CardProps = {
  title?: string;
  href?: string;
  children: ReactNode;
};

export default function Card({ title, href, children }: CardProps) {
  return (
    <article className="bg-white rounded-lg border border-slate-200 shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-6 flex flex-col justify-between">
      <div>
        {title && <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>}
        <div className="text-slate-700">{children}</div>
      </div>

      {href && (
        <div className="mt-4">
          <Link href={href} className="text-blue-600 hover:underline font-medium">Ver más →</Link>
        </div>
      )}
    </article>
  );
}
