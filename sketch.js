var wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  thickness = random(22,83);

bullet = createSprite(50,200,50,5);
bullet.velocityX = speed;
bullet.shapeColor = color(255);


  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(255,255,255);  

if(bullet.x-wall.x<bullet.width/2+wall.width/2 &&
  wall.x-bullet.x<bullet.width/2+wall.width/2 &&
  wall.y-bullet.y<bullet.height/2+wall.height/2 &&
  bullet.y-wall.y<bullet.height/2+wall.height/2){

var deformation = 0.5*weight*speed*speed/22509;
if(deformation>10){
  wall.shapeColor = (255,0,0);
}

if(deformation<10){
  wall.shapeColor = (0,255,0);
}

  }

  drawSprites();
}