const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, ground;
// blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block0;
var polygon;
var slingshot;
var gameState = notLaunched;
var score = 0;

function preload(){
    polygonImage = loadImage('polygon.png');
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,395,2400,20);
    stand = new Ground(850, 305, 300, 20);
   
    polygon = new Polygon(550, 300, 20,20);

    block0 = new Box(800, 275, 27, 27);
    block0.score();
    block1 = new Box(830, 275, 27, 27);
    block1.score();
    block2 = new Box(860, 275, 27, 27);
    block2.score();
    block3 = new Box(890, 275, 27, 27);
    block3.score();
    block4 = new Box(835, 275, 27, 27);
    block4.score();
    block5 = new Box(845, 275, 27, 27);
    block5.score();
    block6 = new Box(875, 275, 27, 27);
    block6.score();
    block7 = new Box(820, 275, 27, 27);
    block7.score();
    block8 = new Box(850, 275, 27, 27);
    block8.score();
    block9 = new Box(827, 275, 27, 27);
    block9.score();

    slingshot = new SlingShot(polygon.body, {x:550, y:270})
}

function draw(){
    background('grey')
    Engine.update(engine)
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block0.display();
ground.display();
stand.display();
polygon.display();

text("Score : "+score, 750, 40)

}

function mouseDragged(){
    if(gameState !== 'Launched'){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = 'Launched'
}
function keyPressed(){
    if(keyCode === 32 && gameState === 'Launched'){
        Matter.Body.setPosition(polygon.body,{x:550, y:270})
        slingshot.attach(polygon.body)
        gameState = 'notLaunched'
    }
}