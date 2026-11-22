import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { RootDocument } from "@/components/root-document";
import { isLocale, prefixedLocales } from "@/lib/i18n/config";
import { rootMetadata } from "@/lib/i18n/metadata";
import "../../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? rootMetadata(locale) : {};
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <RootDocument locale={locale}>{children}</RootDocument>;
}
