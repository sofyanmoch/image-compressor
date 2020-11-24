// sharp
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const compresImg = () => {
  let destinationName = "";
  let imgPathDes = "";
  let dirImg = "./src/assets/source/";
  const loopDir = () => {
    let files = [];
    fs.readdir(dirImg, function (err, file) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      file.forEach((f, index) => {
        files.push(f);
      });
      const getDest = (width, height) => {
        files.map((e, index) => {
          if (width <= 100) {
            destinationName = "thumbnail";
          } else if (width <= 150) {
            destinationName = "small";
          } else if (width <= 400) {
            destinationName = "medium";
          } else if (width <= 1000) {
            destinationName = "tablet";
          } else if (width <= 1900) {
            destinationName = "large";
          }

          imgPathDes = `${destinationName}${e}`

          console.log(imgPathDes);
          sharp(`./src/assets/source/${e}`)
            .resize({ width, height })
            .toFile(
              `./src/assets/images/${destinationName}/${destinationName}-${e}`
            );
        });
      };
      getDest(100, 100);
      getDest(150, 150);
      getDest(400, 400);
      getDest(1000, 1000);
      getDest(1900, 1900);
    });
    return files;
  };
  loopDir();
};
compresImg();