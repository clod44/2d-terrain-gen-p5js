

function render(){
  res = resSlider.value();
  zoom = zoomSlider.value() / 10000.0;

  noiseoctaves = noiseoctavesSlider.value();
  noisefalloff = noisefalloffSlider.value()/100.0;
  noisealpha = noisealphaSlider.value()/100.0;
  
  rigidoctaves = rigidoctavesSlider.value();
  rigidfalloff = rigidfalloffSlider.value()/100.0;
  rigidsharpness = rigidsharpnessSlider.value()/100.0;
  rigidalpha = rigidalphaSlider.value()/100.0;
  
  sealevel = sealevelSlider.value();
  snowlevel = snowlevelSlider.value();
  createPalette();//this can be computed once for same results.
  
  initVals();
  if(noiseCheckbox.checked()){
    genNoise();   
  }if(rigidCheckbox.checked()){
    genRigid();   
  }
  
  updateCanvas();
}


function updateCanvas(){
  background(0,255,0);
  loadPixels(); 
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      
      let index = x+y*width;
      let heightValue = min(1,max(0,
                        (noisealpha*noiseVals[index]) + 
                        (rigidalpha*rigidVals[index])));
      let heightColor = palette[floor(heightValue*colorQuality)];
      
      for (let i = 0; i < res; i++) {// filling Resolution holes
        for (let j = 0; j < res; j++) {
          set(x + j, y + i, heightColor);
        }
      }
      
    }
  }
  updatePixels();
}