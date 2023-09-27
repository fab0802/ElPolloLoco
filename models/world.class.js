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
    this.StatusBarBottle = new StatusBarBottle();
    this.drawWorld();
    this.checkEnemyCollisions();
    this.checkCoinCollisions();
    this.checkBottleCollisions();
  }

  checkEnemyCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.statusBarHealth.setValue(this.character.energy);
        }
      });
    }, 1000 / 25);
  }

  checkCoinCollisions() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.character.collectCoin();
          this.removeObject(this.level.coins, coin);
          this.statusBarCoin.setValue(this.character.coins);
        }
      });
    }, 1000 / 60);
  }

  checkBottleCollisions() {
    setInterval(() => {
      this.level.bottles.forEach((bottle) => {
        if (this.character.isColliding(bottle)) {
          this.character.collectBottle();
          this.removeObject(this.level.bottles, bottle);
          this.StatusBarBottle.setValue(this.character.bottles);
        }
      });
    }, 1000 / 60);
  }

  removeObject(objectArray, object) {
    const index = objectArray.indexOf(object);
    objectArray.splice(index, 1);
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectToMap(this.character);

    this.ctx.translate(-this.cameraX, 0);

    this.addObjectToMap(this.statusBarHealth);
    this.addObjectToMap(this.statusBarCoin);
    this.addObjectToMap(this.StatusBarBottle);

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
