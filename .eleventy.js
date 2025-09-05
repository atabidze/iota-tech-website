module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("catalogs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/catalogs/*.md").sort((a, b) => {
        return (a.data.sort_order || 99) - (b.data.sort_order || 99);
    });
  });

  // Eleventy-ს ვეუბნებით, რომ details კოლექციაც არსებობს
  eleventyConfig.addCollection("details", function(collectionApi) {
    return collectionApi.getFilteredByTag("details");
  });

  eleventyConfig.addFilter("findBySlug", function(collection, slug) {
    return collection.find(item => item.fileSlug === slug);
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
  };
};