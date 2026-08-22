import { FileText, LockKeyhole, ShieldCheck } from "lucide-react";
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
  controlsInDevelopment,
  riskSystem,
  stewardshipPrinciples,
} from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Capital Stewardship & Allocation Discipline | Williams Praise",
  description:
    "How Williams Praise approaches capital stewardship, allocation boundaries, evidence gates, reserves, recovery, conflict management, and institutional controls in development.",
  path: "/capital/stewardship",
  keywords: [
    "Capital Stewardship",
    "Allocation Discipline",
    "Capital preservation",
    "Williams Praise capital",
    "capital risk management",
  ],
});

const recoveryLadder = [
  "Preserve Cash",
  "Recover Execution",
  "Recover Assets",
  "Unlock Portfolio Liquidity",
  "Structured Recovery",
];

export default function CapitalStewardshipPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/stewardship" />
        <section className="capital-hero">
          <div className="container capital-hub-hero-grid">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">05 - Capital Stewardship</p>
              <h1>What happens when the allocation is wrong?</h1>
              <p>
                Stewardship is the discipline of preserving capital, reducing
                exposure, detecting weak signals, recovering what can be
                recovered, and formalizing controls as capital responsibility
                grows. Recovery is not only downside management; it protects
                the possibility of the next productive cycle.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={recoveryLadder} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Operating Doctrine"
                title="Discipline begins before institutional scale."
                description="Williams' stewardship starts with the principles that make larger responsibility possible: preservation, bounded exposure, staged deployment, evidence gates, reserves, recovery routes, and truthful claim separation."
              />
            </MotionReveal>
            <div className="allocation-fact-grid">
              {stewardshipPrinciples.map((principle, index) => (
                <MotionReveal key={principle} delay={index * 0.035}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{principle}</h3>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Risk Responses"
                title="Winning matters. So does knowing what happens when we do not."
                description="The point is not to avoid every risk. The point is to know which risk is present, choose the right intervention early, and keep weak allocations from trapping useful capital."
              />
            </MotionReveal>
            <div className="risk-card-grid">
              {riskSystem.map((item, index) => (
                <MotionReveal key={item.risk} delay={index * 0.05}>
                  <article>
                    <ShieldCheck size={21} />
                    <h3>{item.risk}</h3>
                    <p>{item.response}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Final Optionality</p>
              <h2>Value can exist before cash arrives.</h2>
              <p>
                A business can possess real underlying value while lacking
                sufficient liquidity at the exact settlement moment. Where
                appropriate and properly documented, routes may include partial
                repayment plus extension, principal-first structures,
                refinancing, strategic investment, minority liquidity, or other
                permitted transactions.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <ShieldCheck size={28} />
              <p>
                These are options, not guarantees. Optionality exists to prevent
                a temporary liquidity mismatch from automatically destroying
                otherwise productive value.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Institutional Layer</p>
              <h2>Formal controls grow with the capital responsibility.</h2>
              <p>
                As the Engine prepares to carry larger pools of partner
                capital, operating principles must become formal systems around
                custody, reporting, conflicts, decision rights, accounting, and
                partner visibility.
              </p>
            </MotionReveal>
            <MotionReveal className="controls-panel" delay={0.08}>
              <div>
                <span>Institutionalization Roadmap</span>
              </div>
              {controlsInDevelopment.map((control) => (
                <div key={control}>
                  <span>{control}</span>
                </div>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Reporting Logic</p>
              <h2>Partner visibility must separate facts from models.</h2>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <FileText size={28} />
              <p>
                Reporting should identify what is executed, what is current,
                what is planned, what is a target, and what is illustrative.
                Strong stewardship protects both the capital and the truth
                about what the capital has produced.
              </p>
              <LockKeyhole size={22} />
            </MotionReveal>
          </div>
        </section>

        <div className="container">
          <NextCapitalStep current="/capital/stewardship" />
        </div>
      </main>
      <Footer />
    </>
  );
}
