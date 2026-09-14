# Handover — Power In Service Inc. production site

Public website for Power In Service Inc. Canonical URL: https://powerandcleaning.com

## Pages

- `/` Homepage
- `/commercial-cleaning`
- `/floor-care`
- `/property-services`
- `/residential`
- `/our-work`
- `/about`
- `/request-quote`
- `/contact`
- `/privacy`

## Business information published

- Business name: Power In Service Inc.
- Area: Orlando and Central Florida
- Serving since: 2005
- Insurance: Insured up to $1 million in liability coverage
- Phone: 689-347-4320
- Public email: hello@powerandservice.com
- Secondary email stored, not displayed: powerandservice@gmail.com
- Slogan: Forget the Rest, Come to the Best
- Owner: Patrick Moncur, President
- Owner portrait on About (`public/images/company/patrick-moncur.jpg`)
- Certification from owner notes: IICRC
- No street address published
- Former public number 954-540-4410 is not displayed

## Production flags

In `src/content/business.ts`:

- `demoMode: false` — robots allow crawling; pages are indexable
- `formMode: "live"` — quote form submits through Resend
- `websiteUrl: "https://powerandcleaning.com"`

Emergency services and the former 20% promotion remain off until confirmed.

## Quote form

The request form posts to a server action in `src/app/request-quote/actions.ts` and emails the company through Resend. Photo upload is not enabled.

Required Vercel environment variables:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` — a verified Resend from address
- `QUOTE_TO_EMAIL` — inbox for leads (defaults to hello@powerandservice.com if omitted)
- `GOOGLE_SITE_VERIFICATION` — optional Search Console HTML tag content

If Resend is not configured, the form shows a call/email fallback and does not pretend the request was delivered.

## Stock images

See `ASSET_SOURCES.md`. Current photographs are licensed stock from Pexels or Unsplash. They are labelled as representative imagery, not completed company work.

## How to add genuine projects later

1. Add image files under `public/images/projects/`.
2. Register them in `src/content/images.ts` with `sourceType: "company"`, `ownershipVerified: true`, and `publicationApproved: true`.
3. Add a record to `src/content/projects.ts`. Set `publicationApproved: true` only when publication is approved.
4. Do not include client names, addresses, logos, faces, or licence plates unless approved (`clientNameApproved`).

## How to replace the temporary wordmark

The wordmark is a text treatment in `src/components/ui/Wordmark.tsx`. To replace it, add an approved SVG or PNG under `public/` and render that image inside `Wordmark`. Keep the `aria-label` as the business name.

## Remaining owner tasks

Must do for form delivery and search:

1. Create a Resend account, verify a sending domain, add the env vars above, and send a test quote.
2. Verify https://powerandcleaning.com in Google Search Console, add `GOOGLE_SITE_VERIFICATION` if using the HTML tag, and submit https://powerandcleaning.com/sitemap.xml
3. In Vercel, pick one primary host (`powerandcleaning.com` or `www`) and 301 the other.

Can wait:

- Confirm whether the public email should stay hello@powerandservice.com or move to @powerandcleaning.com
- Confirm the Angi public URL (current listing may still use a former name)
- Official logo file
- Approved project photographs and public YouTube URLs
- Street address, only if it should be published
- Emergency services or any current promotion
- Analytics or ads
- Google Business Profile matching this name, phone, and service area
