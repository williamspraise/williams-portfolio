import ButtonLink from "./ButtonLink";
import SystemsLetter from "./SystemsLetter";
import type { Framework } from "@/data/frameworks";

type FrameworkDetailProps = {
  framework: Framework;
};

export default function FrameworkDetail({ framework }: FrameworkDetailProps) {
  return (
    <main>
      <section className="detail-hero">
        <div className="container detail-hero-inner">
          <p className="eyebrow">{framework.badge}</p>
          <h1>{framework.title}</h1>
          <p>{framework.shortExplanation}</p>
          <div className="hero-actions">
            <ButtonLink href="/frameworks" variant="secondary">
              Back to Frameworks
            </ButtonLink>
            <ButtonLink href="/contact">Collaborate</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pillar-grid">
            {framework.pillars.map((pillar, index) => (
              <article className="pillar-card" key={pillar.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{pillar.title}</h2>
                {pillar.description && <p>{pillar.description}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container coming-soon-panel">
          <p className="eyebrow">Essay</p>
          <h2>Full essay coming soon</h2>
          <p>
            This framework page is a public placeholder for the fuller essay,
            examples, and applications.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/frameworks" variant="secondary">
              Back to Frameworks
            </ButtonLink>
            <ButtonLink href="/contact">Contact / Collaborate</ButtonLink>
          </div>
        </div>
      </section>

      <SystemsLetter />
    </main>
  );
}
