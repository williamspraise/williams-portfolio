import type { Metadata } from "next";
import "./globals.css";

const title = "Williams Praise - Systems Thinker for Human Problems";
const description =
  "Williams Praise is a systems thinker, founder-operator, product builder, technical product lead, framework creator, and capital allocation thinker building products, ventures, essays, and original frameworks.";

const siteUrl = "https://williamspraise.com";

const seoKeywords = [
  "Williams Praise",
  "Williams Praise Emmanuel",
  "Williams Praise Emmanual",
  "Praise Williams",
  "WilliamsPraise",
  "iam-williams",
  "Systems Thinker",
  "Founder-Operator",
  "Founder Operator",
  "Founder",
  "Product Builder",
  "Technical Product Lead",
  "Founding Product Lead",
  "Product Strategist",
  "Technical Product Manager",
  "UX Product Professional",
  "Framework Creator",
  "Capital Allocator",
  "Capital Allocation Thinker",
  "Investment Philosophy",
  "Williams Ecosystem",
  "Shoppergetit",
  "Systems of Love",
  "IREE Phases",
  "Systems of Resolve",
  "Product Strategy",
  "Systems Thinking",
  "Venture Builder",
  "Nigeria Product Builder",
  "Abuja Product Builder",
  "Remote Product Lead",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Williams Praise",
  alternateName: [
    "Williams Praise Emmanuel",
    "Williams Praise Emmanual",
    "Praise Williams",
    "iam-williams",
  ],
  url: siteUrl,
  image: `${siteUrl}/images/C208(1).jpg`,
  email: "mailto:williamspraise01@gmail.com",
  jobTitle: [
    "Systems Thinker",
    "Founder-Operator",
    "Product Builder",
    "Technical Product Lead",
    "Framework Creator",
    "Capital Allocation Thinker",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Williams Ecosystem",
    url: siteUrl,
  },
  founder: [
    {
      "@type": "Organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
    },
  ],
  knowsAbout: [
    "Systems Thinking",
    "Product Strategy",
    "Product Leadership",
    "Technical Product Management",
    "Founder Operations",
    "Capital Allocation",
    "Investment Philosophy",
    "Marketplace Systems",
    "Venture Building",
    "UX Systems",
    "Human Behavior",
    "Framework Design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/iam-williams/",
    "https://github.com/williamspraise",
    "https://shoppergetit.com",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Williams Praise",
  alternateName: [
    "Williams Praise Portfolio",
    "Williams Ecosystem",
    "williamspraise.com",
  ],
  url: siteUrl,
  description,
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Williams Praise",
  keywords: seoKeywords,
  authors: [{ name: "Williams Praise" }],
  creator: "Williams Praise",
  publisher: "Williams Praise",
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
    siteName: "Williams Praise",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Williams Praise - Systems Thinker, Founder-Operator, and Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
