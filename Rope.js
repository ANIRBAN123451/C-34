class Rope{
    constructor(body1,point2){
       
        var options = {
            bodyA : body1,
            pointB : point2,
          stiffness:0.04,
          length:400
        }
        this.pointB= point2;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        stroke("black")
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}