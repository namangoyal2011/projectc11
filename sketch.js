var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
  shipImage = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background(0);

  // Moving background
  sea=createSprite(0,200,400,20);
  sea.addImage(seaImg);
  sea.scale=1;
  sea.x = sea.width/2 ;
  sea.velocityX = -5;
  
  ship = createSprite(150,290,30,30);
  ship.addAnimation("movingShip",shipImage);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
 
  //sea.velocityX = 3;
  

  
    
  drawSprites();
}
