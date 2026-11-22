import type { Metadata, Viewport } from "next";
import { RootDocument } from "@/components/root-document";
import { rootMetadata } from "@/lib/i18n/metadata";
import "../globals.css";

export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
