// components/Gallery.tsx
// Server Component: obtiene datos e itera sobre ellos.
// Patrón Server → Client: pasa props a GalleryImage.

import GalleryImage from "./GalleryImage";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
    return (
        <section className="mt-5 px-5 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                    <GalleryImage key={image.id} image={image} />
                ))}
            </div>
        </section>
    );
}