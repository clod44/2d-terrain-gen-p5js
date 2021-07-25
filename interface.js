


let zoom;
let zoomSlider;
let res;
let resSlider;

let noiseCheckbox;
let noiseoctaves;
let octavesSlider;
let noisefalloff;
let falloffSlider;
let noisealpha;
let noisealphaSlider;

let rigidCheckbox;
let rigidoctaves;
let rigidoctavesSlider;
let rigidfalloff;
let rigidfalloffSlider;
let rigidsharpness;
let rigidsharpnessSlider;
let rigidalpha;
let rigidalphaSlider;

let sealevel = 40;
let sealevelSlider;
let snowlevel = 100;
let snowlevelSlider;


function makeInterface() {
  //Sliders and texts
  let x = 10;
  let y = height + 10;
  let xoff = 0;
  let yoff = 10;
  let margin = 25;

  
  renderButton = createButton("Render");//render
  renderButton.position(x, y + yoff);
  renderButton.style("width", "260px");
  renderButton.mousePressed(render);
  //xoff += margin;
  yoff += margin;
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
  msg = createP("zoom(broken)");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;

  
  
  msg = createP("Perlin Settings:");//Perlin Settings
  msg.style("color", "#9b9b9b");
  msg.position(x, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  noiseCheckbox = createCheckbox("perlin noise");//noise enabled
  noiseCheckbox.position(x + xoff, y + yoff);
  noiseCheckbox.style("color", "#9b9b9b");
  //xoff += margin;
  yoff += margin;
  noiseoctavesSlider = createSlider(1, 8, 1); //noiseoctaves
  noiseoctavesSlider.position(x + xoff, y + yoff);
  noiseoctavesSlider.style("width", "260px");
  msg = createP("noiseoctaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  noisefalloffSlider = createSlider(1, 100, 50); //noisefalloff
  noisefalloffSlider.position(x + xoff, y + yoff);
  noisefalloffSlider.style("width", "260px");
  msg = createP("noisefalloff");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  noisealphaSlider = createSlider(0, 100, 100); //noisealpha
  noisealphaSlider.position(x + xoff, y + yoff);
  noisealphaSlider.style("width", "260px");
  msg = createP("noisealpha");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  
  
  
  msg = createP("Rigid noise Settings:");//rigid settings
  msg.style("color", "#9b9b9b");
  msg.position(x, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  rigidCheckbox = createCheckbox("rigid noise");//rigid enabled
  rigidCheckbox.position(x + xoff, y + yoff);
  rigidCheckbox.style("color", "#9b9b9b");
  //xoff += margin;
  yoff += margin;
  rigidoctavesSlider = createSlider(1, 8, 1); //rigidoctaves
  rigidoctavesSlider.position(x + xoff, y + yoff);
  rigidoctavesSlider.style("width", "260px");
  msg = createP("rigidoctaves");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  rigidfalloffSlider = createSlider(1, 100, 50); //rigidfalloff
  rigidfalloffSlider.position(x + xoff, y + yoff);
  rigidfalloffSlider.style("width", "260px");
  msg = createP("rigidfalloff");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  rigidsharpnessSlider = createSlider(1, 200,100); //rigidsharpness
  rigidsharpnessSlider.position(x + xoff, y + yoff);
  rigidsharpnessSlider.style("width", "260px");
  msg = createP("rigidsharpness");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  rigidalphaSlider = createSlider(0, 100, 100); //rigidalpha
  rigidalphaSlider.position(x + xoff, y + yoff);
  rigidalphaSlider.style("width", "260px");
  msg = createP("rigidalpha");
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
  snowlevelSlider = createSlider(1, 100, 100); //snowlevel
  snowlevelSlider.position(x + xoff, y + yoff);
  snowlevelSlider.style("width", "260px");
  msg = createP("snow level (sea+(0-100))");
  msg.style("color", "#9b9b9b");
  msg.position(260 + 20, y + yoff - 13);
  //xoff += margin;
  yoff += margin;
  /*
  applyPaletteButton = createButton("apply palette changes");//apply palette settings
  applyPaletteButton.position(x, y + yoff);
  applyPaletteButton.style("width", "260px");
  applyPaletteButton.mousePressed(createPalette);
  //xoff += margin;
  yoff += margin;*/
}
