var wall1, wall2, wall3, wall4, wall5

function preload(){

}

function setup(){
  createCanvas(300,300);
  //createSprite(X, Y, width, height);
  wall1 = createSprite(70, 5, 100, 10);
  wall1.shapeColor = "yellow";
 
  wall2 = createSprite(120,5,10,50);
  wall2.shapeColor = "yellow";

  wall3 = createSprite(120,135,10,150);
  wall3.shapeColor = "red";

  wall4 = createSprite(165,65,100,10)
  wall4.shapeColor = "red";

  wall5 = createSprite(10,120,10,140)
  wall5.shapeColor = "green";

  wall6 = createSprite(20,120,80,10);

  

}

function draw(){
 background("black");

 //THE MOUSE CURSOR
 fill("white");
 text(mouseX + "," + mouseY, mouseX, mouseY);

 drawSprites();
}

