# homelab68

Landing site for **homelab68** — pet projects (apps and web).

## Stack

- **Next.js** (App Router, static export)
- **Tailwind CSS**
- **shadcn-style** UI (Button, Card) with CSS variables
- **Theme** (light / dark, system)
- No database

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is in the `out/` directory.

## Deploy to GitHub Pages

This app uses `output: 'export'`, so it generates static files in `out/`.

A workflow is included at `.github/workflows/deploy-pages.yml`. It runs on push to `main` and deploys the `out/` folder via GitHub Actions.

1. In the repo go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The site will be available at `https://homelab68.github.io/`.

If your default branch is `master`, change the workflow trigger to `branches: ["master"]`.

## Pages

- **Home** — CTA contact/support, new projects (3), coming soon sections
- **Projects** — List and placeholder pages for Project 1 (App Store / Google Play) and Project 2 (web/utils)

## Contact

homelab68@gmail.com
