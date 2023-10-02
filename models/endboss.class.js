'use strict';

class Endboss extends MoveableObject {
  constructor() {
    super();
    this.x = 2000;
    this.y = 130;
    this.width = 320;
    this.height = 320;
    this.offset = { top: 70, bottom: 5, left: 45, right: 80 };
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
