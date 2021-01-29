var hr, mn, sc;
var hra, mna, sca;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200, 200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  sca = map(sc, 0, 60, 0, 360);
  mna = map(mn, 0, 60, 0, 360);
  hra = map(hr%12,0,12,0,360);

  push();
  rotate(sca);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mna);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hra);
  stroke("orange");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

stroke("yellow");
point(0,0);
strokeWeight(10);
noFill();
stroke("blue");
arc(0,0,300,300,0,sca);
stroke("green");
arc(0,0,280,280,0,mna);
stroke("orange");
arc(0,0,260,260,0,hra);
  drawSprites();
}