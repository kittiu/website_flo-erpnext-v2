# website_flo-erpnext-v2 — Flo Works ERPNext site (Astro 6 + Tailwind v4)

Flo Works Limited ERPNext marketing site. Forked from the MIT starter
`alancuenca/small-business-starter` (Astro 6, Tailwind v4, pnpm, Netlify).
Owner asked to preserve the starter's look & feel; content is Floworks-specific.

## Commands (pnpm only — never npm)

```bash
pnpm run dev       # local dev at localhost:4321
pnpm run build     # production build → ./dist/
pnpm run preview   # preview the build
```

## Content conventions (owner-approved)

- **Bilingual pattern**: English punch-line headings (Oswald), Thai body copy.
  Menus/buttons/nav are Thai.
- **Brand colors**: starter navy `#1B3A6B` + orange `#F97316` (owner choice).
  Edit colors in `src/config/brand.ts` AND hexes in `src/styles/theme.css`.
- **Fonts**: Oswald (display) + Inter (body) + Noto Sans Thai (Thai fallback).
  Declared in `astro.config.mjs` fonts array; stacks wired in `theme.css`
  `@theme inline`. Keep the three in sync.
- **Client data**: `src/data/client.ts` (name, email, phone, address, socials, domain).
- **Business info**: Silom Edge, Bangkok; sales@flo-works.co; +66 81 841 7480.
- **Logo**: owner-supplied `floworks_logo_v3_badge.svg`. Assets in `public/`,
  wired through `brand.logo` in `src/config/brand.ts` —
  `floworks-logo-header.svg` (badge + wordmark, light surfaces, used in Header),
  `floworks-logo-white.svg` (reversed for the dark footer),
  `floworks-logo.svg` (full lockup incl. the "ERPNEXT · AI" subtitle — only for
  large use; below ~100px lockup height that subtitle is illegible),
  `favicon.svg` (badge only), `favicon.ico`, `og-image.png` (1200×630).
  Edit the source SVG, then regenerate the derivatives — do not hand-edit them.

## ⚠️ TODO before go-live (owner must supply)

- **Domain**: replace `flo-erpnext.example.com` in `src/data/client.ts`,
  `src/config/brand.ts`, `astro.config.mjs` (site).
- **Images**: starter placeholder photos (Unsplash) are intentionally kept.
  Replace via `src/config/images.ts` + dropping files into
  `src/assets/images/hero|about|gallery/`. Gallery filename → caption.
- **No fake social proof**: do NOT invent client testimonials, team members, or
  reviews. The starter's Reviews section/page was removed for this reason —
  re-add only with real, owner-supplied content.
- Claims like "15+ years" mirror the owner's existing flo-works.co marketing.

## Workflow

Remote: `git@github.com:kittiu/website_flo-erpnext-v2.git`. Owner's PR-only
rule: never push directly to `main`; open a PR and wait for merge.
`gh` is not authenticated on this host — verify PR state through the public
GitHub API and give the owner a compare URL.
