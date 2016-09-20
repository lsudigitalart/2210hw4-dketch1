// Dominique Ketchens © 2016 hw4 //

var x = 100;
var easing = 200
  y = 100;
    angle1 = 0.0;
    segLength = 0;

function setup() {

// Background and Text //

noCursor()
createCanvas (600, 300);
strokeWeight(20.0);
stroke(255, 100);
}
function draw() {
background (97, 243, 86);
textSize(30)
textAlign(CENTER)
fill(225)
text("score", 25, 60)
noStroke();
fill(184, 245, 255);
rect(0, 0, 600, 150);
fill(128,128,128);
rect(0, 182 ,600, 50);

// Pink Ball //

  dx = mouseX - x;
  dy = mouseY - y;
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  var targetX = mouseX
  x += (targetX - x) * easing
  segment(x, y, angle1);
  fill(255, 153, 204);
  ellipse(x, y, 40, 40);
}
function segment(x, y, a) {
push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();

// Objects //
  fill(255,255,0);
  ellipse (520, 138, 120, 120);
  fill(235,235,0);
    ellipse(390, 144, 100, 100);
      fill(225,225,0);
    ellipse(280, 151, 85, 85);
      fill(215,215,0);
    ellipse(190, 160, 60, 60);
    fill(205,205,0);
  ellipse(120, 165, 45, 45);
  fill(195,195,0);
ellipse(70, 170, 30, 30);
    if (mouseIsPressed == true) {
      fill(0)
    }
}
