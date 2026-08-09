# edmundgao.github.io

Personal portfolio site. Plain HTML, CSS, and JavaScript — no build step, no
dependencies, no framework. GitHub Pages serves the files exactly as they are in
the repo.

**Live at:** https://edmundgao.github.io/

## Editing the content

All the text on the site lives in one file: **`assets/js/data.js`**. Open it,
replace anything wrapped in `«guillemets»` with your real details, and commit.
You never need to touch the HTML.

The structure is:

| Key              | What it controls                                        |
| ---------------- | ------------------------------------------------------- |
| `draft`          | Set to `false` to remove the yellow "Draft" banner       |
| `profile`        | Name, headline, location, about paragraphs, links        |
| `experience`     | Job timeline, most recent first                          |
| `projects`       | "Selected work" cards (`featured: true` = double-wide)   |
| `skills`         | Grouped skill tags                                       |
| `education`      | Schools and degrees                                      |
| `certifications` | Optional; leave the array empty to hide the block        |

Any section whose array is empty hides itself, so you can delete what doesn't
apply to you.

### A few specifics

- **Résumé PDF** — `links.resume` is `null`, so the Résumé button is hidden.
  To turn it on: drop the PDF at `assets/resume.pdf` (exact name) and set
  `links.resume` to `"assets/resume.pdf"`. Leave it `null` while there's no
  file — a hidden button costs nothing, a broken one looks careless.
  Cmd-P on the site prints a clean copy with contact details at the top.
- **Email** — `links.email` drives both the hero button and the contact
  section. If you'd rather not publish a raw address, replace it with a contact
  form URL and adjust the label in `main.js`.
- **Phone** — `links.phone` is `null` by default, which hides the button. A
  phone number on a public page will get scraped, so it's opt-in.
- **Availability** — `profile.availability` is the text next to the green dot
  in the hero. Set it to `null` when you're not looking.
- **Writing the bullets** — lead with the outcome and include a number where
  you have one. "Cut p99 latency from 340ms to 90ms by adding a cached read
  path" lands much harder than "responsible for performance improvements."

## Publishing

This repo is a GitHub Pages *user site*, so the repo name must stay
`edmundgao.github.io` and the site publishes to `https://edmundgao.github.io/`.

Deployment runs through GitHub Actions (`.github/workflows/deploy.yml`). Every
push to the deploying branch uploads the repo root as-is and publishes it —
there's no build step, because the repo root is already the finished site.

One-time setup: go to **Settings → Pages → Build and deployment** and set
**Source** to **GitHub Actions**. Without that, the workflow runs but the
deploy step fails, since Pages has to be told to accept an Actions deployment.

You can also trigger a deploy by hand from the **Actions** tab — pick "Deploy
to GitHub Pages" and use **Run workflow**.

The `.nojekyll` file tells Pages to skip Jekyll processing and serve the files
verbatim, which is what we want here.

### Using a custom domain

Add a file named `CNAME` at the repo root containing only your domain
(e.g. `edmundgao.com`), point a `CNAME` DNS record at `edmundgao.github.io`, and
enable "Enforce HTTPS" in the Pages settings. Then update the `og:url` and
`canonical` tags in `index.html` plus the URLs in `sitemap.xml` and
`robots.txt`.

## Previewing locally

No tooling required — open `index.html` in a browser. If you want the paths to
behave exactly as they will in production, serve it instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's included

- Light and dark themes that follow the system preference, with a manual toggle
  that persists in `localStorage`
- Responsive layout down to small phones
- Scroll-spy navigation and a subtle reveal-on-scroll animation, both disabled
  automatically under `prefers-reduced-motion`
- Skip link, focus rings, and labelled controls for keyboard and screen readers
- Open Graph tags, a sitemap, and `robots.txt` for search and link previews
- A print stylesheet, so Cmd-P produces a clean paper version
- A styled `404.html`

## Layout

```
.github/workflows/      GitHub Actions deployment to Pages
index.html              markup and section scaffolding
404.html                not-found page
assets/css/styles.css   design tokens and all styling
assets/js/data.js       ← your content lives here
assets/js/main.js       renders data.js into the page; wires up interactions
assets/img/favicon.svg  monogram favicon
```
