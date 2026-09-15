import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RevealScript } from "@/components/RevealScript";
import { StickyCta } from "@/components/StickyCta";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Trusted ENT Care in Vadodara`,
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
    images: [{ url: "/images/hero.jpg", width: 1600, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.promise,
    images: ["/images/hero.jpg"],
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
        className={`${jakarta.variable} ${sourceSerif.variable} site-atmosphere has-sticky-cta antialiased`}
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
