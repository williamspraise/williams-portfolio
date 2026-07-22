import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "IREE Phases Framework by Williams Praise",
  description:
    "IREE Phases by Williams Praise is a human potential framework for moving from Ideal to Reality, Exceptionality, and measurable Extraordinary outcomes.",
  path: "/frameworks/iree",
  keywords: [
    "IREE Phases",
    "IREE Phases Williams Praise",
    "Ideal Reality Exceptionality Extraordinary",
    "human potential framework",
    "becoming extraordinary",
    "performance framework",
  ],
});

export default function IreePage() {
  const framework = getFramework("iree")!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/frameworks/iree#creativework`,
    name: "IREE Phases",
    url: `${siteUrl}/frameworks/iree`,
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
