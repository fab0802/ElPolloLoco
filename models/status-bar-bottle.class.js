'use strict';

class StatusBarBottle extends DrawableObject {
  constructor() {
    super();
    this.x = 30;
    this.y = 100;
    this.width = 200;
    this.height = 50;
    this.images = [
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
      'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png',
    ];
    this.loadImage(this.images[0]);
    this.loadImages(this.images);
  }
}
