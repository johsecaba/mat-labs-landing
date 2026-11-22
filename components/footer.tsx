import { Logo } from "@/components/logo";
import { UsFlag } from "@/components/us-flag";
import { contactEmail, nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel bg-black text-fg">
      <div className="border-b border-steel">
        <div className="shell flex items-center gap-5 py-10 sm:py-12">
          <UsFlag className="h-10 w-auto shrink-0 sm:h-14" />
          <p className="text-2xl font-medium tracking-[-0.03em] sm:text-4xl">Made in U.S.A</p>
        </div>
      </div>
      <div className="shell grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="/#top" className="inline-flex items-center gap-2.5">
            <Logo className="h-5 w-auto" />
            <span className="text-[15px] font-medium tracking-[-0.03em]">MAT</span>
            <span className="sr-only">Labs, home</span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-on-dark">
            {site.legalName}. Spatial Phase Imaging and FiguraOS.
          </p>
        </div>

        <nav className="lg:col-span-3" aria-label="Footer">
          <p className="tag text-steel-on-dark">Index</p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#contact" className="text-sm underline-offset-4 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="tag text-steel-on-dark">Contact</p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 inline-block text-lg font-medium tracking-[-0.03em] underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            {contactEmail}
          </a>
          <p className="mt-6 text-sm text-steel-on-dark">{site.slogan}</p>
        </div>
      </div>
      <div className="border-t border-steel">
        <div className="shell flex flex-col gap-2 py-6 text-xs text-steel-on-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p>mat.co</p>
        </div>
      </div>
    </footer>
  );
}
