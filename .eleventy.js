const i18n = require("eleventy-plugin-i18n");

module.exports = function(eleventyConfig) {
  
  // 1. ვაბრუნებთ i18n დანამატს, რათა კოლექციები სწორად შეიქმნას
  eleventyConfig.addPlugin(i18n, {
    defaultLanguage: "ka",
  });

  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("src/admin");

  // 2. ვტოვებთ ჩვენს "ჭკვიან" ფილტრს მონაცემების დასამუშავებლად
  eleventyConfig.addFilter("getAndSortServices", (services, lang) => {
    // თავდაცვის მიზნით, ვამოწმებთ, რომ კოლექცია არსებობს
    if (!services || !services.length) {
      return [];
    }
    
    const kaServices = services.filter(item => item.data.lang === 'ka');
    const filteredServices = services.filter(item => item.data.lang === lang);

    if (lang === 'en') {
      return filteredServices.map(enService => {
        const kaTwin = kaServices.find(kaService => kaService.fileSlug === enService.fileSlug);
        if (kaTwin) {
          enService.data.icon = kaTwin.data.icon;
          enService.data.sort_order = kaTwin.data.sort_order;
        }
        return enService;
      }).sort((a, b) => a.data.sort_order - b.data.sort_order);
    }

    return filteredServices.sort((a, b) => a.data.sort_order - b.data.sort_order);
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