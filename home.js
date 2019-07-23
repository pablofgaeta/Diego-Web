let nav = [];
const radius = 50;
let circleSpeed = 1;

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
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//On mouse press, link to new page
function mousePressed(){
    for(var i = 0; i<6;i++){
        if(nav[i].checkHover(nav[i])){
            // window.open("https://www.youtube.com", "_self");
        }
    }
}

