import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

const items = [
  {
    n: "01",
    src: "/media/merch/shirt.webp",
  },
  {
    n: "02",
    src: "/media/merch/mug.webp",
  },
  {
    n: "03",
    src: "/media/merch/hat.webp",
  },
] as const;

export function MerchPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.merch;
  const contactHref = localePath(locale, "/#contact");
  return (
    <main id="content" className="bg-black text-fg">
      <section className="shell pb-[72px] pt-32 lg:pb-[120px] lg:pt-48" aria-labelledby="merch-title">
        <Reveal>
          <p className="tag text-steel-on-dark">{t.tag}</p>
          <h1 id="merch-title" className="h1 mt-8 max-w-4xl">
            {t.h1}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-normal text-steel-on-dark">
            {t.body}
          </p>
        </Reveal>
      </section>

      <section aria-label={t.products}>
        <ul>
          {items.map((item, i) => (
            <li key={item.n} className="border-t border-steel">
              <div className="shell grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-16 lg:py-24">
                <Reveal className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="merch-card group relative aspect-square overflow-hidden bg-[#d9d9d9]">
                    <Image
                      src={item.src}
                      alt={t.items[i].alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
                <Reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <p className="tag text-steel-on-dark">{item.n}</p>
                  <h2 className="h2 mt-6">{t.items[i].name}</h2>
                  <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
                    {t.items[i].body}
                  </p>
                  <a href={contactHref} className="mk-link mt-10 inline-block pb-1 text-[15px]">
                    {t.ask}
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
