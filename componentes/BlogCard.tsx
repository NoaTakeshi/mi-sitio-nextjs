import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

export default function BlogCard({ title, excerpt, date, category, slug, imageUrl }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group">
      
      {/* Imagen */}
      <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">📸</div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Badge categoría */}
        <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{date}</span>
          <Link
            href={`/blog/${slug}`}
            className="text-purple-600 font-semibold hover:underline"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}