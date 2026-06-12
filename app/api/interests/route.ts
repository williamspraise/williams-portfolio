import { NextResponse } from "next/server";
import { sendAudienceEmail } from "@/lib/resend";
import type { AudienceInterest } from "@/types/audience";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedInterests = new Set([
  "Systems Thinking",
  "Product & Startups",
  "Relationships & Love",
  "Human Behavior & Psychology",
  "Innovation & Technology",
  "Career & Growth",
  "Shoppergetit",
  "PSI",
  "Project Cyrus",
]);

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = payload as Record<string, unknown>;
  const interests = Array.isArray(body.interests)
    ? body.interests.filter(
        (interest): interest is string =>
          typeof interest === "string" && allowedInterests.has(interest),
      )
    : [];

  const audienceInterest: AudienceInterest = {
    email: readString(body.email).toLowerCase(),
    name: readString(body.name) || undefined,
    interests,
  };

  if (!audienceInterest.email || !emailPattern.test(audienceInterest.email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (
    audienceInterest.email.length > 254 ||
    (audienceInterest.name && audienceInterest.name.length > 100)
  ) {
    return NextResponse.json(
      { error: "Please shorten your details and try again." },
      { status: 400 },
    );
  }

  if (audienceInterest.interests.length === 0) {
    return NextResponse.json(
      { error: "Please choose at least one interest." },
      { status: 400 },
    );
  }

  const result = await sendAudienceEmail({
    subject: "New Systems Letter Subscriber",
    replyTo: audienceInterest.email,
    text: [
      "New audience interest signal",
      "",
      `Name: ${audienceInterest.name || "Not provided"}`,
      `Email: ${audienceInterest.email}`,
      `Selected Interests: ${audienceInterest.interests.join(", ")}`,
    ].join("\n"),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
