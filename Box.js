class Box{
    constructor(x,y,width,height){
        var options={
            density:1,
            restitution:0.5,
            isStatic:false,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.visibility=255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
            var angle = this.body.angle;
            var pos=this.body.position
            var rand1=Math.round(random(0,4));
            var colors=["red","blue","green","yellow","white"];
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill(colors[rand1]);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-6;
            //tint(255,this.Visibility);
            pop();
        }    
    }
    score(){
        if (this.visiblity < 0 && this.visiblity > -105){
          //score++;
          score=score+1;
        }
      }
}