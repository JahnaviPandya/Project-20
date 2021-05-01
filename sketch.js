var bullet, wall, thickness ;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 30);
  bullet.shapeColor = color("white");
  wall = createSprite(1210, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {
  background("black");  
  bullet.velocity.x = speed;

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness ;
    if(damage < 10)
    {
      bullet.shapeColor = color("green");
    }
    if(damage > 10) 
    {
      bullet.shapeColor = color("red");
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall) 
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if (bulletRightEdge >= wallLeftEdge) 
   {
      return  true;
    }
     return false;
}