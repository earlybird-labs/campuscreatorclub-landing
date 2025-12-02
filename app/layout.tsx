import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Poppins } from "next/font/google";
import { pilat, industry } from "@/app/fonts";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

// Fonts loaded via @/app/fonts (pilat, industry)

export const metadata: Metadata = {
  title: "Campus Creator Club - Where College Creators Connect, Grow, and Earn",
  description:
    "Connect with college creators nationwide, access exclusive brand deals, and level up your content through webinars with top creators.",
  keywords:
    "college creators, brand deals, content creation, influencer marketing, student creators",
  openGraph: {
    title: "Campus Creator Club",
    description: "Where college creators connect, grow, and earn",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${pilat.variable} ${industry.variable} ${poppins.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
