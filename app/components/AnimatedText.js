"use client";

import { useEffect, useState } from "react";
import { animatedPhrases } from "../data/portfolio";

const phraseColors = [
  "from-violet-400 via-fuchsia-400 to-violet-300",
  "from-cyan-400 via-sky-400 to-cyan-300",
  "from-amber-400 via-orange-400 to-amber-300",
  "from-rose-400 via-pink-400 to-rose-300",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % animatedPhrases.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-12 text-2xl font-medium text-zinc-400 sm:text-3xl lg:text-4xl">
      I build{" "}
      <span className="relative inline-block min-w-[10ch] align-bottom sm:min-w-[14ch]">
        <span
          className={`inline-block bg-gradient-to-r ${phraseColors[index % phraseColors.length]} bg-[length:200%_auto] bg-clip-text font-semibold text-transparent ${
            isAnimating ? "animate-word-exit" : "animate-word-enter animate-text-shimmer"
          }`}
          key={index}
        >
          {animatedPhrases[index]}
        </span>
      </span>
      
    </p>
  );
}
