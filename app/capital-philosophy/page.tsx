import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  CircleDollarSign,
  Factory,
  Landmark,
  Leaf,
  Network,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Footer";
import InvestmentMemoRequestModal from "@/components/InvestmentMemoRequestModal";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Capital Philosophy - Williams Praise",
  description:
    "Williams Praise on capital, compounding systems, and how capable capital creates better opportunities over time.",
  alternates: {
    canonical: "/capital-philosophy",
  },
};

const wealthEras = [
  {
    name: "Agriculture",
    icon: Leaf,
    copy: "Wealth was tied to land, yield, labor, and control of food production.",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    copy: "Wealth moved through factories, machines, supply chains, and repeatable output.",
  },
  {
    name: "Finance",
    icon: Landmark,
    copy: "Wealth accelerated when capital could be pooled, priced, moved, and multiplied.",
  },
  {
    name: "Technology & AI",
    icon: Sparkles,
    copy: "Wealth now compounds through software, intelligence, networks, trust, and speed.",
  },
];

const ecosystemLessons = [
  "Capital was not allocated into one company.",
  "It was allocated into an ecosystem.",
  "Failure created reusable assets.",
  "Successful companies financed future companies.",
];

const engineFlow = [
  "Capital",
  "High Conviction Opportunity",
  "Revenue / Knowledge / Technology / Trust",
  "Stronger Engine",
  "Next Opportunity",
  "Repeat",
];

const routes = [
  {
    label: "Route A",
    title: "Commercial Assets",
    items: ["Shoppergetit", "PSI", "Project Cyrus", "Future Ventures"],
  },
  {
    label: "Route B",
    title: "Trust Assets",
    items: [
      "Williams Brand",
      "Essays",
      "Podcast",
      "Reputation",
      "Audience",
      "Community",
    ],
  },
];

const flywheel = [
  "Capital",
  "Companies",
  "Cash Flow",
  "Knowledge",
  "Trust",
  "Larger Opportunities",
  "Better Companies",
  "Repeat",
];

function PhilosophyFlow({ items }: { items: string[] }) {
  return (
    <div className="capital-flow">
      {items.map((item, index) => (
        <div key={item} className="capital-flow-row">
          <span>{item}</span>
          {index < items.length - 1 && <ArrowDown size={16} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export default function CapitalPhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <section className="capital-hero">
          <div className="container">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">Investment Diligence / Stage 02</p>
              <h1>Capital Philosophy</h1>
              <p>
                &quot;I don&apos;t believe wealth is created by repeatedly finding
                better opportunities.
                <br />
                <br />I believe wealth is created by building systems that
                repeatedly create better opportunities.&quot;
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="compound">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Question 01</p>
              <h2>Why does some capital compound faster than other capital?</h2>
            </MotionReveal>
            <MotionReveal className="capital-contrast" delay={0.08}>
              <article>
                <p className="panel-kicker">Linear Investing</p>
                <h3>Capital searches for the next isolated return.</h3>
                <div className="linear-diagram">
                  <span>Capital</span>
                  <ArrowRight size={17} />
                  <span>Opportunity</span>
                  <ArrowRight size={17} />
                  <span>Return</span>
                </div>
                <p>The result can be useful, but the next decision often starts cold.</p>
              </article>
              <article className="capital-contrast-primary">
                <p className="panel-kicker">Compounding Investing</p>
                <h3>Capital builds an engine that improves the next decision.</h3>
                <div className="compound-diagram">
                  {["Capital", "Asset", "Knowledge", "Trust", "Better Deal Flow"].map(
                    (item) => (
                      <span key={item}>{item}</span>
                    ),
                  )}
                </div>
                <p>The capital becomes more capable because the system learns.</p>
              </article>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="eras">
          <div className="container">
            <MotionReveal className="capital-section-head">
              <p className="eyebrow">Question 02</p>
              <h2>The Four Wealth Eras</h2>
            </MotionReveal>
            <div className="wealth-era-timeline">
              {wealthEras.map((era, index) => {
                const Icon = era.icon;

                return (
                  <MotionReveal key={era.name} delay={index * 0.04}>
                    <article>
                      <span className="capability-icon">
                        <Icon size={21} />
                      </span>
                      <h3>{era.name}</h3>
                      <p>{era.copy}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="discovery">
          <div className="container capital-diagram-grid">
            <MotionReveal>
              <p className="eyebrow">Question 03</p>
              <h2>The Silicon Valley Lesson</h2>
              <p>
                Not a history lesson. A pattern: capital became more powerful
                when it entered a reusable ecosystem.
              </p>
            </MotionReveal>
            <MotionReveal className="silicon-lesson-panel" delay={0.08}>
              <div className="ecosystem-core">
                <Network size={34} />
                <strong>Ecosystem</strong>
              </div>
              <div className="ecosystem-lessons">
                {ecosystemLessons.map((lesson, index) => (
                  <div key={lesson}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{lesson}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="capital-principle" id="principle">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">The Principle</p>
              <h2>
                I stopped asking,
                <span>How do I build one successful company?</span>
                Instead I asked,
                <span>
                  How do I build a system that repeatedly creates successful
                  companies?
                </span>
              </h2>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="engine">
          <div className="container capital-diagram-grid">
            <MotionReveal>
              <p className="eyebrow">Question 04</p>
              <h2>The Capital Allocation Engine</h2>
              <p>
                Conceptually, the engine converts each serious opportunity into
                more than a result. It converts it into stronger future
                capacity.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-engine-panel" delay={0.08}>
              <PhilosophyFlow items={engineFlow} />
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="routes">
          <div className="container">
            <MotionReveal className="capital-section-head">
              <p className="eyebrow">Question 05</p>
              <h2>The Two Routes</h2>
            </MotionReveal>
            <div className="capital-route-grid">
              {routes.map((route, index) => (
                <MotionReveal key={route.title} delay={index * 0.05}>
                  <article>
                    <p className="panel-kicker">{route.label}</p>
                    <h3>{route.title}</h3>
                    <div className="capital-route-list">
                      {route.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>
            <MotionReveal className="capital-route-note" delay={0.12}>
              Both routes strengthen the same engine: one through commercial
              capability, the other through trust, audience, and reputation.
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="flywheel">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Question 06</p>
              <h2>The Compounding Flywheel</h2>
              <p>
                The aim is not movement. The aim is accumulated capability.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-flywheel" delay={0.08}>
              <div className="flywheel-center">
                <CircleDollarSign size={32} />
                <strong>Capable Capital</strong>
              </div>
              {flywheel.map((item, index) => (
                <div key={item} className={`flywheel-node node-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="section capital-closing">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Closing Thought</p>
              <h2>
                I don&apos;t believe capital should simply earn returns. I
                believe capital should become progressively more capable.
              </h2>
            </MotionReveal>
          </div>
        </section>

        <section className="section capital-memo-section">
          <div className="container">
            <MotionReveal className="capital-memo-card">
              <div>
                <p className="eyebrow">Private Next Step</p>
                <h2>Investment Memorandum</h2>
                <p>
                  If you&apos;ve read this far, you now understand how I think.
                </p>
                <p>
                  The Investment Memorandum explains how this philosophy becomes
                  an operational capital allocation model, including deployment
                  strategy, risk architecture, return structure and partnership
                  terms.
                </p>
                <p>
                  This document is shared only after an introductory
                  conversation.
                </p>
              </div>
              <div className="capital-memo-action">
                <Blocks size={34} />
                <InvestmentMemoRequestModal />
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
