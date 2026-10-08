import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.khawitsolutions.com";

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
    images: [{ url: "/khawit-logo-nbg.png", width: 1200, height: 1200, alt: "KHAWIT Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KHAWIT Solutions | AI, Automation & Digital Product Development",
    description: "Digital products, intelligent systems, and AI-powered experiences built for what's next.",
    images: ["/khawit-logo-nbg.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ed69200c-3cbf-4b6b-ade0-d2f227fbe960"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KHAWIT Solutions",
              url: "https://www.khawitsolutions.com/",
              logo: "https://www.khawitsolutions.com/khawit-logo-nbg.png",
              sameAs: [
                "https://www.linkedin.com/company/khawit-solutions-pvt-ltd/",
                "https://www.instagram.com/khawit_solutions/",
                "https://www.threads.com/@khawit_solutions"
              ],
              description: "Digital products, intelligent systems, and AI-powered experiences built for what's next.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "khawitsocialmedia@gmail.com",
                contactType: "Customer Support"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "KHAWIT Solutions",
              url: "https://www.khawitsolutions.com/"
            }),
          }}
        />
      </head>
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
