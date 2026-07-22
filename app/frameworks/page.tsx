import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkCard from "@/components/FrameworkCard";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { frameworks } from "@/data/frameworks";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frameworks by Williams Praise",
  description:
    "Original frameworks by Williams Praise including Systems of Love, IREE Phases, and Systems of Resolve for love, resolve, human behavior, performance, and decision-making.",
  path: "/frameworks",
  keywords: [
    "Williams Praise frameworks",
    "Williams Emmanuel Praise frameworks",
    "Systems of Love",
    "Why Love Needs Systems",
    "IREE Phases",
    "Systems of Resolve",
    "human behavior frameworks",
    "relationship framework",
    "decision framework",
    "performance framework",
  ],
});

export default function FrameworksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Frameworks by Williams Praise",
    url: `${siteUrl}/frameworks`,
    description: metadata.description,
    creator: {
      "@id": `${siteUrl}/#person`,
    },
    hasPart: frameworks.map((framework) => ({
      "@type": "CreativeWork",
      name: framework.title,
      url: `${siteUrl}/frameworks/${framework.slug}`,
      description: framework.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Original Thinking</p>
            <h1>Frameworks & Original Thinking</h1>
            <p>
              Original systems for understanding human behavior, alignment,
              resolve, love, performance, and decision-making.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Framework Library"
                title="Systems for making human problems more legible"
                description="Each framework is designed to turn vague experiences into clearer structures, choices, and outcomes."
              />
            </MotionReveal>
            <div className="framework-grid">
              {frameworks.map((framework, index) => (
                <MotionReveal key={framework.slug} delay={index * 0.05}>
                  <FrameworkCard framework={framework} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
