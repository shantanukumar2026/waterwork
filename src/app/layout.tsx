import type { Metadata } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/barlow-condensed/latin-400.css";
import "@fontsource/barlow-condensed/latin-500.css";
import "@fontsource/barlow-condensed/latin-600.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/barlow-condensed/latin-800.css";
import "@fontsource/barlow-condensed/latin-900.css";
import "@fontsource/barlow-condensed/latin-700-italic.css";
import "@fontsource/barlow-condensed/latin-800-italic.css";
import "@fontsource/barlow-condensed/latin-900-italic.css";
import "./globals.css";
import { SITE_URL } from "@/data/seoConfig";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "H2 Industries | Precision Water Management & Waterworks Infrastructure",
    template: "%s | H2 Industries",
  },
  description:
    "H2 Industries designs and manufactures precision-engineered water management infrastructure — from modular sampling stations to AWWA ductile iron pipe fittings and curb inlet castings.",
  keywords: [
    "H2 Industries",
    "waterworks castings",
    "water management engineering",
    "modular sampling stations",
    "stormwater drainage infrastructure",
    "AWWA gate valves",
    "mechanical joint restraint gland",
    "curb box Minneapolis pattern",
    "ocean conservation engineering",
    "municipal water infrastructure"
  ],
  icons: {
    icon: "/Ww_Fevicon.png",
    shortcut: "/Ww_Fevicon.png",
    apple: "/Ww_Fevicon.png",
  },
  openGraph: {
    title: "H2 Industries | Precision Water Management Engineering",
    description:
      "Precision-engineered water management infrastructure dedicated to saving our oceans.",
    type: "website",
    locale: "en_US",
    siteName: "H2 Industries",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased overflow-x-hidden font-sans" suppressHydrationWarning>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
