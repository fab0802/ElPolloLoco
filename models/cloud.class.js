'use strict';

class Cloud extends MoveableObject {
  constructor() {
    super();
    this.x = Math.random() * 480 + 120;
    this.y = 10;
    this.width = 500;
    this.height = 250;
    this.speedX = 1;
    this.loadImage('img/5_background/layers/4_clouds/1.png');
    this.animate();
  }
}
