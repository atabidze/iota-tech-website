module.exports = function(eleventyConfig) {
  // ეს ხაზი უზრუნველყოფს, რომ თქვენი სურათების და სტილების ფოლდერი დაკოპირდეს საბოლოო საიტზე
  eleventyConfig.addPassthroughCopy("src/assets");

  // ეს არის ფილტრი, რომელიც სორტირების საშუალებას გვაძლევს
  eleventyConfig.addFilter("sortBy", (arr, key) => {
    if (!arr) return [];
    return arr.slice().sort((a, b) => (a.data[key] < b.data[key] ? -1 : 1));
  });

  // თქვენი პროექტის კონფიგურაცია
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};