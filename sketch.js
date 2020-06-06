var racetrack;
var Boy1;
var Boy2;
var Boy3;
var Boy4;
var hurdles;
var Boy_running
var score
function preload(){
  Boy_running =loadAnimation("images/Boy1.png","images/Boy2.png","images/Boy3.png","images/Boy4.png");
  racetrack_still = loadImage("images/racetrack.jpg");
  hurdles_still = loadImage("images/hurdles.png");



}

function setup() {
  createCanvas(1200,400);
  Boy1 = createSprite(50,180,20,50);
  Boy1.addAnimation("running", Boy_running);
  Boy1.scale = 1.0;
  racetrack = createSprite(600,300,1200,100);
  racetrack.addAnimation("racetrack",racetrack_still);
 racetrack.width = 2500;
 racetrack.scale = 3.0;
 racetrack.velocityX = -5;

 invisibleGround = createSprite(200,290,400,10);
 invisibleGround.visible = false; 
}

function draw() {
  background("black");

  Boy1.velocityY = Boy1.velocityY + 0.8

racetrack.depth = Boy1.depth;
Boy1.depth = Boy1.depth+1;
Boy1.lifetime = 200;
background(255);
  text("Score: "+ score, 500,50);

    if(keyDown("space") && Boy1.y >= 159) {
      Boy1.velocityY = -12;
    }
Boy1.collide(invisibleGround);

if(racetrack.x < 0){
racetrack.x = racetrack.width/2;
}
spawnHurdles();

   
  drawSprites();

}

function spawnHurdles(){
  if(frameCount % 40 === 0){
var hurdles = createSprite(600,200,50,30);
hurdles.addImage(hurdles_still);
console.log("Code not working");
hurdles.scale = 0.5;
hurdles.VelocityX = -5;
console.log(hurdles.VelocityX);
}

}
