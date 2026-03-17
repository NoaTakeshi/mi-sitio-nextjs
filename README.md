This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 📷 GalerIA

> Espacio dedicado al arte visual y la fotografía. Cada imagen cuenta una historia única.

---

## 🌐 Demo en vivo

[https://kind-bush-04449360f.6.azurestaticapps.net/](https://kind-bush-04449360f.6.azurestaticapps.net/)

---

## 📋 Descripción

**GalerIA** es una aplicación web de galería fotográfica y arte visual, diseñada para exhibir colecciones de fotografías, compartir artículos de blog sobre técnicas fotográficas y locaciones, y permitir que los visitantes contacten al equipo.

---

## 🏗️ Arquitectura — Tiers y Layers

La aplicación sigue una arquitectura de **3 tiers** (niveles físicos de despliegue) y **4 layers** (capas lógicas de responsabilidad).

---

### 🔷 Tiers (Niveles físicos)

```
╔══════════════════════════════════════════════════════════════╗
║  TIER 1 — Cliente (Navegador)                                ║
║  ┌────────────────┐  ┌─────────────────┐  ┌───────────────┐ ║
║  │ UI Components  │  │  Pages (Next.js) │  │  next/image   │ ║
║  │ Navbar · Hero  │  │  / · /blog       │  │  Lazy load    │ ║
║  │ Gallery · Footer│  │  /contacto      │  │  Optimización │ ║
║  └────────────────┘  └─────────────────┘  └───────────────┘ ║
╚══════════════════════╦═══════════════════════════════════════╝
                       ║  HTTP Request
╔══════════════════════╩═══════════════════════════════════════╗
║  TIER 2 — Servidor (Next.js Runtime / Build)                 ║
║  ┌──────────────┐  ┌──────────────┐  ┌────────────────────┐ ║
║  │  SSG / SSR   │  │  API Routes  │  │  Image Optimizer   │ ║
║  │  Pre-render  │  │  Contacto    │  │  Resize · WebP     │ ║
║  └──────────────┘  └──────────────┘  └────────────────────┘ ║
║  ┌──────────────────────────┐  ┌───────────────────────────┐ ║
║  │  Contenido estático      │  │  Routing                  │ ║
║  │  /public/img · Blog      │  │  next.config · app router │ ║
║  └──────────────────────────┘  └───────────────────────────┘ ║
╚══════════════════════╦═══════════════════════════════════════╝
                       ║  Build / Deploy
╔══════════════════════╩═══════════════════════════════════════╗
║  TIER 3 — Infraestructura (Azure)                            ║
║  ┌──────────────────┐  ┌────────────────┐  ┌─────────────┐  ║
║  │ Static Web Apps  │  │   CDN Global   │  │    CI/CD    │  ║
║  │ Hosting + SSL    │  │  Caché · Edge  │  │ GitHub Act. │  ║
║  └──────────────────┘  └────────────────┘  └─────────────┘  ║
╚══════════════════════════════════════════════════════════════╝
```

---

### 🔶 Layers (Capas lógicas)

```
┌──────────────────────────────────────────────────────────────┐
│  LAYER 1 — Presentación                                      │
│  Renderiza la interfaz de usuario en el navegador            │
│  Navbar · Hero · Gallery · BlogSection · ContactForm · Footer│
└──────────────────────────────────────────────────────────────┘
        ↕ props / eventos
┌──────────────────────────────────────────────────────────────┐
│  LAYER 2 — Lógica de Aplicación                              │
│  Maneja navegación, rutas, ciclo de vida de páginas          │
│  SSG · SSR · API Routes · next/image · next.config           │
└──────────────────────────────────────────────────────────────┘
        ↕ import / fetch
┌──────────────────────────────────────────────────────────────┐
│  LAYER 3 — Datos / Contenido                                 │
│  Fuente de verdad: imágenes y artículos del blog             │
│  /public/img/  ·  /blog/*.js (MDX o JS estático)             │
└──────────────────────────────────────────────────────────────┘
        ↕ build / deploy
┌──────────────────────────────────────────────────────────────┐
│  LAYER 4 — Infraestructura                                   │
│  Hosting, distribución y automatización                      │
│  Azure Static Web Apps · CDN · HTTPS · GitHub Actions        │
└──────────────────────────────────────────────────────────────┘
```

---

### 📊 Resumen Tiers vs Layers

| # | Tier | Layer | Tecnología principal |
|---|------|-------|----------------------|
| 1 | Cliente | Presentación | React · Next.js · CSS |
| 2 | Servidor | Lógica de aplicación | Next.js Runtime · API Routes |
| 2 | Servidor | Datos / Contenido | Archivos estáticos · /public |
| 3 | Infraestructura | Infraestructura | Azure Static Web Apps · CDN |

> En producción opera como una arquitectura **2-tier efectiva**: el servidor Next.js actúa en *build time* (no en runtime) para la mayoría de rutas estáticas, por lo que el usuario final interactúa directamente con el **cliente ↔ CDN de Azure**.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| **Framework** | [Next.js](https://nextjs.org/) (Create Next App) |
| **Lenguaje** | JavaScript / TypeScript |
| **Renderizado de imágenes** | `next/image` con optimización automática |
| **Hosting** | [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) |
| **CDN** | Azure (distribución global integrada) |

---

## 📁 Estructura del Proyecto

```
galeria/
├── public/
│   └── img/
│       ├── img1.jpg       # Luz perfecta en fotografía (blog)
│       ├── img2.jpg       # Lugares para fotografiar en Colombia (blog)
│       ├── img3.jpg       # Edición minimalista (blog)
│       ├── img4.jpg       # Lobo bajo la luna (galería)
│       ├── img5.jpg       # Hulk (galería)
│       ├── img6.jpg       # Robot en escritorio (galería)
│       ├── img7.jpg       # Robot con luces (galería)
│       ├── img8.jpg       # Teacher's (galería)
│       └── img9.jpg       # Arte digital abstracto (galería)
├── pages/ (o app/)
│   ├── index.js           # Página principal (Hero + Galería + Blog + Contacto)
│   ├── blog/
│   │   ├── index.js       # Listado del blog
│   │   ├── capturar-luz-perfecta.js
│   │   ├── lugares-fotografiar-colombia.js
│   │   └── edicion-minimalista.js
│   ├── privacy.js         # Política de privacidad
│   └── terms.js           # Términos de uso
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Gallery.jsx
│   ├── BlogSection.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── next.config.js
└── package.json
```

---

## 🗂️ Secciones de la Aplicación

### 1. 🏠 Hero / Inicio (`/`)
- Título principal: *"Capturando momentos únicos"*
- Subtítulo descriptivo y botones CTA: **Ver Galería** y **Contáctanos**
- Estadísticas destacadas:
  - 📸 **200+** Fotografías
  - 🗂️ **15+** Categorías
  - 👥 **5K+** Visitantes

### 2. 🖼️ Galería (`/#gallery`)
- Grid de imágenes optimizadas con `next/image`
- Obras exhibidas: Lobo bajo la luna, Hulk, Robot en escritorio, Robot con luces, Teacher's, Arte digital abstracto

### 3. 📝 Blog (`/blog`)
- Listado de artículos sobre fotografía y arte visual
- Artículos publicados:
  - *Cómo capturar la luz perfecta en fotografía* — Técnica (12 Mar 2025)
  - *Los mejores lugares para fotografiar en Colombia* — Locaciones (5 Mar 2025)
  - *Edición minimalista: menos es más* — Edición (28 Feb 2025)

### 4. ✉️ Contacto (`/#contact`)
- Formulario de contacto directo
- Información de contacto:
  - 📧 hola@galeria.com
  - 📍 Bogotá, Colombia
  - 🕐 Lun - Vie, 9am - 6pm

### 5. 🔒 Páginas Legales
- `/privacy` — Política de privacidad
- `/terms` — Términos de uso

---

## 🚀 Despliegue

El proyecto está desplegado en **Azure Static Web Apps**, lo que proporciona:

- ✅ Hosting gratuito para aplicaciones estáticas y Next.js
- ✅ HTTPS automático con certificado SSL
- ✅ CDN global integrada para carga rápida de imágenes
- ✅ Integración nativa con GitHub Actions para CI/CD
- ✅ URLs limpias y enrutamiento de SPA

---

## ⚡ Optimización de Imágenes

Se utiliza el componente `next/image` que provee:

- Lazy loading automático
- Redimensionamiento responsivo (`w=3840`, `q=75`)
- Formato WebP cuando el navegador lo soporta
- Servicio desde CDN de Azure

---

## 🔗 Navegación

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/#gallery` | Sección galería |
| `/#contact` | Sección contacto |
| `/blog` | Listado del blog |
| `/blog/:slug` | Artículo individual |
| `/galería` | Página galería completa |
| `/contacto` | Página de contacto |
| `/privacy` | Política de privacidad |
| `/terms` | Términos y condiciones |

---

## 📬 Contacto

| Canal | Detalle |
|-------|---------|
| Email | hola@galeria.com |
| Ubicación | Bogotá, Colombia |
| Horario | Lunes a Viernes, 9am – 6pm |

---

## 📄 Licencia

© 2026 **GalerIA** — Todos los derechos reservados.
