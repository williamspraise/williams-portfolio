import type { Metadata } from "next";
import "./globals.css";

const title = "Williams Praise - Systems Thinker for Human Problems";
const description =
  "Williams Praise builds frameworks, products, and ventures around systems thinking, human behavior, product strategy, innovation, relationships, and resolve.";

export const metadata: Metadata = {
  metadataBase: new URL("https://williamspraise.com"),
  title,
  description,
  applicationName: "Williams Praise",
  keywords: [
    "Williams Praise",
    "Systems Thinker",
    "Founder",
    "Product Builder",
    "Framework Creator",
    "Technical Product Lead",
    "Founding Product Lead",
    "Product Strategist",
    "Technical Product Manager",
    "Founder Operator",
  ],
  authors: [{ name: "Williams Praise" }],
  creator: "Williams Praise",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Williams Praise",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("wp-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
    }
  } catch (error) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
