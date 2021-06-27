
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint= Matter.Constraint;
var treeObj,stoneObj,groundObject,launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango12;
var world,boy;
var launchingForce=100;

function preload()
{
boy=loadImage("images/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj=new stone(235,420,30);

mango1=new mango(1100,100,30);
mango2=new mango(1170,130,30);
mango3=new mango(1010,140,30);
mango4=new mango(1000,70,30);
mango5=new mango(1100730,30);
mango6=new mango(100,230,40);
mango7=new mango(900,100,30);
mango8=new mango(1140,150,40);
mango9=new mango(1100,230,40);
mango10=new mango(1200,200,40);
mango11=new mango(1120,50,40);
mango12=new mango(900,160,40);

treeObj=new treeObj(1050,580);
groundObject=new ground(width/2,600,width,20);
launcherObject=new launcher(stoneObj.body,{x:235,y:420})
var render = Render.create({
	element: document.body,
	engine:engine,
	options:{
		width:1300,
		height:600,
		wireframes:false
	}
});
	Engine.run(engine);
  //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  //frameRate(2)
  //Engine.update(engine)
textSize(25);
text("Press Space to get a second chance to play!!",50,50);
Image(boy,200,340,200,300);
  //Engine.update(engine)

  drawSprites();
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  
  groundObject.display();
  launcherObject.display();
  detectollisation(stoneObj,mango1);
  detectollisation(stoneObj,mango2);
  detectollisation(stoneObj,mango3);
  detectollisation(stoneObj,mango4);
  detectollisation(stoneObj,mango5);
  detectollisation(stoneObj,mango6);
  detectollisation(stoneObj,mango7);
  detectollisation(stoneObj,mango8);
  detectollisation(stoneObj,mango9);
  detectollisation(stoneObj,mango10);
  detectollisation(stoneObj,mango11);
  detectollisation(stoneObj,mango12);

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcherObject.fly();

}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}

function detectollisation(lstone,lmango){
	/*var collison=Matter.SAT.collides(lstone,lmango);
  if(collison.collides){
    Matter.Body.setStatic(lmango,false);
    
  }*/
}
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
//console.log(distance)
//console.log(lmango.r+lstone.r)
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
