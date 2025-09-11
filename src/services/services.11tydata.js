module.exports = {
  eleventyComputed: {
    // ეს ფუნქცია მუშაობს ყოველი სერვისის ფაილისთვის საიტის აწყობისას
    icon: (data) => {
      // თუ მიმდინარე სერვისი ინგლისურია
      if (data.lang === 'en') {
        // ვპოულობთ მის ქართულ ვერსიას `translationKey`-ს მიხედვით
        const georgianService = data.collections.services.find(
          (service) => service.data.lang === 'ka' && service.data.translationKey === data.translationKey
        );
        // თუ ვიპოვეთ, ვაბრუნებთ ქართული ვერსიის იკონს. თუ ვერა, ვტოვებთ იმას, რაც აქვს.
        return georgianService ? georgianService.data.icon : data.icon;
      }
      // თუ სერვისი ქართულია, უბრალოდ ვაბრუნებთ მის საკუთარ იკონს
      return data.icon;
    },
    sort_order: (data) => {
      // იგივე ლოგიკა რიგითობისთვის
      if (data.lang === 'en') {
        const georgianService = data.collections.services.find(
          (service) => service.data.lang === 'ka' && service.data.translationKey === data.translationKey
        );
        return georgianService ? georgianService.data.sort_order : data.sort_order;
      }
      return data.sort_order;
    },
  },
};