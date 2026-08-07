import type { Metadata } from "next";
import SchoolingEssay from "./schooling-essay";
import { pageMetadata, siteUrl } from "@/lib/seo";

const title = "The Systems of Schooling: Into, Across and Beyond";
const description =
    "A systems-based essay on education as orientation, development, and transition. Why schooling should help people move toward meaningful destinations, not just certificates.";

export const metadata: Metadata = pageMetadata({
    title: `${title} by Williams Praise`,
    description,
    path: "/essays/the-systems-of-schooling",
    type: "article",
    keywords: [
        "The Systems of Schooling",
        "Into Across Beyond",
        "education as process",
        "schooling as becoming",
        "education transition",
        "schooling orientation development",
        "systems of schooling",
        "career development education",
        "schooling beyond graduation",
        "education destination",
        "Williams Praise essay",
        "education systems",
        "meaningful education",
        "schooling pipeline",
        "education strategy",
        "future of education",
    ],
});

export default function TheSystemsOfSchoolingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${siteUrl}/essays/the-systems-of-schooling#article`,
        headline: title,
        alternativeHeadline: [
            "Into Across Beyond",
            "The Systems of Schooling",
            "Education should be a process of becoming",
        ],
        description,
        author: {
            "@id": `${siteUrl}/#person`,
        },
        publisher: {
            "@id": `${siteUrl}/#person`,
        },
        mainEntityOfPage: `${siteUrl}/essays/the-systems-of-schooling`,
        url: `${siteUrl}/essays/the-systems-of-schooling`,
        isPartOf: {
            "@id": `${siteUrl}/#website`,
        },
        keywords:
            "The Systems of Schooling, Into Across Beyond, education transition, schooling as becoming, educational systems, career development",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <SchoolingEssay />
        </>
    );
}
