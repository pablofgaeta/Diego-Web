var sound;
let play;
let playing;
let cnv;

function preload(){
    sound = loadSound("../AUDIO/cherish\ love.mp3");
    play = loadImage("../gifs/play.png");
    pause = loadImage("../gifs/pause.png");
}
function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    playing = false;

}
function draw(){
    clear();
    image(play, width/2, height/2, width/4, width/4);
}

function touchStarted(){
    if(!sound.isPlaying()){
        sound.play();
    }
    else{
        sound.pause();
    }
}

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