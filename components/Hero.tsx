import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { trustChips } from "@/data/capabilities";
import ButtonLink from "./ButtonLink";
import MotionReveal from "./MotionReveal";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <MotionReveal className="hero-copy">
          <p className="eyebrow">Product leadership for early-stage companies</p>
          <p className="hero-role">
            Product Builder / Founding Product Lead / Product Strategist /
            Product Design + Technical Execution Hybrid
          </p>
          <h1 id="hero-heading">
            I turn ambiguous product problems into <span>shipped systems.</span>
          </h1>
          <p className="hero-subtitle">
            I build and lead 0→1 products across product strategy, UX
            architecture, technical execution oversight, and startup
            operations.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/#work">View Product Work</ButtonLink>
            <ButtonLink
              href="/resume/Williams_Praise_Technical_Product_Resume.pdf"
              variant="secondary"
              download
            >
              Download Resume
            </ButtonLink>
            <ButtonLink href="/#contact" variant="quiet">
              Contact Me
            </ButtonLink>
          </div>
        </MotionReveal>

        <MotionReveal className="hero-panel" delay={0.12}>
          <div className="panel-top">
            <span className="status-dot" />
            <span>Available for remote / global product roles</span>
          </div>
          <h2>Operating range</h2>
          <div className="operating-list">
            {[
              "Find the product signal",
              "Structure the roadmap",
              "Direct the experience",
              "Guide technical delivery",
              "Ship, measure, iterate",
            ].map((item, index) => (
              <div key={item}>
                <span className="sequence">{String(index + 1).padStart(2, "0")}</span>
                <CheckCircle2 size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="panel-feature">
            <p>Current proof point</p>
            <strong>Shoppergetit</strong>
            <span>Live structured commerce marketplace</span>
            <ArrowUpRight size={18} />
          </div>
        </MotionReveal>
      </div>

      <div className="container trust-row" aria-label="Core positioning">
        {trustChips.map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>
    </section>
  );
}
