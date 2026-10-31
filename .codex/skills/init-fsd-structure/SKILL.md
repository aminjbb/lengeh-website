---
name: init-fsd-structure
description: Initialize the six-layer FSD source structure and base configuration in an existing Next.js application. Preserve App Router/Pages Router and JavaScript/TypeScript choices; use a separate authorized bootstrap task for an empty target.
---

# Initialize FSD Structure

<purpose>

Prepare an existing Next.js project (App Router or Pages Router) for @architect's six-layer FSD policy while preserving its current behavior. This skill explicitly creates all six base layer directories; it does not create speculative business slices.

</purpose>

<inputs>

- Required: `project_root`, the existing Next.js application's root directory.
- Optional: `source_root`, defaulting to the existing configured source directory or `src`.
- Optional: `dry_run`, default `false`; when true, report planned changes without mutation.

Read applicable repository instructions and the architect policy if available. Do not assume this skill's storage directory is the target application.

</inputs>

<execution_steps>

## 1. Inspect and establish scope

1. Resolve the project and source roots to absolute paths. Verify all proposed writes remain within the authorized project, including through symlinks or junctions.
2. Inspect `package.json`, the lockfile, `next.config`, package scripts, app/pages directory, layouts, route handlers, middleware, TypeScript project references, and existing components, aliases, and Git/workspace changes.
3. Confirm this is an existing Next.js application and record whether it uses App Router or Pages Router and JavaScript or TypeScript. If the target is empty, return a bootstrap prerequisite for an authorized caller; do not silently migrate the language or build.
4. Identify the TypeScript config that actually includes application files. A root config containing only `references` is not sufficient for application path mappings.
5. Inventory collisions. Preserve existing files and uncommitted changes. Compatible structure is reused; incompatible ownership or conflicting aliases require a concrete conflict report before dependent writes.

## 2. Plan the minimum scaffold

Use this baseline, adapting only the source root and existing entry names:

```text
src/
  app/
    App.tsx
    index.ts
  pages/
    .gitkeep
  widgets/
    .gitkeep
  features/
    .gitkeep
  entities/
    .gitkeep
  shared/
    api/
      index.ts
    ui/
      index.ts
    lib/
      index.ts
    config/
      index.ts
  main.tsx
```

`.gitkeep` preserves an otherwise empty layer in Git. Omit it when that layer already contains tracked content. Do not create layer-wide barrels for `pages`, `widgets`, `features`, or `entities`.

This baseline uses Shared segment APIs. Existing documented per-module APIs, such as `shared/ui/button/index.ts`, take precedence; do not replace them with a segment-wide barrel.

## 3. Create or adapt application assembly

1. Create missing directories without deleting or replacing existing content.
2. If a top-level application component exists, relocate only its application assembly to `app`, preserving rendering behavior and repairing its relative imports, assets, styles, tests, and entry references. Do not move business logic wholesale into `app` or Shared. If that would require a substantial migration, report the conflict instead of performing an unrelated migration.
3. If no application component exists, use this inert baseline:

```tsx
// src/app/App.tsx
export function App() {
  return <main aria-label="Application" />;
}
```

4. Expose the existing component name, or this baseline name, with an explicit export:

```ts
// src/app/index.ts
export { App } from "./App";
```

5. Adapt the existing entry to import from `@/app`. Preserve root mounting, StrictMode, providers, and global stylesheet behavior. The entry is an infrastructure bootstrap, not a business slice.
6. Initialize each missing Shared segment `index.ts` with exactly `export {};` plus an optional ownership comment. Do not invent API clients, utilities, UI components, or runtime initialization.

## 4. Merge base configuration

1. Preserve the existing Next.js scripts, next.config, compiler settings, test settings, and build options. Edit structured configuration without flattening project references or erasing comments unnecessarily.
2. Reuse an equivalent source alias when one exists. Otherwise configure `@` only when the existing build supports it without a new override; otherwise keep relative imports. Do not create a conflicting second alias definition.
3. For a source root `src` beside the application config, merge this mapping into its `compilerOptions`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Adjust the mapping relative to the effective configuration location and any existing `baseUrl`; do not copy the example blindly.

4. For Next.js, preserve the existing tsconfig/jsconfig paths and next.config aliases:

```ts
import { fileURLToPath, URL } from "node:url";

// Merge inside the existing Next.js configuration only when required:
// resolve: {
//   alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
// }
```

Use the existing config module format and Node type setup. Preserve ordered alias arrays. Existing working resolver plugins may be retained. Do not depend on a newer Next.js option unless the installed version supports it.

Next.js resolves TypeScript paths through its supported compiler integration. See [TypeScript paths](https://www.typescriptlang.org/tsconfig/paths.html) and the existing build documentation; do not add unrelated bundler configuration to a Next.js project.

5. Do not install routers, state libraries, request libraries, or new lint stacks as part of this scaffold. Existing strictness MUST NOT be weakened. Automated boundary enforcement is a separate implementation task unless explicitly requested.

## 5. Verify and report

- Inspect the generated tree and diff. Confirm all authored source files remain at most 150 physical lines.
- Run existing applicable type-check, lint, test, and build commands using the project's package manager. Do not invent script names or fetch missing packages implicitly.
- Check application imports, public boundaries, and cycles with available tooling; disclose unavailable coverage.
- Confirm preserved application behavior with proportionate existing checks.
- A repeat execution on an unchanged project must produce no additional changes. Never append duplicate aliases or exports.

</execution_steps>

<output_contract>

Return `COMPLETED`, `PLANNED` for dry run, or `BLOCKED`, followed by the target root, created/modified/reused paths, configuration changes, executed checks and results, conflicts, and remaining work. Distinguish structural initialization from full architectural approval.

</output_contract>
