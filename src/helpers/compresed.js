const fs = require('fs')
const path = require('path')
const { ImageResize } = require('./resize')

const CompressImage = () => {
  const dirpath = dirPathDefaultImages()

  fs.readdirSync(dirpath).forEach(file => {
    const findFilePath = path.join(dirpath, file);

    const nameAndExtThumb = combineFileName(file, 100)
    const nameAndExtSmall = combineFileName(file, 150)
    const nameAndExtMedium = combineFileName(file, 400)
    const nameAndExtTablet = combineFileName(file, 1000)
    const nameAndExtLarge = combineFileName(file, 1900) 
    
    // PATH DESTINATION
    const PathDesThumb = PathDestination(100)
    const PathDesSmall = PathDestination(150)
    const PathDesMedium = PathDestination(400)
    const PathDesTablet = PathDestination(1000)
    const PathDesLarge = PathDestination(1900)

    ImageResize(findFilePath, PathDesThumb, nameAndExtThumb, 100, 100, 95)
    ImageResize(findFilePath, PathDesSmall, nameAndExtSmall, 150, 150, 100)
    ImageResize(findFilePath, PathDesMedium, nameAndExtMedium, 400, 400, 100)
    ImageResize(findFilePath, PathDesTablet, nameAndExtTablet, 1000, 1000, 100)
    ImageResize(findFilePath, PathDesLarge, nameAndExtLarge, 1900, 1900, 100)
  })
}

  const dirPathDefaultImages = (tmpDir = '/assets/tmp/downloads') => {
    const dir = __dirname
    const datas = dir.split('/helpers')
    return datas[0] + tmpDir
  }

  const combineFileName = (nameFile, size ) => {
    const arrayName = nameFile.split('.')
    let type = 'default'
    size <= 100
      ? (type = 'thumbnail')
      : size <= 150
      ? (type = 'small')
      : size <= 400
      ? (type = 'medium')
      : size <= 1000
      ? (type = 'tablet')
      : size <= 1900
      ? (type = 'large')
      : null;

      const fullName = arrayName[0] + '-' + type +'.' + arrayName[1]
      console.log('created ' + fullName)
    return fullName
  }

  const PathDestination = (size) => {
    let Path = "assets/tmp/spam/"
    size <= 100
      ? (Path = dirPathDefaultImages('/assets/images/thumbnail/'))
      : size <= 150
      ? (Path = dirPathDefaultImages('/assets/image/small/'))
      : size <= 400
      ? (Path = dirPathDefaultImages('/assets/images/medium/'))
      : size <= 1000
      ? (Path = dirPathDefaultImages('/assets/images/tablet'))
      : size <= 1900
      ? (Path = dirPathDefaultImages('/assets/images/large'))
      : null
    return Path;
  }

  const deleteAllFile = (dirpath = dirPathDefaultImages()) => {
    fs.readdirSync(dirpath).forEach((file) => {
      let findFile = path.join(dirpath, file)
      fs.unlinkSync(findFile)
    })
  }

  module.exports = {
    CompressImage,
    deleteAllFile,
  }