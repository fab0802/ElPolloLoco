'use strict';

class Character extends MoveableObject {
  constructor(world) {
    super();
    this.world = world;
    this.x = 50;
    this.y = 228;
    this.width = 100;
    this.height = 200;
    this.speedX = 50;
    this.speedY = 0;
    this.acceleration = 0.5;
    this.imagesWalking = [
      'img/2_character_pepe/2_walk/W-21.png',
      'img/2_character_pepe/2_walk/W-22.png',
      'img/2_character_pepe/2_walk/W-23.png',
      'img/2_character_pepe/2_walk/W-24.png',
      'img/2_character_pepe/2_walk/W-25.png',
      'img/2_character_pepe/2_walk/W-26.png',
    ];
    this.imagesJumping = [
      'img/2_character_pepe/3_jump/J-31.png',
      'img/2_character_pepe/3_jump/J-32.png',
      'img/2_character_pepe/3_jump/J-33.png',
      'img/2_character_pepe/3_jump/J-34.png',
      'img/2_character_pepe/3_jump/J-35.png',
      'img/2_character_pepe/3_jump/J-36.png',
      'img/2_character_pepe/3_jump/J-37.png',
      'img/2_character_pepe/3_jump/J-38.png',
      'img/2_character_pepe/3_jump/J-39.png',
    ];
    this.loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesJumping);
    this.applyGravity();
    this.animate();
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 225;
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.right) {
        this.moveRight();
        this.playAnimation(this.imagesWalking);
        this.otherDirection = false;
      }
      if (this.world.keyboard.left) {
        this.moveLeft();
        this.playAnimation(this.imagesWalking);
        this.otherDirection = true;
      }
      this.world.cameraX = -this.x;
      if (this.isAboveGround()) {
        this.playAnimation(this.imagesJumping);
      }
      if (this.world.keyboard.up && !this.isAboveGround()) {
        this.jump();
      }
    }, 1000 / 25);
  }

  playAnimation(images) {
    const i = this.currentImage % images.length;
    const path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speedX;
  }

  moveLeft() {
    this.x -= this.speedX;
  }

  jump() {
    this.speedY = 10;
  }
}
