import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Framework } from "@/data/frameworks";

type FrameworkCardProps = {
  framework: Framework;
};

export default function FrameworkCard({ framework }: FrameworkCardProps) {
  return (
    <article className="framework-card">
      <p className="card-meta">{framework.badge}</p>
      <h3>{framework.title}</h3>
      <p>{framework.description}</p>
      <div className="mini-pill-list">
        {framework.pillars.map((pillar) => (
          <span key={pillar.title}>{pillar.title}</span>
        ))}
      </div>
      <p className="framework-explanation">{framework.shortExplanation}</p>
      <Link className="text-link" href={`/frameworks/${framework.slug}`}>
        Read More
        <ArrowRight size={15} />
      </Link>
    </article>
  );
}
