const recipientEmail = "williamspraise01@gmail.com";
const defaultSender = "Williams Praise <onboarding@resend.dev>";

type SendAudienceEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendAudienceEmail({
  subject,
  text,
  replyTo,
}: SendAudienceEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // TODO: Configure RESEND_API_KEY in production, then optionally replace this
    // helper with the official Resend SDK if richer templates are needed.
    return {
      ok: false,
      error: "Email delivery is not configured yet.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || defaultSender,
        to: [recipientEmail],
        reply_to: replyTo,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected an audience submission.", response.status);

      return {
        ok: false,
        error: "Email delivery failed.",
      };
    }
  } catch (error) {
    console.error("Audience email delivery failed.", error);

    return {
      ok: false,
      error: "Email delivery failed.",
    };
  }

  return { ok: true };
}
