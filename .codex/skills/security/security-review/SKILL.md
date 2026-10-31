---
name: security-review
description: Review or harden Next.js App Router security controls across DAL, Server Actions, auth and sessions, server/client boundaries, sensitive data, CSP and HTTP headers, environment variables, cookies, caching, middleware, image origins, source maps, validation, sanitization, rate limiting, and OWASP risks.
metadata:
  short-description: Review Next.js security controls
---

# Security review

Use this skill when a request involves application security or asks to add/remediate security controls in a Next.js App Router project. Establish the project root, framework versions, runtime, deployment assumptions, target routes/actions, and whether the mode is audit or authorized remediation.

Inspect actual code paths and effective configuration. For each data entry point (DAL function, Server Action, Route Handler, middleware, and API client), trace authentication, authorization at the resource boundary, input validation, output minimization, error handling, logging, and cache behavior. Treat client-provided IDs, roles, hidden fields, and redirect targets as untrusted.

Check that server-only modules are protected with `server-only` where appropriate; secrets and privileged objects never cross a Client Component boundary; sensitive values are not serialized, cached, logged, tainted, or returned accidentally. Review React Taint APIs where supported, while treating taint as defense in depth rather than authorization.

Review session cookies for `httpOnly`, `secure` in production, appropriate `sameSite`, narrow `path`/`domain`, expiry/rotation, fixation resistance, logout invalidation, and CSRF defenses. Verify Server Action `allowedOrigins` and origin checks for the deployment topology. Check middleware matcher scope and fail-closed behavior.

Review CSP/nonce strategy, security headers, clickjacking and MIME protections, referrer policy, permissions policy, HSTS suitability, source-map exposure, environment-variable prefixes, `remotePatterns`, and accidental secret exposure in build output. Validate FormData/JSON with Zod or an equivalent schema; sanitize only when rendering trusted HTML and use DOMPurify server-side with an appropriate environment. Consider rate limiting for authentication, mutation, expensive, and abuse-prone endpoints; verify identity/IP keying and fail-open behavior.

Use the references below for authoritative details. Read only the relevant reference when possible:

- [Security references](references/security-sources.md)

Report each confirmed issue as `SEC-###` with severity (P0–P3), blocking status, location, precondition, impact, evidence, concrete correction, and verification. Separate hypotheses and missing coverage. In audit mode do not edit files. In remediation mode change only the authorized scope, preserve behavior, and rerun targeted checks. Never claim a control is effective without inspecting its runtime path and configuration.
