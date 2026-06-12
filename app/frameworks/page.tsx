import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkCard from "@/components/FrameworkCard";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { frameworks } from "@/data/frameworks";

export const metadata: Metadata = {
  title: "Frameworks - Williams Praise",
  description:
    "Original frameworks by Williams Praise including Systems of Love, IREE Phases, and Systems of Resolve.",
};

export default function FrameworksPage() {
  return (
    <>
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
