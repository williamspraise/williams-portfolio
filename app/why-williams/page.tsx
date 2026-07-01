import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Brain,
  Building2,
  CircleDot,
  Layers3,
  Repeat2,
  ShieldCheck,
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Why Williams - Capital Allocation Engine Due Diligence",
  description:
    "A due diligence page explaining why Williams Praise is positioned to operate a compounding capital allocation engine.",
  alternates: {
    canonical: "/why-williams",
  },
};

const originTimeline = [
  {
    label: "UX Design",
    text: "The early discipline was learning where friction lives: in trust, flow, incentive, attention, and unclear decisions.",
  },
  {
    label: "Product",
    text: "Product work turned that observation into operating questions: what system makes the right behavior easier?",
  },
  {
    label: "Shoppergetit",
    text: "Commerce made the pattern tangible. The work was not one app, but vendors, shoppers, operations, payments, trust, and repeat usage.",
  },
  {
    label: "America Research",
    text: "Studying wealth formation shifted the lens from company tactics to infrastructure, institutions, capital, talent, and compounding advantage.",
  },
  {
    label: "Systems Thinking",
    text: "The same conclusion kept returning: visible outcomes usually come from invisible systems that have been accumulating for years.",
  },
];

const capabilities = [
  {
    title: "Systems Thinking",
    icon: Brain,
    summary:
      "I naturally search for invisible systems behind visible outcomes.",
    detail:
      "This matters because the engine is not a bet on one product. It is a discipline for seeing how software, trust, audience, operations, capital, and reputation reinforce or weaken each other.",
  },
  {
    title: "Infrastructure Thinking",
    icon: Building2,
    summary: "Instead of asking what product, I ask what infrastructure creates many products.",
    detail:
      "The question moves upstream. If a venture requires identity, payments, education, distribution, support, or operating logic, I look for reusable foundations that can serve the next venture too.",
  },
  {
    title: "Compounding Thinking",
    icon: Repeat2,
    summary:
      "Everything I build should make the next thing easier: technology, knowledge, audience, capital, and relationships.",
    detail:
      "A single company can be fragile. A compounding engine preserves learning, code, judgment, customer insight, and reputation so the next build starts ahead.",
  },
  {
    title: "Execution",
    icon: Boxes,
    summary:
      "Ideas become software. Software becomes businesses. Businesses become reusable assets.",
    detail:
      "The operating standard is not theory for its own sake. The work must be converted into shipped interfaces, working workflows, real users, business logic, and assets that can be inspected.",
  },
];

const existingAssets = [
  {
    name: "Shoppergetit",
    asset: "Marketplace operating knowledge across vendors, shoppers, fulfillment, trust, payments, and local commerce behavior.",
  },
  {
    name: "WilliamsPraise",
    asset: "A personal trust layer for serious thinking, product judgment, writing, mentoring, and long-term public reputation.",
  },
  {
    name: "Systems of Love",
    asset: "A framework asset for understanding human alignment, conduct, conflict, and relational systems.",
  },
  {
    name: "Digital Trust",
    asset: "A growing body of product patterns around credibility, verification, identity, and user confidence.",
  },
  {
    name: "Project Cyrus",
    asset: "AI and mobility exploration that extends the engine's technical range and product imagination.",
  },
  {
    name: "PSI",
    asset: "A learning and capability-building asset for structured mentorship, education, and professional transformation.",
  },
];

const accumulationStack = [
  "Years of Learning",
  "Reusable Software",
  "Brand",
  "Audience",
  "Operational Knowledge",
  "Capital Allocation Thinking",
  "Higher Probability of Better Decisions",
];

const failureComparison = [
  {
    title: "Traditional View",
    items: ["Business fails", "Everything disappears"],
  },
  {
    title: "My Engine",
    items: [
      "Business",
      "Technology",
      "Knowledge",
      "Customers",
      "Brand",
      "Reputation",
      "Next Venture Starts Ahead",
    ],
  },
];

const compoundingEngine = [
  "Capital",
  "Companies",
  "Cash Flow",
  "Knowledge",
  "Better Companies",
  "Larger Capital",
  "Repeat",
];

const sectionLinks = [
  ["Why", "#why"],
  ["Operate", "#operate"],
  ["Assets", "#assets"],
  ["Moat", "#replicate"],
  ["Failure", "#failure"],
  ["Engine", "#compounding-engine"],
];

