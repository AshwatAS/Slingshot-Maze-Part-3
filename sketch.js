const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
var world,engine,canvas
var score=0;
var bg = "sprites/bg1.png";
function preload(){
  getTime();
}
function setup() {
  canvas=createCanvas(1400,400);
  engine=Engine.create();
  world=engine.world;
//last row
  //box1=new Box(1150,200,40,40);
  box2=new Box(1130,210+80,40,40);
  box3=new Box(1090,210+80,40,40);
  box4=new Box(1050,210+80,40,40);
  box5=new Box(1010,210+80,40,40);
  box6=new Box(970,210+80,40,40);

//second-last row
  box7=new Box(1110,110+120,40,40);
  box8=new Box(1070,110+120,40,40);
  box9=new Box(1030,110+120,40,40);
  box10=new Box(990,110+120,40,40);

//third-last row
  box11=new Box(1090,10+200,40,40);
  box12=new Box(1050,10+200,40,40);
  box13=new Box(1010,10+200,40,40);

//fourth-last row
  box14=new Box(1070,-90+240,40,40);
  box15=new Box(1030,-90+240,40,40);

//first row
  box16=new Box(1050,-190+300,40,40);

//ground  
  ground=new Ground(1080,300,300,5);

//slingshot
  ball=new Ball(700,200,40);
  sling=new Sling(ball.body,{x:800,y:100});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg); 

    Engine.update(engine);
    //box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    ground.display();
    ball.display();
    sling.display();
    textSize(35);
    fill("white");
    text("Score  " + score, width-300, 50); 
  }
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode==32){
    sling.attach(ball.body);
  }
}
async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>=06 && hour<=19){
    bg="bg1.png";
  }
  else{
    bg="bg2.png";
  }
  backgroundImg=loadImage(bg);
  console.log(responseJSON);
  //console.log(hour);
}