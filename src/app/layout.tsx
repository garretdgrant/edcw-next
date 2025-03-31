import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { ToasterProvider } from "@/components/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://edcwebdesign.com",
  ),
  title: "EDC Web Design | Modern Websites for Small Businesses",
  description:
    "We create fast, SEO-optimized websites that help small businesses grow and convert more customers.",
  openGraph: {
    title: "EDC Web Design | SEO-Optimized Web Development",
    description:
      "Modern websites built with performance, conversions, and clean design in mind.",
    url: "https://edcwebdesign.com",
    siteName: "EDC Web Design",
    images: [
      {
        url: "/og-image.webp", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "EDC Web Design Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDC Web Design | SEO-Optimized Web Development",
    description:
      "Modern websites built with performance, conversions, and clean design in mind.",
    images: ["/og-image.jpg"], // replace with actual OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Layout>{children}</Layout>
        <ToasterProvider />
      </body>
    </html>
  );
}
