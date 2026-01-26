"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import SmoothScroll from "@/components/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <HeroUIProvider navigate={router.push}>
            <SmoothScroll />
            {children}
        </HeroUIProvider>
    );
}
