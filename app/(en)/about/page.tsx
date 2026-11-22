import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/about-page";
import { pageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = pageMetadata("en", "about");

export default function Page() {
  return <AboutPage locale="en" />;
}
