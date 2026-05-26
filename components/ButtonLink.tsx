import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  download?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
}: ButtonLinkProps) {
  const classes = {
    primary: "button button-primary",
    secondary: "button button-secondary",
    quiet: "button button-quiet",
  };

  return (
    <Link className={classes[variant]} href={href} download={download}>
      {children}
      {variant !== "quiet" && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
