var sound;
let play, pause, play2;
let cnv;

function preload(){
    sound = loadSound("../AUDIO/cherish\ love\ min.mp3");
    // play2 = loadImage("../gifs/play.png");
    // pause = loadImage("../gifs/pause.png");
    // play = createImg("../gifs/play.png");
    // pause = createImg("../gifs/pause.png");
}
function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    // play.style('display', 'none');
    // pause.style('display', 'none');
    // play.size(width/4, AUTO);
    // pause.size(width/4, AUTO);
    // play.mousePressed(playme);
    // play.touchStarted(playme);
    // pause.mousePressed(playme);
    // pause.touchStarted(playme);
    sound.loop();
}
function draw(){
    clear();
    // if(sound.isPlaying()){
    //     play.hide();
    //     pause.show();
    //     pause.center();
    // }
    // else{
    //     pause.hide();
    //     play.show();
    //     play.center();
    // }
}

function playme(){
    if(!sound.isPlaying()){
        sound.play();
    }
    else{
        sound.pause();
    }
}
// function mousePressed(){
//     if(!sound.isPlaying()){
//         sound.play();
//     }
//     else{
//         sound.pause();
//     }
// }

// function touchStarted(){
//     if(!playing){
//         sound.play();
//         playing = true;
//     }
//     else{
//         sound.pause();
//         playing = false;
//     }
// }

function windowResized(){
    cnv = resizeCanvas(windowWidth, windowHeight);
}