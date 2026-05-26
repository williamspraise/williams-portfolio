import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Williams Praise</strong>
          <p>Product Builder / Founding Product Lead</p>
        </div>
        <div className="footer-links">
          <a href="mailto:williamspraise01@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/iam-williams/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/williamspraise"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link href="/#contact">Contact</Link>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Williams Praise. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
