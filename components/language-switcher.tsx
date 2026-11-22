"use client";

import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { localeNames, localePath, locales, stripLocale, type Locale } from "@/lib/i18n/config";

export function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9M12 3c-2.5 2.6-3.8 5.6-3.8 9s1.3 6.4 3.8 9" />
    </svg>
  );
}

function useLocaleLinks() {
  const pathname = usePathname() || "/";
  const base = stripLocale(pathname);
  return locales.map((code) => ({ code, label: localeNames[code], href: localePath(code, base) }));
}

/** Keep the current #anchor when switching languages. */
function go(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
  event.preventDefault();
  window.location.assign(href + window.location.hash);
}

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

/** Desktop: globe button with a dropdown of languages. */
export function LanguageMenu({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLAnchorElement | null)[]>([]);
  const id = useId();
  const links = useLocaleLinks();
  const ariaLabel = label === "Language" ? label : `${label} (Language)`;

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    const current = locales.indexOf(locale);
    items.current[current]?.focus();
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, locale]);

  const onListKey = (event: KeyboardEvent<HTMLUListElement>) => {
    const list = items.current.filter(Boolean) as HTMLAnchorElement[];
    const i = list.indexOf(document.activeElement as HTMLAnchorElement);
    let next = -1;
    if (event.key === "ArrowDown") next = (i + 1) % list.length;
    else if (event.key === "ArrowUp") next = (i - 1 + list.length) % list.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = list.length - 1;
    else return;
    event.preventDefault();
    list[next]?.focus();
  };

  return (
    <div
      ref={root}
      className="relative hidden lg:block"
      onBlur={(event) => {
        if (open && !root.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-fg transition-opacity hover:opacity-70"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <GlobeIcon className="h-[18px] w-[18px]" />
      </button>
      {open ? (
        <ul
          id={id}
          aria-label={ariaLabel}
          onKeyDown={onListKey}
          className="absolute right-0 top-full z-10 mt-2 min-w-[184px] border border-steel bg-black py-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
        >
          {links.map((link, i) => {
            const current = link.code === locale;
            return (
              <li key={link.code}>
                <a
                  ref={(el) => {
                    items.current[i] = el;
                  }}
                  href={link.href}
                  lang={link.code}
                  hrefLang={link.code}
                  aria-current={current ? "true" : undefined}
                  onClick={(event) => go(event, link.href)}
                  className={`flex items-center justify-between gap-6 px-4 py-2.5 text-[15px] tracking-[-0.01em] outline-offset-[-2px] hover:bg-white/10 focus-visible:bg-white/10 ${
                    current ? "text-fg" : "text-steel-on-dark hover:text-fg"
                  }`}
                >
                  <span>{link.label}</span>
                  {current ? <Check /> : null}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

/** Mobile menu: the same list under a globe heading. */
export function LanguageList({ locale, label }: { locale: Locale; label: string }) {
  const links = useLocaleLinks();
  const id = useId();
  return (
    <div className="py-5">
      <p id={id} className="tag flex items-center gap-2 text-steel-on-dark">
        <GlobeIcon className="h-4 w-4" />
        {label}
      </p>
      <ul aria-labelledby={id} className="mt-3 grid grid-cols-2 gap-x-6">
        {links.map((link) => {
          const current = link.code === locale;
          return (
            <li key={link.code}>
              <a
                href={link.href}
                lang={link.code}
                hrefLang={link.code}
                aria-current={current ? "true" : undefined}
                onClick={(event) => go(event, link.href)}
                className={`flex items-center gap-2 py-2.5 text-lg font-medium tracking-[-0.03em] ${
                  current ? "text-fg" : "text-steel-on-dark"
                }`}
              >
                {link.label}
                {current ? <Check /> : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
