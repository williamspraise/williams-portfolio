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
          <p>
            The frameworks connect to the wider Pendulum HQ ecosystem: essays show
            the thinking in public, allocation philosophy shows how the same
            thinking applies to capital, and Why Williams explains the trust
            architecture behind the operator.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/essays" variant="secondary">
              Read Essays
            </ButtonLink>
            <ButtonLink href="/capital/philosophy">
              Allocation Philosophy
            </ButtonLink>
            <ButtonLink href="/capital/why-williams" variant="quiet">
              Why Williams
            </ButtonLink>
          </div>
        </div>
      </section>

      <SystemsLetter />
    </main>
  );
}
