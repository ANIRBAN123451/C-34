const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var ground;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var wall1, wall2, ball, rope;




function setup(){

    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


   ground = new Ground(600,780,1200,40);

    b1=new Box(50,750,50,50)
    b2=new Box(50,700,50,50)
    b3=new Box(50,650,50,50)
    b4=new Box(50,600,50,50)
    b5=new Box(50,550,50,50)
    b6=new Box(50,500,50,50)
    b7=new Box(50,450,50,50)
    b8=new Box(50,400,50,50)
    b9=new Box(50,350,50,50)
    b10=new Box(50,300,50,50)

    b11=new Box(100,750,50,50)
    b12=new Box(100,700,50,50)
    b13=new Box(100,650,50,50)
    b14=new Box(100,600,50,50)
    b15=new Box(100,550,50,50)
    b16=new Box(100,500,50,50)
    b17=new Box(100,450,50,50)
    b18=new Box(100,400,50,50)
    b19=new Box(100,350,50,50)
    b20=new Box(100,300,50,50)
    
    b21=new Box(150,750,50,50)
    b22=new Box(150,700,50,50)
    b23=new Box(150,650,50,50)
    b24=new Box(150,600,50,50)
    b25=new Box(150,550,50,50)
    b26=new Box(150,500,50,50)
    b27=new Box(150,450,50,50)
    b28=new Box(150,400,50,50)
    b29=new Box(150,350,50,50)
    b30=new Box(150,300,50,50)
    
    b31=new Box(200,750,50,50)
    b32=new Box(200,700,50,50)
    b33=new Box(200,650,50,50)
    b34=new Box(200,600,50,50)
    b35=new Box(200,550,50,50)
    b36=new Box(200,500,50,50)
    b37=new Box(200,450,50,50)
    b38=new Box(200,400,50,50)
    b39=new Box(200,350,50,50)
    b40=new Box(200,300,50,50)

    wall1=new Ground(800,500,50,600)
    wall2=new Ground(550,200,600,50)
    ball = new Ball(350, 600,50)
    rope= new Rope(ball.body, {x:350, y:200})
}

function draw(){
   
background("skyblue");
Engine.update(engine);
  
ground.display();
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
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();  
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b30.display();
    b31.display();  
    b32.display();
    b33.display();
    b34.display();
    b35.display();
    b36.display();
    b37.display();
    b38.display();
    b39.display();
    b40.display();
    wall1.display()
    wall2.display()
    ball.display()
    rope.display()
}



function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body, ball.position, {x:-200 , y:-200})
    }
}

