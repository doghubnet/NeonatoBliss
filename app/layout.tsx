import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ExitIntentPopup } from "@/components/exit-intent-popup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "NeonatoBliss | Science + Real-Life = Calm Baby & Thriving Growth",
  description:
    "Evidence-based newborn care for 0–12 months. Reduce excessive crying, improve sleep, and build secure bonds.",
  openGraph: {
    title: "NeonatoBliss",
    description: "Science + Real-Life = Calm Baby & Thriving Growth",
    images: ["https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
