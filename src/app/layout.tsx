import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Loading from "@/components/Loading" // Import the Loading component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Seven Suites - Book Now",
  description: "Book your getaway with us at Seven Suites Hotel & Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <body className="antialiased">
        <Loading /> {/* Loading screen - shows first on initial load */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}