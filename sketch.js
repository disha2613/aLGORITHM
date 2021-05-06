var a,b;

function setup() {
  createCanvas(1200,800);
  a =createSprite(400, 200, 80, 50);
  b = createSprite(400,700,50,80);
  a.shapeColor ="blue";
  b.shapeColor="blue";
  a.velocityY = 3;
  
}

function draw() {
  background(180);  
   //a.x = mouseX;
   //a.y = mouseY;
   

   if(b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2 &&
     b.y- a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2 ){
    a.shapeColor = "red";
    b.shapeColor= "red";
    a.velocityX = -1 * a.velocityX;
    a.velocityY = -1 * a.velocityY;
    
   }
   else{
    a.shapeColor ="blue";
    b.shapeColor="blue";
   }

  

  drawSprites();
}