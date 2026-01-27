import type { Locale } from "@/i18n-config";

const dictionaries = {
    fr: () => import("@/locales/fr.json").then((module) => module.default),
    en: () => import("@/locales/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.fr();
