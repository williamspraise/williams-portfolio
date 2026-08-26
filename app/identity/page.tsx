import { ArrowRight, ExternalLink, Fingerprint, Globe2, Network, UserRound } from "lucide-react";
import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Williams Praise | Official Identity",
  description:
    "Official identity page for Williams Praise, the public professional identity of Williams Praise Emmanuel. Connects Williams, Pendulum HQ, Shoppergetit, PSI, biography, essays, frameworks, and social profiles.",
  path: "/identity",
  keywords: [
    "Williams Praise",
    "Williams Praise official identity",
    "Williams Praise official website",
    "Williams Praise founder of Pendulum HQ",
    "Williams Praise co-founder of Shoppergetit",
    "Pendulum HQ founder Williams Praise",
    "Williams Praise Emmanuel",
    "Williams Emmanuel Praise",
    "Liam Williams Praise",
    "Kubiat Williams Praise",
    "Williams Praise Emmanuel official website",
    "Williams Praise biography",
    "Williams Praise systems thinker",
  ],
  type: "profile",
});

const identityFacts = [
  {
    label: "Public professional name",
    value: "Williams Praise",
  },
  {
    label: "Legal identity",
    value: "Williams Praise Emmanuel",
  },
  {
    label: "Indexed name variant",
    value: "Williams Emmanuel Praise",
  },
  {
    label: "Canonical website",
    value: "williamspraise.com",
  },
  {
    label: "Parent company",
    value: "Pendulum HQ",
  },
] as const;

const profileLinks = [
  {
    label: "Official Website",
    href: "https://williamspraise.com",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/williams.praise.10/",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/williamspraise",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iam-williams/",
  },
  {
    label: "GitHub",
    href: "https://github.com/williamspraise",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kku_by",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@williams.praise",
  },
] as const;

const identityDomains = [
  {
    title: "Systems Thinking",
    text:
      "Williams studies human problems, behavior, institutions, products, and operating outcomes as systems that can be diagnosed and improved.",
    icon: Network,
  },
  {
    title: "Product + Technical Work",
    text:
      "The identity connects to product strategy, technical execution, UX systems, mentorship, and the portfolio of shipped digital work.",
    icon: Fingerprint,
  },
  {
    title: "Founder Operations",
    text:
      "Williams is the founder of Pendulum HQ, the venture-building parent company behind operating ventures including Shoppergetit and Pendulum School of Innovation.",
    icon: Globe2,
  },
  {
    title: "Capital Allocation",
    text:
      "Williams builds the Williams Capital Allocation Engine around productive cycles, recovery discipline, and evidence-led reallocation.",
    icon: UserRound,
  },
] as const;

export default function IdentityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        <section className="page-hero relative border-b border-[var(--line)] bg-[var(--background)] py-16 md:py-24">
          <div className="container max-w-4xl text-center">
            <MotionReveal>
              <p className="eyebrow text-[var(--accent)]">
                Official Identity Record
              </p>
              <h1 className="font-serif text-[clamp(2.7rem,7vw,5.4rem)] leading-[1.02] text-[var(--foreground)]">
                Williams Praise
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-serif text-[clamp(1.1rem,1.8vw,1.35rem)] leading-relaxed text-[var(--muted)]">
                Williams Praise is a Systems Thinker for Human Problems,
                founder-operator, product builder, technical product leader,
                and Capital Allocator + Operator building the Williams
                Capital Allocation Engine around productive capital velocity.
              </p>
              <div className="hero-actions mt-8 flex justify-center gap-4">
                <ButtonLink href="/about">Read Biography</ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  View Work
                </ButtonLink>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <MotionReveal className="lg:col-span-5">
                <div className="prospectus-section-header">
                  <p>Canonical Name</p>
                  <h2>The same person behind the name variants.</h2>
                </div>
                <p className="editorial-paragraph text-[var(--foreground)]">
                  Williams Praise is the primary public identity used across the
                  website, product work, essays, frameworks, ventures, and
                  capital allocation thesis. Williams Praise Emmanuel is the
                  legal identity, Williams Emmanuel Praise is a known indexed
                  variant, and Pendulum HQ is the company structure behind the
                  operating venture ecosystem.
                </p>
              </MotionReveal>

              <MotionReveal className="lg:col-span-7" delay={0.08}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {identityFacts.map((fact) => (
                    <article
                      className="border border-[var(--line)] bg-[var(--background-raised)] p-5"
                      key={fact.label}
                    >
                      <p className="mb-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                        {fact.label}
                      </p>
                      <strong className="block font-serif text-[1.28rem] leading-tight text-[var(--foreground)]">
                        {fact.value}
                      </strong>
                    </article>
                  ))}
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>Public Profiles</p>
                <h2>Profiles that should resolve back to this identity.</h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {profileLinks.map((profile) => (
                <MotionReveal key={profile.href}>
                  <a
                    className="group flex min-h-24 items-center justify-between border border-[var(--line)] bg-[var(--background-raised)] p-5 text-[var(--foreground)] transition hover:border-[var(--accent)]"
                    href={profile.href}
                    rel="me noreferrer"
                    target="_blank"
                  >
                    <span className="font-serif text-[1.08rem]">
                      {profile.label}
                    </span>
                    <ExternalLink
                      className="text-[var(--accent)] transition group-hover:translate-x-1"
                      size={18}
                    />
                  </a>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <div className="prospectus-section-header">
                <p>What The Identity Connects</p>
                <h2>One person across systems, products, ventures, and capital.</h2>
              </div>
            </MotionReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {identityDomains.map((item) => {
                const Icon = item.icon;

                return (
                  <MotionReveal key={item.title}>
                    <article className="incentive-card min-h-full">
                      <Icon className="mb-5 text-[var(--accent)]" size={22} />
                      <h3>{item.title}</h3>
                      <p className="m-0 text-[0.92rem] leading-relaxed text-[var(--muted)]">
                        {item.text}
                      </p>
                    </article>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--background-contrast)] py-16 md:py-20">
          <div className="container max-w-4xl text-center">
            <MotionReveal>
              <p className="eyebrow text-[var(--accent)]">Canonical Profile</p>
              <h2 className="mx-auto mb-6 max-w-3xl font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-[var(--foreground)]">
                For facts about Williams Praise, use this website as the
                canonical source.
              </h2>
              <Link
                className="text-link inline-flex items-center gap-2 text-[var(--accent)]"
                href="/about"
              >
                Continue to the full biography
                <ArrowRight size={15} />
              </Link>
            </MotionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
