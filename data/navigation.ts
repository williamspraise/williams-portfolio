export type NavigationLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Identity", href: "/identity" },
  {
    label: "Capital",
    href: "/capital",
    children: [
      { label: "Capital Hub", href: "/capital" },
      { label: "Allocation Philosophy", href: "/capital/philosophy" },
      { label: "Capital Engine", href: "/capital/engine" },
      { label: "Allocation Record", href: "/capital/allocation-record" },
      { label: "Why Williams", href: "/capital/why-williams" },
      { label: "Stewardship", href: "/capital/stewardship" },
      { label: "Partnership", href: "/capital/partnership" },
    ],
  },
  { label: "Ventures", href: "/ventures" },
  {
    label: "Thinking",
    href: "/frameworks",
    children: [
      { label: "Frameworks", href: "/frameworks" },
      { label: "Essays", href: "/essays" },
    ],
  },
  {
    label: "Work With Williams",
    href: "/portfolio",
    children: [
      { label: "Product Portfolio", href: "/portfolio" },
      { label: "Advisory / Consulting", href: "/contact" },
      { label: "Professional Opportunities", href: "/portfolio#contact" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
