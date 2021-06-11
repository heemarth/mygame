
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tower1,tower2,tower3,tower4,tower5,tower6;

var bar1,bar2,bar3,bar4,bar5,bar5,bar6,bar7,bar8,bar9,bar10;

function preload()
{
	
}

function setup() {
	createCanvas(300, 540);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var tower1 = createSprite(150,440,50,50);
	var tower2 = createSprite(50,400,40,40);
	var tower3 = createSprite(250,400,40,40);

	var tower4 = createSprite(150,40,50,50);
	var tower5 = createSprite(50,80,40,40);
	var tower6 = createSprite(250,80,40,40);

	var bar1 = createSprite(50,530,25,15);
    var bar2 = createSprite(75,530,25,15);
	var bar3 = createSprite(100,530,25,15);
	var bar4 = createSprite(125,530,25,15);
	var bar5 = createSprite(150,530,25,15);
	var bar6 = createSprite(175,530,25,15);
	var bar7 = createSprite(200,530,25,15);
	var bar8 = createSprite(225,530,25,15);
	var bar9 = createSprite(250,530,25,15);
	var bar10 = createSprite(275,530,25,15);

	bar1.shapeColor = "red";
	bar2.shapeColor = "green";
	bar3.shapeColor = "red";
	bar4.shapeColor = "green";
	bar5.shapeColor = "red";
	bar6.shapeColor = "green";
	bar7.shapeColor = "red";
	bar8.shapeColor = "green";
	bar9.shapeColor = "red";
	bar10.shapeColor = "green";

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  


  drawSprites();
 
}



