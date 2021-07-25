function genNoise() {

  noiseDetail(noiseoctaves, noisefalloff);
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      //gen noise
      let heightValue = getNoise(x,y,noisexoff,noiseyoff);
      //save noise
      noiseVals[x+y*width] = heightValue;
    }
  }

  //cap noiseVals
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      noiseVals[x+y*width] = min(1,max(0,noiseVals[x+y*width]));                     
    }
  }
  print("noiseVals done");
}


//also used in genRigid
function getNoise(x, y,xoff,yoff) {
  //translate(width / 2, height / 2);
  let sampleX = zoom * (x + xoff - width / 2) + width / 2 + xoff;
  let sampleY = zoom * (y + yoff - height / 2) + height / 2 + yoff;
  //translate(-width / 2, -height / 2);
  
  return noise(sampleX, sampleY);
}
