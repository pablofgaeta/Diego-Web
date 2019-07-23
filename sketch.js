let nav = [];
const radius = 50;
let circleSpeed = 2;
const notes = ["C3", "D2","E3", "F2","G3","A2", "B2","C1"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for(var i = 0; i<6;i++){
        nav[i] = new circleNav(createVector((i%3+1)*width/4.0,(floor(i/3.0)*height/3)+height/3),createVector(random(-1*circleSpeed,circleSpeed), random(-1*circleSpeed,circleSpeed)), i);
        nav[i].synth.start();
    }
}

function draw() {
    background(244,232,210);
    noStroke();
    for(var i = 0; i<6;i++){
        nav[i].checkBoundaries(nav,i);
        nav[i].show();
    }
    if(!focused){
        for(var i = 0; i < 6; i++){
            nav[i].synth.amp(0);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

