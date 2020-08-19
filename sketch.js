var img,boy;
var img2,tree;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	img = loadImage('pics/boy.png');
	img2 = loadImage('pics/tree.png');
  }
function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	mango1 = new mango(400, 250);
	mango2 = new mango(680, 290);
	mango3 = new mango(400, 320);
	mango4 = new mango(680, 340);

	ground = new Ground(600, height, 1200, 20);
	Stone = new stone(80, 500);
	
	slingshot = new SlingShot(Stone.body, { x: 55, y: 450 });
	Engine.run(engine);

	boy = createSprite(100,530,50,80);
	boy.scale=0.1;
	boy.addImage(img);
	tree = createSprite(560,345,50,90);
	tree.scale=0.4;
	tree.addImage(img2);
}


function draw() {
	rectMode(CENTER);
	background("grey");

	ground.display();
	Stone.display();
		
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	slingshot.display();

	/*detectcollision(Stone, mango1);
	detectcollision(Stone, mango2);
	detectcollision(Stone, mango3);
	detectcollision(Stone, mango4);
*/
	keypressed();
	drawSprites();
}


function mouseDragged() {
	Matter.Body.setPosition(Stone.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
	slingshot.fly()
}

/*function detectcollision(lStone, lmango) {
	mangoBodyPosition = lmango.body.position
	StoneBodyPosition = lStone.body.position

	var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance < -lmango.r + lStone.r) {
		Matter.Body.setStatic(lmango.body, false)
	}
}*/
function keypressed(){
	if (keyCode===32){
		Matter.Body.setPosition(Stone.body,{x:235,y:420})
		slingshot.attach(Stone.body);
	}
}
