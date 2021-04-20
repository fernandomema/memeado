//const {canvas} = require("canvas-aws-prebuilt");
import path from 'path'
const { createCanvas, loadImage, registerFont } = require('canvas')

export default async (req, res) => {
  const resolved = path.resolve('./fonts/impact.ttf')
  registerFont(resolved, { family: 'Impact' })
  var text = splitter(req.body?.text || req.query?.text || '', 16);
  var width = 634;
  var height = 741;
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  var template = await loadImage('https://i.pinimg.com/736x/25/2a/04/252a045199e33164a8b7577fc001851a.jpg');
  ctx.drawImage(template, 0, 0);
  ctx.font = '25px Impact';
  ctx.fillText(text[0] || '', 61, 100);
  ctx.fillText(text[1] || '', 61, 125);
  ctx.fillText(text[2] || '', 61, 150);
  ctx.fillText(text[3] || '', 61, 175);
  ctx.fillText(text[4] || '', 61, 200);
  ctx.fillText(text[5] || '', 61, 225);
  ctx.fillText(text[6] || '', 61, 250);
  ctx.fillText(text[7] || '', 61, 275);
  ctx.fillText(text[8] || '', 61, 300);
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
