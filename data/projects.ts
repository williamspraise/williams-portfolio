import { shoppergetitContent } from "@/data/shoppergetit";

export type ProjectDecision = {
  title: string;
  detail: string;
};

export type CaseStudySection = {
  title: string;
  content?: string;
  items?: string[];
};

export type CaseStudy = {
  context: string;
  problem: string;
  role: string;
  constraints: string[];
  decisions: ProjectDecision[];
  execution: string[];
  systemThinking: string;
  outcomes: string[];
  lessons: string[];
  gallery: { src: string; alt: string }[];
  status?: string;
  sections?: CaseStudySection[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  role: string;
  description: string;
  ownership: string[];
  tech?: string;
  impact?: string[];
  image: string;
  imageAlt: string;
  cta: string;
  externalLink?: {
    href: string;
    label: string;
  };
  caseStudy: CaseStudy;
};

// Screenshot paths are stable asset slots; replace the exported files without changing UI code.
export const projects: Project[] = [
  {
    slug: "williams-governance",
    title: "Williams Governance — AI Governance & Decision Authorization",
    shortTitle: "Williams Governance",
    role: "Founder, Product Architect and Systems Designer",
    description:
      "An AI governance and decision-authorization system that keeps specialist intelligence separate from the authorization of consequential Capital + Time exposure. Built within the Pendulum HQ ecosystem.",
    ownership: [
      "Product direction",
      "Decision-governance problem definition",
      "Three-route product architecture (Governance, GTMR, SSR)",
      "Capital + Time exposure boundary",
      "Reality, evidence, uncertainty, and specialist handoff design",
      "Product and runtime development direction",
    ],
    image: "/images/projects/williams-governance/cover.png",
    imageAlt:
      "Schematic of Williams Governance: three capability routes and the decision authorization boundary",
    cta: "View Case Study",
    externalLink: {
      href: "https://governance.pendulumhq.com/",
      label: "Visit live product",
    },
    caseStudy: {
      status: "Live product — soft launched 2 October 2026",
      sections: [
        {
          title: "Product thesis",
          content:
            "Intelligence can inform a decision. Governance determines whether consequential exposure is justified. Williams Governance is designed around the relationship between Reality, evidence, decision authority, and the commitment of Capital + Time. It does not assume every opportunity should be pursued or that every uncertainty can be removed. It makes the decision boundary explicit: what is known, what is not known, what is being proposed, what exposure is being requested, and what conditions govern the next move.",
        },
        {
          title: "One product, three capability routes",
          items: [
            "Governance — consequential authorization. Examines the actual decision and evaluates whether the proposed commitment is justified, considering evidence, uncertainty, causal completeness, exposure, reversibility, and recovery. Possible dispositions include bounded release or a hold. A HOLD is a meaningful decision state; it is not an approval, rejection, or deployment.",
            "GTMR — go-to-market intelligence. The Williams Go-to-Market Runtime constructs market-state and go-to-market intelligence to help investigate the market and conditions surrounding a commercial opportunity. It contributes specialist HOW and market intelligence; it does not independently authorize consequential Capital + Time exposure.",
            "SSR — social-signal intelligence. The Williams Social Signal Runtime constructs specialist social-signal and communication intelligence from observable signals. It contributes specialist HOW; it does not replace Governance's authorization role.",
          ],
        },
        {
          title: "The governing separation",
          content:
            "Market-state and go-to-market intelligence (GTMR) and social-signal and communication intelligence (SSR) are separate from consequential decision authorization (Governance). A specialist may explain how to pursue an opportunity; Governance must still determine whether the proposed commitment is justified. Specialist access is not a prerequisite for Governance to be useful.",
        },
        {
          title: "Decision workflow",
          items: [
            "Establish the real decision — identify the choice being made rather than answering a loosely framed prompt.",
            "Reconstruct Reality — separate observed facts, claims, assumptions, unknowns, and evidence quality.",
            "Identify specialist questions — determine whether go-to-market or social-signal intelligence would materially improve the decision.",
            "Examine the proposed exposure — make the Capital + Time commitment explicit.",
            "Test proportionality and reversibility — ask whether the proposed action is the smallest useful movement that preserves causal completeness and meaningful learning.",
            "Determine the boundary — release a bounded action where justified, or hold when the evidence does not support further exposure.",
            "Preserve the decision context — keep the reasoning, evidence, and boundaries available for subsequent review or specialist handoff.",
          ],
        },
        {
          title: "Specialist handoff",
          content:
            "Governance remains useful when a specialist route is unavailable. A user may work with a human specialist, another AI system, their own execution process, or a licensed Williams specialist capability. When a handoff is used, the context preserves the underlying Reality, the unresolved specialist question, Governance's findings, the directional suggestion (clearly marked as context rather than a specialist determination), and the Capital + Time boundary. The specialist independently constructs its specialist HOW; it does not silently inherit Governance's authority.",
        },
        {
          title: "Product design principles",
          items: [
            "Keep Reality separate from interpretation — a coherent narrative is not proof.",
            "Keep intelligence separate from authority — a specialist recommendation does not automatically authorize action.",
            "Make exposure explicit — the cost of a decision includes both Capital and Time.",
            "Prefer bounded movement — identify the smallest justified movement that can create useful reality without omitting what is causally necessary.",
            "Preserve reversibility and recovery — account for what happens if the hypothesis fails or conditions change.",
            "Do not force a specialist dependency — Governance remains useful under another execution route.",
          ],
        },
      ],
      context:
        "Williams Governance is an AI governance and decision-authorization system designed to address the gap between receiving intelligent recommendations and deciding whether to commit real resources to them. AI systems can produce analysis, strategies, and recommendations, but a recommendation is not authorization. It does not, by itself, establish that the evidence is sufficient, that the proposed action is proportionate, or that the commitment of Capital + Time is justified. The product introduces a distinct decision-governance layer that examines the real decision, the available evidence, the proposed exposure, and the conditions under which action should proceed, remain on hold, or be bounded.",
      problem:
        "Organizations and builders increasingly use AI to reason about consequential choices: where to invest, what to build, which market to enter, what to prioritize, and when to act. The difficulty is not only generating an answer. It is deciding whether that answer deserves action. Questions remain distinct: What is actually happening in the world? Which claims are supported by current evidence? What remains uncertain? What is the smallest useful action to test the relevant hypothesis? How much Capital + Time would that action consume? What would justify proceeding, pausing, changing direction, or stopping? Who or what has authority to make the decision? Treating a persuasive AI output as permission to act collapses analysis, recommendation, and authorization into one step. Williams Governance was built to keep those functions distinct.",
      role:
        "Williams conceived and built the product direction and its governing distinctions. His work includes defining the decision-governance problem; separating specialist intelligence from consequential authorization; shaping the three-route product architecture; developing the Capital + Time exposure boundary; defining how Reality, evidence, uncertainty, and specialist handoffs should be preserved; directing product and runtime development within the Pendulum HQ ecosystem; and evaluating the system against consequential real-world decision cases.",
      constraints: [
        "Keep intelligence separate from authority so a specialist recommendation does not automatically authorize action.",
        "Make exposure explicit — every decision cost includes both Capital and Time.",
        "Prefer bounded movement over maximized activity.",
        "Preserve reversibility and recovery if the hypothesis fails or conditions change.",
        "Do not force a specialist dependency — Governance must remain useful under another execution route.",
      ],
      decisions: [
        {
          title: "One product with three routes, not three standalone products",
          detail:
            "Governance, GTMR, and SSR are presented as capability routes within a single product, preserving the distinction that GTMR constructs market-state intelligence, SSR constructs social-signal intelligence, and Governance authorizes Capital + Time exposure.",
        },
        {
          title: "Authorization is a distinct layer from intelligence",
          detail:
            "The product keeps analysis, recommendation, and authorization separate rather than collapsing them into a single AI-generated answer.",
        },
        {
          title: "HOLD as a first-class decision state",
          detail:
            "A hold where evidence does not justify further exposure is treated as a meaningful disposition, not an approval, rejection, or deployment.",
        },
        {
          title: "No silent specialist authority",
          detail:
            "Specialist handoffs preserve context and findings; the specialist independently constructs its HOW and does not inherit Governance's authority.",
        },
      ],
      execution: [
        "Defined the decision-governance problem and its governing distinctions.",
        "Shaped the three-route product architecture (Governance, GTMR, SSR).",
        "Developed the Capital + Time exposure boundary.",
        "Defined how Reality, evidence, uncertainty, and specialist handoffs should be preserved.",
        "Directed product and runtime development within the Pendulum HQ ecosystem.",
        "Evaluated the system against consequential real-world decision cases.",
      ],
      systemThinking:
        "The architecture maintains three separate responsibilities. GTMR constructs specialist market-state and go-to-market understanding. SSR constructs specialist social-signal and communication understanding. Governance evaluates and bounds Capital + Time exposure. The decision workflow sequences a real-world decision through Reality reconstruction, optional specialist intelligence, exposure examination, proportionality and reversibility testing, boundary determination, and context preservation. Reality is kept separate from interpretation; intelligence is kept separate from authority.",
      outcomes: [
        "Williams Governance is a live product at https://governance.pendulumhq.com/.",
        "Soft-launched 2 October 2026 within the Pendulum HQ ecosystem.",
        "Product is built and live; the public case study links to the live product.",
      ],
      lessons: [
        "An intelligent recommendation is not the same thing as permission to commit resources.",
        "AI product architecture must govern the transition from intelligence to consequential action.",
        "Explicit authority and exposure boundaries make a governance product inspectable and reviewable.",
        "The work spans AI product architecture, decision systems, evidence-aware UX, runtime and capability design, product governance, and commercial and operational reasoning.",
      ],
      gallery: [
        {
          src: "/images/projects/williams-governance/cover.png",
          alt: "Williams Governance schematic: three capability routes and the decision authorization boundary",
        },
        {
          src: "/images/projects/williams-governance/decision-flow.svg",
          alt: "Williams Governance governed decision workflow sequence",
        },
      ],
    },
  },
  {
    slug: "shoppergetit",
    title: "Shoppergetit - Urban Retail Infrastructure",
    shortTitle: "Shoppergetit",
    role: "Co-Founder & Technical Product Lead",
    description:
      `A Pendulum HQ subsidiary and operating venture. ${shoppergetitContent.shortPositioning}`,
    ownership: [
      "Product strategy",
      "UX architecture",
      "Roadmap prioritization",
      "Marketplace workflow design",
      "Monetization model",
      "Technical execution oversight",
      "Retailer, admin, and shopper ecosystem",
      "Launch and go-to-market decisions",
    ],
    tech: "Next.js, React, Node.js, MongoDB, Redis, Vercel, Render, GA4 / GTM",
    impact: [
      "Launched live Abuja beta",
      "Coordinated retailer-held inventory",
      "Raised ₦10M in early capital",
      "Built shopper, retailer, and admin infrastructure",
    ],
    image: "/images/projects/shoppergetit/cover.svg",
    imageAlt: "Shoppergetit urban retail infrastructure product interface",
    cta: "View Case Study",
    externalLink: {
      href: "https://shoppergetit.com",
      label: "Visit live product",
    },
    caseStudy: {
      status: "Live product",
      sections: [
        {
          title: "What Shoppergetit Is",
          content: `${shoppergetitContent.shortPositioning} ${shoppergetitContent.definition}`,
        },
        {
          title: "The Insight",
          content: shoppergetitContent.coreInsight,
          items: ["Retailers", "Inventory", "Customer demand"],
        },
        {
          title: "The Traditional Constraint",
          content:
            "Commerce growth can create increasing dependency on warehousing, owned inventory, operational labour, and fulfilment complexity.",
        },
        {
          title: "The Shoppergetit Model",
          content: `${shoppergetitContent.businessModel} ${shoppergetitContent.operatingLayer}`,
        },
        {
          title: "Design Principle",
          content: `${shoppergetitContent.scalingPrinciple} ${shoppergetitContent.scalingClarification}`,
        },
        {
          title: "Traditional Inventory-Heavy Commerce Expansion",
          items: [...shoppergetitContent.moatComparison.traditional],
        },
        {
          title: "Shoppergetit",
          items: [...shoppergetitContent.moatComparison.shoppergetit],
        },
      ],
      context:
        "Shoppergetit is a Pendulum HQ subsidiary and urban retail infrastructure venture for predictable distribution. It connects local retailers, customer demand, and fulfilment through one intelligent commerce system.",
      problem:
        "Cities already have retailers, inventory, and demand. The problem is fragmentation: product information, demand capture, transaction flow, quality control, fulfilment, and customer engagement often sit in disconnected places.",
      role:
        "As Co-Founder and Technical Product Lead, I shaped the opportunity, product model, workflows, priorities, and release decisions within the Pendulum HQ ecosystem. I translated marketplace requirements into experience and system logic, supervised technical execution, and aligned product decisions with capital and launch realities.",
      constraints: [
        "Coordinating inventory already held by local retailers without requiring Shoppergetit to own that inventory itself.",
        "Balancing three operating surfaces: shopper, retailer, and admin workflows.",
        "Shipping under early-stage capital, team, and go-to-market constraints.",
        "Supporting quality control, fulfilment, customer engagement, and operational exceptions without creating avoidable manual burden.",
      ],
      decisions: [
        {
          title: "Coordinate the city, not only the catalogue",
          detail:
            "The product direction prioritizes the coordination layer between retailer inventory, customer demand, quality control, transactions, and fulfilment.",
        },
        {
          title: "Build role-specific operating surfaces",
          detail:
            "Shopper simplicity required structured retailer and admin controls behind the scenes. Each audience received workflows aligned to the decisions they own.",
        },
        {
          title: "Use automation to protect operating density",
          detail:
            "AI assistance, product digitisation, operational tooling, and workflow design reduce the need for every growth step to become proportional warehouse or headcount growth.",
        },
        {
          title: "Treat monetization as system design",
          detail:
            "Revenue logic and fulfilment realities informed prioritization rather than being postponed until after the interface was built.",
        },
      ],
      execution: [
        "Mapped critical shopper, retailer, admin, logistics, and exception journeys.",
        "Defined release priorities around transaction confidence and operational control.",
        "Directed UX architecture and requirements across marketplace workflows.",
        "Worked with implementation decisions across a Next.js, Node.js, MongoDB, and Redis stack.",
        "Used analytics instrumentation and launch learning to inform subsequent product decisions.",
      ],
      systemThinking:
        "Shoppergetit is a coordination system. Existing retailers hold inventory; customers create demand; the platform digitises products, controls quality, coordinates transactions, supports fulfilment, and gives operators the workflow visibility needed to keep the system predictable.",
      outcomes: [
        "Launched a live Abuja beta for urban retail coordination.",
        "Established product infrastructure across shopper, retailer, admin, checkout, fulfilment, and operations flows.",
        "Raised ₦10M in early capital to support the business direction.",
        "Built a foundation for product digitisation, retailer onboarding, request sourcing, community drops, customer engagement, dashboards, and logistics workflows.",
      ],
      lessons: [
        shoppergetitContent.scalingPrinciple,
        "Retail distribution becomes more scalable when existing inventory can be coordinated instead of duplicated.",
        "Early role clarity across admin, retailer, and shopper experiences reduces manual firefighting later.",
        "Product leadership in a constrained startup requires prioritizing system integrity and commercial learning at the same time.",
      ],
      gallery: [
        {
          src: "/images/projects/shoppergetit/shopper-dashboard.svg",
          alt: "Shoppergetit shopper retail interface",
        },
        {
          src: "/images/projects/shoppergetit/vendor-console.svg",
          alt: "Shoppergetit retailer operations console",
        },
        {
          src: "/images/projects/shoppergetit/admin-operations.svg",
          alt: "Shoppergetit admin operations screen",
        },
      ],
    },
  },
  {
    slug: "pam-ai",
    title: "PAM AI — Voice-First Traffic Assistant",
    shortTitle: "PAM AI",
    role: "Product Builder / Product Strategist",
    description:
      "An AI-powered traffic and navigation assistant concept built around voice interaction, shadow routing, traffic prompts, and mobile navigation experiences.",
    ownership: [
      "Product concept",
      "Voice UX logic",
      "Mobile experience architecture",
      "Technical product planning",
      "AI workflow thinking",
      "User interaction system",
    ],
    tech: "Expo React Native, Firebase, Google Maps APIs, AI tooling, notifications, voice flows",
    image: "/images/projects/pam-ai/cover.svg",
    imageAlt: "PAM AI voice navigation product screens",
    cta: "View Case Study",
    caseStudy: {
      status: "Product concept - not publicly live",
      context:
        "Traffic navigation experiences demand low-attention interaction, timely intelligence, and confidence in route changes. PAM AI explores a voice-first assistant that proactively helps users interpret and respond to road conditions.",
      problem:
        "How might mobile navigation support useful traffic decisions without demanding unsafe visual attention or interrupting a journey with noisy prompts?",
      role:
        "I defined the product concept, voice interaction logic, mobile architecture, and technical planning for AI-supported routing prompts.",
      constraints: [
        "Driver attention and safety requirements.",
        "Variable data quality and route confidence.",
        "Notification timing and prompt fatigue.",
      ],
      decisions: [
        {
          title: "Voice before visual complexity",
          detail:
            "The interaction model prioritizes concise voice prompts with optional glanceable confirmations.",
        },
        {
          title: "Shadow-route reasoning",
          detail:
            "Alternative routes remain monitored so prompts can explain valuable changes at the moment action matters.",
        },
      ],
      execution: [
        "Framed user journeys for setup, live navigation, prompt response, and arrival.",
        "Defined integrations and mobile delivery considerations for maps, Firebase, voice, and notification tooling.",
      ],
      systemThinking:
        "The concept requires a decision layer that combines route state, prompt eligibility, confidence thresholds, and explicit user control.",
      outcomes: [
        "Created a coherent product direction for a voice-first mobility assistant.",
        "Established UX and technical building blocks for future validation.",
      ],
      lessons: [
        "An intelligent assistant earns trust by being selective, transparent, and easy to override.",
      ],
      gallery: [
        {
          src: "/images/projects/pam-ai/cover.svg",
          alt: "PAM AI voice navigation product screens",
        },
      ],
    },
  },
  {
    slug: "pendulum-school",
    title: "Pendulum School of Innovation — Learning Product Ecosystem",
    shortTitle: "Pendulum School of Innovation",
    role: "Chief Product Officer / Product Strategy Lead",
    description:
      "A cohort-based learning ecosystem built around a curriculum corpus independently authored by Williams, spanning UX, Interaction Design, Product Management, research, and testing pathways, plus the digital learning platform and mentor/operator workflows he helped shape.",
    ownership: [
      "Product strategy",
      "Learning experience design",
      "Mentor and admin workflows",
      "Dashboard UX",
      "Product delivery direction",
    ],
    image: "/images/projects/pendulum-school/cover.svg",
    imageAlt: "Pendulum School of Innovation learning product interface",
    cta: "View Case Study",
    externalLink: {
      href: "https://pendulumsi.com",
      label: "Visit live site",
    },
    caseStudy: {
      status: "Live public platform - product screen replacements in progress",
      sections: [
        {
          title: "Curriculum architecture",
          content:
            "Williams independently authored the curriculum corpus, which covers progressive learning pathways: Elementary UX (foundations, problem-solving, design frameworks, research), Advanced UX (stakeholder management, prioritization, inclusive design), Professional UX (practice, presentation, leadership), Interaction Design, Product Management, Product/UX Research, Product/UX Testing, and Free Elementary. The archive shows conceptual instruction, curated resources, applied exercises, progressive complexity, a points-based assessment structure, and interval-locking progression rules.",
        },
        {
          title: "Authorship and intellectual property",
          content:
            "Williams independently authored all curriculum materials in the supplied archive; no other person authored them. The curriculum documents identify Pendulum School of Innovation as the owner of the curriculum intellectual property. The portfolio distinguishes authorship (Williams) from institutional ownership (PSI) and product contribution (the learning platform and experience). Proprietary lessons, templates, and substantial curriculum text are not reproduced in this case study.",
        },
      ],
      context:
        "Pendulum School of Innovation positions design education around its Zirax 1.0 curriculum: a guided, cohort-based pathway built on critical thinking, planning, specialization, mentorship from field practitioners, technical advising, and job guidance. The product opportunity was to turn that educational promise into a coherent digital experience from application through learning delivery and mentor support.",
      problem:
        "PSI identifies three gaps in technology education: learners entering work without professional readiness, weak design-to-development alignment, and difficulty developing self-directed learning habits. A public enrollment site alone cannot solve those gaps; delivery needs a Learning Management System (LMS) and mentor workflow that make curriculum progress, feedback, intervention, and next steps visible.",
      role:
        "As Chief Product Officer / Product Strategy Lead, I independently authored the PSI curriculum corpus (Elementary, Advanced, and Professional UX; Interaction Design; Product Management; Product/UX Research; Product/UX Testing; and Free Elementary) and shaped the product direction across the public school experience, cohort onboarding, LMS learning journeys, mentor dashboard workflows, and the operational view needed to support learners through specialization and career readiness. The curriculum documents identify Pendulum School of Innovation as the intellectual-property owner; Williams is the curriculum author, not the IP owner.",
      constraints: [
        "Supporting learners at different stages, including specialization paths for more experienced designers.",
        "Turning mentorship and technical advising into consistent, trackable delivery workflows.",
        "Connecting applications, cohort participation, payments, coursework, and support without fragmenting the learner experience.",
        "Keeping progress evidence meaningful for students and actionable for mentors and operators.",
      ],
      decisions: [
        {
          title: "Treat the LMS as a guided pathway",
          detail:
            "The learner experience is framed around active modules, milestones, assignments, feedback, and specialization rather than an unstructured content library, supporting PSI's focus on work-ready capability.",
        },
        {
          title: "Make mentorship operational",
          detail:
            "A dedicated mentor dashboard prioritizes pending reviews, learner risk signals, feedback cycles, and upcoming sessions so practitioner support can scale beyond ad hoc conversations.",
        },
        {
          title: "Link learning to career momentum",
          detail:
            "Technical advising, portfolio evidence, and job guidance are treated as part of the journey, aligning delivery with PSI's stated goal of preparing learners for professional work.",
        },
        {
          title: "Give operators cohort visibility",
          detail:
            "An operations layer brings enrollment, payment state, participation, mentor allocation, and completion signals into one view for running successive cohorts reliably.",
        },
      ],
      execution: [
        "Defined the experience architecture spanning public discovery, application, cohort entry, learning delivery, mentorship, and support.",
        "Translated the Zirax curriculum positioning into learner-facing LMS concepts for modules, assignments, progress evidence, and feedback.",
        "Directed dashboard concepts for mentor intervention and cohort-level operational oversight.",
        "Structured product surfaces around roles: prospective learner, enrolled student, mentor, technical advisor, and platform operator.",
      ],
      systemThinking:
        "This is not simply a course catalogue. It is a learning delivery system: an application creates a cohort relationship; curriculum activity produces evidence; evidence triggers mentor feedback and technical guidance; those interventions influence readiness, specialization, and progression. The LMS, mentor dashboard, and operations view form the feedback loop that lets the educational model remain personal while becoming repeatable.",
      outcomes: [
        "Established a live public platform communicating PSI's curriculum, cohort enrollment, mentorship, specialization, and learner benefits.",
        "Defined the multi-sided product model required to extend the public offering into learner, mentor, and operational experiences.",
        "Created a cohesive product direction connecting work-ready learning goals to delivery workflows and progress visibility.",
      ],
      lessons: [
        "In education products, curriculum positioning is only credible when delivery surfaces show learners what progress looks like.",
        "Mentorship becomes more scalable when review queues, intervention signals, and feedback history are intentionally designed.",
        "A cohort product needs operational visibility from application through learning support, not only polished acquisition pages.",
      ],
      gallery: [
        {
          src: "/images/projects/pendulum-school/lms-dashboard.svg",
          alt: "Pendulum School of Innovation learner LMS dashboard concept",
        },
        {
          src: "/images/projects/pendulum-school/mentor-dashboard.svg",
          alt: "Pendulum School of Innovation mentor dashboard concept",
        },
        {
          src: "/images/projects/pendulum-school/cover.svg",
          alt: "Pendulum School of Innovation cohort operations dashboard concept",
        },
      ],
    },
  },
  {
    slug: "springboard-mentorship",
    title: "Springboard — Global UX/Product Mentorship",
    shortTitle: "Springboard Mentorship",
    role: "UX Design Mentor",
    description:
      "Mentored global UX/UI students across product thinking, UX design, research interpretation, portfolio strategy, and career readiness.",
    ownership: [
      "Product thinking coaching",
      "Research interpretation",
      "Portfolio direction",
      "Career readiness",
      "Global remote mentorship",
    ],
    impact: [
      "900+ mentorship sessions",
      "Supported designers transitioning into product and design roles",
      "Global remote mentorship experience",
    ],
    image: "/images/projects/springboard-mentorship/cover.svg",
    imageAlt: "Springboard mentorship experience overview",
    cta: "View Experience",
    externalLink: {
      href: "https://www.springboard.com/",
      label: "Visit Springboard",
    },
    caseStudy: {
      status: "Experience overview",
      context:
        "Mentorship is a practical product leadership laboratory: diagnose ambiguous problems, communicate decisions clearly, and move people toward stronger outcomes.",
      problem:
        "Aspiring designers often need help connecting research, product reasoning, execution quality, and career narrative into credible work.",
      role:
        "I mentored global UX/UI students through project decisions, feedback cycles, portfolio framing, and readiness for product and design careers.",
      constraints: [
        "Different learner contexts, time zones, and confidence levels.",
        "Balancing immediate feedback with durable independent reasoning.",
      ],
      decisions: [
        {
          title: "Coach reasoning, not decoration",
          detail:
            "Sessions concentrated on decisions, evidence, flows, and communication before visual polish.",
        },
      ],
      execution: [
        "Delivered more than 900 remote mentorship sessions.",
        "Reviewed research interpretation, interaction decisions, case studies, and portfolio strategy.",
      ],
      systemThinking:
        "Repeated mentorship patterns clarify what makes product thinking legible: problem framing, trade-offs, decisions, and outcomes.",
      outcomes: [
        "Completed 900+ global mentorship sessions.",
        "Supported student transitions into product and design opportunities.",
      ],
      lessons: [
        "The ability to make product judgment teachable is a powerful cross-functional leadership skill.",
      ],
      gallery: [
        {
          src: "/images/projects/springboard-mentorship/cover.svg",
          alt: "Springboard mentorship experience overview",
        },
      ],
    },
  },
];

export const metrics = [
  { value: "900+", label: "Mentorship sessions" },
  { value: "₦10M", label: "Early capital raised" },
  { value: "Live", label: "Abuja beta launched" },
  { value: "4 sectors", label: "E-commerce, AI, healthtech, education" },
  { value: "3-sided", label: "Shopper, retailer and admin systems" },
  { value: "Global", label: "Remote collaboration experience" },
];
