
var bg, backgroundImg;
var iron;
var stone;
function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironMan=loadImage("images/iron.png");
  stoneimg=loadImage("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg=createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  iron=createSprite(150,430,30,60);
  iron.addImage(ironMan);
  iron.scale=0.3;
  
  stoneGroup = new group ();
}

function draw() 
{ background("black");
  if(keyDown("up")) {
    iron.velocityY= -10;
  }
  if(keyDown("left")) {
    iron.x=iron.x-5;
  }
  if(keyDown("right")) {
    iron.x=iron.x+5;
  }
  iron.velocityY=iron.velocityY + 0.5;

  //generateStone();
  //for(var i = 0 ; i< (stoneGroup).length ;i++){
    //var temp = (stoneGroup).get(i) ;
    
    //if (temp.isTouching(iron)) {
       //iron.collide(temp);
      //}
    //}
  //iron.scale=0.3;
  //iron.debug=true;
  //iron.setCollider("rectangle",10,0,200,400);

  drawSprites(); 
}

//function generateStone() {
  //if (frameCount % 70 === 0) {
    //var stone = createSprite(1200,120,40,10);
    //stone.y = random(50,450);
    //stone.addImage(stone);
    //stone.scale = 0.5;
    //stone.velocityY = -5;
    
    //stone.lifetime =250;
    //stoneGroup.add(stone);
  //}
//}