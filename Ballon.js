class Ballon {
    constructor(x, y) {
        var options = {
            isStatic: true

        }
        
        this.body = Bodies.circle(x, y, 50, options);
        
        World.add(world, this.body);
        //this.w = 100;
        //this.h = 50;

        this.image = loadImage("Bal1.png");

    }

    display() {
        var pos = this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 40);
        pop();
    }
}