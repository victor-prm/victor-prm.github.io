"use client";

import { useEffect, useRef } from "react";
import MiniMasonry from "minimasonry";
import Image from "next/image";

export default function ImageGallery({ images = [] }) {
  const containerRef = useRef(null);
  const masonryRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    masonryRef.current?.destroy();

    masonryRef.current = new MiniMasonry({
      container: containerRef.current,
      baseWidth: 480,
      gutterX: 32,
      gutterY: 64,
      ultimateGutter: 16,
      surroundingGutter: false,
     /*  minify: true */
    });

    return () => masonryRef.current?.destroy();
  }, [images]);

  const handleImageLoad = () => {
    masonryRef.current?.layout();
  };

  return (
    <div ref={containerRef} className="masonry relative">
      {images.map((img, i) => (
        <div key={i} className="absolute rounded-lg overflow-clip grayscale-100 hover:grayscale-0 duration-300 cursor-crosshair">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="w-full h-auto pointer-events-none"
            onLoad={handleImageLoad}
          />
        </div>
      ))}
    </div>
  );
}