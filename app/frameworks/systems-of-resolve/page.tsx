import type { Metadata } from "next";
import Footer from "@/components/Footer";
import FrameworkDetail from "@/components/FrameworkDetail";
import Navbar from "@/components/Navbar";
import { getFramework } from "@/data/frameworks";

export const metadata: Metadata = {
  title: "Systems of Resolve - Williams Praise",
  description:
    "A framework for reaching clarity, peace, and responsible decisions through structured thinking.",
};

export default function SystemsOfResolvePage() {
  const framework = getFramework("systems-of-resolve")!;

  return (
    <>
      <Navbar />
      <FrameworkDetail framework={framework} />
      <Footer />
    </>
  );
}
