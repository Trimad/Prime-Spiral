"use strict"

function Grid(_rows, _cols, _size) {

  this.rows = _rows;
  this.cols = _cols;
  this.size = _size;
  this.cells = [];
  this.spacing = 1;
  this.counter = 0;

  for (let x=0; x < this.rows; x++) {
    this.cells[x] = [];
    for (let y = 0; y < this.cols; y++) {
      this.cells[x][y] = new Cell(this.size);
    }
  }

  this.show = function() {
    this.checkForPrime();
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        let xTranslate = (this.size + this.spacing) * x + (tileSize / 2);
        let yTranslate = (this.size + this.spacing) * y + (tileSize / 2);
        translate(xTranslate, yTranslate, 0);
        this.cells[x][y].show();
        translate(-xTranslate, -yTranslate, 0);
      }
    }
  }

  this.checkForPrime = function() {

    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {

        if (isPrime(this.cells[x][y].value)) {
          this.cells[x][y].prime = true;
        } else {
          this.cells[x][y].prime = false;
        }
      }
    }
  }

  this.walk = function(x, y, step, count) {
    let distance = 0;
    let range = 1;
    let direction = 'up';

    for (let i = 0; i < count; i++) {

      this.cells[x - 1][y - 1].value = this.counter + i;
      //console.log('x: ' + x + ', y: ' + y);
      distance++;
      switch (direction) {
        case 'up':
          y += step;
          if (distance >= range) {
            direction = 'right';
            distance = 0;
          }
          break;
        case 'right':
          x += step;
          if (distance >= range) {
            direction = 'bottom';
            distance = 0;
            range += 1;
          }
          break;
        case 'bottom':
          y -= step;
          if (distance >= range) {
            direction = 'left';
            distance = 0;
          }
          break;
        case 'left':
          x -= step;
          if (distance >= range) {
            direction = 'up';
            distance = 0;
            range += 1;
          }
          break;
        default:
          break;
      }
    }

    this.counter++;
  }

  this.walkBackwards = function(x, y, step, count) {
    let distance = 0;
    let range = 1;
    let direction = 'up';

    for (let i = 0; i < count; i++) {

      this.cells[x - 1][y - 1].value = this.counter + i;
      //console.log('x: ' + x + ', y: ' + y);
      distance++;
      switch (direction) {
        case 'up':
          y += step;
          if (distance >= range) {
            direction = 'right';
            distance = 0;
          }
          break;
        case 'right':
          x += step;
          if (distance >= range) {
            direction = 'bottom';
            distance = 0;
            range += 1;
          }
          break;
        case 'bottom':
          y -= step;
          if (distance >= range) {
            direction = 'left';
            distance = 0;
          }
          break;
        case 'left':
          x -= step;
          if (distance >= range) {
            direction = 'up';
            distance = 0;
            range += 1;
          }
          break;
        default:
          break;
      }
    }

    this.counter--;
  }


}