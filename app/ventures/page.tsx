import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/data/ventures";
import { canonicalIdentityDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ventures by Williams Praise - Shoppergetit and Williams Ecosystem",
  description: `${canonicalIdentityDescription} Explore ventures associated with Williams Praise including Shoppergetit, Williams Content, Pendulum School of Innovation, and the Williams Ecosystem.`,
  keywords: [
    "Williams Praise ventures",
    "Williams Emmanuel Praise ventures",
    "Williams Ecosystem",
    "Williams Praise founder of Shoppergetit",
    "Shoppergetit",
    "Shoppergetit founder Williams Praise",
    "Williams Content",
    "Pendulum School of Innovation",
    "commerce infrastructure",
    "talent infrastructure",
    "venture builder",
  ],
  alternates: {
    canonical: "/ventures",
  },
};

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Venture Hub</p>
            <h1>Ventures</h1>
            <p>
              Active operating parts associated with Williams Praise and the
              Williams Ecosystem: Shoppergetit commerce infrastructure, public
              trust and distribution, talent infrastructure, product work, and
              future ventures shaped by systems thinking.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container venture-grid">
            {ventures.map((venture, index) => (
              <MotionReveal key={venture.title} delay={index * 0.05}>
                <VentureCard venture={venture} />
              </MotionReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
