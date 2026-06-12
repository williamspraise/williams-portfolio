import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";

export const metadata: Metadata = {
  title: "Systems of Love - Williams Praise",
  description:
    "A framework for understanding love as a system of balance, value exchange, humane conduct, and psychological interpretation.",
};

export default function SystemsOfLovePage() {
  const framework = getFramework("systems-of-love")!;

  return (
    <>
      <Navbar />
      <FrameworkDetail framework={framework} />
      <Footer />
    </>
  );
}
