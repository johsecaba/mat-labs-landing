"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroMedia({ description }: { description: string }) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      <Image
        src="/media/hero-frame.jpg"
        alt={allowMotion ? "" : description}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {allowMotion ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-frame.jpg"
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/media/hero-video-1080p.mp4" type="video/mp4" />
        </video>
      ) : null}
      {allowMotion ? <p className="sr-only">{description}</p> : null}
    </>
  );
}
