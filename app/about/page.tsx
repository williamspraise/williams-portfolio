import { ArrowRight, BookOpen, Quote, Sparkles, Trophy, Users } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Praise Biography | Official Profile",
  description:
    "Official biography of Williams Praise, the public professional identity of Williams Praise Emmanuel: systems thinker, founder of Pendulum HQ, product builder, capital allocator, and co-founder/operator associated with Shoppergetit.",
  path: "/about",
  keywords: [
    "Williams Praise biography",
    "Williams Praise official profile",
    "Williams Praise founder of Pendulum HQ",
    "Williams Praise co-founder of Shoppergetit",
    "Williams Praise Emmanuel biography",
    "Williams Emmanuel Praise biography",
    "Williams Praise Emmanuel official profile",
    "Williams Praise Nigeria",
    "Pendulum HQ founder",
    "Shoppergetit co-founder",
    "Product Builder",
    "Capital Allocator Biography",
    "Systems Thinker",
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
                OFFICIAL IDENTITY & BIOGRAPHY
              </p>
              <span className="h-[1px] w-6 bg-[var(--accent)]"></span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.8rem)] leading-[1.05] tracking-tight text-[var(--foreground)] mb-6">
              Williams Praise <br />
              <span className="italic text-[var(--accent)]">Williams Praise Emmanuel</span>
            </h1>
            <p className="text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed text-[var(--muted)] font-serif max-w-2xl mx-auto">
              The official profile of Williams Praise, the public professional
              identity of Williams Praise Emmanuel, also indexed as Williams
              Emmanuel Praise: systems thinker, product builder, founder of
              Pendulum HQ, technical intervener, and Capital Allocator +
              Operator.
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
                    IDENTITY RECORD
                  </span>

                  <div className="flex flex-col gap-6">
                    <div>
                      <strong className="text-[0.9rem] block text-[var(--foreground)]">Williams Praise</strong>
                      <span className="text-[0.8rem] text-[var(--muted)] block">Public professional name represented by williamspraise.com.</span>
                    </div>

                    <div>
                      <strong className="text-[0.9rem] block text-[var(--foreground)]">Pendulum HQ</strong>
                      <span className="text-[0.8rem] text-[var(--muted)] block">Parent company and venture-building umbrella founded by Williams.</span>
                    </div>

                    <div>
                      <strong className="text-[0.9rem] block text-[var(--foreground)]">Shoppergetit + PSI</strong>
                      <span className="text-[0.8rem] text-[var(--muted)] block">Operating ventures under the Pendulum HQ ecosystem.</span>
                    </div>

                    <div className="flex gap-3">
                      <Users size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">900+ Professionals</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Mentored globally in product, design, UX, and execution.</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Trophy size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">Shoppergetit Evidence</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Urban retail infrastructure for predictable distribution.</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Sparkles size={20} className="text-[var(--accent)] shrink-0" />
                      <div>
                        <strong className="text-[0.9rem] block text-[var(--foreground)]">Systems Thinking</strong>
                        <span className="text-[0.8rem] text-[var(--muted)] block">Product, technology, capital, and human behaviour studied together.</span>
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
                      &ldquo;The allocator and operator share one strategic brain.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* MAIN EDITORIAL COLUMN */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <MotionReveal>
                  <p className="font-serif text-[clamp(1.2rem,2.2vw,1.48rem)] leading-relaxed text-[var(--foreground)] mb-6">
                    Williams Praise, the public professional identity of
                    Williams Praise Emmanuel, did not arrive at capital
                    allocation as a detached financial identity. The path began
                    with systems: understanding how outcomes are produced, where
                    human behavior bends a process, and which intervention
                    changes the result.
                  </p>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    He learned to study systems, then design them, then build
                    them, then operate them. Shoppergetit forced the next
                    evolution: when external execution weakened, Williams moved
                    closer to the technical work, changed the operating method,
                    and protected the objective.
                  </p>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Those identities now converge through Pendulum HQ and the
                    Williams Capital Allocation Engine: a disciplined attempt to
                    build operating ventures, measure evidence, preserve
                    optionality, and decide where productive capital should work
                    next.
                  </p>
                </MotionReveal>

                {/* PUBLIC-FACING CONNECTION SECTION */}
                <MotionReveal className="bg-[var(--background-contrast)] rounded-xl border border-[var(--line)] p-8 my-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-24 w-24 bg-[var(--accent)]/5 rounded-full -mr-8 -mt-8 pointer-events-none" />
                  <Quote size={32} className="text-[var(--accent)]/10 mb-2" />
                  <p className="eyebrow mb-3">What connects the work</p>
                  <h2 className="font-serif text-[1.55rem] text-[var(--foreground)] mb-4">
                    One way of thinking, applied across different systems.
                  </h2>
                  <p className="text-[0.98rem] text-[var(--muted)] leading-relaxed m-0 mb-6">
                    Williams works across capital, products, technology,
                    businesses, and human behaviour through the same underlying
                    discipline: understand the system, identify what is producing
                    the outcome, intervene where leverage exists, and let the
                    evidence change the method without abandoning the objective.
                  </p>
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <h3 className="font-serif text-[1.1rem] text-[var(--foreground)] mb-2">
                        Capital Allocator + Operator
                      </h3>
                      <p className="text-[0.92rem] text-[var(--muted)] leading-relaxed m-0">
                        Williams raises and allocates capital into productive
                        businesses he can help build and operate, with the
                        long-term thesis of recurring productive capital cycles.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-serif text-[1.1rem] text-[var(--foreground)] mb-2">
                        Systems Thinker for Human Problems
                      </h3>
                      <p className="text-[0.92rem] text-[var(--muted)] leading-relaxed m-0">
                        Systems thinking is the intellectual method behind how
                        Williams studies behaviour, products, organizations, and
                        capital.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-serif text-[1.1rem] text-[var(--foreground)] mb-2">
                        Product + Technical Operator
                      </h3>
                      <p className="text-[0.92rem] text-[var(--muted)] leading-relaxed m-0">
                        Product strategy, UX, technology, and direct implementation
                        give Williams the ability to move from diagnosis into
                        execution.
                      </p>
                    </div>
                  </div>
                </MotionReveal>

                <MotionReveal>
                  <h3 className="font-serif text-[1.4rem] text-[var(--foreground)] mb-4">Professional Mentorship</h3>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Beyond shipping commerce platforms, Williams has actively shaped the product landscape. He has mentored over 900+ professionals, startup founders, and students in Product Engineering, User Experience Architecture, and visual execution across South Korea, India, Switzerland, the United States, and Nigeria.
                  </p>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    This work supports the operating layer. Mentorship provides
                    direct, ground-level feedback on where builders encounter
                    friction and how digital interfaces must be designed around
                    real human behaviour.
                  </p>
                </MotionReveal>

                <MotionReveal>
                  <h3 className="font-serif text-[1.4rem] text-[var(--foreground)] mb-4">Original Intellectual Frameworks</h3>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Williams Praise is the author of several systems thinking frameworks that merge human behavior with execution dynamics:
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
                  <p className="eyebrow mb-3">Allocator + Operator</p>
                  <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-[var(--foreground)] mb-4">
                    Why Williams?
                  </h2>
                  <p className="text-[1.02rem] text-[var(--muted)] leading-relaxed mb-6">
                    Williams&apos; advantage is not one isolated skill. It is the
                    combination of capital judgment, systems thinking, product and
                    technical capability, human behaviour, and direct founder
                    operating experience inside one decision-maker.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <ButtonLink href="/capital/why-williams">Explore Why Williams <ArrowRight size={15} /></ButtonLink>
                    <ButtonLink href="/portfolio" variant="secondary">View Product Portfolio</ButtonLink>
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
                We enter the system it is building and let direct evidence guide the next decision.&rdquo;
              </h2>
              <p className="text-[var(--accent)] font-mono text-[0.76rem] tracking-[0.15em] uppercase m-0">
                WILLIAMS PRAISE, CAPITAL ALLOCATOR + OPERATOR
              </p>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