function FlowStack({ items }: { items: string[] }) {
  return (
    <div className="diligence-flow-stack">
      {items.map((item, index) => (
        <div key={item} className="diligence-flow-row">
          <span>{item}</span>
          {index < items.length - 1 && <ArrowDown size={16} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export default function WhyWilliamsPage() {
  return (
    <>
      <Navbar />
      <main className="diligence-page">
        <div className="diligence-progress" aria-label="Page sections">
          {sectionLinks.map(([label, href], index) => (
            <a key={href} href={href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </a>
          ))}
        </div>

        <section className="diligence-hero">
          <div className="container diligence-hero-grid">
            <MotionReveal className="diligence-hero-copy">
              <p className="eyebrow">Due Diligence / Operator</p>
              <h1>
                I don&apos;t build companies. I build systems that repeatedly
                create companies.
              </h1>
              <div className="diligence-hero-subcopy">
                <p>
                  Most founders ask, &quot;How do I build one successful
                  company?&quot;
                </p>
                <p>I became obsessed with a different question.</p>
                <p>
                  &quot;What kind of system makes successful companies more
                  likely?&quot;
                </p>
                <p>This page explains why.</p>
              </div>
            </MotionReveal>

            <MotionReveal className="diligence-operator-panel" delay={0.08}>
              <div className="diligence-portrait">
                <Image
                  src="/images/C208(1).jpg"
                  alt="Portrait of Williams Praise"
                  width={1080}
                  height={1920}
                  sizes="(max-width: 1050px) min(100vw, 460px), 330px"
                  priority
                />
              </div>
              <div className="diligence-operator-copy">
                <p className="panel-kicker">Principal operator</p>
                <h2>Williams Praise</h2>
                <p>
                  Founder-operator, product builder, and systems thinker
                  accumulating software, frameworks, trust, and operating
                  judgment into a reusable venture engine.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container diligence-question-grid">
            <MotionReveal>
              <p className="eyebrow">Question 01</p>
              <h2>Why am I building this?</h2>
            </MotionReveal>
            <MotionReveal className="diligence-story" delay={0.08}>
              <p className="diligence-lead">I kept discovering the same pattern.</p>
              <div className="diligence-timeline">
                {originTimeline.map((item, index) => (
                  <article key={item.label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="operate">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 02</p>
              <h2>Why should I operate this engine?</h2>
            </MotionReveal>
            <div className="diligence-capability-grid">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <MotionReveal key={capability.title} delay={index * 0.04}>
                    <details className="diligence-expand-card">
                      <summary>
                        <span className="capability-icon">
                          <Icon size={21} />
                        </span>
                        <strong>{capability.title}</strong>
                        <small>{capability.summary}</small>
                      </summary>
                      <p>{capability.detail}</p>
                    </details>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="assets">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 03</p>
              <h2>What have I already built?</h2>
              <p>
                Not a resume. The engine&apos;s existing assets - the parts that can
                be reused when the next company begins.
              </p>
            </MotionReveal>
            <MotionReveal className="diligence-asset-track" delay={0.08}>
              {existingAssets.map((asset, index) => (
                <article key={asset.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{asset.name}</h3>
                  <p>{asset.asset}</p>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="replicate">
          <div className="container diligence-diagram-grid">
            <MotionReveal>
              <p className="eyebrow">Question 04</p>
              <h2>Why is this difficult to replicate?</h2>
              <p>
                The point is not that I am unique. The point is that the engine
                already has accumulated assets.
              </p>
            </MotionReveal>
            <MotionReveal className="diligence-system-diagram" delay={0.08}>
              <div className="diligence-orbit">
                <Layers3 size={34} />
                <strong>Accumulated Assets</strong>
                <p>Learning converted into reusable advantage.</p>
              </div>
              <FlowStack items={accumulationStack} />
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="failure">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 05</p>
              <h2>What happens if one company fails?</h2>
              <p>
                A single company can end. The engine is designed so useful
                assets remain.
              </p>
            </MotionReveal>
            <div className="diligence-comparison">
              {failureComparison.map((column, index) => (
                <MotionReveal key={column.title} delay={index * 0.06}>
                  <article className={index === 1 ? "engine-view" : undefined}>
                    <div className="diligence-comparison-top">
                      {index === 1 ? <ShieldCheck size={22} /> : <CircleDot size={22} />}
                      <h3>{column.title}</h3>
                    </div>
                    <FlowStack items={column.items} />
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="compounding-engine">
          <div className="container diligence-question-grid">
            <MotionReveal>
              <p className="eyebrow">Question 06</p>
              <h2>What am I ultimately trying to build?</h2>
              <p>
                Not one isolated company. A disciplined loop where capital,
                software, knowledge, and operating judgment keep improving the
                next decision.
              </p>
            </MotionReveal>
            <MotionReveal className="diligence-loop" delay={0.08}>
              <p className="panel-kicker">The Compounding Engine</p>
              <div className="diligence-loop-ring">
                {compoundingEngine.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section diligence-final">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Long-Term Capital</p>
              <h2>
                I&apos;m not looking for everyone. I&apos;m looking for long-term
                capital partners who think in decades instead of transactions.
              </h2>
              <div className="hero-actions">
                <ButtonLink href="/capital-philosophy" variant="secondary">
                  Request the Investment Memorandum
                </ButtonLink>
                <a className="text-link" href="mailto:williamspraise01@gmail.com">
                  Start a quiet conversation
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
