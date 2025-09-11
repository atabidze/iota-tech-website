module.exports = {
  eleventyComputed: {
    // ეს ფუნქცია მუშაობს ყოველი სერვისის ფაილისთვის საიტის აწყობისას
    icon: (data) => {
      // თუ სერვისი ინგლისურია და მას არ აქვს საკუთარი იკონი
      if (data.lang === 'en' && !data.icon) {
        // ვიპოვოთ მისი ქართული ვერსია
        const georgianService = data.collections.services.find(
          (service) => service.data.lang === 'ka' && service.data.translationKey === data.translationKey
        );
        // თუ ვიპოვეთ, დავაბრუნოთ ქართული ვერსიის იკონი
        return georgianService ? georgianService.data.icon : null;
      }
      // სხვა შემთხვევაში, დავაბრუნოთ ის იკონი, რაც უწერია
      return data.icon;
    },
    sort_order: (data) => {
      // იგივე ლოგიკა რიგითობისთვის
      if (data.lang === 'en' && !data.sort_order) {
        const georgianService = data.collections.services.find(
          (service) => service.data.lang === 'ka' && service.data.translationKey === data.translationKey
        );
        return georgianService ? georgianService.data.sort_order : 0;
      }
      return data.sort_order;
    },
  },
};