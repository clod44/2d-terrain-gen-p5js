function genRigid() {

  noiseDetail(rigidoctaves, rigidfalloff);
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      //gen noise
      let heightValue = getNoise(x,y,rigidxoff,rigidyoff);
      //save noise
      rigidVals[x+y*width] = heightValue;
    }
  }

  //cap noiseVals
  for (let y = 0; y < height; y += res) {
    for (let x = 0; x < width; x += res) {
      //range -1 to 1
      let val = min(1,max(0,rigidVals[x+y*width]));
      val = 1-abs(map(val,0,1,-1,1));        
      rigidVals[x+y*width] = pow(val,rigidsharpness);                     
    }
  }
  print("rigidVals done");
}



