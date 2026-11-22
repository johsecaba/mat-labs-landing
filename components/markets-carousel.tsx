"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Messages } from "@/lib/i18n/en";

const DURATION = 6000;

const media = [
  {
    id: "ore-mining",
    src: "/media/markets/ore-mining.webp",
    position: "68% 55%",
  },
  {
    id: "commerce",
    src: "/media/markets/commerce.webp",
    position: "50% 45%",
  },
  {
    id: "automotive",
    src: "/media/markets/automotive.webp",
    position: "50% 50%",
  },
  {
    id: "robotics",
    src: "/media/markets/robotics.webp",
    position: "50% 45%",
  },
] as const;

export function MarketsCarousel({ t }: { t: Messages["home"]["markets"] }) {
  const items = media.map((m, i) => ({ ...m, ...t.items[i] }));
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.1,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const paused = hover || !visible;
  const go = (i: number, focus = false) => {
    const n = (i + items.length) % items.length;
    setActive(n);
    if (focus) tabs.current[n]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1, true);
    else if (e.key === "ArrowLeft") go(active - 1, true);
    else if (e.key === "Home") go(0, true);
    else if (e.key === "End") go(items.length - 1, true);
    else return;
    e.preventDefault();
  };

  const cur = items[active];

  return (
    <div
      ref={root}
      className="shell"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="rounded-[20px] bg-[#111] p-2 md:rounded-[28px] md:p-3">
        <div className="relative overflow-hidden rounded-[10px] bg-black">
          <div
            role="tabpanel"
            id={`mk-panel-${cur.id}`}
            aria-labelledby={`mk-tab-${cur.id}`}
            className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]"
          >
            {items.map((it, i) => (
              <Image
                key={it.id}
                src={it.src}
                alt={i === active ? it.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                priority={i === 0}
                style={{ objectPosition: it.position }}
                className={`object-cover transition-opacity duration-700 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.35)_32%,rgba(0,0,0,0.05)_55%,rgba(0,0,0,0.55)_100%)]" />

            <div
              key={cur.id}
              className="mk-copy absolute inset-x-0 top-0 flex flex-col gap-5 p-5 md:flex-row md:items-start md:justify-between md:p-9"
            >
              <div className="max-w-md">
                <p className="text-[22px] font-medium leading-tight tracking-[-0.02em] text-white">
                  {cur.headline}
                </p>
                <p className="mt-2 text-[15px] leading-snug text-[#c4c4cc]">{cur.sub}</p>
              </div>
              <a
                href="#contact"
                className="mk-link group w-fit shrink-0 pb-1.5 text-[15px] text-white"
              >
                {cur.link}{" "}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div
              role="tablist"
              aria-label={t.tablist}
              onKeyDown={onKey}
              className="absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/10 bg-black/35 backdrop-blur-xl md:grid-cols-4"
            >
              {items.map((it, i) => {
                const on = i === active;
                return (
                  <button
                    key={it.id}
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`mk-tab-${it.id}`}
                    aria-selected={on}
                    aria-controls={`mk-panel-${it.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => go(i)}
                    className={`relative px-4 py-4 text-left transition-colors md:px-6 md:py-6 ${
                      i % 2 === 1 ? "border-l border-white/10" : ""
                    } ${i > 0 ? "md:border-l md:border-white/10" : ""} ${
                      i > 1 ? "border-t border-white/10 md:border-t-0" : ""
                    } ${on ? "mk-tab-on text-white" : "text-[#8c8c95] hover:text-[#d8d8e0]"}`}
                  >
                    <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px]">
                      {on && (
                        <span
                          key={`${active}-${reduced}`}
                          className="mk-progress block h-[2px] origin-left"
                          style={{
                            animationDuration: `${DURATION}ms`,
                            animationPlayState: paused ? "paused" : "running",
                            animationName: reduced ? "none" : undefined,
                            transform: reduced ? "scaleX(1)" : undefined,
                          }}
                          onAnimationEnd={() => go(active + 1)}
                        />
                      )}
                    </span>
                    <span className="mono block text-xs text-[#8c8c95]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-[15px] font-medium tracking-[-0.01em] md:mt-2 md:text-lg">
                      {it.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-[#8c8c95]">
        {t.creditPrefix}{" "}
        <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">
          CC BY-SA 4.0
        </a>
        {t.creditSuffix}
      </p>
    </div>
  );
}
