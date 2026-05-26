import type { Metadata } from "next";
import "./globals.css";

const title = "Williams Praise — Product Builder & Technical Product Lead";
const description =
  "Founder-operator and technical product leader building 0→1 products across product strategy, UX systems, technical execution, and startup operations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://williamspraise.com"),
  title,
  description,
  applicationName: "Williams Praise Portfolio",
  keywords: [
    "Product Builder",
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
