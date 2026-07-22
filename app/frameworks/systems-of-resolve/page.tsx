import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Systems of Resolve Framework by Williams Praise",
  description:
    "Systems of Resolve by Williams Praise is a clarity and decision framework for awareness, context, pattern recognition, diagnosis, and responsible action.",
  path: "/frameworks/systems-of-resolve",
  keywords: [
    "Systems of Resolve",
    "Systems of Resolve Williams Praise",
    "resolve framework",
    "clarity framework",
    "decision framework",
    "pattern recognition",
    "responsible decision making",
  ],
});

export default function SystemsOfResolvePage() {
  const framework = getFramework("systems-of-resolve")!;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/frameworks/systems-of-resolve#creativework`,
    name: "Systems of Resolve",
    url: `${siteUrl}/frameworks/systems-of-resolve`,
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
