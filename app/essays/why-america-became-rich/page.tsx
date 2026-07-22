import type { Metadata } from "next";
import WealthArticle from "./wealth-article";
import { pageMetadata, siteUrl } from "@/lib/seo";

const title = "Why America Became Rich (And Why Nigeria Should Care)";
const description =
  "A premium interactive essay on how America compounded national wealth before Silicon Valley, and what Nigeria and African builders should learn from systems, exports, capital, and infrastructure.";

export const metadata: Metadata = pageMetadata({
  title: `${title} by Williams Praise`,
  description,
  path: "/essays/why-america-became-rich",
  type: "article",
  keywords: [
    "Why America Became Rich",
    "Why America Became Rich Williams Praise",
    "Williams Praise American system to wealth",
    "The American system to wealth",
    "American system to wealth",
    "America wealth system",
    "America wealth history",
    "American wealth creation",
    "Nigeria technology strategy",
    "Nigeria wealth systems",
    "Nigeria should care",
    "African builders",
    "African innovation",
    "commerce infrastructure",
    "national wealth",
    "wealth systems",
    "productive systems",
    "Silicon Valley",
    "technology exports",
    "Shoppergetit",
  ],
});

export default function WhyAmericaBecameRichPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/essays/why-america-became-rich#article`,
    headline: title,
    alternativeHeadline: [
      "The American system to wealth",
      "American system to wealth",
      "Why Nigeria should care about how America became rich",
    ],
    description,
    author: {
      "@id": `${siteUrl}/#person`,
    },
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    mainEntityOfPage: `${siteUrl}/essays/why-america-became-rich`,
    url: `${siteUrl}/essays/why-america-became-rich`,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    keywords:
      "Why America Became Rich, The American system to wealth, national wealth, Nigeria technology strategy, African builders, technology exports, commerce infrastructure",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WealthArticle />
    </>
  );
}
