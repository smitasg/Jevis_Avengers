var player,battleship1,battleship2,space;
var BattleshipGroup,lightninggroup,lt;
var playeranim,lanim,bg,bs1,bs2;
function preload()
{
playeranim = loadImage("thor.png");
lanim = loadImage("lightening.png");
bg = loadImage("space.jpg");
bs1= loadImage("bs1.png");
}

function setup()
{ createCanvas(600,600);
   BattleshipGroup = new Group();

 player = new Thor();
player.body.addImage("thr",playeranim);
player.body.scale = 0.3;
   lightninggroup = new Group();
  
}
function draw() {
  background(bg);
 player.display();
 
  
  drawSprites();
}