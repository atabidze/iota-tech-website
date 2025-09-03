module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // ეს ეუბნება Eleventy-ს, რომ ყველა ფაილი "kategoriebi" თეგით
  // გამოიყენოს დინამიური გვერდების შესაქმნელად service-detail.njk შაბლონით
  eleventyConfig.addCollection("kategoriebi", function(collectionApi) {
    return collectionApi.getFilteredByTag("kategoriebi").sort((a, b) => {
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