"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ViewMode, ZoomFn } from "@/components/mesh-viewer-canvas";
import type { Messages } from "@/lib/i18n/en";

const Canvas3D = dynamic(() => import("@/components/mesh-viewer-canvas"), {
  ssr: false,
});

const modes: ViewMode[] = ["mesh", "pixels", "surface"];

export function MeshViewer({ t }: { t: Messages["home"]["mesh"] }) {
  const box = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<ZoomFn | null>(null);
  const [active, setActive] = useState(false); // lazy-load trigger
  const [ready, setReady] = useState(false);
  const [engaged, setEngaged] = useState(false); // clicked into the box
  const [mode, setMode] = useState<ViewMode>("mesh");
  const onReady = useCallback(() => setReady(true), []);
  const engagedRef = useRef(false);

  useEffect(() => {
    engagedRef.current = engaged;
  }, [engaged]);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Wheel only zooms with Ctrl/Cmd held, or after clicking into the box.
  // Otherwise the event is left alone so the page scrolls normally.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (!(e.ctrlKey || e.metaKey || engagedRef.current)) return;
      e.preventDefault();
      zoomRef.current?.(Math.exp(e.deltaY * 0.0025));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[760px]">
      <div
        ref={box}
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest("button")) return;
          setEngaged(true);
        }}
        onMouseLeave={() => setEngaged(false)}
        className={`relative aspect-[4/5] max-h-[70vh] w-full overflow-hidden rounded-xl border bg-black transition-colors sm:aspect-[16/10] ${
          engaged ? "border-white/50" : "border-white/15"
        }`}
      >
        <Image
          src="/media/high-resolution-mesh.png"
          alt={t.alt}
          fill
          sizes="(min-width: 800px) 760px, 100vw"
          className="object-contain"
        />
        {active ? (
          <div
            className={`absolute inset-0 cursor-grab bg-black transition-opacity duration-500 active:cursor-grabbing ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          >
            <Canvas3D mode={mode} onReady={onReady} zoomRef={zoomRef} />
          </div>
        ) : null}

        <p className="pointer-events-none absolute left-4 top-4 z-10 text-xs text-steel-on-dark">
          {t.hint}
        </p>

        <div className="absolute right-3 top-3 z-10 flex flex-col border border-white/20 bg-black/70 backdrop-blur">
          <button
            type="button"
            aria-label={t.zoomIn}
            onClick={() => zoomRef.current?.(0.8)}
            className="h-9 w-9 text-lg leading-none text-fg hover:bg-white/10"
          >
            +
          </button>
          <button
            type="button"
            aria-label={t.zoomOut}
            onClick={() => zoomRef.current?.(1.25)}
            className="h-9 w-9 border-t border-white/20 text-lg leading-none text-fg hover:bg-white/10"
          >
            −
          </button>
        </div>

        <div
          role="group"
          aria-label={t.viewMode}
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 border border-white/20 bg-black/70 backdrop-blur"
        >
          {modes.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={mode === id}
              onClick={() => setMode(id)}
              className={`px-4 py-2 text-[13px] uppercase tracking-[0.08em] transition-colors ${
                mode === id ? "bg-fg text-black" : "text-fg hover:bg-white/10"
              }`}
            >
              {t.modes[id]}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-normal text-steel-on-dark">
        {t.disclaimer}
      </p>
    </div>
  );
}
