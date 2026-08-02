# Deploy and Host Payload CMS on Railway

## About Hosting

Railway provides a modern, streamlined platform for deploying web applications and databases. This template bundles **Payload CMS** — the open-source, fullstack Next.js framework for headless content management — running on Next.js 16 with a managed Postgres database. One-click deploy, auto-migrations, zero vendor lock-in.

## Why Deploy

Deploying this template gives you a production-ready CMS in minutes:

- **Open-source headless CMS** — the most popular CMS for Next.js developers, MIT licensed
- **Next.js 16 native** — Payload runs as a Next.js app; no separate server to manage
- **Postgres included** — the template provisions a managed Railway Postgres database pre-wired to the app
- **Migrations automated** — `payload migrate` runs on every boot, so your schema is always current
- **Admin panel included** — full content management UI at `/admin`
- **GraphQL + REST APIs** — auto-generated for every collection you define
- **Production-ready defaults** — healthcheck on `/api/health`, standalone build, restart policy

## Common Use Cases

- **Headless CMS** — content for websites, apps, and digital products with a developer-friendly admin panel
- **SaaS backends** — typed collections, auth, and API routes in a single Next.js codebase
- **Marketing sites** — structured content with preview, drafts, and versioning
- **Portfolios and blogs** — rich text with the Lexical editor, media library, and SEO fields

## Dependencies for

This template requires:

### Deployment Dependencies

- **Postgres** — a managed Railway Postgres database (the wizard wires `DATABASE_URL` automatically)
- **`PAYLOAD_SECRET`** — random 32+ char secret for authentication and encryption (auto-generated in the wizard)
- **`PORT`** — Railway routes traffic by this variable (default `3000`)

## Getting Started

1. Click **Deploy on Railway**
2. In the deploy wizard, the Postgres service and variables are pre-configured
3. Wait for the build (Next.js 16 + Payload) and automatic migrations
4. Open the generated domain — the admin panel is at `/admin`

## Next Steps

- **Create your first collection** — via the admin panel or code-first in `src/collections`
- **Build your frontend** — use the REST or GraphQL APIs
- **Add media** — uploads are stored on the service (or wire S3/R2 with the Payload S3 adapter)
- **Custom domain** — add one to your Railway service

## License

MIT (Payload CMS)

---
<!-- IMPORTANT: the six headings below are MANDATORY for Railway marketplace
     acceptance (publish fails without them). Do not remove or rename:
     "# Deploy and Host", "## About Hosting", "## Why Deploy",
     "## Common Use Cases", "## Dependencies for", "### Deployment Dependencies".
     This is the MARKETPLACE overview — separate from the repo README. -->
