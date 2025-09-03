module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // შევცვალეთ კოლექციის სახელი და მისამართი
  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/categories/*.md").sort((a, b) => {
        return (a.data.sort_order || 99) - (b.data.sort_order || 99);
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
  };
};