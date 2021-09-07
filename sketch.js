var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(70,70,30,30);
  box2 = createSprite(200,200);
  box2.shapeColor = "red";

}

function draw() 
{
  // background(255);
  //RGB color
  background(100,0,180);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




