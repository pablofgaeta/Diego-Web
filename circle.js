class circleNav {
    constructor(pos, dir, num){
        this.text = num + '';
        this.pos = pos
        this.dir = dir;
        this.r = radius;
        this.synth = new p5.Oscillator();
        this.synth.setType('sine');
        this.synth.freq(floor(random(100,500)));
        this.synth.amp(0);
        this.playing = false;
        this.hovering = false;
    }

    show(){
        this.pos.add(this.dir);
        push();
            if(this.checkHover(this)){
                fill(255,0,255);
            }
            else{
                fill(183, 174, 155);
            }
            ellipse(this.pos.x,this.pos.y,this.r*2);
            fill(255);
            text(this.text,this.pos.x,this.pos.y);
        pop();
    }

    checkHover(circ){
        if(mouseX <= (this.pos.x + this.r) && mouseX >= (this.pos.x - this.r) && mouseY <= (this.pos.y + this.r) && mouseY >= (this.pos.y - this.r)){
            return true;
        }
        else{
            return false;
        }
    }

    checkBoundaries(arr, ind){
        var dist;
        let minDist = radius * 2;
        for(var i = 0; i<6; i++){
            if(ind!=i){
                var dx = this.pos.x-arr[i].pos.x;
                var dy = this.pos.y-arr[i].pos.y;
                dist = sqrt(sq(dx)+sq(dy));
                if(dist <= (minDist)){
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
        if(this.pos.x>=windowWidth-radius || this.pos.x <= radius){
            this.dir.x *= -1;
            this.checkPlay();
        }
        if(this.pos.y >= (windowHeight-radius) || this.pos.y <= radius){
            this.dir.y *= -1;
            this.checkPlay();
        }
    }

    checkPlay(){
        if(!this.playing){
            this.synth.amp(0.16,0.1);
            this.playing = true;
        }
        else{
            this.synth.amp(0,0.1);
            this.playing = false;
        }
    }
}