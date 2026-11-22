import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const title = "About";
const description =
  "MAT Labs builds Spatial Phase Imaging and Figure OS for U.S. enterprise and government. MAT is Greek for eye. The markets we build for are in the millions and billions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${site.url}/about`,
    siteName: site.name,
    title: `${title} — MAT Labs`,
    description,
  },
  twitter: { card: "summary_large_image", title: `${title} — MAT Labs`, description },
};

const stats = [
  {
    value: "1.1B",
    label: "cars on the road have no driver-assistance sensing. They drive without machine vision.",
    note: "Yole Group, 2022: 12.3% of 1.3 billion cars on the road had ADAS. The other 87.7% is about 1.14 billion.",
    href: "https://www.yolegroup.com/press-release/automotive-industry-a-massive-ai-powered-transformation-is-ongoing/",
    source: "Yole Group",
  },
  {
    value: "3.1M",
    label: "small drones will fly in U.S. airspace by 2029.",
    note: "FAA, base forecast for 2029: 1.93 million recreational plus 1.18 million commercial.",
    href: "https://www.faa.gov/data_research/aviation/aerospace_forecasts/2025-uas-and-aam-summary.pdf",
    source: "FAA Aerospace Forecast FY 2025–2045",
  },
  {
    value: "50M+",
    label: "consumer robots will ship worldwide in 2027, most of them for the home.",
    note: "Statista Market Insights forecast, units per year. Includes robot vacuums, toys and consumer drones.",
    href: "https://www.statista.com/chart/9089/worldwide-personal-robot-sales-forecast/",
    source: "Statista",
  },
  {
    value: "3.6B",
    label: "credit cards that palm payments powered by MAT can replace.",
    note: "Nilson Report, year-end 2024: 3.61 billion credit cards on the global networks. Debit and prepaid add 14.5 billion more.",
    href: "https://nilsonreport.com/wp-content/uploads/NilsonReport_1288_2F25.pdf",
    source: "Nilson Report, issue 1288",
  },
] as const;

export default function AboutPage() {
  return (
    <main id="content" className="bg-black text-fg">
      <section className="shell pb-[72px] pt-32 lg:pb-[120px] lg:pt-48" aria-labelledby="about-title">
        <Reveal>
          <p className="tag text-steel-on-dark">About</p>
          <h1 id="about-title" className="h1 mt-8 max-w-4xl">
            We give machines an eye.
          </h1>
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="max-w-xl space-y-5 text-lg leading-normal text-steel-on-dark lg:col-span-6">
              <p>
                MAT Labs builds Spatial Phase Imaging (SPI), licensed from
                VyzAI, and Figure OS, the software that reads people, pose and
                form from it. We sell to U.S. enterprises and U.S. government
                programs.
              </p>
              <p>
                MAT comes from the Greek máti, the eye. Our line is Vision ex
                Machina. Here is how many machines are waiting for one.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section aria-label="Market figures">
        <ul>
          {stats.map((s) => (
            <li key={s.value} className="border-t border-steel">
              <Reveal>
                <div className="shell grid items-end gap-6 py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                  <div className="lg:col-span-4">
                    <p className="max-w-xs text-[15px] leading-normal">{s.label}</p>
                    <p className="mt-4 max-w-xs text-xs leading-normal text-steel-on-dark">
                      {s.note}{" "}
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
          <h2 className="h2 max-w-xl">Building for one of these?</h2>
          <a href="/#contact" className="btn btn-solid">
            Request a demo
          </a>
        </div>
      </section>
    </main>
  );
}
