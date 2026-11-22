import type { Metadata } from "next";
import { site } from "@/lib/site";
import { languageAlternates, localePath, ogLocales, type Locale } from "./config";
import { getMessages } from "./index";

const ogImage = (alt: string) => [{ url: "/og-image.png", width: 1200, height: 630, alt }];

/** Site-wide metadata for a locale's root layout (also the home page). */
export function rootMetadata(locale: Locale): Metadata {
  const t = getMessages(locale).meta;
  const url = `${site.url}${localePath(locale, "/") === "/" ? "" : localePath(locale, "/")}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: "%s — MAT Labs" },
    description: t.description,
    applicationName: site.name,
    authors: [{ name: site.legalName }],
    creator: site.legalName,
    publisher: site.legalName,
    alternates: { canonical: localePath(locale, "/"), languages: languageAlternates("/") },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      url: url || site.url,
      siteName: site.name,
      title: t.title,
      description: t.description,
      images: ogImage(t.ogAlt),
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ogImage(t.ogAlt),
    },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}

/** Metadata for /about and /merch in a locale. */
export function pageMetadata(locale: Locale, page: "about" | "merch"): Metadata {
  const m = getMessages(locale);
  const { title, description } = m[page];
  const path = `/${page}`;
  const images =
    page === "merch"
      ? [{ url: "/media/merch/hat.webp", width: 1000, height: 1000, alt: m.merch.ogAlt }]
      : ogImage(m.meta.ogAlt);
  return {
    title,
    description,
    alternates: { canonical: localePath(locale, path), languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      locale: ogLocales[locale],
      url: `${site.url}${localePath(locale, path)}`,
      siteName: site.name,
      title: `${title} — MAT Labs`,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: `${title} — MAT Labs`, description, images },
  };
}
