const now = new Date();

module.exports = function (collectionApi) {
  return collectionApi
    .getFilteredByGlob("./src/content/blogposts/*.md")
    .filter((item) => item.data.draft !== true && item.date <= now)
    .reverse();
};
