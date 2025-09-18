const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  // კოლექციას დავარქვით managed_services, რათა უფრო აღწერადი იყოს
  eleventyConfig.addCollection("managed_services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/**/*.md");
  });

  // "ჭკვიანი" ფილტრი უცვლელი რჩება
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

  const md = new markdownIt({
    html: true,
  });
  eleventyConfig.addFilter("markdownify", (content) => {
    return md.render(content);
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