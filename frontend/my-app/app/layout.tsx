import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "KHAWIT Solutions | AI, Automation & Digital Product Development",
  description: "KHAWIT Solutions builds modern websites, AI systems, intelligent agents, automation workflows, SaaS products, and custom digital solutions for businesses.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "KHAWIT Solutions | AI, Automation & Digital Product Development",
    description: "Digital products, intelligent systems, and AI-powered experiences built for what's next.",
    url: "/",
    siteName: "KHAWIT Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: "/khawit-logo.jpeg", width: 1200, height: 1200, alt: "KHAWIT Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KHAWIT Solutions | AI, Automation & Digital Product Development",
    description: "Digital products, intelligent systems, and AI-powered experiences built for what's next.",
    images: ["/khawit-logo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="bg-geometrics">
          <div className="bg-geometrics-shape-1" />
          <div className="bg-geometrics-shape-2" />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
