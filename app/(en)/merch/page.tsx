import type { Metadata } from "next";
import { MerchPage } from "@/components/pages/merch-page";
import { pageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = pageMetadata("en", "merch");

export default function Page() {
  return <MerchPage locale="en" />;
}
