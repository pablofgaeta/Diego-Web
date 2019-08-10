class circleNav {
    constructor(pos, dir, page, sound){
        this.text = page;
        this.pos = pos
        this.dir = dir;
        this.r = radius;
        this.sound = sound;
        this.hovering = false;
        this.returndir = dir;
        this.image = null;
        this.mass = ceil(random(1,3));
    }

    move(){
        this.pos.add(this.dir);
    }

    show(){
        push(); 
            if(this.checkHover(this)){
                fill(255,0,255);
                // this.returndir = this.dir;
                // this.dir = createVector(0,0);
            }
            else{
                fill(183, 174, 155);
                // this.dir = this.returndir;
            }
            this.image = ellipse(this.pos.x,this.pos.y,this.r*2);
            fill(255);
            push();
            var txts = this.r / 4;
            textAlign(CENTER, CENTER);
            textSize(txts);
            text(this.text,this.pos.x,this.pos.y);
            pop();
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
                if(dist < (minDist)){
                    var massdiff = (this.mass - arr[i].mass) / (this.mass + arr[i].mass);
                    var massadd = (2*arr[i].mass)/(this.mass + arr[i].mass);
                    var tempa = this.dir;
                    var tempb = arr[i].dir;
                    this.dir = p5.Vector.add(p5.Vector.mult(tempa, massdiff),p5.Vector.mult(tempb, massadd));
                    arr[i].dir = p5.Vector.sub(p5.Vector.mult(tempa, massadd),p5.Vector.mult(tempb, massdiff));
                    this.checkPlay();
                }
            }
        }
        // for(var i = 0; i<6; i++){
        //     if(ind!=i){
        //         var dx = this.pos.x-arr[i].pos.x;
        //         var dy = this.pos.y-arr[i].pos.y;
        //         dist = sqrt(sq(dx)+sq(dy));
        //         if(dist <= (minDist)){
        //             var tempx = this.dir.x;
        //             var tempy = this.dir.y;
        //             var tempdx = arr[i].dir.x;
        //             var tempdy = arr[i].dir.y;
        //             this.dir.x = tempdx;
        //             this.dir.y = tempdy;
        //             arr[i].dir.x = tempx;
        //             arr[i].dir.y = tempy;
        //             this.checkPlay();
        //         }
        //     }
        // }
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
        if(!this.sound.isPlaying()){
            console.log("Playing " + this)
            this.sound.play();
        }
    }
}