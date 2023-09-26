'use strict';

class Endboss extends MoveableObject {
  constructor() {
    super();
    this.x = 2000;
    this.y = 20;
    this.width = 450;
    this.height = 450;
    this.offset = { top: 110, bottom: 5, left: 90, right: 150 };
    this.speedX = 10;
    this.imagesWalking = [
      'img/4_enemie_boss_chicken/2_alert/G5.png',
      'img/4_enemie_boss_chicken/2_alert/G6.png',
      'img/4_enemie_boss_chicken/2_alert/G7.png',
      'img/4_enemie_boss_chicken/2_alert/G8.png',
      'img/4_enemie_boss_chicken/2_alert/G9.png',
      'img/4_enemie_boss_chicken/2_alert/G10.png',
      'img/4_enemie_boss_chicken/2_alert/G11.png',
      'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    this.loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.imagesWalking);
    }, 1000 / 5);
  }
}
