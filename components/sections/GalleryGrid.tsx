"use client";

import Image from "next/image";

interface GalleryItem {
  src: string;
  alt: string;
  suburb: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <p className="font-bold text-lg mb-1">{item.suburb}</p>
              <p className="text-sm text-white/80">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
