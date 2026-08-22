import { ArrowRight, Route } from "lucide-react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import { CapitalJourneyNav, FlowDiagram, StatusBadge } from "@/components/CapitalJourney";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import {
  capitalJourney,
  capitalModel,
  proofStats,
  shoppergetitAllocation,
} from "@/data/capital";
import { shoppergetitContent } from "@/data/shoppergetit";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Capital Allocation Engine | Williams Praise",
  description:
    "Explore the Williams Capital Allocation Engine: wealth acceleration, productive capital velocity, return, recovery, optionality, Shoppergetit evidence, and capital partnership diligence.",
  path: "/capital",
  keywords: [
    "Williams Capital Allocation Engine",
    "Wealth Acceleration",
    "Capital Velocity",
    "Capital Allocator",
    "Capital Allocation",
    "Founder Operator",
    "African founder operator",
  ],
});

export default function CapitalHubPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital" />
        <section className="capital-hero">
          <div className="container capital-hub-hero-grid">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">Capital Hub</p>
              <h1>Wealth acceleration through productive capital velocity.</h1>
              <p>
                Williams is building a capital allocation engine around one
                larger question: how many successful productive cycles can a
                capital base complete while return, recovery, optionality, and
                stewardship remain disciplined?
              </p>
              <div className="hero-actions">
                <ButtonLink href="/capital/partnership">Begin Capital Diligence</ButtonLink>
                <ButtonLink href="/capital/allocation-record" variant="secondary">
                  See Allocation 001
                </ButtonLink>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={capitalModel} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="The Williams Capital Model"
                title="From wealth acceleration thesis to diligence."
                description="The capital journey moves from capital velocity and evidence-led cycles, to the engine, Allocation 001, Williams' operator advantage, recovery discipline, and a serious partnership conversation."
              />
            </MotionReveal>
            <div className="capital-route-grid">
              {capitalJourney.map((item, index) => (
                <MotionReveal key={item.href} delay={index * 0.04}>
                  <Link className="capital-route-card" href={item.href}>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <ArrowRight size={16} />
                  </Link>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container allocation-proof-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Executed Allocation"
                title="Shoppergetit - Capital converted into operating infrastructure."
                description={`${shoppergetitContent.shortPositioning} ${shoppergetitAllocation.summary}`}
              />
              <ButtonLink href="/capital/allocation-record" variant="secondary">
                Inspect the Allocation Record
              </ButtonLink>
            </MotionReveal>
            <MotionReveal className="proof-metric-grid" delay={0.08}>
              {proofStats.map((stat) => (
                <article className="proof-metric" key={stat.label}>
                  <StatusBadge status={stat.status} />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Why Williams"
                title="Williams is the operating advantage, not the whole proposition."
                description="The economic proposition is productive capital velocity. Williams matters because capital judgment sits close to product, technology, customer behaviour, and operating intervention."
              />
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <ButtonLink href="/capital/why-williams" variant="secondary">
                Why Williams
              </ButtonLink>
            </MotionReveal>
          </div>
        </section>

        <section className="capital-next-step">
          <div>
            <p className="eyebrow">Start</p>
            <h2>Begin with the wealth acceleration thesis.</h2>
            <p>
              First understand why time changes the value of a return, then see
              how that belief becomes an operating engine.
            </p>
          </div>
          <Link className="button button-primary" href="/capital/philosophy">
            Start Chapter 01
            <Route size={16} aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
