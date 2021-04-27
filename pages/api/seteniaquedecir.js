//const {canvas} = require("canvas-aws-prebuilt");
import path from 'path'
import drawText from 'node-canvas-text'
import opentype from 'opentype.js'
const { createCanvas, loadImage, registerFont } = require('canvas')

export default async (req, res) => {
  const resolved = path.resolve('./fonts/impact.ttf')
  registerFont(resolved, { family: 'Impact' })
  let Impact = opentype.loadSync(resolved);
  var text = splitter(req.body?.text || req.query?.text || '', 56);
  var width = 720;
  var height = 709;
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  var template = await loadImage(path.resolve(`./public/assets/img/templates/seTeniaQueDecir.png`));
  ctx.drawImage(template, 0, 0);
  // ctx.font = '25px Impact';
  // ctx.fillText(text[0] || '', 10, 30);
  // ctx.fillText(text[1] || '', 10, 55);
  // ctx.fillText(text[2] || '', 10, 80);
  // ctx.fillText(text[3] || '', 10, 105);
  // ctx.fillText(text[4] || '', 10, 130);
  // ctx.fillText(text[5] || '', 10, 155);
  let headerRect = {
    x: 0,
    y: 0,
    width: canvas.width,
    height: 190 };
    drawText(ctx, req.body?.text || req.query?.text || '', Impact, headerRect,
      {
          minSize: 5,
          maxSize: 100,
          vAlign: 'center',
          hAlign: 'center',
          fitMethod: 'box',
          drawRect: false} );
  res.statusCode = 200
  //res.json({ name: 'John Doe' })
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(canvas.toBuffer(), 'binary');
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
