class circleNav {
    constructor(pos, dir, num){
        this.text = num + '';
        this.pos = pos
        this.dir = dir;
        this.r = radius;
        this.synth = new p5.Oscillator();
        this.synth.setType('sine');
        this.playing = false;
        this.synth.freq(floor(random(100,500)));
        this.synth.amp(0);
    }

    show(){
        this.pos.add(this.dir);
        ellipse(this.pos.x,this.pos.y,this.r*2);
        push();
        fill(255,0,255);
        text(this.text,this.pos.x,this.pos.y);
        pop();
    }

    checkBoundaries(arr, ind){
        var dist;
        let minDist = radius * 2;
        for(var i = 0; i<6; i++){
            if(ind!=i){
                var dx = this.pos.x-arr[i].pos.x;
                var dy = this.pos.y-arr[i].pos.y;
                dist = sqrt(sq(dx)+sq(dy));
                if(dist < (minDist)){
                    var tempx = this.dir.x;
                    var tempy = this.dir.y;
                    var tempdx = arr[i].dir.x;
                    var tempdy = arr[i].dir.y;
                    this.dir.x = tempdx;
                    this.dir.y = tempdy;
                    arr[i].dir.x = tempx;
                    arr[i].dir.y = tempy;
                    this.checkPlay();
                }
            }
        }
        if(this.pos.x>windowWidth-radius || this.pos.x < radius){
            this.dir.x *= -1;
            this.checkPlay();
        }
        if(this.pos.y> (windowHeight-radius) || this.pos.y < radius){
            this.dir.y *= -1;
            this.checkPlay();
        }
    }

    checkPlay(){
        if(!this.playing){
            this.synth.amp(0.1,0.1);
            this.playing = true;
        }
        else{
            this.synth.amp(0,0.1);
            this.playing = false;
        }
    }
}