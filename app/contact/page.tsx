import { Globe2, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import SystemsLetter from "@/components/SystemsLetter";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Williams Praise | Capital, Ventures & Product Work",
  description:
    "Contact Williams Praise for capital partnership diligence, advisory or consulting, founder partnerships, recruiting, product opportunities, speaking, and collaborations.",
  path: "/contact",
  keywords: [
    "Contact Williams Praise",
    "Williams Praise capital partner",
    "hire Williams Praise",
    "Williams Praise consulting",
    "Williams Praise product leader",
  ],
});

const contactCategories = [
  "Capital partnership",
  "Advisory / consulting",
  "Founder / venture partnership",
  "Recruiting / product opportunity",
  "Speaking / collaboration",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Start the right conversation with Williams.</h1>
            <p>
              Capital partners, companies, founders, recruiters, and
              collaborators can reach Williams through one form, with the
              inquiry type clearly identified.
            </p>
          </div>
        </section>

        <section className="section contact-section">
          <div className="container contact-grid">
            <MotionReveal className="contact-copy">
              <SectionHeader
                eyebrow="Start Here"
                title="Choose the path before the message."
                description="Capital partnership is the primary diligence path. Product, consulting, recruiting, speaking, and founder opportunities remain active secondary pathways."
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
