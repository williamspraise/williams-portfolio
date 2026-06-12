import { NextResponse } from "next/server";
import { sendAudienceEmail } from "@/lib/resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const name = readString(body.name);
  const email = readString(body.email).toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (name.length > 100 || email.length > 254) {
    return NextResponse.json(
      { error: "Please shorten your details and try again." },
      { status: 400 },
    );
  }

  const result = await sendAudienceEmail({
    subject: "New Systems Letter Subscriber",
    replyTo: email,
    text: [
      "New Systems Letter Subscriber",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email}`,
      "Selected Interests: Not provided yet",
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
