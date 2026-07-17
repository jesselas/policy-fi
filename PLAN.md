# policy.fi Build Plan — Step-by-Step

Migrating sites.google.com/view/lastunen/ to **policy.fi** with a modern academic design and a world-class AI-for-economists resource page built from `AI Bookmarks - Consolidated.md` (115+ curated entries).

## Technology Stack

- **Eleventy (11ty)** — static site generator on Node.js (v23.11.0 installed). Content in Markdown + Nunjucks templates, data in JSON files.
- **GitHub Pages** — free hosting with custom domain, auto-deploy via GitHub Actions on push.
- **DNS via Zoner Oy** — A records + CNAME pointing to GitHub Pages.
- **No frameworks** — hand-written CSS (~1,100 lines, "Policy Folio" design) with CSS custom properties. Vanilla JS for accordions, search/filter, mobile nav.

**Why Eleventy?** The AI-econ page has 115+ entries already in Markdown (nearly zero conversion). Data files (JSON) separate content from templates — to add a resource, edit one JSON file and push. Sub-second builds, pure static HTML output.

## Design System — "The Policy Folio"

- **Fonts**: Newsreader (headings — editorial serif) + Plus Jakarta Sans (body — warm geometric sans) via Google Fonts
- **Colors**: Warm off-white bg (#fafaf8), near-black text (#1c1c1c), rich deep teal accent (#0b525b), lighter teal hover (#127681), pale teal cards (#e4f0f1), warm gold for featured items (#c9a84c), neutral sections (#f4f4f0)
- **Visual signature**: Thin gradient accent strip (teal → gold) at top of viewport, subtle paper-grain noise texture overlay, teal dot before nav site title, frosted-glass nav with `backdrop-filter: blur`, fade-up page load animations
- **Layout**: 780px max-width, left-aligned, generous whitespace, fully responsive (3 breakpoints + touch device media query)
- **Components**: Accordions (with chevron indicators), filter pills, search bar with SVG magnifying glass, resource cards with category-specific left borders (10 colors), featured items with gold gradient + star badge, editorial small-caps section labels
- **Responsive**: Tablet landscape (≤1024px), tablet portrait (≤768px, hamburger nav, stacked layouts, horizontal-scrolling filter pills), small phone (≤480px). Touch device query disables hover effects and enforces 44px min tap targets

## File Structure

```
personal-web-page/
├── .github/workflows/deploy.yml
├── src/
│   ├── _includes/base.njk, nav.njk, footer.njk
│   ├── _data/site.json, ai_resources.json, publications.json
│   ├── assets/css/style.css, js/main.js, img/
│   ├── index.md          (Home — / and /home)
│   ├── research.njk      (Research — /research/)
│   ├── southmod.md        (SOUTHMOD — /southmod/)
│   └── ai-econ.njk       (AI for Economists — /ai-econ/)
├── .eleventy.js
├── package.json
├── CNAME                  (contains "policy.fi")
└── DNS-SETUP.md
```

Each step below has a self-contained prompt you can launch in Claude Code. Run them in order.

---

## Step 1: Project Scaffolding + Eleventy + Design System ✅ DONE

Completed. Eleventy project set up with "Policy Folio" design system:
- Newsreader + Plus Jakarta Sans fonts
- ~1,100 line CSS with full responsive support (3 breakpoints + touch query)
- Frosted-glass nav, paper-grain texture, gradient accent strip, fade-up animations
- JS with accordion toggle, mobile nav (closes on outside tap, Escape key, resize)
- Builds in 0.06s, verified at localhost:8080

---

## Step 2: Home Page ✅ DONE

Rebuilt with exact original text from `original-webpage.md`. Includes bio (3 paragraphs), Links section (CV, ORCID, Google Scholar, RAND, EconPapers/IDEAS, Twitter, LinkedIn, GitHub), Contact section.

**What it produces:** Complete home page with Jesse's bio, affiliations, education, and profile photo layout.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, build the Home page. The file should be `src/index.njk` (rename from `src/index.md` since we need HTML structure for the layout). Use layout `base.njk`.
>
> Also fetch the existing Google Sites page at `https://sites.google.com/view/lastunen/` to capture any content I may have missed below.
>
> **Use these existing CSS classes** (already defined in style.css):
> - `.hero-grid` — two-column grid (200px photo + 1fr content), stacks on mobile
> - `.profile-photo` — rounded, max 200px, shadow, border
> - `.hero-content` — right side with name/title/bio
> - `.hero-content .subtitle` — italic Newsreader for the role description
> - `.section-label` — small-caps editorial label (e.g., "EDUCATION", "AFFILIATIONS")
> - `.info-section` — wraps each section below the hero
> - `.info-grid` — two-column grid for side-by-side info blocks, stacks on mobile
> - `.info-list` — clean list with bottom borders per item
> - `.info-list .degree` / `.institution` — styled for education entries
> - `.inline-list` — horizontal list with dot separators (for affiliations)
> - `.divider` — decorative horizontal rule with optional text
>
> **Content to include:**
>
> 1. **Hero section** (`.hero-grid`):
>    - Left: `<img src="/assets/img/profile.jpg" alt="Jesse Lastunen" class="profile-photo">` (placeholder — actual file added later)
>    - Right (`.hero-content`):
>      - `<h1>Jesse Lastunen</h1>`
>      - `.subtitle`: "Research Associate, UNU-WIDER"
>      - Bio paragraph: Research associate at [UNU-WIDER](https://www.wider.unu.edu/), focusing on tax-benefit microsimulation modeling and related topics such as social policy, taxation and employment. Coordinates the [SOUTHMOD](https://www.wider.unu.edu/project/southmod-simulating-tax-and-benefit-policies-development-phase-3) microsimulation models for [Vietnam](https://www.wider.unu.edu/about/vnmod-simulating-tax-and-benefit-policies-development-viet-nam), [Rwanda](https://www.wider.unu.edu/about/rwamod-simulating-tax-and-benefit-policies-development-rwanda) and [Uganda](https://www.wider.unu.edu/about/ugamod-simulating-tax-and-benefit-policies-development-uganda). Interested in [applications of generative AI in research](/ai-econ/) and analysis and visualization of complex data.
>      - SOUTHMOD course link: "Enroll in the [SOUTHMOD online course](https://learning.wider.unu.edu/group/2)"
>
> 2. **Divider** (`.divider`)
>
> 3. **Info section** (`.info-grid` with two columns):
>    - **Left column — Previous Affiliations** (`.section-label` "AFFILIATIONS"):
>      Use `.info-list` with linked entries: [OECD](https://www.oecd.org/sti/) (Science and Technology Division), [RAND Corporation](https://www.rand.org/pubs/authors/l/lastunen_jesse.html), [Internet Association](https://en.wikipedia.org/wiki/Internet_Association), [Technopolis Group](https://www.technopolis-group.com/), [CERN](https://home.cern)
>    - **Right column — Education** (`.section-label` "EDUCATION"):
>      Use `.info-list` with `.degree` and `.institution` per item:
>      - PhD, Policy Analysis — [Pardee RAND Graduate School](https://www.rand.edu/programs/phd-policy-analysis.html) (economics, quantitative methods)
>      - MPA — [University of Chicago Harris](https://harris.uchicago.edu/)
>      - MSc, International Trade, Finance & Development — [Barcelona School of Economics](https://bse.eu/study/masters-programs/international-trade-finance-and-development)
>      - MPhil, Technology Policy — [Cambridge Judge Business School](https://www.jbs.cam.ac.uk/masters-degrees/mphil-technology-policy/)
>      - Engineering/Management — [Masdar Institute](http://web.mit.edu/mit-mi-cp/) & [Tampere University](https://www.tuni.fi/en/about-us/industrial-engineering)
>
> 4. **Research interests note**: "A big chunk of this work involved research on the intersection of technological change and the labor market."
>
> **No CSS additions needed** — all classes already exist in style.css. Just verify the page looks good at desktop, tablet, and mobile widths after building.

---

## Step 3: Research Page ✅ DONE

38 publications in publications.json across 7 types. All exact text from `original-webpage.md`. Includes Capacity development, Conference presentations, Media and blogs, Links, Contact sections.

**What it produces:** Research page with publications grouped by type in accordions.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, build the Research page.
>
> First, fetch the full content of `https://sites.google.com/view/lastunen/research` to capture ALL publications listed there. Then:
>
> 1. Create `src/_data/publications.json` — a structured array where each entry has:
>    ```json
>    { "title": "", "authors": "", "year": 2025, "type": "Book Chapter|Working Paper|Journal Article|Policy Report|Other", "publication": "", "url": "", "description": "" }
>    ```
>    Include ALL publications from the Google Sites research page. Known entries:
>    - Book chapter: "Performance of Tax-benefit Systems during the COVID-19 Pandemic in Sub-Saharan Africa" (with Shahir, Rattenhuber, Adu-Ababio, Oliveira), in *Poor Protection*, OUP 2025
>    - Book chapter: "The Cushioning Effects of Tax-benefit Policies in Viet Nam during the COVID-19 Pandemic" (with de Mahieu), in *Poor Protection*, OUP 2025
>    - Add ALL other publications found on the Google Sites page
>    - If any entries can't be fully captured, add them with a `"placeholder": true` field
>
> 2. Create `src/research.njk` using the `base.njk` layout:
>    - Use `.page-intro` for an intro paragraph about research focus
>    - Group publications by `type` using Nunjucks loops
>    - Each type is an `.accordion-section` with `.accordion-header` containing title + `.accordion-count` badge (e.g., "Book Chapters" with count "2")
>    - Include `.accordion-indicator` span inside each header for the chevron
>    - Each publication entry uses `.pub-entry` with `.pub-title` (linked if URL), `.pub-authors`, `.pub-venue` (italic), `.pub-description`
>    - Accordions open by default on page load (JS handles this)
>
> 3. **No CSS additions needed** — `.accordion-section`, `.accordion-header`, `.accordion-count`, `.accordion-indicator`, `.pub-entry`, `.pub-title`, `.pub-authors`, `.pub-venue`, `.pub-description` are all already defined in style.css with full responsive and touch support.

---

## Step 4: SOUTHMOD Page ✅ DONE

Exact text from original-webpage.md. Resources section with WIDER quote, Access models, Online Training description, toggleable User Manual + Modelling Conventions (with PDFs), Publications list (8 categories), Wikipedia + tweets links, compact Links/Contact footer.

**What it produces:** SOUTHMOD project page with description, country list, and links.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, build the SOUTHMOD page. First check `https://sites.google.com/view/lastunen/southmod` for any additional content.
>
> Create `src/southmod.md` (or `.njk` if needed):
>
> 1. **Title**: SOUTHMOD Resources
> 2. **Intro**: Brief explanation of SOUTHMOD — tax-benefit microsimulation models hosted by UNU-WIDER, simulating effects of fiscal policy changes on household incomes and poverty across developing countries.
> 3. **Jesse's role**: Coordinates models for Vietnam (VNMOD), Rwanda (RWAMOD), and Uganda (UGAMOD)
> 4. **Model map placeholder**: `<img src="/assets/img/southmod-map.png" alt="SOUTHMOD Country Coverage Map" class="full-width-img">`
> 5. **Country coverage** (grouped by region):
>    - **Africa**: Ethiopia, Ghana, Mozambique, Rwanda, Tanzania, Uganda, Zambia
>    - **Latin America**: Bolivia, Colombia, Ecuador, Peru
>    - **Southeast Asia**: Viet Nam
>    - Plus complementary models for South Africa and Namibia (via SASPRI)
> 6. **Key links**:
>    - [UNU-WIDER SOUTHMOD project page](https://www.wider.unu.edu/project/southmod-simulating-tax-and-benefit-policies-development-phase-3)
>    - [SOUTHMOD online course](https://learning.wider.unu.edu/group/2)
>    - Link back to Research page for related publications
> 7. **What is microsimulation?** (2-3 sentences for non-specialists)

---

## Step 5: AI for Economists — Data Preparation

**What it produces:** Structured JSON data file with all 115+ AI resource entries, categorized and tagged.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, convert ALL entries from `/Users/jesse/development/Agent_instructions/AI Bookmarks - Consolidated.md` into `src/_data/ai_resources.json`.
>
> Each entry in the JSON array must have:
> ```json
> {
>   "id": "unique-slug",
>   "title": "Display title",
>   "url": "https://...",
>   "author": "Author name(s)",
>   "date": "2026-01" or null,
>   "description": "1-3 sentence description from the markdown",
>   "category": "one of the 10 categories below",
>   "subcategory": "more specific grouping",
>   "tags": ["tag1", "tag2"],
>   "featured": true or false,
>   "type": "paper|course|video|tool|article|guide|thread|other"
> }
> ```
>
> **10 categories** (map from the markdown sections):
> 1. `"Research Papers"` — AI-in-economics academic papers
> 2. `"Courses & Learning"` — courses, MOOCs, educational resources, lecture series
> 3. `"AI Tools for Research"` — Elicit, Refine.ink, STORM, PaperReview.ai, Google Scholar Labs, etc.
> 4. `"Coding with AI"` — Claude Code guides, Cursor guides, Stata+AI, VS Code tools
> 5. `"Talks & Videos"` — conference talks, YouTube lectures, webinars
> 6. `"Policy & Governance"` — government frameworks, regulation trackers, AI legislation
> 7. `"Prompt Engineering"` — prompting guides, frameworks, academic prompts
> 8. `"Commentary & Analysis"` — blog posts, opinion pieces, industry analysis, Twitter threads
> 9. `"International Organizations"` — UN/UNU, World Bank AI initiatives, conferences
> 10. `"Simulation & Data"` — agent-based models, satellite ML, DeepWealth, WorkSim
>
> **Tags** to use (apply relevant ones per entry): `economics`, `labor`, `growth`, `development`, `microsimulation`, `coding`, `stata`, `python`, `r`, `LLM`, `GPT`, `claude`, `teaching`, `ethics`, `regulation`, `free`, `open-source`, `beginner`, `advanced`, `finnish`, `tools`, `writing`, `peer-review`
>
> **Featured**: Set `true` for entries that have `<mark>` tags in the markdown (~40 entries).
>
> **Important**: Preserve ALL entries. Skip entries that link to internal/private UNU SharePoint pages (mark them with `"internal": true` instead). Count total entries at the end and report.

---

## Step 6: AI for Economists — Page Template + Interactivity

**What it produces:** The fully functional AI-econ page with category navigation, real-time search/filter, and resource cards.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, build the AI for Economists page using `src/_data/ai_resources.json`.
>
> 1. **Create `src/ai-econ.njk`** with layout `base.njk`:
>
>    **Hero section:**
>    - Title: "AI for Economists"
>    - Subtitle: "A curated collection of resources for economists working with artificial intelligence — from research papers and courses to practical tools and coding guides."
>    - Maintainer note: "Maintained by Jesse Lastunen. Last updated: March 2026."
>    - Resource count generated from data
>
>    **Controls:**
>    - Search bar: `<input type="search" id="resource-search" placeholder="Search resources by title, author, or keyword...">`
>    - Category filter pills: one per category + "All" (default) + "Featured"
>    - Type filter: secondary row of smaller pills for paper/course/video/tool/etc.
>    - Results count: "Showing X of Y resources"
>
>    **Resource display:**
>    - Entries grouped by category, each category as a collapsible accordion section with entry count
>    - Each entry as a card with:
>      - Small type indicator (emoji or CSS icon: paper, graduation cap, video, wrench, speech bubble, etc.)
>      - Title linked to URL (opens in new tab)
>      - Author and date (subtle, secondary text)
>      - Description paragraph
>      - Tags as small pills at bottom of card
>      - "Featured" star/badge if featured
>    - Cards: white background, subtle left border color-coded by category, gentle hover shadow
>
>    **Data attributes:** Each card gets `data-category`, `data-type`, `data-tags`, `data-searchable` (concatenated title+author+description+tags) for JS filtering.
>
> 2. **Update `src/assets/js/main.js`** — add search and filter:
>    - Real-time search: on input, filter cards by matching `data-searchable` (case-insensitive)
>    - Category pills: click to filter by `data-category`, toggle active state
>    - Type pills: click to filter by `data-type`
>    - Filters combine: search AND category AND type
>    - Update "Showing X of Y" counter
>    - URL hash: clicking a category sets `#category-slug`, and on page load, auto-filter if hash present
>    - "No results found" message when filters yield 0
>    - Smooth accordion open/close
>
> 3. **CSS already in style.css** (no additions needed):
>    - `.search-wrapper` / `.search-input` with SVG magnifying glass icon
>    - `.filter-pills` / `.filter-pill` — horizontal scroll on mobile (≤768px), wrap on desktop
>    - `.resource-card` with `.card-title`, `.card-meta`, `.card-description`, `.card-tags`, `.card-type-icon`
>    - 10 category-specific left-border colors via `data-category` attribute selectors
>    - `.resource-card.featured` gets gold gradient background + gold left border
>    - `.tag` / `.tag.featured-badge` (with star)
>    - `.results-count`, `.no-results`
>    - All responsive: cards go near-full-bleed on mobile, type icons hidden on ≤480px, touch hover effects disabled
>
> Make this page feel like a polished, world-class knowledge base. Clean, scannable, fast.

---

## Step 7: Git + GitHub Pages Deployment

**What it produces:** Git repo, GitHub remote, GitHub Actions CI/CD, site live on GitHub Pages.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`:
>
> 1. Initialize git: `git init`
> 2. Create `.github/workflows/deploy.yml`:
>    ```yaml
>    name: Deploy to GitHub Pages
>    on:
>      push:
>        branches: [main]
>    permissions:
>      contents: read
>      pages: write
>      id-token: write
>    concurrency:
>      group: "pages"
>      cancel-in-progress: false
>    jobs:
>      build:
>        runs-on: ubuntu-latest
>        steps:
>          - uses: actions/checkout@v4
>          - uses: actions/setup-node@v4
>            with:
>              node-version: '20'
>          - run: npm ci
>          - run: npm run build
>          - uses: actions/upload-pages-artifact@v3
>            with:
>              path: _site
>      deploy:
>        needs: build
>        runs-on: ubuntu-latest
>        environment:
>          name: github-pages
>          url: ${{ steps.deployment.outputs.page_url }}
>        steps:
>          - id: deployment
>            uses: actions/deploy-pages@v4
>    ```
> 3. Create `CNAME` file at project root containing: `policy.fi`
> 4. Create the GitHub repo: `gh repo create policy-fi --public --source=. --remote=origin`
> 5. Stage all files, commit "Initial site: academic personal website for policy.fi", push to main
> 6. Enable GitHub Pages (source: GitHub Actions) via `gh api` or manual settings
> 7. Verify the Actions workflow runs and the site is accessible at the GitHub Pages URL
>
> Do NOT configure DNS yet — that's Step 8.

---

## Step 8: DNS Configuration at Zoner Oy

**What it produces:** `DNS-SETUP.md` with exact instructions, then interactive help configuring DNS.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, create `DNS-SETUP.md` with complete instructions for configuring `policy.fi` through Zoner Oy to point to GitHub Pages.
>
> Include:
>
> 1. **A records** for apex domain `policy.fi`:
>    - `185.199.108.153`
>    - `185.199.109.153`
>    - `185.199.110.153`
>    - `185.199.111.153`
>
> 2. **CNAME record** for `www.policy.fi` → `<github-username>.github.io`
>
> 3. **GitHub repo settings**: Settings > Pages > Custom domain: `policy.fi` > Enforce HTTPS
>
> 4. **Verification**: `dig policy.fi +short`, expected output, propagation time (24-48h)
>
> 5. **URL structure**:
>    - `policy.fi` → Home
>    - `policy.fi/research/` → Research
>    - `policy.fi/southmod/` → SOUTHMOD
>    - `policy.fi/ai-econ/` → AI for Economists
>
> 6. **Zoner-specific notes**: DNS management likely at hallinta.zoner.fi, look for "DNS-asetukset" or "Nimipalvelimet"
>
> Then help me actually configure the DNS if I can access the Zoner panel (I may need to log in via browser).

---

## Step 9: Polish, SEO, and Final Touches

**What it produces:** Meta tags, Open Graph, favicon, sitemap, 404 page, performance and accessibility checks.

**Prompt:**

> Working in `/Users/jesse/development/Agent_instructions/personal-web-page`, add final polish:
>
> 1. **SEO** — update `base.njk`:
>    - `<title>{{ title }} | Jesse Lastunen</title>`
>    - `<meta name="description" content="{{ description or site.description }}">`
>    - Open Graph tags (og:title, og:description, og:url, og:image)
>    - Twitter card meta tags
>    - Canonical URL
>    - JSON-LD Person schema on home page
>
> 2. **Sitemap** — create `src/sitemap.njk` that generates `sitemap.xml` listing all pages
>
> 3. **robots.txt** — `src/robots.txt` allowing all crawlers, linking to sitemap
>
> 4. **Favicon** — create a simple SVG favicon (`src/assets/img/favicon.svg`) with initials "JL" in teal. Add `<link>` tags in head.
>
> 5. **404 page** — `src/404.md` with friendly message and nav back to home
>
> 6. **Performance**: lazy-load images, verify CSS < 15KB, JS < 10KB, no unused code
>
> 7. **Accessibility**: keyboard-navigable accordions, ARIA labels, skip-to-content link, color contrast check
>
> 8. **Visual review**: run `npm start`, check all 4 pages at desktop + mobile widths, fix any issues
>
> 9. Commit and push.

---

## Post-Launch: How to Update Content

**Add a new AI resource:**
1. Edit `src/_data/ai_resources.json` — add entry to the array
2. `git add . && git commit -m "Add resource: [title]" && git push`
3. GitHub Actions rebuilds automatically (~60 seconds)

**Add a publication:**
1. Edit `src/_data/publications.json`
2. Push

**Edit page text:**
1. Edit the `.md` or `.njk` file
2. Push

**Local preview:** `npm start` → localhost:8080

---

## Assets Needed from Jesse

- [ ] Profile photo (square, 400x400px+, save as `src/assets/img/profile.jpg`)
- [ ] SOUTHMOD map image (if available, save as `src/assets/img/southmod-map.png`) — can be downloaded from Google Sites page or recreated
- [ ] GitHub username (for CNAME and repo setup in Step 7)
- [ ] Zoner Oy login access (for DNS configuration in Step 8)
- [ ] Full publication list (will attempt to scrape from Google Sites in Step 3; fill in any gaps after)
- [ ] Any preferred contact email for the website footer

## Current Status

- **Step 1**: ✅ Done — Eleventy + "Policy Folio" design system + responsive/mobile + touch support
- **Step 2**: ✅ Done — Home page with exact original text, links, contact
- **Step 3**: ✅ Done — Research page with 38 publications, capacity dev, conferences, media
- **Step 4**: ✅ Done — SOUTHMOD page with exact original text, toggleable manuals, all links
- **Step 5**: ✅ Done — 131 entries in ai_resources.json (40 featured, 10 categories, 8 types, 2 internal)
- **Step 6**: ✅ Done — AI-econ page with 129 cards, 40 featured, 10 category groups, search + category/type filters, URL hash support
- **Steps 7–9**: Ready to execute in order
