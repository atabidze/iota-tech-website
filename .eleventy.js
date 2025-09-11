const i18n = require("eleventy-plugin-i18n");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(i18n, {
    defaultLanguage: "ka", // საიტის ძირითადი ენა
  });

  eleventyConfig.addPassthroughCopy("./src/assets/");

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