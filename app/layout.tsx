import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://revampwebz.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Revamp Webz — Webflow & Framer Digital Studio",
    template: "%s — Revamp Webz",
  },
  description:
    "Revamp Webz is a boutique Webflow and Framer development agency building high-performing websites for ambitious B2B, SaaS and healthcare brands.",
  keywords: [
    "Webflow agency",
    "Webflow development agency",
    "Webflow developer",
    "Framer agency",
    "Framer development agency",
    "Framer developer",
    "Webflow website design",
    "Framer website design",
    "website redesign agency",
    "conversion-focused web design",
  ],
  openGraph: {
    title: "Revamp Webz — Webflow & Framer Digital Studio",
    description:
      "Strategy, design, and Webflow/Framer development for ambitious brands ready to turn their website into their strongest digital asset.",
    url: siteUrl,
    siteName: "Revamp Webz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revamp Webz — Webflow & Framer Digital Studio",
    description:
      "High-performing Webflow and Framer websites for ambitious brands.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Revamp Webz",
    url: siteUrl,
    description:
      "Boutique Webflow and Framer digital studio for ambitious B2B, SaaS and healthcare brands.",
    areaServed: "Worldwide",
    sameAs: [],
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-navy text-off font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
