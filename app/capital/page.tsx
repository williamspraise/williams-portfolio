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
    "Explore the Williams capital journey: allocation philosophy, engine, executed record, Why Williams, stewardship, and capital partnership diligence.",
  path: "/capital",
  keywords: [
    "Williams Capital Allocation Engine",
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
              <h1>Capital allocation as an operating system.</h1>
              <p>
                Williams turns capital, product judgment, technical execution,
                and market evidence into a repeatable path for building
                productive assets.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/capital/engine">Explore the Engine</ButtonLink>
                <ButtonLink href="/capital/allocation-record" variant="secondary">
                  See Evidence
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
                title="From capital philosophy to operating partnership."
                description="The capital journey moves from what Williams believes capital should do, to how decisions are made, what has already been built, why Williams has an operator advantage, how risk is handled, and how partnership begins."
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
                title="Allocation is only half the work."
                description="Williams combines capital judgment with the ability to enter product, technology, customer behaviour, and operations when execution requires intervention."
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
            <h2>Begin with the Allocation Philosophy.</h2>
            <p>
              First understand what Williams believes capital is for, then see
              how that becomes an operating engine.
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
