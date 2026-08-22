import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";
import {
  CapitalJourneyNav,
  FlowDiagram,
} from "@/components/CapitalJourney";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InvestmentMemoRequestModal from "@/components/InvestmentMemoRequestModal";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import { capitalJourney } from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Capital Partnership | Williams Praise",
  description:
    "Begin a capital partnership conversation with Williams Praise after reviewing the capital philosophy, engine, allocation record, Why Williams, and stewardship approach.",
  path: "/capital/partnership",
  keywords: [
    "Capital Partnership",
    "Begin a capital conversation",
    "Williams Praise capital partner",
    "African capital allocator",
  ],
});

const diligenceFlow = capitalJourney.map((item) => item.label);

export default function CapitalPartnershipPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/partnership" />
        <section className="capital-hero">
          <div className="container capital-hub-hero-grid">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">06 - Capital Partnership</p>
              <h1>Begin with diligence, not hype.</h1>
              <p>
                Capital partnership begins with a serious review of the
                philosophy, engine, Shoppergetit evidence, Williams&apos; operating
                advantage, and stewardship discipline.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <FlowDiagram items={diligenceFlow} className="panel-flow" />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container capital-question-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Capital Partners"
                title="Explore fit before structure."
                description="Useful conversations include capital allocation diligence, Shoppergetit evidence review, stewardship questions, venture operating capacity, and future structure development."
              />
              <div className="contact-option-grid compact-options">
                {[
                  "Capital allocation diligence",
                  "Shoppergetit evidence review",
                  "Stewardship questions",
                  "Venture operating capacity",
                  "Future structure development",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </MotionReveal>
            <MotionReveal className="contact-form-wrap" delay={0.08}>
              <ContactForm />
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast" id="memo">
          <div className="container capital-question-grid">
            <MotionReveal>
              <p className="eyebrow">Private Next Step</p>
              <h2>Request the investment memorandum.</h2>
              <p>
                The public thesis establishes the model. The memorandum is for
                qualified conversations that need the operating routes, capital
                movement, risk architecture, and recovery policy in fuller
                context.
              </p>
            </MotionReveal>
            <MotionReveal className="capital-disclosure-panel" delay={0.08}>
              <ShieldCheck size={28} />
              <p>
                Memo requests are reviewed personally so the conversation
                remains serious, direct, and properly contextualized.
              </p>
              <InvestmentMemoRequestModal />
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container risk-preview-grid">
            <MotionReveal>
              <SectionHeader
                eyebrow="Other Paths"
                title="Williams also works with founders, companies, and product teams."
                description="Companies, founders, and recruiters can still reach Williams through the professional pathway."
              />
            </MotionReveal>
            <MotionReveal className="risk-card-grid" delay={0.08}>
              <article>
                <Mail size={21} />
                <h3>Companies / Founders</h3>
                <p>Use the contact page for advisory, consulting, and venture collaboration.</p>
                <Link className="text-link" href="/contact">
                  Work with Williams
                  <ArrowRight size={15} />
                </Link>
              </article>
              <article>
                <Mail size={21} />
                <h3>Recruiters / Product Teams</h3>
                <p>Use the portfolio pathway to inspect product and technical evidence.</p>
                <Link className="text-link" href="/portfolio">
                  View Product Portfolio
                  <ArrowRight size={15} />
                </Link>
              </article>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
