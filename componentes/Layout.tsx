import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm mt-12">
        © {new Date().getFullYear()} GalerIA — Todos los derechos reservados
      </footer>
    </div>
  );
}