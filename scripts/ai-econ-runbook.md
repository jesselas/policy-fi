# AI-for-Economists Resource Runbook

This is the operational source of truth for the automated "AI for economists"
updates to the page at `/ai-econ/`. The scheduled task's prompt is intentionally
thin — it just says "read and follow `scripts/ai-econ-runbook.md`". Change the
window, sources, or filters **here**, in the repo; no scheduler edit needed.

- **Page data file:** `src/_data/ai_resources.json`
- **Goal:** every run, find new high-quality resources within the lookback
  window, verify them, add them, build, and push to `main` so the site
  auto-deploys.
- **Autonomy:** run fully autonomously — make reasonable choices and note them
  in the report.

## Environment

You run in an isolated cloud sandbox with WebSearch, WebFetch, Bash/git, and the
connected Gmail MCP connector — but **not** the Claude-in-Chrome browser tools.
For X/Twitter and LinkedIn URLs, try WebFetch; if it returns an empty shell you
cannot verify, list the item under "Found but could not verify" rather than
guessing.

## ⚠️ Verification guardrail — read first ⚠️

NEVER add an entry without visiting the actual URL and confirming these from the
page itself:

- **Author:** EXACTLY as shown on the page. Never guess from snippets, titles,
  or prior knowledge. If unclear, set author to `null`.
- **Title:** the exact title from the page.
- **Date:** the publication date shown on the page (`YYYY-MM`, or `YYYY-MM-DD`).
- **URL:** confirm it loads and is the actual resource (not a post ABOUT it).
- **Description:** only claims you verified on the page — no invented
  stats/findings.

If you cannot visit a URL to verify, DO NOT add it; list it under "Found but
could not verify" in your report.

The repo is PUBLIC and contains only site files. Commit as Jesse (Step 4). Do
NOT add `Co-Authored-By:` or `Claude-Session:` trailers, and do not mention
Claude/Anthropic in commit messages.

## Self-healing lookback window

A fixed "past 2 days" leaves a permanent gap whenever a run fails. Instead,
derive the cutoff from the last **successful** run, which git records — an
`Auto update: AI-econ resources` commit exists only when a run actually pushed.

Determine today's date with `date`, then compute:

```
LAST=$(git log -1 --format=%cd --date=short \
       --grep='Auto update: AI-econ resources' origin/main)
# If LAST exists: lookback_days = min(14, max(4, (today - LAST in days) + 1))
# If not:         lookback_days = 4
# cutoff = today - lookback_days
```

Floor of 4 days comfortably covers a single missed daily run; the window
auto-widens (up to a 14-day cap) after multiple failures, then narrows back once
a run succeeds. Report the computed `cutoff` and `lookback_days` at the top of
the run. Overlap is harmless — dedup (by id **and** normalized URL) skips
anything already on the page.

> Do not change the commit message format `Auto update: AI-econ resources
> (YYYY-MM-DD)` — the self-healing window greps for it.

## Step 0 — Gmail: self-forwarded links

Jesse forwards high-signal leads to himself from his phone. Search the connected
Gmail for threads `from:lastunen@mail.com after:YYYY/MM/DD` (use the **cutoff**
computed above). Read each thread, extract every URL (X/Twitter, LinkedIn,
Substack, blogs, papers). For EACH URL, fetch it with WebFetch. On X check the
thread/quoted posts/replies (the real resource is often linked in a reply); on
LinkedIn follow any paper/blog links; on Substack/blogs check for the underlying
primary source. Evaluate each link AND any substantive resource it points to
against the quality filter. In the report, list every Gmail URL with its
disposition (added / skipped + reason).

## Step 1 — Web searches (within the lookback window)

Run varied, date-bounded searches (use `after:YYYY-MM-DD` with the cutoff, or
"past N days"). Cover:

1. **New papers:** `site:nber.org` AI/LLM/"machine learning" economics;
   `site:arxiv.org` econ.GN + LLM/AI; Google Scholar AI-in-economics by date.
2. **Economist blogs/Substacks:** Goldsmith-Pinkham, Scott Cunningham, Tom
   Cunningham, Gans, Korinek, Bryan, Mele, Golub, Jimbo Brand, Cowen (Marginal
   Revolution) — name + "AI", filtered to recent.
3. **Coding guides:** Claude Code / Codex / Cursor / Stata+AI for
   economists/researchers.
4. **AI research tools:** new launches or major updates (Elicit, etc.).
5. **Threads:** notable EconTwitter/X threads on using AI in research.
6. **Conferences:** AEA / NBER / Econometric Society AI sessions, webcasts,
   recordings.
