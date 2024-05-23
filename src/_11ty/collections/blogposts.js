const now = new Date();

function blogposts(collectionApi) {
  return collectionApi
    .getFilteredByGlob("./src/content/blogposts/*.md")
    .filter((item) => item.data.draft !== true && item.date <= now)
    .reverse();
}

export { blogposts };
