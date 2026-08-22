"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { sendInquiry, type InquiryFormState } from "@/app/actions";

const initialState: InquiryFormState = {
  status: "idle",
  message: "Your message will be delivered directly to my inbox.",
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(sendInquiry, initialState);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      action={formAction}
      className="contact-form"
      aria-label="Contact Williams Praise"
      ref={formRef}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          maxLength={100}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>
      <label>
        Company
        <input
          type="text"
          name="company"
          placeholder="Company or team"
          autoComplete="organization"
          maxLength={120}
        />
      </label>
      <label>
        Inquiry type
        <select name="inquiryType" defaultValue="Capital partnership">
          <option>Capital partnership</option>
          <option>Advisory / consulting</option>
          <option>Recruiting / product opportunity</option>
          <option>Founder / venture partnership</option>
          <option>Speaking / collaboration</option>
          <option>General inquiry</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="What should Williams understand before responding?"
          maxLength={3000}
          required
        />
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <button className="button button-primary" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send Inquiry"}
        <ArrowUpRight size={17} />
      </button>
      <p
        className={`form-note form-note-${state.status}`}
        aria-live="polite"
        role={state.status === "error" ? "alert" : undefined}
      >
        {state.message}
      </p>
    </form>
  );
}
