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
import Footer from "@/components/Footer";
import InvestmentMemoRequestModal from "@/components/InvestmentMemoRequestModal";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Why Williams - Capital Allocation Engine Due Diligence",
  description:
    "A due diligence page explaining why Williams Praise is positioned to operate a compounding capital allocation engine.",
  keywords: [
    "Why Williams",
    "Williams Praise capital allocator",
    "Williams Praise capital allocation engine",
    "Capital Allocator",
    "Founder-Operator",
    "Product Builder",
    "Systems Thinker",
    "Williams Ecosystem",
    "investment memorandum Williams Praise",
    "capital partner Williams Praise",
  ],
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
      "A single company can be fragile. A capital allocation engine preserves learning, code, judgment, customer insight, and reputation so the next deployment starts ahead.",
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

const optimisationPrinciples = [
  {
    label: "01",
    title: "Grow the Capital Base",
    text: "A successful deployment should aim to return more productive capital than entered it.",
  },
  {
    label: "02",
    title: "Increase Productive Capital Velocity",
    text: "The question is not only what return the capital earned. It is also how efficiently that capital can complete a productive cycle and become available for the next evidence-led deployment.",
  },
  {
    label: "03",
    title: "Make Each Cycle Strengthen the Next",
    text: "Every successful cycle should leave behind evidence, data, distribution, operating knowledge, reusable assets, relationships, and reputation. The next cycle should not begin from zero.",
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
  "Relationships",
  "Capital Allocation Thinking",
];

const moatComparison = [
  {
    title: "Most Allocators",
    points: [
      ["Control", "Capital"],
      ["Depend on", "Other operators"],
      ["Build value through", "Portfolio selection"],
      [
        "Limitation",
        "They do not directly control execution across the portfolio.",
      ],
    ],
  },
  {
    title: "Most Founders",
    points: [
      ["Control", "One operating company"],
      ["Depend on", "Outside capital allocators"],
      ["Build value through", "Company execution"],
      [
        "Limitation",
        "Their assets and learning often remain trapped inside one company.",
      ],
    ],
  },
  {
    title: "The Williams Engine",
    points: [
      ["Connects", "Allocation + Operation + Portfolio"],
      ["Builds value through", "Deployment, execution, signal, leverage"],
      ["Compounds", "Reusable assets across the Williams-owned ecosystem"],
      ["Advantage", "The allocator and operator share one strategic brain."],
    ],
  },
];

const strategicThread = [
  "Capital",
  "Williams - Allocator + Operator",
  "Portfolio - Shoppergetit, Williams Trust Engine, PSI, Future Ventures",
  "Cash + Assets + Signal + Leverage",
  "Back to the Engine",
];

const moatLayers = [
  {
    title: "Structural Control",
    text: "The allocator and operator share one strategic brain across the Williams-owned ecosystem.",
  },
  {
    title: "Accumulated Assets",
    text: "Years of learning, reusable software, brand, audience, operational knowledge, relationships and allocation thinking already exist.",
  },
  {
    title: "Compounding Advantage",
    text: "Every meaningful deployment can add more evidence, infrastructure, distribution, reputation and strategic options.",
  },
];

const optionalityForms = [
  {
    title: "Cash Generated",
    text: "Cash produced through operations.",
  },
  {
    title: "Cash Preserved",
    text: "Capital not exposed to weak allocation.",
  },
  {
    title: "Reusable Assets Created",
    text: "Technology, audience, systems, data, knowledge and infrastructure that can serve future deployments.",
  },
  {
    title: "Portfolio Value Retained",
    text: "Value created inside portfolio companies that may create future strategic or financing optionality.",
  },
];

const failureComparison = [
  {
    title: "Weak Allocation",
    items: ["Preserve Cash", "Stop or Hold Weak Allocation"],
  },
  {
    title: "Recovery Discipline",
    items: [
      "Identify Reusable Assets",
      "Monetise or Redeploy Those Assets",
      "Reduce Capital Required for the Next Deployment",
      "Regenerate Cash Flow",
    ],
  },
];

const compoundingEngine = [
  "Capital",
  "Evidence-Led Allocation",
  "Productive Assets + Cash Flow",
  "Larger Capital Base",
  "Early Settlement When Capacity Is Achieved",
  "Stronger Engine",
  "Next Productive Cycle",
  "Repeat",
];

const sectionLinks = [
  ["Why", "#why"],
  ["Operate", "#operate"],
  ["Optimise", "#optimise"],
  ["Assets", "#assets"],
  ["Moat", "#replicate"],
  ["Failure", "#failure"],
  ["Engine", "#compounding-engine"],
  ["Partners", "#partners"],
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
              <p className="eyebrow">Why Williams?</p>
              <h1>
                I don&apos;t build companies in isolation.
              </h1>
              <p className="diligence-hero-reveal">
                I build systems designed to make capital, assets and operating
                knowledge more productive with every successful cycle.
              </p>
              <div className="diligence-hero-subcopy">
                <p>
                  Most founders ask, &quot;How do I build one successful
                  company?&quot;
                </p>
                <p>I became obsessed with a different question.</p>
                <p>
                  &quot;What kind of system makes capital, assets and operating
                  knowledge compound across multiple companies?&quot;
                </p>
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
                  accumulating software, frameworks, trust, capital allocation
                  discipline, and operating judgment into a reusable engine.
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

        <section className="section" id="optimise">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 03</p>
              <h2>What am I actually optimising for?</h2>
              <p>
                The Engine is not only about deploying capital. It is about
                making each completed cycle leave the system more capable than
                it was before.
              </p>
            </MotionReveal>
            <div className="diligence-optimise-grid">
              {optimisationPrinciples.map((principle, index) => (
                <MotionReveal key={principle.title} delay={index * 0.05}>
                  <article>
                    <span>{principle.label}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
            <MotionReveal className="diligence-cycle-line" delay={0.12}>
              <span>Grow</span>
              <ArrowDown size={16} aria-hidden="true" />
              <span>Accelerate</span>
              <ArrowDown size={16} aria-hidden="true" />
              <span>Strengthen</span>
              <ArrowDown size={16} aria-hidden="true" />
              <span>Repeat</span>
            </MotionReveal>
            <MotionReveal className="diligence-statement" delay={0.16}>
              The objective is not simply to generate one return. It is to build
              an Engine where successful cycles can grow the capital base,
              strengthen the system and create the opportunity for the next
              productive cycle.
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="assets">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 04</p>
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

        <section className="section" id="replicate">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 05</p>
              <h2>Why is this difficult to replicate?</h2>
              <p>
                The moat is not one company, one technology, or one idea. It is
                the strategic thread connecting the allocator, the operator, the
                Engine and the portfolio.
              </p>
              <p>
                Most allocators stand outside the companies they fund. Most
                founders stand inside one company but outside the allocation
                system. I operate across both.
              </p>
            </MotionReveal>

            <MotionReveal className="diligence-moat-keyline" delay={0.04}>
              <p>
                Most allocators control the capital but not the companies. Most
                founders control the companies but not the allocation system.
                Williams controls the strategic thread between both.
              </p>
            </MotionReveal>

            <div className="diligence-moat-comparison">
              {moatComparison.map((column, index) => (
                <MotionReveal key={column.title} delay={index * 0.05}>
                  <article className={index === 2 ? "engine-view" : undefined}>
                    <h3>{column.title}</h3>
                    <div className="diligence-moat-points">
                      {column.points.map(([label, value]) => (
                        <div key={`${column.title}-${label}`}>
                          <span>{label}</span>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </MotionReveal>
              ))}
            </div>

            <MotionReveal className="diligence-thread-panel" delay={0.1}>
              <div className="diligence-orbit">
                <Layers3 size={34} />
                <strong>Strategic Thread</strong>
                <p>Williams connects the Engine and the portfolio.</p>
              </div>
              <div>
                <p className="diligence-thread-statement">
                  Williams is the strategic thread between the Engine and the
                  portfolio.
                </p>
                <FlowStack items={strategicThread} />
              </div>
            </MotionReveal>

            <MotionReveal className="diligence-moat-layers" delay={0.14}>
              {moatLayers.map((layer, index) => (
                <article key={layer.title}>
                  <span>Moat Layer {String(index + 1).padStart(2, "0")}</span>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                  {index === 1 && (
                    <div className="diligence-layer-tags">
                      {accumulationStack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </MotionReveal>

            <MotionReveal className="diligence-statement" delay={0.18}>
              The Engine becomes harder to replicate not because the idea is
              secret, but because the starting position keeps moving.
            </MotionReveal>

            <MotionReveal className="diligence-optionality-panel" delay={0.2}>
              <div className="diligence-optionality-copy">
                <p className="eyebrow">Strategic Optionality</p>
                <h3>Control creates optionality.</h3>
                <p>
                  When the Engine creates value inside a Williams-controlled
                  portfolio company, that value does not exist in isolation from
                  the wider system.
                </p>
                <p>
                  Portfolio value is not cash. Its strategic importance is
                  that, when real value has been created, it may create
                  additional options for financing, partnership or selective
                  monetisation.
                </p>
              </div>
              <div className="diligence-optionality-grid">
                {optionalityForms.map((form) => (
                  <article key={form.title}>
                    <h4>{form.title}</h4>
                    <p>{form.text}</p>
                  </article>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal className="diligence-moat-final" delay={0.24}>
              <p>
                The Engine is difficult to replicate because its advantage does
                not sit in one company. It sits in the relationship between
                capital, operator, portfolio and accumulated assets.
              </p>
              <p>
                Most allocators do not operate the assets they fund. Most
                operators do not control a recurring allocation system. I am
                building the strategic thread between both.
              </p>
              <strong>
                The idea can be copied. The accumulated system cannot be copied
                overnight.
              </strong>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="failure">
          <div className="container">
            <MotionReveal className="diligence-section-head">
              <p className="eyebrow">Question 06</p>
              <h2>What happens if one company fails?</h2>
              <p>
                Recovery does not begin only after final repayment failure.
                It begins when an allocation stops justifying additional
                capital.
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
            <MotionReveal className="diligence-recovery-note" delay={0.14}>
              <p>
                An underperforming deployment should not automatically return
                the Engine to zero.
              </p>
              <p>
                I do not evaluate a deployment only by asking whether the
                company survived. I ask what cash was preserved, what assets
                were created, what can be monetised, what can be reused, and how
                much less the next deployment should cost because of what we now
                know.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="compounding-engine">
          <div className="container diligence-question-grid">
            <MotionReveal>
              <p className="eyebrow">Question 07</p>
              <h2>How many productive cycles can your capital complete?</h2>
              <p>
                Traditional investment conversations usually begin with one
                question: what return will I earn? The Engine introduces
                another: how efficiently can capital be deployed, returned as a
                larger base, and put to productive work again?
              </p>
              <p>
                Traditional instruments often optimise for combinations of
                preservation, predictability, income and appreciation. The
                Williams Capital Allocation Engine is designed around active
                allocation, productive deployment, capital recycling, recurring
                cycles, and the potential acceleration of net-worth growth.
              </p>
            </MotionReveal>
            <MotionReveal className="diligence-loop" delay={0.08}>
              <p className="panel-kicker">The Compounding Engine</p>
              <p className="diligence-loop-lead">
                The objective is not simply to improve return. It is to increase
                the productive velocity of capital across a series of successful
                cycles.
              </p>
              <div className="diligence-loop-ring">
                {compoundingEngine.map((item, index) => (
                  <div key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
              <div className="diligence-loop-note">
                <p>
                  The documented timeline provides the outer framework for a
                  round. But the Engine should not keep partner capital exposed
                  simply because time remains on the calendar.
                </p>
                <p>
                  If sufficient distributable repayment capacity is achieved
                  earlier, after obligations and prudent reserves, the Engine
                  can close the cycle earlier and create the opportunity for
                  another allocation round.
                </p>
                <p>
                  A larger capital base creates more capacity. A stronger Engine
                  creates better information. A successfully completed cycle
                  creates the opportunity to begin again from a stronger
                  position.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast diligence-final" id="partners">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Capital Partners</p>
              <h2>
                I&apos;m not looking for one-time investors.
              </h2>
              <div className="diligence-final-copy">
                <p>
                  The philosophy explains how I think. The memorandum explains
                  how the Engine operates. This page explains why I should be
                  trusted to operate it.
                </p>
                <p>
                  I&apos;m looking for capital partners who understand that wealth
                  is built not only by the return on one investment, but by what
                  happens when a larger capital base is successfully put to work
                  again.
                </p>
                <p>
                  Round 1 is the beginning. The ambition is a stronger Engine, a
                  larger capital base, better evidence and the opportunity for
                  increasingly productive cycles.
                </p>
                <p>
                  The return matters. But the larger opportunity is what a
                  recurring system of successful allocation can do to the
                  velocity at which net worth grows.
                </p>
                <p>
                  If you are evaluating the Engine seriously, request the
                  investment memorandum to review the allocation model,
                  operating routes, capital movement, risk architecture and
                  recovery policy.
                </p>
              </div>
              <div className="hero-actions">
                <InvestmentMemoRequestModal />
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
