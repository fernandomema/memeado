//const {canvas} = require("canvas-aws-prebuilt");
import path from 'path'
const { createCanvas, loadImage, registerFont } = require('canvas')

export default async (req, res) => {
  const resolved = path.resolve('./fonts/impact.ttf')
  registerFont(resolved, { family: 'Impact' })
  var text1 = splitter(req.body?.text1 || req.query?.text1 || '', 32);
  var text2 = splitter(req.body?.text2 || req.query?.text2 || '', 32);
  var text3 = splitter(req.body?.text3 || req.query?.text3 || '', 32);
  var width = 563;
  var height = 548;
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  var template = await loadImage(path.resolve(`./public/assets/img/templates/fakeGoogleAutocomplete.png`));
  ctx.drawImage(template, 0, 0);
  ctx.font = '25px Impact';
  ctx.fillText(text1[0] || '', 25, 255);

  ctx.fillText(text2[0] || '', 25, 320);

  ctx.fillText(text3[0] || '', 25, 380);
  
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