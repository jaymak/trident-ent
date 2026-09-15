import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealScript } from "@/components/RevealScript";
import { StickyCta } from "@/components/StickyCta";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ENT Specialist Vadodara`,
    template: `%s | ${site.name}`,
  },
  description: site.support,
  openGraph: {
    title: site.name,
    description: site.promise,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/clinic-hero.jpeg", width: 1600, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.promise,
    images: ["/images/clinic-hero.jpeg"],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${outfit.variable} ${newsreader.variable} site-atmosphere has-sticky-cta antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCta />
        <RevealScript />
      </body>
    </html>
  );
}
