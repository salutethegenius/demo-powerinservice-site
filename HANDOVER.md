# Handover — Power In Service Inc. website concept

Kemis Digital Website Clinic concept. This is not an official public launch.

## Pages completed

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

## Business information used

- Business name: Power In Service Inc.
- Area: Orlando and Central Florida
- Serving since: 2005
- Insurance: Insured up to $1 million in liability coverage
- Phone: 689-347-4320
- Public email: hello@powerandservice.com
- Secondary email stored, not displayed: powerandservice@gmail.com (forwarding target)
- Slogan: Forget the Rest, Come to the Best
- Owner: Patrick Moncur, President
- Owner portrait published on About (`public/images/company/patrick-moncur.jpg`)
- Certification claimed from owner notes: IICRC
- No street address published
- Former public number 954-540-4410 is not displayed anywhere on the site

Former names were not used: Power In Services 111 Inc., Power In Cleaning, Power In Services 11 Inc., Power In Service All Inclusive Inc.

## Services included

**Commercial cleaning:** facility, office, retail, common-area, recurring, one-time deep cleaning.

**Floor and surface care:** carpet cleaning, tile and grout cleaning, floor cleaning, floor restoration, water extraction.

**Turnovers and light maintenance:** apartment punch-outs, Airbnb punch-outs, move-in/move-out preparation, painting, sheetrock work, home repairs, general handyman services.

**Residential:** residential cleaning, carpet, tile and grout, water extraction, painting, sheetrock, handyman assistance, home repairs.

Commercial divisions lead the navigation, homepage, and visual weight.

## Stock-image sources

See `ASSET_SOURCES.md`. All current photographs are licensed stock from Pexels or Unsplash, downloaded locally. None are labelled as Power In Service projects.

## Information still needed

- Official logo file
- Public website URL / domain
- Confirmed Angi public URL after redirects
- Whether emergency services should be featured, and what they include
- Whether any promotion is currently active
- Square-footage, scheduling, or other service-detail copy the owner wants published
- Approved before-and-after project photographs
- Public YouTube URLs, titles, posters, and caption status for any videos
- Confirmation that supplied flyer/screenshot images are owned by the company
- Form delivery provider (email, CRM, or form backend) for live launch
- Any additional certifications beyond the owner-provided IICRC credential

## Owner portrait

Patrick Moncur’s portrait is published on `/about` as a company image:

- File: `public/images/company/patrick-moncur.jpg`
- Record: `patrick-moncur` in `src/content/images.ts`
- `sourceType: "company"`, `ownershipVerified: true`, `publicationApproved: true`

This is an owner-supplied portrait for the About page, not a project photograph.

## Supplied images that need ownership confirmation

The original brief referenced a flyer and several screenshots/photographs. Those files were **not present in this repository**, so they were treated as reference-only and not published.

Before using any owner-supplied photograph as completed company work, set all of the following on the image record in `src/content/images.ts`:

- `sourceType: "company"`
- `ownershipVerified: true`
- `publicationApproved: true`
- descriptive `alt`
- optional `projectId`

## Missing public video links

No public YouTube URLs were available. Private sharing invitation links must not be embedded. Video records live in `src/content/videos.ts` and only render when `publicationApproved` is true and a public URL exists.

## Angi link status

Configurable at `businessSettings.angiUrl`.

Current value points to an Angi listing that still appears under a former business name and may redirect:

https://www.angi.com/companylist/us/fl/azalea-park/power-in-services-inc-reviews-156521772.htm

Resolve the final public URL before launch. Review excerpt used: Jenny P., March 2017, Angi. Review count is 2. The roof-repair review was not used.

## Form-delivery status

Demo mode. The quote form does not submit, store, email, or upload files. No test enquiries should be sent during review.

## Domain still needed

No production domain is configured. `businessSettings.websiteUrl` is empty. Structured data therefore omits a website URL.

## How to replace the temporary wordmark

The wordmark is a text treatment in `src/components/ui/Wordmark.tsx`, driven by `businessSettings.wordmarkPrimary` and `wordmarkSecondary`. It is not an official logo.

To replace it, add an approved SVG or PNG under `public/` and render that image inside `Wordmark` instead of the two text lines. Keep the `aria-label` as the business name.

## How to add genuine projects later

1. Add image files under `public/images/projects/`.
2. Register them in `src/content/images.ts` with `sourceType: "company"`, `ownershipVerified: true`, and `publicationApproved: true`.
3. Add a record to `src/content/projects.ts` using the `ProjectRecord` shape. Set `publicationApproved: true` only when the owner has approved publication.
4. Do not include client names, addresses, logos, faces, or licence plates unless approved (`clientNameApproved`).

The Our Work layout already supports before/after fields without a redesign.

## How to disable demo mode after approval

In `src/content/business.ts`:

1. Set `demoMode: false` (removes `noindex,nofollow` and robots disallow-all).
2. Set `formMode: "live"` only after a real delivery endpoint exists.
3. Set `websiteUrl` to the public domain.
4. Confirm `angiUrl`.
5. Replace the wordmark if a logo is approved.
6. Review `ASSET_SOURCES.md` and swap stock images for approved company photographs.
7. Update `src/app/privacy/page.tsx` for live data collection.

Demo restrictions are documented in `src/lib/seo.ts`, `src/app/robots.ts`, and the quote form.
