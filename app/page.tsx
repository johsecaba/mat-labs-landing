import { DemoForm } from "@/components/demo-form";
import { HeroMedia } from "@/components/hero-media";
import { MarketsCarousel } from "@/components/markets-carousel";
import { MeshViewer } from "@/components/mesh-viewer";
import { Reveal } from "@/components/reveal";
import { Still } from "@/components/still";
import { contactEmail, demoEmail } from "@/lib/site";
import { WordCarousel } from "@/components/word-carousel";

const stack = [
  {
    kicker: "Format",
    title: "Spatial Phase Imaging",
    body: "Light and structure in one stream.",
  },
  {
    kicker: "Capture",
    title: "The sensor",
    body: "High-resolution visual and 3D data, live.",
  },
  {
    kicker: "Software",
    title: "Figure OS",
    body: "People, pose, and form on that stream.",
  },
  {
    kicker: "Record",
    title: "Mesh and surface",
    body: "Pixels on target. Texture on the mesh.",
  },
] as const;

const capabilities = [
  {
    n: "01",
    title: "People detection",
    body: "A person in the scene, marked on the live frame.",
  },
  {
    n: "02",
    title: "Pose tracking",
    body: "A skeleton on the body, updated as the body moves.",
  },
  {
    n: "03",
    title: "Face and body mesh",
    body: "High-resolution geometry of the person, not a flat outline.",
  },
  {
    n: "04",
    title: "Pixels on target",
    body: "The image samples that land on the subject.",
  },
  {
    n: "05",
    title: "Surface texture",
    body: "A texture map of the surface, aligned to the mesh.",
  },
  {
    n: "06",
    title: "Live stream",
    body: "Capture and models on the same clock. The frame is not stored first and read later.",
  },
] as const;

const record = [
  ["Format", "Spatial Phase Imaging"],
  ["Sensor", "3D and visual, live"],
  ["Software", "Figure OS"],
  ["People", "Detection and pose"],
  ["Mesh", "Face and body"],
  ["Surface", "Texture map"],
  ["Pixels", "On target"],
  ["Timing", "Real time"],
  ["Figures", "Issued per program"],
] as const;

const heroWords = ["Ore Mining", "Commerce", "Automotive", "Robotics"];

