import type { Metadata } from "next";
import { essays } from "@/data/essays";
import { frameworks } from "@/data/frameworks";
import { projects } from "@/data/projects";
import { shoppergetitContent } from "@/data/shoppergetit";

export const siteUrl = "https://williamspraise.com";
export const siteName = "Williams Praise";
export const publicName = "Williams Praise";
export const authorName = publicName;
export const legalName = "Williams Praise Emmanuel";
export const indexedNameVariant = "Williams Emmanuel Praise";
export const nickname = "Liam";
export const nativeName = "Kubiat";
export const parentCompanyName = "Pendulum HQ";

export const socialProfileUrls = [
  "https://www.facebook.com/williams.praise.10/",
  "https://linktr.ee/williamspraise",
  "https://www.linkedin.com/in/iam-williams/",
  "https://github.com/williamspraise",
  "https://www.instagram.com/kku_by",
  "https://www.tiktok.com/@williams.praise",
  "https://shoppergetit.com",
] as const;

export const identityKeywords = [
  "Williams Praise",
  "Williams Emmanuel Praise",
  "Williams Praise Emmanuel",
  "Williams Praise Emmanual",
  "Williams Praise Liam",
  "Williams Liam",
  "Liam Williams",
  "Kubiat",
  "Kubiat Williams",
  "Williams Emmanuel Praise official website",
  "Williams Praise Emmanuel official website",
  "Williams Emmanuel Praise biography",
  "Williams Praise Emmanuel biography",
  "Williams Praise Emmanuel identity",
  "Williams Emmanuel Praise identity",
  "Williams Praise tech founder",
  "Williams Praise Shoppergetit co-founder",
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
  "Williams Praise founder of Pendulum HQ",
  "Williams Praise co-founder of Shoppergetit",
  "Pendulum HQ founder Williams Praise",
  "Pendulum HQ Shoppergetit",
  "Pendulum HQ PSI",
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
  "Founder Operator",
  "Capital Allocation",
  "Capital Allocation Engine",
  "African capital allocator",
  "African founder operator",
  "Nigerian entrepreneur",
  "Williams Praise technical product leader",
  "Williams Praise founder",
  "Pendulum HQ",
  "Pendulum HQ ecosystem",
  "Williams Praise",
  "Williams Praise Emmanuel",
  "Systems Thinker",
  "Systems Thinking",
  "Founder-Operator",
  "Founder Operator",
  "Product Builder",
  "Technical Product Leader",
  "Founding Product Lead",
  "Product Strategist",
  "Technical Product Manager",
  "UX Product Professional",
  "UX Design Mentor",
  "Framework Creator",
  "Capital Allocator",
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
  "Williams Praise is the public professional identity of Williams Praise Emmanuel, also indexed as Williams Emmanuel Praise. He is a Nigeria-based Systems Thinker for Human Problems, founder of Pendulum HQ, product builder, technical product leader, Capital Allocator + Operator, and co-founder/operator associated with Shoppergetit.";

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
          alt: "Williams Praise - official website and identity hub",
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
  additionalName: [legalName, nickname, nativeName],
  alternateName: [
    legalName,
    indexedNameVariant,
    nickname,
    nativeName,
    ...identityKeywords.filter(
      (keyword) =>
        keyword !== authorName &&
        keyword !== legalName &&
        keyword !== indexedNameVariant &&
        keyword !== nickname &&
        keyword !== nativeName,
    ),
  ],
  description: canonicalIdentityDescription,
  disambiguatingDescription:
    "Williams Praise is the public professional identity of Williams Praise Emmanuel, indexed on Facebook as Williams Emmanuel Praise and personally associated with the names Liam and Kubiat. He is represented by williamspraise.com, Linktree williamspraise, Facebook williams.praise.10, and LinkedIn iam-williams.",
  url: siteUrl,
  mainEntityOfPage: {
    "@id": `${siteUrl}/identity#profile`,
  },
  image: absoluteUrl("/images/C208(1).jpg"),
  email: "mailto:williamspraise01@gmail.com",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "officialWebsite",
      value: "williamspraise.com",
      url: siteUrl,
    },
    {
      "@type": "PropertyValue",
      propertyID: "publicHandle",
      value: "iam-williams",
      url: "https://www.linkedin.com/in/iam-williams/",
    },
    {
      "@type": "PropertyValue",
      propertyID: "facebookUsername",
      value: "williams.praise.10",
      url: "https://www.facebook.com/williams.praise.10/",
    },
  ],
  homeLocation: {
    "@type": "Place",
    name: "Abuja, Nigeria",
  },
  nationality: {
    "@type": "Country",
    name: "Nigeria",
  },
  jobTitle: [
    "Capital Allocator + Operator",
    "Systems Thinker for Human Problems",
    "Founder-Operator",
    "Product Builder",
    "Technical Product Leader",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": `${siteUrl}/#pendulum-hq`,
    name: parentCompanyName,
    url: siteUrl,
  },
  founder: [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#pendulum-hq`,
      name: parentCompanyName,
      url: siteUrl,
    },
  ],
  affiliation: [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#pendulum-hq`,
      name: parentCompanyName,
      url: siteUrl,
      description:
        "Pendulum HQ is the venture-building parent company founded by Williams Praise.",
    },
    {
      "@type": "Organization",
      "@id": "https://shoppergetit.com/#organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
      parentOrganization: {
        "@id": `${siteUrl}/#pendulum-hq`,
      },
      description:
        "Shoppergetit is a Pendulum HQ subsidiary and operating venture associated with Williams Praise as co-founder/operator.",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/ventures#psi`,
      name: "Pendulum School of Innovation",
      alternateName: "PSI",
      url: "https://pendulumsi.com",
      parentOrganization: {
        "@id": `${siteUrl}/#pendulum-hq`,
      },
      description:
        "Pendulum School of Innovation is a Pendulum HQ subsidiary focused on structured learning, mentorship, capability-building, and professional transformation.",
    },
    {
      "@type": "Organization",
      name: "Springboard",
      url: "https://www.springboard.com/",
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
  sameAs: socialProfileUrls,
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/identity#profile`,
  url: absoluteUrl("/identity"),
  name: "Williams Praise Official Identity",
  description: canonicalIdentityDescription,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
};

