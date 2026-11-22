"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 border-b ${
        solid
          ? "border-steel bg-black"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <a href="/#top" className="flex items-center gap-2.5 text-fg">
          <Logo className="h-5 w-auto" />
          <span className="text-[15px] font-medium tracking-[-0.03em]">MAT</span>
          <span className="sr-only">Labs, home</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="tag text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="btn btn-solid"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center tag lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-steel bg-black lg:hidden"
        >
          <ul className="shell flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-steel">
                <a
                  href={item.href}
                  className="block py-4 text-lg font-medium tracking-[-0.03em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="block py-4 text-lg font-medium tracking-[-0.03em]"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
