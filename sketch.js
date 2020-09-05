
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100, 500, 40);
	bob2 = new Bob(200, 500, 40);
	bob3 = new Bob(300, 500, 40);
	bob4 = new Bob(400, 500, 40);
	bob5 = new Bob(500, 500, 40);
	
	roof1 = new Roof(300, 0, 400, 50);

	rope1 = new Rope(bob1.body, roof1.body, -160,0);
	rope2 = new Rope(bob2.body, roof1.body, -80,0);
	rope3 = new Rope(bob3.body, roof1.body, 0,0);
	rope4 = new Rope(bob4.body, roof1.body, 80,0);
	rope5 = new Rope(bob5.body, roof1.body, 160,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-100,y:80})
	}
}