export default function HomePage() {
  return (
    <main id="content">
      <section id="top" className="relative min-h-[100svh] bg-black text-fg">
        <div className="absolute inset-0">
          <HeroMedia />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.78)_24%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.4)_100%)]" />
        </div>
        <div className="shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <h1 className="h1 hero-h1">
            <span className="sr-only">
              Revolutionizing Vision. Reinventing ore mining, commerce,
              automotive and robotics.
            </span>
            <span aria-hidden="true">
              Revolutionizing Vision.
              <br />
              Reinventing <WordCarousel words={heroWords} />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-normal">
            The closest thing to a human eye for today’s machines.{" "}
            <span className="whitespace-nowrap font-medium text-[#d8ff4a]">Not LiDAR.</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-solid">
              Request a demo
            </a>
            <a href={`mailto:${contactEmail}`} className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="technology" className="bg-paper text-ink">
        <div className="section shell">
          <Reveal>
            <p className="tag text-steel">SPI</p>
            <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
              <h2 className="h2 lg:col-span-7">Light and structure, in one stream.</h2>
              <p className="max-w-md text-[17px] leading-normal lg:col-span-5">
                Spatial Phase Imaging is a 3D vision format. The sensor records
                what a surface looks like and where it sits. Figure OS reads
                that stream.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-16">
            <Still
              src="/media/sensor-chip.jpg"
              alt="The sensor, seen through its aperture, with the imaging surface lit in color."
              sizes="(min-width: 1024px) 1200px, 100vw"
              zoom
              imageClassName="object-contain"
              className="aspect-square w-full sm:aspect-[16/10]"
            />
            <p className="tag mt-4 text-steel">Sensor</p>
          </Reveal>
        </div>
        <div className="shell pb-[72px] lg:pb-[144px]">
          <ul className="grid border-l border-t border-steel sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item) => (
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

      <section id="figure-os" className="section bg-black text-fg">
        <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-12">
          <Reveal>
            <p className="tag">Figure OS</p>
            <h2 className="h2 mt-6">Software that reads shape.</h2>
            <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
              Named for the Latin figura, shape. Figure OS runs vision models on the
              live Spatial Phase Imaging stream: people, pose, and the form of
              what is in frame.
            </p>
          </Reveal>
          <Reveal>
            <Still
              src="/media/figure-os.webp"
              alt="Figure OS with a person marked for detection beside a pose skeleton and a position readout."
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
            <p className="tag">3D data</p>
            <h2 className="h2 mt-6 max-w-[14ch]">Mesh, pixels, surface.</h2>
          </Reveal>
        </div>
        <Reveal className="shell mt-12">
          <MeshViewer />
          <p className="mt-4 max-w-xl text-sm leading-normal text-steel-on-dark">
            High-resolution mesh. Pixels on target. Triangle mesh. Surface
            texture map.
          </p>
        </Reveal>
        <div className="h-[72px] lg:h-[144px]" />
      </section>

      <section id="markets" className="bg-black text-fg">
        <div className="shell pt-[72px] lg:pt-[144px]">
          <Reveal>
            <p className="tag text-steel-on-dark">Markets</p>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <h2 className="h2 lg:col-span-7">Where machines have to see.</h2>
              <p className="max-w-md text-[17px] leading-normal text-steel-on-dark lg:col-span-5">
                MAT Labs supplies U.S. enterprises and U.S. government and
                defense programs.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12 pb-[72px] lg:pb-[144px]">
          <MarketsCarousel />
        </Reveal>
      </section>

      <section id="company" className="bg-paper pt-[72px] text-ink lg:pt-[144px]">
        <div className="shell">
          <Reveal>
            <p className="tag text-steel">Company</p>
            <p lang="el" className="h1 mt-8">
              μάτι
            </p>
            <p className="tag mt-4 text-steel">máti · Greek for eye</p>
            <h2 className="h2 mt-10 max-w-[16ch]">Named for the eye.</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-normal">
              MAT comes from μάτι, máti, the Greek word for eye. The company is
              named for the work: the closest thing to a human eye for the
              machines of this era.
            </p>
          </Reveal>
          <Reveal className="mt-16 grid border-t border-steel md:grid-cols-3">
            <div className="border-b border-steel py-8 md:border-b-0 md:border-r md:pr-8">
              <h3 lang="el" className="text-[22px] font-medium tracking-[-0.03em]">
                μάτι
              </h3>
              <p className="mt-4 text-base leading-normal">
                Eye. The word the company is named for.
              </p>
            </div>
            <div className="border-b border-steel py-8 md:border-b-0 md:border-r md:px-8">
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">Figure</h3>
              <p className="mt-4 text-base leading-normal">
                From the Latin figura, shape. Figure OS is how the eye reads form.
              </p>
            </div>
            <div className="py-8 md:pl-8">
              <h3 className="text-[22px] font-medium tracking-[-0.03em]">
                Vision ex Machina
              </h3>
              <p className="mt-4 text-base leading-normal">
                Vision, from the machine. A play on deus ex machina. Nothing is
                lowered in from outside. The machine produces the sight.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="border-t border-steel bg-paper text-ink" aria-labelledby="capabilities-title">
        <div className="shell py-[72px] lg:py-[144px]">
          <Reveal>
            <p className="tag text-steel">Capabilities</p>
            <h2 id="capabilities-title" className="h2 mt-6 max-w-[14ch]">
              What the stream carries.
            </h2>
            <ol className="mt-12 border-b border-steel">
              {capabilities.map((item) => (
                <li
                  key={item.n}
                  className="grid grid-cols-[3rem_1fr] gap-6 border-t border-steel py-6 md:grid-cols-[4.5rem_16rem_1fr] md:items-baseline"
                >
                  <span className="mono text-sm text-steel">{item.n}</span>
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
            <p className="tag text-steel">Specifications</p>
            <h2 id="spec-title" className="h2 mt-6">
              The record.
            </h2>
            <table className="mt-12 w-full border-collapse text-left">
              <caption className="mb-6 max-w-xl text-left text-[17px] leading-normal">
                What the stack produces. Numeric specifications are issued per
                program and are not listed here.
              </caption>
              <thead>
                <tr className="border-b border-steel">
                  <th scope="col" className="tag py-3 pr-6 font-medium text-steel">
                    Field
                  </th>
                  <th scope="col" className="tag py-3 font-medium text-steel">
                    Record
                  </th>
                </tr>
              </thead>
              <tbody>
                {record.map(([field, value]) => (
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
            <p className="tag">Contact</p>
            <h2 className="h2 mt-6">Request a demo.</h2>
            <p className="mt-6 max-w-md text-[17px] leading-normal text-steel-on-dark">
              Name the system and what it needs to see. Your request goes straight
              to our team.
            </p>
            <p className="mt-10 text-2xl font-medium tracking-[-0.03em]">
              Vision ex Machina
            </p>
            <p className="mt-2 text-sm text-steel-on-dark">Vision, from the machine.</p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <DemoForm />
          </div>
        </div>
      </section>
    </main>
  );
}
