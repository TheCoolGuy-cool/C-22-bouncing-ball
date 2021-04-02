const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
 
   object= Bodies.rectangle(200,389,200,20,object_options);
    World.add(world,object);

    var ball_options={
    restitution:1.2
    }
   ball=Bodies.circle(200,200,30,ball_options);
   World.add(world,ball);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);

    console.log(ball);

    rectMode(CENTER);
    

    rect(object.position.x,object.position.y,400,33);
    
    ellipse(ball.position.x,ball.position.y,30,30);
}
