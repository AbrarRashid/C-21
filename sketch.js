var rect1, rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 200, 50);
  rect1.debug = true;
  rect1.velocityY = 1;

  rect2 = createSprite(400, 300, 200, 50);
  rect2.debug = true;
  rect2.velocityY = -2;

  rect3 = createSprite(100, 250, 100, 100);
  rect3.debug = true;
  //rect3.velocityX = 1;
}

function draw() {
  background(255,255,255);
  
  if(isTouching(rect2, rect1)){
    rect2.shapeColor = "red";
    rect1.shapeColor = "green";
  }
  else{
    rect2.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }

  //bounceOff(rect1, rect2);

  //bounceOff(rect3, rect2);

  //bounceOff(rect3, rect1);

    //console.log(rect1.y - rect2.y);
    //console.log(rect2.y - rect1.y);
  drawSprites();
}

function isTouching(object1, object2){
  if ( object1.x - object2.x < (object1.width + object2.width)/ 2
    && object2.x - object1.x < (object1.width + object2.width)/ 2
    && object1.y - object2.y < (object1.height + object2.height)/ 2 
    && object2.y - object1.y < (object1.height + object2.height)/ 2){

      return true;
    }
    else{
      return false;
    }
}