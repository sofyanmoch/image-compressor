const sharp = require("sharp");

const ImageResize = async (
  dirImages,
  dirDestination,
  nameAndExt,
  width,
  height,
  quality
) => {
  sharp(dirImages)
    .resize({ width, height })
    .jpeg({ quality })
    .toFile(dirDestination + nameAndExt, (err) => {
      console.log(`Gagal resize ${err}`);
    });
};

module.exports = {
  ImageResize,
};
