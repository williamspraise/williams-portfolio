import Link from "next/link";
import { ArrowRight } from "lucide-react";

type HQCardProps = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  children?: React.ReactNode;
};

export default function HQCard({
  title,
  description,
  href,
  meta,
  children,
}: HQCardProps) {
  const content = (
    <article className="hq-card">
      {meta && <p className="card-meta">{meta}</p>}
      {children}
      <h3>{title}</h3>
      <p>{description}</p>
      {href && (
        <span className="text-link">
          Read More
          <ArrowRight size={15} />
        </span>
      )}
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link className="card-link" href={href}>
      {content}
    </Link>
  );
}
