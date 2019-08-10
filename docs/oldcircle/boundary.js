class Boundary {
    constructor(x, y, w, h) {
        var options = {
            friction: 0,
            restitution: 1,
            inertia: Infinity,
            frictionAir: 0,
            frictionStatic: 0,
            isStatic: true,
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.body.mass = .1;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        console.log(this.body);
        this.show = function () {
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            strokeWeight(1);
            noStroke();
            fill(255,255,255,0);
            rect(0, 0, this.w, this.h);
            pop();
        };
    }
}
