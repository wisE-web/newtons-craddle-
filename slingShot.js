class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 100
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }
    fly () {
    this.sling.bodyA = null;    
    }

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}