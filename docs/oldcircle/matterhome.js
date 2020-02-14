let nav = [];
let radius;
let circleSpeed = .8;

let pages = ["bio", "performances", "recorded", "filmsound", "inspiration", "contact"];
// let pages = ["bio", "performances", "recorded", "filmsound", "inspiration", "journals", "contact"];
let sounds = [];
let mutedsounds = [];
let circimgs = [];

let boundaries = [];
let initvel = [];
let initpos = [];
var titles = [];


var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine, world;

function preload(){
    for(var i = 0; i<pages.length; i++){
        sounds[i]= loadSound("./newsounds/" + (i+1) + ".wav");
        sounds[i].setVolume(.2);
        mutedsounds[i]=loadSound("./newsounds/M"+(i+1)+".wav");
        mutedsounds[i].setVolume(.2);
        circimgs[i] = loadImage("./pngs/links/DiegoCircle_" + (i+1) + ".png");
        initvel.push(createVector(random(-.1*circleSpeed,.1*circleSpeed), random(-.1*circleSpeed,.1*circleSpeed)));
        titles.push(loadImage("./page_titles/"+(i+1)+"-0.png"));
    }
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

    radius = width > height ? (height / 10) : (width / 10);


    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0;
    // world.bounds = {
    //     min: {
    //         x: 0,
    //         y: 0
    //     }, 
    //     max: {
    //         x: width,
    //         y: height
    //     }

    // }

    boundaries.push(new Boundary(width/2, 0, width, radius));
    boundaries.push(new Boundary(width / 2, height - 5, width, radius));
    boundaries.push(new Boundary(0, height / 2,  radius, height));
    boundaries.push(new Boundary(width - 5, height / 2, radius, width));

    Matter.Events.on(engine, "collisionStart", function(event){
        for(var i = 0; i<event.pairs.length; i++){
            pair = event.pairs[i];
            for(var j = 0; j<pages.length; j++){
                if(pair.bodyA.label === pages[j] || pair.bodyB.label === pages[j]){
                    if(!sounds[j].isPlaying()){
                        sounds[j].play();
                    }
                }
            }
        }
    });
    
    for(var i = 0; i<pages.length;i++){
        nav[i] = new circleNav(createVector((i+1)/8*width,(height/2)),initvel[i], pages[i], i);
    }
    // noLoop();
    if(frameCount%100==0){
        resizeCanvas(windowWidth, windowHeight);
        radius = width > height ? (height / 10) : (width / 10);
        for(var i = 0; i<nav.length;i++){
            nav[i].body.circleRadius = radius;
            nav[i].radius = radius;
        }
    }
}

function draw() {
    clear();
    noStroke();
    Engine.update(engine);
    for(var i = 0; i<nav.length;i++){
        nav[i].show();
    }
    for(var i = 0; i<boundaries.length;i++){
        boundaries[i].show();
    }
    world.gravity.x = cos(frameCount/100)/50;
    world.gravity.y = sin(frameCount/100)/50;
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    radius = width > height ? (height / 10) : (width / 10);
    for(var i = 0; i<nav.length;i++){
        nav[i].body.circleRadius = radius;
        nav[i].radius = radius;
    }
    
}

//On mouse press, link to new page
function mousePressed(){
    for(var i = 0; i<nav.length;i++){
        if(nav[i].checkHover(nav[i])){
            window.top.location.href = "../" + nav[i].text + ".html";
        }
    }
}

function keyPressed(){
    for(var i = 49; i<57; i++){
        if(keyCode== (""+i)){
            var num = i-48;
            if(num < 5){
                world.gravity.y = num / 10;
            }
            else{
                num = -(num-4);
                world.gravity.y = num / 10;
            }
            
        }
        if(keyCode==ENTER){
            for(var i = 0; i<nav.length;i++){
                Matter.body.setVelocity(nav[i].body, initvel[i]);
            }
        }
    }
}

