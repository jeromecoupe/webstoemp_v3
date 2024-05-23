import path from "node:path";

/**
 * Swap file extension
 *
 * @param {String} filename - filename
 * @param {String} extension - target extension
 * @returns {String} - filename with swapped extension
 */
function swapExt(filename, extension) {
  const newExt = extension.charAt(0) === "." ? extension : `.${extension}`;
  const oldExt = path.extname(filename);
  return filename.replace(oldExt, newExt);
}

export { swapExt };
