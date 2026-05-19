"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!isHovered) {
            setCurrentImage(0);
            return;
        }

        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === project.images.length - 1 ? 0 : prev + 1
            );
        }, 1000);

        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);


    return (
        <div
            className="transition-all duration-300 hover:scale-[1.02] shrink-0 max-w-70 sm:w-[320px] md:max-w-85  min-h-105 ml-0 w-full "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link className="block group min-h-95" href={`/projects/${project.id}`}>
                <div className="modern-card micro-tilt-card h-full transition-all duration-300 cursor-pointer group-hover:shadow-xl flex flex-col group overflow-hidden bg-white pb-4">

                    <div className="relative mb-5 overflow-hidden rounded-none bg-gray-100 aspect-4/3 shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.02] micro-image">
                        {[project.coverImage, ...project.images.map((img) => img.image)].map(
                            (image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={project.title}
                                    fill
                                    loading={index === 0 ? "eager" : "lazy"}
                                    fetchPriority={index === 0 ? "high" : "auto"}
                                    preload={index === 0}
                                    sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 320px, 320px"
                                    decoding="async"
                                    className={`
                    object-cover absolute inset-0
                    transition-opacity duration-700 ease-in-out
                    ${currentImage === index ? "opacity-100" : "opacity-0"}
                `}
                                />
                            )
                        )}
                    </div>

                    <div className="grow flex flex-col min-h-0">
                        <div>
                            <h3 className="text-xl font-bold leading-tight mb-2 transition-colors duration-200 line-clamp-1 "
                                style={{
                                    color: isHovered ? project.accentColor : "#111827",
                                }}
                            >
                                {project.title}
                            </h3>

                            <p className="font-sans text-sm leading-relaxed text-gray-500 line-clamp-3 min-h-18">
                                {project.subtitle}
                            </p>
                        </div>

                        <div className="mt-4 flex items-center text-sm font-medium">
                            <span className="inline-block transition-colors duration-300 relative pb-[0.15em]"
                                style={{
                                    color: isHovered ? project.accentColor : "#4B5563",
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    Know more
                                    <ArrowRight size={18} />
                                </span>
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
                                            stroke: project.accentColor,
                                            strokeOpacity: 0.25,
                                            strokeWidth: 9,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            filter: `url(#scribble-wobble-${project.id})`,
                                            strokeDasharray: 100,
                                            strokeDashoffset: isHovered ? 0 : 100,
                                            opacity: isHovered ? 1 : 0,
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
                                                stroke: project.accentColor,
                                                strokeWidth: 6,
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                filter: "url(#scribble-wobble)",
                                                strokeDasharray: 100,
                                                strokeDashoffset: isHovered ? 0 : 100,
                                                opacity: isHovered ? 1 : 0,
                                                transition:
                                                    "stroke-dashoffset 650ms cubic-bezier(0.16,1,0.3,1) 40ms, opacity 420ms cubic-bezier(0.16,1,0.3,1) 40ms",
                                            }}
                                        />
                                    </g>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
