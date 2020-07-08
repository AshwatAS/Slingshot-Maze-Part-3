class Ground extends Box{
    constructor(x,y,width,height){
        super(x,y,width,height);
        Matter.Body.setStatic(this.body,true);
    }
    display(){
    	fill("white");
        rect(this.x,this.y,this.width,this.height);
    }
}