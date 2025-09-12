module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  // --- დაემატა ახალი ფილტრი ---
  eleventyConfig.addFilter("getAndSortServices", (services, lang) => {
    // 1. ვიღებთ ყველა ქართულ სერვისს ცალკე
    const kaServices = services.filter(item => item.data.lang === 'ka');
    
    // 2. ვფილტრავთ მიმდინარე ენის სერვისებს
    const filteredServices = services.filter(item => item.data.lang === lang);

    // 3. თუ ინგლისურ ენაზე ვართ, ვამდიდრებთ მონაცემებს
    if (lang === 'en') {
      return filteredServices.map(enService => {
        // ვპოულობთ შესაბამის ქართულ სერვისს slug-ით
        const kaTwin = kaServices.find(kaService => kaService.fileSlug === enService.fileSlug);
        // თუ ვიპოვეთ, ინგლისურს ვანიჭებთ ქართულის იკონს და რიგითობას
        if (kaTwin) {
          enService.data.icon = kaTwin.data.icon;
          enService.data.sort_order = kaTwin.data.sort_order;
        }
        return enService;
      }).sort((a, b) => a.data.sort_order - b.data.sort_order);
    }

    // 4. თუ ქართულ ენაზე ვართ, უბრალოდ ვალაგებთ
    return filteredServices.sort((a, b) => a.data.sort_order - b.data.sort_order);
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