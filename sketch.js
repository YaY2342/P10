var box;

function setup() {
  createCanvas(800,600);
  box = createSprite(250,250,40,40)
  box.shapeColor = "aqua"
}

function draw() 
{
  
  background(30);
  if(keyDown("down")){
    box.y = box.y+1
  }
  if(keyDown("up")){
    box.y = box.y-1
  }
  if(keyDown("right")){
    box.y = box.x+1
  }
  if(keyDown("left")){
    box.y = box.x-1
  }
  drawSprites()
}




