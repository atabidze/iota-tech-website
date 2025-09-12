module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/**/*.md");
  });

  eleventyConfig.addFilter("getAndSortServices", (services, lang) => {
    if (!services || !services.length) {
      return [];
    }
    
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