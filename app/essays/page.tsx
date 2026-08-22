import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import EssayCard from "@/components/EssayCard";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SystemsLetter from "@/components/SystemsLetter";
import { essays } from "@/data/essays";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Essays & Notes by Williams Praise",
  description:
    "Essays by Williams Praise on systems thinking, human behavior, relationships, product thinking, innovation, national wealth, love, resolve, and execution.",
  path: "/essays",
  keywords: [
    "Williams Praise essays",
    "Williams Emmanuel Praise essays",
    "Systems of Love essay",
    "Why Love Needs Systems",
    "The American system to wealth",
    "Why America Became Rich",
    "The Problem With Mediocrity",
    "Why Results Matter",
    "The Economics of Peace",
    "Trust Competence and Cooperation",
    "The Psychology of Becoming Extraordinary",
  ],
});

export default function EssaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Essays & Notes by Williams Praise",
    url: `${siteUrl}/essays`,
    description: metadata.description,
    author: {
      "@id": `${siteUrl}/#person`,
    },
    about: essays.map((essay) => essay.title),
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
            <p className="eyebrow">Writing</p>
            <h1>Essays & Notes</h1>
            <p>
              Writing on systems thinking, human behavior, relationships,
              product thinking, innovation, and resolve.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container essay-grid">
            {essays.map((essay, index) => (
              <MotionReveal key={essay.title} delay={index * 0.04}>
                <EssayCard essay={essay} />
              </MotionReveal>
            ))}
          </div>
        </section>

        <CTASection
          eyebrow="Thinking System"
          title="Essays connect back to frameworks and product work"
          description="Some essays begin as public thinking. Some become frameworks. Some clarify the product and venture systems I build."
          primaryHref="/frameworks"
          primaryLabel="Explore Frameworks"
          secondaryHref="/capital/philosophy"
          secondaryLabel="Allocation Philosophy"
        />

        <SystemsLetter />
      </main>
      <Footer />
    </>
  );
}
