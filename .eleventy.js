const path = require('path'); // <<< This is the new line that fixes the error
const markdownIt = require("markdown-it");
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addPlugin(lucideIcons, {
    "class": "icon",
    "width": 32,
    "height": 32,
    "stroke-width": 1.5
  });

  eleventyConfig.addCollection("managed_services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/**/*.md");
  });

  eleventyConfig.addFilter("getAndSortServices", (services, lang) => {
    if (!services || !services.length) { return []; }
    const kaServices = services.filter(item => item.data.lang === 'ka');
    const filteredServices = services.filter(item => item.data.lang === lang);
    let enrichedServices = filteredServices.map(service => {
      let finalService = { ...service }; 
      if (finalService.data.lang === 'en') {
        const kaTwin = kaServices.find(kaService => kaService.fileSlug === finalService.fileSlug);
        if (kaTwin) {
          finalService.data.icon = kaTwin.data.icon;
          finalService.data.sort_order = kaTwin.data.sort_order;
        }
      }
      return finalService;
    });
    return enrichedServices.sort((a, b) => (a.data.sort_order || 0) - (b.data.sort_order || 0));
  });

  const md = new markdownIt({ html: true });
  eleventyConfig.addFilter("markdownify", (content) => {
    return md.render(content);
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};