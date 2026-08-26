import type { Metadata } from "next";
import {
  aboutPageJsonLd,
  authorName,
  coreSeoKeywords,
  creativeWorkGraphJsonLd,
  identityHomePageJsonLd,
  personJsonLd,
  profilePageJsonLd,
  socialProfileUrls,
  siteName,
  siteUrl,
  ventureGraphJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const title = "Williams Praise - Official Website";
const description =
  "Official website of Williams Praise, the public professional identity of Williams Praise Emmanuel: Systems Thinker for Human Problems, founder of Pendulum HQ, product builder, technical product leader, and Capital Allocator + Operator.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  keywords: coreSeoKeywords,
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  category: "capital allocation and operator portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Williams Praise - official website and identity hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  other: {
    "profile:first_name": "Williams",
    "profile:last_name": "Praise",
    "profile:username": "iam-williams",
  },
};

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("wp-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
    }
  } catch (error) {}
`;

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(aboutPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(identityHomePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(ventureGraphJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(creativeWorkGraphJsonLd),
          }}
        />
        {socialProfileUrls.map((url) => (
          <link href={url} key={url} rel="me" />
        ))}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
