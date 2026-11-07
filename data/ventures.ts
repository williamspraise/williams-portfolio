import { shoppergetitContent } from "@/data/shoppergetit";

export const ventures = [
  {
    title: shoppergetitContent.name,
    description:
      `A Pendulum HQ subsidiary and operating venture. ${shoppergetitContent.shortPositioning}`,
    stage: shoppergetitContent.stage,
    role: shoppergetitContent.williamsRole,
    validation: shoppergetitContent.validation,
    problem: shoppergetitContent.coreInsight,
    systemResponse:
      `${shoppergetitContent.definition} ${shoppergetitContent.operatingLayer} ${shoppergetitContent.scalingClarification}`,
    cta: "Visit Shoppergetit",
    href: "https://shoppergetit.com",
  },
  {
    title: "Williams Governance",
    description:
      "AI governance and decision-authorization infrastructure within the Pendulum HQ ecosystem. One product with three capability routes: Governance (consequential authorization), GTMR (go-to-market intelligence), and SSR (social-signal intelligence).",
    stage: "Live product — soft launched 2 October 2026",
    role: "Founder, Product Architect and Systems Designer",
    validation: "Live product at governance.pendulumhq.com",
    problem:
      "AI systems can generate recommendations, but a recommendation is not authorization. Organizations need a governance layer to decide whether to commit Capital + Time to consequential actions.",
    systemResponse:
      "Williams Governance keeps specialist intelligence separate from authorization. GTMR constructs market-state intelligence, SSR constructs social-signal intelligence, and Governance evaluates and bounds the proposed Capital + Time exposure.",
    cta: "View Case Study",
    href: "/work/williams-governance",
  },
  {
    title: "Williams Content",
    description:
      "Trust and distribution infrastructure built through essays, frameworks, public thinking, and audience development.",
    stage: "Current",
    role: "Public trust layer",
    validation: "Essays, frameworks, and public thinking assets.",
    problem:
      "Serious work needs a trust layer so people can understand the thinking before they evaluate the builder.",
    systemResponse:
      "Williams Content turns systems thinking, product judgment, and original frameworks into public assets that compound reputation and distribution.",
    cta: "Read Essays",
    href: "/essays",
  },
  {
    title: "PSI / Pendulum School of Innovation",
    description:
      "A Pendulum HQ subsidiary building talent infrastructure for structured learning, mentorship, capability-building, and professional transformation.",
    stage: "Operating product work",
    role: "Product strategy / CPO work",
    validation: "Live public education platform and product direction.",
    problem:
      "Many people want better outcomes but lack structured capability, mentorship, and execution systems.",
    systemResponse:
      "PSI is designed to help learners, founders, and professionals develop capability through guided education, mentorship, and transformation systems.",
    cta: "View Product Work",
    href: "/work/pendulum-school",
  },
  {
    title: "Future Ventures",
    description:
      "Future operating opportunities shaped by the same discipline: systems thinking, trust, execution, assets, and signal.",
    stage: "Planned",
    role: "Thesis pipeline",
    validation: "Proposed / not yet executed as allocation track record.",
    problem:
      "Some opportunities should not begin as isolated ideas. They should emerge from accumulated evidence, capacity, and readiness.",
    systemResponse:
      "Future ventures remain part of the Pendulum HQ ecosystem while private allocation strategy stays reserved for qualified diligence.",
    cta: "Start a Conversation",
    href: "/contact",
  },
];
