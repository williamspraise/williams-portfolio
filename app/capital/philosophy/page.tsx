import { ArrowRight, CircleDollarSign, Gauge, Repeat2, Shield } from "lucide-react";
import {
  CapitalJourneyNav,
  FlowDiagram,
  NextCapitalStep,
} from "@/components/CapitalJourney";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { decisionLayer } from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Allocation Philosophy | Williams Praise",
  description:
    "Williams Praise on capital as productive possibility, productive capital velocity, evidence-led allocation, residue, recovery, and capital discipline.",
  path: "/capital/philosophy",
  type: "article",
  keywords: [
    "Allocation Philosophy",
    "Capital Allocation",
    "Williams Praise capital allocator",
    "Capital follows evidence",
    "Productive capital velocity",
  ],
});

const productivePossibilityFlow = [
  "Capital",
  "Productive activity",
  "Assets / Evidence / Cash Flow",
  "Stronger position",
];

const productiveResidue = [
  "Cash generated",
  "Cash preserved",
  "Reusable software",
  "Distribution",
  "Operating knowledge",
  "Relationships",
  "Data / signal",
  "Trust",
  "Infrastructure",
  "Market intelligence",
];

const productiveVelocityFlow = [
  "Capital Base",
  "Productive Cycle",
  "Cash + Assets + Signal",
  "Stronger Capital Base",
  "Next Productive Cycle",
];

const causeFlow = [
  "Capital",
  "Behavioral / Economic Hypothesis",
  "Intervention",
  "Intended Effect",
  "Signal",
  "Decision",
];

const philosophyPrinciples = [
  {
    title: "Capital is productive possibility",
    text:
      "Money has optionality before allocation. Once deployed, that optionality becomes exposure, so the allocator must decide which system deserves the conversion.",
    icon: CircleDollarSign,
  },
  {
    title: "Return is necessary, but not the only question",
    text:
      "Financial return remains important. Williams also asks what a cycle left behind that can strengthen the next allocation without pretending those residues are cash.",
    icon: Shield,
  },
  {
    title: "Productive capital velocity",
    text:
      "Wealth can accelerate when a capital base repeatedly produces assets, cash flow, intelligence, infrastructure, and stronger future allocation capability.",
    icon: Repeat2,
  },
  {
    title: "Capital should purchase causes, not categories",
    text:
      "Williams does not want capital trapped in labels like marketing, hiring, technology, or logistics. The useful question is what cause the capital is meant to create.",
    icon: ArrowRight,
  },
  {
    title: "Capital follows evidence - not optimism",
    text:
      "The objective matters more than the first execution plan. The original method is not sacred when evidence shows a better path.",
    icon: Gauge,
  },
];

export default function AllocationPhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/philosophy" />
        <section className="capital-hero">
          <div className="container">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">01 - Allocation Philosophy</p>
              <h1>Capital is productive possibility.</h1>
              <p>
                Capital is stored capacity. Allocation converts that capacity
                into activity, assets, evidence, cash flow, or learning. The
                allocator&apos;s work is not simply to spend money, but to
                decide which systems deserve that conversion.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container capital-diagram-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Productive Possibility"
                title="Money has optionality before allocation."
                description="Once capital enters a system, possibility becomes exposure. Good allocation means choosing the systems worthy of that exposure."
              />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={productivePossibilityFlow} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="What Remains"
                title="What did the cycle leave behind?"
                description="Traditional return analysis asks what the capital earned. Williams also asks what the allocation produced that can make the next allocation stronger."
              />
            </MotionReveal>
            <MotionReveal className="diligence-layer-tags" delay={0.08}>
              {productiveResidue.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.12}>
              <Shield size={26} />
              <p>
                Return still matters. Productive residue can strengthen future
                allocation capacity, but it is not presented as a substitute
                for realized financial return.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Productive Capital Velocity</p>
              <h2>How many productive cycles can your capital complete?</h2>
              <p>
                Wealth acceleration is not only about chasing a higher
                percentage return. It can also come from repeatedly converting
                a capital base into productive assets, cash flow, intelligence,
                reusable infrastructure, and improved allocation capability.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={productiveVelocityFlow} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-diagram-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Cause-Based Allocation"
                title="Capital should purchase causes, not categories."
                description="A budget label is not enough. Williams connects capital to the behavioral or economic cause it is meant to create, then studies the signal."
              />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={causeFlow} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Five Principles"
                title="The philosophy underneath the engine"
                description="These beliefs shape how Williams Praise thinks about capital allocation before the operating engine begins making decisions."
              />
            </MotionReveal>
            <div className="engine-step-grid">
              {philosophyPrinciples.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <MotionReveal key={principle.title} delay={index * 0.04}>
                    <article>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon size={21} />
                      <h3>{principle.title}</h3>
                      <p>{principle.text}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Evidence Discipline</p>
              <h2>The original method is not sacred.</h2>
              <p>
                The objective matters more than the initial plan. Capital may
                increase, hold, redirect, or stop when evidence changes.
              </p>
            </MotionReveal>
            <MotionReveal className="decision-grid" delay={0.08}>
              {decisionLayer.map((decision) => (
                <article key={decision}>
                  <Gauge size={20} />
                  <h3>{decision}</h3>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="capital-principle">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Next</p>
              <h2>Philosophy determines what capital should do.</h2>
              <p>
                The Capital Engine turns those beliefs into repeatable
                operating decisions.
              </p>
            </MotionReveal>
          </div>
        </section>

        <div className="container">
          <NextCapitalStep current="/capital/philosophy" />
        </div>
      </main>
      <Footer />
    </>
  );
}
