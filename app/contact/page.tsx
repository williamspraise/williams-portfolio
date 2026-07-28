import type { Metadata } from "next";
import { Globe2, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import SystemsLetter from "@/components/SystemsLetter";

export const metadata: Metadata = {
  title: "Contact - Williams Praise",
  description:
    "Work with Williams Praise on speaking, collaborations, consulting, jobs, recruiting, partnerships, and venture conversations.",
  keywords: [
    "Contact Williams Praise",
    "Williams Emmanuel Praise contact",
    "hire Williams Praise",
    "Williams Praise consulting",
    "Williams Praise speaking",
    "Williams Praise product leader",
    "Williams Praise partnerships",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const contactCategories = [
  "Speaking",
  "Collaborations",
  "Consulting",
  "Jobs / Recruiting",
  "Partnerships",
  "Venture conversations",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Work with Williams</h1>
            <p>
              Open to serious product, venture, collaboration, speaking, and
              partnership conversations.
            </p>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container contact-grid">
            <MotionReveal className="contact-copy">
              <SectionHeader
                eyebrow="Start Here"
                title="Bring the problem, opportunity, or system you want to clarify."
                description="Useful contexts include speaking, collaborations, consulting, jobs and recruiting, partnerships, and venture conversations."
              />
              <div className="contact-option-grid compact-options">
                {contactCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              <div className="contact-details">
                <a href="mailto:williamspraise01@gmail.com">
                  <Mail size={18} />
                  williamspraise01@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/iam-williams/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  LinkedIn / iam-williams
                </a>
                <a
                  href="https://github.com/williamspraise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  GitHub / williamspraise
                </a>
                <a
                  href="https://www.instagram.com/kku_by"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  Instagram / kku_by
                </a>
                <a
                  href="https://www.tiktok.com/@williams.praise"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe2 size={18} />
                  TikTok / williams.praise
                </a>
              </div>
            </MotionReveal>

            <MotionReveal className="contact-form-wrap" delay={0.08}>
              <ContactForm />
            </MotionReveal>
          </div>
        </section>

        <SystemsLetter />
      </main>
      <Footer />
    </>
  );
}
