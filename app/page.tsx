import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  ShieldCheck,
  Sparkles,
  Quote,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AudienceModalPrompt from "@/components/AudienceModalPrompt";
import ButtonLink from "@/components/ButtonLink";
import { FlowDiagram, StatusBadge } from "@/components/CapitalJourney";
import CTASection from "@/components/CTASection";
import EssayCard from "@/components/EssayCard";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import SystemsLetter from "@/components/SystemsLetter";
import VentureCard from "@/components/VentureCard";
import {
  capitalEngineSteps,
  homepageCapitalModel,
  proofStats,
  riskSystem,
  shoppergetitAllocation,
} from "@/data/capital";
import { essays } from "@/data/essays";
import { ventures } from "@/data/ventures";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Praise - Capital Allocator, Operator & Systems Thinker",
  description:
    "Williams Praise raises and allocates capital into productive businesses he can help build and operate, including Shoppergetit urban retail infrastructure.",
  path: "/",
  keywords: [
    "Williams Praise",
    "Capital Allocator Nigeria",
    "Founder Operator",
    "Shoppergetit Founder",
    "African capital allocator",
    "Mentorship and Leadership",
    "Urban Retail Infrastructure",
  ],
});

const capabilityCards = [
  {
    title: "Product Strategy",
    text:
      "Clarify the customer problem, the operating constraint, and the product path that turns capital into useful work.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technical Execution",
    text:
      "Move from thesis to working systems through hands-on product, technology, workflow, and implementation discipline.",
    icon: ShieldCheck,
  },
  {
    title: "Systems Thinking",
    text:
      "Study how product, technology, capital, human behavior, and operations influence one another inside a live system.",
    icon: Brain,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <AudienceModalPrompt />
      <main className="overflow-hidden">
        {/* EDITORIAL HERO SECTION */}
        <section className="home-capital-hero relative border-b border-[var(--line)] bg-[var(--background)]">
          <div className="container home-capital-hero-grid py-12 md:py-20 lg:py-24">
            <MotionReveal className="home-capital-copy flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[var(--accent)]"></span>
                <p className="eyebrow m-0 text-[0.78rem] tracking-[0.2em] font-medium text-[var(--accent)]">
                  CAPITAL ALLOCATOR + OPERATOR
                </p>
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[1.05] tracking-tight text-[var(--foreground)] mb-6">
                Williams Praise. <br />
                Capital Allocator + Operator. <br />
                <span className="text-[var(--accent)] italic">Systems Thinker for Human Problems.</span>
              </h1>

              <p className="hero-subtitle text-[clamp(1.1rem,1.8vw,1.35rem)] leading-relaxed text-[var(--muted)] mb-8 font-serif">
                I raise and allocate capital into productive businesses I can help build
                and operate.
              </p>

              <div className="border-l-2 border-[var(--accent)] pl-6 py-2 mb-8 bg-[var(--background-contrast)]/30 rounded-r-lg">
                <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed m-0 italic">
                  &ldquo;The model combines capital allocation with product, technology,
                  human behaviour, systems thinking, and direct operating involvement.&rdquo;
                </p>
              </div>

              {/* HUMANIZED PROOF STRIP */}
              <div className="hero-proof-strip flex flex-wrap gap-x-8 gap-y-3 py-4 border-y border-[var(--line)] mb-8 max-w-xl">
                <div className="flex flex-col">
                  <span className="text-[0.68rem] tracking-wider text-[var(--soft)] uppercase">ALLOCATION 001</span>
                  <strong className="text-[1rem] text-[var(--foreground)]">Shoppergetit</strong>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.68rem] tracking-wider text-[var(--soft)] uppercase">ACTIVE DEMAND</span>
                  <strong className="text-[1rem] text-[var(--foreground)]">300+ Signups</strong>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.68rem] tracking-wider text-[var(--soft)] uppercase">COMPLETED LOOPS</span>
                  <strong className="text-[1rem] text-[var(--foreground)]">100+ Orders</strong>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.68rem] tracking-wider text-[var(--soft)] uppercase">GLOBAL GUIDANCE</span>
                  <strong className="text-[1rem] text-[var(--foreground)]">900+ Mentored</strong>
                </div>
              </div>

              <div className="hero-actions flex flex-wrap gap-4">
                <ButtonLink href="/capital/engine">
                  Explore the Capital Engine <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink href="/capital/allocation-record" variant="secondary">
                  Inspect Allocation Record
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="quiet">
                  View Product Portfolios
                </ButtonLink>
              </div>
            </MotionReveal>

            {/* HIGH-END EDITORIAL PORTRAIT PANEL */}
            <MotionReveal className="home-proof-panel relative" delay={0.08}>
              <div className="proof-portrait relative overflow-hidden rounded-t-xl border border-[var(--panel-line)]">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)]/70 to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/C208(1).jpg"
                  alt="Portrait of Williams Praise - Capital Allocator & Operator"
                  width={1080}
                  height={1920}
                  className="w-full object-cover aspect-[4/5] scale-100 hover:scale-[1.02] transition-transform duration-700"
                  priority
                />

                {/* FLOATING DESIGNER BADGE */}
                <div className="absolute bottom-4 left-4 z-20 bg-[var(--background)]/90 backdrop-blur-md border border-[var(--line)] rounded-lg p-3 max-w-[280px] shadow-lg">
                  <span className="text-[0.68rem] text-[var(--accent)] font-bold tracking-wider uppercase block mb-1">
                    OPERATOR PRINCIPLE
                  </span>
                  <p className="text-[0.78rem] text-[var(--foreground)] m-0 leading-snug">
                    Designed, operating, and leading with human intuition and robust engineering.
                  </p>
                </div>
              </div>
              <div className="proof-panel-copy bg-[var(--panel)] p-8 rounded-b-xl border-x border-b border-[var(--panel-line)]">
                <p className="panel-kicker text-[var(--accent)] font-bold tracking-[0.15em] text-[0.7rem] uppercase mb-2">
                  THE OPERATIONAL ADVANTAGE
                </p>
                <h3 className="font-serif text-[1.4rem] text-white leading-snug mb-3">
                  Capital judgment with direct operating capability.
                </h3>
                <p className="text-[#a9b8bd] text-[0.91rem] leading-relaxed">
                  Williams can inspect and influence product, technology, customer
                  behaviour, and operations directly instead of depending only on
                  distant reporting layers.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* CAPITAL JOURNEY */}
        <section className="section bg-[var(--background-contrast)] border-b border-[var(--line)]">
          <div className="container home-model-grid">
            <MotionReveal className="flex flex-col justify-center">
              <SectionHeader
                eyebrow="The Capital Journey"
                title="Raise capital, allocate it, build with it, and let evidence govern the next decision."
                description="The Williams model is simple first: raise capital, allocate into productive ventures, build and operate, create revenue and evidence, then grow, recover, stop, or reallocate from a stronger position."
              />
              <div className="flex flex-wrap gap-4 mt-4">
                <ButtonLink href="/capital">Access the Capital Hub</ButtonLink>
                <ButtonLink href="/capital/why-williams" variant="secondary">
                  Why Allocator-Operator?
                </ButtonLink>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <div className="panel-flow bg-[var(--panel)] rounded-xl border border-[var(--panel-line)] p-8 shadow-xl">
                <h3 className="font-serif text-white text-[1.28rem] mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-[var(--accent)]" /> Williams Allocation Engine
                </h3>
                <FlowDiagram items={homepageCapitalModel} className="panel-flow" />
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* EXECUTED ASSET SHOWCASE: SHOPPERGETIT */}
        <section className="section bg-[var(--background)]">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Active Operations"
                title="Shoppergetit: Urban retail infrastructure for predictable distribution."
                description="Shoppergetit connects local retailers, customer demand, and fulfilment through one intelligent commerce system."
              />
            </MotionReveal>

            <div className="allocation-proof-grid gap-8 mt-12">
              <MotionReveal className="allocation-proof-card flex flex-col justify-between">
                <div>
                  <div className="proof-card-top flex justify-between items-center mb-6">
                    <StatusBadge status={shoppergetitAllocation.status} />
                    <span className="font-mono text-[0.74rem] text-[#8fa0ab]">{shoppergetitAllocation.code}</span>
                  </div>
                  <FlowDiagram items={shoppergetitAllocation.model} />
                  <p className="mt-6 text-[#a9b8bd] text-[0.93rem] leading-relaxed">
                    Cities already have retailers, inventory, and demand. What is
                    broken is how fragmented those pieces are. More customers
                    shouldn&apos;t require more warehouses and more people.
                  </p>
                </div>
                <div className="mt-8 border-t border-[var(--panel-line)] pt-4">
                  <Link className="text-link text-[var(--accent)] hover:text-[var(--accent-bright)] inline-flex items-center gap-2" href="/capital/allocation-record">
                    Inspect Complete Allocation Records
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </MotionReveal>

              <div className="proof-metric-grid">
                {proofStats.map((stat, index) => (
                  <MotionReveal key={stat.label} delay={index * 0.04}>
                    <article className="proof-metric hover:border-[var(--accent)] transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-[0.7rem] text-[var(--accent)]">METRIC {String(index + 1).padStart(2, "0")}</span>
                        <StatusBadge status={stat.status} />
                      </div>
                      <strong className="font-serif text-[2.2rem] text-[var(--foreground)] tracking-tight">{stat.value}</strong>
                      <span className="text-[var(--muted)] text-[0.88rem] leading-snug">{stat.label}</span>
                    </article>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MODEL COMPARISON */}
        <section className="section bg-[var(--background-contrast)] border-y border-[var(--line)]">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Why This Model Is Different"
                title="Williams doesn't only allocate the capital. He can enter the system it is building."
                description="The difference is proximity. The Williams model gives him the ability to inspect and influence product, technology, customer behaviour, and operations directly."
              />
            </MotionReveal>
            <div className="diligence-moat-comparison mt-12">
              <MotionReveal>
                <article className="h-full bg-[var(--background-raised)] border border-[var(--line)] p-8 rounded-xl">
                  <span className="text-[0.68rem] tracking-wider text-[var(--soft)] uppercase block mb-3">CONVENTIONAL DISTANCE</span>
                  <h3 className="font-serif text-[1.2rem] text-[var(--foreground)] mb-6">Traditional Allocation</h3>
                  <FlowDiagram items={conventionalAllocationFlow} />
                  <p className="mt-6 text-[0.88rem] text-[var(--muted)] leading-relaxed">
                    Traditional allocators may depend more heavily on external
                    operating teams, reporting layers, and delayed evidence before
                    making the next capital decision.
                  </p>
                </article>
              </MotionReveal>
              <MotionReveal delay={0.06}>
                <article className="engine-view h-full bg-[var(--panel)] border border-[var(--panel-line)] p-8 rounded-xl text-white">
                  <span className="text-[0.68rem] tracking-wider text-[var(--accent)] uppercase block mb-3">WILLIAMS MODEL</span>
                  <h3 className="font-serif text-[1.2rem] text-white mb-6">Williams Praise System</h3>
                  <FlowDiagram items={williamsAllocationFlow} />
                  <p className="mt-6 text-[0.88rem] text-[#a9b8bd] leading-relaxed">
                    Capital flows through an allocator-operator who can build,
                    diagnose, intervene, observe direct evidence, and use that
                    evidence for the next capital decision.
                  </p>
                </article>
              </MotionReveal>
            </div>
            <div className="mt-12 text-center">
              <ButtonLink href="/capital/why-williams" variant="secondary">
                Learn why proximity matters
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL PATHWAY */}
        <section className="section bg-[var(--background)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <MotionReveal className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[1px] w-8 bg-[var(--accent)]"></span>
                  <p className="eyebrow m-0 text-[0.78rem] tracking-[0.2em] font-medium text-[var(--accent)]">
                    WORK WITH WILLIAMS
                  </p>
                </div>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-[var(--foreground)] mb-6">
                  Product, technical, UX, and founder operating work.
                </h2>
                <p className="text-[var(--muted)] text-[1.02rem] leading-relaxed mb-6">
                  Professional work remains a secondary pathway beneath the
                  Capital Allocator + Operator positioning. It is one way to
                  engage Williams&apos; product, technical, UX, and operating capability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
                  <div className="border border-[var(--line)] rounded-lg p-5 bg-[var(--background-raised)]">
                    <TrendingUp size={24} className="text-[var(--accent)] mb-3" />
                    <h4 className="font-serif text-[1.08rem] font-bold mb-2">900+ Mentored</h4>
                    <p className="text-[0.84rem] text-[var(--muted)] leading-relaxed m-0">
                      Guided product engineers, UX specialists, founders, and
                      builders through product, UX, and execution questions.
                    </p>
                  </div>
                  <div className="border border-[var(--line)] rounded-lg p-5 bg-[var(--background-raised)]">
                    <UserCheck size={24} className="text-[var(--accent)] mb-3" />
                    <h4 className="font-serif text-[1.08rem] font-bold mb-2">Operating Capability</h4>
                    <p className="text-[0.84rem] text-[var(--muted)] leading-relaxed m-0">
                      Product strategy, technical execution, UX and human behaviour,
                      founder operations, systems thinking, and capital discipline.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <ButtonLink href="/contact" variant="primary">Work with Williams</ButtonLink>
                </div>
              </MotionReveal>
              <MotionReveal delay={0.08} className="relative flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent rounded-2xl pointer-events-none" />
                <div className="bg-[var(--background-raised)] border border-[var(--line)] rounded-2xl p-8 max-w-lg shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-24 w-24 bg-[var(--accent-soft)] rounded-full -mr-8 -mt-8 opacity-50 pointer-events-none" />
                  <Quote size={40} className="text-[var(--accent)]/20 mb-4" />
                  <blockquote className="font-serif text-[1.15rem] leading-relaxed text-[var(--foreground)] mb-6 italic">
                    &ldquo;The allocator and operator share one strategic brain. Each
                    serious build should make the next one less blind.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-mono text-[0.82rem] font-bold">
                      WP
                    </div>
                    <div>
                      <strong className="text-[0.92rem] text-[var(--foreground)] block">Williams Praise</strong>
                      <span className="text-[0.74rem] text-[var(--muted)] block">Capital Allocator + Operator</span>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* SYSTEM CAPABILITIES SECTION */}
        <section className="section bg-[var(--background-contrast)] border-y border-[var(--line)]">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="The Capabilities"
                title="Operating capability behind the capital thesis."
                description="The work is grounded in product strategy, technical execution, UX and human behaviour, founder operations, systems thinking, and capital allocation discipline."
              />
            </MotionReveal>
            <div className="capability-grid mt-12">
              {capabilityCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <MotionReveal key={card.title} delay={index * 0.04}>
                    <article className="capability-card group hover:border-[var(--accent)] hover:shadow-md transition-all duration-300">
                      <span className="capability-icon bg-[var(--accent-soft)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                        <Icon size={21} />
                      </span>
                      <h3 className="font-serif text-[1.18rem] text-[var(--foreground)] mb-3">{card.title}</h3>
                      <p className="text-[var(--muted)] text-[0.9rem] leading-relaxed">{card.text}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SYSTEM ENGINES PREVIEW */}
        <section className="section bg-[var(--background)]">
          <div className="container engine-preview-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="The Capital Engine"
                title="Preserve, deploy, measure, decide, return, repeat."
                description="The operating cycle protects liquidity, watches evidence, and makes the next capital decision from what the build actually reveals."
              />
            </MotionReveal>
            <MotionReveal className="engine-step-grid mt-12" delay={0.08}>
              {capitalEngineSteps.map((step, index) => (
                <article key={step.step} className="hover:shadow-sm border border-[var(--line)] rounded-xl p-6 bg-[var(--background-raised)]">
                  <span className="font-mono text-[var(--accent)] text-[0.8rem] block mb-2">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-[1.12rem] mb-2">{step.step}</h3>
                  <p className="text-[var(--muted)] text-[0.88rem] leading-relaxed m-0">{step.text}</p>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        {/* VENTURES COMPACT LIST */}
        <section className="section bg-[var(--background-contrast)] border-y border-[var(--line)]">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="The Operating Portfolio"
                title="Ventures and product work under active stewardship."
                description="Operating systems, commercial infrastructure, and product work that show how the capital thesis becomes practical evidence."
              />
            </MotionReveal>
            <div className="venture-grid compact mt-12">
              {ventures.slice(0, 4).map((venture, index) => (
                <MotionReveal key={venture.title} delay={index * 0.05}>
                  <VentureCard venture={venture} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* RISK & STEWARDSHIP */}
        <section className="section bg-[var(--background)]">
          <div className="container risk-preview-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Stewardship & Diligence"
                title="Knowing when to stop is part of allocation discipline."
                description="Capital stewardship protects principal, keeps visibility, and uses evidence gates to decide whether to increase, hold, redirect, or stop."
              />
              <div className="mt-4">
                <ButtonLink href="/capital/stewardship" variant="secondary">
                  Review Complete Diligence & Stewardship
                </ButtonLink>
              </div>
            </MotionReveal>
            <MotionReveal className="risk-card-grid mt-12" delay={0.08}>
              {riskSystem.map((item) => (
                <article key={item.risk} className="border border-[var(--line)] rounded-xl p-6 bg-[var(--background-raised)]">
                  <ShieldCheck size={21} className="text-[var(--accent)] mb-3" />
                  <h3 className="font-serif text-[1.12rem] mb-2">{item.risk}</h3>
                  <p className="text-[var(--muted)] text-[0.88rem] leading-relaxed m-0">{item.response}</p>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        {/* CALL TO ACTIONS */}
        <CTASection
          eyebrow="The Capital Hub"
          title="Explore the capital framework."
          description="Access the allocation philosophy, capital engine, allocation record, Why Williams, stewardship details, and partnership pathway."
          primaryHref="/capital"
          primaryLabel="Start the Capital Journey"
          secondaryHref="/capital/partnership"
          secondaryLabel="Initiate Capital Conversations"
        />

        {/* ESSAYS & INTELLECTUAL OUTPUT */}
        <section className="section bg-[var(--background)] border-b border-[var(--line)]">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Intellectual Signature"
                title="The ideas that drive the operator"
                description="Essays examining social systems, economic models, human behaviour, and execution."
              />
            </MotionReveal>
            <div className="essay-grid mt-12">
              {essays.slice(0, 3).map((essay, index) => (
                <MotionReveal key={essay.title} delay={index * 0.04}>
                  <EssayCard essay={essay} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Operating Capability"
          title="Product portfolio"
          description="Review product work, UX systems, and 0-to-1 operating deployments built or led by Williams."
          primaryHref="/portfolio"
          primaryLabel="View Product Portfolios"
          secondaryHref="/contact"
          secondaryLabel="Get in Touch Direct"
        />

        <SystemsLetter />
      </main>
      <Footer />
    </>
  );
}

const conventionalAllocationFlow = [
  "Capital Base",
  "External Operating Team",
  "Reporting Layer",
  "Delayed Evidence",
  "Next Capital Decision",
];

const williamsAllocationFlow = [
  "Capital",
  "Williams - Allocator + Operator",
  "Build / Diagnose / Intervene",
  "Operating Venture",
  "Direct Evidence",
  "Next Capital Decision",
];
