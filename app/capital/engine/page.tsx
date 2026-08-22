import { AlertTriangle, ArrowRight, Gauge, Repeat2 } from "lucide-react";
import {
  CapitalJourneyNav,
  FlowDiagram,
  NextCapitalStep,
} from "@/components/CapitalJourney";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import {
  capitalEngineSteps,
  decisionLayer,
  riskSystem,
} from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Capital Allocation Engine | Williams Praise",
  description:
    "The Williams Capital Allocation Engine: preserve, deploy, measure, decide, return, and repeat through evidence-led capital deployment and recovery discipline.",
  path: "/capital/engine",
  keywords: [
    "Williams Capital Allocation Engine",
    "Capital Allocation Engine",
    "Capital preservation",
    "Capital Allocator",
    "Founder Operator",
  ],
});

const engineFlow = capitalEngineSteps.map((step) => step.step);

export default function CapitalEnginePage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/engine" />
        <section className="capital-hero">
          <div className="container capital-hub-hero-grid">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">02 - Capital Engine</p>
              <h1>Preserve, deploy, measure, decide, return, repeat.</h1>
              <p>
                The Williams Capital Allocation Engine turns philosophy into an
                operating rhythm: protect the capital base, deploy against a
                clear hypothesis, measure the evidence, and redeploy from a
                stronger position when the cycle earns it.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={engineFlow} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Operating Cycle"
                title="A capital cycle should create more than activity."
                description="Each stage exists to convert capital into evidence, assets, cash flow, operating intelligence, or a disciplined decision to stop."
              />
            </MotionReveal>
            <div className="engine-step-grid">
              {capitalEngineSteps.map((step, index) => (
                <MotionReveal key={step.step} delay={index * 0.04}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.step}</h3>
                    <p>{step.text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Decision Layer</p>
              <h2>Capital has four possible responses.</h2>
              <p>
                Evidence determines whether a cycle advances, pauses, changes
                route, or stops. Optimism is useful for starting hypotheses,
                not for extending weak allocations.
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

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Risk Categories"
                title="Different risks need different interventions."
                description="Allocation risk, execution risk, and liquidity risk behave differently. Treating them separately helps Williams preserve capital while still operating with ambition."
              />
            </MotionReveal>
            <div className="risk-card-grid">
              {riskSystem.map((item, index) => (
                <MotionReveal key={item.risk} delay={index * 0.05}>
                  <article>
                    <AlertTriangle size={21} />
                    <h3>{item.risk}</h3>
                    <p>{item.response}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Capital Velocity</p>
              <h2>The next allocation should begin from a stronger position.</h2>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <Repeat2 size={26} />
              <p>
                A completed cycle may leave behind reusable assets, operating
                intelligence, distribution, data, trust, relationships, and
                infrastructure. Those can strengthen the next allocation, but
                they are not presented as cash return.
              </p>
              <a className="text-link" href="/capital/allocation-record">
                See executed evidence
                <ArrowRight size={15} />
              </a>
            </MotionReveal>
          </div>
        </section>

        <div className="container">
          <NextCapitalStep current="/capital/engine" />
        </div>
      </main>
      <Footer />
    </>
  );
}
