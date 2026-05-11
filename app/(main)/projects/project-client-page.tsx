'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Filter as FilterIcon,
  Layers,
} from 'lucide-react';
import projects from '@/data/projects';

type FilterValue = 'all' | string;

const projectMeta: Record<string, { categoryLabel: string }> = {
  clarity: { categoryLabel: 'Realtime · Productivity' },
  uicollab: { categoryLabel: 'Open Source · UI Platform' },
  truefeedback: { categoryLabel: 'AI · Anonymous Messaging' },
  whoami: { categoryLabel: 'Mobile · Anonymous Social' },
};

const PRIMARY_TECHS: { name: string; icon: string }[] = [
  { name: 'Next.js', icon: "/icons/nextjs.svg" },
  { name: 'React Native', icon: "/icons/reactjs.svg" },
  { name: 'PostgreSQL', icon: "/icons/postgresql.svg" },
];

const toolkit = [
  {
    name: 'GitHub',
    role: 'Code & versioning',
    stripe: 'bg-orange-400',
    iconBg: 'bg-white',
    icon: "icons/github.svg",
  },
  {
    name: 'Notion',
    role: 'Specs, notes & planning',
    stripe: 'bg-neutral-300',
    iconBg: 'bg-neutral-100',
    icon: "icons/notion.svg",
  },
  {
    name: 'VS Code',
    role: 'Daily editor',
    stripe: 'bg-sky-300',
    iconBg: 'bg-sky-50',
    icon: "icons/vs-code.svg",
  },
  {
    name: 'Variant',
    role: 'Component variants',
    stripe: 'bg-purple-300',
    iconBg: 'bg-purple-50',
    icon: "icons/variant.svg",
  },
  {
    name: 'Stitch',
    role: 'Design systems & glue',
    stripe: 'bg-emerald-300',
    iconBg: 'bg-emerald-50',
    icon: "icons/stitch.svg",
  },
  {
    name: 'Claude',
    role: 'AI pair programmer',
    stripe: 'bg-amber-300',
    iconBg: 'bg-amber-50',
    icon: "icons/claude.svg",
  },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    for (const p of projects) {
      for (const t of p.techStack) set.add(t.name);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const moreTechs = useMemo(
    () => allTechs.filter((t) => !PRIMARY_TECHS.some((p) => p.name === t)),
    [allTechs],
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length };
    for (const tech of allTechs) {
      c[tech] = projects.filter((p) =>
        p.techStack.some((t) => t.name === tech),
      ).length;
    }
    return c;
  }, [allTechs]);

  const filtered = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((p) => p.techStack.some((t) => t.name === filter));
  }, [filter]);

  const primaryButtons: { id: FilterValue; label: string; icon: string }[] = [
    { id: 'all', label: 'All Work', icon: "/icons/zap.svg" },
    ...PRIMARY_TECHS.map(({ name, icon }) => ({ id: name, label: name, icon })),
  ];

  const isMoreActive = filter !== 'all' && moreTechs.includes(filter);

  return (
    <main className="min-h-screen pt-8 md:pt-12 pb-24">
      {/* Hero */}
      <section className="text-center mb-12 md:mb-16 max-w-5xl mx-auto px-2">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500 mb-6 opacity-0 animate-fadeInUp">
          Selected Works
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] mb-8 opacity-0 animate-fadeInUp">
          Building products that feel native everywhere
        </h1>
        <p className="text-base md:text-lg text-neutral-700 font-medium max-w-3xl mx-auto leading-relaxed mb-4 opacity-0 animate-fadeInUp">
          A focused collection of full-stack products across web & mobile — spanning realtime collaboration, open-source tooling, and AI-powered experiences.
        </p>
        <p className="text-sm uppercase tracking-[0.3em] font-bold text-neutral-700 opacity-0 animate-fadeInUp">
          {projects.length} scalable products crafted across web & mobile ecosystems
        </p>
      </section>

      {/* Filter bar */}
      <section className="mb-16 md:mb-20">
        <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6">
          <div className="flex flex-row items-center justify-between gap-4 md:gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-500 mb-1">
                Browse
              </p>
              <h3 className="text-base md:text-xl font-bold text-black">
                Filter the work by focus
              </h3>
            </div>

            {/* Mobile: single trigger */}
            <button
              onClick={() => setMobileFilterOpen((o) => !o)}
              aria-expanded={mobileFilterOpen}
              className={`md:hidden inline-flex items-center gap-2 px-3 py-2 border-2 border-black font-bold text-sm cursor-pointer transition-all duration-150 ${filter !== 'all' || mobileFilterOpen
                ? 'bg-orange-400 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black'
                }`}
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              <span
                className={`w-7 h-7 -ml-1 flex items-center justify-center border-2 border-black ${filter !== 'all' ? 'bg-black text-orange-400' : 'bg-white'
                  }`}
              >
                <FilterIcon className="w-3.5 h-3.5" />
              </span>
              <span className="truncate max-w-32">
                {filter === 'all' ? 'Filters' : filter}
              </span>
              <span className="ml-1 text-xs font-bold text-black/70">
                {counts[filter === 'all' ? 'all' : filter] ?? 0}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileFilterOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {/* Desktop: inline chips */}
            <div className="hidden md:flex items-center gap-2 md:gap-3 flex-wrap">
              {primaryButtons.map(({ id, label, icon }) => {
                const isActive = filter === id;
                return (
                  <button
                    key={id}
                    onClick={() => setFilter(id)}
                    className={`group inline-flex items-center gap-2 px-3 md:px-4 py-1.5 border-2 border-black font-bold text-sm cursor-pointer transition-all duration-150 ${isActive
                      ? 'bg-orange-400 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-white text-black hover:bg-orange-400 hover:translate-x-0.5 hover:translate-y-0.5'
                      }`}
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    <span
                      className={`w-8 h-8 -ml-1 flex items-center justify-center border-2 border-black ${isActive ? ' text-orange-400' : 'bg-white'
                        }`}
                    >
                      <Image
                        src={icon}
                        alt={label}
                        width={28}
                        height={28}
                      />
                    </span>
                    <span>{label}</span>
                    <span
                      className={`ml-1 text-xs font-bold ${isActive ? 'text-black/70' : 'text-neutral-500'
                        }`}
                    >
                      {counts[id] ?? 0}
                    </span>
                  </button>
                );
              })}

              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen((o) => !o)}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                  className={`group inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 border-2 border-black font-bold text-sm cursor-pointer transition-all duration-150 ${isMoreActive
                    ? 'bg-orange-400 text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-black hover:bg-orange-400 hover:translate-x-0.5 hover:translate-y-0.5'
                    }`}
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  <span
                    className={`w-7 h-7 -ml-1 flex items-center justify-center border-2 border-black ${isMoreActive ? 'bg-black text-orange-400' : 'bg-white'
                      }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                  </span>
                  <span>{isMoreActive ? filter : 'More'}</span>
                  {isMoreActive && (
                    <span className="ml-1 text-xs font-bold text-black/70">
                      {counts[filter] ?? 0}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {moreOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 mt-2 z-50 w-60 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-fadeInUp"
                  >
                    <div className="max-h-72 overflow-y-auto py-1">
                      {moreTechs.length === 0 ? (
                        <p className="px-4 py-3 text-sm text-neutral-500 font-medium">
                          Nothing else to filter.
                        </p>
                      ) : (
                        moreTechs.map((tech) => {
                          const isSelected = filter === tech;
                          return (
                            <button
                              key={tech}
                              role="menuitem"
                              onClick={() => {
                                setFilter(tech);
                                setMoreOpen(false);
                              }}
                              className={`flex items-center gap-3 px-4 py-2.5 w-full text-sm font-bold cursor-pointer transition-colors duration-150 border-b border-black/10 text-left text-black ${isSelected ? 'bg-orange-400' : 'hover:bg-orange-400'
                                }`}
                              style={{ fontFamily: 'Sora, sans-serif' }}
                            >
                              <span className="flex-1 truncate">{tech}</span>
                              <span className="text-xs font-bold text-black/60">
                                {counts[tech] ?? 0}
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-black" />}
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile expanded panel */}
          {mobileFilterOpen && (
            <div className="md:hidden mt-5 pt-5 border-t-2 border-black/10 animate-fadeInUp">
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500 mb-3">
                Featured
              </p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {primaryButtons.map(({ id, label, icon }) => {
                  const isActive = filter === id;
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        setFilter(id);
                        setMobileFilterOpen(false);
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-2.5 border-2 border-black font-bold text-sm cursor-pointer transition-colors duration-150 ${isActive ? 'bg-orange-400' : 'bg-white hover:bg-orange-400'
                        }`}
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      <span
                        className={`w-6 h-6 flex items-center justify-center border-2 border-black ${isActive ? 'bg-black text-orange-400' : 'bg-white'
                          }`}
                      >
                        <Image
                          src={icon}
                          alt={label}
                          fill
                        />
                      </span>
                      <span className="flex-1 text-left truncate">{label}</span>
                      <span className="text-xs font-bold text-black/60">
                        {counts[id] ?? 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              {moreTechs.length > 0 && (
                <>
                  <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500 mb-3">
                    More tech
                  </p>
                  <div className="border-2 border-black bg-white max-h-64 overflow-y-auto">
                    {moreTechs.map((tech) => {
                      const isSelected = filter === tech;
                      return (
                        <button
                          key={tech}
                          onClick={() => {
                            setFilter(tech);
                            setMobileFilterOpen(false);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 w-full text-sm font-bold cursor-pointer transition-colors duration-150 border-b border-black/10 last:border-b-0 text-left text-black ${isSelected ? 'bg-orange-400' : 'hover:bg-orange-400'
                            }`}
                          style={{ fontFamily: 'Sora, sans-serif' }}
                        >
                          <span className="flex-1 truncate">{tech}</span>
                          <span className="text-xs font-bold text-black/60">
                            {counts[tech] ?? 0}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-black" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project cards — alternating */}
      <section className="mb-20 md:mb-28 space-y-10 md:space-y-14">
        {filtered.map((project, idx) => {
          const meta = projectMeta[project.id];
          const isReversed = idx % 2 === 1;
          return (
            <article
              key={project.id}
              className={`bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center opacity-0 animate-fadeInUp ${isReversed ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              {/* Text */}
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-[1.1]">
                  {project.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] font-bold text-orange-500">
                  {meta?.categoryLabel ?? 'Featured Work'}
                </p>
                <p className="text-sm md:text-base text-neutral-700 font-medium leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 bg-white border-2 border-black px-6 py-3 font-bold text-black hover:bg-orange-400 transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Open Work
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <Link
                href={`/projects/${project.id}`}
                className="group relative aspect-4/3 border-2 border-black overflow-hidden bg-neutral-100/50 block"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Link>
            </article>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-16 border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-base font-bold text-neutral-700">
              Nothing in this category yet — more on the way.
            </p>
          </div>
        )}
      </section>

      {/* Toolkit */}
      <section className="mb-20 md:mb-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500 mb-4">
          Toolkit
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-black mb-5 leading-tight">
          How I shape the work
        </h2>
        <p className="text-base md:text-lg text-neutral-700 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
          A pragmatic stack for shipping — building, writing, exploring, and
          pairing with AI when the leverage is real.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 text-left">
          {toolkit.map((tool, idx) => (
            <div
              key={tool.name}
              className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className={`h-1.5 w-12 ${tool.stripe} mb-6`}></div>
              <div
                className={`w-12 h-12 border-2 border-black flex items-center justify-center mb-5 ${tool.iconBg}`}
              >
                <Image
                  src={tool.icon}
                  width={28}
                  height={28}
                  alt={tool.name}
                  className="w-6 h-6 text-black"
                />
              </div>
              <h3 className="text-xl font-black text-black mb-1">{tool.name}</h3>
              <p className="text-sm text-neutral-700 font-medium">
                {tool.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub build rhythm */}
      <section className="mb-8">
        <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-7">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500">
                GitHub
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-black leading-tight">
                Current build rhythm
              </h2>
              <p className="text-sm md:text-base text-neutral-700 font-medium leading-relaxed">
                A live snapshot of recent coding consistency and output.
              </p>
            </div>
            <a
              href="https://github.com/Goutam96801"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start bg-orange-400 border-2 border-black px-5 py-3 font-bold text-black hover:bg-green-400 transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Visit @Goutam96801
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border-2 border-black bg-neutral-50 p-4 md:p-5 overflow-x-auto">
            {/* Live GitHub contribution graph (SVG from ghchart.rshah.org) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/22c55e/Goutam96801"
              alt="GitHub contribution graph for Goutam96801"
              className="w-full min-w-160 h-auto"
              loading="lazy"
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-5 mt-5 border-t-2 border-neutral-200">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-700">
              Contribution graph
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-700">
              <span>Less</span>
              <span className="inline-flex gap-0.5">
                <span className="w-3.5 h-3.5 bg-neutral-200 border border-neutral-300"></span>
                <span className="w-3.5 h-3.5 bg-green-200 border border-green-300"></span>
                <span className="w-3.5 h-3.5 bg-green-400 border border-green-500"></span>
                <span className="w-3.5 h-3.5 bg-green-600 border border-green-700"></span>
                <span className="w-3.5 h-3.5 bg-green-800 border border-green-900"></span>
              </span>
              <span>More</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
