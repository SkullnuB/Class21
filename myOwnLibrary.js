function bounceOff(param1,param2){

    if (param2.x - param1.x < param1.width/2 + param2.width/2
      && param1.x - param2.x < param1.width/2 + param2.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (param2.y - param1.y < param1.height/2 + param2.height/2
    && param1.y - param2.y < param1.height/2 + param2.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
}

}