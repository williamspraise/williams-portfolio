import type { Metadata } from "next";
import EssayCard from "@/components/EssayCard";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SystemsLetter from "@/components/SystemsLetter";
import { essays } from "@/data/essays";

export const metadata: Metadata = {
  title: "Essays & Notes - Williams Praise",
  description:
    "Writing by Williams Praise on systems thinking, human behavior, relationships, product thinking, innovation, and resolve.",
};

export default function EssaysPage() {
  return (
    <>
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

        <SystemsLetter />
      </main>
      <Footer />
    </>
  );
}
