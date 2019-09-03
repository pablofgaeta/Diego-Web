class circleNav {
    constructor(pos, dir, page, index){
        const options = {
            friction: 0,
            restitution: 1,
            inertia: Infinity,
            frictionAir: 0,
            frictionStatic: 0
        }
        this.index = index; 
        this.text = page;
        this.dir = dir;
        this.r = radius;
        this.saveVel = null;
        this.body = Bodies.circle(pos.x,pos.y,radius, options);
        World.add(world, this.body);
        Matter.Body.setVelocity(this.body, p5.Vector.mult(dir, 25));
        this.body.label = page;

        this.circDiv = createElement('div', '');
        this.circDiv.size(this.r*2, this.r*2);
        this.circDiv.value(index);
        this.circDiv.mouseOver(this.muteplay);
    }

    muteplay(){
        mutedsounds[this.value()].play();
    }

    show(){
        var pos = this.body.position;
        var hover = this.checkHover(this);
        push(); 
            if(hover){
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
                fill(255, 255, 255);
            }
            translate(pos.x, pos.y);

            this.circDiv.position(pos.x-this.r,pos.y-this.r);

            push();
            // fill(0,0,0,0);
            // stroke('red');
            // strokeWeight(5);
            // ellipse(0,0,this.r*2);
            
            image(circimgs[this.index], 0,0, this.r*2,this.r*2);
            if(hover){ 
                image(titles[this.index],0,0,this.r*3,this.r*3);
            }
            pop();

            fill(255);
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