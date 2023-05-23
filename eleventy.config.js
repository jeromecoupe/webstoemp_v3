module.exports = function (eleventyConfig) {
  // ignores
  eleventyConfig.ignores.add("src/assets/**/*");
  eleventyConfig.watchIgnores.add("src/assets/**/*");

  // copy
  eleventyConfig.addPassthroughCopy({ "./src/static": "./dist" });
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  // server config
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/js/**/*", "./dist/assets/css/**/*"],
  });

  // override default config
  return {
    dir: {
      input: "src/",
      output: "dist/",
      data: "_data",
      includes: "_includes",
    },
    templateFormats: ["liquid", "md", "html"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
