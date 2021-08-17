var bg;
var pingu, pinguImage;
var snowman, snowmanImage
var igloo, iglooImage;
var snow = [];

function preload() {
  bg = loadImage("snow1.jpg");
  //pinguImage = loadImage("pingu.png");
  
  //iglooImage = loadImage("igloo.png");
}

function setup() {
  createCanvas(1000, 700);
  //createSprite(400, 200, 50, 50);
  
  

  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }
}

function draw() {
  background(bg);
  
  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  
}