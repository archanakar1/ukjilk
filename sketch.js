var a,b;

function setup() {
  createCanvas(1200,800);
  a= createSprite(200,200,50,80);
  a.shapeColor= "green";
  
  b= createSprite(400,200,80,30);
  b.shapeColor= "green";
}

function draw() {
  background(0);  
b.x= mouseX;
b.y= mouseY;

if(b.x-a.x < a.width/2 + b.width/2 && a.x-b.x < a.width/2 + b.width/2
  &&
  
  ){
  a.shapeColor= "red";
  b.shapeColor= "red";
}
else{
  a.shapeColor= "green";
  b.shapeColor= "green";
}

console.log(b.x-a.x);
  drawSprites();
}