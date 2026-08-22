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
    slug: "shoppergetit",
    title: "Shoppergetit - Urban Retail Infrastructure",
    shortTitle: "Shoppergetit",
    role: "Co-Founder & Technical Product Lead",
    description: shoppergetitContent.shortPositioning,
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
        "Shoppergetit is urban retail infrastructure for predictable distribution. It connects local retailers, customer demand, and fulfilment through one intelligent commerce system.",
      problem:
        "Cities already have retailers, inventory, and demand. The problem is fragmentation: product information, demand capture, transaction flow, quality control, fulfilment, and customer engagement often sit in disconnected places.",
      role:
        "As Co-Founder and Technical Product Lead, I shaped the opportunity, product model, workflows, priorities, and release decisions. I translated marketplace requirements into experience and system logic, supervised technical execution, and aligned product decisions with capital and launch realities.",
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
      "A cohort-based learning ecosystem turning work-ready design education into structured coursework, specialization, mentorship, and career-facing support.",
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
      context:
        "Pendulum School of Innovation positions design education around its Zirax 1.0 curriculum: a guided, cohort-based pathway built on critical thinking, planning, specialization, mentorship from field practitioners, technical advising, and job guidance. The product opportunity was to turn that educational promise into a coherent digital experience from application through learning delivery and mentor support.",
      problem:
        "PSI identifies three gaps in technology education: learners entering work without professional readiness, weak design-to-development alignment, and difficulty developing self-directed learning habits. A public enrollment site alone cannot solve those gaps; delivery needs a Learning Management System (LMS) and mentor workflow that make curriculum progress, feedback, intervention, and next steps visible.",
      role:
        "As Chief Product Officer / Product Strategy Lead, I shaped the product direction across the public school experience, cohort onboarding, LMS learning journeys, mentor dashboard workflows, and the operational view needed to support learners through specialization and career readiness.",
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
