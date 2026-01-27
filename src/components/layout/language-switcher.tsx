"use client";

import { Button } from "@heroui/react";
import { useRouter, usePathname } from "next/navigation";
import { type Locale, i18n } from "@/i18n-config";

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
    const router = useRouter();
    const pathname = usePathname();

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";

        // Split the pathname into segments
        const segments = pathname.split("/");
        const isFirstSegmentLocale = i18n.locales.includes(segments[1] as Locale);

        if (locale === i18n.defaultLocale) {
            // If switching to default locale, remove the locale prefix if it exists
            if (isFirstSegmentLocale) {
                segments.splice(1, 1);
            }
            const path = segments.join("/");
            return path === "" ? "/" : path;
        } else {
            // If switching to a non-default locale
            if (isFirstSegmentLocale) {
                // Replace existing locale
                segments[1] = locale;
            } else {
                // Add new locale prefix
                segments.splice(1, 0, locale);
            }
            return segments.join("/");
        }
    };

    const toggleLanguage = () => {
        const nextLang = currentLang === "fr" ? "en" : "fr";
        router.push(redirectedPathname(nextLang));
    };

    return (
        <Button
            variant="flat"
            size="sm"
            onPress={toggleLanguage}
            className="font-medium"
        >
            {currentLang === "fr" ? "EN" : "FR"}
        </Button>
    );
}
