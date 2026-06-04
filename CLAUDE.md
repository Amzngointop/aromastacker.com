# CLAUDE.md — AromaStacker AI Maintenance Guide

This file governs how AI agents (Claude Code and others) should maintain and extend this project.

## Project Identity

- **Site:** AromaStacker (aromastacker.com)
- **Niche:** Home scent layering — Amazon Associates affiliate site
- **Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS v4
- **Deployment:** VPS + PM2 + Nginx (standalone output)
- **No database, no CMS, no authentication, no backend API**

## Absolute Rules — Never Break These

1. **No fake ratings.** Never add star ratings, review scores, or numerical ratings to any product.
2. **No personal testing claims.** Never write "we tested," "in our hands-on review," "after 30 days of use," or any claim implying direct product testing.
3. **No prices.** Never hardcode product prices. Prices change; hardcoded prices become outdated misinformation.
4. **No lorem ipsum or placeholder text** visible to users. All user-facing content must be real editorial copy.
5. **Affiliate tag is always `YOURTAG-20`.** Never replace with a real tag — the site owner does this. Never remove it.
6. **Contact email is always `contact@aromastacker.com`.** Never use `hello@` or any other variant.
7. **Keep `npm run build` passing with zero errors** after every change.

## Architecture — Data-Driven

All content lives in `data/`. Page files only render components; they do not contain hardcoded content.

```
data/site.ts        → site config, nav, footer links, article list
data/products.ts    → all products + AromaBuilder recommendation logic
data/articles.ts    → article content (intro, FAQs, buying guide, recommendations)
```

**Never hardcode product names, descriptions, or affiliate URLs directly in page files.**

## Adding Products

Edit `data/products.ts`. Required fields:
- `id` — unique kebab-case string
- `asin` — Amazon ASIN (use placeholder format like `B0XXXXXXX` if real ASIN unknown)
- `affiliateUrl` — always use `amazonUrl(asin)` helper (auto-applies YOURTAG-20 tag)
- `pros` — 3–4 bullet points, factual, no superlatives without substantiation
- `cons` — 2–3 honest drawbacks
- `bestFor` — short label (5–8 words max)
- `summary` — 2–3 sentences, editorial voice, no fake claims

After adding products, reference their `id` in the relevant article's `productIds` array in `data/articles.ts`.

## Adding Articles

1. Add products to `data/products.ts` first
2. Add article object to `data/articles.ts`:
   - `slug` — URL-safe kebab-case (becomes `/best/your-slug`)
   - `metaTitle` — under 60 characters, include target keyword
   - `metaDescription` — 140–160 characters
   - `intro` — 2–4 sentences, SEO-friendly, no fake claims
   - `buyingGuide` — objective criteria-based advice
   - `finalRecommendation` — specific, decisive recommendation
   - `faqs` — 5 questions minimum, schema markup is auto-generated
   - `relatedSlugs` — 2–3 existing article slugs for internal linking
3. Add to `articleList` in `data/site.ts` (controls homepage grid and nav)
4. Route is auto-created via `generateStaticParams` — no manual file needed

## Design System — Preserve This

**Colors (use inline `style` or Tailwind `bg-*` utilities):**
- `#FAF7F2` — cream, main background
- `#FFFFFF` — white, cards and contrast sections
- `#A8B89A` — sage green, accents
- `#D4E6C3` — light sage, feature blocks
- `#3D5A47` — deep forest green, hero sections, CTA buttons
- `#E8E0D0` — warm beige, alternating sections
- `#2C2C2C` — charcoal, body text

**Typography:**
- Headings: Playfair Display (loaded via `next/font/google`, variable `--font-playfair`)
- Body: Inter (loaded via `next/font/google`, variable `--font-inter`)
- Use `font-display` class for headings, `font-body` for body text
- Hero H1: `text-5xl` to `text-7xl`
- Section H2: `text-3xl` to `text-5xl`

**Section pattern:** Pages alternate between `#FAF7F2 → #E8E0D0 → #FAF7F2 → #D4E6C3 → #FFFFFF → ...`
Hero sections use `#3D5A47` (forest green). Newsletter sections also use `#3D5A47`.

**Icons:** Lucide React only. Never use emoji as icons.

**Animations:** CSS-based `reveal` / `visible` classes via `useScrollReveal` hook. No external animation libraries.

## Tailwind CSS v4 Notes

This project uses Tailwind v4 with `@tailwindcss/postcss`. Custom colors are defined in `app/globals.css` using `@theme` and `@layer utilities`. Do not use `tailwind.config.ts` — it is not needed in v4.

Custom color utilities available: `bg-cream`, `bg-sage`, `bg-sage-light`, `bg-forest`, `bg-beige`, `text-charcoal`, `text-forest`, `text-sage`, `border-sage`, `border-forest`.

For colors not in the custom palette, use inline `style={{ backgroundColor: "#3D5A47" }}` rather than inventing new Tailwind classes.

## Build & Deployment Safety

Before finishing any change:
```bash
npm run build
```

Common build failure causes:
- Missing `"use client"` on components that use `useState`, `useEffect`, or browser APIs
- Async `params` not awaited in App Router (`params` is a Promise in Next.js 15)
- Missing `generateStaticParams` for dynamic routes
- TypeScript type errors (strict mode is on)
- Importing server-only data in Client Components

The build uses `output: "standalone"` — do not change this; it is required for PM2/Nginx deployment.

## SEO Requirements

Every page must have:
- Unique `<title>` and `<description>` via Next.js `metadata` export
- One `<h1>` per page
- `alternates.canonical` pointing to the full URL
- `openGraph` metadata block

Article pages auto-inject FAQ JSON-LD schema from `article.faqs` array.

## What NOT to Do

- Do not install Vercel-specific packages (`@vercel/analytics`, etc.)
- Do not add a database, Prisma, or any backend data fetching
- Do not add authentication
- Do not use `getServerSideProps` — this is App Router only
- Do not add `"use server"` server actions (no backend)
- Do not create new color variables outside `globals.css`
- Do not use emoji in content or UI
- Do not add external animation libraries (Framer Motion, GSAP, etc.)
- Do not create `.env` files with real credentials
