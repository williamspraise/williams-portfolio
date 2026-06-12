import type { Metadata } from "next";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import VentureCard from "@/components/VentureCard";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Ventures - Williams Praise",
  description:
    "Ventures by Williams Praise across commerce, education, talent systems, and innovation infrastructure.",
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
              Products and systems built around commerce, education, capability,
              trust, and transformation.
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
