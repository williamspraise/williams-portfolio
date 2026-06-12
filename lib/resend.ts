const recipientEmail = "williamspraise01@gmail.com";
const defaultSender = "Williams Praise <onboarding@resend.dev>";

type ResendEmailInput = {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  text: string;
};

type ResendEmailResult =
  | {
      ok: true;
    }
  | {
      ok: false;
      error: string;
    };

type SendAudienceEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

async function readResendError(response: Response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json().catch(() => null);
  }

  return response.text().catch(() => "");
}

async function logResendRejection(context: string, response: Response) {
  const error = await readResendError(response);

  console.error(`${context}.`, {
    status: response.status,
    statusText: response.statusText,
    error,
  });
}

export async function sendResendEmail(
  input: ResendEmailInput,
): Promise<ResendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      error: "Email delivery is not configured yet.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: input.from,
      to: input.to,
      reply_to: input.replyTo,
      subject: input.subject,
      text: input.text,
    }),
  });

  if (!response.ok) {
    await logResendRejection("Resend rejected an email submission", response);

    return {
      ok: false,
      error: "Email delivery failed.",
    };
  }

  return { ok: true };
}

export async function sendAudienceEmail({
  subject,
  text,
  replyTo,
}: SendAudienceEmailInput) {
  try {
    return await sendResendEmail({
      from: process.env.CONTACT_FROM_EMAIL || defaultSender,
      to: [recipientEmail],
      replyTo,
      subject,
      text,
    });
  } catch (error) {
    console.error("Audience email delivery failed.", error);

    return {
      ok: false,
      error: "Email delivery failed.",
    };
  }

  return { ok: true };
}
