# moon.dev — Chris Hirwa's portfolio

Next.js 16 · TypeScript · Tailwind CSS v4 · Motion. Fully static, no backend.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content
Everything (bio, projects, experience, services, links) is in **`lib/data.ts`**.
- Add live/repo links to each project via `live:` and `repo:` (empty = button hidden).
- Replace `public/Chris_Hirwa_CV.pdf` whenever your CV changes.
- Set `available: false` in `profile` to hide the "Available for work" badge.

## Deploy
**Vercel (recommended):** push to GitHub → import the repo at vercel.com → Deploy. Add your custom domain in Project → Settings → Domains.

**GitHub Pages** (e.g. c-hirwa.github.io/personal-portfolio):
```bash
NEXT_PUBLIC_BASE_PATH=/personal-portfolio npm run build
# upload the generated `out/` folder (add an empty `.nojekyll` file inside it)
```

**Any host / cPanel:** `npm run build`, then upload the `out/` folder.
