import Link from "next/link";

const footerGroups = [
  {
    title: "Capital",
    links: [
      { label: "Capital Hub", href: "/capital" },
      { label: "Allocation Philosophy", href: "/capital/philosophy" },
      { label: "Capital Engine", href: "/capital/engine" },
      { label: "Allocation Record", href: "/capital/allocation-record" },
      { label: "Why Williams", href: "/capital/why-williams" },
      { label: "Stewardship", href: "/capital/stewardship" },
      { label: "Partnership", href: "/capital/partnership" },
    ],
  },
  {
    title: "Thinking",
    links: [
      { label: "Frameworks", href: "/frameworks" },
      { label: "Essays", href: "/essays" },
    ],
  },
  {
    title: "Building",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Ventures", href: "/ventures" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Capital Partnership", href: "/capital/partnership" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/iam-williams/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/williamspraise",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/kku_by",
        external: true,
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@williams.praise",
        external: true,
      },
      { label: "Request Investment Memorandum", href: "/capital/partnership#memo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <strong>Williams Praise</strong>
          <p>Capital Allocator + Operator / Systems Thinker</p>
          <a href="mailto:williamspraise01@gmail.com">williamspraise01@gmail.com</a>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <p>{group.title}</p>
              {group.links.map((link) =>
                link.external ? (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Williams Praise. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
