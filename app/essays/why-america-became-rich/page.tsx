import type { Metadata } from "next";
import WealthArticle from "./wealth-article";

const title = "Why America Became Rich (And Why Nigeria Should Care)";
const description =
  "A premium interactive essay on how America compounded national wealth before Silicon Valley, and what Nigeria and African builders should learn from systems, exports, capital, and infrastructure.";

export const metadata: Metadata = {
  title: `${title} - Williams Praise`,
  description,
  alternates: {
    canonical: "/essays/why-america-became-rich",
  },
  keywords: [
    "America wealth history",
    "Nigeria technology strategy",
    "African builders",
    "commerce infrastructure",
    "national wealth",
    "Silicon Valley",
    "technology exports",
    "Shoppergetit",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    siteName: "Williams Praise",
    url: "/essays/why-america-became-rich",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WhyAmericaBecameRichPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: "Williams Praise",
    },
    publisher: {
      "@type": "Person",
      name: "Williams Praise",
    },
    mainEntityOfPage: "/essays/why-america-became-rich",
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
