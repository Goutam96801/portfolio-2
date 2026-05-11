import Image from "next/image"

const mySkills = [
    {
        id: 1,
        name: "Reactjs",
        icon: "/icons/reactjs.svg",
        color: "#BAE6FD"
    },
    {
        id: 2,
        name: "Nextjs",
        icon: "/icons/nextjs.svg",
        color: "#E4E4E7"
    },
    {
        id: 3,
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        color: "#BFDBFE"
    },
    {
        id: 4,
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        color: "#FEF08A"
    },
    {
        id: 5,
        name: "React Native",
        icon: "/icons/reactjs.svg",
        color: "#A5F3FC"
    },
    {
        id: 6,
        name: "Nodejs",
        icon: "/icons/nodejs.svg",
        color: "#BBF7D0"
    },
    {
        id: 7,
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        color: "#A7F3D0"
    },
    {
        id: 8,
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        color: "#C7D2FE"
    },
    {
        id: 9,
        name: "Supabase",
        icon: "/icons/supabase.svg",
        color: "#D9F99D"
    },
    {
        id: 10,
        name: "Firebase",
        icon: "/icons/firebase.svg",
        color: "#FED7AA"
    },
    {
        id: 11,
        name: "Postman",
        icon: "/icons/postman.svg",
        color: "#FDE68A"
    },
    {
        id: 12,
        name: "Git & Github",
        icon: "/icons/github.svg",
        color: "#CBD5E1"
    },
]

export const MySkills = () => {
    return (
        <section id="projects" aria-label="Featured projects" className="py-8 md:py-16 relative" >
            <div className="absolute top-1/4 -left-12 opacity-70 hidden lg:block transform rotate-12">
                <img
                    src="/shared/idea-light.png"
                    alt=""
                    width={128}
                    height={128}
                    aria-hidden="true"
                    className="mix-blend-multiply"
                />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 delay-200 opacity-100 translate-y-0">
                <span className="inline-block relative pb-[0.15em]">
                    My SkillJar
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
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {
                        mySkills.map((skill) => (
                            <div key={skill.id} className="flex justify-center">
                                <div className="relative group sticky-note-mobile">
                                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg pointer-events-none">
                                        <div className="w-12 h-4 bg-yellow-100 opacity-80 rounded-sm shadow-sm border border-yellow-200 transform -rotate-12 group-hover:opacity-90" />
                                        <div className="absolute inset-0 w-12 h-4 bg-black opacity-5 rounded-sm transform translate-y-0.5 group-hover:translate-y-1 transition-all duration-300" />
                                    </div>
                                    <div className="border border-[#E5E7EB] rounded-lg group-hover:rotate-0! w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 text-xs md:text-sm lg:text-base font-bold text-center flex items-center justify-center hover:scale-[1.02] transition-all duration-200 cursor-default p-4 font-mono text-black relative peel-animate flex-col gap-4"
                                    style={{
                                            background:skill.color,
                                            borderColor:`${skill.color}33`,
                                            rotate:`${skill.id%2===0 ? '2deg' : '-2deg'}`
                                        }}
                                        >
                                            <Image 
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={44}
                                            height={44}
                                            />
                                        {skill.name}
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}