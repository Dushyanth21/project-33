const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var boy;
var snowman;
var ground;
var snowball;


function preload(){
backgroundImg = loadImage("sprites/snow1.png");
boy = loadImage("sprites/boy.png");

}

function setup(){
 var canvas = createCanvas(1365,625);
 engine = Engine.create();
 world = engine.world;

   // sling = new Sling(snowball.body,{x:400,y:330});
    ground = new Ground(670,620,1400,30);
    snowman = new Snowman(1200,10,120,120);
    snowball = new Snowball(snowball.body,{x:400,y:330});
}


function draw(){
    background(backgroundImg);
    Engine.update(engine);

        ground.display()
        snowball.display()
        snowman.display()
        
        //drawSprites();

    }

    //function mouseDragged(){
      //  Matter.Body.setPosition(snowball.body,{x:400,y:330})

    //}

     //function mousereleased(){
       //  sling.fly()
     //}

     //function keyPressed(){
//if (keyCode===32)
//Matter.Body.setPosition(snowball.body,{x:400,y:330})
//sling.attach(snowball.body)

//     }
