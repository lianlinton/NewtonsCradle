class bob {
    constructor(x, y){
        var options = {
           'isStatic': false,
           'restitution': 0.3,
           'friction': 0.5,
           'density': 1.2
        }
        this.body = Bodies.circle(x, y,75, options);
    }
    display(){
        var pos =this.body.position;
        fill("pink");
        ellipse(pos.x, pos.y, 75);
    }
}