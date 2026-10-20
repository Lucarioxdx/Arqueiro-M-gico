class PlayerBase {
    constructor (x, y, w, h){
        let properties = {
            isStatic: true
        }

        this.body = Bodies.rectangle (x, y, w, h, properties);

        this.w = w;
        this.h = h;

        this.image = loadImage ("./Assets/base.png");

        World.add (world, this.body);
    }

    display () {
        let pos = this.body.position;
        let angle = this.body.angle;

        push()

        translate (pos.x, pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0,0, this.w, this.h);

        pop()
    }
}