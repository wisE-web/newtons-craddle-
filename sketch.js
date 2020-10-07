const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world; 
function setup() {
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  

  createCanvas(800,400);
  ball = new Ball(400,300,20);
  ball1 = new Ball(375,300,20);
  ball2 = new Ball(350,300,20);
  ball3 = new Ball(425,300,20);
  ball4 = new Ball(450,300,20);
 holder = new Holder (400,200,180,15);
  slingshot = new SlingShot(ball1.body,{x:360,y:200});
 slingshot2 = new SlingShot(ball2.body,{x:325,y:200});
 slingshot3 = new SlingShot(ball3.body,{x:435,y:200});
 slingshot4 = new SlingShot(ball4.body,{x:480,y:200});
 slingshot5 = new SlingShot(ball.body,{x:400,y:200});
 Engine.run(engine);
}

function draw() {
 
  background(255,255,255);  
  drawSprites();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  slingshot.display();
  slingshot2.display();
  slingshot3.display();
 slingshot4.display();
  slingshot5.display();



  holder.display();

}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-50,y:50})
    
  }
}