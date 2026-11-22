import type { MetadataRoute } from "next";
import { languageAlternates, localePath, locales } from "@/lib/i18n/config";
import { site } from "@/lib/site";

const pages = [
  { path: "/", priority: 1 },
  { path: "/merch", priority: 0.5 },
  { path: "/about", priority: 0.5 },
] as const;

const abs = (path: string) => (path === "/" ? site.url : `${site.url}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, abs(href)]),
    );
    return locales.map((locale) => ({
      url: abs(localePath(locale, path)),
      lastModified: new Date("2026-11-21"),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? priority : Math.max(0.3, priority - 0.1),
      alternates: { languages },
    }));
  });
}
