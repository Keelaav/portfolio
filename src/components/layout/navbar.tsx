import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 h-fit w-full">
            <div className="text-md font-semibold">Keela Ayotte-Veltman</div>
            <div className="flex gap-6 text-md">
                <Link href="/">Accueil</Link>
                <Link href="/about">À propos</Link>
                <Link href="/projects">Projets</Link>
            </div>
        </nav>
    );
}