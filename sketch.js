var ground;
var paper;
var dustbinPart1;
var dustbinPart2;
var dustbinPart3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(50, 50);
	dustbinPart1 = new DustbinPart(1200, 300, 20, 100);
	dustbinPart2 = new DustbinPart(1300, 300, 20, 100);
	dustbinPart3 = new DustbinPart(1250, 360, 100, 20);
	ground = new Ground(800, 380, 1600, 20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  paper.display();
  dustbinPart1.display();
  dustbinPart2.display();
  dustbinPart3.display();
  ground.display();
}

function keyPressed()	{
	if (keyCode === UP_ARROW)	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:10, y:-10});
	}
}