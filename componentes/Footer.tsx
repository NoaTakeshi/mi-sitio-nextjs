import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-900 text-pink-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-3">📷 GalerIA</h2>
          <p className="text-sm leading-relaxed max-w-xs text-pink-200">
            Espacio dedicado al arte visual y la fotografía. Cada imagen cuenta una historia única.
          </p>

          <div className="flex gap-4 mt-6">
            {[
              { label: "Instagram", href: "#", icon: "📸" },
              { label: "Twitter", href: "#", icon: "🐦" },
              { label: "Pinterest", href: "#", icon: "📌" },
            ].map((red) => (
              <a                        
                key={red.label}
                href={red.href}
                aria-label={red.label}
                className="w-10 h-10 bg-pink-800 rounded-full flex items-center justify-center hover:bg-pink-700 transition text-sm text-pink-200"
              >
                {red.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm">
            {["Inicio", "Galería", "Blog", "Contacto"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase() === "inicio" ? "" : item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm text-pink-200">
            <li>📧 hola@galeria.com</li>
            <li>📍 Bogotá, Colombia</li>
            <li>🕐 Lun - Vie, 9am - 6pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-pink-300">
          <p>© {new Date().getFullYear()} GalerIA — Todos los derechos reservados</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition">Privacidad</Link>
            <Link href="/terms" className="hover:text-white transition">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}