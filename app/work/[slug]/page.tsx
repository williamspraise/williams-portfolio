import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import { absoluteUrl, siteUrl } from "@/lib/seo";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {};
  }

  const title = `${project.shortTitle} Case Study — Williams Praise`;
  return {
    title,
    description: project.description,
    keywords: [
      `${project.shortTitle} Williams Praise`,
      `${project.shortTitle} case study`,
      project.role,
      ...project.ownership,
      ...(project.impact ?? []),
    ],
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      type: "article",
      url: `/work/${project.slug}`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.shortTitle} case study by Williams Praise`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const study = project.caseStudy;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/work/${project.slug}#case-study`,
    name: `${project.shortTitle} Case Study`,
    url: absoluteUrl(`/work/${project.slug}`),
    description: project.description,
    creator: {
      "@id": `${siteUrl}/#person`,
    },
    about: [
      project.shortTitle,
      project.role,
      ...project.ownership,
      ...(project.impact ?? []),
    ],
    image: absoluteUrl(project.image),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="case-page">
        <section className="case-hero">
          <div className="container">
            <Link href="/portfolio#work" className="case-back">
              <ArrowLeft size={16} />
              Selected Product Work
            </Link>
            <div className="case-hero-grid">
              <MotionReveal>
                <p className="eyebrow">{project.role}</p>
                <h1>{project.title}</h1>
                <p className="case-intro">{project.description}</p>
                <div className="case-links">
                  {study.status && <span className="case-status">{study.status}</span>}
                  {project.externalLink && (
                    <a
                      className="text-link"
                      href={project.externalLink.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.externalLink.label}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </MotionReveal>
              <MotionReveal delay={0.09}>
                <Image
                  className="case-cover"
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={760}
                  priority
                />
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="case-body">
          <div className="container case-layout">
            <aside className="case-sidebar">
              <p>Scope owned</p>
              <ul>
                {project.ownership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.tech && (
                <>
                  <p>Technical context</p>
                  <span className="tech-context">{project.tech}</span>
                </>
              )}
            </aside>

            <div className="case-content">
              <CaseText title="Context" content={study.context} />
              <CaseText title="Problem" content={study.problem} />
              <CaseText title="My Role" content={study.role} />

              <CaseList title="Constraints" items={study.constraints} />

              <section className="case-block">
                <h2>Product Decisions</h2>
                <div className="decision-grid">
                  {study.decisions.map((decision) => (
                    <article key={decision.title}>
                      <h3>{decision.title}</h3>
                      <p>{decision.detail}</p>
                    </article>
                  ))}
                </div>
              </section>

              <CaseList title="Execution Process" items={study.execution} />
              <CaseText
                title="Technical / System Thinking"
                content={study.systemThinking}
              />
              <CaseList title="Outcomes" items={study.outcomes} outcome />

              <section className="case-block">
                <h2>Product Screens</h2>
                <p className="gallery-note">
                  Selected product and workflow views from this work.
                </p>
                <div className="case-gallery">
                  {study.gallery.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={760}
                    />
                  ))}
                </div>
              </section>

              <CaseList title="Lessons Learned" items={study.lessons} />
            </div>
          </div>
        </section>

        <section className="case-cta">
          <div className="container case-cta-card">
            <div>
              <p className="eyebrow">Build Together</p>
              <h2>Need product clarity that becomes execution?</h2>
              <p>
                I help early-stage teams frame the right system, direct the
                work, and get a credible product shipped.
              </p>
            </div>
            <ButtonLink href="/portfolio#contact">Contact Williams</ButtonLink>
          </div>
        </section>

        <section className="more-work">
          <div className="container">
            <h2>More product work</h2>
            <div className="more-links">
              {projects
                .filter((entry) => entry.slug !== project.slug)
                .map((entry) => (
                  <Link key={entry.slug} href={`/work/${entry.slug}`}>
                    <span>{entry.role}</span>
                    <strong>{entry.shortTitle}</strong>
                    <ArrowRight size={17} />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CaseText({ title, content }: { title: string; content: string }) {
  return (
    <section className="case-block">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

function CaseList({
  title,
  items,
  outcome = false,
}: {
  title: string;
  items: string[];
  outcome?: boolean;
}) {
  return (
    <section className={`case-block ${outcome ? "case-outcomes" : ""}`}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {outcome && <ArrowUpRight size={16} />}
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
