# Project Rules

## Adding AI Resources

When adding entries to `src/_data/ai_resources.json`:

1. **Always append to the END** of the array (the "Recently Added" section shows the last 6 entries)
2. **Every new entry MUST include a `shortDescription`** field (max 160 characters) — a concise summary that fits neatly in the highlight card boxes. The regular `description` can be longer.
3. **No author names in the title** if the `author` field is set
4. **Title format**: "Title (venue)" for papers, plain title for guides/articles
5. **Categories**: Research Papers, Courses & Learning, Coding with AI, AI Tools for Research, Talks & Videos, Commentary & Analysis
6. **Types**: paper, course, video, tool, article, guide, thread, other

## Adding Publications

When adding entries to `src/_data/publications.json`:

1. Include an **`added: "YYYY-MM-DD"` field** with the date the entry is added. The home page "Recent research" section (`src/_data/recentResearch.js`) sorts by this field and shows the top two. Without it, the entry still appears on `/research/` but won't rise to the home page card.
2. The `authors` field lists co-authors excluding Jesse; the `citation` field lists all authors including Jesse.
3. `type` must match one of the categories in `research.njk` (`Book Chapter`, `Peer Reviewed`, `Other Published Work`, `Country Report`, `Technical Note`, `PhD Dissertation`, `Research Assistance`) — entries are grouped by type on the research page.

## After any change

1. Validate JSON: `node -e "require('./src/_data/ai_resources.json')"` (and/or `publications.json`)
2. Build: `npx @11ty/eleventy`
3. Deploy: `git add . && git commit -m "description" && git push`

## Highlight entries

The 6 "Highlights" are manually curated (entries with `highlight: true` and a `highlightDesc` field). The "Recently Added" tab auto-shows the last 6 entries using their `shortDescription`.
