function genNoise() {
  noiseVals = [];
  //make noise map
  let minVal = 0.5;
  let maxVal = 0.5;
  noiseDetail(octaves, falloff);
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      //gen noise
      let heightValue = getNoise(x,y);
      //pick highest and lowest values for normalizing
      minVal = min(heightValue, minVal);
      maxVal = max(heightValue, maxVal);
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
}



function getNoise(x, y) {
  translate(width / 2, height / 2);
  let sampleX = zoom * (x + xOffset - width / 2) + width / 2 + xOffset;
  let sampleY = zoom * (y + yOffset - height / 2) + height / 2 + yOffset;
  translate(-width / 2, -height / 2);
  
  return noise(sampleX, sampleY);
}
