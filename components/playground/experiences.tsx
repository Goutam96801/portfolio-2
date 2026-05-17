"use client";

import Image from "next/image";

const experiences = [
  {
    id: 2,
    period: "Dec 2025 - Current",
    role: "Software Developer",
    company: "Mono",
    logo: "/images/mono.svg",
    shortDesc: "Building and scaling production-grade web applications with Next.js, TypeScript, Supabase, and PostgreSQL.",
    type: "fulltime",
    accentColor: "from-purple-50 to-purple-100",
    dotColor: "bg-purple-500",
  },
  {
    id: 1,
    period: "May 2025 - Nov 2025",
    role: "Software Engineer Intern",
    company: "Mono",
    logo: "/images/mono.svg",
    shortDesc: "Built and maintained core frontend and backend features using React, Node.js, and PostgreSQL.",
    type: "internship",
    accentColor: "from-blue-50 to-blue-100",
    dotColor: "bg-blue-500",
  },
];

const ArrowConnector = () => (
  <div className="flex items-center justify-center h-16 -my-2">
    <svg
      viewBox="0 0 200 80"
      className="w-full h-full"
      preserveAspectRatio="none"
      style={{ maxHeight: "80px" }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
        </marker>
      </defs>

      <path
        d="M 10 10 Q 100 40 190 70"
        stroke="#d1d5db"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        markerEnd="url(#arrowhead)"
      />

      <circle cx="10" cy="10" r="3" fill="#d1d5db" opacity="0.5" />
      <circle cx="100" cy="40" r="3" fill="#d1d5db" opacity="0.5" />
      <circle cx="190" cy="70" r="3" fill="#d1d5db" opacity="0.5" />
    </svg>
  </div>
);

export const Experiences = () => {
  return (
    <div id="experiences" className="absolute left-87.5 top-30">
      <div className="mb-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 -inset-x-2 -inset-y-1 -z-10 -rotate-1 rounded bg-[#fef3c7]" />
          <h2 className="px-2 font-['Kalam',cursive] text-2xl font-bold text-stone-800 md:text-3xl">
            Experiences
          </h2>
        </div>
      </div>

      <div className="w-full max-w-2xl rounded-2xl border border-stone-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm">
        <div className="flex gap-6 relative">
          {/* Left: Timeline and Company Info */}
          <div className="flex flex-col items-center ">
            {/* Timeline dots and connector lines */}
            <div className="flex flex-col items-center gap-1 mt-12">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative">
                  <div
                    className={`h-4 w-4 rounded-full border-2 border-stone-300 ${exp.dotColor} transition-all duration-300 hover:scale-125 cursor-pointer`}
                  />
                  {idx < experiences.length - 1 && (
                    <div className="h-38 w-0.5 bg-gradient-to-b from-stone-300 to-stone-100 mx-auto" />
                  )}
                </div>
              ))}
            </div>

            {/* Company Info - positioned at the bottom (where internship started) */}
            <div className="mt-1 flex flex-col items-center">
              <div className="relative">
                <div className="relative h-12 w-16 overflow-hidden ">
                  <Image
                    src={experiences[1].logo}
                    alt={experiences[1].company}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-lg text-stone-900 mb-1">
                  {experiences[1].company}
                </h3>
              </div>
            </div>
          </div>

          {/* Right: Experience Cards */}
          <div className="flex-1 flex flex-col gap-0">
            {experiences.map((exp, idx) => (
              <div key={exp.id}>
                <div
                  className={`group relative overflow-hidden rounded-xl border-2 border-stone-300 bg-gradient-to-br ${exp.accentColor} px-5 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer`}
                >
                  {/* Period Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-stone-900 leading-tight">
                        {exp.role}
                        {exp.period.includes("Current") && (
                          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500 ml-3" />
                        )}
                      </h3>
                      <p className="text-xs font-mono text-stone-600 uppercase tracking-wide mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm leading-relaxed text-stone-700 mb-3">
                    {exp.shortDesc}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Arrow Connector between cards */}
                {idx < experiences.length - 1 && <ArrowConnector />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
