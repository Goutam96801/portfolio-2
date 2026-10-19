import projects from "@/data/projects"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { ProjectCard } from "../module/project-card"
import Link from "next/link"

export const BestProjects = () => {
    return (
        <section id="projects" aria-label="Featured projects" className="py-8 md:py-16 relative animate-fadeInUp" >
            <div className="absolute top-1/4 -right-12 opacity-70 hidden lg:block transform rotate-12">
                <img
                    src="/shared/flower.png"
                    alt=""
                    width={128}
                    height={128}
                    aria-hidden="true"
                    className="mix-blend-multiply dark:invert"
                />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 delay-200 opacity-100 translate-y-0">
                <span className="inline-block relative pb-[0.15em]">
                    BEST WORKS
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
            <div className="transition-all duration-600 delay-300 opacity-100">
                <div className="lg:hidden overflow-x-auto scrollbar-hide artboard-horizontal-scroll -mx-4 px-4">
                    <div className="flex gap-4 md:gap-6 pb-4 w-max">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block max-w-6xl mx-auto px-4 py-2">
                    <div className="grid grid-cols-3 gap-8 items-start">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-12 md:mt-16 px-4">
                        <Link
                            className="daisy-button bg-orange-400 hover:bg-surface duration-300 trnasform-all text-sm md:text-base px-6 md:px-8 py-3 md:py-4 inline-block border-2 font-semibold border-line"
                            href="/projects"
                        >
                            VIEW ALL PROJECTS
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}