export const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/about#profile`,
  url: absoluteUrl("/about"),
  name: "Biography of Williams Praise",
  description: canonicalIdentityDescription,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
};

export const identityHomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Williams Praise - Official Website",
  description: canonicalIdentityDescription,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
  about: {
    "@id": `${siteUrl}/#person`,
  },
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: [
    "Williams Praise Official Website",
    "Williams Praise Emmanuel",
    "Williams Emmanuel Praise",
    "Liam",
    "Kubiat",
    "Williams Praise Portfolio",
    "Williams Praise Emmanuel Official Website",
    "Pendulum HQ",
    "williamspraise.com",
  ],
  url: siteUrl,
  description:
    "The official website and canonical identity hub of Williams Praise, the public professional identity of Williams Praise Emmanuel, also indexed as Williams Emmanuel Praise: Pendulum HQ, product work, ventures, systems thinking, essays, original frameworks, and capital allocation.",
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
      "@id": `${siteUrl}/#pendulum-hq`,
      name: parentCompanyName,
      alternateName: ["Pendulum", "Pendulum HQ ecosystem"],
      url: siteUrl,
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      subOrganization: [
        {
          "@id": "https://shoppergetit.com/#organization",
        },
        {
          "@id": `${siteUrl}/ventures#psi`,
        },
      ],
      description:
        "Pendulum HQ is the venture-building parent company founded by Williams Praise. Its ecosystem connects product work, operating ventures, frameworks, essays, public identity, and capital thinking.",
    },
    {
      "@type": "Organization",
      "@id": "https://shoppergetit.com/#organization",
      name: "Shoppergetit",
      url: "https://shoppergetit.com",
      parentOrganization: {
        "@id": `${siteUrl}/#pendulum-hq`,
      },
      description:
        `Shoppergetit is a Pendulum HQ subsidiary and operating venture associated with Williams Praise as co-founder/operator. ${shoppergetitContent.shortPositioning} ${shoppergetitContent.definition} ${shoppergetitContent.businessModel}`,
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/ventures#psi`,
      name: "Pendulum School of Innovation",
      alternateName: "PSI",
      url: "https://pendulumsi.com",
      parentOrganization: {
        "@id": `${siteUrl}/#pendulum-hq`,
      },
      description:
        "Pendulum School of Innovation is a Pendulum HQ subsidiary focused on structured learning, mentorship, capability-building, cohort education, and professional transformation.",
    },
    {
      "@type": "Brand",
      "@id": `${siteUrl}/ventures#williams-content`,
      name: "Williams Content",
      url: absoluteUrl("/essays"),
      founder: {
        "@id": `${siteUrl}/#pendulum-hq`,
      },
      description:
        "Williams Content is the public thinking, essays, frameworks, and audience-development layer connected to Williams Praise and the Pendulum HQ ecosystem.",
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
