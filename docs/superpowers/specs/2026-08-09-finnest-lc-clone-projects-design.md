# Design: Add FinNest and LC Clone to Projects

**Date:** 2026-08-09  
**Status:** Approved for planning  
**Scope:** Data + projects-page metadata only. Avena deferred.

## Problem

The portfolio projects section currently ships four products (Clarity, UI Collab, True Feedback, WhoAmI). Two additional shipped products — FinNest and LC Clone — need matching detail pages with gallery image descriptions and feature bullets, following the existing `data/projects.ts` pattern.

## Non-goals

- Adding Avena (deferred until screen list and assets are ready)
- Changing home “BEST WORKS” featured slice (`projects.slice(0, 3)`)
- Building new UI components or changing project detail page layout
- Generating or optimizing screenshots (user supplies files)

## Approach (chosen)

**Full data entries in `data/projects.ts` + `projectMeta` category labels.**  
Matches Clarity/WhoAmI depth: cover image, multi-screen gallery with narrative + feature bullets, overview HTML, tech stack cards, source link. Demos omitted until URLs exist.

Rejected alternatives:

- Shorter/minimal entries — weaker portfolio signal and inconsistent with siblings
- Also featuring on home — out of requested scope; can reorder later if desired

## Data model (existing, unchanged)

Reuse `Project` / `ProjectImage` / `TechStackItem` from `data/projects.ts`. Each gallery item includes:

- `label` — screen location (e.g. `Home · Overview`)
- `title` — short headline
- `description` — HTML paragraph + 3 feature bullets (orange dot list pattern)

## FinNest

| Field | Value |
| --- | --- |
| `id` | `finnest` |
| `title` | `FinNest` |
| `subtitle` | Personal finance app for balances, spending stats, linked accounts, and profile/settings |
| `coverImage` | `/images/finnest1.png` |
| `sourceCode` | `https://github.com/Goutam96801/finNest` |
| `demo` | omit |
| `accentColor` | `#2F9E6B` (soft green) |
| `projectMeta.categoryLabel` | `Mobile · Personal Finance` |

### Gallery (5 screens)

1. **`finnest1.png` — Home**  
   Overview of balances and recent activity. Features: balance summary, recent transactions, quick actions.
2. **`finnest2.png` — Stats**  
   Spending/income insights. Features: period filters, category breakdown, trend charts.
3. **`finnest3.png` — Accounts**  
   Linked accounts management. Features: multi-account list, balances per account, add/link flow.
4. **`finnest4.png` — Profile**  
   Identity and personal prefs. Features: avatar/name, membership details, linked contact info.
5. **`finnest5.png` — Settings**  
   App configuration. Features: notifications, security/privacy, preferences toggles.

### Overview copy direction

Position FinNest as a mobile personal-finance nest: one place to see money, understand patterns, and manage accounts without jumping between banking apps.

### Tech stack (draft — icons already in repo)

Five cards, matching WhoAmI’s mobile depth:

- Expo — mobile runtime (`/icons/expo.svg`)
- React Native — component UI (`/icons/reactjs.svg`)
- TypeScript — type-safe app layer (`/icons/typescript.svg`)
- NativeWind — Tailwind-style RN styling (`/icons/nativewind.svg`)
- Firebase — auth / data / storage (`/icons/firebase.svg`)

## LC Clone

| Field | Value |
| --- | --- |
| `id` | `lc-clone` |
| `title` | `LC Clone` |
| `subtitle` | LeetCode-style practice platform with problem browser, in-browser IDE, and discussion threads |
| `coverImage` | `/images/lc1.png` |
| `sourceCode` | `https://github.com/Goutam96801/lc-clone` |
| `demo` | omit |
| `accentColor` | `#F59E0B` (amber, near site orange accents) |
| `projectMeta.categoryLabel` | `Web · Coding Practice` |

### Gallery (4 screens)

1. **`lc1.png` — Home**  
   Platform entry / dashboard. Features: CTA into practice, highlighted problem sets, progress snapshot.
2. **`lc2.png` — Problems**  
   Problem catalogue. Features: difficulty filters, topic tags, search/sort.
3. **`lc3.png` — Code IDE**  
   In-browser editor. Features: multi-language editor, run/submit, problem statement pane.
4. **`lc4.png` — Thread discussion**  
   Per-problem community thread. Features: nested replies, upvotes/sorting, Markdown/code snippets.

### Overview copy direction

Position LC Clone as a full practice loop: discover problems, solve in the IDE, discuss approaches — modeled after LeetCode’s core surfaces.

### Tech stack (draft)

- Next.js — App Router full-stack
- TypeScript — end-to-end typing
- Node.js — API / judge orchestration surface
- MongoDB — problems, submissions, threads
- Monaco / editor experience (document in role text; reuse `/icons/vs-code.svg` if no Monaco icon)

## File changes

1. `data/projects.ts` — append `finnest` and `lc-clone` after existing projects (or insert where product narrative fits; default: append before export).
2. `app/(main)/projects/project-client-page.tsx` — extend `projectMeta` with the two category labels.
3. Assets (user-supplied, not committed by agent unless present):  
   `public/images/finnest1.png` … `finnest5.png`, `public/images/lc1.png` … `lc4.png`.

## Image asset contract

User places screenshots at the paths above before or after the data merge. Until files exist, Next/Image may 404 those URLs in local preview — accepted temporary state.

## Out of scope follow-ups

- Avena project entry (requires custom screen list + assets)
- Live demos / credentials blocks
- Reordering home featured projects to include FinNest or LC Clone

## Success criteria

- `/projects` lists FinNest and LC Clone with correct category chips
- `/projects/finnest` and `/projects/lc-clone` render cover, gallery, about HTML, tech stack, and GitHub link
- Gallery descriptions cover every listed screen with narrative + feature bullets
- No regression to existing four projects
- Avena remains absent until explicitly requested
