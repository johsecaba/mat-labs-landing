import Image from "next/image";
import { Reveal } from "@/components/reveal";

const items = [
  {
    name: "The Shirt",
    body: "Black tee. Small MAT mark on the chest, Vision ex Machina badge on the back.",
    src: "/media/merch/shirt.webp",
    alt: "Black MAT Labs t-shirt, small MAT logo on the front and Vision ex Machina badge on the back",
    w: 1000,
    h: 563,
  },
  {
    name: "The Mug",
    body: "Black ceramic, white MAT ring.",
    src: "/media/merch/mug.webp",
    alt: "Black mug with the white MAT ring logo",
    w: 1000,
    h: 1000,
  },
  {
    name: "The Cap",
    body: "Black cap, MAT ring embroidered on the front.",
    src: "/media/merch/hat.webp",
    alt: "Black cap with the MAT ring logo embroidered on the front",
    w: 1000,
    h: 1000,
  },
] as const;

export function Merch() {
  return (
    <section id="merch" className="border-t border-steel bg-black text-fg" aria-labelledby="merch-title">
      <div className="shell py-[72px] lg:py-[144px]">
        <Reveal>
          <p className="tag text-steel-on-dark">Merch</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <h2 id="merch-title" className="h2 lg:col-span-7">
              Vision ex Machina, wearable.
            </h2>
            <p className="max-w-md text-[17px] leading-normal text-steel-on-dark lg:col-span-5">
              MAT comes from the Greek máti, the eye. We put it on a shirt, a
              mug and a cap. No store yet.
            </p>
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.name}>
              <Reveal>
                <article className="merch-card group flex h-full flex-col">
                  <div className="relative aspect-square overflow-hidden bg-[linear-gradient(to_bottom,#d6d6d6,#e2e0e1)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 30vw, 100vw"
                      className={`transition-transform duration-700 group-hover:scale-[1.03] ${"object-cover"}`}
                      
                     
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">{item.name}</h3>
                    <p className="mt-2 text-[15px] leading-normal text-steel-on-dark">{item.body}</p>
                    <a href="#contact" className="mk-link mt-6 inline-block self-start pb-1 text-[15px]">
                      Ask about merch
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
