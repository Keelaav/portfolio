export default function ScrollDemoPage() {
    return (
        <div className="flex flex-col w-full bg-neutral-900 text-white min-h-[300vh] py-20 px-8">
            {/* SECTION 1: HERO PARALLAX */}
            <section className="h-screen flex flex-col items-center justify-center relative mb-32" data-scroll-section>
                <h1
                    className="text-8xl font-bold mb-8 z-10"
                    data-scroll
                    data-scroll-speed="2"
                >
                    Locomotive Scroll
                </h1>
                <p
                    className="text-2xl text-neutral-400 max-w-2xl text-center"
                    data-scroll
                    data-scroll-speed="4"
                >
                    A smooth scrolling library with support for parallax effects, sticky elements, and more.
                </p>

                <div
                    className="absolute -z-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    data-scroll
                    data-scroll-speed="-2"
                />
            </section>

            {/* SECTION 2: HORIZONTAL PARALLAX */}
            <section className="h-screen flex items-center justify-center overflow-hidden mb-32" data-scroll-section>
                <div className="relative w-full max-w-6xl mx-auto">
                    <h2
                        className="text-9xl font-bold whitespace-nowrap opacity-10"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="6"
                    >
                        SCROLL LEFT TO RIGHT SCROLL
                    </h2>
                    <h2
                        className="text-9xl font-bold whitespace-nowrap opacity-20 absolute top-24 left-0"
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-6"
                    >
                        RIGHT TO LEFT SCROLL
                    </h2>
                </div>
            </section>

            {/* SECTION 3: STICKY ELEMENT */}
            <section
                className="h-[200vh] flex relative mb-32 border-t border-neutral-800 pt-20"
                data-scroll-section
                id="sticky-section"
            >
                <div className="w-1/2 p-12">
                    <div
                        className="bg-zinc-800 p-8 rounded-2xl"
                        data-scroll
                        data-scroll-sticky
                        data-scroll-target="#sticky-section"
                    >
                        <h3 className="text-4xl font-bold mb-4">Sticky Element</h3>
                        <p className="text-xl text-neutral-400">
                            I stay fixed on the screen while you scroll past the content on the right.
                            I am now targeting the entire parent section to stay in place correctly.
                        </p>
                    </div>
                </div>

                <div className="w-1/2 p-12 space-y-20">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="mb-20">
                            <h4 className="text-2xl font-bold mb-4">Content Block {i}</h4>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 4: SCROLL CLASS REVEAL */}
            <section className="h-screen flex items-center justify-center mb-32" data-scroll-section>
                <div
                    className="bg-white text-black p-20 rounded-3xl transform transition-all duration-1000 opacity-0 translate-y-20 scale-90"
                    data-scroll
                    data-scroll-class="opacity-100 translate-y-0 scale-100" // Custom class to add when in view
                >
                    <h2 className="text-6xl font-black">Revealed!</h2>
                </div>
            </section>

            {/* SECTION 5: FOOTER */}
            <section className="h-[50vh] flex flex-col items-center justify-center bg-black rounded-3xl" data-scroll-section>
                <h2 className="text-4xl font-bold mb-8">Ready to create?</h2>
                <div className="flex gap-4">
                    <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition">
                        Get Started
                    </button>
                </div>
            </section>

        </div>
    );
}
