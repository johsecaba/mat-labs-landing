import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { brandFont, monoFont, notoSansJP, notoSansKR } from "@/lib/fonts";
import { getMessages, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const inLanguage: Record<Locale, string> = { en: "en-US", ja: "ja-JP", de: "de-DE", ko: "ko-KR" };

/** The <html> document shared by the English and localized root layouts. */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const m = getMessages(locale);
  const cjk = locale === "ja" ? notoSansJP.variable : locale === "ko" ? notoSansKR.variable : "";
  const home = `${site.url}${localePath(locale, "/") === "/" ? "" : localePath(locale, "/")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        url: site.url,
        logo: `${site.url}/brand/app-icon.png`,
        description: m.meta.description,
        email: site.email,
        slogan: site.slogan,
      },
      {
        "@type": "WebSite",
        "@id": `${home}/#website`,
        name: site.name,
        url: home,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: inLanguage[locale],
      },
    ],
  };

  return (
    <html lang={locale} className={`${brandFont.variable} ${monoFont.variable} ${cjk}`.trim()}>
      <body>
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <a className="skip-link" href="#content">
          {m.meta.skip}
        </a>
        <Header locale={locale} t={m.nav} />
        {children}
        <Footer locale={locale} t={m.footer} navT={m.nav} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
