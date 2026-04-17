# LNH & Partner — Website

Static marketing website for **LNH & Partner** (Miami, Florida).
Content is managed via **Sanity CMS** → the owner edits text, images and
sections from a web panel, and the site rebuilds automatically.

Built with:

- [Astro 5](https://astro.build/) — static-first framework, ships zero JS by default
- [React 18](https://react.dev/) — used only for the gallery lightbox
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Sanity](https://sanity.io/) — headless CMS (free plan)
- TypeScript (strict)

---

## Architecture

```
/  (this repo)
├── src/                    ← the Astro site (what visitors see)
├── studio/                 ← the Sanity Studio (what the owner edits in)
└── scripts/migrate-to-sanity.ts  ← one-off seed script (already run)
```

Data flow: **Owner edits in Studio → Sanity stores content → Vercel webhook
triggers a rebuild → static HTML re-published → visitors see changes in ~2 min.**

---

## Quick start (local dev)

```bash
# 1) Run the website locally
npm install
npm run dev               # http://localhost:4321

# 2) Run the CMS locally
cd studio
npm install
npm run dev               # http://localhost:3333  (login with Google)
```

Requires Node 18+.

`.env` must contain:
```
PUBLIC_SANITY_PROJECT_ID=z2y11586
PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=<only needed for migration scripts — see sanity.io/manage>
```

---

## Project structure

```
src/
├── components/      # Logo, Header, Footer, Icon, Lightbox.tsx (React)
├── layouts/         # Layout.astro (head, fonts, header, footer)
├── lib/             # sanity.ts (client) + queries.ts (GROQ queries)
├── pages/index.astro  # entry — fetches homePage from Sanity, renders blocks
├── sections/        # Hero, Services, About, Why, Projects, Pergolas,
│                    # Gallery, Partner, Team, Testimonials, Contact
│                    # — each renders a Sanity block
└── styles/global.css

studio/
├── schemas/
│   ├── documents/   # siteConfig + homePage singletons
│   ├── blocks/      # heroBlock, servicesBlock, etc. (11 sections)
│   └── objects/     # serviceItem, project, teamMember, etc.
├── sanity.config.ts # Studio config + Presentation tool
└── structure.ts     # Sidebar layout in the Studio
```

---

## Deploying the Studio (one-time)

The Studio is a separate mini-app the owner logs into to edit content.
Deploy it to Sanity's free hosting:

```bash
cd studio
npx sanity login          # first time only, opens browser
npm run deploy            # choose a hostname → e.g. "lnh-partner"
# → the studio will live at https://lnh-partner.sanity.studio
```

Send that URL to the owner. They log in with Google and can edit everything.

### Adding the owner as a user

In [sanity.io/manage](https://sanity.io/manage) → project `LNH Partner` →
**Members → Invite member** → enter their email → role **Editor** (not Admin).

---

## Deploying the website to Vercel

1. Push this repo to GitHub.
2. [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Astro. Before the first deploy, set env vars:
   - `PUBLIC_SANITY_PROJECT_ID=z2y11586`
   - `PUBLIC_SANITY_DATASET=production`
4. **Deploy.**

### Custom domain

Vercel → Project → **Settings → Domains** → add `lnhpartner.com` and
`www.lnhpartner.com`. Follow their DNS instructions (GoDaddy in our case).

---

## Making content updates auto-rebuild the site

When the owner edits something in the Studio, Sanity can ping Vercel so the
site rebuilds without anyone touching code:

1. **In Vercel**: Project → **Settings → Git → Deploy Hooks** → create a hook
   named `sanity` targeting branch `main`. Copy the URL.
2. **In [sanity.io/manage](https://sanity.io/manage)** → API → Webhooks →
   **Create webhook**:
   - Name: `Vercel rebuild`
   - URL: (paste the Vercel Deploy Hook URL)
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - HTTP method: `POST`
3. Save.

From now on, every save in the Studio → rebuild in ~90 seconds → site updated.

---

## Visual editing (optional, for the owner's comfort)

The Studio already has **Presentation mode** configured. To use it:

1. In the Studio sidebar, click the **Presentation** icon (eye).
2. Set the site URL (first time): e.g. `https://www.lnhpartner.com`.
3. The owner sees the live site next to the editor and can click any section
   to jump straight to editing it.

(For live in-browser edits without rebuilds, Astro would need SSR mode. For
now, saves trigger a rebuild in ~90 seconds, which is fine for this use case.)

---

## Contact form (Formspree)

The contact form uses Formspree. The form ID is now stored in Sanity under
**Home → Contact section → Formspree form ID**. The owner can replace it
without any code change.

---

## Re-running the seed migration

```bash
npx tsx scripts/migrate-to-sanity.ts
```

⚠ This **overwrites** the `siteConfig` and `homePage` documents.
Only use on an empty/test dataset.

---

## License

© LNH & Partner. All rights reserved.
