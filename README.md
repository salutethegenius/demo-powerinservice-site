# Power In Service Inc.

Public website for Power In Service Inc., a commercial cleaning and property-services company serving Orlando and Central Florida.

Live site: [https://powerandcleaning.com](https://powerandcleaning.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and add Resend keys if you want the quote form to send email locally.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content

Business details, services, reviews, images, videos, FAQs, and feature flags live in `src/content/`.

Public contact, Angi URL, and production flags are in `src/content/business.ts`.

## Documentation

- `HANDOVER.md` — remaining owner tasks, photos, and launch checklist
- `ASSET_SOURCES.md` — stock photograph credits
- `.env.example` — Resend and Search Console environment variables
