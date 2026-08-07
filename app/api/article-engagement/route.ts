import { NextResponse } from "next/server";

const defaultArticleSlug = "why-america-became-rich";

function getRedisKeys(articleSlug: string) {
  return {
    metricsKey: `article:${articleSlug}:metrics`,
    uniquesKey: `article:${articleSlug}:uniques`,
  };
}

const allowedEvents = new Set([
  "view",
  "scroll_25",
  "scroll_50",
  "scroll_75",
  "complete",
  "quote_copied",
  "article_shared",
  "post_clicked",
  "reaction",
  "shoppergetit_clicked",
]);

const allowedReactions = new Set(["sharp_insight", "made_me_think"]);

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

function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return { token, url };
}

function emptyStats(configured = false): EngagementStats {
  return {
    configured,
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
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseMetricMap(value: unknown): Record<string, number> {
  if (!Array.isArray(value)) {
    return {};
  }

  const metrics: Record<string, number> = {};
  for (let index = 0; index < value.length; index += 2) {
    const key = value[index];
    const count = value[index + 1];

    if (typeof key === "string") {
      metrics[key] = Number(count) || 0;
    }
  }

  return metrics;
}

function statsFromMetrics(metrics: Record<string, number>): EngagementStats {
  return {
    configured: true,
    views: metrics.views || 0,
    completions: metrics.completions || 0,
    shares: metrics.shares || 0,
    quoteCopies: metrics.quoteCopies || 0,
    shoppergetitClicks: metrics.shoppergetitClicks || 0,
    reactions: {
      sharpInsight: metrics.reaction_sharp_insight || 0,
      madeMeThink: metrics.reaction_made_me_think || 0,
    },
  };
}

async function redisPipeline(commands: unknown[][]) {
  const config = redisConfig();

  if (!config) {
    return null;
  }

  const response = await fetch(`${config.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to update engagement metrics.");
  }

  return response.json() as Promise<Array<{ result: unknown }>>;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const articleSlug = readString(searchParams.get("articleSlug")) || defaultArticleSlug;
  const { metricsKey } = getRedisKeys(articleSlug);

  if (!redisConfig()) {
    return NextResponse.json(emptyStats(false));
  }

  try {
    const result = await redisPipeline([["HGETALL", metricsKey]]);
    const metrics = parseMetricMap(result?.[0]?.result);

    return NextResponse.json(statsFromMetrics(metrics));
  } catch {
    return NextResponse.json(emptyStats(true), { status: 503 });
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const event = readString(body.event);
  const visitorId = readString(body.visitorId).slice(0, 80);
  const reaction = readString(body.reaction);
  const articleSlug = readString(body.articleSlug) || defaultArticleSlug;
  const { metricsKey, uniquesKey } = getRedisKeys(articleSlug);

  if (!allowedEvents.has(event)) {
    return NextResponse.json({ error: "Invalid event." }, { status: 400 });
  }

  if (event === "reaction" && !allowedReactions.has(reaction)) {
    return NextResponse.json({ error: "Invalid reaction." }, { status: 400 });
  }

  if (!redisConfig()) {
    return NextResponse.json(emptyStats(false));
  }

  const increments: unknown[][] = [["HINCRBY", metricsKey, `event_${event}`, 1]];

  if (event === "view") increments.push(["HINCRBY", metricsKey, "views", 1]);
  if (event === "complete") {
    increments.push(["HINCRBY", metricsKey, "completions", 1]);
  }
  if (event === "article_shared" || event === "post_clicked") {
    increments.push(["HINCRBY", metricsKey, "shares", 1]);
  }
  if (event === "quote_copied") {
    increments.push(["HINCRBY", metricsKey, "quoteCopies", 1]);
  }
  if (event === "shoppergetit_clicked") {
    increments.push(["HINCRBY", metricsKey, "shoppergetitClicks", 1]);
  }
  if (event === "reaction") {
    increments.push(["HINCRBY", metricsKey, `reaction_${reaction}`, 1]);
  }
  if (visitorId) {
    increments.push(["PFADD", uniquesKey, visitorId]);
  }

  if (increments.length === 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await redisPipeline(increments);
    const result = await redisPipeline([["HGETALL", metricsKey]]);
    const metrics = parseMetricMap(result?.[0]?.result);

    return NextResponse.json(statsFromMetrics(metrics));
  } catch {
    return NextResponse.json(
      { error: "Unable to save engagement event." },
      { status: 503 },
    );
  }
}
