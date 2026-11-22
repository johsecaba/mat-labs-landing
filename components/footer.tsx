import { Logo } from "@/components/logo";
import { contactEmail, nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel bg-black text-fg">
      <div className="shell grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <a href="/#top" className="inline-flex items-center gap-2.5">
            <Logo className="h-5 w-auto" />
            <span className="text-[15px] font-medium tracking-[-0.03em]">MAT</span>
            <span className="sr-only">Labs, home</span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-on-dark">
            {site.legalName}. Spatial Phase Imaging and Figure OS.
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
          <p className="flex items-center gap-2">
            <svg viewBox="0 0 190 130" width="21" height="14" aria-hidden="true" className="rounded-[2px]">
              <rect width="190" height="130" fill="#fff" />
              <rect y="0" width="190" height="10" fill="#B22234" /><rect y="20" width="190" height="10" fill="#B22234" /><rect y="40" width="190" height="10" fill="#B22234" /><rect y="60" width="190" height="10" fill="#B22234" /><rect y="80" width="190" height="10" fill="#B22234" /><rect y="100" width="190" height="10" fill="#B22234" /><rect y="120" width="190" height="10" fill="#B22234" />
              <rect width="76" height="70" fill="#3C3B6E" />
              <circle cx="8.0" cy="6.0" r="1.9" fill="#fff" /><circle cx="20.6" cy="6.0" r="1.9" fill="#fff" /><circle cx="33.2" cy="6.0" r="1.9" fill="#fff" /><circle cx="45.8" cy="6.0" r="1.9" fill="#fff" /><circle cx="58.4" cy="6.0" r="1.9" fill="#fff" /><circle cx="71.0" cy="6.0" r="1.9" fill="#fff" /><circle cx="14.3" cy="12.8" r="1.9" fill="#fff" /><circle cx="26.900000000000002" cy="12.8" r="1.9" fill="#fff" /><circle cx="39.5" cy="12.8" r="1.9" fill="#fff" /><circle cx="52.099999999999994" cy="12.8" r="1.9" fill="#fff" /><circle cx="64.7" cy="12.8" r="1.9" fill="#fff" /><circle cx="8.0" cy="19.6" r="1.9" fill="#fff" /><circle cx="20.6" cy="19.6" r="1.9" fill="#fff" /><circle cx="33.2" cy="19.6" r="1.9" fill="#fff" /><circle cx="45.8" cy="19.6" r="1.9" fill="#fff" /><circle cx="58.4" cy="19.6" r="1.9" fill="#fff" /><circle cx="71.0" cy="19.6" r="1.9" fill="#fff" /><circle cx="14.3" cy="26.4" r="1.9" fill="#fff" /><circle cx="26.900000000000002" cy="26.4" r="1.9" fill="#fff" /><circle cx="39.5" cy="26.4" r="1.9" fill="#fff" /><circle cx="52.099999999999994" cy="26.4" r="1.9" fill="#fff" /><circle cx="64.7" cy="26.4" r="1.9" fill="#fff" /><circle cx="8.0" cy="33.2" r="1.9" fill="#fff" /><circle cx="20.6" cy="33.2" r="1.9" fill="#fff" /><circle cx="33.2" cy="33.2" r="1.9" fill="#fff" /><circle cx="45.8" cy="33.2" r="1.9" fill="#fff" /><circle cx="58.4" cy="33.2" r="1.9" fill="#fff" /><circle cx="71.0" cy="33.2" r="1.9" fill="#fff" /><circle cx="14.3" cy="40.0" r="1.9" fill="#fff" /><circle cx="26.900000000000002" cy="40.0" r="1.9" fill="#fff" /><circle cx="39.5" cy="40.0" r="1.9" fill="#fff" /><circle cx="52.099999999999994" cy="40.0" r="1.9" fill="#fff" /><circle cx="64.7" cy="40.0" r="1.9" fill="#fff" /><circle cx="8.0" cy="46.8" r="1.9" fill="#fff" /><circle cx="20.6" cy="46.8" r="1.9" fill="#fff" /><circle cx="33.2" cy="46.8" r="1.9" fill="#fff" /><circle cx="45.8" cy="46.8" r="1.9" fill="#fff" /><circle cx="58.4" cy="46.8" r="1.9" fill="#fff" /><circle cx="71.0" cy="46.8" r="1.9" fill="#fff" />
            </svg>
            Built in USA
          </p>
        </div>
      </div>
    </footer>
  );
}
