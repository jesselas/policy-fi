# Publish the SOUTHMOD Claude skill at policy.fi/southmod

Handoff for the personal-web-page repo's agent. Goal: make the country-neutral SOUTHMOD/EUROMOD Claude skill downloadable from the existing `/southmod` page.

## What this is

A Claude Code **skill** (`/southmod`): a country-neutral assistant for SOUTHMOD and EUROMOD. It carries the universal SOUTHMOD/EUROMOD knowledge (architecture, function set, naming taxonomy, modelling conventions, analysis methods) and — crucially — it **understands any specific country model by reading that model's own XML and data files**, answering in modeller's language with `file:line` citations. It does not ship or assert country-specific facts. It is **method-only**: users bring their own licensed SOUTHMOD bundle (required anyway by the SOUTHMOD Adhesion Agreement; some models ship only data-generating do-files). No model data is redistributed.

## Step 1 — the asset is already in place

`src/assets/southmod-skill.zip` has already been created (it unzips to a top-level `southmod/` folder containing `SKILL.md`, `references/`, and `evals/`). It will be served at **`/assets/southmod-skill.zip`**. Just confirm it is present and tracked by git; you do not need to regenerate it. (If you ever rebuild it: `cd ~/.claude/skills && zip -r <repo>/src/assets/southmod-skill.zip southmod -x '*.DS_Store'`.)

## Step 2 — add a "Claude skill" section to `src/southmod.njk`

The page already has working frontmatter (`layout: base.njk`, `title`, `description`, `jsonLd`) — **leave it as is**; no new frontmatter is required. Optionally, if you want richer structured data, you may add a `SoftwareApplication`/`HowTo` node to the existing `jsonLd`, but this is not necessary.

Add a new `info-section` inside the `<div class="southmod-main">` column (it currently holds Resources → Model info → Publications → Other). Place the new block as the **first** section in that column (right after `<div class="southmod-main">`) or directly after the "Resources" section — your judgement on flow. Use the site's existing classes (`info-section`, `section-label`, and `divider` between entries if you split it). Ready-to-paste block:

```html
<div class="info-section">
  <h2 class="section-label">Claude skill</h2>
  <p>
    <strong>A free Claude Code skill for SOUTHMOD and EUROMOD.</strong> It turns
    <a href="https://claude.com/claude-code">Claude Code</a> into a country-neutral
    SOUTHMOD assistant: it reads your model's own XML, configuration, output, and
    documentation files and explains them in a modeller's language — the policy
    spine, the system matrix, income lists, uprating, equivalence scales, reforms —
    with citations back to the exact files and lines. It works for all 14 country
    models (and the DEVMOD training model), because it learns each model by reading
    it rather than reciting fixed facts.
  </p>

  <p class="divider"></p>

  <h3>What it does</h3>
  <ul>
    <li>Detects what SOUTHMOD material you have open — a full bundle, a single
      <code>&lt;CC&gt;.xml</code>, a data-config or <code>VarConfig.xml</code>, an
      output dataset, a DRD workbook, the Stata/Python review code, or a Country
      Report — in any combination, even partial — and routes to the right analysis.</li>
    <li>Answers structural questions (what a policy does in a given system, how a
      variable is built, where a constant lives) by reading the live model and
      checking the correct system column of the matrix.</li>
    <li>Computes the standard distributional statistics (equivalised disposable
      income, poverty headcount and gap, Gini) from an output dataset, and walks you
      through running a model or authoring a reform.</li>
    <li>Says what it cannot determine without a missing file, instead of inventing.</li>
  </ul>

  <p class="divider"></p>

  <h3>Install</h3>
  <p>
    Download the skill and unzip it into your Claude Code skills folder — either
    user-wide (<code>~/.claude/skills/</code>) or per project
    (<code>.claude/skills/</code> in a repository). The archive expands to a
    <code>southmod/</code> folder, so:
  </p>
  <pre><code>unzip southmod-skill.zip -d ~/.claude/skills/</code></pre>
  <p>
    Then start Claude Code in a folder containing your model and ask a SOUTHMOD
    question (or type <code>/southmod</code>). The skill activates automatically on
    SOUTHMOD/EUROMOD topics.
  </p>

  <p class="divider"></p>

  <h3>Bring your own model</h3>
  <p>
    The skill is method-only and ships <strong>no model data</strong>. Request the
    SOUTHMOD models, data, and documentation from UNU-WIDER (you accept the SOUTHMOD
    Adhesion Agreement for non-commercial research use):
    <a href="https://www.wider.unu.edu/about/accessing-southmod-models">accessing SOUTHMOD models</a>.
    The EUROMOD software itself is a separate free download from the
    <a href="https://euromod-web.jrc.ec.europa.eu/download-euromod">JRC</a>.
  </p>

  <p>
    <a class="spotlight-cta" href="/assets/southmod-skill.zip" download>Download the SOUTHMOD Claude skill (.zip) →</a>
  </p>
</div>
```

Adjust the wrapper/heading classes if `southmod.njk` uses a different convention for sub-headings inside an `info-section` — match what the neighbouring sections do (the existing sections use `pub-entry`/`pub-toggle` for collapsible lists; a static section like this one can use plain `<h3>`/`<ul>`/`<p>` as above). Reuse `.divider` exactly as elsewhere on the site.

## Step 3 — optional nav link

If the site has a nav or in-page anchor list for `/southmod`, add a "Claude skill" anchor only if it fits the existing pattern. Not required.

## Step 4 — validate, build, deploy

```bash
cd <repo>
npx @11ty/eleventy            # build; confirm /southmod renders with the new section
# spot-check that _site/southmod/index.html contains the new section
# and that _site/assets/southmod-skill.zip exists
git add src/southmod.njk src/assets/southmod-skill.zip
git commit -m "southmod: add downloadable Claude skill section"
git push                       # auto-deploys to policy.fi
```

## Acceptance checks

- `/southmod` renders the new "Claude skill" section.
- `/assets/southmod-skill.zip` resolves and downloads.
- Unzipping it into `~/.claude/skills/` yields `~/.claude/skills/southmod/SKILL.md` (+ `references/`, `evals/`).
