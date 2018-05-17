"use strict"

var showTexture = false;
var frameRateSlider = 60;
var gridMultiplierSlider = 15;
var startX = Math.ceil(gridMultiplierSlider / 2);
var startY = Math.ceil(gridMultiplierSlider / 2);
var stepForward = false;
var stepBackward = false;

function loadGUI() {

  QuickSettings.useExtStyleSheet();

  gui = QuickSettings.create(0, 0, "Prime Spiral Setup")
    .addRange("Frame Rate", 1, 60, frameRateSlider, 1, frameRateSliderFunc)
    .addRange("Grid Multiplier", 1, 51, gridMultiplierSlider, 2, gridMultiplierSliderFunc)
    .addButton("Step Forward", stepForwardFunc)
    .addButton("Pause", stopSteppingFunc)
    .addButton("Step Backward", stepBackwardFunc)
    .addBoolean('Show Numbers', showTexture, showTextureFunc);

  gui.setPosition(windowWidth * 0.05, windowWidth * 0.05);

}

function stepForwardFunc() {
  stepForward = true;
  stepBackward = false;
}

function stepBackwardFunc() {
  stepForward = false;
  stepBackward = true;

}

function stopSteppingFunc() {
  stepForward = false;
  stepBackward = false;
}

function showTextureFunc() {
  showTexture = !showTexture;
}

function frameRateSliderFunc() {
  frameRateSlider = gui.getValue("Frame Rate");
  frameRate(frameRateSlider);
}

function gridMultiplierSliderFunc() {
  gridMultiplierSlider = gui.getValue("Grid Multiplier");
  fixSize();
  grid = new Grid(gridMultiplierSlider, gridMultiplierSlider, tileSize);
  startX = Math.ceil(gridMultiplierSlider / 2);
  startY = Math.ceil(gridMultiplierSlider / 2);
  grid.walk(startX, startY, 1, gridMultiplierSlider * gridMultiplierSlider);
}