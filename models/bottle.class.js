'use strict';

class Bottle extends MoveableObject {
  constructor(x, y, index) {
    super();
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 75;
    this.images = [
      'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
      'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    this.loadImage(this.images[index]);
    this.loadImages(this.images);
  }
}
