//pics of DG and paragraph
let pics = [];

//bio
let bio = "";

let head;
let ul,ur, dl, dr;

class Title{
    constructor(head){
        this.title = head 
        this.w     = width/2;
        this.h     = height/12;
    }

    newDim(w, h){
        this.w     = w/2;
        this.h     = h/12;
    }
}

function setup() {
    createCanvas(windowWidth*3, windowHeight*3);
    noStroke();
    head = new Title("bio");
    // ul = loadImage("universe ul.jpg");
    // ur = loadImage("universe ur.jpg");
    // dl = loadImage("universe dl.jpg");
    // dr = loadImage("universe dr.jpg");
}

function draw() {
    background(244,232,210);
    
    // drawBg();
    drawHead();
}

function drawBg(){
    push();
    fill(255,240,235);
    rect(0,0,width, height/6);
    image(ul, 0,0);
    image(ur, ul.width,0);
    image(dl, 0, ul.height);
    image(dr, ul.width, ul.height);
    pop();
}

function drawHead(){
    push();
    fill(255);
    textSize(windowHeight/6);
    textAlign(CENTER, CENTER);
    textFont('Work Sans');
    text(head.title, windowWidth/2+window.pageXOffset, windowHeight/12+window.pageYOffset);
    pop();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

//On mouse press, link to new page
function mousePressed(){

}

