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

- **Résumé PDF** — drop the file at `assets/resume.pdf` and the Résumé button
  works. Set `links.resume` to `null` if you'd rather not post one.
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

This repo is a GitHub Pages *user site*, which means the repo name must stay
`edmundgao.github.io` and the site is served from the root of the branch
configured under **Settings → Pages → Build and deployment**. Set the source to
"Deploy from a branch" and pick your default branch with folder `/ (root)`.
Pushes to that branch go live in about a minute.

The `.nojekyll` file tells Pages to skip Jekyll processing and just serve the
files, which is what we want here.

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
index.html              markup and section scaffolding
404.html                not-found page
assets/css/styles.css   design tokens and all styling
assets/js/data.js       ← your content lives here
assets/js/main.js       renders data.js into the page; wires up interactions
assets/img/favicon.svg  monogram favicon
```
