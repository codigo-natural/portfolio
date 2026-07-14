# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Astro dev server (`astro dev`).
- `npm run build` — production build (`astro build`).
- `npm run preview` — preview the production build locally.

Node 20 (see `engines` in `package.json`).

## Architecture

This is an **Astro** single-page portfolio (Astro 5 + Tailwind CSS v4 via `@tailwindcss/vite`, plus GSAP for scroll animations). It was migrated from an earlier Create React App project — no React/CRA remains.

Entry: `src/pages/index.astro` renders `Layout.astro` wrapping a flat stack of section components, in order: `AboutSection`, `Projects`, `Skills`, `Clients`, `Contact`. Navigation is anchor-based scrolling (`#about`, `#projects`, `#skills`, `#clients`, `#contact`) — no routing.

- **`Layout.astro`** — page shell: a sticky vertical side nav (`nav.astro`, hidden on mobile) + a `<main>` slot. Imports `styles/global.css`. The page scrolls on the body (do not reintroduce `h-screen` + nested `overflow`, which breaks `position: sticky` effects).
- **`nav.astro`** — the vertical rotated-text nav; its `navItems` array must stay in sync with the section `id`s.
- **`AboutSection.astro`** — the bento "about" grid. **Fetches live from the GitHub API at build/SSR** (user `codigo-natural`): repos, stars, top languages, a featured repo, and a random quote (all with fallbacks). Embeds `sectionTest.astro` (the big "Developer / I'm Ivan Camilo Buitrago" hero card with the cut-out portrait).
- **`Projects.astro`** — "scroll-window" effect (CSS grid `subgrid` + `position: sticky`): project text on the left, images passing through a fixed framed window on the right. Disabled (stacks) under 820px. Data comes from `projects` in `constants`.
- **`Skills.astro`** — GSAP: skills "pile" that drops in with a bounce (ScrollTrigger), plus a Tools grid.
- **`Clients.astro`** — experience timeline: pinned cards connected by a curved dashed SVG path whose illumination is scrubbed by scroll; the path is computed in JS from each pin's measured center (recomputed on load/resize). Detail expands on hover (desktop) / always shown (mobile). Company data is the `companies` array in the file.
- **`Contact.astro`** — scroll-driven sticky verbs that light up as they pass a fixed band, then a reveal panel; uses modern CSS (`light-dark()`, `1lh`, `view-timeline` as progressive enhancement).

### Data & styling

- **`src/constants/index.ts`** — `projects` (title/image/description/technologies/repoUrl/deployUrl), `ICONS`, `SOCIALS`, `navigation`, skills text. Edit content here; project images are imported from `src/assets/projects/`.
- **`src/styles/global.css`** — `@import 'tailwindcss'` (Tailwind v4). Defines the About-card design system in `@layer components` (`.card`, `.card-title`, `.stat-value`, `.list-item`, `.brackets`, etc.) — prefer these over ad-hoc utility stacks. Theme tokens live in `@theme`.

### Conventions

- Components are self-contained `.astro` files with scoped `<style>` and, where needed, a `<script>` that imports `gsap`/`ScrollTrigger` (client-bundled by Astro).
- Content is written in **Spanish**.
- The codebase targets modern CSS (subgrid, `light-dark()`, `1lh`, container/scroll timelines). Keep that baseline.
