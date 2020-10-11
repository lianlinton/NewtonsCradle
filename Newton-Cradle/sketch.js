
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 50;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stroke("white");

	roofObject = new roof(425, 100, 450, 50);

	bobObject1 = new bob(275, 600);
	bobObject2 = new bob(350, 600);
	bobObject3 = new bob(425, 600);
	bobObject4 = new bob(500, 600);
	bobObject5 = new bob(575, 600);

	rope1 = new rope(bobObject1.body, roofObject.body, -150, 25);
	rope2 = new rope(bobObject2.body, roofObject.body, -75, 25);
	rope3 = new rope(bobObject3.body, roofObject.body, 0, 25);
	rope4 = new rope(bobObject4.body, roofObject.body, 75, 25);
	rope5 = new rope(bobObject5.body, roofObject.body, 150, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



