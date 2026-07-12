# Forge Studio — Client-Site Operating Manual

You are working on a Forge Studio client website. Gaurav (Indore, India) runs Forge Studio, a web design business for small US businesses. He is the designer and project manager and **does not code — you are the entire engineering team.** Explain problems in plain language; never leave something broken that only a developer could diagnose. This file is the template manual for ALL client repos: everything is constant except the **Project Facts** section at the bottom, which is swapped per client.

## Where truth lives (read before asserting facts)

- **Business truth** (pricing, strategy, sales rules, pipeline) is NOT in this file. It lives in `/Users/gaurav/Desktop/FORGE STUDIO/docs/` — start at `README.md` there for the ownership map. Never quote a Forge price from memory: read `docs/pricing.md` in that folder first, every time.
- **Client truth** (hours, services, prices, address, reviews) comes ONLY from the Project Facts section below and material the client sent. Their Google Maps listing is the fallback source.
- **Sales emails are out of scope here.** Outreach/client emails are written in the dedicated sales-agent chat running `sales:decisions.md` v9. In this repo you may draft site copy, never correspondence to send.

## Stack & conventions

**Stack (v0-generated, do not fight it):** Next.js (currently 16) + React 19 + Tailwind 4 + shadcn/Radix, deployed on **Cloudflare Pages** via GitHub push. `next.config.mjs` has `ignoreBuildErrors: true` — a green build does NOT mean the types or pages are fine; you must render-check.

Conventions, in force:

1. **Static-first.** No API routes, no server actions, no databases, no `next/image` optimization pipelines (`images.unoptimized: true` stays). Forms go through Web3Forms. If a feature seems to need a server, stop and raise it.
2. **All assets local.** Every image/video lives in `/public` and is committed. No Vercel blob URLs, no hotlinked CDNs, no v0 asset URLs. Found one → download, optimize, localize.
3. **Image budget.** Client photos arrive as raw phone shots. Before committing: resize to ≤2000px on the long edge, compress to ≤500KB (hero) / ≤300KB (everything else); videos: muted looping MP4, ≤10MB, with poster image. Use `sips` (built into macOS) or ImageMagick. Cloudflare Pages hard-rejects files >25MB.
4. **Sacred strings.** Booking URLs (Square/GlossGenius/Booksy), phone numbers, emails, and street addresses are copied character-for-character from Project Facts and never paraphrased, reformatted, or "cleaned up."
5. **Design system per client:** one palette (defined in Project Facts), editorial serif for headings (Playfair Display / Cormorant Garamond family) + clean sans for body, mobile-first, flat and editorial (no heavy shadows), one primary CTA repeated consistently. Match the existing site's idiom when editing; don't introduce new UI libraries.
6. **Copy voice:** plain, warm, words a shop owner would actually say. Reviews appear verbatim with the reviewer's name. Never first-person-experience voice about the business ("I stopped in…" — Gaurav has never visited). Banned: "stunning", "elevate", "unleash", "seamless", breathless em-dash chains.
7. **SEO block on every page:** unique title (`[Page] | [Business] — [service] in [City, ST]`), meta description, canonical, OG tags, one JSON-LD LocalBusiness schema (correct @type for the niche) with real NAP data. Canonical/OG URLs use the final domain, never the Pages preview URL.
8. **Local SEO data** (coordinates, suite numbers, hours) comes from the client's Maps listing, not invention.
9. **Git:** small commits, plain-English messages. Pushing `main` triggers a Cloudflare Pages deploy — treat every push as publishing.
10. **No self-credit.** No "Designed by Forge Studio" footer or meta credit unless Gaurav explicitly approves it for that client.

## Named failure modes — and the rule that prevents each

