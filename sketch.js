
let noiseVals = [];
let rigidVals = [];

let rigidxoff;
let rigidyoff;
let noisexoff;
let noiseyoff;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  makeInterface();
  createPalette(sealevel, colorQuality);
  initVals();
  
  rigidxoff = random(1000.00);
  rigidyoff = random(1000.00);
  noisexoff = random(1000.00);
  noiseyoff = random(1000.00);
  print(noisexoff,noiseyoff,rigidxoff,rigidyoff);
}

function initVals(){
  for(let i = 0; i<width*height; i++){
    noiseVals[i] = 0;
    rigidVals[i] = 0;
  }
}
