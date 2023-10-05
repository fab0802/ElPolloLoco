'use strict';

class World {
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.keyboard = keyboard;
    this.cameraX = 0;
    this.level = level1;
    this.character = new Character(this);
    this.statusBarHealth = new StatusBarHealth();
    this.statusBarCoin = new StatusBarCoin();
    this.statusBarBottle = new StatusBarBottle();
    this.throwableObjects = [];
    this.isBottleThrown = false;
    this.drawWorld();
    this.run();
  }

  run() {
    setInterval(() => {
      this.checkEnemyCollisions();
      this.checkCoinCollisions();
      this.checkBottleCollisions();
      this.checkThrowObject();
      this.checkThrowableObjectCollision();
    }, 1000 / 25);
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBarHealth.setValue(this.character.energy);
      }
    });
  }

  checkCoinCollisions() {
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {
        this.character.collectCoin();
        this.character.collectCoinSound.play();
        this.removeObject(this.level.coins, coin);
        this.statusBarCoin.setValue(this.character.coins);
      }
    });
  }

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.character.collectBottle();
        this.character.collectBottleSound.play();
        this.removeObject(this.level.bottles, bottle);
        this.statusBarBottle.setValue(this.character.bottles);
      }
    });
  }

  removeObject(objectArray, object) {
    const index = objectArray.indexOf(object);
    objectArray.splice(index, 1);
  }

  checkThrowObject() {
    if (this.keyboard.d && this.character.bottles > 0 && !this.isBottleThrown) {
      const bottle = new ThrowableObject(
        this.character.x + this.character.width - this.character.offset.right,
        this.character.y + this.character.offset.top
      );
      this.isBottleThrown = true;
      this.character.throwSound.play();
      this.character.bottles--;
      this.statusBarBottle.setValue(this.character.bottles);
      this.throwableObjects.push(bottle);
    }
  }

  checkThrowableObjectCollision() {
    this.throwableObjects.forEach((throwableObject, throwableObjectIndex) => {
      this.checkThrowableObjectEnemyCollision(
        throwableObject,
        throwableObjectIndex
      );
      this.checkThrowableObjectGroundCollision(
        throwableObject,
        throwableObjectIndex
      );
    });
  }

  checkThrowableObjectEnemyCollision(throwableObject, throwableObjectIndex) {
    this.level.enemies.forEach((enemy) => {
      if (enemy.isColliding(throwableObject)) {
        throwableObject.playAnimation(throwableObject.imagesSplashing);
        throwableObject.splashAudio.play();
        setTimeout(() => {
          this.removeObject(this.throwableObjects, throwableObjectIndex);
        }, 100);
        this.isBottleThrown = false;
        console.log(enemy);
      }
    });
  }

  checkThrowableObjectGroundCollision(throwableObject, throwableObjectIndex) {
    if (!throwableObject.isAboveGround()) {
      throwableObject.playAnimation(throwableObject.imagesSplashing);
      throwableObject.splashAudio.play();
      setTimeout(() => {
        this.removeObject(this.throwableObjects, throwableObjectIndex);
      }, 25);
      this.isBottleThrown = false;
      console.log(throwableObject);
    }
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectToMap(this.character);

    this.ctx.translate(-this.cameraX, 0);

    this.addObjectToMap(this.statusBarHealth);
    this.addObjectToMap(this.statusBarCoin);
    this.addObjectToMap(this.statusBarBottle);

    requestAnimationFrame(() => this.drawWorld());
  }

  addObjectToMap(object) {
    if (object.otherDirection) object.flipImage(this.ctx);

    object.drawObject(this.ctx);
    object.drawObjectFrame(this.ctx);

    if (object.otherDirection) object.flipImageBack(this.ctx);
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addObjectToMap(object);
    });
  }
}
