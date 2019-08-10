var cols, rows;
var scl = 30;
var w;
var h;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = width+300;
  h = height+500;
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  clear();
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  background(color(0, 0, 0, 0));
  translate(0, 50);
  rotateX(4*PI/9);
  translate(-w/2, -h/2);
  // stroke('rgb(0,0,255)')
  strokeWeight(.5);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    fill(y,0,y);
    for (var x = 0; x < cols; x++) {

      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  w = width+300;
  h = height+500;
  cols = w / scl;
  rows = h/ scl;
}