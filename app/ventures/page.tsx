import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/data/ventures";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ventures & Operating Assets | Williams Praise",
  description:
    "Ventures and operating assets associated with Williams Praise, including Shoppergetit urban retail infrastructure, Williams Content, Pendulum School of Innovation, and planned Williams Ecosystem concepts.",
  path: "/ventures",
  keywords: [
    "Williams Praise ventures",
    "Williams Ecosystem",
    "Williams Praise founder of Shoppergetit",
    "Shoppergetit",
    "Shoppergetit founder Williams Praise",
    "Williams Content",
    "Pendulum School of Innovation",
    "urban retail infrastructure",
    "predictable distribution",
    "local retailers",
    "customer demand",
    "fulfilment",
    "talent infrastructure",
    "venture builder",
  ],
});

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Venture Hub</p>
            <h1>Ventures and operating assets</h1>
            <p>
              Shoppergetit is the primary executed public allocation evidence.
              Other ecosystem components are clearly separated as current
              operating work, developing infrastructure, product work, planned
              opportunities, or thesis assets. Together, they show where
              Williams is building reusable capability, distribution, trust,
              and market intelligence that may strengthen future capital cycles.
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
