# Gemenei Tracker

This workspace is being evolved from a legacy static HTML tracker into a software-ready project for a multi-month research execution plan.

## Legacy snapshot

The original repository contained a single-page HTML tracker for a "240-day research intelligence roadmap" with milestone days, phase tabs, filtering, export/import, and a speech-modal workflow.

## Target software architecture

The repository should be transformed into an actual software system with:

1. Frontend: React + Shadcn + Next.js UI shell.
2. Backend: Next.js API routes or NestJS service layer for a future backend system.
3. Data: Neon Postgres-compatible database layer for authentication, progress storage, tasks, and checkpoints.
4. Developer tools: Bun runtime and TypeScript across code and automation.

## Roadmap

### Phase 1: Discover and package legacy data
- Extract all milestone metadata from the static document.
- Preserve the 8-phase month grouping and 240-day timeline progression.
- Keep legacy content, task lists, references, and training speech scripts.

### Phase 2: Establish software structure
- Build a Next.js or React project shell.
- Create Shadcn component tokens for cards, modals, inputs, badges, buttons, and progress UI.
- Add a pluggable data service that supports local JSON import/export and future Neon persistence.

### Phase 3: Backend and data layer
- Introduce API endpoints for roadmap phases, months, days, tasks, and speech exercises.
- Add audit store for day/task progress and optional authentication.
- Use Neon for durable progress storage in production.

### Phase 4: Validate and launch
- Run static page locally.
- Add smoke tests for filtering, rendering, export/import, and modal copy workflow.
- Verify that the generated UI fully carries over the legacy structure and wording.

## Current status

The static HTML user interface has been migrated into a maintainable HTML, CSS, and JavaScript structure with preserved legacy milestone content and UI controls. This acts as the first software-ready implementation of the project.
