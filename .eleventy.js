module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // "First Author, et al." for 3+ authors
  eleventyConfig.addFilter("shortAuthor", function (author) {
    if (!author) return "";
    const parts = author.split(",").map(s => s.trim());
    if (parts.length >= 3) return parts[0] + ", et al.";
    return author;
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
