function projects(collectionApi) {
  return collectionApi
    .getFilteredByGlob("./src/content/projects/*.md")
    .filter((item) => item.data.draft !== true)
    .reverse();
}

export { projects };
