//plugins
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// collections
const blogposts = require("./src/_11ty/collections/blogposts.js");

// filters
const dates = require("./src/_11ty/filters/dates.js");
const limit = require("./src/_11ty/filters/limit.js");

module.exports = function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("blogposts", blogposts);

  // filters
  eleventyConfig.addFilter("dateISO", dates.dateISO);
  eleventyConfig.addFilter("dateFull", dates.dateFull);
  eleventyConfig.addFilter("dateFormat", dates.dateFormat);
  eleventyConfig.addFilter("dateFeed", dates.dateFeed);
  eleventyConfig.addFilter("limit", limit);

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight);

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
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
