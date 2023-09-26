'use strict';

class DrawableObject {
  constructor() {
    this.img;
    this.imageCache = {};
    this.currentImage = 0;
    this.otherDirection = false;
  }
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(imagesPath) {
    imagesPath.forEach((path) => {
      const img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 25);
  }

  playAnimation(images) {
    const i = this.currentImage % images.length;
    const path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  drawObject(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawObjectFrame(ctx) {
    if (this instanceof Character) this.drawFrame(ctx, 'blue');
    if (this instanceof Chicken) this.drawFrame(ctx, 'red');
    if (this instanceof Coin) this.drawFrame(ctx, 'purple');
    if (this instanceof Bottle) this.drawFrame(ctx, 'yellow');
    if (this instanceof Endboss) this.drawFrame(ctx, 'orange');
  }

  drawFrame(ctx, color) {
    ctx.beginPath();
    ctx.lineWidth = '1';
    ctx.strokeStyle = color;
    ctx.rect(
      this.x + this.offset.left,
      this.y + this.offset.top,
      this.width - this.offset.right,
      this.height - this.offset.bottom
    );
    ctx.stroke();
  }

  flipImage(ctx) {
    ctx.save();
    ctx.translate(this.width, 0);
    ctx.scale(-1, 1);
    this.x = this.x * -1;
  }

  flipImageBack(ctx) {
    this.x = this.x * -1;
    ctx.restore();
  }
}
