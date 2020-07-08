class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB
        this.image=loadImage("nylon.jpg");
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(bodyX){
        this.chain.bodyA=bodyX;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            image(this.image,pointB.x, pointB.y, pointA.x-pointB.x, pointA.y-pointB.y);
        }
        
    }
    
}