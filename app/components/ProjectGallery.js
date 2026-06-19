"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ProjectGallery({ title, images, gradient }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-52 ${gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_55%)]" />
        <p className="relative text-lg font-semibold text-white/90">{title}</p>
      </div>
    );
  }

  const scrollTo = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index];
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || container.children.length === 0) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;
    Array.from(container.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex h-44 snap-x snap-mandatory gap-2 overflow-x-auto bg-gradient-to-br p-2 scrollbar-none sm:h-52 ${
          images.length === 1 ? "" : "scroll-smooth"
        } ${gradient}`}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className={`relative shrink-0 snap-center overflow-hidden rounded-lg border border-white/10 bg-zinc-950/40 ${
              images.length === 1
                ? "h-full w-full"
                : "h-full w-[85%] sm:w-[70%]"
            }`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-1">
            <button
              type="button"
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              className="rounded-full bg-zinc-950/70 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-1">
            <button
              type="button"
              onClick={() => scrollTo(Math.min(images.length - 1, activeIndex + 1))}
              className="rounded-full bg-zinc-950/70 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
