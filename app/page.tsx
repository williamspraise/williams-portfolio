import {
  Activity,
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Clock,
  Eye,
  Gauge,
  Layers,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AudienceModalPrompt from "@/components/AudienceModalPrompt";
import ButtonLink from "@/components/ButtonLink";
import { FlowDiagram, StatusBadge } from "@/components/CapitalJourney";
import EssayCard from "@/components/EssayCard";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SystemsLetter from "@/components/SystemsLetter";
import {
  capitalEngineSteps,
  proofStats,
  riskSystem,
  shoppergetitAllocation,
} from "@/data/capital";
import { essays } from "@/data/essays";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Praise Emmanuel | Official Website & Identity Hub",
  description:
    "Official website of Williams Praise Emmanuel, publicly known as Williams Praise and also indexed as Williams Emmanuel Praise: systems thinker, founder-operator, product builder, capital allocator, and founder of Shoppergetit.",
  path: "/",
  keywords: [
    "Williams Praise Emmanuel",
    "Williams Emmanuel Praise",
    "Williams Praise official website",
    "Williams Praise identity",
    "Williams Praise",
    "Williams Capital Allocation Engine",
    "Wealth Acceleration",
    "Capital Velocity",
    "Capital Allocator Operator",
    "Founder Operator Nigeria",
    "Shoppergetit",
    "Urban Retail Infrastructure",
  ],
});

const wealthCycle = [
  "Capital",
  "Productive Cycle",
  "Return / Recovery",
  "Reallocation",
  "Repeat",
] as const;

const fourQuestions = [
  {
    title: "Return",
    question: "What economic value did the allocation create?",
    text:
      "Cash flow, repayment capacity, distributions, asset value, and realized outcomes remain the scorecard. Learning is useful, but it is not a substitute for return.",
    icon: TrendingUp,
  },
  {
    title: "Velocity",
    question: "How efficiently can successful capital work again?",
    text:
      "If sufficient settlement capacity exists and the agreed terms allow it, the Engine should not keep capital trapped simply because the outer period has not ended.",
    icon: Gauge,
  },
  {
    title: "Recovery",
    question: "What happens when the allocation underperforms?",
    text:
      "Recovery begins the moment an allocation stops justifying additional capital. Preserve cash, recover execution, recover assets, then consider documented recovery routes.",
    icon: ShieldCheck,
  },
  {
    title: "Optionality",
    question: "What if value exists but liquidity timing is wrong?",
    text:
      "A temporary liquidity mismatch should not automatically destroy real underlying value. Extensions, refinancing, strategic investment, or minority liquidity may be considered where appropriate.",
    icon: Layers,
  },
] as const;

const shoppergetitOperatingStory = [
  "Approximately NGN 10M was historically raised for early Shoppergetit development.",
  "The objective was to build and launch the commerce platform and supporting technical infrastructure.",
  "Execution problems exposed weak dependencies, forcing Williams to reassess the operating method.",
  "Williams changed technical resources, increased direct technical involvement, and used AI-assisted development to reduce dependency.",
  "The objective survived the method change: functioning commerce infrastructure launched into real Abuja market operation.",
] as const;

const shoppergetitFlow = [
  "Existing Retailers",
  "Retailer-Held Inventory",
  "Customer Demand",
  "Shoppergetit Coordination Layer",
  "Transactions + Fulfilment",
] as const;

const recoveryLadder = [
  "Preserve Cash",
  "Recover Execution",
  "Recover Assets",
  "Unlock Portfolio Liquidity",
  "Structured Recovery",
] as const;

const operatingAdvantages = [
  {
    title: "Operating Proximity",
    text:
      "Williams can inspect product, technology, customer behavior, and operations from inside the work instead of relying only on reporting layers.",
    icon: Eye,
  },
  {
    title: "Faster Evidence",
    text:
      "Customer, product, technical, and operating signals can reach capital decisions with less translation distance.",
    icon: Activity,
  },
  {
    title: "Intervention Capability",
    text:
      "When an execution mechanism weakens, Williams can change resources, workflows, systems, or enter implementation directly where appropriate.",
    icon: Wrench,
  },
  {
    title: "Allocation Intelligence",
    text:
      "Operating lessons from one venture can improve judgment in subsequent allocations without pretending they remove investment risk.",
    icon: Brain,
  },
] as const;

