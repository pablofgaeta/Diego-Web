let nav = [];
let radius;
let circleSpeed = 2;
let pages = ["index", "contact", "perf", "bio", "insp", "contact", "games"];
let sounds = [];

function preload(){
    for(var i = 0; i<7; i++){
        sounds[i]= loadSound("./sounds/" + (i+1) + ".wav");
    }
    
    sounds[7] = loadSound("./sounds/M1.wav");
    sounds[8] = loadSound("./sounds/M2.wav");
    sounds[9] = loadSound("./sounds/M3.wav");
    sounds[10] = loadSound("./sounds/M4.wav");
    sounds[11] = loadSound("./sounds/M4b.wav");
    sounds[12] = loadSound("./sounds/M5.wav");
    sounds[13] = loadSound("./sounds/M6.wav");
    sounds[14] = loadSound("./sounds/M7b.wav");
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    
    radius = width > height ? (height / 10) : (width / 10);
    for(var i = 0; i<6;i++){
        nav[i] = new circleNav(createVector((i%3+1)*width/4.0,(floor(i/3.0)*height/3)+height/3),createVector(random(-1*circleSpeed,circleSpeed), random(-1*circleSpeed,circleSpeed)), pages[i], sounds[i]);
    }
    nav[6] = new circleNav(createVector(width/6,height/10),createVector(random(-1*circleSpeed,circleSpeed), random(-1*circleSpeed,circleSpeed)), pages[6], sounds[i]);
}

function draw() {
    clear();
    noStroke();
    for(var i = 0; i<7;i++){
        nav[i].checkBoundaries(nav,i);
        nav[i].move();
        nav[i].show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    radius = width > height ? (height / 10) : (width / 10);
    for(var i = 0; i<7;i++){
        nav[i].r = radius;
    }
    
}

function keyPressed(){
    for(var i = 49; i<57; i++){
        if(keyCode== (""+i)){
            sounds[i-42].play();
        }
    }
}

//On mouse press, link to new page
function mousePressed(){
    for(var i = 0; i<7;i++){
        if(nav[i].checkHover(nav[i])){
            window.top.location.href = "./" + nav[i].text + ".html";
        }
    }
}

