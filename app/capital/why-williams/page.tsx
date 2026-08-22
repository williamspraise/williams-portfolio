import {
  ArrowRight,
  Brain,
  Code2,
  Eye,
  Repeat2,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import {
  CapitalJourneyNav,
  FlowDiagram,
  NextCapitalStep,
} from "@/components/CapitalJourney";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { capabilityStack } from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Williams Praise | Capital Allocator & Operator",
  description:
    "Why Williams Praise is positioned as a capital allocator and operator: one strategic system combining capital allocation, direct operation, product execution, systems thinking, and Shoppergetit evidence.",
  path: "/capital/why-williams",
  keywords: [
    "Why Williams Praise",
    "Capital Allocator",
    "Founder Operator",
    "Technical Product Leader",
    "African founder operator",
  ],
});

const modelComparison = [
  {
    title: "Traditional allocator",
    flow: ["Capital", "External operators"],
    text:
      "The allocator often depends on reporting layers and external execution to understand what is happening inside the asset.",
  },
  {
    title: "Traditional founder",
    flow: ["External capital", "One company"],
    text:
      "Knowledge, infrastructure, and operating leverage can remain concentrated inside one venture.",
  },
  {
    title: "Williams model",
    flow: [
      "Capital",
      "Allocator + Operator",
      "Productive systems",
      "Cash + Assets + Intelligence + Distribution + Leverage",
      "Reallocation",
    ],
    text:
      "Allocation judgment and operating execution live inside one compounding system.",
  },
];

const moatLayers = [
  {
    title: "Direct operating visibility",
    text:
      "Williams can inspect what is happening inside product, technology, UX, customer behavior, and operations.",
    icon: Eye,
  },
  {
    title: "Faster capital feedback",
    text:
      "Operating evidence can influence allocation decisions without being filtered through several external management layers.",
    icon: Repeat2,
  },
  {
    title: "Intervention capability",
    text:
      "When resources stop producing sufficient progress, Williams can change the execution mechanism and enter the work directly.",
    icon: Code2,
  },
  {
    title: "Systems-level judgment",
    text:
      "Williams sees ventures through the relationships between behavior, trust, product, infrastructure, distribution, operations, economics, and capital.",
    icon: Brain,
  },
];

const accumulatedAssets = [
  "Shoppergetit urban retail infrastructure",
  "Marketplace operating knowledge",
  "Reusable software judgment",
  "Audience and trust",
  "Systems frameworks",
  "Customer and retailer insight",
  "Product and technical fluency",
  "Commercial relationships",
];

const optionalityCards = [
  {
    title: "Cash Generated",
    text: "Operating cash created by productive businesses.",
    icon: Repeat2,
  },
  {
    title: "Cash Preserved",
    text:
      "Capital not exposed because weak allocations were stopped, delayed, or rejected.",
    icon: ShieldCheck,
  },
  {
    title: "Reusable Assets",
    text:
      "Technology, distribution, systems, trust, data, relationships, audience, and operating knowledge that can benefit future ventures.",
    icon: Code2,
  },
  {
    title: "Portfolio Optionality",
    text:
      "Value retained inside operating assets may create future financing, partnership, strategic transaction, or selective monetization options.",
    icon: Eye,
  },
];

const strategicThread = [
  "Capital",
  "Williams - Allocator + Operator",
  "Productive Systems",
  "Cash + Assets + Intelligence + Distribution + Leverage",
  "Optionality",
  "Reallocation",
];

const velocityFlow = [
  "Evidence-led allocation",
  "Operating asset",
  "Cash + signal + infrastructure",
  "Stronger capital base",
  "Next productive cycle",
];

export default function WhyWilliamsCapitalPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/why-williams" />
        <section className="diligence-hero">
          <div className="container diligence-hero-grid">
            <MotionReveal className="diligence-hero-copy">
              <p className="eyebrow">04 - Why Williams</p>
              <h1>The allocator and operator share one strategic brain.</h1>
              <p className="diligence-hero-reveal">
                Williams is not the economic product. He is the reason the
                Engine may possess an operating advantage: capital judgment,
                product strategy, technical execution, and operating
                intervention share one strategic brain.
              </p>
              <div className="trust-row hq-chip-row">
                {capabilityStack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
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
                <p className="panel-kicker">Williams Praise</p>
                <h2>Capital Allocator + Operator</h2>
                <p>
                  Founder-operator, product builder, technical product leader,
                  systems thinker, and Shoppergetit founder.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Model Contrast"
                title="One capital system. Direct operating intelligence."
                description="The Williams model combines allocation and operation so evidence from the work can shape the next capital decision. This does not eliminate agency risk; it reduces certain kinds of distance and makes stewardship more important."
              />
            </MotionReveal>
            <div className="diligence-moat-comparison">
              {modelComparison.map((model, index) => (
                <MotionReveal key={model.title} delay={index * 0.05}>
                  <article className={index === 2 ? "engine-view" : undefined}>
                    <h3>{model.title}</h3>
                    <FlowDiagram items={model.flow} />
                    <p>{model.text}</p>
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
                eyebrow="Operating Moat"
                title="The advantage compounds through evidence, assets, and intervention."
                description="Williams' product, technical, UX, and business fluency matter because they feed a larger allocator/operator system."
              />
            </MotionReveal>
            <div className="risk-card-grid">
              {moatLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <MotionReveal key={layer.title} delay={index * 0.04}>
                    <article>
                      <Icon size={21} />
                      <h3>{layer.title}</h3>
                      <p>{layer.text}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Strategic Thread</p>
              <h2>The moat sits in the relationship between capital, operator, portfolio, and accumulated assets.</h2>
              <p>
                Most allocators do not operate the assets they fund. Most
                operators do not control a recurring allocation system. Williams
                is building the strategic thread between both.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={strategicThread} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Accumulated Assets"
                title="Each serious build should make the next one less blind."
                description="The starting position improves when a venture leaves behind technology, trust, relationships, insight, and operating knowledge."
              />
            </MotionReveal>
            <MotionReveal className="diligence-layer-tags" delay={0.08}>
              {accumulatedAssets.map((asset) => (
                <span key={asset}>{asset}</span>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Control + Optionality"
                title="A productive cycle can create more than one form of value."
                description="Direct control of operating systems gives Williams more ways to protect, reuse, compound, or selectively unlock value when a cycle produces something real."
              />
            </MotionReveal>
            <div className="risk-card-grid">
              {optionalityCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <MotionReveal key={card.title} delay={index * 0.04}>
                    <article>
                      <Icon size={21} />
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
            <MotionReveal className="capital-disclosure-panel" delay={0.12}>
              <ShieldCheck size={28} />
              <p>
                Portfolio value is not cash. But genuine value inside a
                productive asset can create strategic options that did not
                exist before the allocation.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Capital Velocity</p>
              <h2>The larger opportunity is recurring productive cycles.</h2>
              <p>
                The purpose is not simply to make one successful investment. It
                is to improve how efficiently a capital base can produce assets,
                signal, cash flow, intelligence, and the confidence to allocate
                again from a stronger position.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <Repeat2 size={28} />
              <FlowDiagram items={velocityFlow} />
              <p>
                The idea can be copied. The accumulated system cannot be copied
                overnight.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Stewardship Transition</p>
              <h2>Closer operating control requires clearer capital discipline.</h2>
              <p>
                The closer allocation and operation become, the more important
                clear boundaries, reporting, decision rights, and partner
                visibility become. That discipline is what the next chapter
                addresses.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <ShieldCheck size={28} />
              <p>
                Williams&apos; advantage is strongest when direct operating
                intelligence is paired with transparent stewardship.
              </p>
              <ArrowRight size={18} />
            </MotionReveal>
          </div>
        </section>

        <div className="container">
          <NextCapitalStep current="/capital/why-williams" />
        </div>
      </main>
      <Footer />
    </>
  );
}
