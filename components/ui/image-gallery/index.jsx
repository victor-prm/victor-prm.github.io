"use client";

import { useEffect, useRef } from "react";
import MiniMasonry from "minimasonry";
import Image from "next/image";
import PageSection from "@/components/layout/page-section";

function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

export default function ImageGallery({ images = [] }) {
  const containerRef = useRef(null);
  const masonryRef = useRef(null);

  const initMasonry = () => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;

    let columns = 1;
    const baseWidth = width > 800 ? 480 : 280;
    const gutter = width > 800 ? 32 : 16;


    if (masonryRef.current) {
      masonryRef.current.destroy();
    }

    masonryRef.current = new MiniMasonry({
      container,
      baseWidth,
      gutterX: gutter,
      gutterY: gutter,
      ultimateGutter: gutter,
      surroundingGutter: false
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const delayedInit = setTimeout(() => {
      initMasonry();
    }, 50);

    const handleResize = debounce(() => {
      initMasonry();
    }, 100);

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(delayedInit);
      masonryRef.current?.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  const handleImageLoad = () => {
    if (masonryRef.current) {
      masonryRef.current.layout();
    }
  };

  return (

    <div ref={containerRef} className="masonry relative min-h-screen animate-fade-in-scale">
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute rounded-2xl overflow-clip cursor-crosshair animate-fade-in"
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="w-full h-auto pointer-events-none rounded-xl"
            onLoad={handleImageLoad}
          />
        </div>
      ))}
    </div>

  );
}