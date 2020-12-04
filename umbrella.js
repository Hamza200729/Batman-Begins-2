class Umbrella {
    constructor(x , y , r , angle){
        var options = {
            isStatic : true
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(200,200,30 , options);
        World.add(world , this.body);
    }

    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(angle);
        ellipse(this.image , 0 , 0 , this.width , this.height);
        ellipseMode(CENTER);
        pop();
    }
}