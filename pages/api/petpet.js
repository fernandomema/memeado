//const {canvas} = require("canvas-aws-prebuilt");
import path from 'path'
const { createCanvas, loadImage, registerFont } = require('canvas')

const GIFEncoder = require('gifencoder')

const FRAMES = 10
const RESOLUTION = 128
const DELAY = 20

const petGifCache = []

export default async (req, res) => {
  var imageUrl = req.body?.image || req.query?.image || '';
  const encoder = new GIFEncoder(RESOLUTION, RESOLUTION)

    encoder.start()
    encoder.setRepeat(0)
    encoder.setDelay(DELAY)

    const canvas = createCanvas(RESOLUTION, RESOLUTION)
    const ctx = canvas.getContext('2d')
    const avatar = await loadImage(imageUrl)

    for (let i = 0; i < FRAMES; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const j = i < FRAMES / 2 ? i : FRAMES - i

        const width = 0.8 + j * 0.02
        const height = 0.8 - j * 0.05
        const offsetX = (1 - width) * 0.5 + 0.1
        const offsetY = (1 - height) - 0.08

        if (i == petGifCache.length) petGifCache.push(await loadImage(path.resolve(`./public/assets/img/templates/petpet/pet${i}.gif`)))

        ctx.drawImage(avatar, RESOLUTION * offsetX, RESOLUTION * offsetY, RESOLUTION * width, RESOLUTION * height)
        ctx.drawImage(petGifCache[i], 0, 0, RESOLUTION, RESOLUTION)
        encoder.addFrame(ctx)
    }

  encoder.finish()
  res.statusCode = 200
  //res.json({ name: 'John Doe' })
  res.writeHead(200, { 'Content-Type': 'image/gif' });
  res.end(encoder.out.getData(), 'binary');
}

function splitter(str, l){
  var strs = [];
  while(str.length > l){
      var pos = str.substring(0, l).lastIndexOf(' ');
      pos = pos <= 0 ? l : pos;
      strs.push(str.substring(0, pos));
      var i = str.indexOf(' ', pos)+1;
      if(i < pos || i > pos+l)
          i = pos;
      str = str.substring(i);
  }
  strs.push(str);
  return strs;
}