const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
var snow2=[];
maxsnow=20;
function preload(){
 snow=loadImage("snow3.jpg")
}


function setup() { 
  createCanvas(800,400);
   engine = Engine.create();
    world = engine.world;
     if(frameCount %15000 === 0 ){ 
       
       for(var i=0; i<maxsnow; i++){
          snow2.push(new Snow(random (0,800),random(0,400),100,100)) } } 
          //snowflakes = new Snow(100,100,50,50) 
        }

function draw() {
  background(snow);  
  Engine.update(engine);
  for(var i = 0; i < maxsnow; i++){
     snow2[i].display();
      snow2[i].updateY();
     }
  //drawSprites();
}