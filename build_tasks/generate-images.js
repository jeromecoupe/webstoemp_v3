const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");
const sharp = require("sharp");

const config = {
  allowedFormats: ["jpg", "jpeg", "webp", "avif", "png", "gif"],
};

const transforms = [
  {
    // 1024x576 thumbnails for blogposts
    src: "./src/assets/img/blogposts/",
    dist: "./dist/assets/img/blogposts/1024x576/",
    formats: ["jpg"],
    options: {
      width: 1024,
      height: 576,
      fit: "cover",
    },
  },
  {
    // 800x600 thumbnails for blogposts
    src: "./src/assets/img/blogposts/",
    dist: "./dist/assets/img/blogposts/800x600/",
    formats: ["jpg"],
    options: {
      width: 800,
      height: 600,
      fit: "cover",
    },
  },
  {
    // 600x450 thumbnails for blogposts
    src: "./src/assets/img/blogposts/",
    dist: "./dist/assets/img/blogposts/600x450/",
    formats: ["jpg"],
    options: {
      width: 600,
      height: 450,
      fit: "cover",
    },
  },
  {
    // 600x600 thumbnails for blogposts
    src: "./src/assets/img/blogposts/",
    dist: "./dist/assets/img/blogposts/600x600/",
    formats: ["jpg", "webp"],
    options: {
      width: 600,
      height: 600,
      fit: "cover",
    },
  },
];

/**
 * Generate images based on transforms object
 */
async function init() {
  // array for promises
  let sharpPromises = [];

  // loop through transforms
  transforms.forEach((transform) => {
    let inputDir = transform.src;
    let outputDir = transform.dist;
    let formats = transform.formats;
    let options = transform.options;

    // check formats is array
    if (!Array.isArray(formats)) {
      throw new Error(`"formats" in transforms should be an array`);
    }

    // check formats are of allowed types
    formats.forEach((el) => {
      if (!config.allowedFormats.includes(el)) {
        throw new Error(
          `Unknown format: "${el}". Allowed formats are: ${config.allowedFormats.toString()}`
        );
      }
    });

    // Get image files in input directory
    let imagesGlob = path.join(
      inputDir,
      `*.{${config.allowedFormats.toString()}}`
    );
    let imagesFiles = globSync(imagesGlob);

    // Create output dir if does not exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // loop through all images and create Sharp promises
    imagesFiles.forEach((file) => {
      // Create resized images for each specified formats
      formats.forEach((format) => {
        // get input image name
        let inputFileName = path.parse(file).name;

        // build image output path
        let outputPath = path.join(outputDir, `${inputFileName}.${format}`);

        // bail out if image output path exists
        if (fs.existsSync(outputPath)) return;

        // create sharp promises
        try {
          // resize promise
          let sharpPromise = sharp(file).resize(options).toFile(outputPath);

          // push promise to array
          sharpPromises.push(sharpPromise);
        } catch (err) {
          throw new Error(err);
        }
      });
    });
  });

  // resolve all promises in parallel
  try {
    await Promise.all(sharpPromises);
    console.log(`${sharpPromises.length} images resized`);
  } catch (err) {
    throw new Error(err);
  }
}

module.export = init();