const ecosystemAssets = [
  "Software",
  "Distribution",
  "Customer relationships",
  "Retailer relationships",
  "Audience",
  "Trust",
  "Data",
  "Operating knowledge",
  "Market intelligence",
  "Commercial relationships",
] as const;

export default function Home() {
  return (
    <>
      <Navbar />
      <AudienceModalPrompt />
      <main className="overflow-hidden bg-[var(--background)]">
        <section className="relative border-b border-[var(--line)] py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <MotionReveal className="lg:col-span-7">
                <p className="eyebrow text-[var(--accent)]">
                  Wealth Acceleration Through Productive Capital Velocity
                </p>
                <h1 className="editorial-title-serif mb-7 text-[clamp(2.65rem,6vw,5.2rem)] leading-[1.02]">
                  Return matters. So does how long your capital waited for it.
                </h1>
                <p className="editorial-paragraph mb-7 max-w-3xl text-[var(--foreground)]">
                  Capital owners have finite time. A return that restores
                  capital optionality sooner can create the possibility of
                  another productive cycle, then another. The real question is
                  not only what your capital can earn. It is how many productive
                  cycles it can complete across the time available to you.
                </p>
                <div className="mb-8 border-l-2 border-[var(--accent)] bg-[var(--background-contrast)] px-6 py-5">
                  <p className="m-0 font-serif text-[1.05rem] leading-relaxed text-[var(--foreground)]">
                    Williams Praise is a Capital Allocator + Operator building
                    the Williams Capital Allocation Engine to grow capital
                    through successful recurring allocation cycles, disciplined
                    recovery, and evidence-led reallocation.
                  </p>
                </div>
                <div className="hero-actions flex flex-wrap gap-4">
                  <ButtonLink href="/capital/partnership">
                    Begin Capital Diligence
                  </ButtonLink>
                  <ButtonLink href="/capital/allocation-record" variant="secondary">
                    Inspect Allocation 001
                  </ButtonLink>
                  <ButtonLink href="/capital/engine" variant="quiet">
                    Study the Engine
                  </ButtonLink>
                </div>
              </MotionReveal>

              <MotionReveal className="lg:col-span-5" delay={0.08}>
                <div className="editorial-fine-frame overflow-hidden rounded-lg p-3">
                  <div className="relative overflow-hidden rounded border border-[var(--line)]">
                    <Image
                      src="/images/C208(1).jpg"
                      alt="Williams Praise Emmanuel, also known as Williams Praise"
                      width={1080}
                      height={1920}
                      className="aspect-[4/5] w-full object-cover"
                      priority
                    />
                    <div className="absolute inset-x-4 bottom-4 border border-[var(--line-strong)] bg-[var(--background)]/95 p-4 backdrop-blur-md">
                      <p className="mb-1 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        Allocator + Operator
                      </p>
                      <p className="m-0 font-serif text-[0.9rem] leading-snug text-[var(--foreground)]">
                        Capital judgment close to product, technology, market
                        signal, and direct operating intervention.
                      </p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>The Proposition</p>
                <h2>Capital that finishes one productive job should be free to begin the next.</h2>
              </div>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <p className="editorial-paragraph text-[var(--foreground)]">
                    The Engine is not designed around one isolated investment.
                    Its larger ambition is a capital base capable of completing
                    successful productive cycles repeatedly: deploy, operate,
                    create evidence, return or recover value, then reallocate
                    from a stronger position.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <FlowDiagram items={wealthCycle} className="panel-flow" />
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>The Four Economic Questions</p>
                <h2>Return. Velocity. Recovery. Optionality. Then repeat.</h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {fourQuestions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <MotionReveal key={item.title} delay={index * 0.04}>
                    <article className="incentive-card min-h-full">
                      <div>
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded border border-[var(--line)] bg-[var(--accent-soft)] text-[var(--accent)]">
                          <Icon size={20} />
                        </div>
                        <p className="mb-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")} / {item.title}
                        </p>
                        <h3 className="mb-4 font-serif text-[1.45rem] text-[var(--foreground)]">
                          {item.question}
                        </h3>
                        <p className="m-0 text-[0.95rem] leading-relaxed text-[var(--muted)]">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>Allocation 001 / Public Evidence</p>
                <h2>Shoppergetit: urban retail infrastructure for predictable distribution.</h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <MotionReveal className="lg:col-span-5">
                <p className="editorial-paragraph text-[var(--foreground)]">
                  Cities already have retailers, inventory, and customer
                  demand. What is broken is how fragmented those pieces are.
                  Shoppergetit coordinates existing retail capacity through an
                  intelligent commerce and fulfilment system.
                </p>
                <p className="mt-5 font-serif text-[1.35rem] leading-tight text-[var(--accent)]">
                  More customers should not require more warehouses and more people.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {proofStats.slice(0, 3).map((stat) => (
                    <article
                      className="border border-[var(--line)] bg-[var(--background-raised)] p-5"
                      key={stat.label}
                    >
                      <StatusBadge status={stat.status} />
                      <strong className="mt-3 block font-mono text-[1.65rem] text-[var(--foreground)]">
                        {stat.value}
                      </strong>
                      <span className="text-[0.82rem] leading-snug text-[var(--muted)]">
                        {stat.label}
                      </span>
                    </article>
                  ))}
                </div>
              </MotionReveal>

              <MotionReveal className="lg:col-span-7" delay={0.08}>
                <div className="home-proof-panel p-7">
                  <div className="proof-card-top mb-6 border-b border-[var(--panel-line)] pb-4">
                    <StatusBadge status={shoppergetitAllocation.status} />
                    <span>{shoppergetitAllocation.code}</span>
                  </div>
                  <FlowDiagram items={shoppergetitFlow} className="panel-flow" />
                  <div className="mt-8 grid grid-cols-1 gap-4">
                    {shoppergetitOperatingStory.map((item, index) => (
                      <div
                        className="grid grid-cols-[42px_1fr] gap-4 border-t border-[var(--panel-line)] pt-4"
                        key={item}
                      >
                        <span className="font-mono text-[0.78rem] text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="m-0 text-[0.9rem] leading-relaxed text-[#a9b8bd]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Link
                    className="text-link mt-7 inline-flex items-center gap-2 text-[var(--accent)]"
                    href="/capital/allocation-record"
                  >
                    See the full allocation record
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>Why Williams</p>
                <h2>The allocator and operator share one strategic brain.</h2>
              </div>
              <p className="editorial-paragraph mb-10 max-w-4xl text-[var(--foreground)]">
                Williams is not the product being sold. He is the reason the
                Engine may possess an operating advantage. The model reduces
                certain forms of distance between capital decisions and
                operating reality while requiring stronger stewardship because
                allocator and operator power are concentrated.
              </p>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {operatingAdvantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <MotionReveal key={item.title} delay={index * 0.04}>
                    <article className="border border-[var(--line)] bg-[var(--background-raised)] p-6">
                      <Icon className="mb-4 text-[var(--accent)]" size={21} />
                      <h3 className="mb-3 font-serif text-[1.18rem] text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="m-0 text-[0.88rem] leading-relaxed text-[var(--muted)]">
                        {item.text}
                      </p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>The Engine</p>
                <h2>Preserve, deploy, measure, decide, return, repeat.</h2>
              </div>
              <p className="editorial-paragraph mb-10 max-w-4xl text-[var(--foreground)]">
                The maximum duration of a round should not become a reason to
                keep capital unnecessarily deployed when sufficient settlement
                capacity exists and the agreed terms permit settlement.
              </p>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {capitalEngineSteps.map((step, index) => (
                <MotionReveal key={step.step} delay={index * 0.035}>
                  <article className="min-h-full border border-[var(--line)] bg-[var(--background-raised)] p-5">
                    <span className="mb-4 block font-mono text-[0.68rem] font-bold text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 font-serif text-[1.08rem] text-[var(--foreground)]">
                      {step.step}
                    </h3>
                    <p className="m-0 text-[0.78rem] leading-relaxed text-[var(--muted)]">
                      {step.text}
                    </p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <MotionReveal className="lg:col-span-5">
                <p className="eyebrow">Recovery</p>
                <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[var(--foreground)]">
                  Winning matters. So does knowing what happens when we do not.
                </h2>
                <p className="text-[1.03rem] leading-relaxed text-[var(--muted)]">
                  Dead capital cannot compound. Recovery protects capital
                  velocity by refusing to leave resources trapped inside an
                  allocation that no longer justifies more exposure.
                </p>
                <p className="mt-5 font-serif text-[1.25rem] leading-tight text-[var(--accent)]">
                  Recovery begins the moment an allocation stops justifying
                  additional capital.
                </p>
              </MotionReveal>
              <MotionReveal className="lg:col-span-7" delay={0.08}>
                <FlowDiagram items={recoveryLadder} className="panel-flow" />
                <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
                  {riskSystem.map((item) => (
                    <article
                      className="border border-[var(--line)] bg-[var(--background-raised)] p-5"
                      key={item.risk}
                    >
                      <ShieldCheck className="mb-3 text-[var(--accent)]" size={20} />
                      <h3 className="mb-2 font-serif text-[1.08rem] text-[var(--foreground)]">
                        {item.risk}
                      </h3>
                      <p className="m-0 text-[0.82rem] leading-relaxed text-[var(--muted)]">
                        {item.response}
                      </p>
                    </article>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>The Ecosystem</p>
                <h2>The next allocation should not always begin from zero.</h2>
              </div>
              <p className="editorial-paragraph mb-10 max-w-4xl text-[var(--foreground)]">
                A serious build may leave behind technology, distribution,
                customer relationships, retailer relationships, audience, trust,
                data, operating knowledge, and market intelligence. Those assets
                can make subsequent cycles less blind and potentially more
                efficient without becoming a guarantee of return.
              </p>
            </MotionReveal>
            <MotionReveal className="diligence-layer-tags" delay={0.08}>
              {ecosystemAssets.map((asset) => (
                <span key={asset}>{asset}</span>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>Ideas Behind the Allocator</p>
                <h2>The thinking is supporting evidence, not the main pitch.</h2>
              </div>
              <p className="editorial-paragraph mb-10 max-w-3xl text-[var(--foreground)]">
                Williams writes to expose how he reasons about systems, human
                behavior, institutions, product, and execution. The essays help
                a capital partner inspect the mind behind the operating model.
              </p>
            </MotionReveal>
            <div className="essay-grid">
              {essays.slice(0, 3).map((essay, index) => (
                <MotionReveal key={essay.title} delay={index * 0.04}>
                  <EssayCard essay={essay} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <MotionReveal className="lg:col-span-5">
                <p className="eyebrow">Capital Stewardship</p>
                <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.1rem)] leading-tight text-[var(--foreground)]">
                  Stronger operating proximity demands stronger partner visibility.
                </h2>
                <p className="text-[1.03rem] leading-relaxed text-[var(--muted)]">
                  Institutional controls are being formalized as the Engine
                  prepares for larger pools of partner capital: custody,
                  reporting cadence, conflicts, decision rights, accounting, and
                  partner visibility.
                </p>
              </MotionReveal>
              <MotionReveal className="editorial-fine-frame p-8 lg:col-span-7" delay={0.08}>
                <Clock className="mb-5 text-[var(--accent)]" size={28} />
                <h3 className="mb-4 font-serif text-[1.6rem] text-[var(--foreground)]">
                  Understand the current thesis before deciding whether the
                  Engine belongs in your capital strategy.
                </h3>
                <p className="mb-7 text-[0.96rem] leading-relaxed text-[var(--muted)]">
                  A serious diligence conversation should review the allocation
                  thesis, structure, risks, assumptions, Shoppergetit evidence,
                  recovery doctrine, and partner reporting expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href="/capital/partnership">
                    Begin Capital Diligence
                  </ButtonLink>
                  <ButtonLink href="/capital/stewardship" variant="secondary">
                    Review Stewardship
                  </ButtonLink>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container text-center">
            <MotionReveal>
              <BriefcaseBusiness className="mx-auto mb-5 text-[var(--accent)]" size={28} />
              <h2 className="mx-auto mb-6 max-w-4xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight text-[var(--foreground)]">
                How many productive cycles can your capital complete?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[1rem] leading-relaxed text-[var(--muted)]">
                Begin the conversation with evidence, assumptions, structure,
                and risk on the table.
              </p>
              <ButtonLink href="/capital/partnership">
                Begin Capital Diligence
              </ButtonLink>
            </MotionReveal>
          </div>
        </section>

        <SystemsLetter />
      </main>
      <Footer />
    </>
  );
}
