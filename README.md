# Zaw Htike Aung | Personal Portfolio

Personal portfolio built with Next.js, React, and TypeScript. It presents selected work through reusable sections, dedicated project pages, and motion built with GSAP.

## Highlights

1. Component based homepage covering an introduction, selected work, development approach, and contact links.
2. Project content defined in `data/projects.ts`, with a featured Moethuzar project.
3. Separate motion components for individual homepage sections.
4. Shared layout components and Tailwind CSS styling.

## Technology

Next.js 16, React 19, TypeScript, Tailwind CSS 4, and GSAP.

## Run locally

This repository includes a pnpm lockfile. With Node.js and pnpm installed:

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Available commands

`pnpm dev` starts the development server.

`pnpm lint` runs ESLint.

`pnpm build` creates a production build.

`pnpm start` serves the production build.

## Code guide

`app/page.tsx` composes the homepage.

`components/home/` contains homepage sections and their motion components.

`components/ui/` contains shared interface components.

`data/projects.ts` defines the featured project entries.

`public/` contains static assets.

## Contact

[GitHub profile](https://github.com/Sczeam) · [LinkedIn](https://www.linkedin.com/in/zaw-htike-aung)
