export type Capability = {
  title: string;
  description: string;
  icon:
    | "strategy"
    | "ownership"
    | "technical"
    | "ux"
    | "founder"
    | "ai";
};

export const capabilities: Capability[] = [
  {
    title: "Product Strategy",
    description:
      "Roadmap thinking, prioritization, market logic, and monetization models built for real constraints.",
    icon: "strategy",
  },
  {
    title: "Product Ownership",
    description:
      "Product lifecycle ownership, backlog decisions, requirements definition, sprint alignment, and stakeholder clarity.",
    icon: "ownership",
  },
  {
    title: "Technical Execution Oversight",
    description:
      "Working across engineering, architecture, implementation quality, debugging direction, and reliable delivery.",
    icon: "technical",
  },
  {
    title: "UX Systems",
    description:
      "Designing flows, interaction systems, experience architecture, and component logic that scale with a product.",
    icon: "ux",
  },
  {
    title: "Founder Operating Discipline",
    description:
      "Making high-consequence decisions under constraints, shipping with limited resources, and owning outcomes.",
    icon: "founder",
  },
  {
    title: "AI-Augmented Building",
    description:
      "Using AI to compress execution time while preserving human judgment, architecture reasoning, and product correctness.",
    icon: "ai",
  },
];

export const roleFits = [
  "Early-stage product leadership",
  "Technical product management",
  "0-to-1 MVP and product buildout",
  "Product strategy and roadmap clarity",
  "UX architecture and product systems",
  "Founder support and product operator roles",
  "AI-accelerated product delivery workflows",
];

export const trustChips = [
  "Founder-Operator",
  "0→1 Product Execution",
  "Marketplace Systems",
  "AI-Augmented Product Delivery",
  "Product Strategy",
  "UX + Technical Delivery",
];
