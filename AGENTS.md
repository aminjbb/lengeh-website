# Project Agent Registry

This project uses the following coordinated agents for its Next.js App Router work. The default coordinator is `@tech-lead`.

## How to route work

- `@tech-lead`: receives the request, creates the task board, assigns specialists, orders dependencies, and integrates evidence.
- `@architect`: owns architecture, FSD boundaries, package decisions, and final architectural acceptance.
- `@state-master`: owns TanStack Query, Redux Toolkit, server data, cache, and client state.
- `@ui-crafter`: owns UI components, Tailwind/design system, responsive behavior, and accessibility.
- `@navigator`: owns Next.js App Router segments, layouts, middleware, redirects, guards, and URL state.
- `@form-wizard`: owns RHF/Zod forms, Server Actions, drafts, submission, and errors.
- `@auditor`: independently reviews hooks, effects, TypeScript, performance, accessibility, boundaries, and integrated quality.

For a multi-part request, start with `@tech-lead`. It must create a task board with an owner, dependencies, write scope, and verification condition before implementation. Specialist work must not overlap canonical write scopes. Final architecture and acceptance remain with `@architect`; substantial integrated work requires `@auditor` review.

## Source of each agent

The complete manifest and instruction for each agent are in `.codex/agents/`:

- `tech-lead.agent.json` / `tech-lead.md`
- `architect.agent.json` / `architect.md`
- `state-master.agent.json` / `state-master.md`
- `ui-crafter.agent.json` / `ui-crafter.md`
- `navigator.agent.json` / `navigator.md`
- `form-wizard.agent.json` / `form-wizard.md`
- `auditor.agent.json` / `auditor.md`

These agents target the Next.js App Router and preserve the project's existing JavaScript/TypeScript and FSD decisions. A plan or manifest does not grant permission to install packages, modify files, deploy, or contact external services.