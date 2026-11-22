export const locales = ["en", "ja", "de", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
/** Locales served under a prefix (/ja, /de, /ko). English stays at the root. */
export const prefixedLocales = ["ja", "de", "ko"] as const;

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  de: "Deutsch",
  ko: "한국어",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  ja: "ja_JP",
  de: "de_DE",
  ko: "ko_KR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Localized path. `path` is the English path, e.g. "/", "/about", "/#contact".
 * en → unchanged; ja → "/ja", "/ja/about", "/ja#contact".
 */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/" ) return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

/** Strip a locale prefix from a pathname: "/ja/about" → "/about", "/ko" → "/". */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (seg && isLocale(seg) && seg !== defaultLocale) {
    const rest = pathname.slice(seg.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname || "/";
}

/** hreflang map for Next metadata `alternates.languages`. */
export function languageAlternates(path: string): Record<string, string> {
  return {
    en: localePath("en", path),
    ja: localePath("ja", path),
    de: localePath("de", path),
    ko: localePath("ko", path),
    "x-default": localePath("en", path),
  };
}
