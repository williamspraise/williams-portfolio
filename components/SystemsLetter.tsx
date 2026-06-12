"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

const interestOptions = [
  "Systems Thinking",
  "Product & Startups",
  "Relationships & Love",
  "Human Behavior & Psychology",
  "Innovation & Technology",
  "Career & Growth",
  "Shoppergetit",
  "PSI",
  "Project Cyrus",
];

type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialLetterState: FormState = {
  status: "idle",
  message: "",
};

const initialInterestState: FormState = {
  status: "idle",
  message: "",
};

type SystemsLetterProps = {
  variant?: "section" | "modal";
};

export default function SystemsLetter({ variant = "section" }: SystemsLetterProps) {
  const titleId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [letterState, setLetterState] = useState(initialLetterState);
  const [interestState, setInterestState] = useState(initialInterestState);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [letterPending, setLetterPending] = useState(false);
  const [interestPending, setInterestPending] = useState(false);

  const selectedCount = selectedInterests.length;
  const interestsSummary = useMemo(
    () => `${selectedCount} selected`,
    [selectedCount],
  );

  function toggleInterest(interest: string) {
    setSelectedInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest],
    );
  }

  async function submitLetter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLetterPending(true);
    setLetterState(initialLetterState);

    try {
      const response = await fetch("/api/systems-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        setLetterState({
          status: "error",
          message: body.error || "The Systems Letter could not be joined yet.",
        });
        return;
      }

      setLetterState({
        status: "success",
        message:
          "You're in. Future essays, frameworks, and ideas will arrive here.",
      });
    } catch {
      setLetterState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLetterPending(false);
    }
  }

  async function submitInterests(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInterestPending(true);
    setInterestState(initialInterestState);

    try {
      const response = await fetch("/api/interests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interests: selectedInterests }),
      });
      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        setInterestState({
          status: "error",
          message: body.error || "Your interests could not be shared yet.",
        });
        return;
      }

      setInterestState({
        status: "success",
        message:
          "Thank you. Your signal helps shape future writing and projects.",
      });
    } catch {
      setInterestState({
        status: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setInterestPending(false);
    }
  }

  return (
    <section
      className={`systems-letter-section systems-letter-section-${variant}`}
      aria-labelledby={titleId}
    >
      <div className="container">
        <div className="systems-letter-card">
          <div className="systems-letter-primary">
            <div className="systems-letter-intro">
              <p className="eyebrow">Audience</p>
              <h2 id={titleId}>The Systems Letter</h2>
              <p>
                Occasional insights on systems thinking, human behavior, product
                strategy, relationships, innovation, and becoming extraordinary.
              </p>
            </div>

            <form className="systems-letter-form" onSubmit={submitLetter}>
              <div className="systems-field-row">
                <label>
                  <span className="field-label-row">
                    Name <em>Optional</em>
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <label>
                  <span className="field-label-row">Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
              </div>
              <button
                className="button button-primary"
                type="submit"
                disabled={letterPending}
              >
                {letterPending ? "Joining..." : "Join The Systems Letter"}
                <ArrowRight size={16} />
              </button>
              {letterState.message && (
                <p
                  className={`systems-form-note systems-form-note-${letterState.status}`}
                  role={letterState.status === "error" ? "alert" : undefined}
                  aria-live="polite"
                >
                  {letterState.message}
                </p>
              )}
            </form>
          </div>

          <div className="interest-panel">
            <div className="interest-panel-copy">
              <h3>What interests you most?</h3>
              <p>
                Help me understand what you are exploring so future essays,
                frameworks, and projects are more useful.
              </p>
            </div>

            <form className="interest-form" onSubmit={submitInterests}>
              <label className="interest-email-field">
                <span className="field-label-row">Email</span>
                <input
                  type="email"
                  name="interest-email"
                  autoComplete="email"
                  maxLength={254}
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
              <div className="interest-options" aria-label="Audience interests">
                {interestOptions.map((interest) => (
                  <label key={interest} className="interest-option">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={selectedInterests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
              <div className="interest-actions">
                <span className="interest-count">{interestsSummary}</span>
                <button
                  className="button button-secondary"
                  type="submit"
                  disabled={interestPending}
                >
                  {interestPending ? "Sharing..." : "Share My Interests"}
                  <ArrowRight size={16} />
                </button>
              </div>
              {interestState.message && (
                <p
                  className={`systems-form-note systems-form-note-${interestState.status}`}
                  role={interestState.status === "error" ? "alert" : undefined}
                  aria-live="polite"
                >
                  {interestState.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
