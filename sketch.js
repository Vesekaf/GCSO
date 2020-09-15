var car, wall;
var speed, weight;
var deformation;



function setup() {
  createCanvas(1600,800);
  speed = random(50, 90);
  weight = random(400, 1500);

  car = createSprite(100, 400, 50, 50);
  wall = createSprite(1500, 400, 60, height/2);
  car.velocityX = speed;
  deformation = (0.5*weight*speed*speed/22500);
}

function draw() {
  background(0, 0, 0);  

  fill(255, 255, 255)
  text("Weight:  " + weight, 400, 200);
  text("Speed:   " + speed, 600, 200);
  
  if(wall.x - car.x < car.width/2 + wall.width/2){

    
      car.velocityX = 0;
      text("Deformation:   " + deformation, 200, 200);
      
      if(deformation < 80){
        car.shapeColor = color(0, 255, 0);
      }
      
      if(deformation > 80 && deformation < 180){
        car.shapeColor = color(230, 230, 0);
      }
      
      if(deformation > 180){
        car.shapeColor = color(255, 0, 0);
      }

  }


  drawSprites();

  
}