# Level-Up Landing

Landing page for the Level-Up workshop by Other Stuff.

## Tech
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local dev
```bash
pnpm install
pnpm dev
```

## Environment
Copy the example env file and fill in your values:
```bash
cp .env.example .env.local
```

Required variables:
- `RESEND_API_KEY`
- `RESEND_FROM`
- `RESEND_TO`

## Contact form
The “Get Started” modal posts to `/api/contact`, which sends email via Resend.

## Content updates
Most copy and structure live in `content/site.ts`.
