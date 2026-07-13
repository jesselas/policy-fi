module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Dynamic date values
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());
  eleventyConfig.addGlobalData("buildMonth", new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
  eleventyConfig.addGlobalData("buildDate", new Date().toISOString().split('T')[0]);

  // "First Author, et al." for 3+ authors
  eleventyConfig.addFilter("shortAuthor", function (author) {
    if (!author) return "";
    const parts = author.split(",").map(s => s.trim());
    if (parts.length >= 3) return parts[0] + ", et al.";
    return author;
  });

  // Last name of the first author, lowercased — for sorting
  eleventyConfig.addFilter("lastName", function (author) {
    if (!author) return "";
    const firstAuthor = author.split(",")[0].trim();
    const words = firstAuthor.split(/\s+/);
    return (words[words.length - 1] || "").toLowerCase();
  });

  // Match a URL, trimming trailing sentence punctuation / closing brackets.
  const URL_RE = /https?:\/\/[^\s<>()]+[^\s<>().,;:'"\]}]/g;
  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  // linkify: for plain-text fields (citations, abstracts, extras). Escapes the
  // text, then turns bare URLs/DOIs into links. Use with `| linkify | safe`.
  eleventyConfig.addFilter("linkify", function (input) {
    if (input == null) return input;
    const str = String(input);
    let out = "";
    let last = 0;
    let m;
    URL_RE.lastIndex = 0;
    while ((m = URL_RE.exec(str))) {
      out += escapeHtml(str.slice(last, m.index));
      const safe = escapeHtml(m[0]);
      out += `<a href="${safe}" target="_blank" rel="noopener">${safe}</a>`;
      last = m.index + m[0].length;
    }
    out += escapeHtml(str.slice(last));
    return out;
  });

  // linkifyRich: for fields that already contain trusted HTML (e.g. ai_resources
  // descriptions with hand-authored <a> tags). Linkifies only bare URLs that sit
  // in text outside an existing anchor, leaving all other markup untouched.
  eleventyConfig.addFilter("linkifyRich", function (input) {
    if (input == null) return input;
    const parts = String(input).split(/(<[^>]+>)/g);
    let inAnchor = 0;
    return parts
      .map((part) => {
        if (part.startsWith("<") && part.endsWith(">")) {
          if (/^<a\b/i.test(part)) inAnchor++;
          else if (/^<\/a\s*>/i.test(part)) inAnchor = Math.max(0, inAnchor - 1);
          return part;
        }
        if (inAnchor > 0) return part;
        return part.replace(URL_RE, (u) => {
          const href = u.replace(/&/g, "&amp;");
          return `<a href="${href}" target="_blank" rel="noopener">${href}</a>`;
        });
      })
      .join("");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
