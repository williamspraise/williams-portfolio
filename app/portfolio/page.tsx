import type { Metadata } from "next";
import { ArrowUpRight, Globe2, Mail, MapPin } from "lucide-react";
import { capabilities, roleFits } from "@/data/capabilities";
import { metrics, projects } from "@/data/projects";
import ButtonLink from "@/components/ButtonLink";
import CapabilityCard from "@/components/CapabilityCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { canonicalIdentityDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Williams Praise Portfolio - Founder of Shoppergetit & Product Builder",
  description: `${canonicalIdentityDescription} Product portfolio covering Shoppergetit, commerce infrastructure, AI mobility, education, healthtech, UX systems, mentorship, and startup execution.`,
  keywords: [
    "Williams Praise portfolio",
    "Williams Emmanuel Praise portfolio",
    "Williams Praise Product Builder",
    "Williams Praise founder of Shoppergetit",
    "Williams Praise Shoppergetit founder",
    "Williams Praise Technical Product Lead",
    "Product Builder",
    "Technical Product Lead",
    "Founding Product Lead",
    "Technical Product Manager",
    "Product Strategist",
    "Founder-Operator portfolio",
    "Shoppergetit founder",
    "UX systems",
    "0 to 1 product execution",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Williams Praise - Product Builder & Technical Product Lead Portfolio",
    description:
      "Portfolio of Williams Praise, a Product Builder and Technical Product Lead with work across commerce, AI, education, healthtech, UX systems, and startup execution.",
    type: "profile",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="portfolio-note-section">
          <div className="container">
            <MotionReveal className="portfolio-note">
              This page is the professional portfolio for recruiters, founders,
              and product teams. It is not simply a collection of projects; it
              is evidence of how I think, build, execute, learn, and turn work
              into reusable assets.
            </MotionReveal>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Capabilities"
                title="What I bring"
                description="The strategic judgment and execution fluency required to move a product from unclear opportunity to operating reality."
              />
            </MotionReveal>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <MotionReveal key={capability.title} delay={index * 0.04}>
                  <CapabilityCard capability={capability} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast" id="work">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Selected Product Work"
                title="Products shaped from strategy through delivery"
                description="A record of owning systems, not just screens: product judgment, execution, learning loops, and assets created across marketplace operations, intelligent mobility, structured learning, and mentorship."
              />
            </MotionReveal>
            <div className="project-grid">
              {projects.map((project, index) => (
                <MotionReveal key={project.slug} delay={index * 0.05}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section metrics-section" aria-label="Impact metrics">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Evidence"
                title="Proof of execution"
                description="Signals from products launched, capital earned, systems built, and people guided."
              />
            </MotionReveal>
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <MotionReveal key={metric.label} delay={index * 0.035}>
                  <MetricCard {...metric} />
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <MotionReveal>
              <SectionHeader eyebrow="About" title="A product operator by design" />
            </MotionReveal>
            <MotionReveal className="about-copy" delay={0.08}>
              <p className="lead">
                I am Williams Praise, a founder-operator and technical product
                lead with experience building and shipping products across
                commerce, AI mobility, education, and healthtech.
              </p>
              <p>
                I work best at the intersection of product strategy, UX
                systems, technical execution, and startup operating discipline.
              </p>
              <p>
                I am not a traditional single-lane designer. I operate across
                problem discovery, product ownership, roadmap thinking, UX
                architecture, technical delivery oversight, and execution
                under ambiguity.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section value-section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Role Fit"
                title="Where I create the most value"
                description="I join ambitious teams where strategy must become shipped product without losing clarity, pace, or technical credibility."
              />
            </MotionReveal>
            <div className="role-grid">
              {roleFits.map((role, index) => (
                <MotionReveal key={role} delay={index * 0.035}>
                  <article className="role-card">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{role}</h3>
                    <ArrowUpRight size={18} />
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <MotionReveal className="container resume-card">
            <div>
              <p className="eyebrow">Resume</p>
              <h2>Ready to build with an early-stage team.</h2>
              <p>
                Target roles: Founding Product Lead, Technical Product Lead,
                Product Strategist, Technical Product Manager, and
                Founder-Operator.
              </p>
            </div>
            <ButtonLink
              href="/resume/Williams_Praise_Technical_Product_Resume.pdf"
              download
            >
              Download Resume
            </ButtonLink>
          </MotionReveal>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <MotionReveal className="contact-copy">
              <SectionHeader
                eyebrow="Contact"
                title="Bring me the difficult product problem."
                description="Open to remote and global startup roles where ownership, judgment, and technical product execution matter."
              />
              <div className="contact-details">
                <a href="mailto:williamspraise01@gmail.com">
                  <Mail size={18} />
                  williamspraise01@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/iam-williams/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  LinkedIn / iam-williams
                </a>
                <a
                  href="https://github.com/williamspraise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  GitHub / williamspraise
                </a>
                <a
                  href="https://www.instagram.com/kku_by"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  Instagram / kku_by
                </a>
                <a
                  href="https://www.tiktok.com/@williams.praise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  TikTok / williams.praise
                </a>
                <p>
                  <MapPin size={18} />
                  Abuja, Nigeria / Remote Global
                </p>
              </div>
            </MotionReveal>

            <MotionReveal className="contact-form-wrap" delay={0.08}>
              <ContactForm />
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
