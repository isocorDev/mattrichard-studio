# mattrichard.studio

Portfolio site for Matt Richard — Creative Technologist.

**Live:** https://mattrichard.studio  
**Cloudflare Pages:** https://mattrichard-studio.pages.dev  
**Repo:** https://github.com/isocorDev/mattrichard-studio

Built with [Eleventy](https://www.11ty.dev/). Hosted on Cloudflare Pages.

---

## Local development

```bash
npm install
npm start        # serves at http://localhost:8080 with live reload
npm run build    # outputs to _site/
```

---

## Folder structure

```
_data/
  projects.json        ← all projects — used by homepage grid and nav
_includes/
  head.njk             ← <head>: meta, fonts, CSS links (edit once, applies everywhere)
  nav.njk              ← navigation (edit once, applies everywhere)
_layouts/
  base.njk             ← outer HTML shell (doctype, html, head, body)
  project.njk          ← project page template (hero, metadata, gallery, awards, etc.)
css/
  global.css           ← CSS variables, reset, nav styles
  project.css          ← project page styles
images/
  projects/
    bmw-window/
      hero.jpg         ← full-bleed hero (used in <hero-image>)
      thumb.jpg        ← thumbnail for homepage grid (4:3 ratio)
      01.jpg, 02.jpg … ← gallery images
    [project-slug]/    ← one folder per project, same structure
work/
  bmw-window.njk       ← BMW project page (frontmatter = data, body = prose)
  [project].njk        ← one file per project, same pattern
index.html             ← homepage (WebGL hero, project grid)
```

---

## Adding a new project page

1. **Create** `work/[project-slug].njk`
2. **Fill in the frontmatter** — copy from an existing project and update the fields
3. **Add images** to `images/projects/[project-slug]/`
4. **Add to** `_data/projects.json` for homepage grid visibility
5. **Update** the previous project's `nextProject` frontmatter to point to the new page

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `layout` | ✓ | Always `project.njk` |
| `title` | ✓ | Page title and hero heading |
| `description` | — | Meta description for SEO |
| `heroImage` | — | Path to hero image. Omit for placeholder |
| `heroPosition` | — | CSS background-position. Default: `center center` |
| `heroKicker` | — | Small label above title in hero |
| `tags` | — | Array of capability tags shown in hero |
| `client` | — | Client name |
| `year` | ✓ | Year of project |
| `role` | — | Your role title |
| `location` | — | City or venue |
| `roleNotes` | — | Array of paragraph strings for the role clarity sidebar |
| `video` | — | Full YouTube or Vimeo embed URL. Omit to hide video section |
| `gallery` | — | Array of `{ src, alt }` objects. Omit to hide gallery |
| `awards` | — | Array of `{ name, year }` objects. Omit to hide awards section |
| `nextProject` | — | `{ title, url }` for bottom navigation |

### Video URL formats

```
YouTube: https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1
Vimeo:   https://player.vimeo.com/video/VIDEO_ID?title=0&byline=0&portrait=0
```

---

## Deployment workflow

Cloudflare Pages auto-deploys on every push to `main`.

**For new project pages**, work on a branch so you can QA on a real preview URL before going live:

```bash
git checkout -b project/disney-starlight
# build the page, add images
git push origin project/disney-starlight
# Cloudflare generates a preview URL automatically
# QA on desktop and phone
git checkout main
git merge project/disney-starlight
git push
# live in ~30 seconds
```

**Cloudflare Pages settings** (set once in dashboard):
- Build command: `npx @11ty/eleventy`
- Build output directory: `_site`

---

## Changing shared elements

| What to change | Where |
|---|---|
| Nav links | `_includes/nav.njk` |
| Google Fonts | `_includes/head.njk` |
| CSS variables / colors | `css/global.css` |
| Project page layout / structure | `_layouts/project.njk` |
| Project page styles | `css/project.css` |
| All projects list | `_data/projects.json` |
