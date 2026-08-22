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
              Active operating parts associated with Williams Praise and the
              Williams Ecosystem: Shoppergetit urban retail infrastructure,
              public trust and distribution, talent infrastructure, product
              work, and future ventures shaped by systems thinking. These
              businesses show where Williams is building operating capability,
              reusable assets, and market intelligence.
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
