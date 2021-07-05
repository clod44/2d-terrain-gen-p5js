



var zoom;
var res;
var octaves;
var layerA;
var layerF;
var sealevel = 40;
var snowlevel = 100;
var xOffset = 0;
var yOffset = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  makeInterface();
  createPalette(sealevel, colorQuality);
}

function draw() {
  res = resSlider.value();
  zoom = zoomSlider.value() / 10000.0;
  octaves = octavesSlider.value();
  layerA = layerASlider.value() / 100.0;
  layerF = layerFSlider.value() / 100.0;
  sealevel = sealevelSlider.value();
  snowlevel = snowlevelSlider.value();
  
  
  background(0, 255, 0);
  loadPixels(); //MAIN LOOP
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      var perlinValue = 0;
      var tlayerA = 1.0;
      var tlayerF = 1.0;

      for (let k = 0; k < octaves; k++) {
        // OCTAVES
        //Octaves
        perlinValue += (getNoise(x, y, zoom, tlayerF) * 2 - 1) * tlayerA;
        tlayerA *= layerA;
        tlayerF *= layerF;
      }
      perlinValue = int(
        max(0, min(colorQuality, map(perlinValue, -1, 1, 0, colorQuality)))
      );
      let perlinColor = palette[perlinValue];

      for (let i = 0; i < res; i++) {
        // filling Resolution holes
        for (let j = 0; j < res; j++) {
          set(x + j, y + i, perlinColor);
        }
      }
    }
  }
  updatePixels();

  //update pos offsets
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    xOffset += (mouseX - width / 2) / 1000.0;
    yOffset += (mouseY - height / 2) / 1000.0;
  }
}

function getNoise(x, y, zoom, tlayerF) {
  translate(width / 2, height / 2);
  let sampleX = zoom * (x + xOffset - width / 2) + width / 2 + xOffset;
  let sampleY = zoom * (y + yOffset - height / 2) + height / 2 + yOffset;
  translate(-width / 2, -height / 2);

  var tempcol = noise(sampleX * tlayerF, sampleY * tlayerF);
  return tempcol;
}