7. **Policy:** major new AI regulation/governance documents relevant to
   economists.

Vary queries each run; adapt to what's trending that week.

### Weekly deep backfill (safety net)

On **Mondays** (`date +%u` == `1`), also run a wider **30-day** sweep over the
canonical high-signal sources — NBER new "artificial intelligence" working
papers, the arXiv `econ.GN` recent listing, and the tracked economist
blogs/Substacks above — to catch anything that slipped through daily runs (e.g.
during an outage). Dedup-check every candidate as usual; add only items that
pass the full quality + verification bar. Note in the report that a backfill
sweep ran and what (if anything) it recovered. This is belt-and-suspenders on
top of the self-healing window; the robust dedup keeps it from re-adding
existing entries.

## Step 2 — Quality filter

Add a resource ONLY if it meets ALL of:

- Specifically about AI/LLMs for economists or economics research (not generic
  AI news).
- From a credible source (academic, established economist, reputable outlet) OR
  a self-forwarded Jesse lead that is substantive and on-topic.
- Substantive (not a one-line tweet, an event teaser with no materials, or
  promotional content for a paper-mill / hype product).
- A durable, accessible resource (skip pure announcements of future events that
  have no slides/recording/page yet).
- NOT a duplicate — see the dedup check in Step 3.
- You VISITED the URL and verified author/title/date from the page itself.

## Step 3 — Add entries

First read `src/_data/ai_resources.json`. Before adding ANYTHING, dedup-check
each candidate against the existing array by BOTH id and normalized URL (strip
trailing slashes); if either already exists, skip it as a duplicate. Many leads
point to items already on the page — check carefully.

Each new entry's schema (NO `subcategory` field — it was removed):

```json
{
  "id": "short-slug",
  "title": "Clean title (no author name if author field is set; 'Title (venue)' for papers)",
  "url": "https://...",
  "author": "Author Name or null",
  "date": "2026-06",
  "description": "Catalogue entry, 2-3 sentences (see Rules below)",
  "shortDescription": "Max 160 chars, concise summary for the highlight card",
  "category": "one of: Research Papers, Courses & Learning, Coding with AI, AI Tools for Research, Talks & Videos, Commentary & Analysis",
  "tags": ["economics", "LLM"],
  "featured": false,
  "type": "paper|report|course|video|tool|article|guide|thread|other",
  "internal": false,
  "highlight": false
}
```

Rules:

- **Order:** ALWAYS append new entries to the END of the array, never insert at
  the start or middle — the "Recently Added" section shows the last 20.
- **description:** ~350–500 characters, 650 hard maximum. A catalogue entry, not
  a summary of the source: what it is, its central claim, why a reader would
  open it. Having the full text to hand is not a reason to walk through its
  sections.
- **shortDescription:** required on every entry, ≤160 characters.
- **title:** no author name when the author field is set. For papers use
  "Title (venue)" — venue only, never an identifier: (arXiv), (NBER), (SSRN),
  not (arXiv 2602.20946) or (NBER WP 34713).
- **type:** use `report` for institutional publications issued as a standalone
  report, brief or note (World Bank, IMF, Fed, PIIE, SIEPR, ministries).
  Preprints and working papers are `paper`; recurring institutional blog series
  like Liberty Street Economics are `article`.
- If nothing new is worth adding, add NOTHING — do not pad with filler — and say
  so in the report.

## Step 4 — Validate, build, deploy

1. Validate: `node -e "require('./src/_data/ai_resources.json')"`
2. Build: `npx @11ty/eleventy` (a passthrough warning about copying assets/CSS
   is non-fatal; confirm the HTML pages built).
3. Verify: grep the built `_site/ai-econ/index.html` for each new title/author
   to confirm the entries rendered.
4. Commit and push to `main` (this triggers auto-deploy):

   ```
   git config user.name "Jesse"
   git config user.email "lastunen@mail.com"
   git add src/_data/ai_resources.json
   git commit -m "Auto update: AI-econ resources (YYYY-MM-DD)"
   git push origin main
   ```

   If there were no additions, skip the commit/push. Retry a failed push with
   exponential backoff; if the remote advanced, fetch and rebase the data-only
   commit before retrying.

## Step 5 — Report

Summarize: the computed `cutoff` / `lookback_days`; how many added; whether a
weekly backfill sweep ran; a GMAIL section (each URL → added/skipped + reason);
a WEB-SEARCH section (each added item → title, author, category, one-line
reason); for every added item confirm "✓ Visited URL and verified
author/title/date"; list notable items found but NOT added (and why) and any
"Found but could not verify." Confirm the push succeeded (report the commit
hash) or explain any failure.
