// data/projects.ts

export interface ProjectImage {
  id: string;
  image: string;
  label: string;
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  role: string;
  description: string;
}

export interface Credential {
  provider: string;
  password: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;

  images: ProjectImage[];
  /** Lettered screenshots (projecta/b/c…). Omit or empty to hide the gallery. */
  galleryImages?: string[];

  description: string;

  sourceCode: string;
  demo?: string;
  accentColor: string;

  techStack: TechStackItem[];
  credentials?: Credential;
}

export const projects: Project[] = [
  {
    id: "clarity",
    title: "CLARITY.",
    subtitle:
      "Collaborative productivity workspace with Kanban, calendar, notes, and realtime collaboration.",
    coverImage: "/images/clarity1.png",

    images: [
      {
        id: "clarity-calendar-day",
        image: "/images/clarity1.png",
        label: "Calendar · Day View",
        title: "Daily focus, time-blocked",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            A focused single-day canvas where every hour is a slot to claim.
            Plans become tangible blocks, and nothing important slips between them.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span><span class="font-medium text-black">Time-blocked scheduling</span> with quick drag handles</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Color-coded categories for instant visual triage</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Inline event creation without leaving the canvas</span>
            </li>
          </ul>
        `,
      },

      {
        id: "clarity-calendar-week",
        image: "/images/clarity2.png",
        label: "Calendar · Week View",
        title: "A whole week, at a glance",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Step back and see the shape of your week. Pattern out routines,
            spot pockets of free time, and reschedule with a single drag.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Seven-day grid with overlapping event support</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Drag-and-drop rescheduling across days</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Keyboard navigation for fast week-to-week jumps</span>
            </li>
          </ul>
        `,
      },

      {
        id: "clarity-calendar-list",
        image: "/images/clarity3.png",
        label: "Calendar · List View",
        title: "Just the agenda — nothing else",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Sometimes a grid is too much. The list view strips the calendar
            down to a chronological feed of what's next.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Chronological event ordering with day separators</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>One-tap quick edit on any event</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Optimised for low-distraction skimming</span>
            </li>
          </ul>
        `,
      },

      {
        id: "clarity-sticky-notes",
        image: "/images/clarity4.png",
        label: "Workspace · Sticky Notes",
        title: "A wall for messy thinking",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Loose ideas deserve a loose surface. The sticky-note board is an
            infinite canvas for capture, clustering, and collaborative riffs.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Free-form drag-and-drop placement</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Persistent canvas state synced per workspace</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Realtime presence cursors for shared brainstorms</span>
            </li>
          </ul>
        `,
      },

      {
        id: "clarity-kanban",
        image: "/images/clarity5.png",
        label: "Workspace · Kanban Board",
        title: "Move work across the board",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            A Kanban that's responsive, collaborative, and quick under the
            fingertips. Columns adapt to the way each team actually ships.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Drag-and-drop cards with optimistic UI updates</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Custom statuses, labels, and priority tags</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Realtime sync — no refresh, no stale state</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">CLARITY</span> is a modern productivity
          workspace that pulls scheduling, planning, and brainstorming into one
          continuous surface.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Most teams stitch together five tools to ship one project. CLARITY collapses
          calendars, Kanban boards, sticky-note canvases, and customisable workspaces
          into a single realtime experience — designed so individuals stay focused
          and teams stay in sync without bouncing between tabs.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            What makes it different
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Realtime by default</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Every board, note, and event syncs live across collaborators with
                presence indicators baked in.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">One workspace, many views</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Switch between calendar, kanban, and freeform canvases without
                losing context or losing data.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Built for keyboard speed</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Power-user shortcuts everywhere — create, edit, move, and search
                without touching the mouse.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Server-rendered, edge-fast</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Built on Next.js App Router with Supabase realtime — fast first
                paint, low-latency updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/clarity",
    demo: "https://clarity-workspace.vercel.app/",
    accentColor: '#333',

    techStack: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        role: "Full-stack framework",
        description: `App Router, server components, and route handlers power both the rendering layer and the API surface — one codebase, one deploy target.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe foundation",
        description: `End-to-end typing across UI, API, and database models keeps refactors safe and catches contract drift at compile time.`,
      },
      {
        name: "Supabase",
        icon: "/icons/supabase.svg",
        role: "Backend platform",
        description: `Auth, Postgres, storage, and realtime channels under one SDK — drives the live cursors, presence, and shared workspace state.`,
      },
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        role: "Relational database",
        description: `Schema-first storage for workspaces, events, boards, and notes — with row-level security keeping each team's data isolated.`,
      },
      {
        name: "TanStack Query",
        icon: "/icons/tanstack.svg",
        role: "Server-state cache",
        description: `Handles fetching, caching, optimistic updates, and background revalidation so the UI stays snappy and the network stays quiet.`,
      },
    ],
    credentials: {
      provider: "gautamkumar96801@gmail.com",
      password: "12345678"
    },
  },

  {
    id: "syntax",
    title: "Syntax.AI",
    subtitle:
      "LeetCode-style practice platform with problem browser, Monaco IDE, playground, and community discuss.",
    coverImage: "/images/syntax1.png",
    galleryImages: ["/images/syntaxa.png", "/images/syntaxb.png"],

    images: [
      {
        id: "syntax-landing",
        image: "/images/syntax1.png",
        label: "Marketing · Landing",
        title: "Master the logic behind the code",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The landing surface opens with an AI practice prompt — tell Syntax.AI
            what you want to drill today, or jump straight into curated topic chips.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Roadmap-driven practice prompt on the home hero</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Quick topic chips for Two Sum, DP, graphs, and more</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Auth-ready nav into Problems, Contest, and Discuss</span>
            </li>
          </ul>
        `,
      },
      {
        id: "syntax-problems",
        image: "/images/syntax2.png",
        label: "Catalog · Problems",
        title: "Browse, filter, and star your lists",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            A full problem library with topic tags, search, difficulty labels,
            and custom lists — built for the daily solve loop.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Tag filters across arrays, DP, graphs, and more</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Smart lists, favourites, and daily calendar streak widget</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Search and shuffle across thousands of questions</span>
            </li>
          </ul>
        `,
      },
      {
        id: "syntax-workspace",
        image: "/images/syntax3.png",
        label: "Workspace · IDE",
        title: "Read, code, run, submit",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The problem workspace pairs the statement with Monaco — sample
            tests, custom cases, Run, and Submit through a cloud judge.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Multi-language Monaco editor with starter templates</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Sample and custom testcases with Run / Submit</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Server-side judging via OnlineCompiler.io</span>
            </li>
          </ul>
        `,
      },
      {
        id: "syntax-discuss",
        image: "/images/syntax4.png",
        label: "Community · Discuss",
        title: "Share solutions, ask anything",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Discuss is the community layer — new threads, problem-linked posts,
            likes, and views so solvers can learn out loud.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>All / General / Problem-linked thread filters</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>New thread composer with like, comment, and view counts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Search and sort by newest for fast discovery</span>
            </li>
          </ul>
        `,
      },
      {
        id: "syntax-settings",
        image: "/images/syntax5.png",
        label: "Account · Settings",
        title: "Points, privacy, and connected accounts",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Account settings cover identity, OAuth connections, points, and the
            danger zone — with streaks and rewards baked into the profile loop.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Email/password auth plus Google, GitHub, Apple, LinkedIn</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Points, subscription, privacy, and notification tabs</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Public profiles at /p/[username] with bio and socials</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">Syntax.AI</span> is an open-source,
          LeetCode-style practice platform — discover problems, solve in the
          browser, and discuss approaches with the community.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Built with Next.js and Convex, it covers the full practice loop:
          auth, a searchable problem catalog, Monaco workspace with cloud
          judging, a free-form playground, public profiles, and daily points
          and streaks.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            Core features
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Problem workspace</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Monaco editor, sample/custom tests, Run and Submit through
                OnlineCompiler.io.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Smart problem lists</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Browse by tags and difficulty, star custom lists, and track
                daily streaks.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Discuss + playground</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Community threads for solutions, plus a multi-language
                playground outside any single problem.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Convex-backed realtime</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Auth, DB, file storage, and judge actions live in Convex —
                deployed with Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/lc-clone",
    demo: "https://lc-clone-vert.vercel.app",
    accentColor: "#F59E0B",

    techStack: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        role: "Full-stack framework",
        description: `App Router pages for landing, problems, playground, discuss, profiles, and settings — one deployable frontend.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe foundation",
        description: `End-to-end typing across feature UI, Convex validators, and the judge contract.`,
      },
      {
        name: "Convex",
        icon: "/icons/zap.svg",
        role: "Backend platform",
        description: `Database, auth, actions, and file storage — problems, submissions, points, and profiles live here.`,
      },
      {
        name: "Monaco Editor",
        icon: "/icons/vs-code.svg",
        role: "In-browser IDE",
        description: `VS Code-grade editing for multi-language problem solving and the free-form playground.`,
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/javascript.svg",
        role: "UI system",
        description: `Tailwind 4 + shadcn/ui power the dark coding-practice chrome and dense problem tables.`,
      },
    ],
  },

  {
    id: "finnest",
    title: "FinNest",
    subtitle:
      "Mobile personal finance nest for balances, stats, accounts, subscriptions, and transaction tracking.",
    coverImage: "/images/finnest1.jpeg",

    images: [
      {
        id: "finnest-home",
        image: "/images/finnest1.jpeg",
        label: "Tabs · Home",
        title: "Your money nest at a glance",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Home opens on total balance, income vs expense, upcoming
            subscriptions, and recent transactions — with quick add always
            one tap away.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Swipeable balance cards across total and per-account</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Upcoming subscriptions strip with pay / snooze / skip</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Recent transactions plus notifications and global search</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-statistics",
        image: "/images/finnest2.jpeg",
        label: "Tabs · Statistics",
        title: "See the shape of your spending",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Statistics breaks spend into weekly, monthly, and yearly views
            with overview bars and expense trend lines per account scope.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Weekly / monthly / yearly period switcher</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>All-accounts or single-account scoped charts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Overview bars and expense trend line charts</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-accounts",
        image: "/images/finnest3.jpeg",
        label: "Tabs · Accounts",
        title: "Every wallet in one place",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Accounts lists every linked wallet with bank mask, balance, and a
            Primary badge so transfers and totals stay honest.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Multi-account list with bank details and balances</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Primary account badge and add-account flow</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Total balance rollup across every wallet</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-profile",
        image: "/images/finnest4.jpeg",
        label: "Tabs · Profile",
        title: "Identity and shortcuts",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Profile is the hub for edit profile, settings, privacy policy, and
            logout — kept minimal so the money surfaces stay primary.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Avatar, name, and email at a glance</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Quick links into settings and privacy policy</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>One-tap logout when you're done</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-settings",
        image: "/images/finnest5.jpeg",
        label: "Settings · Preferences",
        title: "Balances, alerts, and exports",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Settings covers hide-balances, week start, subscription reminders,
            low-balance alerts, CSV/PDF export, and account credentials.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Hide balances by default when the app opens</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Subscription reminders and low-balance threshold alerts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Export transactions as CSV or PDF</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-update-profile",
        image: "/images/finnest6.jpeg",
        label: "Profile · Edit",
        title: "Name, timezone, currency",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Update profile keeps identity local — avatar, display name,
            timezone, and currency for INR-first money formatting.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Avatar upload with inline edit affordance</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Timezone picker for reminder scheduling</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Currency preference (INR and beyond)</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-transactions",
        image: "/images/finnest7.jpeg",
        label: "Ledger · Transactions",
        title: "Searchable expense history",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The full ledger supports search by note or category plus filters
            for type, account, and date — expense, income, and transfers.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Expense, income, and transfer transaction types</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Search notes/categories with type, account, date filters</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Quick-add from the green + action</span>
            </li>
          </ul>
        `,
      },
      {
        id: "finnest-notifications",
        image: "/images/finnest8.jpeg",
        label: "System · Notifications",
        title: "Due soon, never surprise",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Notifications surface subscription dues and reminder confirmations
            so Wifi, recharges, and bills get handled before they bite.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Due today / due tomorrow subscription alerts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Unread dots with mark-all-read control</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Reminder-set confirmations for future dues</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">FinNest</span> is a mobile personal
          finance nest — one place to see balances, understand spending, manage
          accounts, and stay ahead of subscriptions.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Built with Expo and Supabase, it covers the daily money loop: swipeable
          home cards, statistics, multi-account wallets with a primary badge,
          expense/income/transfer ledger, recurring subscription reminders, and
          privacy-minded settings like hide-balances and low-balance alerts.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            What makes it different
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Subscriptions that act</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Paid creates a transaction; snooze and skip keep the strip honest.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Multi-account truth</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Primary wallets, transfers between accounts, and totals that
                roll up correctly.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Stats you can scope</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Weekly to yearly charts filtered by all accounts or one wallet.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Native, dark, fast</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Expo Router + NativeWind with Reanimated motion and Supabase
                auth/data.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/finNest",
    accentColor: "#A3E635",

    techStack: [
      {
        name: "Expo",
        icon: "/icons/expo.svg",
        role: "Cross-platform mobile shell",
        description: `Expo Router, notifications, image picker, and EAS-ready builds for iOS and Android.`,
      },
      {
        name: "React Native",
        icon: "/icons/reactjs.svg",
        role: "Native UI runtime",
        description: `Gesture-driven tabs, bottom sheets, and Reanimated transitions for the money surfaces.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe foundation",
        description: `Shared types across accounts, transactions, subscriptions, and notification services.`,
      },
      {
        name: "NativeWind",
        icon: "/icons/nativewind.svg",
        role: "Tailwind for native",
        description: `Utility-first styling keeps the dark lime-accent UI consistent across screens.`,
      },
      {
        name: "Supabase",
        icon: "/icons/supabase.svg",
        role: "Backend platform",
        description: `Auth, Postgres, and storage for accounts, ledger rows, subscriptions, and profiles.`,
      },
    ],
  },

  {
    id: "zenvy",
    title: "Zenvy",
    subtitle:
      "Realtime chat platform with DMs, Circles, calls, and deep profile appearance & privacy controls.",
    coverImage: "/images/zenvy1.png",
    galleryImages: [
      "/images/zenvya.png",
      "/images/zenvyb.png",
      "/images/zenvyc.png",
      "/images/zenvyd.png",
      "/images/zenvye.png",
    ],

    images: [
      {
        id: "zenvy-dm",
        image: "/images/zenvy1.png",
        label: "Chat · Direct messages",
        title: "Conversations that feel alive",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Direct messages with read receipts, emoji reactions, voice input,
            and a starfield canvas — presence without the noise.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Realtime DMs with delivery and read receipts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Emoji reactions and gradient chat bubbles</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Search people and jump between conversations</span>
            </li>
          </ul>
        `,
      },
      {
        id: "zenvy-circles",
        image: "/images/zenvy2.png",
        label: "Workspace · Circles",
        title: "Spaces with a lifespan",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Circles are private group spaces — member counts, countdown
            lifespans, and a Start Call button when the room is ready.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Circle list with search and invite affordances</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Member count and remaining lifespan on every room</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Start Call entry point for voice/video sessions</span>
            </li>
          </ul>
        `,
      },
      {
        id: "zenvy-create-circle",
        image: "/images/zenvy3.png",
        label: "Circles · Create",
        title: "Set the tone before anyone joins",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Create circle captures name, description, type, visibility, and
            lifespan so spaces stay intentional from the first invite.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Standard group chat type with private invite-only visibility</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Configurable lifespan in hours or days</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Roles for admin, co-admin, and member</span>
            </li>
          </ul>
        `,
      },
      {
        id: "zenvy-profile-settings",
        image: "/images/zenvy4.png",
        label: "Settings · Profile",
        title: "Identity you control",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Profile settings hold display name, username, bio, email, and
            photo — the public face of every DM and Circle.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Edit display name, username, and bio</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Change photo without leaving settings</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Sidebar jump to appearance and privacy</span>
            </li>
          </ul>
        `,
      },
      {
        id: "zenvy-appearance",
        image: "/images/zenvy5.png",
        label: "Settings · Appearance",
        title: "Theme, type, and chat color",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Appearance lets each person tune light/dark/system, font size,
            solid or gradient bubble colors, and live preview the result.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Light, dark, and system theme cards</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Solid + gradient chat color pickers with custom swatches</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Live bubble preview as you customize</span>
            </li>
          </ul>
        `,
      },
      {
        id: "zenvy-privacy",
        image: "/images/zenvy6.png",
        label: "Settings · Privacy",
        title: "Presence on your terms",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Privacy toggles online status, last seen, typing, read receipts,
            and notifications — plus a master switch for all presence signals.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Master show/hide for all presence activity</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Per-signal controls for online, last seen, typing, receipts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Notification preference toggle for messages and mentions</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">Zenvy</span> is a realtime chat
          platform built around DMs and Circles — private spaces with lifespan,
          roles, calls, and appearance you actually own.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Powered by Next.js and Supabase Auth, Realtime, and Postgres, Zenvy
          ships message reactions, read receipts, circle creation with
          visibility and lifespan, Start Call entry points, and settings for
          profile, appearance, and granular privacy.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            Core features
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">DMs that feel native</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Realtime messaging with receipts, reactions, and custom bubble
                colors.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Circles with intent</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Private groups with roles, invite flow, and optional lifespan
                countdowns.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Appearance playground</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Themes, font sizes, solid and gradient chat colors with live
                preview.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Privacy dials</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Online, last seen, typing, receipts, and notifications — each
                toggleable.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/Zenvy",
    demo: "https://zenvy-six.vercel.app",
    accentColor: "#A855F7",

    techStack: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        role: "Full-stack framework",
        description: `App Router for chat, circles, auth, and settings — server components where they help, client where realtime needs them.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe foundation",
        description: `Shared types across profiles, circles, messages, and privacy preferences.`,
      },
      {
        name: "Supabase",
        icon: "/icons/supabase.svg",
        role: "Backend platform",
        description: `Auth, Postgres with RLS, Realtime channels, and storage for avatars and chat media.`,
      },
      {
        name: "TanStack Query",
        icon: "/icons/reactjs.svg",
        role: "Server-state cache",
        description: `Fetches and caches profile, circle, and conversation state while realtime patches keep the UI fresh.`,
      },
      {
        name: "React",
        icon: "/icons/reactjs.svg",
        role: "UI runtime",
        description: `Client islands for chat panes, settings sheets, and optimistic message sends on top of the App Router.`,
      },
    ],
  },

  {
    id: "uicollab",
    title: "UI Collab",
    subtitle:
      "Open-source UI library platform for rapid prototyping and smart UI collaboration.",
    coverImage: "/images/uicollab1.png",

    images: [
      {
        id: "uicollab-elements-page",
        image: "/images/uicollab1.png",
        label: "Discovery · Elements",
        title: "Browse the library, your way",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The discovery surface is built around how developers actually search —
            by stack, by mood, by shape. Filters compose so you can land on the
            exact button or card you had in your head.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Stack filters for Tailwind, vanilla CSS, and more</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Theme-aware previews on both light and dark backgrounds</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Search and sort built for very large libraries</span>
            </li>
          </ul>
        `,
      },

      {
        id: "uicollab-element-details",
        image: "/images/uicollab2.png",
        label: "Component · Details",
        title: "Live preview, source, and stats",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Each element opens into a workshop view: render it live, read the
            source in a Monaco editor, save it, fork it, or export it elsewhere.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Sandbox preview alongside editable source</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Favourites, view counts, and creator attribution</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>One-click export into the framework you actually ship in</span>
            </li>
          </ul>
        `,
      },

      {
        id: "uicollab-categories",
        image: "/images/uicollab3.png",
        label: "Discovery · Categories",
        title: "Components, organised the way you think",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Buttons, cards, inputs, navs — categories make the library navigable
            even as it scales into the thousands of contributions.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Curated taxonomy with consistent visual hierarchy</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Hero counts so popular categories surface first</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Responsive grid that holds up at every breakpoint</span>
            </li>
          </ul>
        `,
      },

      {
        id: "uicollab-export-modal",
        image: "/images/uicollab4.png",
        label: "Tooling · Export",
        title: "One source, every framework",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The export pipeline takes a single canonical component and emits
            framework-native code — so you can drop the same UI into any stack.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>React, Vue, Angular, Svelte, and Lit targets</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Copy-ready snippets with imports already wired</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Diff-friendly output for clean PRs</span>
            </li>
          </ul>
        `,
      },

      {
        id: "uicollab-admin-dashboard",
        image: "/images/uicollab5.png",
        label: "Internal · Admin",
        title: "Moderation, analytics, and control",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The admin surface keeps the library curated as it grows — with
            moderation queues, category management, and platform-wide analytics.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Submission review queue with quick approve/reject</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Category and tag management at a glance</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Engagement dashboards for views, saves, and exports</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">UI Collab</span> is an open-source
          component library and collaboration platform for designers and
          developers who prototype out loud.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Submit a component, browse what others have built, fork it into your
          stack, and export it to the framework you actually ship in. An
          OpenAI-powered assistant is wired in to suggest variants, refactor
          markup, and spark new ideas without breaking the flow.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            What you can do here
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Multi-framework export</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                One canonical source, five frontend targets — React, Vue,
                Angular, Svelte, Lit.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">AI-assisted authoring</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                OpenAI suggestions for variants, accessibility passes, and
                quick refactors as you edit.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Open by default</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Every component is forkable. GitHub integration via Octokit
                means contributions stay traceable.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Embedded code editor</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Monaco brings a VS Code-grade editing surface right into the
                browser — IntelliSense and all.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/UICollab",
    demo: "https://uicollab.vercel.app/",
    accentColor: "#DF38F2",

    techStack: [
      {
        name: "React.js",
        icon: "/icons/reactjs.svg",
        role: "Component-driven UI",
        description: `Composable, reusable components form the entire interface — from the discovery grid to the live preview sandboxes.`,
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
        role: "Server runtime",
        description: `Powers the REST API, auth flows, and the export pipeline that transforms canonical components into framework-native code.`,
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        role: "Flexible document store",
        description: `Schema-light storage fits the messy shape of user-submitted components, metadata, and category trees.`,
      },
      {
        name: "Firebase",
        icon: "/icons/firebase.svg",
        role: "Auth & realtime",
        description: `Handles authentication and pushes live engagement events — saves, view counts, and contributor presence.`,
      },
      {
        name: "Octokit REST",
        icon: "/icons/github.svg",
        role: "GitHub integration",
        description: `Fetches issues, opens PRs, and traces contributions back to their authors — turning the library into a real OSS surface.`,
      },
    ],
  },

  {
    id: "truefeedback",
    title: "True Feedback",
    subtitle:
      "Anonymous feedback platform for secure and identity-free communication.",
    coverImage: "/images/tf1.png",

    images: [
      {
        id: "truefeedback-landing-page",
        image: "/images/tf1.png",
        label: "Marketing · Landing",
        title: "An honest first impression",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The landing page sets the tone: clean, direct, and built around the
            single promise of identity-free messaging. No clutter, no tricks.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Mobile-first responsive layout</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Email-verified onboarding via Resend</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Zero-friction sign-up to first message</span>
            </li>
          </ul>
        `,
      },

      {
        id: "truefeedback-dashboard",
        image: "/images/tf2.png",
        label: "Authenticated · Dashboard",
        title: "Your inbox, your rules",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The dashboard is where users own the experience — share their link,
            read replies as they arrive, and pause receiving any time.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Shareable public profile URL with copy-to-clipboard</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Realtime message stream, no refresh required</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Single toggle to accept or pause incoming feedback</span>
            </li>
          </ul>
        `,
      },

      {
        id: "truefeedback-public-profile",
        image: "/images/tf3.png",
        label: "Public · Send Feedback",
        title: "Say it without saying who",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The public-facing send page strips everything down to one thing —
            type honestly. AI suggestions help when the words don't come easy.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Fully anonymous submission with no metadata leak</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>OpenAI-generated prompt suggestions for stuck moments</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Distraction-free composer focused purely on the message</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">True Feedback</span> is an anonymous
          messaging platform built around one idea — honest input is more
          valuable when the sender can disappear.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          Users get a personal, shareable link. Anyone can drop a message there
          without an account, without a name, without a trace. Owners read,
          react, and toggle their inbox open or closed — all in a fast, modern
          dashboard backed by a hardened Next.js API layer.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            Core features
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Realtime delivery</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Messages appear in the dashboard the moment they're sent —
                no polling, no refreshes.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Verified onboarding</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Resend-powered email verification keeps account creation
                clean without adding friction.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">AI-assisted authoring</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                OpenAI generates thoughtful prompt suggestions to help senders
                articulate honest feedback.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Hardened validation</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Zod schemas guard every API boundary — input is validated
                before it touches the database.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/true-feedback",
    demo: "https://true-feedback-rosy.vercel.app/",
    accentColor: "#388CF2",

    techStack: [
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        role: "Full-stack framework",
        description: `App Router for the UI and route handlers for the API — one runtime serving both the dashboard and the public send endpoints.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe development",
        description: `Strict typing across the API contract, Zod schemas, and database models keeps surprises out of production.`,
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        role: "Document database",
        description: `Stores users, messages, and verification states with a schema flexible enough to evolve as features ship.`,
      },
      {
        name: "Resend",
        icon: "/icons/resend.svg",
        role: "Transactional email",
        description: `Sends verification and notification emails with deliverability that doesn't land in the spam folder.`,
      },
      {
        name: "OpenAI",
        icon: "/icons/openai.svg",
        role: "Suggestion engine",
        description: `Generates context-aware message prompts so senders can find the right words even when they're staring at a blank box.`,
      },
    ],
    credentials: {
      provider: "gautamkumar96801@gmail.com",
      password: "123456"
    },
  },

  {
    id: "whoami",
    title: "WhoAmI.",
    subtitle:
      "Anonymous-first social mobile app with realtime chat, generated identities, and matching profile.",
    coverImage: "/images/whoami1.png",

    images: [
      {
        id: "whoami-welcome",
        image: "/images/whoami1.png",
        label: "Onboarding · Welcome",
        title: "Pick an identity, not an account",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The first screen sets the tone — generated avatars, no real
            names required, and a one-tap path into the app. Identity is
            something you pick, not something you prove.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>DiceBear-generated avatars on every signup</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>JWT-backed sessions with cookie-parser handshakes</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Native splash, fonts, and gesture-driven onboarding</span>
            </li>
          </ul>
        `,
      },

      {
        id: "whoami-explore",
        image: "/images/whoami2.png",
        label: "Tabs · Explore",
        title: "Find people without finding profiles",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            The Explore tab surfaces other anonymous identities by interest
            and activity rather than by handle — designed so connections
            happen on what people say, not who they are offline.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Discovery feed powered by activity and interests</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Pull-to-refresh and infinite scroll built on Reanimated</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Native-feel transitions between tabs and detail views</span>
            </li>
          </ul>
        `,
      },

      {
        id: "whoami-profile",
        image: "/images/whoami3.png",
        label: "Tabs · Profile",
        title: "Your identity, your dial",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Profiles are intentionally minimal — a generated avatar, a
            handle, a few tunable signals. Users choose how visible they
            want to be without giving up agency.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Avatar regeneration with one tap via DiceBear</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Optional photo uploads via Cloudinary + Sharp</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Granular visibility toggles per profile section</span>
            </li>
          </ul>
        `,
      },

      {
        id: "whoami-chat",
        image: "/images/whoami4.png",
        label: "Realtime · Chat",
        title: "Messages that arrive when sent",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Chat is built on Socket.io with typing indicators, delivery
            states, and reconnect handling that survives flaky networks —
            so conversations feel native, not webby.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Socket.io rooms with per-conversation channels</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Typing indicators and read receipts</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Offline-aware queuing via AsyncStorage</span>
            </li>
          </ul>
        `,
      },

      {
        id: "whoami-notifications",
        image: "/images/whoami5.png",
        label: "System · Notifications",
        title: "Push, inbox, and report flow",
        description: `
          <p class="text-neutral-700 font-medium leading-relaxed">
            Notifications are first-class — Expo push for incoming chat,
            an in-app inbox for catching up, and a moderation report flow
            for keeping the space healthy.
          </p>
          <ul class="mt-4 space-y-2.5 text-neutral-800 font-medium">
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>Expo Notifications for native push delivery</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>In-app inbox with unread counts and filters</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="mt-2 inline-block w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0"></span>
              <span>User reporting and moderation pipeline</span>
            </li>
          </ul>
        `,
      },
    ],

    description: `
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
          <span class="font-bold text-black">WhoAmI</span> is an anonymous-first
          social mobile app — a place to talk, explore, and connect without
          the weight of a fixed online identity.
        </p>

        <p class="text-base text-neutral-700 font-medium leading-relaxed">
          The mobile client is built on Expo with file-based routing, NativeWind
          styling, and Reanimated transitions — paired with a Node + Express
          backend speaking MongoDB and Socket.io. Generated avatars, optional
          photos, realtime chat, and a moderation flow ship as one cohesive
          product across iOS and Android.
        </p>

        <div class="pt-2">
          <h3 class="text-xs uppercase tracking-[0.2em] text-orange-500 font-bold mb-4">
            What makes it different
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Identity is opt-in</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Avatars are generated on signup. Users choose what to reveal
                — never the other way around.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Realtime native feel</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Socket.io chat, Reanimated transitions, and Expo
                Notifications combine into something that feels like a
                first-party app.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Cross-platform from day one</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Built on Expo Router so iOS, Android, and web preview
                builds ship from a single TypeScript codebase.
              </p>
            </div>
            <div class="border-l-2 border-orange-400 pl-4">
              <h4 class="font-bold text-black mb-1">Backend that earns its keep</h4>
              <p class="text-sm text-neutral-700 font-medium leading-relaxed">
                Express on Vercel, Mongoose on MongoDB Atlas, image
                pipeline through Cloudinary + Sharp — boring, reliable,
                cheap to run.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,

    sourceCode: "https://github.com/Goutam96801/whoami",
    accentColor: "#8B5CF6",

    techStack: [
      {
        name: "Expo",
        icon: "/icons/expo.svg",
        role: "Cross-platform mobile shell",
        description: `Expo Router, EAS, and the Expo SDK provide the runtime — splash screens, fonts, image pickers, push, and over-the-air updates.`,
      },
      {
        name: "React Native",
        icon: "/icons/reactjs.svg",
        role: "Native UI runtime",
        description: `React 19 on the new architecture with Reanimated, Gesture Handler, and Worklets driving the smooth, native-feeling interactions.`,
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        role: "Type-safe foundation",
        description: `Shared types between the Expo client and the Node API keep the realtime contract honest as the surface evolves.`,
      },
      {
        name: "NativeWind",
        icon: "/icons/nativewind.svg",
        role: "Tailwind for native",
        description: `NativeWind brings Tailwind's utility model to React Native, so the design system stays consistent across web and mobile.`,
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
        role: "Backend & persistence",
        description: `Node + Express on Vercel, JWT auth, and bcrypt-hashed credentials handle every API call.`,
      },
      {
        name: "Socket.io",
        icon: "/icons/socketio.svg",
        role: "Realtime layer",
        description: `Socket.io powers chat rooms, typing indicators, and presence — with reconnection logic that survives spotty mobile networks.`,
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        role: "Database & persistence",
        description: `MongoDB Atlas with Mongoose handles user profiles, conversations, notifications, and message persistence.`,
      },
    ],
  },
];

export default projects;
