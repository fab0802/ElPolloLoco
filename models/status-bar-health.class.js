'use strict';

class StatusBarHealth extends DrawableObject {
  constructor() {
    super();
    this.x = -40;
    this.y = 0;
    this.width = 200;
    this.height = 50;
    this.images = [
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
      'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];
    this.loadImage(this.images[0]);
    this.loadImages(this.images);
  }
}
