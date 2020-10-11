class rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        this.bodyB = bodyB;
        World.add(world, this.rope);
    }


    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y - 37.25, pointB.x+this.offsetX, pointB.y+this.offsetY);
    }
    
}