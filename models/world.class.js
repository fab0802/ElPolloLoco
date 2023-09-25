'use strict';

class World {
  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.keyboard = keyboard;
    this.backgroundObjects = [
      new BackgroundObjects('img/5_background/layers/air.png', 0),
      new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
      new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
      new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),
    ];
    this.character = new Character(this);
    this.enemies = [new Chicken(), new Chicken(), new Chicken()];
    this.clouds = [new Cloud()];
    this.drawWorld();
  }

  drawWorld() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.clouds);
    this.addObjectToMap(this.character);

    requestAnimationFrame(() => this.drawWorld());
  }

  addObjectToMap(object) {
    this.ctx.drawImage(
      object.img,
      object.x,
      object.y,
      object.width,
      object.height
    );
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addObjectToMap(object);
    });
  }
}
