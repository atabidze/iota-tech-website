module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  // --- ვტოვებთ მხოლოდ ჩვენს "ჭკვიან" ფილტრს ---
  eleventyConfig.addFilter("getAndSortServices", (services, lang) => {
    // თავდაცვის მიზნით, ვამოწმებთ, რომ კოლექცია არსებობს
    if (!services || !services.length) {
      return [];
    }
    
    const kaServices = services.filter(item => item.data.lang === 'ka');
    const filteredServices = services.filter(item => item.data.lang === lang);

    let enrichedServices = filteredServices.map(service => {
      let finalService = { ...service }; // ვქმნით ასლს, რომ ორიგინალს არ შევეხოთ
      
      if (finalService.data.lang === 'en') {
        const kaTwin = kaServices.find(kaService => kaService.fileSlug === finalService.fileSlug);
        if (kaTwin) {
          // ინგლისურს ვანიჭებთ ქართულის იკონს და რიგითობას
          finalService.data.icon = kaTwin.data.icon;
          finalService.data.sort_order = kaTwin.data.sort_order;
        }
      }
      return finalService;
    });

    return enrichedServices.sort((a, b) => a.data.sort_order - b.data.sort_order);
  });
  // ------------------------------------

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