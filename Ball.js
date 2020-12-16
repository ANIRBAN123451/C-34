class Ball{
    constructor(x,y, radius){
        var options={
            restitution:1.0,
            friction:0,
            density:1.2,
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x,y,25,options,);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("Grey")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius, this.radius);
    
        pop();
      }
}