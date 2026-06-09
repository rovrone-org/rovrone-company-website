# RovrOne Labs — Company Website

Marketing site for **RovrOne Labs**, a deep-tech company building drones, robotics, IoT, AgriTech, AR/VR, EV/battery, GreenTech, R&D, and enterprise IT support solutions. Single-page React app deployed on Vercel.

Live structure: scroll-driven page with a sticky nav, hero, about, 16 services across two service lines, products, drone school, contact form, and footer.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 6 (`@vitejs/plugin-react-swc`) |
| Styling | Tailwind CSS v4 + Radix UI primitives (shadcn/ui pattern) |
| Animation | `motion` (Framer Motion) |
| Icons | `lucide-react` |
| Forms | `react-hook-form` |
| Hosting | Vercel (static SPA) |

---

## Quick start

```bash
npm install        # install deps
npm run dev        # dev server on http://localhost:3000
npm run build      # production build → dist/
npx vite preview   # serve the production build locally on :4173
```

Requires Node 18+ (Vercel uses 22 by default — both work).

---

## Project structure

```
.
├── index.html              # Vite entry HTML
├── vercel.json             # SPA rewrite + framework hint
├── vite.config.ts          # Vite + alias config
├── src/
│   ├── main.tsx            # React mount
│   ├── App.tsx             # Section composition (scroll-anchored)
│   ├── index.css           # Compiled Tailwind output (large — do not edit by hand)
│   ├── styles/globals.css  # Theme tokens, base typography
│   ├── assets/
│   │   ├── rov-logo.jpg    # Brand logo (nav + footer + favicon)
│   │   └── images/         # Section imagery (hero / about / products / contact)
│   └── components/
│       ├── Navigation.tsx  # Sticky header
│       ├── Hero.tsx        # Landing section + animated drone indicator
│       ├── About.tsx
│       ├── Services.tsx    # 16 services across 2 grouped subsections
│       ├── Products.tsx
│       ├── DroneSchool.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── figma/          # ImageWithFallback utility
│       └── ui/             # Radix + shadcn primitives
└── package.json
```

Routing is **anchor-based**, not React Router — each section has an `id` and the nav/footer use `scrollIntoView` with an offset.

---

## Editing content

Most copy lives directly in the component file for that section.

**Services** — edit the `services` array in `src/components/Services.tsx`. Each entry is `{ icon, title, subtitle, description, features[] }`. Icons come from `lucide-react`. The array is sliced into two groups at index 12:

- `services[0..11]` → "Engineering & Deep-Tech"
- `services[12..15]` → "Enterprise IT Support"

If you add a service, also append it to the `footerLinks.services` array in `src/components/Footer.tsx` so the footer mirror stays in sync.

**Products** — `products` array in `src/components/Products.tsx`.

**Contact info & form** — `src/components/Contact.tsx` (email, phone, location near the top; the form is local-state-only and shows a browser alert on submit — wire it to a backend when ready).

**Navigation links** — `src/components/Navigation.tsx`.

---

## Images

All hero/section images live in `src/assets/images/` and are imported as ES modules so Vite hashes and fingerprints them at build time:

```ts
import heroAerial from '../assets/images/hero-aerial.jpg';
// → /assets/hero-aerial-<hash>.jpg in dist
```

Replacing an image is a drop-in: overwrite the file at the same path and rebuild. No code change needed.

Current set: `hero-aerial.jpg`, `about-lab.jpg`, `products-field.jpg`, `contact-ops.jpg` — all license-clean stock (Unsplash, free for commercial use).

---

## Styling notes

- The visible Tailwind classes are scanned and compiled into `src/index.css` (currently a precompiled ~43 KB bundle). If you find that an arbitrary value like `text-[5rem]` isn't applying, fall back to a named utility (`text-8xl`) or inline `style={{ fontSize: 'clamp(...)' }}` — the latter is what the Hero `<h1>` uses for the giant "RovrOne Labs" banner.
- Base typography rules live in `src/styles/globals.css` under `@layer base`. The site uses an OKLCH color palette with light-mode defaults; dark-mode tokens exist but are not currently surfaced via a toggle.
- The site is intentionally a **light theme** end-to-end (white / `gray-50` backgrounds, `gray-900`/black accents). New sections should match.

---

## Deployment

Vercel auto-detects the project via `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Connect the repo on Vercel once, then every push to the default branch deploys. For ad-hoc deploys:

```bash
npx vercel           # link the project (first time)
npx vercel --prod    # promote to production
```

The SPA rewrite ensures direct-visit URLs (e.g. `/services`) return `index.html` so client-side anchor scrolling works.

---

## Useful scripts

```bash
npm run dev          # Vite dev server with HMR
npm run build        # Production build → dist/
```

No test runner or linter is configured in this project yet.
