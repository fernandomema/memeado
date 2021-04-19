//const {canvas} = require("canvas-aws-prebuilt");
import path from 'path'
const { createCanvas, loadImage, registerFont } = require('canvas')

export default async (req, res) => {
  const resolved = path.resolve('./fonts/impact.ttf')
  registerFont(resolved, { family: 'Impact' })
  var text1 = splitter(req.body?.text1 || req.query?.text1 || '', 16);
  var text2 = splitter(req.body?.text2 || req.query?.text2 || '', 16);
  var width = 540;
  var height = 485;
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  var template = await loadImage('https://i.pinimg.com/originals/d0/f3/49/d0f34924587418676f666ff11b7ef5f8.jpg');
  ctx.drawImage(template, 0, 0);
  ctx.font = '25px Impact';
  ctx.fillText(text1[0] || '', 300, 25);
  ctx.fillText(text1[1] || '', 300, 50);
  ctx.fillText(text1[2] || '', 300, 75);
  ctx.fillText(text1[3] || '', 300, 100);
  ctx.fillText(text1[4] || '', 300, 125);
  ctx.fillText(text1[5] || '', 300, 150);
  ctx.fillText(text1[6] || '', 300, 175);
  ctx.fillText(text1[7] || '', 300, 200);

  ctx.fillText(text2[0] || '', 300, 275);
  ctx.fillText(text2[1] || '', 300, 300);
  ctx.fillText(text2[2] || '', 300, 325);
  ctx.fillText(text2[3] || '', 300, 350);
  ctx.fillText(text2[4] || '', 300, 375);
  ctx.fillText(text2[5] || '', 300, 400);
  ctx.fillText(text2[6] || '', 300, 425);
  ctx.fillText(text2[7] || '', 300, 450);
  
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