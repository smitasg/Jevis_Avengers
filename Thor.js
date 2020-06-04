class Thor
{
constructor()
{

    this.width = 25;
    this.height =25 ;
    //this.visibility = true;
    this.x = 300;
    
    this.y = 500;
    this.body = createSprite(this.x,this.y,this.width,this.height);

}
display(){
  
  var rand = random(20,600);
  var rand2 = random(20,600);
 
  if(World.frameCount%60 === 0){
    battleship1 = createSprite(rand, 0, 10, 10);
    battleship1.addImage("bs",bs1);
    battleship1.scale = 0.5;
    battleship1.velocityY=3;
    BattleshipGroup.add(battleship1);
   
  }
  this.body.x = World.mouseX;
  
  if(keyWentDown("space")){
    var lt = createSprite(mouseX,mouseY,30,30);
   // lt.debug = true;
   lt.addImage("light",lanim);
    //lt.scale  = 0.5;                       
    lt.velocityY=-12;
    lightninggroup.add(lt);
     
  }  
if(lightninggroup.isTouching(battleship1))  
{ // console.log(battleship1.y);
    battleship1.visible = false;
}


 /*else if (lightninggroup.isTouching(battleship2))
{
  battleship2.visible = false;
}*/
}
}
