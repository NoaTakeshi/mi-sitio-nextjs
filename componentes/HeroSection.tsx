import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="text-center max-w-3xl">

        <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
          Fotografía & Arte Visual
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Capturando{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            momentos
          </span>{" "}
          únicos
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          Explora nuestra colección de fotografías y obras de arte.
          Cada imagen cuenta una historia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#gallery"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Ver Galería →
          </Link>
          <Link
            href="/#contact"
            className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Contáctanos
          </Link>
        </div>

        <div className="mt-16 flex justify-center gap-12 text-center">
          {[
            { value: "200+", label: "Fotografías" },
            { value: "15+", label: "Categorías" },
            { value: "5K+", label: "Visitantes" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
      
    </section>
  )
}