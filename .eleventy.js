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
