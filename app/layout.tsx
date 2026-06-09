import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import IntroSplash from "@/components/IntroSplash";
import ScrollReveal from "@/components/ScrollReveal";
import { contact } from "./content";
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

const SITE_TITLE = "KODING.CZ — Testování aplikací, micro_ERP a datové centrum";
const SITE_DESC =
  "KODING.CZ — uzavřená odborná skupina nezávislých profesionálů. Testování aplikací, systémy micro_ERP, datové centrum a IT služby v regulovaných odvětvích.";

export const metadata: Metadata = {
  metadataBase: new URL("https://koding.cz"),
  title: {
    default: SITE_TITLE,
    template: "%s — KODING.CZ",
  },
  description: SITE_DESC,
  applicationName: "KODING.CZ",
  alternates: {
    canonical: "/",
  },
  keywords: [
    // Značka
    "KODING",
    "KODING.CZ",
    "koding cz",
    "koding.cz",
    "Koding Praha",
    // Obory
    "FinTech",
    "FinCloud",
    "bankovnictví",
    "pojišťovnictví",
    "finanční management",
    // Produkty / systémy
    "micro_ERP",
    "DFU Detailní Finanční Účetnictví",
    "ERP_Executant",
    "micro_Dock_Cloud",
    // Testování
    "testování aplikací",
    "AI testování softwaru",
    "standardy testování",
    "automatizované testování",
    "bezpečnostní testování",
    "výkonnostní testování",
    // Datové centrum
    "datové centrum",
    "server housing",
    "colocation",
    "cloudové služby",
    "IaaS PaaS SaaS",
    "managed hosting",
    "zálohování a disaster recovery",
    "pronájem racků",
    "dedikované servery",
    "multi-cloud",
    // IT / vývoj
    "vývoj softwaru na míru",
    "SaaS systémy",
    "webové aplikace",
    "UI/UX design",
    "IT konzultace",
    "kybernetická bezpečnost",
    "IT služby",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: "https://koding.cz",
    siteName: "KODING.CZ",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  // After registering the domain in Google Search Console, paste the
  // verification token here (or verify via DNS) to claim the site:
  // verification: { google: "TOKEN" },
};

/** Structured data so search engines recognise the brand "KODING.CZ". */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KODING.CZ",
  alternateName: ["KODING", "koding.cz"],
  url: "https://koding.cz",
  logo: "https://koding.cz/icon.png",
  image: "https://koding.cz/opengraph-image.png",
  description: SITE_DESC,
  email: contact.email,
  telephone: contact.phone,
  taxID: contact.ico,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pitterova 2855/7",
    postalCode: "130 00",
    addressLocality: "Praha 3",
    addressCountry: "CZ",
  },
  knowsAbout: [
    "Testování softwaru",
    "AI testování softwaru",
    "Automatizované testování",
    "Bezpečnostní testování",
    "FinTech",
    "FinCloud",
    "micro_ERP",
    "ERP systémy",
    "Datové centrum",
    "Cloudové služby",
    "Server housing a colocation",
    "Vývoj softwaru na míru",
    "SaaS platformy",
    "Kybernetická bezpečnost",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Produkty a služby KODING.CZ",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Testování aplikací",
          description:
            "Funkční, automatizované, výkonnostní, bezpečnostní a UX testování aplikací v regulovaných odvětvích, včetně AI testování softwaru.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "micro_ERP",
          description:
            "Interaktivní automatické výpočetní systémy micro_ERP pro správu a řízení podniků. Související produkty: DFU – Detailní Finanční Účetnictví, ERP_Executant, micro_Dock_Cloud.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Datové centrum",
          description:
            "Server housing / colocation, cloudové služby (IaaS, PaaS, SaaS), managed hosting, zálohování a disaster recovery, pronájem racků a dedikovaných serverů, multi-cloud a monitoring 24/7.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT a vývoj softwaru",
          description:
            "Vývoj SaaS platforem, webových aplikací a aplikací na míru, UI/UX design a IT konzultace.",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KODING.CZ",
  url: "https://koding.cz",
  inLanguage: "cs-CZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <IntroSplash />
        {children}
        <ScrollReveal />
        <CookieConsent />
      </body>
    </html>
  );
}
