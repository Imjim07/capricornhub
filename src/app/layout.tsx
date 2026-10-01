import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Analytics from "@/components/Analytics";
import ThemeScript from "@/components/ThemeScript";
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
      <body className={hanken.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
