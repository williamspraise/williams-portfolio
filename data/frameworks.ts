export type Framework = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  pillars: { title: string; description?: string }[];
  shortExplanation: string;
};

export const frameworks: Framework[] = [
  {
    slug: "systems-of-love",
    title: "Systems of Love",
    badge: "Human Alignment Framework",
    description:
      "A relationship framework exploring the mathematics, economics, civility, and psychology of love.",
    pillars: [
      {
        title: "The Mathematics of Love",
        description:
          "Love requires proportion, reciprocity, balance, and alignment. This pillar explores effort distribution, emotional imbalance, unequal investment, and the consequences of broken equations.",
      },
      {
        title: "The Economics of Love",
        description:
          "Love carries value, cost, sacrifice, investment, opportunity cost, and return. This pillar explores what people give, what they receive, what they lose, and whether the relationship creates or depletes value.",
      },
      {
        title: "The Civility of Love",
        description:
          "Love requires conduct. This pillar explores respect, restraint, communication, responsibility, boundaries, and how people behave when emotions are difficult.",
      },
      {
        title: "The Psychology of Love",
        description:
          "Love is shaped by perception, attachment, fear, memory, insecurity, desire, and emotional interpretation. This pillar explores why people love the way they love and how internal patterns affect relational outcomes.",
      },
    ],
    shortExplanation:
      "Systems of Love treats love not only as emotion, but as a system involving balance, value, conduct, perception, responsibility, and alignment.",
  },
  {
    slug: "iree",
    title: "IREE Phases",
    badge: "Human Potential Framework",
    description:
      "A framework for becoming extraordinary through Ideal, Reality, Exceptionality, and Extraordinary.",
    pillars: [
      {
        title: "Ideal",
        description: "The envisioned future, desired identity, or imagined outcome.",
      },
      {
        title: "Reality",
        description:
          "The actual conditions, constraints, patterns, resources, and truths that must be confronted.",
      },
      {
        title: "Exceptionality",
        description:
          "The disciplined execution, adaptation, learning, and resilience required to rise above ordinary performance.",
      },
      {
        title: "Extraordinary",
        description:
          "The visible, measurable result produced when ideal, reality, and exceptionality align.",
      },
    ],
    shortExplanation:
      "IREE maps the movement from imagined potential to measurable outcomes by confronting reality, building exceptionality, and producing extraordinary results.",
  },
  {
    slug: "systems-of-resolve",
    title: "Systems of Resolve",
    badge: "Clarity & Decision Framework",
    description:
      "A thinking model for reaching clarity through awareness, context, pattern recognition, diagnosis, and decision.",
    pillars: [
      {
        title: "Awareness",
        description: "Identifying what requires attention or repair.",
      },
      {
        title: "Context",
        description: "Understanding the full map of the situation before judging it.",
      },
      {
        title: "Pattern Recognition",
        description: "Noticing repeated signals, behaviors, or outcomes.",
      },
      {
        title: "Diagnosis",
        description:
          "Identifying what helps, harms, creates confusion, or produces clarity.",
      },
      {
        title: "Decision",
        description:
          "Choosing the responsible next action based on awareness, context, patterns, and diagnosis.",
      },
    ],
    shortExplanation:
      "Systems of Resolve helps people move from confusion to clarity by identifying the problem, understanding the context, recognizing patterns, diagnosing what helps or harms, and making a responsible decision.",
  },
];

export function getFramework(slug: string) {
  return frameworks.find((framework) => framework.slug === slug);
}
