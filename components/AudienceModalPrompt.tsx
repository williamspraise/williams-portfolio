"use client";

import { useEffect, useState } from "react";
import { Mail, X } from "lucide-react";
import SystemsLetter from "./SystemsLetter";

const storageKey = "systems-letter-prompt-dismissed";

export default function AudienceModalPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(storageKey) === "true") {
      return;
    }

    const showAfterScroll = () => {
      if (window.scrollY > window.innerHeight * 0.65) {
        setIsVisible(true);
        window.removeEventListener("scroll", showAfterScroll);
      }
    };

    showAfterScroll();
    window.addEventListener("scroll", showAfterScroll, { passive: true });

    return () => window.removeEventListener("scroll", showAfterScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function dismissPrompt() {
    window.sessionStorage.setItem(storageKey, "true");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="audience-prompt" role="region" aria-label="Systems Letter invitation">
        <button
          className="audience-prompt-main"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          <span className="audience-prompt-icon" aria-hidden="true">
            <Mail size={18} />
          </span>
          <span>
            <strong>Join The Systems Letter</strong>
            <small>Occasional notes on systems, products, and human behavior.</small>
          </span>
        </button>
        <button
          className="audience-prompt-close"
          type="button"
          aria-label="Dismiss Systems Letter invitation"
          onClick={dismissPrompt}
        >
          <X size={16} />
        </button>
      </div>

      {isOpen && (
        <div
          className="audience-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="audience-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Join The Systems Letter"
          >
            <button
              className="audience-modal-close"
              type="button"
              aria-label="Close Systems Letter modal"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
            <SystemsLetter variant="modal" />
          </div>
        </div>
      )}
    </>
  );
}
