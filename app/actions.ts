"use server";

import { sendResendEmail } from "@/lib/resend";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export type MemorandumRequestState = InquiryFormState;

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
  const inquiryType = readField(formData, "inquiryType");
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

  const text = [
    "New portfolio inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Inquiry type: ${inquiryType || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const result = await sendResendEmail({
      from: process.env.CONTACT_FROM_EMAIL || defaultSender,
      to: [recipientEmail],
      replyTo: email,
      subject: `${inquiryType || "Website"} inquiry from ${name}`,
      text,
    });

    if (!result.ok) {
      return {
        status: "error",
        message: result.error.includes("configured")
          ? "Email delivery is being configured. Please email williamspraise01@gmail.com directly."
          : "The message could not be sent right now. Please email williamspraise01@gmail.com directly.",
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

export async function requestInvestmentMemorandum(
  _previousState: MemorandumRequestState,
  formData: FormData,
): Promise<MemorandumRequestState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const phone = readField(formData, "phone");
  const company = readField(formData, "company");
  const interest = readField(formData, "interest");
  const website = readField(formData, "website");

  if (website) {
    return {
      status: "success",
      message:
        "Thank you. I'll personally review your request before sharing the memorandum.",
    };
  }

  if (!name || !email || !phone || !interest) {
    return {
      status: "error",
      message:
        "Please provide your name, email, phone number, and reason for interest.",
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
    phone.length > 40 ||
    company.length > 120 ||
    interest.length > 1600
  ) {
    return {
      status: "error",
      message: "Please shorten your request and try again.",
    };
  }

  const text = [
    "Investment Memorandum Request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Why they are interested:",
    interest,
  ].join("\n");

  try {
    const result = await sendResendEmail({
      from: process.env.CONTACT_FROM_EMAIL || defaultSender,
      to: [recipientEmail],
      replyTo: email,
      subject: `Investment Memorandum Request from ${name}`,
      text,
    });

    if (!result.ok) {
      return {
        status: "error",
        message: result.error.includes("configured")
          ? "Email delivery is being configured. Please email williamspraise01@gmail.com directly."
          : "The request could not be sent right now. Please email williamspraise01@gmail.com directly.",
      };
    }
  } catch (error) {
    console.error("Investment memorandum request delivery failed.", error);

    return {
      status: "error",
      message:
        "The request could not be sent right now. Please email williamspraise01@gmail.com directly.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. I'll personally review your request before sharing the memorandum.",
  };
}
