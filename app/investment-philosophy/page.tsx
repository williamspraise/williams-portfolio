import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Blocks,
  CircleDollarSign,
  Landmark,
  Layers3,
  LineChart,
} from "lucide-react";
import Footer from "@/components/Footer";
import InvestmentMemoRequestModal from "@/components/InvestmentMemoRequestModal";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Investment Philosophy - Williams Praise",
  description:
    "Williams Praise on capital allocation, productive cycles, long-term thinking, cash flow, assets, signal, and investment philosophy.",
  keywords: [
    "Williams Praise investment philosophy",
    "Williams Emmanuel Praise investment philosophy",
    "Williams Praise capital allocator",
    "Capital Allocator",
    "Capital Allocation Thinker",
    "Investment Philosophy",
    "Productive Capital",
    "Productive Cycles",
    "Cash Flow Assets Signal",
    "Founder-Operator capital",
    "Williams Ecosystem",
  ],
  alternates: {
    canonical: "/investment-philosophy",
  },
  openGraph: {
    title: "Investment Philosophy - Williams Praise",
    description:
      "Williams Praise on capital allocation, productive cycles, long-term thinking, cash flow, assets, signal, and investment philosophy.",
    type: "article",
    url: "/investment-philosophy",
  },
};

const valueForms = [
  {
    title: "Cash Flow",
    icon: CircleDollarSign,
    text: "Cash flow matters because it gives a system oxygen. It can preserve momentum, fund the next decision, and reduce dependence on speculation.",
  },
  {
    title: "Assets",
    icon: Layers3,
    text: "Assets are what remain after activity: software, operating knowledge, audience, relationships, data, process, reputation, and reusable infrastructure.",
  },
  {
    title: "Signal",
    icon: LineChart,
    text: "Signal is evidence. It shows what customers trust, what markets respond to, what teams can execute, and where future capital may be more productively placed.",
  },
];

const cycleFlow = [
  "Capital",
  "Productive Deployment",
  "Cash Flow + Assets + Signal",
  "Larger Capital Base",
  "Greater Productive Capacity",
  "Next Cycle",
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

export default function InvestmentPhilosophyPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <section className="capital-hero">
          <div className="container">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">Investment Philosophy</p>
              <h1>Investment Philosophy</h1>
              <p>
                Capital should become progressively more capable. I do not
                think about it only as money looking for a return. I think
                about capital as productive capacity that can learn, compound,
                and leave behind stronger assets after each successful cycle.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="question">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">The Question</p>
              <h2>Williams asks a different question.</h2>
            </MotionReveal>
            <MotionReveal className="capital-contrast" delay={0.08}>
              <article>
                <p className="panel-kicker">Traditional Investing</p>
                <h3>What return will I earn?</h3>
                <div className="linear-diagram">
                  <span>Capital</span>
                  <ArrowRight size={17} />
                  <span>Opportunity</span>
                  <ArrowRight size={17} />
                  <span>Return</span>
                </div>
                <p>
                  This question is important, but it can isolate one decision
                  from the system that produced it.
                </p>
              </article>
              <article className="capital-contrast-primary">
                <p className="panel-kicker">Williams&apos; Question</p>
                <h3>How many productive cycles can capital complete?</h3>
                <p>
                  The second question studies what the capital does, what it
                  creates, what it teaches, and whether the next deployment
                  begins from a stronger position.
                </p>
              </article>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="wealth-acceleration">
          <div className="container capital-diagram-grid">
            <MotionReveal>
              <p className="eyebrow">Wealth Acceleration</p>
              <h2>Successful cycles can increase productive capacity.</h2>
              <p>
                When a cycle works, it can grow the capital base. A larger
                capital base can create more room for productive action. Repeated
                successful cycles can create the opportunity for faster net-worth
                growth.
              </p>
              <p>
                This is not a guarantee. It is a philosophy of discipline:
                preserve evidence, compound learning, and keep asking whether
                the next cycle is stronger because of the previous one.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-engine-panel" delay={0.08}>
              <PhilosophyFlow items={cycleFlow} />
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="forms-of-value">
          <div className="container">
            <MotionReveal className="capital-section-head">
              <p className="eyebrow">Three Forms of Value</p>
              <h2>Cash flow, assets, and signal.</h2>
              <p>
                A productive cycle should be judged by more than visible return.
                It should also be judged by what it leaves behind.
              </p>
            </MotionReveal>
            <div className="wealth-era-timeline">
              {valueForms.map((form, index) => {
                const Icon = form.icon;

                return (
                  <MotionReveal key={form.title} delay={index * 0.04}>
                    <article>
                      <span className="capability-icon">
                        <Icon size={21} />
                      </span>
                      <h3>{form.title}</h3>
                      <p>{form.text}</p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="capital-principle" id="long-term-thinking">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Long-term Thinking</p>
              <h2>
                I am interested in systems where learning does not disappear
                after one attempt.
              </h2>
              <p>
                The best work leaves residue: stronger judgment, sharper
                distribution, clearer user insight, more reliable operations,
                and better questions. That residue is what makes the next
                decision less blind.
              </p>
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
                  The public website explains the philosophy. The memorandum
                  explains the operating model.
                </p>
                <p>
                  If you are evaluating the Williams Engine seriously, request
                  the memorandum to review the model in its proper context.
                </p>
              </div>
              <div className="capital-memo-action">
                <Blocks size={34} />
                <InvestmentMemoRequestModal />
                <Link className="text-link" href="/why-williams">
                  Why Williams should be trusted
                  <Landmark size={15} />
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
