import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About - Williams Praise",
  description:
    "About Williams Praise, a founder, mentor, product builder, technical product lead, and systems thinker.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero about-page-hero">
          <div className="container">
            <p className="eyebrow">About Williams Praise</p>
            <h1>Builder, mentor, founder, and systems thinker.</h1>
            <p>
              I work across product strategy, UX systems, technical execution,
              human behavior, and original frameworks.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container about-story-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Story"
                title="A practical thinker for complex human and product systems"
              />
            </MotionReveal>
            <MotionReveal className="about-copy" delay={0.08}>
              <p className="lead">
                I am Williams Praise, a founder, product builder, UX/product
                professional, mentor, and systems thinker.
              </p>
              <p>
                My work sits at the intersection of product strategy, UX
                systems, technical execution, human behavior, and original
                frameworks. I am drawn to problems where the surface issue is
                only a signal of a deeper system: trust, capability, alignment,
                incentive, conduct, clarity, or execution.
              </p>
              <p>
                I have mentored 900+ professionals and students across Product
                Engineering and UX Design, working with people across South
                Korea, India, the United States, Switzerland, Nigeria, and
                beyond.
              </p>
              <p>
                I have built products across commerce, AI mobility, education,
                and healthtech, and created frameworks including Systems of
                Love, IREE Phases, and Systems of Resolve.
              </p>
              <p>
                I am open to product leadership roles, collaborations,
                speaking, consulting, partnerships, and meaningful ventures.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Work Together
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
