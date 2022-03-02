const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var cannonBall, ballon, cannon, angle;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12;
var balls = [];

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	angleMode(DEGREES);
	angle = 15;

	
	ballon = new Ballon(windowWidth-1300, windowHeight-500);
	b1 = new Ballon(windowWidth-1200, windowHeight-600);
	b2 = new Ballon(windowWidth-1100, windowHeight-550);
	b3 = new Ballon(windowWidth-1000, windowHeight-450);
	b4 = new Ballon(windowWidth-900, windowHeight-500);
	b5 = new Ballon(windowWidth-800, windowHeight-550);
	b6 = new Ballon(windowWidth-700, windowHeight-600);
	b7 = new Ballon(windowWidth-600, windowHeight-400);
	b8 = new Ballon(windowWidth-500, windowHeight-550);
	b9 = new Ballon(windowWidth-400, windowHeight-450);
	b10 = new Ballon(windowWidth-300, windowHeight-600);
	b11 = new Ballon(windowWidth-200, windowHeight-550);
	b12 = new Ballon(windowWidth-100, windowHeight-500);
	
	cannon = new Cannon(666, 530, 120, 130, angle);
	
	
	//Engine.run(engine);

}


function draw() {
  background(180);
  text(mouseX + "," + mouseY, 120, 120);

  Engine.update(engine);
  ballon.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();

  for(var i = 0; i < balls.length; i++) {
	showCannonBalls(balls[i]);
  }

  cannon.display();
  //cannonBall.display();

  drawSprites();

}

function keyPressed() {
	if(keyCode === DOWN_ARROW) {
        cannonBall = new CannonBall(cannon.x, cannon.y);
		balls.push(cannonBall);
	   } 
	}

function showCannonBalls(ball) {
        if(ball) {
			ball.display();
		}
	}

function keyReleased() {
		if(keyCode === DOWN_ARROW) {
			balls[balls.length-1].shoot();
		}
}

