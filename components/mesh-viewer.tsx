"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ViewMode } from "@/components/mesh-viewer-canvas";

const Canvas3D = dynamic(() => import("@/components/mesh-viewer-canvas"), {
  ssr: false,
});

const modes: { id: ViewMode; label: string }[] = [
  { id: "mesh", label: "Mesh" },
  { id: "pixels", label: "Pixels" },
  { id: "surface", label: "Surface" },
];

export function MeshViewer() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const [mode, setMode] = useState<ViewMode>("mesh");

  useEffect(() => {
    const el = ref.current;
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

  return (
    <div>
      <div
        ref={ref}
        className="relative aspect-[4/5] w-full overflow-hidden bg-black sm:aspect-[16/10]"
      >
        <Image
          src="/media/high-resolution-mesh.png"
          alt="A face shown as a high-resolution mesh, pixels on target, a triangle mesh, and a surface texture map."
          fill
          sizes="(min-width: 1024px) 880px, 100vw"
          className="object-contain"
        />
        {active ? (
          <div className={`absolute inset-0 cursor-grab touch-pan-y bg-black transition-opacity duration-500 active:cursor-grabbing ${ready ? "opacity-100" : "opacity-0"}`}>
            <Canvas3D mode={mode} onReady={onReady} />
          </div>
        ) : null}
        <div
          role="group"
          aria-label="View mode"
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 border border-white/20 bg-black/70 backdrop-blur"
        >
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={mode === m.id}
              onClick={() => setMode(m.id)}
              className={`px-4 py-2 text-[13px] uppercase tracking-[0.08em] transition-colors ${
                mode === m.id ? "bg-fg text-black" : "text-fg hover:bg-white/10"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
        <p className="pointer-events-none absolute left-4 top-4 z-10 text-xs text-steel-on-dark">
          Drag to rotate. Scroll or pinch to zoom.
        </p>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-normal text-steel-on-dark">
        Sample model for illustration. Not MAT Labs sensor output.
      </p>
    </div>
  );
}
