module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addWatchTarget("css/");

  return {
    dir: {
      input:    ".",
      output:   "_site",
      includes: "_includes",
      data:     "_data"
    },
    templateFormats:        ["njk", "html", "md"],
    htmlTemplateEngine:     "njk",
    markdownTemplateEngine: "njk"
  };
};
