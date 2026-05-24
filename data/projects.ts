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
