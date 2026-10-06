import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SUPEQUOTE — Estimate Smarter. Quote Faster. Win More Jobs.",
  description:
    "SupeQuote helps roofing contractors create accurate estimates, protect their margins, and send professional quotes in minutes.",
  applicationName: "SUPEQUOTE",
  metadataBase: new URL("https://supequote.com"),
  openGraph: {
    type: "website",
    url: "https://supequote.com",
    siteName: "SUPEQUOTE",
    title: "SUPEQUOTE — Estimate Smarter. Quote Faster. Win More Jobs.",
    description:
      "Create accurate roofing estimates, protect your margins, and send professional quotes in minutes.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SUPEQUOTE — Estimate smarter. Quote faster. Win more jobs." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUPEQUOTE — Estimate Smarter. Quote Faster. Win More Jobs.",
    description:
      "Create accurate roofing estimates, protect your margins, and send professional quotes in minutes.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
