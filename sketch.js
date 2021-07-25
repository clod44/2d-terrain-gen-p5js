
let noiseVals = [];

var zoom;
var res;
var octaves;
var falloff;
var sealevel = 40;
var snowlevel = 100;
var xOffset = 0;
var yOffset = 0;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  makeInterface();
  createPalette(sealevel, colorQuality);
}

function draw() {
  res = resSlider.value();
  zoom = zoomSlider.value() / 10000.0;

  octaves = octavesSlider.value();
  falloff = falloffSlider.value()/100.0;
  
  sealevel = sealevelSlider.value();
  snowlevel = snowlevelSlider.value();
  
  
  
  genNoise();
  render();

  
  //update pos offsets
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    xOffset += (mouseX - width / 2) / 1000.0;
    yOffset += (mouseY - height / 2) / 1000.0;
  }
}


