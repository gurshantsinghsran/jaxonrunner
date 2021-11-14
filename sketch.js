var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energydrinkImg = loadImage("energyDrink.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

coin = createSprite(200,200,80,90);
coin.addImage(coinImg);
coin.scale=0.3;

coin = createSprite(100,150,80,90);
coin.addImage(coinImg);
coin.scale=0.3;

coin = createSprite(310,150,80,90);
coin.addImage(coinImg);
coin.scale=0.3;

energydrink = createSprite(312,70,80,90);
energydrink.addImage(energydrinkImg);
energydrink.scale=0.1;

energydrink = createSprite(101,70,80,90);
energydrink.addImage(energydrinkImg);
energydrink.scale=0.1;

energydrink = createSprite(201,140,80,90);
energydrink.addImage(energydrinkImg);
energydrink.scale=0.1;

bomb = createSprite(200,200,90,90);
bomb.addImage(bombImg );
bomb.scale=0.1;






leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
