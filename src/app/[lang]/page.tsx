import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/i18n-config";
import Image from "next/image";

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dictionary = await getDictionary(locale);

    return (
        <div className="relative w-full h-full flex-1 overflow-hidden">
            <Image
                src="/projets/maree_basse/maree_basse_thumbnail.jpg"
                alt="Hero"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}
