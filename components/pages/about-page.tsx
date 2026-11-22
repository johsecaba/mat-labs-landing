import { Reveal } from "@/components/reveal";
import { getMessages, localePath, type Locale } from "@/lib/i18n";

const stats = [
  {
    value: "3.1M",
    href: "https://www.faa.gov/data_research/aviation/aerospace_forecasts/2025-uas-and-aam-summary.pdf",
    source: "FAA Aerospace Forecast FY 2025–2045",
  },
  {
    value: "50M+",
    href: "https://www.statista.com/chart/9089/worldwide-personal-robot-sales-forecast/",
    source: "Statista",
  },
  {
    value: "1.1B",
    href: "https://www.yolegroup.com/press-release/automotive-industry-a-massive-ai-powered-transformation-is-ongoing/",
    source: "Yole Group",
  },
  {
    value: "3.6B",
    href: "https://nilsonreport.com/wp-content/uploads/NilsonReport_1288_2F25.pdf",
    source: "Nilson Report, issue 1288",
  },
] as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const m = getMessages(locale);
  const t = m.about;
  return (
    <main id="content" className="bg-black text-fg">
      <section className="shell pb-[72px] pt-32 lg:pb-[120px] lg:pt-48" aria-labelledby="about-title">
        <Reveal>
          <p className="tag text-steel-on-dark">{t.tag}</p>
          <h1 id="about-title" className="h1 mt-8 max-w-4xl">
            {t.h1}
          </h1>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="max-w-xl space-y-5 text-lg leading-normal text-steel-on-dark lg:col-span-6">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section aria-label={t.figures}>
        <ul>
          {stats.map((s, i) => (
            <li key={s.value} className="border-t border-steel">
              <Reveal>
                <div className="shell grid items-end gap-6 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                  <div className="lg:col-span-4">
                    <p className="max-w-xs text-[15px] leading-normal">{t.stats[i].label}</p>
                    <p className="mt-4 max-w-xs text-xs leading-normal text-steel-on-dark">
                      {t.stats[i].note}{" "}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-white/30 underline-offset-2 hover:decoration-white"
                      >
                        {s.source}
                      </a>
                    </p>
                  </div>
                  <p className="stat-num w-fit justify-self-start lg:col-span-8 lg:justify-self-end">{s.value}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-steel">
        <div className="shell flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
          <h2 className="h2 max-w-xl">{t.ctaTitle}</h2>
          <a href={localePath(locale, "/#contact")} className="btn btn-solid">
            {t.cta}
          </a>
        </div>
      </section>
    </main>
  );
}
