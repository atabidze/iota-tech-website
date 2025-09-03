module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("categories", function(collectionApi) {
    return collectionApi.getFilteredByTag("categories").sort((a, b) => {
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