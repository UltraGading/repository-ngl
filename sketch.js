var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,50,50)
  movingRect.shapeColor = 'blue'
  fixedRect = createSprite(600,400,40,60)
  fixedRect.shapeColor = 'blue'
}
function draw() {
  background(255,255,255); 
  movingRect.y = World.mouseY
  movingRect.x = World.mouseX
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = 'purple'
  movingRect.shapeColor = 'purple'
  }
  else{
  fixedRect.shapeColor = 'blue'
  movingRect.shapeColor = 'blue'
  } 
  drawSprites();
}