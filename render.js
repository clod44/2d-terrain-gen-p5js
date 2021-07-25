

function render(){
  loadPixels(); 
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
     
      
      let heightValue = noiseVals[x+y*width];
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