"use server";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const recipientEmail = "williamspraise01@gmail.com";
const defaultSender = "Williams Praise Portfolio <onboarding@resend.dev>";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, name: string) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

export async function sendInquiry(
  _previousState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const company = readField(formData, "company");
  const message = readField(formData, "message");
  const website = readField(formData, "website");

  // Silently accept bot submissions caught by the hidden field.
  if (website) {
    return {
      status: "success",
      message: "Thanks. Your inquiry has been sent.",
    };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please provide your name, email address, and message.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (
    name.length > 100 ||
    email.length > 254 ||
    company.length > 120 ||
    message.length > 3000
  ) {
    return {
      status: "error",
      message: "Your inquiry is too long. Please shorten it and try again.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email delivery is being configured. Please email williamspraise01@gmail.com directly.",
    };
  }

  const text = [
    "New portfolio inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

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
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected an inquiry submission.", response.status);

      return {
        status: "error",
        message:
          "The message could not be sent right now. Please email williamspraise01@gmail.com directly.",
      };
    }
  } catch (error) {
    console.error("Inquiry delivery failed.", error);

    return {
      status: "error",
      message:
        "The message could not be sent right now. Please email williamspraise01@gmail.com directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks. Your inquiry has been sent to Williams.",
  };
}
