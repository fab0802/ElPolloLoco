'use strict';

class World {
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.keyboard = keyboard;
    this.cameraX = 0;
    this.level = level1;
    this.character = new Character(this);
    this.drawWorld();
    this.checkCollisions();
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) console.log('kollison');
      });
    }, 1000 / 25);
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.statusBars);
    this.addObjectToMap(this.character);

    this.ctx.translate(-this.cameraX, 0);

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
