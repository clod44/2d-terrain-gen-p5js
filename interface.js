





let zoomSlider;
let resSlider;

let octavesSlider;
let falloffSlider;

let sealevelSlider;
let snowlevelSlider;



function makeInterface() {
  //Sliders and texts
  let x = 10;
  let y = height + 10;
  let xoff = 0;
  let yoff = 10;
  let margin = 25;

  resSlider = createSlider(1, 20, 10); //resolution
  resSlider.position(x + xoff, y + yoff);
  resSlider.style("width", "260px");
  msg = createP("resolution");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  zoomSlider = createSlider(1, 200, 100); //zoom
  zoomSlider.position(x + xoff, y + yoff);
  zoomSlider.style("width", "260px");
  msg = createP("zoom");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  msg = createP("Perlin Settings:");//Perlin Settings
  msg.style("color", "#9b9b9b");
  msg.position(x, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  octavesSlider = createSlider(1, 5, 1); //octaves
  octavesSlider.position(x + xoff, y + yoff);
  octavesSlider.style("width", "260px");
  msg = createP("octaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  falloffSlider = createSlider(1, 100, 50); //falloff
  falloffSlider.position(x + xoff, y + yoff);
  falloffSlider.style("width", "260px");
  msg = createP("falloff");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  msg = createP("Palette settings:");//palette settings
  msg.style("color", "#9b9b9b");
  msg.position(x, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  sealevelSlider = createSlider(0, 100, 40); //sealevel
  sealevelSlider.position(x + xoff, y + yoff);
  sealevelSlider.style("width", "260px");
  msg = createP("sea level (0-100)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  snowlevelSlider = createSlider(1, 200, 100); //sealevel
  snowlevelSlider.position(x + xoff, y + yoff);
  snowlevelSlider.style("width", "260px");
  msg = createP("snow level (0-200)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  applyPaletteButton = createButton("apply palette changes");//apply palette settings
  applyPaletteButton.position(x, y + yoff);
  applyPaletteButton.style("width", "260px");
  applyPaletteButton.mousePressed(createPalette);
  //xoff += margin;
  yoff += margin;
}
