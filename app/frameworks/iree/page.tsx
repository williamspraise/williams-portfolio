import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";

export const metadata: Metadata = {
  title: "IREE Phases - Williams Praise",
  description:
    "A framework for understanding how people move from imagined potential to measurable extraordinary outcomes.",
};

export default function IreePage() {
  const framework = getFramework("iree")!;

  return (
    <>
      <Navbar />
      <FrameworkDetail framework={framework} />
      <Footer />
    </>
  );
}
