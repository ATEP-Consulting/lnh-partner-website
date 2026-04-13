# LNH & Partner — Website

Static marketing website for **LNH & Partner** — construction, renovations,
earthworks, infrastructure, real estate, pergolas and decoration in Miami,
Florida.

Built with:

- [Astro 5](https://astro.build/) — content-first framework, ships zero JS by default
- [React 18](https://react.dev/) — used only for the gallery lightbox (`client:visible`)
- [Tailwind CSS 3](https://tailwindcss.com/)
- TypeScript (strict)

The whole site is statically pre-rendered, so it loads in milliseconds and
indexes perfectly on Google.

---

## Quick start (local dev)

```bash
npm install      # install deps
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the production build locally
```

Requires Node 18+ (tested with Node 22).

---

## Project structure

```
src/
├── components/      # Logo, Header, Footer, Icon, Lightbox.tsx (React)
├── data/site.ts     # ⭐ ALL EDITABLE COPY — phones, services, team, etc.
├── layouts/         # Layout.astro (head, fonts, header, footer, scroll-reveal)
├── pages/           # index.astro — entry point
├── sections/        # Hero, Services, About, Why, Projects, Pergolas,
│                    # Gallery, Partner, Team, Testimonials, Contact
└── styles/global.css

public/
├── favicon.svg
├── robots.txt
└── assets/
    ├── images/      # luis.jpg, nilyan.jpg (TODO: add)
    └── videos/      # pergola.mp4, sunroom.mp4 (TODO: add)
```

### Where to edit content

Almost all text on the site lives in **`src/data/site.ts`**.
You can change phone numbers, services, team bios, testimonials, projects, etc.
without touching any component.

### Where to add real photos & videos

Drop the binary files into `public/assets/`:

| File | Path | Used in |
|---|---|---|
| Luis (CEO) photo | `public/assets/images/luis.jpg` | Team section |
| Nilyan (Realtor) photo | `public/assets/images/nilyan.jpg` | Team section |
| Pergola video | `public/assets/videos/pergola.mp4` | Pergolas section |
| Sunroom video | `public/assets/videos/sunroom.mp4` | Pergolas section |

If a file is missing, the page still renders fine — the team cards show
initials and the videos show a poster image.

The hero, services, projects and gallery currently use Unsplash stock images.
To swap in real photos, update the URLs in `src/data/site.ts`.

---

## Deploying to Vercel

Vercel auto-detects Astro and configures everything. No build settings needed.

### One-time setup

1. Push this repo to GitHub:
   ```bash
   gh repo create lnh-partner-website --private --source=. --push
   # OR manually:
   #   git remote add origin git@github.com:<user>/<repo>.git
   #   git push -u origin master
   ```

2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project** → import the repo → **Deploy**.

That's it — every push to `master` auto-deploys to a `*.vercel.app` URL.

### Connecting the custom domain (`www.lnhpartner.com`)

The domain is registered with **GoDaddy**.

1. In the Vercel project → **Settings → Domains** → add `lnhpartner.com` AND `www.lnhpartner.com`.
2. Vercel will show you the DNS records to set. They will look like:
   - `A` record on `@` → `76.76.21.21`
   - `CNAME` record on `www` → `cname.vercel-dns.com`
3. Log in to GoDaddy → **My Products → DNS** for `lnhpartner.com`.
4. Delete any existing `A`/`CNAME` records that conflict (the parked GoDaddy ones).
5. Add the records exactly as shown by Vercel.
6. Wait 5–30 minutes for DNS propagation.

Once propagated, https://www.lnhpartner.com will serve the site with an automatic
free SSL certificate from Vercel.

---

## Adding a working contact form

The contact form currently posts to a **Formspree** placeholder. To make it work:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form, copy your form ID (looks like `xpzgkqld`).
3. In `src/sections/Contact.astro`, replace the action URL:
   ```astro
   action="https://formspree.io/f/your-form-id"
   ```
   with your real form ID.
4. Commit & push — Vercel redeploys automatically.

Alternatives: [Web3Forms](https://web3forms.com), [Basin](https://usebasin.com),
or a Vercel Serverless Function in `src/pages/api/`.

---

## Editing for non-developers

If at some point Luis or Nilyan need to edit copy without git/code, the
cheapest path is:

- Connect a free CMS like [Sanity](https://sanity.io) or [Decap CMS](https://decapcms.org/),
- Move content from `src/data/site.ts` into the CMS,
- Vercel rebuilds on every CMS change.

This is a 1-day job, optional.

---

## License

© LNH & Partner. All rights reserved.
