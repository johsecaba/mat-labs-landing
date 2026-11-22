import type { MetadataRoute } from "next";

// Crawling stays allowed so search engines can see the noindex directives.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
