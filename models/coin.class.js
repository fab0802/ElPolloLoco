'use strict';

class Coin extends DrawableObject {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.images = ['img/8_coin/coin_1.png', 'img/8_coin/coin_2.png'];

    this.loadImage(this.images[0]);
    this.loadImages(this.images);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.images);
    }, 1000 / 2.5);
  }
}
