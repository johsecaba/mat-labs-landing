import { IBM_Plex_Mono, Inter_Tight, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";

/**
 * Stand-in for Helvetica Now (Monotype). The license is not in this repo.
 *
 * To switch: delete `brandFont` and uncomment the localFont block below.
 * Keep the CSS variable name `--font-brand-file`. Drop the .woff2 files in
 * fonts/helvetica-now/ (gitignored). See the README.
 */
export const brandFont = Inter_Tight({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-brand-file",
  adjustFontFallback: true,
});

export const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono-file",
});

/**
 * CJK faces for /ja and /ko. Inter Tight has no CJK glyphs, so Latin text
 * keeps Inter Tight and the browser falls back to Noto per glyph.
 * Google serves these in unicode-range slices, so only used glyphs load.
 * preload is off because next/font has no CJK subset to preload.
 */
export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-cjk-file",
});

export const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-cjk-file",
});

/*
import localFont from "next/font/local";

export const brandFont = localFont({
  src: [
    {
      path: "../fonts/helvetica-now/HelveticaNowText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-now/HelveticaNowText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-now/HelveticaNowDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-brand-file",
  adjustFontFallback: false,
});
*/
