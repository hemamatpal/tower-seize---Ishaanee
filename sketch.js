const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var slingshot;
var polygon;
var score=0;
var bgimg;

var backgroundImg ;

function preload(){
  Bgimg();

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  polygon = Bodies.circle(50,200,40)
  World.add(world,polygon)
  
  ground = new Ground(600,height,1200,20);
  slingshot = new SlingShot(polygon,{x:100,y:200});
  bloc =new Box(300,275,30,40);
  block =new Box(330,275,30,40);
  block1=new Box(360,275,30,40);
  block2=new Box(390,275,30,40);
  block3=new Box(420,275,30,40);
  block4=new Box(450,275,30,40);
  block5=new Box(480,275,30,40);
  //block6=new Box(510,275,30,40);
  //block7=new Box(540,275,30,40);
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12 =new Box(450,235,30,40);
  block13 =new Box(360,195,30,40);
  block14 =new Box(390,195,30,40);
  block15 =new Box(420,195,30,40);
  block16 =new Box(390,155,30,40);
}

function draw() 
{
  Engine.update(engine);
if (backgroundImg)
{
  background(backgroundImg );
}
  bloc.display();
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  //block6.display();
  //block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  ground.display();
  slingshot.display();
  ellipse(polygon.position.x,polygon.position.y,40,40)
  text("SCORE: "+score,700,40)
  bloc.score()
  block.score()
  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()

 // drawSprites();

}

function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
    console.log("hema");
    slingshot.attach(polygon)
  }
}
async function Bgimg()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18)
  {
      bg = "bg1.png";
  }
  else
  {
      bg = "bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
