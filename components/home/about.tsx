import Image from "next/image"



export const AboutMe = () => {
    return (
        <section id="projects" aria-label="Featured projects" className="py-8 md:py-16 relative" >
            <div className="absolute top-1/4 -left-12 opacity-70 hidden lg:block transform rotate-12">
                <img
                    src="/shared/headphone.png"
                    alt=""
                    width={128}
                    height={128}
                    aria-hidden="true"
                    className="mix-blend-multiply"
                />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 delay-200 opacity-100 translate-y-0">
                <span className="inline-block relative pb-[0.15em]">
                    About Me
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 100 20"
                        preserveAspectRatio="none"
                        className="absolute left-0 right-0 bottom-0 h-[0.7em] w-full pointer-events-none overflow-visible"
                    >
                        <defs>
                            <filter
                                id="scribble-wobble"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feTurbulence
                                    baseFrequency="0.04 0.08"
                                    numOctaves="2"
                                    result="turbulence"
                                    seed="1"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="turbulence"
                                    scale="1.5"
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>

                            <filter
                                id="scribble-wobble-strong"
                                x="-50%"
                                y="-50%"
                                width="200%"
                                height="200%"
                            >
                                <feTurbulence
                                    baseFrequency="0.05 0.1"
                                    numOctaves="2"
                                    result="turbulence"
                                    seed="2"
                                />
                                <feDisplacementMap
                                    in="SourceGraphic"
                                    in2="turbulence"
                                    scale="2"
                                    xChannelSelector="R"
                                    yChannelSelector="G"
                                />
                            </filter>
                        </defs>

                        {/* Background Stroke */}
                        <path
                            d="M2,15 Q18,19 34,15 T66,15 T98,15"
                            pathLength={100}
                            style={{
                                fill: "none",
                                stroke: "rgb(29, 78, 216)",
                                strokeOpacity: 0.25,
                                strokeWidth: 9,
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                filter: "url(#scribble-wobble)",
                                strokeDasharray: 100,
                                strokeDashoffset: 0,
                                opacity: 0.35,
                                transition:
                                    "stroke-dashoffset 650ms cubic-bezier(0.16,1,0.3,1), opacity 420ms cubic-bezier(0.16,1,0.3,1)",
                            }}
                        />

                        {/* Main Stroke */}
                        <g
                            style={{
                                transformOrigin: "50px 10px",
                                animation: "scribble-wiggle 6s ease-in-out infinite",
                            }}
                        >
                            <path
                                d="M2,14 Q18,18 34,14 T66,14 T98,14"
                                pathLength={100}
                                style={{
                                    fill: "none",
                                    stroke: "rgb(29, 78, 216)",
                                    strokeWidth: 6,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    filter: "url(#scribble-wobble)",
                                    strokeDasharray: 100,
                                    strokeDashoffset: 0,
                                    opacity: 1,
                                    transition:
                                        "stroke-dashoffset 650ms cubic-bezier(0.16,1,0.3,1) 40ms, opacity 420ms cubic-bezier(0.16,1,0.3,1) 40ms",
                                }}
                            />
                        </g>
                    </svg>

                </span>
            </h2>
            <div className="max-w-5xl mx-auto px-4 pb-24 md:pb-32">
                <div className="hidden md:grid md:grid-cols-12 md:gap-6 lg:gap-8 relative">
                    <div className="col-span-4 flex flex-col justify-start items-start">
                        <div className="transform rotate-3 hover:rotate-6 hover:scale-105 transition-all duration-500 ease-out cursor-pointer group relative">
                            <div className="bg-white p-3 shadow-lg hover:shadow-2xl border border-gray-200 w-48 lg:w-56 transition-shadow duration-300">
                                <Image
                                    src="/gallary/profile1.jpeg"
                                    alt="Goutam - Software Developer"
                                    className="w-full h-32 lg:h-40 object-cover bg-gray-100 transition-all duration-300 group-hover:brightness-110"
                                    loading="eager"
                                    data-critical="true"
                                    width={1000}
                                    height={1000}
                                />
                                <div className="mt-2 text-center">
                                    <p className="font-mono text-xs lg:text-sm text-gray-600 group-hover:text-gray-800 transition-colors">That's me! 📸</p>
                                </div>
                            </div>
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 cursor-pointer perspective-normal">
                                <div style={{ transformStyle: "preserve-3d", transformOrigin: "50% 85%", transform: "rotateX(20deg) rotateZ(12deg)" }}>
                                    <Image
                                        src="/icons/pin.svg"
                                        alt="pin"
                                        width={8}
                                        height={8}
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-lg bg-linear-to-br from-yellow-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    </div>
                    <div className="col-span-8 space-y-6 flex flex-col"
                    ><div className="rotate-[-0.7deg]">
                            <div className="px-7 pt-10 pb-9" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 14%, 2.5% 3%, 5% 13%, 7.5% 1%, 10% 14%, 12.5% 4%, 15% 12%, 17.5% 0%, 20% 14%, 22.5% 3%, 25% 13%, 27.5% 2%, 30% 14%, 32.5% 1%, 35% 13%, 37.5% 4%, 40% 14%, 42.5% 0%, 45% 13%, 47.5% 3%, 50% 14%, 52.5% 2%, 55% 13%, 57.5% 0%, 60% 14%, 62.5% 4%, 65% 12%, 67.5% 1%, 70% 14%, 72.5% 3%, 75% 13%, 77.5% 0%, 80% 14%, 82.5% 2%, 85% 13%, 87.5% 1%, 90% 14%, 92.5% 3%, 95% 12%, 97.5% 2%, 100% 14%, 100% 86%, 97.5% 97%, 95% 86%, 92.5% 99%, 90% 87%, 87.5% 100%, 85% 86%, 82.5% 98%, 80% 87%, 77.5% 100%, 75% 87%, 72.5% 99%, 70% 86%, 67.5% 98%, 65% 87%, 62.5% 100%, 60% 86%, 57.5% 99%, 55% 87%, 52.5% 100%, 50% 86%, 47.5% 98%, 45% 87%, 42.5% 100%, 40% 86%, 37.5% 99%, 35% 87%, 32.5% 100%, 30% 86%, 27.5% 98%, 25% 87%, 22.5% 100%, 20% 87%, 17.5% 99%, 15% 86%, 12.5% 98%, 10% 87%, 7.5% 100%, 5% 86%, 2.5% 98%, 0% 86%)" }}>
                                <p className="text-sm lg:text-base leading-relaxed font-medium text-black">
                                    <span className="bg-yellow-200 px-1 rounded">Started with Computer Science,</span>{" "}
                                    Stayed because I got obsessed with building products people actually enjoy using. 💡
                                </p></div>
                        </div>
                        <div className="rotate-[0.6deg]">
                            <div className="px-7 pt-10 pb-9" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 12%, 2.5% 2%, 5% 14%, 7.5% 3%, 10% 12%, 12.5% 0%, 15% 14%, 17.5% 2%, 20% 12%, 22.5% 4%, 25% 14%, 27.5% 1%, 30% 12%, 32.5% 3%, 35% 14%, 37.5% 0%, 40% 13%, 42.5% 2%, 45% 14%, 47.5% 1%, 50% 12%, 52.5% 4%, 55% 14%, 57.5% 2%, 60% 12%, 62.5% 0%, 65% 14%, 67.5% 3%, 70% 12%, 72.5% 1%, 75% 14%, 77.5% 2%, 80% 12%, 82.5% 4%, 85% 14%, 87.5% 1%, 90% 12%, 92.5% 3%, 95% 14%, 97.5% 1%, 100% 12%, 100% 88%, 97.5% 99%, 95% 87%, 92.5% 100%, 90% 88%, 87.5% 98%, 85% 86%, 82.5% 99%, 80% 88%, 77.5% 100%, 75% 87%, 72.5% 99%, 70% 88%, 67.5% 100%, 65% 87%, 62.5% 98%, 60% 88%, 57.5% 100%, 55% 87%, 52.5% 99%, 50% 88%, 47.5% 100%, 45% 87%, 42.5% 98%, 40% 88%, 37.5% 100%, 35% 87%, 32.5% 99%, 30% 88%, 27.5% 100%, 25% 87%, 22.5% 99%, 20% 88%, 17.5% 100%, 15% 87%, 12.5% 99%, 10% 88%, 7.5% 100%, 5% 87%, 2.5% 99%, 0% 88%)" }}>
                                <p className="text-sm lg:text-base leading-relaxed text-black">One internship taught me the hard way:
                                    <span className="bg-green-200 px-1 rounded">code that works is only half the battle</span>.
                                    assumptions kill products, user feedback builds them. 🎯
                                </p>
                            </div>
                        </div>
                        <div className="rotate-[-0.45deg]">
                            <div className="px-7 pt-10 pb-9" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 13%, 2.5% 1%, 5% 14%, 7.5% 2%, 10% 13%, 12.5% 4%, 15% 14%, 17.5% 1%, 20% 13%, 22.5% 3%, 25% 14%, 27.5% 0%, 30% 13%, 32.5% 4%, 35% 14%, 37.5% 2%, 40% 12%, 42.5% 0%, 45% 14%, 47.5% 3%, 50% 13%, 52.5% 1%, 55% 14%, 57.5% 4%, 60% 13%, 62.5% 0%, 65% 14%, 67.5% 2%, 70% 13%, 72.5% 4%, 75% 14%, 77.5% 1%, 80% 13%, 82.5% 3%, 85% 14%, 87.5% 0%, 90% 13%, 92.5% 2%, 95% 14%, 97.5% 3%, 100% 13%, 100% 87%, 97.5% 98%, 95% 86%, 92.5% 99%, 90% 87%, 87.5% 100%, 85% 87%, 82.5% 99%, 80% 86%, 77.5% 98%, 75% 87%, 72.5% 100%, 70% 86%, 67.5% 99%, 65% 87%, 62.5% 100%, 60% 86%, 57.5% 99%, 55% 87%, 52.5% 100%, 50% 86%, 47.5% 98%, 45% 87%, 42.5% 100%, 40% 87%, 37.5% 99%, 35% 86%, 32.5% 100%, 30% 87%, 27.5% 99%, 25% 86%, 22.5% 98%, 20% 87%, 17.5% 100%, 15% 87%, 12.5% 99%, 10% 86%, 7.5% 98%, 5% 87%, 2.5% 100%, 0% 87%)" }}>
                                <p className="text-sm lg:text-base leading-relaxed text-black">Somewhere between code, design, and user psychology - <span className="bg-purple-200 px-1 rounded">I found what I genuinely love doing. </span> 🔄
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden space-y-5">
                    <div className="flex justify-center">
                        <div className="transform rotate-2 hover:rotate-4 transition-transform duration-300 cursor-pointer group relative"><div className="bg-white p-3 shadow-lg border border-gray-200 w-48">
                            <Image
                                src="/gallary/profile1.jpeg"
                                alt="Goutam - Software Developer"
                                className="w-full h-32 lg:h-40 object-cover bg-gray-100 transition-all duration-300 group-hover:brightness-110"
                                loading="eager"
                                data-critical="true"
                                width={1000}
                                height={1000}
                            />
                            <div className="mt-2 text-center">
                                <p className="font-mono text-xs text-gray-600">That's me! 📸</p>
                            </div>
                        </div>
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 cursor-pointer perspective-normal">
                                <div style={{ transformStyle: "preserve-3d", transformOrigin: "50% 85%", transform: "rotateX(20deg) rotateZ(12deg)" }}>
                                    <Image
                                        src="/icons/pin.svg"
                                        alt="pin"
                                        width={8}
                                        height={8}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rotate-[-0.8deg]">
                        <div className="px-5 pt-9 pb-8" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 14%, 5% 2%, 10% 14%, 15% 1%, 20% 14%, 25% 3%, 30% 14%, 35% 0%, 40% 14%, 45% 3%, 50% 14%, 55% 1%, 60% 14%, 65% 4%, 70% 14%, 75% 0%, 80% 14%, 85% 2%, 90% 14%, 95% 3%, 100% 14%, 100% 86%, 95% 99%, 90% 87%, 85% 100%, 80% 86%, 75% 99%, 70% 87%, 65% 100%, 60% 86%, 55% 99%, 50% 87%, 45% 100%, 40% 86%, 35% 99%, 30% 87%, 25% 100%, 20% 86%, 15% 99%, 10% 87%, 5% 100%, 0% 86%)" }}>
                            <p className="text-sm leading-relaxed font-medium text-black">
                                <span className="bg-yellow-200 px-1 rounded">Started with Computer Science,
                                    Stayed because I got obsessed with building products people actually enjoy using. 💡</span>! 💡</p>
                        </div>
                    </div>
                    <div className="rotate-[0.65deg]">
                        <div className="px-5 pt-9 pb-8" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 12%, 5% 3%, 10% 14%, 15% 0%, 20% 13%, 25% 4%, 30% 14%, 35% 1%, 40% 13%, 45% 4%, 50% 14%, 55% 0%, 60% 13%, 65% 3%, 70% 14%, 75% 1%, 80% 13%, 85% 4%, 90% 14%, 95% 2%, 100% 12%, 100% 88%, 95% 100%, 90% 87%, 85% 99%, 80% 86%, 75% 100%, 70% 87%, 65% 99%, 60% 86%, 55% 100%, 50% 87%, 45% 99%, 40% 86%, 35% 100%, 30% 87%, 25% 99%, 20% 86%, 15% 100%, 10% 87%, 5% 99%, 0% 88%)" }}>
                            <p className="text-sm lg:text-base leading-relaxed text-black">One internship taught me the hard way:
                                <span className="bg-green-200 px-1 rounded">code that works is only half the battle</span>.
                                assumptions kill products, user feedback builds them. 🎯
                            </p>
                        </div>
                    </div>
                    <div className="rotate-[-0.5deg]">
                        <div className="px-5 pt-9 pb-8" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundImage: "url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.11'/%3E%3C/svg%3E&quot;), linear-gradient(rgba(255, 255, 255, 0.92), rgba(247, 244, 238, 0.42)); clip-path: polygon(0% 13%, 5% 1%, 10% 14%, 15% 3%, 20% 14%, 25% 0%, 30% 13%, 35% 4%, 40% 14%, 45% 1%, 50% 13%, 55% 4%, 60% 14%, 65% 0%, 70% 13%, 75% 3%, 80% 14%, 85% 1%, 90% 13%, 95% 4%, 100% 13%, 100% 87%, 95% 100%, 90% 86%, 85% 99%, 80% 87%, 75% 100%, 70% 86%, 65% 99%, 60% 87%, 55% 100%, 50% 86%, 45% 99%, 40% 87%, 35% 100%, 30% 86%, 25% 99%, 20% 87%, 15% 100%, 10% 86%, 5% 99%, 0% 87%)" }}>
                            <p className="text-sm lg:text-base leading-relaxed text-black">Somewhere between code, design, and user psychology - <span className="bg-purple-200 px-1 rounded">I found what I genuinely love doing. </span> 🔄
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}