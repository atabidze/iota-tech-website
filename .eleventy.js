module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("services", function(collectionApi) {
    // ეს არის სწორი, ერთადერთი return, რომელიც ჯერ ფილტრავს და შემდეგ ალაგებს.
    return collectionApi.getFilteredByTag("services")
      // ვფილტრავთ კოლექციას, რათა წაიშალოს ყველა ჩანაწერი, რომელსაც არ აქვს სათაური.
      .filter(item => item.data.title && item.data.title.trim() !== "")
      .sort((a, b) => (a.data.sort_order || 99) - (b.data.sort_order || 99));
  });

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
  };
};
