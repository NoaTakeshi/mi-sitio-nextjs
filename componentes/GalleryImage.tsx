"use client";
// components/GalleryImage.tsx
// Client: hover interactivo con overlay y caption.

import { useState } from "react";
import Image from "next/image";
import type { GalleryImageType } from "@/types";

export default function GalleryImage({ image }: { image: GalleryImageType }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <figure 
            className="relative overflow-hidden rounded-lg border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={image.src} 
                alt={image.alt}
                width={image.width} 
                height={image.height}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
            />
            <figcaption className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-white text-sm">{image.alt}</p>
            </figcaption>
        </figure>
    );
}