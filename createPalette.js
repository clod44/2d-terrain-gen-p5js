var palette = [];
var colorQuality = 3000;
var col = [];
var perlinValue = 0.0;
var low = 0;
var high = 0;
var lerpVal = 0;
var colLength = 0;
var perlinValueINT;




function createPalette() {
  //one time computing color palette
  palette = [];
  
  col = [
    [color(0, 74, 144), map(0.0, 0, 1, sealevel, snowlevel)], //sea
    [color(0, 205, 223), map(0.1, 0, 1, sealevel, snowlevel)], //lake
    [color(241, 255, 144), map(0.2, 0, 1, sealevel, snowlevel)], //beach
    [color(76, 214, 54), map(0.3, 0, 1, sealevel, snowlevel)], //grass
    [color(34, 169, 66), map(0.4, 0, 1, sealevel, snowlevel)], //grass2
    [color(18, 82, 29), map(0.5, 0, 1, sealevel, snowlevel)], //forest
    [color(20, 82, 42), map(0.6, 0, 1, sealevel, snowlevel)], //forest2
    [color(79, 73, 31), map(0.7, 0, 1, sealevel, snowlevel)], //dirt
    [color(117, 147, 146), map(0.8, 0, 1, sealevel, snowlevel)], //rock
    [color(250, 255, 250), map(0.9, 0, 1, sealevel, snowlevel)], //snow
  ];
  colLength = col.length;
  
  for (var i = 0; i < colorQuality + 1; i++) {  
  perlinValueINT = perlinValue*100;
    for (var j = 1; j < colLength; j++) {
      
      if (col[j][1] > perlinValueINT) {
        low = col[j - 1][0];
        high = col[j][0];
        lerpVal = map(perlinValueINT, col[j - 1][1], col[j][1], 0,1);
        j=colLength;
      }
      
    }

    palette[i] = lerpColor(low, high, lerpVal);
    perlinValue = float(i)/colorQuality;
  }
  //print(palette.length,random(100));
}

/*
color(0, 74, 144); //deep sea
color(0, 205, 223); //lake
color(241, 255, 144); //beach
color(76, 214, 54); //grass
color(34, 169, 66); //grass2
color(18, 82, 29); //forest
color(20, 82, 42); //forest2
color(79, 73, 31); //dirt
color(117, 147, 146); //rock
color(250, 255, 250); //snow
*/