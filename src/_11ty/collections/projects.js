function projects(collectionApi) {
  return collectionApi
    .getFilteredByGlob("./src/content/projects/*.md")
    .filter((item) => item.data.draft !== true)
    .filter((item) => item.data.archived !== true)
    .reverse();
}

export { projects };
