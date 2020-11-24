// sharp

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const compresImg = () => {
  let destination = "";
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
        files.map((e) => {
          if (width <= 100) {
            destination = "thumbnail";
          } else if (width <= 150) {
            destination = "small";
          } else if (width <= 400) {
            destination = "medium";
          } else if (width <= 1000) {
            destination = "tablet";
          } else if (width <= 1900) {
            destination = "large";
          }
          sharp(`./src/assets/source/${e}`)
            .resize({ width, height })
            .toFile(
              `./src/assets/images/${destination}/${destination}-${e}`
            );
        });

        //
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
