import { localePath, type Locale } from "./config";
import type { Messages } from "./en";

export type NavItem = { href: string; label: string; raw?: boolean };

/** Primary nav for a locale. `raw` items keep their own casing (FiguraOS). */
export function localizedNav(locale: Locale, t: Messages["nav"]): NavItem[] {
  return [
    { href: "/#technology", label: t.technology },
    { href: "/#figura-os", label: "FiguraOS", raw: true },
    { href: "/#markets", label: t.markets },
    { href: "/#company", label: t.company },
    { href: "/merch", label: t.merch },
    { href: "/about", label: t.about },
  ].map((item) => ({ ...item, href: localePath(locale, item.href) }));
}
