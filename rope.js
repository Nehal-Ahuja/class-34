class Rope
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 300,
            stiffness: 1
            
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke("black");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}