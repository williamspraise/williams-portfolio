import Link from "next/link";

type EssayCardProps = {
  essay: {
    title: string;
    description: string;
    category: string;
    href?: string;
    status?: string;
  };
};

export default function EssayCard({ essay }: EssayCardProps) {
  const content = (
    <article className="essay-card">
      <div className="essay-card-top">
        <p className="card-meta">{essay.category}</p>
        <span>{essay.status ?? "Coming Soon"}</span>
      </div>
      <h3>{essay.title}</h3>
      <p>{essay.description}</p>
    </article>
  );

  if (!essay.href) {
    return content;
  }

  return (
    <Link className="card-link" href={essay.href}>
      {content}
    </Link>
  );
}
