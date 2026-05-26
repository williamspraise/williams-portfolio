import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found container">
        <p className="eyebrow">404</p>
        <h1>That product story is not here.</h1>
        <p>Return to the selected work and explore the available case studies.</p>
        <Link className="button button-primary" href="/#work">
          View Product Work
        </Link>
      </main>
      <Footer />
    </>
  );
}
