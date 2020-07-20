class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    attach(body)
    {
        console.log("HEMA");
        this.sling.bodyA = body;
    }
    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(84,15,15);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y, pointB.x, pointB.y)
            //strokeWeight(6)
        }
    }
    
}