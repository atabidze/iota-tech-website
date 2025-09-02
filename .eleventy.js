module.exports = function(eleventyConfig) {
  // ეს ხაზი აკოპირებს assets საქაღალდეს (CSS, სურათები და ა.შ.)
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // ეს ახალი ხაზი აკოპირებს admin საქაღალდეს
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};