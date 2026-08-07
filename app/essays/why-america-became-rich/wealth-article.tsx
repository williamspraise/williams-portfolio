"use client";

import {
  ArrowDown,
  ArrowRight,
  Banknote,
  BarChart3,
  Boxes,
  BrainCircuit,
  Check,
  ChevronDown,
  Copy,
  Factory,
  Globe2,
  Landmark,
  Link2,
  Network,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sections = [
  { id: "briefing", label: "Briefing" },
  { id: "timeline", label: "Timeline" },
  { id: "wealth-system", label: "Wealth System" },
  { id: "tech-export", label: "Tech Export" },
  { id: "nigeria", label: "Nigeria" },
  { id: "builders", label: "Builders" },
  { id: "shoppergetit", label: "Shoppergetit" },
  { id: "reflection", label: "Reflection" },
];

const articleSlug = "why-america-became-rich";

const timeline = [
  {
    era: "Native America",
    period: "Before 1600s",
    detail:
      "The continent already had civilizations, agriculture, trade routes, and land stewardship before European capital arrived.",
    icon: Globe2,
  },
  {
    era: "Colonial Capital",
    period: "1600s-1700s",
    detail:
      "Land, ports, extraction, slavery, and imperial finance became early engines of accumulation.",
    icon: Banknote,
  },
  {
    era: "Industrial Revolution",
    period: "1800s",
    detail:
      "Canals, railroads, factories, patents, energy, and banking turned resources into production capacity.",
    icon: Factory,
  },
  {
    era: "Manufacturing",
    period: "1890s-1950s",
    detail:
      "Mass production made America a factory power before software became a strategic asset.",
    icon: Boxes,
  },
  {
    era: "Financial Dominance",
    period: "1944 onward",
    detail:
      "The dollar-centered order made American capital cheaper, deeper, and more globally trusted.",
    icon: Landmark,
  },
  {
    era: "Silicon Valley",
    period: "1950s onward",
    detail:
      "Defense funding, universities, venture capital, chips, and software turned prior wealth into platforms.",
    icon: Network,
  },
  {
    era: "AI Era",
    period: "Now",
    detail:
      "Compute, data, cloud, chips, and talent are the new strategic layer on top of an older national machine.",
    icon: BrainCircuit,
  },
];

const briefingInsights = [
  {
    title: "Why Nigeria will not get Silicon Valley by imitation",
    copy: "Silicon Valley was not a hackathon that became a nation. It was the technology layer of a country that already had deep capital, military demand, research universities, energy, legal protection, and global markets.",
  },
  {
    title: "Why escapist spirituality weakens economic agency",
    copy: "The problem is not faith itself. The problem is when religion trains people to wait for intervention instead of building power grids, contracts, factories, logistics, schools, and competent institutions.",
  },
  {
    title: "Why startups keep struggling to scale",
    copy: "The 99-fail-1-win model needs abundant risk capital, reusable talent, strong infrastructure, and disciplined operators. Without those conditions, failure often destroys capacity instead of recycling it.",
  },
];

const wealthInputs = [
  {
    title: "Institutions",
    copy: "Property rights, enforceable contracts, courts, standards, and predictable policy reduce the cost of trust.",
    icon: ShieldCheck,
  },
  {
    title: "Capital",
    copy: "Savings, banks, public spending, venture funds, procurement, and patient risk money fund experiments before they look obvious.",
    icon: Banknote,
  },
  {
    title: "Production",
    copy: "Factories, logistics, energy, broadband, data centers, ports, and skilled labor turn ideas into reliable output.",
    icon: Factory,
  },
  {
    title: "Export Power",
    copy: "The country gets richer when the world sends money in for products, platforms, standards, and infrastructure.",
    icon: Globe2,
  },
];

const lessons = [
  {
    title: "Build systems before slogans",
    copy: "National wealth comes from repeated capability: power, roads, ports, broadband, courts, education, credit, and execution.",
  },
  {
    title: "Treat technology as infrastructure",
    copy: "Software should not only decorate broken systems. It should make commerce, logistics, identity, payments, and public services work better.",
  },
  {
    title: "Export more than raw talent",
    copy: "Nigeria cannot compound by only exporting people. It needs products, protocols, services, brands, and platforms that earn foreign revenue.",
  },
  {
    title: "Reward productive risk",
    copy: "A serious ecosystem lets builders fail, rejoin the talent pool, and try again with better knowledge.",
  },
  {
    title: "Make faith produce discipline",
    copy: "Prayer can shape courage and ethics, but roads, laws, capital allocation, and operating systems still have to be built by people.",
  },
];

const builderLessons = [
  "Build boring infrastructure that makes markets more efficient.",
  "Start local, but design the operating model so it can travel.",
  "Prefer tools that help merchants, schools, clinics, logistics firms, and governments become more productive.",
  "Measure value by durable cash flow, trust created, and dependence reduced.",
  "Create knowledge loops: every failed experiment should return talent, playbooks, and infrastructure to the ecosystem.",
];

const finalDeductions = [
  "America did not become rich because it built technology. It built technology at scale because it was already rich, organized, industrial, and globally positioned.",
  "Nigeria should not chase the Silicon Valley aesthetic first. It should build the underlying machine: power, law, logistics, credit, technical education, export pathways, and operating discipline.",
  "Faith becomes dangerous when it replaces responsibility. Prosperity still obeys material laws: bad policy, weak infrastructure, poor execution, and low trust produce poverty regardless of religious intensity.",
  "Local tech is useful, but export tech is how a country pulls new money into the economy. The real question is what Nigeria can build for the world from Nigeria.",
  "Startups need more than founders. They need capital depth, patient risk, talent recycling, infrastructure, and operators who can turn chaos into repeatable systems.",
  "Shoppergetit fits the thesis because commerce infrastructure helps markets become more coordinated, measurable, and productive.",
];

type ArticleEvent =
  | "view"
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "complete"
  | "quote_copied"
  | "article_shared"
  | "post_clicked"
  | "reaction"
  | "shoppergetit_clicked";

type Reaction = "sharp_insight" | "made_me_think";

type EngagementStats = {
  configured: boolean;
  views: number;
  completions: number;
  shares: number;
  quoteCopies: number;
  shoppergetitClicks: number;
  reactions: {
    sharpInsight: number;
    madeMeThink: number;
  };
};

const emptyEngagementStats: EngagementStats = {
  configured: false,
  views: 0,
  completions: 0,
  shares: 0,
  quoteCopies: 0,
  shoppergetitClicks: 0,
  reactions: {
    sharpInsight: 0,
    madeMeThink: 0,
  },
};

function getVisitorId() {
  const key = `wp-article-visitor-id:${articleSlug}`;

  try {
    const existing = window.localStorage.getItem(key);
    if (existing) return existing;

    const next =
      window.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(key, next);

    return next;
  } catch {
    return "";
  }
}

function trackArticleEvent(event: ArticleEvent, reaction?: Reaction) {
  const payload = JSON.stringify({
    event,
    reaction,
    articleSlug,
    visitorId: getVisitorId(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/article-engagement",
      new Blob([payload], { type: "application/json" }),
    );
    return;
  }

  void fetch("/api/article-engagement", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

async function postArticleEvent(event: ArticleEvent, reaction?: Reaction) {
  const response = await fetch("/api/article-engagement", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event,
      reaction,
      articleSlug,
      visitorId: getVisitorId(),
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to save engagement signal.");
  }

  return response.json() as Promise<EngagementStats>;
}

function formatCount(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`;
  }

  return String(value);
}

function CopyQuoteButton({
  quote,
  onTrack,
}: {
  quote: string;
  onTrack: (event: ArticleEvent) => void;
}) {
  const [copied, setCopied] = useState(false);

  async function copyQuote() {
    await navigator.clipboard.writeText(quote);
    onTrack("quote_copied");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button className="article-icon-button" type="button" onClick={copyQuote}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? "Copied" : "Copy quote"}</span>
    </button>
  );
}

function ShareControls({ onTrack }: { onTrack: (event: ArticleEvent) => void }) {
  const [copied, setCopied] = useState(false);

  async function shareArticle() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: "Why America Became Rich",
        text: "America's tech dominance was the reward, not the beginning.",
        url,
      });
      onTrack("article_shared");
      return;
    }

    await navigator.clipboard.writeText(url);
    onTrack("article_shared");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="article-share">
      <button className="article-icon-button" type="button" onClick={shareArticle}>
        {copied ? <Check size={16} /> : <Share2 size={16} />}
        <span>{copied ? "Link copied" : "Share"}</span>
      </button>
      <a
        className="article-icon-button"
        href="https://twitter.com/intent/tweet?text=America%20didn't%20become%20rich%20because%20it%20built%20technology.&url=https%3A%2F%2Fwilliamspraise.com%2Fessays%2Fwhy-america-became-rich"
        target="_blank"
        rel="noreferrer"
        onClick={() => onTrack("post_clicked")}
      >
        <Link2 size={16} />
        <span>Post</span>
      </a>
    </div>
  );
}

function ArticleEngagement() {
  const [stats, setStats] = useState<EngagementStats>(emptyEngagementStats);
  const [selectedReaction, setSelectedReaction] = useState<Reaction | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadStats() {
      try {
        const response = await fetch(`/api/article-engagement?articleSlug=${encodeURIComponent(articleSlug)}`, {
          cache: "no-store",
        });
        const nextStats = (await response.json()) as EngagementStats;

        if (mounted) {
          setStats(nextStats);
        }
      } catch {
        if (mounted) {
          setStats(emptyEngagementStats);
        }
      }
    }

    window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(
          `wp-article-reaction:${articleSlug}`,
        );

        if (saved === "sharp_insight" || saved === "made_me_think") {
          setSelectedReaction(saved);
        }
      } catch { }
    }, 0);

    void loadStats();

    return () => {
      mounted = false;
    };
  }, []);

  async function react(reaction: Reaction) {
    if (selectedReaction) return;

    setSelectedReaction(reaction);
    setStats((current) => ({
      ...current,
      reactions: {
        ...current.reactions,
        sharpInsight:
          reaction === "sharp_insight"
            ? current.reactions.sharpInsight + 1
            : current.reactions.sharpInsight,
        madeMeThink:
          reaction === "made_me_think"
            ? current.reactions.madeMeThink + 1
            : current.reactions.madeMeThink,
      },
    }));

    try {
      window.localStorage.setItem(
        `wp-article-reaction:${articleSlug}`,
        reaction,
      );
      const nextStats = await postArticleEvent("reaction", reaction);
      setStats(nextStats);
    } catch { }
  }

  const showCounts =
    stats.configured ||
    stats.reactions.sharpInsight > 0 ||
    stats.reactions.madeMeThink > 0 ||
    stats.shares > 0 ||
    stats.quoteCopies > 0;

  return (
    <div className="article-engagement-panel">
      <div>
        <p className="eyebrow">Signal back</p>
        <h3>Was this useful?</h3>
        <p>
          These signals tell me whether this kind of systems writing is worth
          expanding into more essays, diagrams, and founder notes.
        </p>
        <p className="reaction-helper">
          {selectedReaction
            ? "Your reaction is saved in this browser."
            : "Choose one reaction. It records once per browser."}
        </p>
      </div>

      <div className="reaction-actions" aria-label="Article reactions">
        <button
          className={selectedReaction === "sharp_insight" ? "active" : ""}
          type="button"
          aria-pressed={selectedReaction === "sharp_insight"}
          onClick={() => void react("sharp_insight")}
          disabled={Boolean(selectedReaction)}
        >
          <Sparkles size={17} />
          <span>Sharp insight</span>
          {showCounts && <strong>{formatCount(stats.reactions.sharpInsight)}</strong>}
        </button>
        <button
          className={selectedReaction === "made_me_think" ? "active" : ""}
          type="button"
          aria-pressed={selectedReaction === "made_me_think"}
          onClick={() => void react("made_me_think")}
          disabled={Boolean(selectedReaction)}
        >
          <ThumbsUp size={17} />
          <span>Made me think</span>
          {showCounts && <strong>{formatCount(stats.reactions.madeMeThink)}</strong>}
        </button>
      </div>

      <div className="engagement-metrics">
        <span>
          <Share2 size={15} />
          {formatCount(stats.shares)} share signals
        </span>
        <span>
          <Copy size={15} />
          {formatCount(stats.quoteCopies)} quote copies
        </span>
        <span>
          <BarChart3 size={15} />
          {stats.configured ? "Live metrics" : "Connect Redis for live counts"}
        </span>
      </div>
    </div>
  );
}

function Expandable({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="article-expandable">
      <summary>
        <span>{title}</span>
        <ChevronDown size={18} />
      </summary>
      <div>{children}</div>
    </details>
  );
}

function WealthDiagram() {
  const [active, setActive] = useState(0);
  const ActiveIcon = wealthInputs[active].icon;

  return (
    <div className="wealth-diagram">
      <div className="wealth-diagram-core">
        <motion.div
          className="wealth-pulse"
          animate={{ scale: [1, 1.08, 1], opacity: [0.42, 0.16, 0.42] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <ActiveIcon size={38} />
        <strong>{wealthInputs[active].title}</strong>
        <p>{wealthInputs[active].copy}</p>
      </div>

      <div className="wealth-node-grid">
        {wealthInputs.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              className={index === active ? "active" : ""}
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExportComparison() {
  const [mode, setMode] = useState<"local" | "export">("export");
  const isExport = mode === "export";

  return (
    <div className="export-comparison">
      <div className="segmented-control" aria-label="Technology model">
        <button
          className={!isExport ? "active" : ""}
          type="button"
          onClick={() => setMode("local")}
        >
          Local Tech
        </button>
        <button
          className={isExport ? "active" : ""}
          type="button"
          onClick={() => setMode("export")}
        >
          Export Tech
        </button>
      </div>

      <motion.div
        key={mode}
        className="comparison-stage"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <div className="market-box home">Home Market</div>
        <ArrowRight className="comparison-arrow" size={28} />
        <div className={isExport ? "market-box world active" : "market-box world"}>
          {isExport ? "World Market" : "Same Money"}
        </div>
      </motion.div>

      <div className="comparison-copy">
        <h3>{isExport ? "Foreign capital flows inward." : "Local capital circulates."}</h3>
        <p>
          {isExport
            ? "Export technology earns from outside the economy. It can turn a local team into a global revenue engine."
            : "Local-only technology can improve convenience, but it mostly moves existing national money from one pocket to another."}
        </p>
      </div>
    </div>
  );
}

function AnimatedTimeline() {
  return (
    <div className="article-timeline">
      {timeline.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.article
            className="timeline-item"
            key={item.era}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.46, delay: index * 0.04 }}
          >
            <div className="timeline-marker">
              <Icon size={18} />
            </div>
            <div>
              <span>{item.period}</span>
              <h3>{item.era}</h3>
              <p>{item.detail}</p>
            </div>
            {index < timeline.length - 1 && <ArrowDown className="timeline-down" size={18} />}
          </motion.article>
        );
      })}
    </div>
  );
}

export default function WealthArticle() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const readTime = useMemo(() => "16 min read", []);
  const quote =
    "Silicon Valley was not the beginning of American prosperity. It was what a wealthy, industrial, financial, military system could afford to build.";

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: "-28% 0px -58% 0px", threshold: 0.01 }
      );

      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    trackArticleEvent("view");

    const seenMilestones = new Set<number>();
    const unsubscribe = progress.on("change", (latest) => {
      const percent = Math.round(latest * 100);

      if (percent >= 25 && !seenMilestones.has(25)) {
        seenMilestones.add(25);
        trackArticleEvent("scroll_25");
      }
      if (percent >= 50 && !seenMilestones.has(50)) {
        seenMilestones.add(50);
        trackArticleEvent("scroll_50");
      }
      if (percent >= 75 && !seenMilestones.has(75)) {
        seenMilestones.add(75);
        trackArticleEvent("scroll_75");
      }
      if (percent >= 92 && !seenMilestones.has(92)) {
        seenMilestones.add(92);
        trackArticleEvent("complete");
      }
    });

    return unsubscribe;
  }, [progress]);

  return (
    <>
      <Navbar />
      <motion.div className="article-progress-bar" style={{ scaleX: progress }} />

      <main className="article-shell">
        <section className="article-hero">
          <div className="container article-hero-grid">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow">Research Essay / Systems Strategy</p>
              <h1>America Didn&apos;t Become Rich Because It Built Technology.</h1>
              <p className="article-subheadline">
                Silicon Valley was the reward, not the beginning.
              </p>
              <div className="article-meta-row">
                <span>{readTime}</span>
                <span>National wealth</span>
                <span>Nigeria & African builders</span>
              </div>
              <ShareControls onTrack={trackArticleEvent} />
            </motion.div>

            <motion.div
              className="hero-illustration"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 520 520" role="img">
                <defs>
                  <linearGradient id="wealthGradient" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#21c28e" />
                    <stop offset="58%" stopColor="#8fc6ff" />
                    <stop offset="100%" stopColor="#f5b85b" />
                  </linearGradient>
                </defs>
                <circle cx="260" cy="260" r="206" fill="none" stroke="url(#wealthGradient)" strokeWidth="2" />
                <circle cx="260" cy="260" r="142" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
                <path d="M108 318 C172 246 206 219 254 231 C306 244 325 173 406 142" fill="none" stroke="url(#wealthGradient)" strokeLinecap="round" strokeWidth="10" />
                <path d="M118 371 H402" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
                <path d="M150 371 V303 M222 371 V253 M294 371 V209 M366 371 V160" stroke="currentColor" strokeOpacity="0.36" strokeWidth="10" strokeLinecap="round" />
                <circle cx="406" cy="142" r="18" fill="#21c28e" />
                <circle cx="150" cy="303" r="10" fill="#f5b85b" />
                <circle cx="222" cy="253" r="10" fill="#8fc6ff" />
                <circle cx="294" cy="209" r="10" fill="#21c28e" />
              </svg>
            </motion.div>
          </div>
        </section>

        <div className="container article-layout">
          <aside className="article-nav" aria-label="Article progress navigation">
            <p>Article Map</p>
            {sections.map((section) => (
              <a
                className={activeSection === section.id ? "active" : ""}
                href={`#${section.id}`}
                key={section.id}
              >
                {section.label}
              </a>
            ))}
          </aside>

          <article className="article-content">
            <section id="briefing" className="article-section insight-briefing-section">
              <p className="eyebrow">Before you read</p>
              <h2>Three tensions to watch.</h2>
              <p className="article-lead">
                This essay is not only about America. It is about the hidden
                machinery behind prosperity, and why countries that copy the
                visible technology layer often miss the deeper operating system.
              </p>
              <div className="insight-briefing-grid">
                {briefingInsights.map((insight, index) => (
                  <motion.article
                    key={insight.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.42, delay: index * 0.05 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{insight.title}</h3>
                    <p>{insight.copy}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="timeline" className="article-section">
              <p className="eyebrow">The compounding ladder</p>
              <h2>America was already rich before the laptop arrived.</h2>
              <p className="article-lead">
                The common mistake is to start the story with Silicon Valley. But
                technology did not rescue America from poverty. It emerged from a
                country that had already accumulated land, capital, industrial
                capacity, military power, universities, research institutions,
                legal infrastructure, and a global financial position.
              </p>
              <AnimatedTimeline />
            </section>

            <section id="wealth-system" className="article-section">
              <p className="eyebrow">What actually creates national wealth?</p>
              <h2>Wealth is not a miracle. It is a machine.</h2>
              <p>
                A country becomes rich when it repeatedly converts resources into
                productive output, output into exports, exports into capital, and
                capital back into better institutions and infrastructure. The
                loop matters more than the slogan.
              </p>
              <WealthDiagram />
              <blockquote className="pull-quote">
                <p>{quote}</p>
                <CopyQuoteButton quote={quote} onTrack={trackArticleEvent} />
              </blockquote>

              <div className="callout-grid">
                <div className="article-callout">
                  <Sparkles size={20} />
                  <h3>The Silicon Valley lesson</h3>
                  <p>
                    The genius was not only startup culture. It was the full
                    stack: government demand, university research, defense
                    budgets, risk capital, talent migration, legal protection,
                    and global distribution.
                  </p>
                </div>
                <div className="article-callout">
                  <Rocket size={20} />
                  <h3>Failure was recycled</h3>
                  <p>
                    Many companies failed, but the money paid engineers, trained
                    founders, improved tools, and returned knowledge to the next
                    experiment.
                  </p>
                </div>
              </div>

              <Expandable title="Mermaid blueprint: the national wealth loop">
                <pre className="mermaid-block">{`flowchart LR
  Institutions --> Capital
  Capital --> Production
  Production --> Exports
  Exports --> Reserves
  Reserves --> Infrastructure
  Infrastructure --> Institutions
  Production --> Technology
  Technology --> Exports`}</pre>
              </Expandable>
            </section>

            <section id="tech-export" className="article-section">
              <p className="eyebrow">Local tech vs export tech</p>
              <h2>Local convenience is not the same as national wealth.</h2>
              <p>
                Local technology can be useful. It can reduce friction, improve
                service delivery, and create strong companies. But if every naira
                stays inside the same economy, the nation mostly rearranges its
                existing pool of money. Export technology changes the equation
                because foreign revenue enters the system.
              </p>
              <ExportComparison />

              <div className="mobile-table-wrap">
                <table className="article-table">
                  <thead>
                    <tr>
                      <th>Dimension</th>
                      <th>Local Tech</th>
                      <th>Export Tech</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Dimension">Capital flow</td>
                      <td data-label="Local Tech">Circulates domestic money</td>
                      <td data-label="Export Tech">Attracts external revenue</td>
                    </tr>
                    <tr>
                      <td data-label="Dimension">Scale ceiling</td>
                      <td data-label="Local Tech">Limited by local purchasing power</td>
                      <td data-label="Export Tech">Expanded by global demand</td>
                    </tr>
                    <tr>
                      <td data-label="Dimension">Strategic effect</td>
                      <td data-label="Local Tech">Improves convenience</td>
                      <td data-label="Export Tech">Creates dependence and leverage</td>
                    </tr>
                    <tr>
                      <td data-label="Dimension">Best use</td>
                      <td data-label="Local Tech">Fix critical domestic systems</td>
                      <td data-label="Export Tech">Turn local capability into global income</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="nigeria" className="article-section">
              <p className="eyebrow">Lessons for Nigeria</p>
              <h2>Nigeria should care because talent alone will not compound.</h2>
              <p>
                Nigeria has ambition, youth, creativity, faith, and pain. But
                national wealth is not created by emotion alone. It is created
                when a country becomes good at building systems that make work
                easier, trade cheaper, trust faster, and exports more valuable.
              </p>
              <div className="lesson-grid">
                {lessons.map((lesson, index) => (
                  <motion.article
                    key={lesson.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.28 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{lesson.title}</h3>
                    <p>{lesson.copy}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="builders" className="article-section">
              <p className="eyebrow">Lessons for African builders</p>
              <h2>Do not only build apps. Build leverage.</h2>
              <p>
                The next African technology wave should not be obsessed with
                looking like Silicon Valley. It should be obsessed with solving
                the hard economic problems that make African markets expensive:
                fragmented commerce, unreliable logistics, weak records, trust
                gaps, payment friction, and poor operational visibility.
              </p>
              <ul className="builder-list">
                {builderLessons.map((lesson) => (
                  <li key={lesson}>
                    <Check size={18} />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
              <Expandable title="A sharper founder question">
                <p>
                  Instead of asking, &quot;What app can I launch?&quot; ask,
                  &quot;What missing operating layer would make thousands of
                  businesses more productive if it existed?&quot;
                </p>
              </Expandable>
              <Link
                className="article-inline-link"
                href="/investment-philosophy"
                onClick={() => trackArticleEvent("post_clicked")}
              >
                Read the investment philosophy behind productive cycles{" "}
                <ArrowRight size={16} />
              </Link>
            </section>

            <section id="shoppergetit" className="article-section shoppergetit-panel">
              <p className="eyebrow">How Shoppergetit fits</p>
              <h2>Commerce infrastructure is nation-building at market level.</h2>
              <p>
                Shoppergetit matters because commerce is not only buying and
                selling. It is inventory, trust, discovery, fulfillment,
                payments, customer memory, vendor operations, and data. When
                those layers become easier, small businesses become more
                productive and local markets become more legible.
              </p>
              <div className="infrastructure-stack">
                {["Vendors", "Catalogs", "Orders", "Payments", "Fulfillment", "Data"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.04 }}
                    >
                      <Zap size={16} />
                      <span>{item}</span>
                    </motion.div>
                  )
                )}
              </div>
              <p className="highlight-insight">
                The long-term value is not another store. It is a commerce
                operating layer that can help informal markets behave more like
                coordinated infrastructure.
              </p>
              <Link
                className="article-inline-link"
                href="/work/shoppergetit"
                onClick={() => trackArticleEvent("shoppergetit_clicked")}
              >
                View the Shoppergetit case study <ArrowRight size={16} />
              </Link>
            </section>

            <section id="reflection" className="article-section reflection-section">
              <p className="eyebrow">Reflection</p>
              <h2>What am I building that the world needs?</h2>
              <p>
                The real question is not whether Nigeria can copy America. It
                cannot, and should not. The better question is whether Nigerian
                builders can learn the deeper principle: durable wealth comes
                from systems that make production easier, trust cheaper, and
                exports more valuable.
              </p>
              <div className="reflection-card">
                <p>
                  If the product only creates attention, it may fade. If it
                  creates infrastructure, it can compound.
                </p>
              </div>
              <div className="deduction-panel">
                <p className="eyebrow">For the skimmer</p>
                <h3>The article in six deductions</h3>
                <ol>
                  {finalDeductions.map((deduction) => (
                    <li key={deduction}>{deduction}</li>
                  ))}
                </ol>
              </div>
              <ArticleEngagement />
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
