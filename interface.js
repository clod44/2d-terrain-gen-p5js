





var zoomSlider;
var resSlider;
var octavesSlider;
var layerASlider;
var layerFSlider;
var sealevelSlider;
var snowlevelSlider;



function makeInterface() {
  //Sliders and texts
  var x = 10;
  var y = height + 10;
  var xoff = 0;
  var yoff = 10;
  var margin = 25;

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

  octavesSlider = createSlider(1, 5, 1); //octaves
  octavesSlider.position(x + xoff, y + yoff);
  octavesSlider.style("width", "260px");
  msg = createP("octaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  layerASlider = createSlider(1, 100, 50); //layerA
  layerASlider.position(x + xoff, y + yoff);
  layerASlider.style("width", "260px");
  msg = createP("LayerA (alpha multiplier)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  layerFSlider = createSlider(100, 500, 200); //layerF
  layerFSlider.position(x + xoff, y + yoff);
  layerFSlider.style("width", "260px");
  msg = createP("LayerF (frequency multiplier)");
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
