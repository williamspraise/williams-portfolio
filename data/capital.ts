import { shoppergetitContent } from "@/data/shoppergetit";

export type CapitalStatus = "Executed" | "Current" | "Planned" | "Target" | "Illustrative";

export const capitalJourney = [
  {
    number: "01",
    label: "Philosophy",
    title: "Allocation Philosophy",
    href: "/capital/philosophy",
    summary: "What capital is for, and how evidence should govern deployment.",
  },
  {
    number: "02",
    label: "Engine",
    title: "Capital Engine",
    href: "/capital/engine",
    summary: "How Williams preserves, deploys, measures, decides, returns, and repeats.",
  },
  {
    number: "03",
    label: "Record",
    title: "Allocation Record",
    href: "/capital/allocation-record",
    summary: "Executed allocation evidence, separated from planned thesis work.",
  },
  {
    number: "04",
    label: "Why Williams",
    title: "Why Williams",
    href: "/capital/why-williams",
    summary: "Why the allocator and operator share one strategic brain.",
  },
  {
    number: "05",
    label: "Stewardship",
    title: "Capital Stewardship",
    href: "/capital/stewardship",
    summary: "How exposure, failure, conflicts, reporting, and recovery are handled.",
  },
  {
    number: "06",
    label: "Partnership",
    title: "Capital Partnership",
    href: "/capital/partnership",
    summary: "How a capital partner begins diligence without generic contact noise.",
  },
] as const;

export const capitalModel = [
  "Capital",
  "Allocation",
  "Operation",
  "Assets",
  "Evidence",
  "Recovery / Growth",
  "Reallocation",
];

export const capitalEngineSteps = [
  {
    step: "Preserve",
    text: "Keep reserves and avoid treating capital as a budget to exhaust.",
  },
  {
    step: "Deploy",
    text: "Allocate against a clear behavioral or economic hypothesis.",
  },
  {
    step: "Measure",
    text: "Watch for operating progress, market signal, and weak conversion.",
  },
  {
    step: "Decide",
    text: "Increase, hold, redirect, or stop based on evidence.",
  },
  {
    step: "Return",
    text: "Convert sufficient operating value into repayment, distribution, or reinvestment capacity where the cycle earns it.",
  },
  {
    step: "Repeat",
    text: "Begin the next cycle from a stronger base, not from zero.",
  },
] as const;

export const homepageCapitalModel = [
  "Raise Capital",
  "Allocate Into Productive Ventures",
  "Build + Operate",
  "Create Revenue + Assets + Evidence",
  "Grow, Recover or Stop",
  "Reallocate From a Stronger Position",
] as const;

export const decisionLayer = ["Increase", "Hold", "Redirect", "Stop"] as const;

export const proofStats = [
  {
    value: "300+",
    label: "Customer signups",
    status: "Current" as CapitalStatus,
  },
  {
    value: "100+",
    label: "Completed orders",
    status: "Current" as CapitalStatus,
  },
  {
    value: "~30%",
    label: "Repeat purchase rate",
    status: "Current" as CapitalStatus,
  },
  {
    value: "~90%",
    label: "Platform V2 complete",
    status: "Current" as CapitalStatus,
  },
] as const;

export const shoppergetitHistoricalCapital =
  "Approximately NGN 10M historically raised for early development.";

export const shoppergetitAllocation = {
  code: "Allocation 001",
  title: "Shoppergetit Development",
  status: "Executed" as CapitalStatus,
  summary:
    "Development capital and technical resources were first directed toward building and launching Shoppergetit's commerce platform. As product, operations, retailer participation, and market evidence developed, the work evolved into urban retail infrastructure for predictable distribution.",
  model: shoppergetitContent.businessModelFlow,
  facts: [
    {
      label: "Original development objective",
      value:
        "Build and launch Shoppergetit's commerce platform and the technical infrastructure required for real customer transactions.",
      status: "Executed" as CapitalStatus,
    },
    {
      label: "Capital / resources",
      value: shoppergetitHistoricalCapital,
      status: "Executed" as CapitalStatus,
    },
    {
      label: "Williams' responsibility",
      value:
        "Managed product direction, execution decisions, technical resources, and increasing hands-on implementation.",
      status: "Executed" as CapitalStatus,
    },
    {
      label: "What it became",
      value:
        "Urban retail infrastructure for predictable distribution, connecting local retailers, customer demand, and fulfilment through one intelligent commerce system.",
      status: "Current" as CapitalStatus,
    },
    {
      label: "Asset produced",
      value:
        "A Shoppergetit coordination layer across retailers, shopper demand, product digitisation, checkout, operations, quality control, and fulfilment flows.",
      status: "Current" as CapitalStatus,
    },
    {
      label: "Market evidence",
      value:
        "Live Abuja beta with 300+ signups, 100+ completed orders, and about 30% repeat purchase.",
      status: "Current" as CapitalStatus,
    },
    {
      label: "Allocation principle",
      value:
        "Capital does not protect the original method. It protects the objective.",
      status: "Executed" as CapitalStatus,
    },
  ],
};

export const plannedAllocations = [
  {
    title: "Williams Ecosystem allocation thesis",
    status: "Planned" as CapitalStatus,
    text:
      "A future allocation map for ventures that share reusable software, distribution, trust, and operating knowledge.",
  },
  {
    title: "Portfolio liquidity and recovery routes",
    status: "Illustrative" as CapitalStatus,
    text:
      "Scenario models for preserving cash, recovering execution, reusing assets, and unlocking liquidity under clear assumptions.",
  },
] as const;

export const riskSystem = [
  {
    risk: "Allocation Risk",
    response: "Use staged deployment, evidence gates, and stop/hold decisions.",
  },
  {
    risk: "Execution Risk",
    response: "Change the operating method when resources stop becoming progress.",
  },
  {
    risk: "Liquidity Risk",
    response: "Preserve reserves, avoid overexposure, and define recovery routes.",
  },
] as const;

export const stewardshipPrinciples = [
  "Capital preservation before ambition",
  "Bounded allocation windows",
  "Staged deployment",
  "Evidence gates",
  "Reserve capital",
  "Recovery routes",
  "Truthful separation of executed, current, planned, target, and illustrative claims",
] as const;

export const controlsInDevelopment = [
  "Capital custody",
  "Accounting + reporting cadence",
  "Conflict controls",
  "Decision rights",
  "Investment vehicle structure",
  "Partner visibility / reporting infrastructure",
] as const;

export const capabilityStack = [
  "Product strategy",
  "Technical execution",
  "UX and human behavior",
  "Founder operations",
  "Systems thinking",
  "Capital allocation discipline",
] as const;
