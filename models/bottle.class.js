'use strict';

class Bottle extends DrawableObject {
  constructor(x, y, index) {
    super();
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 75;
    this.offset = { top: 15, bottom: 25, left: 0, right: 50 };
    this.images = [
      'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
      'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    this.loadImage(this.images[index]);
    this.loadImages(this.images);
    this.setOffset(index);
  }

  setOffset(index) {
    if (index === 0) this.offset.left = 35;
    if (index === 1) this.offset.left = 25;
  }
}
