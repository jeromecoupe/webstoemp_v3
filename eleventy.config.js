//plugins
import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";

// collections
import { blogposts } from "./src/_11ty/collections/blogposts.js";
import { projects } from "./src/_11ty/collections/projects.js";

// filters
import {
  dateFeed,
  dateFormat,
  dateFull,
  dateISO,
} from "./src/_11ty/filters/dates.js";
import { limit } from "./src/_11ty/filters/limit.js";
import { swapExt } from "./src/_11ty/filters/swap-extension.js";

/**
 * Export 11ty default config function
 * @param {*} eleventyConfig
 */
export default function (eleventyConfig) {
  // collections
  eleventyConfig.addCollection("blogposts", blogposts);
  eleventyConfig.addCollection("projects", projects);

  // filters
  eleventyConfig.addFilter("dateISO", dateISO);
  eleventyConfig.addFilter("dateFull", dateFull);
  eleventyConfig.addFilter("dateFormat", dateFormat);
  eleventyConfig.addFilter("dateFeed", dateFeed);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("swapExt", swapExt);

  // plugins
  eleventyConfig.addPlugin(syntaxHighlightPlugin);

  // ignores
  eleventyConfig.ignores.add("src/assets/**/*");
  eleventyConfig.watchIgnores.add("src/assets/**/*");

  // copy
  eleventyConfig.setServerPassthroughCopyBehavior("copy");
  eleventyConfig.addPassthroughCopy({ "./src/_static/**/*": "./" });
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  // server config
  eleventyConfig.setServerOptions({
    port: 3000,
    watch: ["./dist/assets/js/**/*", "./dist/assets/css/**/*"],
  });
}

// override default config object
export const config = {
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
