"use client";

import { useRef, useState } from "react";
import Image from "next/image";

function HorizontalGallery({ title, images, gradient }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
        className={`flex h-52 snap-x snap-mandatory gap-2 overflow-x-auto bg-zinc-950/80 p-2 scrollbar-none sm:h-72 ${
          images.length === 1 ? "" : "scroll-smooth"
        } ${gradient}`}
      >
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`relative shrink-0 snap-center overflow-hidden rounded-lg border border-white/10 bg-zinc-950 ${
              images.length === 1 ? "h-full w-full" : "h-full w-[88%] sm:w-[72%]"
            }`}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-contain object-top"
              sizes="(max-width: 768px) 88vw, 720px"
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
              className="rounded-full bg-zinc-950/80 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white"
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
              className="rounded-full bg-zinc-950/80 p-1.5 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-3 left-1/2 flex max-w-[80%] -translate-x-1/2 flex-wrap justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={`dot-${src}-${i}`}
                type="button"
                onClick={() => scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
          <p className="absolute top-2 right-3 rounded-full bg-zinc-950/70 px-2 py-0.5 text-[10px] text-zinc-300 backdrop-blur-sm">
            {activeIndex + 1} / {images.length}
          </p>
        </>
      )}
    </div>
  );
}

function VerticalGallery({ title, images, gradient }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <div className={`relative ${gradient}`}>
      <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
        <p className="text-[11px] text-zinc-400">
          Scroll vertically · swipe horizontally for next domain
        </p>
        <p className="rounded-full bg-zinc-950/70 px-2 py-0.5 text-[10px] text-zinc-300">
          {activeIndex + 1} / {images.length}
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="max-h-[min(70vh,640px)] overflow-y-auto overflow-x-hidden scroll-smooth bg-zinc-950/80 scrollbar-none"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            className="block w-full h-auto"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-zinc-950/85 p-2 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white disabled:opacity-30"
              aria-label="Previous domain"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(images.length - 1, activeIndex + 1))}
              disabled={activeIndex === images.length - 1}
              className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-zinc-950/85 p-2 text-white/80 backdrop-blur-sm transition hover:bg-zinc-950 hover:text-white disabled:opacity-30"
              aria-label="Next domain"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 border-t border-white/5 px-3 py-2.5">
          {images.map((src, i) => (
            <button
              key={`dot-${src}-${i}`}
              type="button"
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-5 bg-violet-400" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to domain ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery({ title, images, gradient, layout = "horizontal" }) {
  if (!images || images.length === 0) {
    return (
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-64 ${gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_55%)]" />
        <p className="relative text-lg font-semibold text-white/90">{title}</p>
      </div>
    );
  }

  if (layout === "vertical") {
    return <VerticalGallery title={title} images={images} gradient={gradient} />;
  }

  return <HorizontalGallery title={title} images={images} gradient={gradient} />;
}
