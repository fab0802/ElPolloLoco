'use strict';

class MoveableObject extends DrawableObject {
  constructor() {
    super();
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

  moveLeft() {
    this.x -= this.speedX;
  }
}
