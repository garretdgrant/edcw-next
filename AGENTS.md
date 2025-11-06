# Repository Guidelines

## Project Structure & Module Organization

Core application code lives in `src/app`, organized by route folders (e.g., `about`, `services`, `blog`) that map directly to Next.js pages and layouts. Shared UI primitives sit in `src/components`, reusable logic belongs in `src/hooks`, and domain helpers live in `src/lib`. Place static assets under `public` and update cross-cutting styles or Tailwind tokens in `src/app/globals.css`.

## Build, Test, and Development Commands

- `pnpm dev` — Launches the Next.js dev server with Turbopack at `http://localhost:3000`.
- `pnpm build` — Produces the optimized production bundle via `next build`.
- `pnpm start` — Runs the compiled output for smoke-testing production builds.
- `pnpm lint` — Executes ESLint with the project’s Next.js config; run before opening a PR.
- `pnpm prettier` — Formats TypeScript, JSON, and Markdown using the repo Prettier rules.
- `pnpm preprod` — Convenience task that stages changes, formats with Prettier, and builds; use judiciously to avoid unintentionally staging files.

## Coding Style & Naming Conventions

Ship TypeScript-first React 19 components, keeping files in PascalCase when exporting components and camelCase for hooks and utilities. Tailwind CSS v4 is configured globally, so prefer utility classes and tokens from `globals.css` before adding inline styles. Rely on Prettier for spacing (2 spaces, single quotes where applicable) and ESLint for import ordering and accessibility checks. Keep server-only code inside `src/app/api` route handlers and guard secret access via environment-safe helpers in `src/lib`.

## Testing Guidelines

No automated testing framework is configured yet; validate changes through targeted manual QA using `pnpm dev`. When adding logic-heavy modules, introduce component or integration tests (React Testing Library or Playwright) under `src/__tests__` or colocated `*.test.tsx` files, and document the coverage expectations in your PR. Always verify that form submissions, API routes, and SEO metadata render as expected across the key marketing pages.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit style: `type: short imperative summary` (e.g., `chore: tidy contact form schema`). Squash small work into meaningful commits that explain the why, not just the what. Pull requests should include a concise description, linked Linear/Jira issue if available, screenshots or screen recordings for UI updates, and a checklist noting linting/testing results. Flag any environment variable changes, new dependencies, or migration steps in the PR body to keep reviewers unblocked.
