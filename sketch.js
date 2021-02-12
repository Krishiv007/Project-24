const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,390,width,20);
	paper = new Paper(100,385);
	dustbin1 = new Dustbin1(1000,370);
	dustbin2 = new Dustbin2(890,320);
	dustbin3 = new Dustbin2(1110,320);



	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}