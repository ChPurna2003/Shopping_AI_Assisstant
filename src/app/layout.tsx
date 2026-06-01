import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BottomNav from "../components/BottomNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slice Best Price AI",
  description: "AI powered shopping comparison app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#f7f7fb] min-h-screen pb-24">

        {children}

        {/* Global Bottom Navigation */}
        <BottomNav />

      </body>
    </html>
  );
}