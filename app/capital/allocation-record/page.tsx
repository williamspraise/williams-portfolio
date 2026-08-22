import { ArrowRight, FileCheck2 } from "lucide-react";
import Link from "next/link";
import {
  CapitalJourneyNav,
  FlowDiagram,
  NextCapitalStep,
  StatusBadge,
} from "@/components/CapitalJourney";
import Footer from "@/components/Footer";
import MotionReveal from "@/components/MotionReveal";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import {
  plannedAllocations,
  proofStats,
  shoppergetitAllocation,
} from "@/data/capital";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Allocation Record | Williams Praise",
  description:
    "Executed allocation evidence for Williams Praise, including Shoppergetit Development, clearly separated from planned allocations and illustrative thesis work.",
  path: "/capital/allocation-record",
  keywords: [
    "Allocation Record",
    "Williams Praise Shoppergetit",
    "Shoppergetit Founder",
    "capital allocation evidence",
    "executed allocation",
  ],
});

const allocationStory = [
  "Capital was raised for a defined development objective.",
  "Technical resources and developers were engaged to build the product system.",
  "Execution exposed weak dependencies and operating friction.",
  "Williams reassessed the method and changed how the work moved forward.",
  "Williams increased direct technical ownership of the product, incorporating AI-assisted engineering into the development stack to reduce external dependency and maintain execution momentum.",
  "The original objective remained practical: build a product system capable of real customer transactions.",
  "As product, operations, retailer participation, and market evidence developed, Shoppergetit became a clearer infrastructure model.",
  "Customers, orders, repeat purchase, and revenue activity produced new evidence.",
];

export default function AllocationRecordPage() {
  return (
    <>
      <Navbar />
      <main className="capital-page">
        <CapitalJourneyNav current="/capital/allocation-record" />
        <section className="capital-hero">
          <div className="container">
            <MotionReveal className="capital-hero-copy">
              <p className="eyebrow">03 - Allocation Record</p>
              <h1>Williams has already converted resources into operating capability.</h1>
              <p>
                Allocation 001 shows the allocator/operator pattern in public:
                capital and technical resources were directed toward building
                and launching Shoppergetit&apos;s commerce platform, execution had
                to adapt, and the business evolved into a functioning urban
                retail infrastructure platform with live Abuja market evidence.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="section">
          <div className="container allocation-record-grid">
            <MotionReveal className="allocation-record-main">
              <div className="proof-card-top">
                <StatusBadge status={shoppergetitAllocation.status} />
                <span>{shoppergetitAllocation.code}</span>
              </div>
              <h2>{shoppergetitAllocation.title}</h2>
              <p>{shoppergetitAllocation.summary}</p>
              <FlowDiagram items={shoppergetitAllocation.model} />
            </MotionReveal>
            <MotionReveal className="allocation-record-side" delay={0.08}>
              <FileCheck2 size={28} />
              <h3>Market evidence</h3>
              <div className="proof-metric-grid">
                {proofStats.map((stat) => (
                  <article className="proof-metric" key={stat.label}>
                    <StatusBadge status={stat.status} />
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Adaptive Allocation"
                title="Capital stayed attached to the objective while the execution method changed."
                description="The Shoppergetit record matters because Williams did not only fund a plan. He kept reallocating attention, resources, and operating method toward the outcome as the evidence became clearer."
              />
            </MotionReveal>
            <div className="engine-step-grid">
              {allocationStory.map((item, index) => (
                <MotionReveal key={item} delay={index * 0.03}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Execution Story"
                title="What was intended, and what the build revealed."
                description="The original development objective was to build and launch the commerce platform. The current infrastructure thesis became clearer through product, operations, retailer participation, and market evidence."
              />
            </MotionReveal>
            <div className="allocation-fact-grid">
              {shoppergetitAllocation.facts.map((fact, index) => (
                <MotionReveal key={fact.label} delay={index * 0.035}>
                  <article>
                    <StatusBadge status={fact.status} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{fact.label}</h3>
                    <p>{fact.value}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contrast">
          <div className="container">
            <MotionReveal>
              <SectionHeader
                eyebrow="Planned / Thesis Allocations"
                title="Thesis work belongs below executed evidence."
                description="Planned allocations show how Williams thinks before deployment. Status labels keep thesis work visually separate from operating record."
              />
            </MotionReveal>
            <div className="risk-card-grid">
              {plannedAllocations.map((item) => (
                <MotionReveal key={item.title}>
                  <article className="planned-card">
                    <StatusBadge status={item.status} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="capital-principle">
          <div className="container">
            <MotionReveal>
              <p className="eyebrow">Allocation Principle</p>
              <h2>
                Capital was allocated to the objective, not permanently attached
                to the first execution method.
              </h2>
              <p>
                That is the allocator/operator lesson from Shoppergetit:
                preserve the goal, change the method, recover progress, and
                let market evidence inform the next decision.
              </p>
              <Link className="text-link" href="/work/shoppergetit">
                View the Shoppergetit product case study
                <ArrowRight size={15} />
              </Link>
            </MotionReveal>
          </div>
        </section>

        <div className="container">
          <NextCapitalStep current="/capital/allocation-record" />
        </div>
      </main>
      <Footer />
    </>
  );
}
