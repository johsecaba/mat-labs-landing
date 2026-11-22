import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MerchPage } from "@/components/pages/merch-page";
import { isLocale } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/merch">): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "merch") : {};
}

export default async function Page({ params }: PageProps<"/[locale]/merch">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <MerchPage locale={locale} />;
}
