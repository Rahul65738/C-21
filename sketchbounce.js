var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";

movingRect = createSprite(200, 400, 80,30);
movingRect.shapeColor = "green";

//movingRect.velocityX = -4;
//fixedRect.velocityX = 4;

movingRect.velocityY = -4;
fixedRect.velocityY = 4;

}

function draw() {
  background(255,255,255);  

 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;


 bounce(movingRect, fixedRect);

  drawSprites();
}

