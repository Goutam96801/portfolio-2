'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Filter as FilterIcon,
  Globe2,
  Monitor,
  Server,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import projects from '@/data/projects';

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const projectMeta: Record<string, { categoryLabel: string }> = {
  clarity: { categoryLabel: 'Realtime · Productivity' },
  uicollab: { categoryLabel: 'Open Source · UI Platform' },
  truefeedback: { categoryLabel: 'AI · Anonymous Messaging' },
  whoami: { categoryLabel: 'Mobile · Anonymous Social' },
};


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
  const [contributionDays, setContributionDays] = useState<ContributionDay[]>([]);
  const [contributionsLoading, setContributionsLoading] = useState(true);
  const [contributionsError, setContributionsError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadContributions() {
      try {
        const response = await fetch('/api/github-contributions');
        if (!response.ok) throw new Error('Failed to load contributions');

        const data = (await response.json()) as { days?: ContributionDay[] };
        if (!active) return;

        setContributionDays(data.days ?? []);
        setContributionsError(false);
      } catch {
        if (active) setContributionsError(true);
      } finally {
        if (active) setContributionsLoading(false);
      }
    }

    loadContributions();

    return () => {
      active = false;
    };
  }, []);


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


      {/* Project cards — alternating */}
      <section className="mb-20 md:mb-28 space-y-10 md:space-y-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 delay-200 opacity-100 translate-y-0">
          <span className="inline-block relative pb-[0.15em]">
            All Projects
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
        {projects.map((project, idx) => {
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
                className="group relative aspect-video border-2 border-black overflow-hidden block"
                style={{ backgroundColor: `${project.accentColor}33` }}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </Link>
            </article>
          );
        })}

        {projects.length === 0 && (
          <div className="text-center py-16 border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-base font-bold text-neutral-700">
              Nothing to show for now — coming soon.
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

          <div className="  p-2 overflow-x-auto">
            <GitHubContributionGraph
              days={contributionDays}
              loading={contributionsLoading}
              error={contributionsError}
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

function GitHubContributionGraph({
  days,
  loading,
  error,
}: {
  days: ContributionDay[];
  loading: boolean;
  error: boolean;
}) {
  const weeks = useMemo(() => buildContributionWeeks(days), [days]);

  if (loading) {
    return (
      <div className="flex min-w-160 gap-1" aria-label="Loading GitHub contribution graph">
        {Array.from({ length: 53 }).map((_, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {Array.from({ length: 7 }).map((__, dayIndex) => (
              <span
                key={dayIndex}
                className="h-3 w-3 animate-pulse border border-neutral-300 bg-neutral-200 md:h-3.5 md:w-3.5"
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (error || days.length === 0) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/22c55e/Goutam96801"
          alt="GitHub contribution graph for Goutam96801"
          className="h-auto w-full min-w-160"
          loading="lazy"
        />
      </>
    );
  }

  return (
    <div className="flex min-w-160 justify-center gap-1" aria-label="GitHub contribution graph">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-rows-7 gap-1">
          {week.map((day, dayIndex) => {
            if (!day) {
              return (
                <span
                  key={dayIndex}
                  className="h-3 w-3 border border-transparent md:h-3.5 md:w-3.5"
                />
              );
            }

            const label = getContributionLabel(day);

            return (
              <span
                key={day.date}
                aria-label={label}
                title={label}
                className={`group/cell relative h-3 w-3 cursor-default border md:h-3.5 md:w-3.5 ${getContributionClass(day.level)}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function buildContributionWeeks(days: ContributionDay[]) {
  if (days.length === 0) return [];

  const dayMap = new Map(days.map((day) => [day.date, day]));
  const first = new Date(`${days[0].date}T00:00:00Z`);
  const last = new Date(`${days[days.length - 1].date}T00:00:00Z`);
  const cursor = new Date(first);
  cursor.setUTCDate(cursor.getUTCDate() - cursor.getUTCDay());

  const weeks: Array<Array<ContributionDay | null>> = [];

  while (cursor <= last) {
    const week: Array<ContributionDay | null> = [];

    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const date = cursor.toISOString().slice(0, 10);
      week.push(dayMap.get(date) ?? null);
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

function getContributionLabel(day: ContributionDay) {
  const date = new Date(`${day.date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const unit = day.count === 1 ? 'contribution' : 'contributions';

  return `${day.count} ${unit} on ${date}`;
}

function getContributionClass(level: number) {
  if (level >= 4) return 'border-green-900 bg-green-800';
  if (level === 3) return 'border-green-700 bg-green-600';
  if (level === 2) return 'border-green-500 bg-green-400';
  if (level === 1) return 'border-green-300 bg-green-200';
  return 'border-neutral-300 bg-neutral-200';
}
