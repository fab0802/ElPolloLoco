'use strict';

class Character extends MoveableObject {
  constructor() {
    super();
    this.x = 50;
    this.y = 225;
    this.width = 100;
    this.height = 200;
    this.imagesWalking = [
      'img/2_character_pepe/2_walk/W-21.png',
      'img/2_character_pepe/2_walk/W-22.png',
      'img/2_character_pepe/2_walk/W-23.png',
      'img/2_character_pepe/2_walk/W-24.png',
      'img/2_character_pepe/2_walk/W-25.png',
      'img/2_character_pepe/2_walk/W-26.png',
    ];
    this.loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    this.animate();
  }

  animate() {
    setInterval(() => {
      const i = this.currentImage % this.imagesWalking.length;
      const path = this.imagesWalking[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000 / 25);
  }
}
