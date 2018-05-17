"use strict"

var grid;
var gui;
var img;
var tileSize;
var turtle;

function windowResized() {

  fixSize();

  resizeCanvas(gridMultiplierSlider * tileSize + (gridMultiplierSlider - 1), gridMultiplierSlider * tileSize + (gridMultiplierSlider - 1));
  grid = new Grid(gridMultiplierSlider, gridMultiplierSlider, tileSize);
}

function fixSize() {
  if (windowWidth >= windowHeight) {
    tileSize = (windowHeight / gridMultiplierSlider - 1);
  } else {
    tileSize = (windowWidth / gridMultiplierSlider - 1);
  }
}

function setup() {

  fixSize();
  loadGUI();
  frameRate(15);
  createCanvas(gridMultiplierSlider * tileSize + (gridMultiplierSlider - 1), gridMultiplierSlider * tileSize + (gridMultiplierSlider - 1), WEBGL);
  grid = new Grid(gridMultiplierSlider, gridMultiplierSlider, tileSize);
  grid.walk(startX, startY, 1, gridMultiplierSlider * gridMultiplierSlider);

}


function draw() {

  if (stepForward) {
    grid.walk(startX, startY, 1, gridMultiplierSlider * gridMultiplierSlider);
  } else if (stepBackward) {
    grid.walkBackwards(startX, startY, 1, gridMultiplierSlider * gridMultiplierSlider);
  }


  translate(-width / 2, -height / 2, 0);
  ambientLight(63);
  pointLight(127, 127, 0, -1, 1, 0); //yellow
  pointLight(127, 0, 127, 0, 0, 0); //purple
  pointLight(0, 127, 127, 1, -1, 0); //cyan
  grid.show();

}

function isPrime(num) {
  if(num < 0)return false;
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    stepForward = false;
    stepBackward = true;

  } else if (keyCode === RIGHT_ARROW) {
    stepForward = true;
    stepBackward = false;

  } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    stepForward = false;
    stepBackward = false;
  }
  return false;
}
