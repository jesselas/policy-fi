# Monthly Email Link Review for AI-for-Economists Page

Paste this into a new Cowork conversation with the personal-web-page folder connected.

---

## Prompt

I maintain a curated AI-for-economists resource page. The data file is at `src/_data/ai_resources.json`. I regularly email myself links — from `lastunen@mail.com` to `lastunenj@gmail.com` — containing resources I might want to add to the site. These emails typically contain URLs to tweets/X posts, LinkedIn posts, blog posts, papers, tools, and articles, sometimes with brief notes from me.

**Your job:** Search my Gmail for all such emails from the past month, extract every link and piece of context, investigate each link thoroughly, and produce a recommendation report. Then, after I approve, add the ones I select to the JSON file.

### Step 1: Retrieve emails

Use the Gmail connector to search for emails from the past month:
- Query: `from:lastunen@mail.com to:lastunenj@gmail.com newer_than:30d`
- Page through ALL results (don't stop at the first page)
- For each thread, use `get_thread` to get the **full message body** — the search results only show snippets, and the actual URLs are in the body
- Extract every URL from every message, plus any surrounding text/notes I wrote

### Step 2: Investigate each link

For every URL found, visit the actual page (using web fetch or Chrome tools as needed) and extract:
- **Exact title** as shown on the page
- **Exact author** as shown on the page (not guessed from the URL or my notes)
- **Publication date** as shown on the page
- **What it is**: paper, blog post, tweet/thread, tool, video, guide, etc.
- **1-2 sentence summary** of the substance

For X/Twitter links: these often point to threads that themselves link to papers, blog posts, or tools. Follow the chain — the thread may just be commentary on the real resource. Capture both the thread and the underlying resource if substantive.

For LinkedIn posts: extract the actual content; these are often economists sharing new work or commentary.

If a URL is dead, paywalled, or otherwise inaccessible, note it as "could not verify" and move on.

### Step 3: Filter against existing entries

Read `src/_data/ai_resources.json` and check each candidate against what's already on the site. Flag duplicates. Also flag resources that are:
- Not specifically about AI/LLMs for economists or in economics research (generic AI news doesn't qualify)
- From non-credible sources
- Not substantive (one-line tweets, promotional content)
- Older than 6 months at time of review (unless exceptionally important and missing from the site)

### Step 4: Produce the recommendation report

Present a structured report with two sections:

**A. Recommended to add** — For each:
- Title, author, date, URL
- Proposed category (one of: Research Papers, Courses & Learning, Coding with AI, AI Tools for Research, Talks & Videos, Commentary & Analysis)
- Proposed type (one of: paper, course, video, tool, article, guide, thread, other)
- Draft `description` (1-3 sentences, can include HTML links to related resources)
- Draft `shortDescription` (max 160 characters, concise summary for highlight cards)
- One-line reason for inclusion
- Verification status: "Visited URL and confirmed author/title/date" or flag if not

**B. Not recommended** — For each:
- Title, URL
- One-line reason for exclusion (duplicate, off-topic, not substantive, etc.)

### Step 5: After my approval

Once I tell you which entries to add:
1. Append them to the END of `src/_data/ai_resources.json` (the "Recently Added" section shows the last 6)
2. Every entry MUST have a `shortDescription` (max 160 chars)
3. No author names in the title if the `author` field is set
4. Title format: "Title (venue)" for papers, plain title for guides/articles
5. Do NOT include a `subcategory` field
6. Set `featured`, `internal`, and `highlight` to `false`
7. Validate: `node -e "require('./src/_data/ai_resources.json')"`
8. Give me the exact terminal command to commit and push

### Entry schema for reference

```json
{
  "id": "short-slug",
  "title": "Clean title",
  "url": "https://...",
  "author": "Author Name or null",
  "date": "YYYY-MM",
  "description": "1-3 sentence description",
  "shortDescription": "Max 160 char summary",
  "category": "Research Papers | Courses & Learning | Coding with AI | AI Tools for Research | Talks & Videos | Commentary & Analysis",
  "tags": ["economics", "AI", ...],
  "featured": false,
  "type": "paper|course|video|tool|article|guide|thread|other",
  "internal": false,
  "highlight": false
}
```
