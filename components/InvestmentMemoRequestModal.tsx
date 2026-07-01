"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ArrowUpRight, LockKeyhole, X } from "lucide-react";
import {
  requestInvestmentMemorandum,
  type MemorandumRequestState,
} from "@/app/actions";

const initialState: MemorandumRequestState = {
  status: "idle",
  message: "Requests are reviewed personally before the memorandum is shared.",
};

export default function InvestmentMemoRequestModal() {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    requestInvestmentMemorandum,
    initialState,
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <>
      <button
        className="button button-secondary memo-open-button"
        type="button"
        onClick={() => setOpen(true)}
      >
        Request the Investment Memorandum
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>

      {open && (
        <div className="memo-modal-backdrop" role="presentation">
          <div
            className="memo-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="memo-modal-title"
          >
            <button
              className="memo-modal-close"
              type="button"
              aria-label="Close memorandum request"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>

            <div className="memo-modal-intro">
              <span className="memo-modal-icon">
                <LockKeyhole size={20} />
              </span>
              <p className="eyebrow">Private Document</p>
              <h2 id="memo-modal-title">Request the Investment Memorandum</h2>
              <p>
                This is not a public download. Share enough context for a
                thoughtful review before the memorandum is released.
              </p>
            </div>

            {state.status === "success" ? (
              <div className="memo-success-panel" aria-live="polite">
                <p className="eyebrow">Request Received</p>
                <h3>Thank you.</h3>
                <p>
                  I&apos;ll personally review your request before sharing the
                  memorandum.
                </p>
              </div>
            ) : (
              <form
                action={formAction}
                className="memo-request-form"
                ref={formRef}
              >
                <div className="memo-form-grid">
                  <label>
                    Name
                    <input
                      type="text"
                      name="name"
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
                      autoComplete="email"
                      maxLength={254}
                      required
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      maxLength={40}
                      required
                    />
                  </label>
                  <label>
                    Company <span>Optional</span>
                    <input
                      type="text"
                      name="company"
                      autoComplete="organization"
                      maxLength={120}
                    />
                  </label>
                </div>
                <label>
                  Why are you interested?
                  <textarea name="interest" rows={5} maxLength={1600} required />
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
                <div className="memo-actions">
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={pending}
                  >
                    {pending ? "Submitting..." : "Submit Request"}
                    <ArrowUpRight size={17} />
                  </button>
                  <p
                    className={`form-note form-note-${state.status}`}
                    aria-live="polite"
                    role={state.status === "error" ? "alert" : undefined}
                  >
                    {state.message}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
