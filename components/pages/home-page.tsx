import { DemoForm } from "@/components/demo-form";
import { HeroMedia } from "@/components/hero-media";
import { MarketsCarousel } from "@/components/markets-carousel";
import { MeshViewer } from "@/components/mesh-viewer";
import { Reveal } from "@/components/reveal";
import { Still } from "@/components/still";
import { WordCarousel } from "@/components/word-carousel";
import { getMessages, type Locale } from "@/lib/i18n";
import { contactEmail } from "@/lib/site";

export function HomePage({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.home;
  const h = t.hero;
  return (
    <main id="content">
      <section id="top" className="relative min-h-[100svh] bg-black text-fg">
        <div className="absolute inset-0">
          <HeroMedia description={h.media} />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.78)_24%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.4)_100%)]" />
        </div>
        <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <h1 className="h1 hero-h1">
            <span className="sr-only">{h.sr}</span>
            <span aria-hidden="true">
              {h.line1}
              <br />
              {h.reinventPrefix}
              <WordCarousel words={h.words} fit={h.reinventSuffix !== ""} />
              {h.reinventSuffix}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-normal">
            {h.subtitle}{" "}
            <span className="whitespace-nowrap font-medium text-[#d8ff4a]">{h.notLidar}</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-solid">
              {h.demo}
            </a>
            <a href={`mailto:${contactEmail}`} className="btn btn-ghost">
              {h.contact}
            </a>
          </div>
        </div>
      </section>

      <section id="technology" className="bg-paper text-ink">
        <div className="section shell">
          <Reveal>
            <p className="tag text-steel">{t.tech.tag}</p>
            <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
              <h2 className="h2 lg:col-span-7">{t.tech.title}</h2>
              <p className="max-w-md text-[17px] leading-normal lg:col-span-5">
                {t.tech.body}
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-16">
            <Still
              src="/media/sensor-chip.jpg"
              alt={t.tech.chipAlt}
              sizes="(min-width: 1024px) 1200px, 100vw"
              zoom
              imageClassName="object-contain"
              className="aspect-square w-full sm:aspect-[16/10]"
            />
            <p className="tag mt-4 text-steel">{t.tech.chipTag}</p>
          </Reveal>
        </div>
        <div className="shell pb-[72px] lg:pb-[144px]">
          <ul className="grid border-l border-t border-steel sm:grid-cols-2 lg:grid-cols-4">
            {t.tech.stack.map((item) => (
              <li key={item.kicker} className="border-b border-r border-steel p-8">
                <p className="tag text-steel">{item.kicker}</p>
                <h3 className="mt-10 text-[24px] font-medium leading-none tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-normal">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="figura-os" className="section bg-black text-fg">
        <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-12">
          <Reveal>
            <p className="tag" style={{ textTransform: "none" }}>FiguraOS</p>
            <h2 className="h2 mt-6">{t.figura.title}</h2>
            <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
              {t.figura.body}
            </p>
          </Reveal>
          <Reveal>
            <Still
              src="/media/figura-os.webp"
              alt={t.figura.imgAlt}
              sizes="(min-width: 1024px) 840px, 100vw"
              priority
              zoom
              imageClassName="object-cover"
              className="aspect-[2/1] w-full"
              focusScale={1.22}
            />
          </Reveal>
        </div>
      </section>

      <section id="record" className="bg-black text-fg">
        <div className="shell">
          <Reveal>
            <p className="tag">{t.record3d.tag}</p>
            <h2 className="h2 mt-6 max-w-[14ch]">{t.record3d.title}</h2>
          </Reveal>
        </div>
        <Reveal className="shell mt-12">
          <MeshViewer t={t.mesh} />
          <p className="mt-4 max-w-xl text-sm leading-normal text-steel-on-dark">
            {t.record3d.caption}
          </p>
        </Reveal>
        <div className="h-[72px] lg:h-[144px]" />
      </section>

      <section id="markets" className="bg-black text-fg">
        <div className="shell pt-[72px] lg:pt-[144px]">
          <Reveal>
            <p className="tag text-steel-on-dark">{t.markets.tag}</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <h2 className="h2 lg:col-span-7">{t.markets.title}</h2>
              <p className="max-w-md text-[17px] leading-normal text-steel-on-dark lg:col-span-5">
                {t.markets.body}
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 pb-[72px] lg:pb-[144px]">
          <MarketsCarousel t={t.markets} />
        </Reveal>
      </section>

      <section id="company" className="bg-paper pt-[72px] text-ink lg:pt-[144px]">
        <div className="shell">
          <Reveal>
            <p className="tag text-steel">{t.company.tag}</p>
            <p lang="el" className="h1 mt-8">
              μάτι
            </p>
            <p className="tag mt-4 text-steel">{t.company.mati}</p>
            <h2 className="h2 mt-10 max-w-[16ch]">{t.company.title}</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-normal">
              {t.company.body}
            </p>
          </Reveal>
          <Reveal className="mt-16 grid border-t border-steel md:grid-cols-3">
            <div className="border-b border-steel py-8 md:border-b-0 md:border-r md:pr-8">
              <h3 lang="el" className="text-[22px] font-medium tracking-[-0.03em]">
                μάτι
              </h3>
              <p className="mt-4 text-base leading-normal">
                {t.company.matiBody}
              </p>
            </div>
            <div className="border-b border-steel py-8 md:border-b-0 md:border-r md:px-8">
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">{t.company.figuraTitle}</h3>
              <p className="mt-4 text-base leading-normal">
                {t.company.figuraBody}
              </p>
            </div>
            <div className="py-8 md:pl-8">
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                Vision ex Machina
              </h3>
              <p className="mt-4 text-base leading-normal">
                {t.company.vexmBody}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="border-t border-steel bg-paper text-ink" aria-labelledby="capabilities-title">
        <div className="shell py-[72px] lg:py-[144px]">
          <Reveal>
            <p className="tag text-steel">{t.capabilities.tag}</p>
            <h2 id="capabilities-title" className="h2 mt-6 max-w-[14ch]">
              {t.capabilities.title}
            </h2>
            <ol className="mt-12 border-b border-steel">
              {t.capabilities.items.map((item, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[3rem_1fr] gap-6 border-t border-steel py-6 md:grid-cols-[4.5rem_16rem_1fr] md:items-baseline"
                >
                  <span className="mono text-sm text-steel">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-medium tracking-[-0.03em] md:col-start-2">
                    {item.title}
                  </h3>
                  <p className="col-span-2 text-base leading-normal md:col-span-1 md:col-start-3">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="specifications" className="border-t border-steel bg-paper text-ink" aria-labelledby="spec-title">
        <div className="shell py-[72px] lg:py-[144px]">
          <Reveal>
            <p className="tag text-steel">{t.specs.tag}</p>
            <h2 id="spec-title" className="h2 mt-6">
              {t.specs.title}
            </h2>
            <table className="mt-12 w-full border-collapse text-left">
              <caption className="mb-6 max-w-xl text-left text-[17px] leading-normal">
                {t.specs.caption}
              </caption>
              <thead>
                <tr className="border-b border-steel">
                  <th scope="col" className="tag py-3 pr-6 font-medium text-steel">
                    {t.specs.field}
                  </th>
                  <th scope="col" className="tag py-3 font-medium text-steel">
                    {t.specs.record}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.specs.rows.map(([field, value]) => (
                  <tr key={field} className="border-b border-steel">
                    <th scope="row" className="py-4 pr-6 text-base font-medium">
                      {field}
                    </th>
                    <td className="mono py-4 text-base">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section bg-black text-fg">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="tag">{t.contact.tag}</p>
            <h2 className="h2 mt-6">{t.contact.title}</h2>
            <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
              {t.contact.body}
            </p>
            <p className="mt-10 text-2xl font-medium tracking-[-0.03em]">
              Vision ex Machina
            </p>
            <p className="mt-2 text-sm text-steel-on-dark">{t.contact.motto}</p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <DemoForm locale={locale} t={m.form} />
          </div>
        </div>
      </section>
    </main>
  );
}
