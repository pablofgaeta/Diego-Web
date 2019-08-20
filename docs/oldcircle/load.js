var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

let mob = isMobile.any();

var head = document.getElementsByTagName('head')[0];
var names = ["matterhome.js",
            "mattercircle.js",
            "boundary.js"];
var js = [];

if (!mob)
{
    for(var i=0; i<3;i++){
        js[i] = document.createElement("script");
        js[i].type = "text/javascript";
        js[i].src = names[i];
        head.appendChild(js[i]);
    }
}
else
{
    // alert('mobil');
    // var song = document.createElement("audio");
    // song.type = "audio/mp3"
    // song.src ="../AUDIO/cherish love.mp3";
    // song.volume = .5;
    // var img = document.createElement("img");
    // img.src = "../elbarto.gif";
    // img.onclick = function() {
    //     song.play();
    // };
    js[0] = document.createElement("script");
    js[0].type = "text/javascript";
    js[0].src = "./sound.js";
    head.appendChild(js[0]);
}