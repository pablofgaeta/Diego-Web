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

var body = document.getElementById("bigbod");
var names = ["./oldcircle/matterhome.js",
            "./oldcircle/mattercircle.js",
            "./oldcircle/boundary.js"];
var js = [];

if (!mob)
{
    for(var i=0; i<3;i++){
        js[i] = document.createElement("script");
        js[i].type = "text/javascript";
        js[i].src = names[i];
        // document.body.appendChild(js[i]);
    }
//    document.body.style.backgroundImage = "url('../contactbg.jpg')";
}
else
{
   document.body.style.backgroundImage = "url('../elbarto.gif')";
    alert('mobil');
    var song = document.getElementById("song");
    song.volume = .5;
    song.play();
}



