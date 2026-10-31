# Security sources

Use these primary sources as the decision reference; verify guidance against the installed Next.js version.

## Next.js data and execution
- Server Actions security: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#security
- Server Components/Actions security advisory: https://nextjs.org/blog/security-nextjs-server-components-actions
- Authentication and sessions: https://nextjs.org/docs/app/building-your-application/authentication
- Server-only composition: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
- Prevent sensitive data exposure and React Taint: https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#preventing-sensitive-data-from-being-exposed-to-the-client

## Configuration and transport
- CSP and nonce: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
- HTTP headers: https://nextjs.org/docs/app/api-reference/next-config-js/headers
- Environment variables: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
- Server Actions allowedOrigins: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#allowedorigins
- Image remotePatterns: https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
- Production browser source maps: https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps
- Cookies: https://nextjs.org/docs/app/api-reference/functions/cookies
- Middleware: https://nextjs.org/docs/app/building-your-application/routing/middleware
- Caching: https://nextjs.org/docs/app/building-your-application/caching

## Supporting controls
- Zod: https://zod.dev
- DOMPurify: https://github.com/cure53/DOMPurify
- Upstash Ratelimit: https://upstash.com/docs/redis/sdks/ratelimit-ts/overview
- OWASP Top Ten/Cheat Sheets: https://cheatsheetseries.owasp.org/IndexTopTen.html
