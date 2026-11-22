import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const title = "Merch";
const description =
  "The MAT Labs shirt, mug and cap. Black, with the MAT ring. No store yet; ask and we'll tell you when one opens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/merch" },
  openGraph: {
    type: "website",
    url: `${site.url}/merch`,
    siteName: site.name,
    title: `${title} — MAT Labs`,
    description,
    images: [{ url: "/media/merch/hat.webp", width: 1000, height: 1000, alt: "MAT Labs cap" }],
  },
  twitter: { card: "summary_large_image", title: `${title} — MAT Labs`, description },
};

const items = [
  {
    n: "01",
    name: "The Shirt",
    body: "Black tee. Small MAT mark on the chest, Vision ex Machina badge on the back.",
    src: "/media/merch/shirt.webp",
    alt: "Black MAT Labs t-shirt, small MAT logo on the front and Vision ex Machina badge on the back",
  },
  {
    n: "02",
    name: "The Mug",
    body: "Black ceramic, white MAT ring.",
    src: "/media/merch/mug.webp",
    alt: "Black mug with the white MAT ring logo",
  },
  {
    n: "03",
    name: "The Cap",
    body: "Black cap, MAT ring embroidered on the front.",
    src: "/media/merch/hat.webp",
    alt: "Black cap with the MAT ring logo embroidered on the front",
  },
] as const;

export default function MerchPage() {
  return (
    <main id="content" className="bg-black text-fg">
      <section className="shell pb-[72px] pt-32 lg:pb-[120px] lg:pt-48" aria-labelledby="merch-title">
        <Reveal>
          <p className="tag text-steel-on-dark">Merch</p>
          <h1 id="merch-title" className="h1 mt-8 max-w-4xl">
            Vision ex Machina, wearable.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-normal text-steel-on-dark">
            MAT comes from the Greek máti, the eye. We put it on a shirt, a mug
            and a cap. No store yet.
          </p>
        </Reveal>
      </section>

      <section aria-label="Products">
        <ul>
          {items.map((item, i) => (
            <li key={item.name} className="border-t border-steel">
              <div className="shell grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-16 lg:py-24">
                <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="merch-card group relative aspect-square overflow-hidden bg-[#d9d9d9]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
                <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <p className="tag text-steel-on-dark">{item.n}</p>
                  <h2 className="h2 mt-6">{item.name}</h2>
                  <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
                    {item.body}
                  </p>
                  <a href="/#contact" className="mk-link mt-10 inline-block pb-1 text-[15px]">
                    Ask about merch
                  </a>
                </Reveal>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
