import { ArrowRight, BookOpen, Quote, Sparkles, Trophy, Users } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Story of Williams Praise | Capital Allocator, Operator & Sophisticated Advisor",
  description:
    "Discover how Williams Praise integrates capital allocation with premium retail operations (Shoppergetit) and professional leadership structures modeled on Ryan Leak and Pastor Mike Todd.",
  path: "/about",
  keywords: [
    "About Williams Praise",
    "Williams Praise biography",
    "Williams Praise Nigeria",
    "Shoppergetit Founder",
    "Product Builder",
    "Capital Allocator Biography",
    "Executive Leadership",
  ],
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        {/* EDITORIAL COVER SECTION */}
        <section className="page-hero about-page-hero relative border-b border-[var(--line)] py-16 md:py-24 bg-[var(--background)]">
          <div className="container max-w-4xl text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-[var(--accent)]"></span>
              <p className="eyebrow m-0 text-[0.75rem] tracking-[0.2em] font-medium text-[var(--accent)]">
                BIOGRAPHY & OPERATING PHILOSOPHY
              </p>
              <span className="h-[1px] w-6 bg-[var(--accent)]"></span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.05] tracking-tight text-[var(--foreground)] mb-6">
              The Mind Behind the Systems: <br />
              <span className="italic text-[var(--accent)]">Williams Praise</span>
            </h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed text-[var(--muted)] font-serif max-w-2xl mx-auto">
              Bridging the gap between strict capital stewardship, high-end consumer operations,
              and executive presence.
            </p>
          </div>
        </section>

        {/* HUMAN STORY & GQ FEATURE STYLE BODY */}
        <section className="section">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* SIDEBAR: INTELLECTUAL VITALS */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
                <div className="border border-[var(--line)] rounded-xl p-6 bg-[var(--background-raised)]">
                  <span className="text-[0.68rem] tracking-wider text-[var(--accent)] uppercase font-bold block mb-4">
                    THE ADVISORY VITALS
                  </span>

                  <div className="flex flex-col gap-6">
                    <div className="flex gap-3">
                      <Users size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">900+ Professionals</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Mentored globally in Product Design & UX.</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Trophy size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">Route 1 Execution</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Fulfillment channels, custom packaging, Sony FX3 cinema media.</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Sparkles size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">Route 2 Sophistication</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Modeling high-fashion, high-trust leadership advisory.</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <BookOpen size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">Academic Frameworks</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Systems of Love, IREE, Systems of Resolve.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[var(--line)] pt-6 text-center">
                    <p className="text-[0.78rem] text-[var(--muted)] italic leading-normal m-0">
                      &ldquo;Presentation and operations share one integrated identity.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* MAIN EDITORIAL COLUMN */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <MotionReveal>
                  <p className="font-serif text-[clamp(1.2rem,2.2vw,1.48rem)] leading-relaxed text-[var(--foreground)] mb-6">
                    Williams Praise is an allocator-operator who rejected the passive board-room model to work directly at the friction points of technology, logistics, design, and human psychology.
                  </p>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    The traditional boundary of a capital allocator is passive observation. You raise capital, deploy it into a company, wait for reports, and pray the managers execute. Williams realized that passive intermediation fails in high-growth, highly-constrained environments. Real growth demands active, operational proximity.
                  </p>
                </MotionReveal>

                {/* THE MANIFESTO INSERTION */}
                <MotionReveal className="bg-[var(--background-contrast)] rounded-xl border border-[var(--line)] p-8 my-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-24 w-24 bg-[var(--accent)]/5 rounded-full -mr-8 -mt-8 pointer-events-none" />
                  <Quote size={32} className="text-[var(--accent)]/10 mb-2" />
                  <h3 className="font-serif text-[1.2rem] text-[var(--foreground)] mb-4">The Dual-Engine Vision</h3>
                  <p className="text-[0.94rem] text-[var(--muted)] leading-relaxed m-0 mb-4">
                    Our platform executes across two highly synchronized tracks to maximize returns and expand brand power:
                  </p>
                  <ul className="text-[0.92rem] text-[var(--muted)] flex flex-col gap-3 pl-4 list-disc">
                    <li>
                      <strong>Route 1 (The Asset Engine - Shoppergetit):</strong> Reimagining local consumer retail. We build full-stack commerce platforms, custom branded packaging layers, quarterly luxury print magazines, and cinematic video workflows shot on commercial Sony FX3 cinema lenses to bypass traditional passive retailing.
                    </li>
                    <li>
                      <strong>Route 2 (The Personal Engine - Williams Praise Brand):</strong> Cultivating absolute personal sophistication, professional advisory, high-trust coaching, and refined wardrobe settings. This is modeled heavily on Ryan Leak&apos;s clean professionalism and Pastor Mike Todd&apos;s charismatic, elegant, high-impact public presence.
                    </li>
                  </ul>
                </MotionReveal>

                <MotionReveal>
                  <h3 className="font-serif text-[1.4rem] text-[var(--foreground)] mb-4">A Legacy of Global Guidance</h3>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Beyond shipping commerce platforms, Williams has actively shaped the product landscape. He has mentored over 900+ professionals, startup founders, and students in Product Engineering, User Experience Architecture, and visual execution across South Korea, India, Switzerland, the United States, and Nigeria.
                  </p>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    This deep investment in human relationships is not a passive side-project; it is a core diagnostic funnel. Mentorship provides direct, ground-level feedback on what frameworks work, where engineers encounter friction, and how digital interfaces must be designed to speak to authentic human behaviors.
                  </p>
                </MotionReveal>

                <MotionReveal>
                  <h3 className="font-serif text-[1.4rem] text-[var(--foreground)] mb-4">Original Intellectual Frameworks</h3>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Williams Praise is the author of several systems thinking architectures that merge human behavior with execution dynamics:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="border border-[var(--line)] rounded-lg p-5 bg-[var(--background-raised)]">
                      <strong className="text-[0.94rem] block text-[var(--foreground)] mb-1">Systems of Love</strong>
                      <span className="text-[0.84rem] text-[var(--muted)] leading-relaxed block">Diagnosing interpersonal dynamics and relationship networks through strict system constraints.</span>
                    </div>
                    <div className="border border-[var(--line)] rounded-lg p-5 bg-[var(--background-raised)]">
                      <strong className="text-[0.94rem] block text-[var(--foreground)] mb-1">IREE Phases & Systems of Resolve</strong>
                      <span className="text-[0.84rem] text-[var(--muted)] leading-relaxed block">A structural workflow framework engineered to convert abstract creative ambition into locked-in execution.</span>
                    </div>
                  </div>
                </MotionReveal>

                <MotionReveal className="border-t border-[var(--line)] pt-8 mt-4">
                  <div className="flex flex-wrap gap-4">
                    <ButtonLink href="/capital">Explore the Capital Hub <ArrowRight size={15} /></ButtonLink>
                    <ButtonLink href="/portfolio" variant="secondary">View Product Portfolios</ButtonLink>
                  </div>
                </MotionReveal>

              </div>
            </div>
          </div>
        </section>

        {/* HIGH CONTRAST QUOTE OUTRO */}
        <section className="section bg-[var(--background-contrast)] border-t border-[var(--line)]">
          <div className="container max-w-4xl text-center py-8">
            <MotionReveal>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight text-[var(--foreground)] mb-8">
                &ldquo;We don&apos;t just allocate the capital. <br />
                We enter the system it is building and guide it to sovereign maturity.&rdquo;
              </h2>
              <p className="text-[var(--accent)] font-mono text-[0.76rem] tracking-[0.15em] uppercase m-0">
                — WILLIAMS PRAISE, CHIEF ALLOCATOR & OPERATOR
              </p>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
