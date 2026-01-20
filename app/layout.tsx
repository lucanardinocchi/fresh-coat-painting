import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Coat Painting Co. | Adelaide's Trusted Residential Painters",
  description:
    "Quality interior and exterior painting for Adelaide homes. Clean edges, honest pricing, zero shortcuts. Get your free quote today.",
  keywords: [
    "painting",
    "painters",
    "Adelaide",
    "residential painting",
    "house painting",
    "interior painting",
    "exterior painting",
  ],
  authors: [{ name: "Fresh Coat Painting Co." }],
  openGraph: {
    title: "Fresh Coat Painting Co. | Adelaide's Trusted Residential Painters",
    description:
      "Quality interior and exterior painting for Adelaide homes. Clean edges, honest pricing, zero shortcuts.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
