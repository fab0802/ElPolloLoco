'use strict';

class MoveableObject extends DrawableObject {
  constructor() {
    super();
  }

  moveLeft() {
    this.x -= this.speedX;
  }
}
