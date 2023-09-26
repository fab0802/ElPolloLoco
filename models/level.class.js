'use strict';

class Level {
  constructor(enemies, clouds, coins, bottles, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.coins = coins;
    this.bottles = bottles;
    this.backgroundObjects = backgroundObjects;
    this.levelEndX = 2200;
  }
}
