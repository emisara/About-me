//The setup function only happens once
var cherry= 0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(239, 223, 250 ); //an RGB color for the canvas' background
  //circle
  stroke(70, 12, 113 ) // an RGB color for the circle's border
  fill(208, 163, 241 ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,112, cherry,cherry); // center of canvas, 
  
  fill(106, 25, 139);
  rect(325,400,100,80);
  fill(159, 55, 182);
triangle(cherry, 75, 58, 20, 90, 90);
strokeWeight(2);
fill(162, 119, 179);
textSize(90);
textFont("Garamond");
textSize(70);
text('Purple', 22, 250);
ellipse(random(width), random(height), 10,10);
}

function mousePressed () {

if (cherry >= 255)
{cherry=0;

}else {
cherry= cherry+10;
}
}