import type { Metadata } from "next";
import { essays } from "@/data/essays";
import { frameworks } from "@/data/frameworks";
import { projects } from "@/data/projects";
import { shoppergetitContent } from "@/data/shoppergetit";

export const siteUrl = "https://williamspraise.com";
export const siteName = "Williams Praise";
export const authorName = "Williams Praise";

export const identityKeywords = [
  "Williams Praise",
  "Williams Emmanuel Praise",
  "Williams Praise Emmanuel",
  "Williams Praise Emmanual",
  "Williams Praise tech founder",
  "Williams Praise Shoppergetit founder",
  "Praise Williams",
  "William Praise",
  "WilliamsPraise",
  "iam-williams",
  "williamspraise.com",
];

export const coreSeoKeywords = [
  ...identityKeywords,
  "Williams Praise official website",
  "Williams Praise official portfolio",
  "Williams Praise biography",
  "Williams Praise founder of Shoppergetit",
  "Williams Praise portfolio",
  "Williams Praise website",
  "Williams Praise biography",
  "Williams Praise essays",
  "Williams Praise frameworks",
  "Williams Praise product builder",
  "Williams Praise systems thinker",
  "Williams Praise capital allocator",
  "Williams Praise Nigeria",
  "Capital Allocator Nigeria",
  "Operator Investor",
  "Founder Operator",
  "Capital Allocation",
  "Capital Allocation Engine",
  "African capital allocator",
  "African founder operator",
  "Venture Operator",
  "Nigerian entrepreneur",
  "Williams Praise technical product lead",
  "Williams Praise founder",
  "Williams Ecosystem",
  "Williams Praise",
  "Williams Praise Emmanuel",
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
  "Shoppergetit urban retail infrastructure",
  "Urban retail infrastructure",
  "Predictable distribution",
  "Local retailers",
  "Retail fulfilment",
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
  "retail infrastructure",
  "national wealth",
];

export const canonicalIdentityDescription =
  "Williams Praise, also known as Williams Emmanuel Praise, is a Nigeria-based capital allocator, founder-operator, product builder, technical product lead, systems thinker, framework creator, and founder of Shoppergetit.";

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
          alt: "Williams Praise - Capital allocator, operator, systems thinker, and product builder",
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
  givenName: "Williams",
  familyName: "Praise",
  alternateName: identityKeywords.filter((keyword) => keyword !== authorName),
  description: canonicalIdentityDescription,
  disambiguatingDescription:
    "Williams Praise is the capital allocator, operator, product builder, systems thinker, technical product lead, and Shoppergetit founder represented by williamspraise.com and the LinkedIn profile iam-williams.",
  url: siteUrl,
  mainEntityOfPage: {
    "@id": `${siteUrl}/about#profile`,
  },
  image: absoluteUrl("/images/C208(1).jpg"),
  email: "mailto:williamspraise01@gmail.com",
  homeLocation: {
    "@type": "Place",
    name: "Abuja, Nigeria",
  },
  nationality: {
    "@type": "Country",
    name: "Nigeria",
  },
  jobTitle: [
    "Capital Allocator and Operator",
    "Systems Thinker",
    "Founder-Operator",
    "Product Builder",
    "Technical Product Lead",
    "Framework Creator",
    "Capital Allocation Thinker",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#williams-ecosystem`,
    name: "Williams Ecosystem",
    url: siteUrl,
  },
  founder: [
    {
      "@type": "Organization",
      "@id": "https://shoppergetit.com/#organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
    },
  ],
  affiliation: [
    {
      "@type": "Organization",
      "@id": "https://shoppergetit.com/#organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/ventures#psi`,
      name: "Pendulum School of Innovation",
      alternateName: "PSI",
      url: "https://pendulumsi.com",
    },
    {
      "@type": "Organization",
      name: "Springboard",
      url: "https://www.springboard.com/",
    },
  ],
  owns: [
    {
      "@type": "Brand",
      "@id": `${siteUrl}/#williams-ecosystem`,
      name: "Williams Ecosystem",
      url: siteUrl,
    },
  ],
  knowsAbout: [
    "Systems Thinking",
    "Product Strategy",
    "Product Leadership",
    "Technical Product Management",
    "Founder Operations",
    "Capital Allocation",
    "Capital Allocation Engine",
    "Capital Stewardship",
    "Investment Philosophy",
    "Operator Investing",
    "Marketplace Systems",
    "Urban Retail Infrastructure",
    "Predictable Distribution",
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
  subjectOf: [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/portfolio#webpage`,
      name: "Williams Praise Product Portfolio",
      url: absoluteUrl("/portfolio"),
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/ventures#webpage`,
      name: "Ventures associated with Williams Praise",
      url: absoluteUrl("/ventures"),
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/iam-williams/",
    "https://github.com/williamspraise",
    "https://www.instagram.com/kku_by",
    "https://www.tiktok.com/@williams.praise",
    "https://shoppergetit.com",
  ],
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: absoluteUrl("/about"),
  name: "About Williams Praise",
  description: canonicalIdentityDescription,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
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
    "The official website and canonical identity hub of Williams Praise: capital allocation, operating systems, product work, ventures, systems thinking, essays, and original frameworks.",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  about: {
    "@id": `${siteUrl}/#person`,
  },
  inLanguage: "en",
};

export const ventureGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#williams-ecosystem`,
      name: "Williams Ecosystem",
      url: siteUrl,
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "The Williams Ecosystem connects Williams Praise's capital allocation thesis, product work, ventures, frameworks, essays, and public identity.",
    },
    {
      "@type": "Organization",
      "@id": "https://shoppergetit.com/#organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        `${shoppergetitContent.shortPositioning} ${shoppergetitContent.definition} ${shoppergetitContent.businessModel}`,
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/ventures#psi`,
      name: "Pendulum School of Innovation",
      alternateName: "PSI",
      url: "https://pendulumsi.com",
      contributor: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Pendulum School of Innovation is a learning and capability-building venture associated with Williams Praise, focused on structured learning, mentorship, cohort education, and professional transformation.",
    },
    {
      "@type": "Brand",
      "@id": `${siteUrl}/ventures#williams-content`,
      name: "Williams Content",
      url: absoluteUrl("/essays"),
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Williams Content is the public thinking, essays, frameworks, and audience-development layer of Williams Praise.",
    },
  ],
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
