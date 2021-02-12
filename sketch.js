var fixedRect, movingRect;

var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "green";

movingRect = createSprite(400, 300, 80,30);
movingRect.shapeColor = "green";

gameObject1 = createSprite(100, 100, 50,50);
gameObject1.shapeColor = "green";


gameObject2 = createSprite(200, 100, 50,50);
gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
   
  }

  drawSprites();
}


