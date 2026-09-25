# A.K. Gautam Traders — Production Website

Premium, responsive Next.js website for **A.K. Gautam Traders**, a Jhansi-based building materials supplier.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- Vercel-ready

## Included
- Light mode by default + persistent dark mode toggle
- Hero image sequence: 1080×1080 office portrait first, then 1920×1080 team/store images
- First 5 seconds: clear hero image with no dark fade; headline/content reveals after 5 seconds
- Automatic hero slide transitions every 3 seconds after the initial reveal cycle
- Responsive premium UI
- Cursor-following soft fog/smoke effect on desktop
- Construction-material supply cards with product imagery
- Material order/enquiry form
- Material selector, quantity, unit, preferred delivery date, customer name, phone and delivery address
- WhatsApp enquiry generation with all form details
- Contact and WhatsApp actions in header
- Google Maps embed
- SEO metadata, keywords, robots and sitemap
- Gallery and business/team imagery

## Business details
- Phone: +91 9454794715
- Email: akgautam@gmail.com
- Instagram: @akgautam
- Address: Suti Mill, Near The Ghanaram Royal Garden, Sankar Road, Jhansi, Uttar Pradesh, India

## Run locally

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Site URL

Set `NEXT_PUBLIC_SITE_URL` in production before deploying so the canonical URL and sitemap use the real domain.

Example:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```
