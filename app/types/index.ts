// types/index.ts
// Interfaces compartidas por todos los componentes del sitio

/** Imagen de la galería */
export interface GalleryImageType {
  id: number;
  src: string;      // Ruta relativa desde public/
  alt: string;      // Texto alternativo (accesibilidad)
  width: number;
  height: number;
}

/** Entrada del blog */
export interface BlogPost {
  id: number;
  slug: string;     // URL-friendly: "mi-primer-post"
  title: string;
  date: string;
  excerpt: string;  // Resumen corto del post
  image: { src: string; alt: string };
}

/** Datos del formulario de contacto */
export interface ContactFormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

/** Respuesta del Server Action de contacto */
export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
}

/** Configuración global del sitio */
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  year: number;
}
