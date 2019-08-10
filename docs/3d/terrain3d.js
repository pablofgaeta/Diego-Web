var cols, rows;
var scl = 50;
var w;
var h;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = width+300;
  h = height+300;
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  clear();
  flying -= 0.01;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 25);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
  background(color(0, 0, 0, 0));
  // translate(0, 10);
  rotateX(4*PI/9);
  translate(-w/2, -h/2);
  strokeWeight(.5);
  for (var y = int(rows/3); y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    var yoff = map(y,int(rows/3), rows-1, 0,100);
    fill(yoff,0,yoff);
    
    for (var x = 0; x < cols; x++) {
      // var filter = map(terrain[x][y-1], 0,100,0,40);
      // var filter2 = map(terrain[x][y], 0,100,0,40);
      // var filter3 = map(terrain[x][y+1], 0,100,0,100);

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
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain.push(0); //specify a default value for now
    }
  }
}