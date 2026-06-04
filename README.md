# AromaStacker

Editorial affiliate site for home scent layering. Built with Next.js 15, TypeScript, and Tailwind CSS v4. Deployed on VPS with Node.js, PM2, and Nginx.

## Quick Start

```bash
npm install
npm run build
npm run start
```

Dev mode:
```bash
npm run dev
```

## Project Structure

```
app/                      # Next.js App Router pages
  page.tsx                # Homepage (all 8 sections)
  best/[slug]/page.tsx    # Dynamic article pages (5 articles)
  glossary/page.tsx       # Scent layering glossary
  contact/page.tsx        # Contact page with form
  privacy-policy/page.tsx
  terms/page.tsx
  affiliate-disclosure/page.tsx
  sitemap.ts              # Auto-generated XML sitemap
  robots.ts               # robots.txt
  layout.tsx              # Root layout with Header + Footer
  globals.css             # Tailwind v4 theme + custom utilities

components/               # Reusable UI components
  Header.tsx              # Fixed nav with mobile menu
  Footer.tsx              # Footer with link columns
  ProductCard.tsx         # Product display (full + compact)
  ComparisonTable.tsx     # Product comparison table
  FAQ.tsx                 # Accordion FAQ component
  CTAButton.tsx           # Multi-variant button/link
  AromaPyramid.tsx        # Visual scent pyramid (homepage)
  MoodBoard.tsx           # Scent story cards (homepage)
  AromaBuilder.tsx        # Interactive mood/room tool (homepage)

data/                     # All editable content lives here
  site.ts                 # Site config, nav, footer links, article list
  products.ts             # All 25 products + AromaBuilder logic
  articles.ts             # 5 article configs (intro, FAQs, buying guide, etc.)

hooks/
  useScrollReveal.ts      # IntersectionObserver scroll animation hook

public/
  images/                 # Product images (replace placeholders with real images)
```

## Editing Content

### Change site name, domain, or email
Edit `data/site.ts` — `site` object at the top.

### Add or edit products
Open `data/products.ts`. Each product follows the `Product` type:
```ts
{
  id: "unique-id",
  name: "Product Name",
  asin: "B0XXXXXXX",
  affiliateUrl: amazonUrl("B0XXXXXXX"),  // uses YOURTAG-20 automatically
  imageUrl: "/images/your-image.jpg",
  category: "diffusers",                 // diffusers | candles | essential-oils | reed-diffusers | wax-melts
  scentNotes: ["lavender", "cedar"],
  noteType: "top" | "middle" | "base" | "all",
  mood: ["Calm", "Fresh"],               // Cozy | Fresh | Romantic | Energizing | Calm
  room: ["Bedroom"],                     // Living Room | Bedroom | Bathroom | Office
  pros: ["..."],
  cons: ["..."],
  bestFor: "Short label",
  summary: "2-3 sentence editorial description.",
}
```

### Change the affiliate tag
Search and replace `YOURTAG-20` in `data/products.ts` with your actual Amazon Associates tag.

### Edit article content
Open `data/articles.ts`. Each article has:
- `intro` — opening paragraph
- `buyingGuide` — buying advice section
- `finalRecommendation` — closing recommendation
- `faqs` — array of `{ question, answer }` objects
- `productIds` — array of product IDs from `products.ts` (order = display order)
- `relatedSlugs` — 2-3 related article slugs for internal linking

### Add a new article
1. Add products to `data/products.ts`
2. Add article config to `data/articles.ts` with a unique `slug`
3. Add the article to `articleList` in `data/site.ts`
4. The route `/best/your-slug` is automatically created via `generateStaticParams`

### Replace product images
Replace files in `public/images/` with real product photos. Use the same filename referenced in `products.ts`, or update the `imageUrl` field. Recommended size: 600×600 px.

## Deployment (VPS + PM2 + Nginx)

### Build
```bash
npm install
npm run build
```

The `output: "standalone"` config in `next.config.ts` produces a self-contained `.next/standalone` folder.

### Run with PM2
```bash
pm2 start .next/standalone/server.js --name aromastacker
pm2 save
pm2 startup
```

### Nginx config (example)
```nginx
server {
    listen 80;
    server_name aromastacker.com www.aromastacker.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Add SSL with Certbot: `certbot --nginx -d aromastacker.com -d www.aromastacker.com`

## Environment Variables

No environment variables are required for the default build. All data is static.
