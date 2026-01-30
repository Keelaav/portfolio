import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/navbar";
import { i18n, type Locale } from "@/i18n-config";

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

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

// RootLayout
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = lang as Locale;

    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <div className="min-h-screen w-screen flex flex-col" data-scroll-container>
                        <Navbar lang={locale} />
                        <main className="flex-1 flex flex-col items-center justify-center w-full px-4 pb-4">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
