// sharp

const sharp = require('sharp')
const path = require('path')


let destination = ''
let dirImg = './src/assets/source/'

const getDest = (width, height) => {

    

    if(width <= 100) {
        destination = 'thumbnail'
    } else if (width <= 150){
        destination = 'small'
    } else if (width <= 400){
        destination = 'medium'
    } else if (width <= 1000){
        destination = 'tablet'
    } else if(width <= 1900) {
        destination = 'large'
    }
    sharp('./src/assets/source/block-cors.png')
    .resize({width, height})
    .toFile(`./src/assets/images/${destination}/halo-${destination}.jpg`
    )
}

getDest(100,100)
getDest(150,150)
getDest(400,400)
getDest(1000,1000)
getDest(1900,1900)