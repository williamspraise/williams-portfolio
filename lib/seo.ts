import type { Metadata } from "next";
import { essays } from "@/data/essays";
import { frameworks } from "@/data/frameworks";
import { projects } from "@/data/projects";

export const siteUrl = "https://williamspraise.com";
export const siteName = "Williams Praise";
export const authorName = "Williams Praise";

export const identityKeywords = [
  "Williams Praise",
  "Williams Emmanuel Praise",
  "Williams Praise Emmanuel",
  "Williams Praise Emmanual",
  "Praise Williams",
  "William Praise",
  "WilliamsPraise",
  "iam-williams",
  "williamspraise.com",
];

export const coreSeoKeywords = [
  ...identityKeywords,
  "Williams Praise portfolio",
  "Williams Praise website",
  "Williams Praise biography",
  "Williams Praise essays",
  "Williams Praise frameworks",
  "Williams Praise product builder",
  "Williams Praise systems thinker",
  "Williams Praise technical product lead",
  "Williams Praise founder",
  "Williams Ecosystem",
  "Systems Thinker",
  "Systems Thinking",
  "Founder-Operator",
  "Founder Operator",
  "Product Builder",
  "Technical Product Lead",
  "Founding Product Lead",
  "Product Strategist",
  "Technical Product Manager",
  "UX Product Professional",
  "UX Design Mentor",
  "Framework Creator",
  "Capital Allocator",
  "Capital Allocation Thinker",
  "Investment Philosophy",
  "Product Strategy",
  "Product Leadership",
  "Founder Operations",
  "Venture Builder",
  "Nigeria Product Builder",
  "Abuja Product Builder",
  "African Product Builder",
  "Remote Product Lead",
  "AI-Augmented Building",
  "Human Behavior",
  "Relationship Systems",
  "Decision Frameworks",
  "Shoppergetit",
  "PAM AI",
  "Pendulum School of Innovation",
  "Springboard mentorship",
  "Systems of Love",
  "Why Love Needs Systems",
  "IREE Phases",
  "Systems of Resolve",
  "Why America Became Rich",
  "Why America Became Rich And Why Nigeria Should Care",
  "The American system to wealth",
  "American system to wealth",
  "America wealth system",
  "Nigeria wealth systems",
  "African builders essays",
  "technology exports",
  "commerce infrastructure",
  "national wealth",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
}): Metadata {
  return {
    title,
    description,
    keywords: [...new Set([...identityKeywords, ...keywords])],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      siteName,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Williams Praise - Systems thinker, founder-operator, and product builder",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const publishedEssays = essays.filter((essay) => essay.href);

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: authorName,
  alternateName: identityKeywords.filter((keyword) => keyword !== authorName),
  url: siteUrl,
  image: absoluteUrl("/images/C208(1).jpg"),
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
    "Relationship Systems",
    "Decision Frameworks",
    "Framework Design",
    "National Wealth",
    "Technology Exports",
    "African Innovation",
  ],
  sameAs: [
    "https://www.linkedin.com/in/iam-williams/",
    "https://github.com/williamspraise",
    "https://shoppergetit.com",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: [
    "Williams Emmanuel Praise",
    "Williams Praise Portfolio",
    "Williams Ecosystem",
    "williamspraise.com",
  ],
  url: siteUrl,
  description:
    "The public website of Williams Praise: systems thinking, product work, ventures, investment philosophy, essays, and original frameworks.",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  inLanguage: "en",
};

export const creativeWorkGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/frameworks#collection`,
      name: "Frameworks by Williams Praise",
      url: absoluteUrl("/frameworks"),
      creator: { "@id": `${siteUrl}/#person` },
      hasPart: frameworks.map((framework) => ({
        "@type": "CreativeWork",
        "@id": `${siteUrl}/frameworks/${framework.slug}#creativework`,
        name: framework.title,
        alternateName:
          framework.slug === "systems-of-love"
            ? ["Why Love Needs Systems", "Systems of Love framework"]
            : undefined,
        url: absoluteUrl(`/frameworks/${framework.slug}`),
        description: framework.description,
        creator: { "@id": `${siteUrl}/#person` },
        keywords: framework.pillars.map((pillar) => pillar.title).join(", "),
      })),
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/essays#collection`,
      name: "Essays by Williams Praise",
      url: absoluteUrl("/essays"),
      creator: { "@id": `${siteUrl}/#person` },
      hasPart: publishedEssays.map((essay) => ({
        "@type": "Article",
        "@id": `${siteUrl}${essay.href}#article`,
        headline: essay.title,
        url: absoluteUrl(essay.href),
        description: essay.description,
        author: { "@id": `${siteUrl}/#person` },
      })),
      about: essays.map((essay) => essay.title),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/portfolio#work`,
      name: "Product work by Williams Praise",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/work/${project.slug}`),
        name: project.title,
        description: project.description,
      })),
    },
  ],
};
