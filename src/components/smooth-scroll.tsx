"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        let locomotiveScroll: any;

        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            locomotiveScroll = new LocomotiveScroll({
                el: document.querySelector("[data-scroll-container]") as HTMLElement,
                smooth: true,
                lerp: 0.1, // Smoothing factor
            });

            // Update on resize to recalculate positions correctly
            window.addEventListener("resize", () => locomotiveScroll.update());
        })();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return null;
}
