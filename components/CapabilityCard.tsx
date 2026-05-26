import {
  Blocks,
  BrainCircuit,
  Compass,
  Cpu,
  LayoutGrid,
  Workflow,
} from "lucide-react";
import type { Capability } from "@/data/capabilities";

const icons = {
  strategy: Compass,
  ownership: Workflow,
  technical: Cpu,
  ux: LayoutGrid,
  founder: Blocks,
  ai: BrainCircuit,
};

export default function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = icons[capability.icon];

  return (
    <article className="capability-card">
      <div className="capability-icon">
        <Icon size={21} />
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  );
}
