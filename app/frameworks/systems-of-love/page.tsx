import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Systems of Love Framework by Williams Praise",
  description:
    "Systems of Love by Williams Praise is a relationship framework for understanding love through balance, value exchange, humane conduct, psychology, alignment, and responsibility.",
  path: "/frameworks/systems-of-love",
  keywords: [
    "Systems of Love",
    "Systems of Love Williams Praise",
    "Why Love Needs Systems",
    "love needs systems",
    "relationship framework",
    "psychology of love",
    "economics of love",
    "mathematics of love",
    "civility of love",
  ],
});

export default function SystemsOfLovePage() {
  const framework = getFramework("systems-of-love")!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/frameworks/systems-of-love#creativework`,
    name: "Systems of Love",
    alternateName: ["Why Love Needs Systems", "Systems of Love framework"],
    url: `${siteUrl}/frameworks/systems-of-love`,
    description: metadata.description,
    creator: {
      "@id": `${siteUrl}/#person`,
    },
    about: framework.pillars.map((pillar) => pillar.title),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <FrameworkDetail framework={framework} />
      <Footer />
    </>
  );
}
