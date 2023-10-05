'use strict';

class ThrowableObject extends MoveableObject {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 75;
    this.offset = { top: 0, bottom: 0, left: 0, right: 0 };
    this.speedX = 20;
    this.speedY = 30;
    this.acceleration = 3;
    this.imagesThrowing = [
      'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
      'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
      'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
      'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    this.imagesSplashing = [
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
      'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    this.loadImage(this.imagesThrowing[1]);
    this.loadImages(this.imagesThrowing);
    this.loadImages(this.imagesSplashing);
    this.splashAudio = new Audio('audio/bottleSplash.mp3');
    this.throw();
    this.animate();
  }

  throw() {
    this.applyGravity();
    setInterval(() => {
      this.x += this.speedX;
    }, 50);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.imagesThrowing);
    }, 1000 / 10);
  }
}