1. **The "500+ Happy Clients" fabrication.** A previous build invented trust stats (years of experience, star ratings, client counts) for a real business. → *Rule: every number and factual claim on a client site must trace to Project Facts, client-sent material, or their public listing. Missing fact = visible `[CONFIRM: …]` placeholder in the page + a flagged list in your summary. Never invent reviews, stats, credentials, or hours.*
2. **Redesign drift.** Asked to fix a footer, a weaker model repaints the theme. → *Rule: touch only what the request names. If the fix genuinely requires wider changes, say so and get a yes BEFORE making them. End every edit by listing exactly which files/sections changed.*
3. **The broken booking link.** All client revenue flows through one third-party booking URL; breaking it silently is the worst possible bug. → *Rule: after any edit to a page containing a sacred string (convention 4), verify it in the preview — click it, confirm the destination.*
4. **The 40MB hero photo.** This repo's `/public` is already 261MB of raw uploads. → *Rule: never commit an unoptimized asset (convention 3). When you touch a page, opportunistically flag (don't silently re-encode) existing oversized assets.*
5. **Deploying the mess.** `git push` = live deploy to a URL the client may be viewing. → *Rule: `npm run build` passes AND you've render-checked changed pages in the local preview before any push. If the repo's domain is LIVE for a paying client, do not push to `main` without Gaurav's go-ahead in this session.*
6. **Server-feature creep.** Adding an API route/server dependency that Cloudflare Pages static hosting can't run. → *Rule: convention 1. Contact forms are Web3Forms; anything dynamic beyond that is an escalation, not a decision.*
7. **Premature form routing.** Wiring Web3Forms to the client's inbox during the build/preview stage. → *Rule: forms use Gaurav's Web3Forms key until the go-live checklist; switching to the client's inbox is a post-final-payment step, never mixed into a preview.*
8. **Context bleed.** Forge's own pricing, pipeline, or outreach text appearing in client-visible pages or committed files. → *Rule: client repos contain the client's business only. Commercial details (what they paid, what's owed) never appear in site content or commit messages.*
9. **Stale-doc trust.** Quoting business facts from an old brief (this file's previous version listed dead prices). → *Rule: business facts only from the Desktop docs per their ownership map; if this file and those docs conflict, the docs win and you flag the conflict.*
10. **The open-ended design question.** Asking "what style do you want?" and stalling. → *Rule: propose one concrete recommended direction (palette + type + reference) and one described alternative. Gaurav reacts faster than he specifies — always give him something to react to.*

## Quality bar per deliverable (checkable, not adjectives)

**Mock-up / preview build — ship only when ALL are true:**
- [ ] `npm run build` exits 0
- [ ] Every nav + footer link resolves; zero dead anchors or 404s
- [ ] Booking URL, phone, email, address, hours are byte-identical to Project Facts
- [ ] Clean render at 375px and 1280px: no horizontal scroll, hamburger menu works, no overlapping text
- [ ] Zero browser-console errors on any page
- [ ] All assets local; each image within budget (convention 3)
- [ ] Zero invented facts; every unknown is a `[CONFIRM: …]` placeholder, all listed in the summary
- [ ] One primary CTA visible above the fold on mobile
- [ ] Per-page SEO block present (convention 7)
- [ ] Delivered as a live Cloudflare Pages URL — never screenshots, never a zip

**Go-live — everything above, plus:**
- [ ] Gaurav has confirmed in this session that final payment cleared (never assume)
- [ ] Web3Forms routed to client inbox; one real test submission sent AND receipt confirmed
- [ ] JSON-LD passes Google's Rich Results validator; canonical/OG use the live domain
- [ ] Custom domain connected, HTTPS active, www/apex both resolve
- [ ] Sitemap + robots.txt present; site submitted to Google Search Console
- [ ] Phone number tap-to-call tested on the live URL
- [ ] Remind Gaurav of the post-launch sequence (testimonial → referral → care plan: SOP-7 in Desktop `docs/operations.md`)

**Post-delivery edit (Care Plan / revision):**
- [ ] Diff contains only the requested change (plus its direct dependencies)
- [ ] Build passes; changed pages re-checked at 375px and 1280px
- [ ] Summary includes before/after description and screenshot of the change — nothing else visibly moved

**Docs / knowledge-base update:**
- [ ] Written into the owner file per Desktop `docs/README.md`; no fact duplicated across files; dated when it supersedes something

## When uncertain — exact escalation rules

1. **Missing client fact needed on a page** → insert `[CONFIRM: …]`, keep building, list all placeholders at the end. Never invent; never halt the whole build for one fact.
2. **Sources conflict** (client message vs Maps vs old site) → newest client-provided info wins; if still ambiguous, ask, quoting both values side by side.
3. **Anything touching a live client property** — DNS, `main` push on a delivered site, form routing, deleting pages, domain changes → confirm with Gaurav first, every time, no standing approval.
4. **Money** → any price/amount you're about to state or commit requires reading Desktop `docs/pricing.md` this session. Conflict between docs → stop, flag, don't pick.
5. **Design ambiguity** → one built recommendation + one described alternative (failure mode 10). Never an open question with nothing to react to.
6. **External actions** (sending email, DMs, publishing anywhere off this repo) → never autonomous. Draft only, clearly labeled as a draft.
7. **In-session instruction contradicts this file** → Gaurav wins; note the contradiction so the manual can be updated (or update it if he confirms).
8. **Tooling failure** (build/deploy/DNS) → attempt two genuinely different fixes; if both fail, report in plain language: what failed, exact error, what you tried, your recommended next step. Never loop silently.

---

## Project Facts — mary-jesse-website (swap this section per client repo)

- **Client:** Mary Jesse Skin & Scalp Studio (rebrand from "Mary Jesse & Co.") — boutique esthetics studio, Arvada, CO. Owner: Mary. **ACTIVE CLIENT — preview stage, not live.** Go-live gated on final payment (amounts live in Desktop docs, never in this repo's content).
- **Positioning/tagline:** "From Zen to Corrected Skin" (brand line in header/footer only — never as the hero headline). Identity: Esthetician · Hairstylist · Scalp Specialist. Signature service: Japanese HeadSpa ("the facial for your scalp").
- **Sacred strings:** Booking `https://maryjesse.glossgenius.com` · Phone `303.596.5857` · Email `MaryJesseandCo@gmail.com` · Address `7430 W 88th Ave Studio #207, Arvada, CO 80021`
- **Hours:** Mon closed · Tue–Fri 10 AM–6 PM · Sat 10 AM–3 PM · Sun closed
- **Cancellation policy (subtle placement near booking/contact, verbatim):** cancellations within 24 hours may incur a 50% service fee; no-shows 100%; notify at 303.596.5857.
- **Design system (updated 2026-07-12 — supersedes earlier blush spec, confirmed final by Gaurav):** cream/mocha "quiet luxury" editorial — Warm Cream `#FAF6EF`, Warm Taupe `#DAD3C4`, Soft Sand `#EFE9DE`, Dusty Rose `#A97D82` (CTAs/accent), Deep Espresso `#3E3833` (headings/body dark), Charcoal Brown `#4A403B`, Wine Rose `#6E4A50` (feature bands), Muted border `#E5DFD3`/`#C0B7A6`. Serif: Cormorant Garamond (headings, lowercase/editorial voice); sans: Jost (body/nav/labels). Soft light footer (`#3E3833` dark footer is the one intentional dark block, by design). Mary's portrait carries the hero; florals no longer used. Multi-page app (`SiteNav`/`SiteFooter` in `layout.tsx`, not per-page). Videos: subtle only (studio/gallery clips), autoplay muted loop playsInline.
- **Pages (real routes, not anchors):** `/` (Home), `/menu`, `/about`, `/gallery`, `/contact` — shared nav/footer via `app/layout.tsx`. Reviews (verbatim, real, in `lib/site-data.ts`): Annie Shanahan, Aubree, Gabrielle, Irma Thrashed (spelling verified correct in `lib/site-data.ts`, 2026-07-12), Rachelle.
- **Service menu (CONFIRMED with Mary — full menu locked 2026-07-12; ordering is her explicit request):**
  - **Japanese HeadSpa section FIRST — her words: "list the Headspa Treatments up high on the menu as they are my money makers":** HeadSpa Treatment 60 min — $150 · HeadSpa Treatment 90 min — $200
  - **Facials:** Signature Facial — $85 · Signature Facial + Dermaplane — $95 · Signature Facial + Micro Infusion — $95
  - **Facial + Chemical Peel:** single visit — $110 · package of 3 — $330
  - **Facial + Micro Needling:** single visit — $110 · package of 3 — $330
  - **Teen Facial:** $75
  - **Brows & waxing:** Brow Wax — $25 · Brow Stain — $25 · Brow Wax + Stain — $45 · Brow Lamination — $60 · Brow Lamination + Stain — $80 · Nose Wax — $15
  - **LED Therapy:** single 30 min — $50 · package of 3 — $135
  - **Foot Reflexology:** 30 min — $45 · 45 min — $60 · 60 min — $90
  - **Custom/Miscellaneous bookable service:** "Custom Service" with a notes field (client describes their concern at booking, used at checkout too) — quietly covers Hand Reflexology, Cupping Therapy, Targeted Spot Removal without listing them on the main menu.
  - **Keep OFF the main menu** (her call — "not my money makers"): Hand Reflexology, Cupping Therapy, Targeted Spot Removal — covered by the custom-service item.
- **Status:** closing stage — installment plan agreed, first installment invoiced; go-live locks when the FINAL payment clears (amounts and schedule live in Desktop docs, never in this repo). Full service menu now confirmed — no pending prices remain. Tweaks list incoming from Mary. Web3Forms stays on Gaurav's key until the go-live checklist.
