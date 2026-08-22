import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type VentureCardProps = {
  venture: {
    title: string;
    description: string;
    stage?: string;
    role?: string;
    validation?: string;
    problem: string;
    systemResponse: string;
    cta: string;
    href: string;
  };
};

export default function VentureCard({ venture }: VentureCardProps) {
  const isExternal = venture.href.startsWith("http");

  return (
    <article className="venture-card">
      <p className="card-meta">Venture</p>
      <h3>{venture.title}</h3>
      <p className="venture-description">{venture.description}</p>
      {(venture.stage || venture.role || venture.validation) && (
        <div className="venture-meta-grid">
          {venture.stage && (
            <div>
              <strong>Stage</strong>
              <span>{venture.stage}</span>
            </div>
          )}
          {venture.role && (
            <div>
              <strong>Williams role</strong>
              <span>{venture.role}</span>
            </div>
          )}
          {venture.validation && (
            <div>
              <strong>Validation</strong>
              <span>{venture.validation}</span>
            </div>
          )}
        </div>
      )}
      <div className="venture-notes">
        <div>
          <strong>Problem</strong>
          <p>{venture.problem}</p>
        </div>
        <div>
          <strong>System response</strong>
          <p>{venture.systemResponse}</p>
        </div>
      </div>
      <Link
        className="text-link"
        href={venture.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {venture.cta}
        <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}
