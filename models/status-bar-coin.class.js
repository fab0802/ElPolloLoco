'use strict';

class StatusBarCoin extends DrawableObject {
  constructor() {
    super();
    this.x = 30;
    this.y = 50;
    this.width = 200;
    this.height = 50;
    this.images = [
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
      'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png',
    ];
    this.loadImage(this.images[0]);
    this.loadImages(this.images);
  }
}
