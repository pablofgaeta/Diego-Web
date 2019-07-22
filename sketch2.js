let century, chavez;
let nav = [];

function preload(){
	century = loadImage("MEDIA/century.jpg");
	chavez = loadImage("MEDIA/chavez.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight*3);
	century.resize(width/3,0);
	chavez.resize(width/3,0);
	nav = ["Home", "About", "Contact", "Work", "Text"]
	textAlign(CENTER, TOP);
	textSize(30)
}
  
function draw() {
	background(244,232,210);
	fill(122, 116, 105);
	var off = -1;
	for(var i = 0; i<5; i++){
		curr = nav[i]
		off += 2;
		text(curr, (off*width/10.0), width/20.0);
	}
	fill(122, 116, 105);
	rect(0,3*width/20.0,width, height/3.0)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


