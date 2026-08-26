import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/data/ventures";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ventures & Operating Assets | Williams Praise",
  description:
    "Ventures and operating assets associated with Williams Praise and Pendulum HQ, including Shoppergetit, Pendulum School of Innovation, Williams Content, and future Pendulum HQ ecosystem concepts.",
  path: "/ventures",
  keywords: [
    "Williams Praise ventures",
    "Pendulum HQ",
    "Pendulum HQ ventures",
    "Williams Praise founder of Pendulum HQ",
    "Williams Praise co-founder of Shoppergetit",
    "Shoppergetit",
    "Shoppergetit co-founder Williams Praise",
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
              Pendulum HQ is the venture-building umbrella founded by Williams
              Praise. Shoppergetit and Pendulum School of Innovation are
              operating ventures within that ecosystem, while other components
              are separated as product work, trust infrastructure, planned
              opportunities, or thesis assets. Together, they show where the
              company is building reusable capability, distribution, trust, and
              market intelligence that may strengthen future capital cycles.
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
