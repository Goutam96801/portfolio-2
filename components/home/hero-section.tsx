
const HeroSection = () => {
    return (
        <div className="py-8 md:py-16 lg:py-20 text-center relative px-4 sm:px-6 animate-fadeInUp">
            <div className="max-w-6xl mx-auto w-full text-center relative">
                <div className="select-none relative z-20 mb-8 lg:mb-12 transition-all duration-700 opacity-100 translate-y-0">
                    <h1 className="text-center leading-[1.1]">
                        <span className="block text-3xl sm:text-4xl md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-semibold tracking-tight text-ink mb-2 relative">
                            <svg className="inline-block w-5 h-5 sm:w-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cyan-400 mr-1 align-top mt-1 sm:mt-2 md:mt-3 lg:mt-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z"></path><path d="M18 14L18.75 17.25L22 18L18.75 18.75L18 22L17.25 18.75L14 18L17.25 17.25L18 14Z" opacity="0.6"></path></svg>
                            Scalable {" "}
                            <span className="relative inline-block">
                                Systems
                                <span className="absolute -top-2 sm:-top-4 md:-top-4 lg:-top-1 -right-1 sm:-right-2 md:-right-4 lg:-right-6 text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-wide px-2 sm:px-3 md:px-4 lg:px-5 py-0.5 sm:py-1 md:py-1.5 lg:py-2 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-default select-none z-10 rounded-[20px]" style={{ background: "linear-gradient(145deg, rgb(74, 222, 128) 0%, rgb(22, 163, 74) 100%)", border: "2px solid rgb(255, 255, 255)", boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 0px 0px, rgba(22, 163, 74, 0.5) 0px 4px 12px", textShadow: "rgba(0, 0, 0, 0.2) 0px 1px 2px" }}>
                                    Product
                                </span>
                            </span>
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-semibold tracking-tight text-ink mb-2">
                            <span className="relative inline-block">
                                <svg className="absolute -top-2 sm:-top-1 md:-top-2 lg:-top-3 -left-0.5 sm:-left-1 md:-left-2 lg:-left-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-500 transform -rotate-12 z-10 hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 4px)" }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                                Exceptional
                            </span>
                            {" "} Interfaces
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ">
                        Bridging the gap between complex backend architecture and high-performance frontend interfaces. <br className="hidden md:block" />
                        End-to-end engineering for the modern web.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;