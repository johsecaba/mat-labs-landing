"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
  /** Size to the current word instead of the longest one. Use when text follows the word. */
  fit?: boolean;
};

export function WordCarousel({ words, interval = 2200, fit = false }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative -mb-[0.2em] inline-grid overflow-hidden pb-[0.2em] align-top">
      {/* Invisible copies reserve the width of the longest word. */}
      {(fit ? [words[index]] : words).map((w) => (
        <span key={`size-${w}`} className="invisible col-start-1 row-start-1">
          {w}
        </span>
      ))}
      {words.map((w, i) => {
        const offset = (i - index + words.length) % words.length;
        const state =
          offset === 0 ? "translate-y-0 opacity-100" : offset === words.length - 1 ? "-translate-y-full opacity-0" : "translate-y-full opacity-0";
        return (
          <span
            key={w}
            className={`edge-text col-start-1 row-start-1 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${state} ${
              fit && offset !== 0 ? "absolute left-0 top-0 whitespace-nowrap" : ""
            }`}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}
