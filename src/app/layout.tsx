import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import Script from "next/script";
import "./globals.css"
import { Cursor } from "@/components/sections/Cursor";
import { Grid } from "@/components/sections/Grid";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anirudh Sahu",
  description: "Personal portfolio of Anirudh Sahu, who loves building stuff",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Anirudh Sahu",
    description: "Personal portfolio of Anirudh Sahu, who loves building stuff",
    url: "https://anirudh-sahu.vercel.app",
    siteName: "Anirudh Sahu Portfolio",
    type: "website",},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen w-full text-ink bg-cream-50 overflow-hidden">
          <Grid className="absolute inset-0" />
          <Nav />
          <Cursor />
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
        </div>
         <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="bfc60598-03c5-4f62-adb9-93f47e25f5b4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
