# bradyhaden.com

Portfolio for Brady Haden — Senior Software Engineer.

Static site, deployed to GitHub Pages. Content is managed in Sanity.

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

---

## The idea

Every section is a question the reader is already asking, and the questions
change depending on who is reading. A **lens switcher** in the header re-orders
and rewrites the page for one of three audiences:

| Lens | Answers |
| --- | --- |
| **Recruiter** | Who is this? · What have they shipped? · What do they know? · Where have they worked? |
| **Hiring manager** | What have you owned? · What changed because you were there? · How do you lead? · Can you ship for a real customer? |
| **Engineer** | What's the hardest thing you've built? · What do you build unsupervised? · What can I actually read? · What do you actually use? |

There is no interstitial gate. The page loads immediately in the hiring-manager
lens; choosing a lens is optional, persists to `localStorage`, and syncs to a
`?view=` query parameter so a pre-set link can be shared.

## Stack

- **React 18 + TypeScript + Vite** — no component library. The design is bespoke,
  so plain CSS with custom properties is smaller and has no end-of-life risk.
  (The previous site ran on Material-UI v4, which is no longer maintained.)
- **Sanity** for content, read over plain `fetch`. Dropping `@sanity/client`
  removed ~180 kB from the bundle for what is a single query.
- **GitHub Pages** for hosting. Nothing here needs a server.

Production bundle: ~56 kB gzipped JS, ~4 kB gzipped CSS.

## How content works

Content resolves in three layers, each falling back to the one before it:

1. **`src/content/defaultContent.ts`** — canonical copy, committed to the repo.
2. **`src/content/generated.json`** — a snapshot fetched from Sanity at build
   time by `scripts/fetch-content.mjs`. This runs in Node, so it is unaffected
   by browser CORS, and it is what ships in the bundle.
3. **A live fetch on page load** — picks up edits made since the last deploy.

Merging happens per collection, so an empty or missing document type falls back
rather than blanking a section. If Sanity is unreachable the site still renders
completely — which is what went wrong with the previous version.

### First-time setup

The Studio schema is defined in `src/sanity/schema.ts`. To populate the dataset
with the current content:

```sh
npx sanity login   # once, opens a browser
npm run seed       # writes sanity-seed.ndjson from defaultContent.ts
npx sanity dataset import sanity-seed.ndjson production
```

The new documents use their own IDs (`siteSettings`, `hero-*`, `section-*`,
`case-*`, …) and do not collide with the previous site's documents, so this is
additive — nothing existing is deleted.

To push later content changes from `defaultContent.ts` back into Sanity, re-run
`npm run seed` and import with `--replace`:

```sh
npx sanity dataset import sanity-seed.ndjson production --replace
```

`--replace` only replaces documents whose IDs match the import file. It does
**not** clear the dataset. The old portfolio's documents (`about`, `project`,
`skill`, `theme`, plus 13 image assets) are unused by this site and survive
untouched — delete them from the Studio whenever you like.

> `--replace` swaps whole documents, so anything uploaded in the Studio and not
> present in the seed would be dropped. `npm run seed` guards against this by
> reading the current `resumeFile` out of Sanity and carrying it into the seed —
> watch for the `[seed] Preserved the résumé…` line. Any *other* asset fields
> added later need the same treatment.

> Note that this direction overwrites Studio edits with whatever is in
> `defaultContent.ts`. Once you start editing in the Studio, treat Sanity as the
> source of truth and stop re-importing.

### The résumé PDF

Upload it in the Studio under **Site settings → Résumé PDF**, then publish. All
three résumé links resolve to it automatically:

- the `résumé.pdf ↓` button in the header
- the `GET /resume.pdf` row in the contact section
- the **Résumé** row in the recruiter snapshot (via its `isResume` toggle)

If no file is uploaded, those links fall back to scrolling to the contact
section rather than breaking.

### Required: allow the site's origin in Sanity

The live fetch is blocked until the origin is allow-listed. In
[manage.sanity.io](https://manage.sanity.io) → project → **API** → **CORS origins**, add:

- `https://www.bradyhaden.com` — **the `www` host is a separate origin** and is
  what `homepage` in `package.json` points at
- `https://bradyhaden.com`
- `http://localhost:3000` (dev) and `http://localhost:4173` (preview)

Leave "Allow credentials" **off** — the dataset is public and read-only.

Without this the site still works; it just serves the build-time snapshot until
the next deploy.

### Editing content

```sh
npm run studio          # local Studio at http://localhost:3333
npm run studio:deploy   # publish the Studio to Sanity's hosting
```

The hosted Studio at
[bradyhaden-portfolio.sanity.studio](https://bradyhaden-portfolio.sanity.studio/)
is a **static build** — it does not pick up schema changes on its own. The
**Deploy Sanity Studio** workflow republishes it automatically whenever
`src/sanity/schema.ts`, `src/sanity/config.ts`, `sanity.config.ts` or
`sanity.cli.ts` changes on `main`, and can also be run manually.

That workflow needs a `SANITY_DEPLOY_TOKEN` repository secret: create a token
with the **Deploy Studio** role at manage.sanity.io → **API** → **Tokens**, then
add it under repo Settings → Secrets and variables → Actions.

### How content reaches the site

The site queries Sanity on **every page load**, so published edits appear
immediately — no deploy required.

The build-time snapshot in `generated.json` only covers the moment before that
fetch resolves, and acts as the fallback if Sanity is unreachable. It refreshes
on every push to `main`, or on demand via the **CI/CD** workflow's *Run
workflow* button. Letting it go stale is harmless: visitors briefly see the
previous copy before the live data swaps in.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Capture Sanity content, type-check, bundle to `build/` |
| `npm run preview` | Serve the production build on :4173 |
| `npm run content` | Refresh `generated.json` without building |
| `npm run seed` | Regenerate `sanity-seed.ndjson` |
| `npm run studio` | Local Sanity Studio on :3333 |
| `npm run studio:deploy` | Publish the Studio (CI does this automatically) |
| `npm run deploy` | Publish `build/` to the `gh-pages` branch |

## Workflows

| Workflow | Triggers | Does |
| --- | --- | --- |
| **CI/CD** | push to `main`, PRs, manual | Builds and deploys the site to `gh-pages`. PRs build but never deploy. |
| **Deploy Sanity Studio** | schema/config changes on `main`, manual | Republishes the hosted Studio. Needs `SANITY_DEPLOY_TOKEN`. |

## Layout reference

`design-concepts/e-interview/` holds the original static HTML/CSS prototype this
was built from, plus `design-concepts/CONTENT.md` explaining what the site says
and why. Neither is part of the build.

## Responsive

Verified with Playwright at four widths:

| | Width | Notes |
| --- | --- | --- |
| Mobile | 390 | Single column; brand subtitle hidden to keep the résumé button inline |
| Tablet | 834 | Metrics and agenda go 2×2; lens switcher spans full width |
| Desktop | 1440 | Full three-column stack, side-by-side case studies |
| Ultrawide | 2560 (21:9) | Container caps at 1600px so line lengths stay readable |

## License

MIT. See `LICENSE`.

<!-- MARKDOWN LINKS -->

[license-shield]: https://img.shields.io/github/license/bhaden94/react-portfolio.svg
[license-url]: https://github.com/bhaden94/react-portfolio/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/brady-haden/
