"use client"

import { useState } from "react"
import { galleryImages, blogPosts } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  const q = query.toLowerCase()

  const filteredImages = galleryImages.filter((img) =>
    img.alt.toLowerCase().includes(q)
  )

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q)
  )

  const hasResults = query.length > 0

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Buscar imágenes o artículos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
      />

      {hasResults && (
        <div className="absolute top-12 left-0 right-0 bg-white rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto border border-gray-100">

          {/* Galería */}
          {filteredImages.length > 0 && (
            <div className="p-4 border-b">
              <p className="text-xs font-bold text-gray-400 uppercase mb-3">Galería</p>
              <div className="grid grid-cols-3 gap-2">
                {filteredImages.map((img) => (
                  <div key={img.id} className="relative h-20 rounded-lg overflow-hidden">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 truncate">
                      {img.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog */}
          {filteredPosts.length > 0 && (
            <div className="p-4">
              <p className="text-xs font-bold text-gray-400 uppercase mb-3">Blog</p>
              <div className="flex flex-col gap-3">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex gap-3 items-center hover:bg-gray-50 rounded-lg p-2 transition"
                    onClick={() => setQuery("")}
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image src={post.image.src} alt={post.image.alt} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.title}</p>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Sin resultados */}
          {filteredImages.length === 0 && filteredPosts.length === 0 && (
            <div className="p-6 text-center text-gray-400 text-sm">
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  )
}