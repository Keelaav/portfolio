import { getDictionary } from "@/lib/get-dictionary";
import { type Locale } from "@/i18n-config";

export default async function Home({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const locale = lang as Locale;
    const dictionary = await getDictionary(locale);

    return (
        <div className="bg-gray-200 w-full p-8 rounded-2xl flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">{dictionary.home.title}</h1>
            <p className="text-xl text-gray-600">{dictionary.home.description}</p>
        </div>
    );
}
