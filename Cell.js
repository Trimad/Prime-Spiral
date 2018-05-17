"use strict"

function Cell(_size) {

  this.value = -1;
  this.prime = false;
  this.size = _size;

  this.pg = createGraphics(this.size, this.size);
  this.pg.textAlign(CENTER);
  this.pg.textSize(this.size * 0.3);
  this.show = function() {
    
    if (this.prime) {

      if (showTexture) {
        this.pg.background(255);
        this.pg.fill(0);
        this.pg.text(this.value, this.size / 2, this.size / 2);
        texture(this.pg);
      } else {
        specularMaterial(255);
      }

    } else if (!this.prime) {

      if (showTexture) {
        this.pg.background(0);
        this.pg.fill(255);
        this.pg.text(this.value, this.size / 2, this.size / 2);
        texture(this.pg);
      } else {
        specularMaterial(32);
      }

    }

    plane(this.size);

  }

}