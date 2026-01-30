import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { getDictionary } from "@/lib/get-dictionary";
import { type Locale, i18n } from "@/i18n-config";

export default async function Navbar({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang);

    const getPath = (path: string) => {
        if (lang === i18n.defaultLocale) return path;
        return `/${lang}${path === "/" ? "" : path}`;
    };

    return (
        <nav className="flex justify-between items-center p-4 h-fit w-full">
            <div className="text-md font-semibold">{dictionary.common.name}</div>
            <div className="flex gap-6 text-md items-center">
                <Link href={getPath("/")}>{dictionary.common.navbar.home}</Link>
                <Link href={getPath("/projects")}>{dictionary.common.navbar.projects}</Link>
                <Link href={getPath("/about")}>{dictionary.common.navbar.about}</Link>
            </div>
        </nav>
    );
}