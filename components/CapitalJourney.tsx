import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { capitalJourney, type CapitalStatus } from "@/data/capital";

const statusClass: Record<CapitalStatus, string> = {
  Executed: "executed",
  Current: "current",
  Planned: "planned",
  Target: "target",
  Illustrative: "illustrative",
};

export function StatusBadge({ status }: { status: CapitalStatus }) {
  return <span className={`status-badge ${statusClass[status]}`}>{status}</span>;
}

export function FlowDiagram({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={`flow-diagram ${className}`}>
      {items.map((item, index) => (
        <div key={item} className="flow-diagram-step">
          <span>{item}</span>
          {index < items.length - 1 && <ArrowDown size={16} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

export function CapitalJourneyNav({ current }: { current: string }) {
  return (
    <nav className="capital-journey-nav" aria-label="Capital journey">
      {capitalJourney.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={item.href === current ? "page" : undefined}
        >
          <span>{item.number}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function NextCapitalStep({
  current,
  label = "Next",
}: {
  current: string;
  label?: string;
}) {
  const index = capitalJourney.findIndex((item) => item.href === current);
  const next = capitalJourney[index + 1];

  if (!next) {
    return null;
  }

  return (
    <section className="capital-next-step">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{next.title}</h2>
        <p>{next.summary}</p>
      </div>
      <Link className="button button-primary" href={next.href}>
        Continue the journey
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
