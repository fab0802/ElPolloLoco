'use strict';

class MoveableObject extends DrawableObject {
  constructor() {
    super();
    this.lastHit = 0;
    this.coins;
    this.bottles;
    this.collectCoinSound = new Audio('audio/collectCoin.mp3');
    this.collectBottleSound = new Audio('audio/collectBottle.mp3');
    this.isHurtSound = new Audio('audio/characterHurt.mp3');
    this.throwSound = new Audio('audio/characterThrow.mp3');
    this.characterJumpSound = new Audio('audio/characterJump.mp3');
  }

  moveLeft() {
    this.x -= this.speedX;
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
    if (this instanceof ThrowableObject) return true;
    return this.y < 225;
  }

  isColliding(object) {
    return (
      this.x + this.offset.left + this.width - this.offset.right >=
        object.x + object.offset.left &&
      this.x + this.offset.left <=
        object.x + object.offset.left + object.width - object.offset.right &&
      this.y + this.offset.top + this.height - this.offset.bottom >=
        object.y + object.offset.top &&
      this.y + this.offset.top <=
        object.y + object.height - object.offset.bottom
    );
  }

  isDead() {
    return this.energy === 0;
  }

  isHurt() {
    const timepassed = (new Date().getTime() - this.lastHit) / 1000;
    return timepassed < 1;
  }

  hit() {
    if (this.energy > 0 && !this.isHurt()) {
      this.energy -= 1;
      this.lastHit = new Date().getTime();
      this.isHurtSound.play();
    }
  }

  collectCoin() {
    if (this.coins < 5) {
      this.collectCoinSound.play();
      this.coins++;
    }
  }

  collectBottle() {
    if (this.bottles < 5) {
      this.collectBottleSound.play();
      this.bottles++;
    }
  }
}
