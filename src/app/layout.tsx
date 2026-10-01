import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Analytics from "@/components/Analytics";
import ThemeScript from "@/components/ThemeScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// DESIGN.md §3 — one family, full weight range. No second family anywhere.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "Capricorn Hub",
  description: "We build digital products for ambitious brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      {/* Navbar and Footer live here, outside template.tsx, so they stay put
          while only the page content cross-fades between routes. */}
      <body className={hanken.variable}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
