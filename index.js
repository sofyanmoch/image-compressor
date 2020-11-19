// imagemin
// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-jpegtran');
// const imageminPngquant = require('imagemin-pngquant');

// (async () => {
// 	const files = await imagemin(['images/3.{jpg,png}'], {
// 		destination: 'build/images',
// 		plugins: [
// 			imageminJpegtran(),
// 			imageminPngquant({
// 				quality: [0.0,0.1]
// 			})
// 		]
// 	});

// 	console.log(files);
// 	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
// })();

// sharp
const sharp = require('sharp')

sharp('./images/original/3.jpg')
    .resize(1900, 1900)
    .toFile('./images/large/out_1.jpg')
