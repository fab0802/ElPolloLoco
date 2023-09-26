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
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.cameraX, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectToMap(this.character);

    this.ctx.translate(-this.cameraX, 0);

    requestAnimationFrame(() => this.drawWorld());
  }

  addObjectToMap(object) {
    if (object.otherDirection) {
      this.ctx.save();
      this.ctx.translate(object.width, 0);
      this.ctx.scale(-1, 1);
      object.x = object.x * -1;
    }
    this.ctx.drawImage(
      object.img,
      object.x,
      object.y,
      object.width,
      object.height
    );
    if (object.otherDirection) {
      object.x = object.x * -1;
      this.ctx.restore();
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addObjectToMap(object);
    });
  }
}
