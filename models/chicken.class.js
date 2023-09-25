'use strict';

class Chicken extends MoveableObject {
  constructor() {
    super();
    this.x = Math.random() * 480 + 120;
    this.y = 370;
    this.width = 50;
    this.height = 50;
    this.speedX = 0.15 + Math.random() * 0.25;
    this.imagesWalking = [
      'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
      'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
      'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    this.loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
      const i = this.currentImage % this.imagesWalking.length;
      const path = this.imagesWalking[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 25);
  }
}
