import type { Metadata } from "next";
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  Brain,
  Building2,
  Landmark,
} from "lucide-react";
import Image from "next/image";
import AudienceModalPrompt from "@/components/AudienceModalPrompt";
import ButtonLink from "@/components/ButtonLink";
import CTASection from "@/components/CTASection";
import EssayCard from "@/components/EssayCard";
import FrameworkCard from "@/components/FrameworkCard";
import Footer from "@/components/Footer";
import HQCard from "@/components/HQCard";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import SystemsLetter from "@/components/SystemsLetter";
import VentureCard from "@/components/VentureCard";
import { essays } from "@/data/essays";
import { frameworks } from "@/data/frameworks";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "Williams Praise - Systems Thinker for Human Problems",
  description:
    "Williams Praise builds frameworks, products, and ventures around systems thinking, human behavior, product strategy, innovation, relationships, and resolve.",
};

const identityChips = [
  "Founder-Operator",
  "Product Builder",
  "Technical Product Lead",
  "Framework Creator",
  "Systems Thinking",
  "Human Behavior",
  "Product Strategy",
  "0->1 Execution",
];

const credibility = [
  "Builder of Shoppergetit",
  "Creator of Systems of Love",
  "Creator of IREE Phases",
  "900+ mentorship sessions",
  "Products across commerce, AI, education, and healthtech",
];

const buildAreas = [
  {
    title: "Frameworks",
    description:
      "Original systems for understanding human behavior, alignment, decision-making, love, resolve, and performance.",
    href: "/frameworks",
    icon: Brain,
  },
  {
    title: "Investment Philosophy",
    description:
      "How Williams thinks about capital, productive cycles, cash flow, assets, signal, and long-term compounding.",
    href: "/investment-philosophy",
    icon: Landmark,
  },
  {
    title: "Products",
    description:
      "0->1 product work across marketplace systems, AI mobility, education, and digital platforms.",
    href: "/portfolio",
    icon: Boxes,
  },
  {
    title: "Ventures",
    description:
      "Products and companies built around trust, education, commerce, capability, and better systems.",
    href: "/ventures",
    icon: Building2,
  },
  {
    title: "Essays",
    description:
      "Long-form thinking on psychology, systems, mediocrity, relationships, product thinking, and human progress.",
    href: "/essays",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <AudienceModalPrompt />
      <main>
        <section className="hq-hero">
          <div className="container hq-hero-grid">
            <MotionReveal className="hq-hero-copy">
              <p className="eyebrow">Williams Praise</p>
              <h1>Systems Thinker for Human Problems</h1>
              <p className="hero-subtitle">
                Founder, product builder, and framework creator exploring how
                people, businesses, relationships, products, and systems reach
                clarity, resolve, and better outcomes.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/frameworks">Explore Frameworks</ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  View Portfolio
                </ButtonLink>
                <ButtonLink href="/investment-philosophy" variant="quiet">
                  Investment Philosophy
                </ButtonLink>
              </div>
              <div className="trust-row hq-chip-row">
                {identityChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal className="hq-identity-card" delay={0.08}>
              <div className="hq-portrait-card">
                <Image
                  src="/images/C208(1).jpg"
                  alt="Portrait of Williams Praise"
                  width={1080}
                  height={1920}
                  sizes="(max-width: 1050px) min(100vw, 520px), 390px"
                  priority
                />
                <div className="hq-portrait-caption">
                  <span>Williams Praise</span>
                  <strong>Founder / Product Builder / Systems Thinker</strong>
                </div>
              </div>

              <div className="hq-thesis-card">
                <p className="panel-kicker">Operating thesis</p>
                <h2>
                  Better outcomes emerge when people can see the system clearly
                  enough to repair it.
                </h2>
                <div className="thesis-list">
                  {["Observe", "Structure", "Build", "Resolve"].map(
                    (item, index) => (
                      <div key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{item}</strong>
                      </div>
                    )
                  )}
                </div>
                <a className="text-link" href="mailto:williamspraise01@gmail.com">
                  Start a conversation
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </MotionReveal>
          </div>
          <MotionReveal className="container credibility-bar" delay={0.12}>
            {credibility.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </MotionReveal>
        </section>

        <section className="section" id="build">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Williams Ecosystem"
                title="The public headquarters for my thinking and building"
                description="The site connects original frameworks, investment philosophy, shipped product work, ventures, and essays without forcing every audience into the same path."
              />
            </MotionReveal>
            <div className="hq-feature-grid">
              {buildAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <MotionReveal key={area.title} delay={index * 0.04}>
                    <HQCard
                      title={area.title}
                      description={area.description}
                      href={area.href}
                    >
                      <span className="capability-icon">
                        <Icon size={21} />
                      </span>
                    </HQCard>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Featured Frameworks"
                title="Original systems for human clarity"
                description="Frameworks for love, potential, resolve, alignment, and responsible decisions."
              />
            </MotionReveal>
            <div className="framework-grid">
              {frameworks.map((framework, index) => (
                <MotionReveal key={framework.slug} delay={index * 0.05}>
                  <FrameworkCard framework={framework} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Investment Philosophy"
          title="How I think about capital and productive cycles"
          description="A public explanation of the philosophy behind cash flow, assets, signal, long-term thinking, and why capital should become progressively more capable."
          primaryHref="/investment-philosophy"
          primaryLabel="Read Investment Philosophy"
          secondaryHref="/why-williams"
          secondaryLabel="Why Williams"
        />

        <CTASection
          eyebrow="For recruiters, founders, and teams"
          title="Professional product portfolio"
          description="This is evidence of how I think, build, execute, learn, and turn product work into reusable assets."
          primaryHref="/portfolio"
          primaryLabel="View Portfolio"
        />

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Ventures"
                title="Products and companies as system responses"
                description="Venture work shaped around commerce, education, capability, trust, and transformation."
              />
            </MotionReveal>
            <div className="venture-grid compact">
              {ventures.map((venture, index) => (
                <MotionReveal key={venture.title} delay={index * 0.05}>
                  <VentureCard venture={venture} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Latest Essays"
                title="Notes coming from the headquarters"
                description="Writing on psychology, systems, mediocrity, relationships, product thinking, and human progress."
              />
            </MotionReveal>
            <div className="essay-grid">
              {essays.slice(0, 4).map((essay, index) => (
                <MotionReveal key={essay.title} delay={index * 0.04}>
                  <EssayCard essay={essay} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <SystemsLetter />

        <section className="section contact-options-section">
          <div className="container contact-options">
            <MotionReveal>
              <SectionHeader
                eyebrow="Contact"
                title="Work with Williams"
                description="Open to speaking, collaborations, consulting, jobs and recruiting, partnerships, and venture conversations."
              />
            </MotionReveal>
            <MotionReveal className="contact-option-grid" delay={0.08}>
              {[
                "Speaking",
                "Collaborations",
                "Consulting",
                "Jobs / Recruiting",
                "Partnerships",
                "Venture conversations",
              ].map((option) => (
                <span key={option}>{option}</span>
              ))}
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <ButtonLink href="/contact">Start a Conversation</ButtonLink>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
