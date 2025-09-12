module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  // ვქმნით "services" კოლექციას, რომელიც ავტომატურად დალაგდება `sort_order`-ის მიხედვით
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByTag("services").sort(function(a, b) {
      return (a.data.sort_order || 0) - (b.data.sort_order || 0);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};