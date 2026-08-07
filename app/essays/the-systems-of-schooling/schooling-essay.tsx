"use client";

import {
    ArrowRight,
    BarChart3,
    Check,
    ChevronDown,
    Copy,
    Link2,
    Share2,
    Sparkles,
    ThumbsUp,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const sections = [
    { id: "overview", label: "Overview" },
    { id: "into", label: "Into" },
    { id: "across", label: "Across" },
    { id: "beyond", label: "Beyond" },
    { id: "pipeline", label: "The Pipeline" },
];

const stageCards = [
    {
        title: "Into — Orientation",
        copy:
            "The point of entry is not just admission. It is understanding the direction before the journey begins.",
    },
    {
        title: "Across — Development",
        copy:
            "Education should expand the person, not only the syllabus. Development should build range as well as depth.",
    },
    {
        title: "Beyond — Transition",
        copy:
            "The real test is not graduation. It is whether the person can move from education into a meaningful destination.",
    },
];

const developmentSkills = [
    "How business works",
    "How people behave",
    "How to communicate",
    "How to build",
    "How to collaborate",
    "How to think beyond a single discipline",
];

const articleSlug = "the-systems-of-schooling";

type ArticleEvent =
    | "view"
    | "scroll_25"
    | "scroll_50"
    | "scroll_75"
    | "complete"
    | "quote_copied"
    | "article_shared"
    | "post_clicked"
    | "reaction";

type Reaction = "sharp_insight" | "made_me_think";

type EngagementStats = {
    configured: boolean;
    views: number;
    completions: number;
    shares: number;
    quoteCopies: number;
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
    const payload = JSON.stringify({ event, reaction, articleSlug, visitorId: getVisitorId() });

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
        body: JSON.stringify({ event, reaction, articleSlug, visitorId: getVisitorId() }),
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
                title: "The Systems of Schooling",
                text: "Schooling should be a process of direction, development, and transition.",
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
                href="https://twitter.com/intent/tweet?text=Schooling%20should%20be%20a%20process%20of%20direction%2C%20development%2C%20and%20transition.%20%23IntoAcrossBeyond&url=https%3A%2F%2Fwilliamspraise.com%2Fessays%2Fthe-systems-of-schooling"
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
                const response = await fetch(`/api/article-engagement?articleSlug=${encodeURIComponent(articleSlug)}`, { cache: "no-store" });
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
                const saved = window.localStorage.getItem(`wp-article-reaction:${articleSlug}`);

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
                sharpInsight: reaction === "sharp_insight" ? current.reactions.sharpInsight + 1 : current.reactions.sharpInsight,
                madeMeThink: reaction === "made_me_think" ? current.reactions.madeMeThink + 1 : current.reactions.madeMeThink,
            },
        }));

        try {
            window.localStorage.setItem(`wp-article-reaction:${articleSlug}`, reaction);
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
                    These signals tell me whether this kind of systems writing is worth expanding into
                    more essays and design notes.
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

function Expandable({ title, children }: { title: string; children: ReactNode }) {
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

export default function SchoolingEssay() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        restDelta: 0.001,
    });
    const readTime = useMemo(() => "8 min read", []);
    const quote =
        "Education should not only produce knowledge. It should produce people who know what to do with what they know.";

    useEffect(() => {
        const observers = sections.map((section) => {
            const element = document.getElementById(section.id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(section.id);
                },
                { rootMargin: "-28% 0px -58% 0px", threshold: 0.01 },
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
                            <p className="eyebrow">Essay / Systems Thinking</p>
                            <h1>The Systems of Schooling: Into, Across and Beyond</h1>
                            <p className="article-subheadline">
                                Schooling should be a process of direction, development, and transition, not a
                                ceremony that ends in a certificate.
                            </p>
                            <div className="article-meta-row">
                                <span>{readTime}</span>
                                <span>Education</span>
                                <span>Career development</span>
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
                                    <linearGradient id="schoolingGradient" x1="0" x2="1" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#8fc6ff" />
                                        <stop offset="55%" stopColor="#21c28e" />
                                        <stop offset="100%" stopColor="#f5b85b" />
                                    </linearGradient>
                                </defs>
                                <circle cx="260" cy="260" r="206" fill="none" stroke="url(#schoolingGradient)" strokeWidth="2" />
                                <rect x="106" y="122" width="308" height="276" rx="36" fill="none" stroke="currentColor" strokeOpacity="0.16" strokeWidth="2" />
                                <path d="M176 338 C212 296 248 262 295 244 C330 230 353 224 406 194" fill="none" stroke="url(#schoolingGradient)" strokeLinecap="round" strokeWidth="10" />
                                <path d="M176 338 L176 286" stroke="currentColor" strokeOpacity="0.26" strokeWidth="10" strokeLinecap="round" />
                                <path d="M296 244 L296 204" stroke="currentColor" strokeOpacity="0.26" strokeWidth="10" strokeLinecap="round" />
                                <path d="M406 194 L406 158" stroke="currentColor" strokeOpacity="0.26" strokeWidth="10" strokeLinecap="round" />
                                <circle cx="176" cy="286" r="24" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="10" />
                                <path d="M164 286 H188" stroke="currentColor" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" />
                                <path d="M176 274 V298" stroke="currentColor" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" />
                                <rect x="248" y="170" width="96" height="86" rx="20" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="10" />
                                <path d="M268 198 H324" stroke="currentColor" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
                                <path d="M268 218 H306" stroke="currentColor" strokeOpacity="0.4" strokeWidth="6" strokeLinecap="round" />
                                <path d="M268 238 H292" stroke="currentColor" strokeOpacity="0.3" strokeWidth="6" strokeLinecap="round" />
                                <circle cx="406" cy="158" r="24" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="10" />
                                <path d="M392 158 H420" stroke="currentColor" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" />
                                <path d="M406 144 V172" stroke="currentColor" strokeOpacity="0.5" strokeWidth="5" strokeLinecap="round" />
                                <circle cx="176" cy="338" r="10" fill="#8fc6ff" />
                                <circle cx="296" cy="244" r="10" fill="#21c28e" />
                                <circle cx="406" cy="194" r="10" fill="#f5b85b" />
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
                        <section id="overview" className="article-section insight-briefing-section">
                            <p className="eyebrow">Before you read</p>
                            <h2>Three stages that change the meaning of school.</h2>
                            <p className="article-lead">
                                Schooling is often treated as a destination. You enter school, you study, you pass
                                your examinations, you graduate, and you receive a certificate. And somehow, we
                                assume the process has worked.
                            </p>
                            <p>
                                But I think we have misunderstood what schooling is supposed to do. Schooling is a
                                process of becoming. It should not simply move a person toward a certificate. It
                                should move a person toward a destination. And when I think about schooling as a
                                system, I see three major stages: Into, Across, and Beyond.
                            </p>
                            <div className="insight-briefing-grid">
                                {stageCards.map((card, index) => (
                                    <motion.article
                                        key={card.title}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.28 }}
                                        transition={{ duration: 0.42, delay: index * 0.05 }}
                                    >
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <h3>{card.title}</h3>
                                        <p>{card.copy}</p>
                                    </motion.article>
                                ))}
                            </div>
                        </section>

                        <section id="into" className="article-section">
                            <p className="eyebrow">Stage one</p>
                            <h2>Into — Orientation</h2>
                            <p>
                                The first stage is <strong>Into</strong>. Into is the process of understanding what
                                you are getting into. Before a person chooses a course, a school, or a field of
                                study, there should be some understanding of where that path can lead.
                            </p>
                            <p>
                                What am I interested in? What am I naturally inclined toward? What problems do I
                                want to solve? What kind of person do I want to become? What opportunities exist
                                within this field? And most importantly: does this path align with my destination?
                            </p>
                            <p>
                                This is where orientation matters. Because choosing a course simply because it is
                                popular, because your parents selected it, because your friends are doing it, or
                                because you heard it pays well does not necessarily mean you have chosen a path.
                                You may have simply chosen an entry point.
                            </p>
                            <p>
                                Into is therefore not just admission into school. It is orientation into a
                                possibility. It is understanding the direction before beginning the journey.
                            </p>
                            <div className="callout-grid">
                                <div className="article-callout">
                                    <Sparkles size={20} />
                                    <h3>Choosing a path is not the same as choosing an entry point.</h3>
                                    <p>
                                        A course can be an entry point without being a real direction. Orientation
                                        is what makes the difference.
                                    </p>
                                </div>
                                <div className="article-callout">
                                    <ArrowRight size={20} />
                                    <h3>Direction matters before momentum.</h3>
                                    <p>
                                        A person should understand the destination before they begin running toward
                                        the next stage of life.
                                    </p>
                                </div>
                            </div>
                            <Expandable title="The right questions before choosing a path">
                                <ul className="builder-list">
                                    <li>What am I interested in?</li>
                                    <li>What am I naturally inclined toward?</li>
                                    <li>What problems do I want to solve?</li>
                                    <li>What kind of person do I want to become?</li>
                                    <li>What opportunities exist within this field?</li>
                                    <li>Does this path align with my destination?</li>
                                </ul>
                            </Expandable>
                        </section>

                        <section id="across" className="article-section">
                            <p className="eyebrow">Stage two</p>
                            <h2>Across — Development</h2>
                            <p>
                                Then comes <strong>Across</strong>. This is the stage where the person develops.
                                And I think this is where schooling is often reduced too much to the curriculum.
                            </p>
                            <p>
                                A student studies their course. They attend classes. They write examinations.
                                They complete assignments. But development is bigger than the course itself. Across
                                is what happens to the person while they are moving through education.
                            </p>
                            <p>
                                What skills are they developing? Who are they meeting? What relationships are they
                                building? What environments are they being exposed to? What problems are they
                                learning to solve? What technologies are they learning? What perspectives are they
                                gaining? Can they communicate? Can they collaborate? Can they think critically? Can
                                they learn something outside their immediate discipline? Can they take what they know
                                and apply it somewhere else?
                            </p>
                            <p>
                                This is why I think learning should become increasingly universal. If you are
                                studying technology, learn technology. But also learn how businesses work. Learn how
                                people behave. Learn how to communicate. Learn how to build. Learn how to sell.
                                Learn how to collaborate. Learn how to understand the world your technology exists
                                within.
                            </p>
                            <p>
                                Your discipline may give you depth. But your development across that discipline gives
                                you range. And that range matters because the world does not operate in isolated
                                academic departments. Real problems cross disciplines. Real careers cross
                                disciplines. Real opportunities cross disciplines.
                            </p>
                            <p>
                                So Across is not simply about surviving school. It is about using the period of
                                schooling to develop the person who will eventually leave it.
                            </p>
                            <div className="lesson-grid">
                                {developmentSkills.map((skill, index) => (
                                    <motion.article
                                        key={skill}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.28 }}
                                        transition={{ duration: 0.4, delay: index * 0.04 }}
                                    >
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <h3>{skill}</h3>
                                        <p>Useful capabilities that make education more transferable into real life.</p>
                                    </motion.article>
                                ))}
                            </div>
                            <Expandable title="A more complete view of learning">
                                <p>
                                    A student studying technology should also understand how markets work, how
                                    people behave, how ideas spread, and how work actually gets done. Depth alone
                                    is not enough. Range is what makes the person durable.
                                </p>
                            </Expandable>
                        </section>

                        <section id="beyond" className="article-section">
                            <p className="eyebrow">Stage three</p>
                            <h2>Beyond — Transition</h2>
                            <p>
                                Then there is <strong>Beyond</strong>. And I think this is where the schooling
                                system becomes most disconnected from reality. Because eventually someone asks:
                                what next?
                            </p>
                            <p>
                                And for many people, that question only appears after graduation. That is a
                                problem. Because Beyond should not begin when school ends. It should have been
                                forming while school was happening. Beyond is the transition between what you have
                                developed and where you are going.
                            </p>
                            <p>
                                What does this education connect me to? What am I becoming? Am I becoming a
                                founder? An employee? A researcher? A specialist? A product builder? A consultant?
                                An entrepreneur? A creator? What are the pathways available to me? What
                                experiences do I need? Who do I need to know? What skills am I missing? What
                                should I start building now? What does the transition from education into my
                                intended destination actually look like?
                            </p>
                            <p>
                                These are Beyond questions. And they are important because education without a
                                transition pathway can leave a person with knowledge but no direction. A
                                certificate can prove that you completed a process. It does not necessarily prove
                                that you know where the process was supposed to take you.
                            </p>
                            <div className="reflection-card">
                                <p>
                                    A certificate can prove that a process was completed. It does not automatically
                                    prove that the person knows what the process was meant to connect them to.
                                </p>
                            </div>
                            <div className="callout-grid">
                                <div className="article-callout">
                                    <Sparkles size={20} />
                                    <h3>What pathways are available?</h3>
                                    <p>
                                        Founder, employee, researcher, specialist, creator, consultant, operator:
                                        the destination changes the shape of the journey.
                                    </p>
                                </div>
                                <div className="article-callout">
                                    <ArrowRight size={20} />
                                    <h3>What should be built now?</h3>
                                    <p>
                                        The transition stage is where a person begins to shape evidence, relationships,
                                        and experience before the institution is gone.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="pipeline" className="article-section reflection-section">
                            <p className="eyebrow">The pipeline</p>
                            <h2>Into → Across → Beyond</h2>
                            <p>
                                This is why I think about schooling as Into → Across → Beyond. Into is orientation.
                                It answers: what am I getting into, and where could this take me? Across is
                                development. It answers: who am I becoming while I am here? Beyond is transition.
                                It answers: where does everything I have developed connect me to next?
                            </p>
                            <p>
                                And the three stages should not operate independently. They should inform one
                                another. Your destination should influence your orientation. Your orientation should
                                influence your development. Your development should prepare you for your
                                transition. And your understanding of the destination can even cause you to revisit
                                the earlier stages.
                            </p>
                            <p>
                                You may discover that the course you chose is no longer aligned with where you want
                                to go. You may discover a skill you need that your curriculum does not teach. You
                                may discover an industry you never knew existed. You may discover that becoming a
                                founder requires a completely different set of capabilities from becoming an
                                employee. That is not failure. That is the system working.
                            </p>
                            <p>
                                Because education should not simply produce people who know more. It should produce
                                people who know what to do with what they know. And perhaps that is the distinction
                                we have missed. We have become very good at getting people Into school. We have
                                become reasonably good at moving people Across school. But we have not done enough
                                to help people move Beyond school.
                            </p>
                            <p>
                                And when Beyond is missing, people can spend years being educated only to graduate
                                and begin asking for the first time: what am I supposed to do with all of this?
                                That is not a problem with the intelligence of the individual. It is a problem with
                                the pipeline.
                            </p>
                            <p>
                                Schooling is a process. Not a destination. And perhaps the question we should ask is
                                not simply: did this person finish school? But: did this person move Into the right
                                direction, develop Across the journey, and transition Beyond it toward a meaningful
                                destination?
                            </p>
                            <blockquote className="pull-quote">
                                <p>{quote}</p>
                                <CopyQuoteButton quote={quote} onTrack={trackArticleEvent} />
                            </blockquote>
                            <Expandable title="A sharper way to think about education">
                                <p>
                                    Education should not only increase knowledge. It should increase judgment,
                                    direction, and the ability to turn insight into action. That is the real work
                                    of schooling.
                                </p>
                            </Expandable>
                            <Link className="article-inline-link" href="/frameworks" onClick={() => trackArticleEvent("post_clicked")}>
                                Explore the frameworks behind this way of thinking <ArrowRight size={16} />
                            </Link>
                            <ArticleEngagement />
                        </section>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    );
}
