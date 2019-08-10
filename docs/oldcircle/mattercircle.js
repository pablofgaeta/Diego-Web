class circleNav {
    constructor(pos, dir, page, sound){
        const options = {
            friction: 0,
            restitution: 1,
            inertia: Infinity,
            frictionAir: 0,
            frictionStatic: 0
        }
        this.text = page;
        this.dir = dir;
        this.r = radius;
        this.sound = sound;
        this.saveVel = null;
        this.body = Bodies.circle(pos.x,pos.y,radius, options);
        World.add(world, this.body);
        Matter.Body.setVelocity(this.body, p5.Vector.mult(dir, 25));
        this.body.label = page;
        console.log(this.body);
    }

    show(){
        var pos = this.body.position;
        push(); 
            if(this.checkHover(this)){
                // Matter.Body.setVelocity(this.body, p5.Vector.sub(this.body.velocity, .01));
                if(this.body.motion < 10){
                    this.body.frictionAir = .05;
                }
                else{
                    this.Body.frictionAir = 1000;
                }
                fill(255,0,255);
            }
            else {
                this.body.frictionAir = 0;
                fill(183, 174, 155);
            }
            translate(pos.x, pos.y);
            push();
            ellipse(0,0,this.r*2);
            pop();
            fill(255);

            var txts = this.r / 4;
            textAlign(CENTER, CENTER);
            textSize(txts);
            text(this.text,0,0);
        pop();
    }

    checkHover(circ){
        if(mouseX <= (this.body.position.x + this.r) && mouseX >= (this.body.position.x - this.r) && mouseY <= (this.body.position.y + this.r) && mouseY >= (this.body.position.y - this.r)){
            return true;
        }
        else{
            return false;
        }
    }
}