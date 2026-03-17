import BlogCard from "./BlogCard";

const posts = [
  {
    title: "Cómo capturar la luz perfecta en fotografía",
    excerpt: "La iluminación es el alma de toda fotografía. Aprende a leer la luz natural y usarla a tu favor en cualquier momento del día.",
    date: "12 Mar 2025",
    category: "Técnica",
    slug: "capturar-luz-perfecta",
    imageUrl: "/img/img1.jpg",
  },
  {
    title: "Los mejores lugares para fotografiar en Colombia",
    excerpt: "Desde el Amazonas hasta el Caribe, Colombia esconde rincones increíbles que todo fotógrafo debe conocer.",
    date: "5 Mar 2025",
    category: "Locaciones",
    slug: "lugares-fotografiar-colombia",
    imageUrl: "/img/img2.jpg",
  },
  {
    title: "Edición minimalista: menos es más",
    excerpt: "Descubre cómo una edición sutil puede transformar una foto ordinaria en una obra de arte sin excesos.",
    date: "28 Feb 2025",
    category: "Edición",
    slug: "edicion-minimalista",
    imageUrl: "/img/img3.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Blog
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Últimas entradas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Consejos, técnicas y lugares para inspirar tu próxima sesión fotográfica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition"
          >
            Ver todos los artículos
          </a>
        </div>

      </div>
    </section>
  )
}