var sound;
let play, pause, play2;
let cnv;

function preload(){
    sound = loadSound("../AUDIO/cherish\ love\ min.mp3");
}
function setup(){
    sound.loop();
}
function draw(){
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