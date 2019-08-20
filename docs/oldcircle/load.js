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
   document.body.style.backgroundImage = url("bg.jpg");
}
else
{
   document.body.style.backgroundImage = url("elbarto.gif");
    alert('mobil');
    var song = document.getElementById("song");
    song.volume = .5;
    song.play();
}



