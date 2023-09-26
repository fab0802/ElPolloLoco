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
}
