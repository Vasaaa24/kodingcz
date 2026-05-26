import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import IntroSplash from "@/components/IntroSplash";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KODING.CZ — Testování aplikací, micro_ERP a datové centrum",
  description:
    "KODING.CZ s.r.o. — odborná skupina nezávislých profesionálů. Testování aplikací, systémy micro_ERP, datové centrum a IT služby v regulovaných odvětvích.",
  keywords: [
    "testování aplikací",
    "micro_ERP",
    "datové centrum",
    "kybernetická bezpečnost",
    "IT služby",
    "KODING.CZ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <IntroSplash />
        {children}
        <ScrollReveal />
        <CookieConsent />
      </body>
    </html>
  );
}
