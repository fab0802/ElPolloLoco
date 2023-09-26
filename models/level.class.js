'use strict';

class Level {
  constructor(enemies, clouds, coins, bottles, statusBars, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottles;
    this.statusBars = statusBars;
    this.backgroundObjects = backgroundObjects;
    this.levelEndX = 2200;
  }
}
