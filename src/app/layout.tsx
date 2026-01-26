import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/navbar";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Keela Ayotte-Veltman | Portfolio",
  description: "Portfolio de Keela Ayotte-Veltman",
};

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen w-screen flex flex-col" data-scroll-container>
            <Navbar />
            <main className="flex flex-col items-center justify-center w-full h-full px-4 pb-4">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
