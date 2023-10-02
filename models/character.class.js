'use strict';

class Character extends MoveableObject {
  constructor(world) {
    super();
    this.world = world;
    this.x = 50;
    this.y = 228;
    this.width = 100;
    this.height = 200;
    this.offset = { top: 80, bottom: 100, left: 20, right: 45 };
    this.speedX = 10;
    this.speedY = 0;
    this.acceleration = 1;
    this.energy = 5;
    this.coins = 0;
    this.bottles = 0;
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
    this.imagesHurt = [
      'img/2_character_pepe/4_hurt/H-41.png',
      'img/2_character_pepe/4_hurt/H-42.png',
      'img/2_character_pepe/4_hurt/H-43.png',
    ];
    this.imagesDead = [
      'img/2_character_pepe/5_dead/D-51.png',
      'img/2_character_pepe/5_dead/D-52.png',
      'img/2_character_pepe/5_dead/D-53.png',
      'img/2_character_pepe/5_dead/D-54.png',
      'img/2_character_pepe/5_dead/D-55.png',
      'img/2_character_pepe/5_dead/D-56.png',
      'img/2_character_pepe/5_dead/D-57.png',
    ];
    this.loadImage(this.imagesWalking[0]);
    this.loadImages(this.imagesWalking);
    this.loadImages(this.imagesJumping);
    this.loadImages(this.imagesHurt);
    this.loadImages(this.imagesDead);
    this.walkingSound = new Audio('audio/walking.mp3');
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walkingSound.pause();
      if (this.world.keyboard.up && !this.isAboveGround()) this.jump();

      if (this.world.keyboard.right && this.x < this.world.level.levelEndX) {
        this.moveRight();
        this.playAnimation(this.imagesWalking);
        this.otherDirection = false;
        this.walkingSound.play();
      }

      if (this.world.keyboard.left && this.x > 0) {
        this.moveLeft();
        this.playAnimation(this.imagesWalking);
        this.otherDirection = true;
        this.walkingSound.play();
      }

      if (this.isAboveGround()) this.playAnimation(this.imagesJumping);

      if (this.isHurt()) this.playAnimation(this.imagesHurt);
      if (this.isDead()) this.playAnimation(this.imagesDead);

      this.world.cameraX = -this.x + 100;
    }, 1000 / 25);
  }

  moveRight() {
    this.x += this.speedX;
  }

  moveLeft() {
    this.x -= this.speedX;
  }

  jump() {
    this.speedY = 15;
    this.characterJumpSound.play();
  }
}
