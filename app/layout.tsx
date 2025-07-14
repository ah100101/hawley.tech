import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header"; // Import Header
import Footer from "@/components/layout/footer"; // Import Footer

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "block", // Use 'block' to wait for the font before rendering text
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Adjusted weights for body text
  variable: "--font-ibm-plex-mono",
  display: "block", // Use 'block' to wait for the font before rendering text
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "block", // Use 'block' to wait for the font before rendering text
});

export const metadata: Metadata = {
  title: "Alex Hawley",
  description: "Partner Solutions Engineer @ Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        playfair.variable,
        ibmPlexMono.variable,
        caveat.variable,
        "dark"
      )}
    >
      <body className="bg-black text-white min-h-screen flex flex-col antialiased font-sans">
        <Header />
        <main className="flex-grow flex flex-col w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
